create or replace function uuid_from_filename(filename text) returns uuid as
$$
select rtrim(storage.filename(filename), concat('.', storage.extension(filename)))::uuid;
$$ language sql immutable security definer leakproof;


create table if not exists guestbook_entry
(
  id          uuid primary key         not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  user_id    uuid not null references auth.users default auth.uid(),
  updated boolean,
  text  text
);

create or replace function set_updated_at()
  returns trigger as $$
begin
  new.updated_at = now();
  new.updated    = true;
  return new;
end;
$$ language 'plpgsql';

create trigger set_updated_at
  before update
  on guestbook_entry
  for each row
execute procedure set_updated_at();

alter table guestbook_entry enable row level security;
create policy "Everyone can read guestbook entries" on guestbook_entry for select to anon, authenticated using ( true );
create policy "Users can insert their guestbook entries" on guestbook_entry for insert to authenticated with check ( auth.uid() = user_id );
create policy "Users can update their guestbook entries" on guestbook_entry for update to authenticated using ( auth.uid() = user_id );
create policy "Users can delete their guestbook entries" on guestbook_entry for delete to authenticated using ( auth.uid() = user_id );

insert into storage.buckets (id, name, public)
values ('profile_images', 'profile_images', true);

create policy "Everyone can read profile images" on storage.objects for select to anon, authenticated using (
    bucket_id = 'profile_images'
);

create policy "Users can delete their profile image"
  on storage.objects for delete to authenticated
  using (
      bucket_id = 'profile_images' and
      auth.uid() = owner and
      auth.uid() = uuid_from_filename(name)
  );

create policy "Users can update their profile image"
  on storage.objects for update to authenticated
  using (
      bucket_id = 'profile_images' and
      auth.uid() = owner and
      auth.uid() = uuid_from_filename(name)
  );

create policy "Users can upload their profile image"
  on storage.objects for insert to authenticated
  with check (
      bucket_id = 'profile_images' and
      auth.uid() = owner and
      auth.uid() = uuid_from_filename(name)
  );
