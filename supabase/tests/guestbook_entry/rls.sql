begin;
    select plan(12);
    select tests.rls_enabled('guestbook_entry');

    select tests.create_supabase_user('user_1');
    select tests.create_supabase_user('user_2');

    -- insert
    prepare insert_entry as insert into guestbook_entry (text) values ('Test');
    select throws_ok ('insert_entry');
    select tests.authenticate_as('user_1');
    select lives_ok ('insert_entry', 'should be able to insert if authenticated');
    select tests.authenticate_as('user_2');
    select lives_ok ('insert_entry', 'should be able to insert if authenticated');

    -- update
    select tests.clear_authentication();
    prepare update_entry_1 as update guestbook_entry set text = 'updated' where user_id = tests.get_supabase_uid('user_1');
    prepare update_entry_2 as update guestbook_entry set text = 'updated' where user_id = tests.get_supabase_uid('user_2');
    execute update_entry_1;
    select is (
        (select text from guestbook_entry where user_id = tests.get_supabase_uid('user_1')),
        'Test',
        'should not be able to update guestbook entry if not authenticated'
        );
    select tests.authenticate_as('user_1');
    execute update_entry_2;
    select is (
        (select text from guestbook_entry where user_id = tests.get_supabase_uid('user_2')),
        'Test',
        'should not be able to update guestbook entry of another user'
        );
    execute update_entry_1;
    select is (
        (select text from guestbook_entry where user_id = tests.get_supabase_uid('user_1')),
        'updated',
        'should be able to update own guestbook entry'
    );

    -- select
    select tests.clear_authentication();
    select is (
        (select count(id)::integer from guestbook_entry ), 
        2,
        'should be able to read all guestbook entries as anon user'
        );
    select tests.authenticate_as('user_1');
    select is (
        (select count(id)::integer from guestbook_entry ), 
        2,
        'should be able to read all guestbook entries as authenticated user'
        );

    -- delete
    select tests.clear_authentication();
    prepare delete_entry_1 as delete from guestbook_entry where user_id = tests.get_supabase_uid('user_1');
    prepare delete_entry_2 as delete from guestbook_entry where user_id = tests.get_supabase_uid('user_2');
    execute delete_entry_1;
    select is (
        (select count(id)::integer from guestbook_entry ), 
        2,
        'should not be able to delete guestbook entry if not authenticated'
        );
    select tests.authenticate_as('user_1');
    execute delete_entry_2;
    select is (
        (select count(id)::integer from guestbook_entry ), 
        2,
        'should not be able to delete guestbook entry of another user'
        );
    execute delete_entry_1;
    select is (
        (select count(id)::integer from guestbook_entry where user_id = tests.get_supabase_uid('user_1')), 
        0,
        'should be able to delete own guestbook entry'
    );
    execute update_entry_1;

    select * from finish();
rollback;