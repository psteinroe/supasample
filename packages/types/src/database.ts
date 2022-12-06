export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      channel: {
        Row: {
          type: Database['public']['Enums']['channel_type'];
          config: Json | null;
          id: string;
          organisation_id: string;
          created_at: string;
          name: string | null;
          handle: string | null;
          updated_at: string;
          link: string | null;
          provider_id: string | null;
          settings: Json | null;
          external_id: string | null;
          provider_type: Database['public']['Enums']['provider_type'];
          opt_in: boolean | null;
          auto_responder: boolean | null;
          opt_in_template_id: string | null;
          opt_out_template_id: string | null;
          default_welcome_template_id: string | null;
          outside_business_hours_welcome_template_id: string | null;
          status: Database['public']['Enums']['channel_status'];
          active: boolean | null;
          inbox_id: string;
          fts: unknown | null;
        };
        Insert: {
          type: Database['public']['Enums']['channel_type'];
          config?: Json | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          name?: string | null;
          handle?: string | null;
          updated_at?: string;
          link?: string | null;
          provider_id?: string | null;
          settings?: Json | null;
          external_id?: string | null;
          provider_type: Database['public']['Enums']['provider_type'];
          opt_in?: boolean | null;
          auto_responder?: boolean | null;
          opt_in_template_id?: string | null;
          opt_out_template_id?: string | null;
          default_welcome_template_id?: string | null;
          outside_business_hours_welcome_template_id?: string | null;
          status: Database['public']['Enums']['channel_status'];
          active?: boolean | null;
          inbox_id: string;
          fts?: unknown | null;
        };
        Update: {
          type?: Database['public']['Enums']['channel_type'];
          config?: Json | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          name?: string | null;
          handle?: string | null;
          updated_at?: string;
          link?: string | null;
          provider_id?: string | null;
          settings?: Json | null;
          external_id?: string | null;
          provider_type?: Database['public']['Enums']['provider_type'];
          opt_in?: boolean | null;
          auto_responder?: boolean | null;
          opt_in_template_id?: string | null;
          opt_out_template_id?: string | null;
          default_welcome_template_id?: string | null;
          outside_business_hours_welcome_template_id?: string | null;
          status?: Database['public']['Enums']['channel_status'];
          active?: boolean | null;
          inbox_id?: string;
          fts?: unknown | null;
        };
      };
      comment: {
        Row: {
          conversation_id: string;
          message_id: string | null;
          text: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          author_id: string;
          updated_at: string;
        };
        Insert: {
          conversation_id: string;
          message_id?: string | null;
          text?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          author_id?: string;
          updated_at?: string;
        };
        Update: {
          conversation_id?: string;
          message_id?: string | null;
          text?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          author_id?: string;
          updated_at?: string;
        };
      };
      comment_mention: {
        Row: {
          employee_id: string;
          comment_id: string;
          organisation_id: string;
          conversation_id: string;
        };
        Insert: {
          employee_id: string;
          comment_id: string;
          organisation_id?: string;
          conversation_id: string;
        };
        Update: {
          employee_id?: string;
          comment_id?: string;
          organisation_id?: string;
          conversation_id?: string;
        };
      };
      contact: {
        Row: {
          full_name: string | null;
          description: string | null;
          email: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          sms: string | null;
          whatsapp: string | null;
          custom_fields: Json | null;
          instagram: string | null;
          facebook: string | null;
          updated_at: string;
          display_name: string | null;
          google_business_messaging: string | null;
          whatsapp_conversation_id: string | null;
          sms_conversation_id: string | null;
          fts: unknown | null;
          files: Json;
        };
        Insert: {
          full_name?: string | null;
          description?: string | null;
          email?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          sms?: string | null;
          whatsapp?: string | null;
          custom_fields?: Json | null;
          instagram?: string | null;
          facebook?: string | null;
          updated_at?: string;
          display_name?: string | null;
          google_business_messaging?: string | null;
          whatsapp_conversation_id?: string | null;
          sms_conversation_id?: string | null;
          fts?: unknown | null;
        };
        Update: {
          full_name?: string | null;
          description?: string | null;
          email?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          sms?: string | null;
          whatsapp?: string | null;
          custom_fields?: Json | null;
          instagram?: string | null;
          facebook?: string | null;
          updated_at?: string;
          display_name?: string | null;
          google_business_messaging?: string | null;
          whatsapp_conversation_id?: string | null;
          sms_conversation_id?: string | null;
          fts?: unknown | null;
        };
      };
      contact_custom_field: {
        Row: {
          contact_id: string;
          custom_field_id: string;
          value: string | null;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          contact_id: string;
          custom_field_id: string;
          value?: string | null;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          contact_id?: string;
          custom_field_id?: string;
          value?: string | null;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_note: {
        Row: {
          contact_id: string;
          text: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          created_by_id: string | null;
          updated_at: string;
        };
        Insert: {
          contact_id: string;
          text?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          created_by_id?: string | null;
          updated_at?: string;
        };
        Update: {
          contact_id?: string;
          text?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          created_by_id?: string | null;
          updated_at?: string;
        };
      };
      contact_opt_in: {
        Row: {
          contact_id: string;
          channel_type: Database['public']['Enums']['channel_type'];
          opt_in_reason: Database['public']['Enums']['opt_in_reason'] | null;
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          contact_id: string;
          channel_type: Database['public']['Enums']['channel_type'];
          opt_in_reason?: Database['public']['Enums']['opt_in_reason'] | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          contact_id?: string;
          channel_type?: Database['public']['Enums']['channel_type'];
          opt_in_reason?: Database['public']['Enums']['opt_in_reason'] | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      continent: {
        Row: {
          code: string;
          name: string | null;
        };
        Insert: {
          code: string;
          name?: string | null;
        };
        Update: {
          code?: string;
          name?: string | null;
        };
      };
      conversation: {
        Row: {
          subject: string | null;
          assignee_id: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          status: Database['public']['Enums']['conversation_status'];
          unread: boolean | null;
          channel_id: string;
          channel_type: Database['public']['Enums']['channel_type'];
          recipient_id: string | null;
          external_id: string | null;
          tags: Json | null;
          updated_at: string;
          is_spam: boolean;
          inbox_id: string;
          blurb: string | null;
          latest_message_id: string | null;
          latest_inbound_message_id: string | null;
          latest_message_created_at: string | null;
          latest_message_attachment_count: number | null;
          latest_inbound_message_created_at: string | null;
          fts: unknown | null;
          display_date: string;
          files: Json;
          recipient_list: string;
          session_time: number;
        };
        Insert: {
          subject?: string | null;
          assignee_id?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          status?: Database['public']['Enums']['conversation_status'];
          unread?: boolean | null;
          channel_id: string;
          channel_type: Database['public']['Enums']['channel_type'];
          recipient_id?: string | null;
          external_id?: string | null;
          tags?: Json | null;
          updated_at?: string;
          is_spam?: boolean;
          inbox_id: string;
          blurb?: string | null;
          latest_message_id?: string | null;
          latest_inbound_message_id?: string | null;
          latest_message_created_at?: string | null;
          latest_message_attachment_count?: number | null;
          latest_inbound_message_created_at?: string | null;
          fts?: unknown | null;
        };
        Update: {
          subject?: string | null;
          assignee_id?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          status?: Database['public']['Enums']['conversation_status'];
          unread?: boolean | null;
          channel_id?: string;
          channel_type?: Database['public']['Enums']['channel_type'];
          recipient_id?: string | null;
          external_id?: string | null;
          tags?: Json | null;
          updated_at?: string;
          is_spam?: boolean;
          inbox_id?: string;
          blurb?: string | null;
          latest_message_id?: string | null;
          latest_inbound_message_id?: string | null;
          latest_message_created_at?: string | null;
          latest_message_attachment_count?: number | null;
          latest_inbound_message_created_at?: string | null;
          fts?: unknown | null;
        };
      };
      conversation_follower: {
        Row: {
          employee_id: string;
          conversation_id: string;
          last_seen: string | null;
          organisation_id: string;
        };
        Insert: {
          employee_id: string;
          conversation_id: string;
          last_seen?: string | null;
          organisation_id?: string;
        };
        Update: {
          employee_id?: string;
          conversation_id?: string;
          last_seen?: string | null;
          organisation_id?: string;
        };
      };
      conversation_tag: {
        Row: {
          tag_id: string;
          conversation_id: string;
          organisation_id: string;
          created_at: string;
        };
        Insert: {
          tag_id: string;
          conversation_id: string;
          organisation_id?: string;
          created_at?: string;
        };
        Update: {
          tag_id?: string;
          conversation_id?: string;
          organisation_id?: string;
          created_at?: string;
        };
      };
      country: {
        Row: {
          code: string;
          name: string;
          full_name: string;
          iso3: string;
          number: string;
          continent_code: string;
        };
        Insert: {
          code: string;
          name: string;
          full_name: string;
          iso3: string;
          number: string;
          continent_code: string;
        };
        Update: {
          code?: string;
          name?: string;
          full_name?: string;
          iso3?: string;
          number?: string;
          continent_code?: string;
        };
      };
      custom_field: {
        Row: {
          name: string;
          description: string | null;
          id: string;
          organisation_id: string;
          type: Database['public']['Enums']['field_type'];
          updated_at: string;
          created_at: string;
          key: string;
        };
        Insert: {
          name: string;
          description?: string | null;
          id?: string;
          organisation_id?: string;
          type: Database['public']['Enums']['field_type'];
          updated_at?: string;
          created_at?: string;
          key?: string;
        };
        Update: {
          name?: string;
          description?: string | null;
          id?: string;
          organisation_id?: string;
          type?: Database['public']['Enums']['field_type'];
          updated_at?: string;
          created_at?: string;
          key?: string;
        };
      };
      customer: {
        Row: {
          id: string;
          stripe_customer_id: string;
          payment_missing: boolean | null;
        };
        Insert: {
          id: string;
          stripe_customer_id: string;
          payment_missing?: boolean | null;
        };
        Update: {
          id?: string;
          stripe_customer_id?: string;
          payment_missing?: boolean | null;
        };
      };
      employee: {
        Row: {
          user_id: string | null;
          username: string;
          id: string;
          created_at: string;
          is_admin: boolean | null;
          organisation_id: string;
          signature: string | null;
          updated_at: string;
          expo_tokens: string | null;
          full_name: string | null;
          email: string | null;
          display_name: string;
          fts: unknown | null;
          conversation_count: number;
          profile_image: Json;
        };
        Insert: {
          user_id?: string | null;
          username: string;
          id?: string;
          created_at?: string;
          is_admin?: boolean | null;
          organisation_id?: string;
          signature?: string | null;
          updated_at?: string;
          expo_tokens?: string | null;
          full_name?: string | null;
          email?: string | null;
          display_name?: string;
          fts?: unknown | null;
          conversation_count?: number;
        };
        Update: {
          user_id?: string | null;
          username?: string;
          id?: string;
          created_at?: string;
          is_admin?: boolean | null;
          organisation_id?: string;
          signature?: string | null;
          updated_at?: string;
          expo_tokens?: string | null;
          full_name?: string | null;
          email?: string | null;
          display_name?: string;
          fts?: unknown | null;
          conversation_count?: number;
        };
      };
      employee_notification: {
        Row: {
          notification_type: string;
          employee_id: string;
          conversation_id: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
          data: Json | null;
          seen: boolean;
        };
        Insert: {
          notification_type: string;
          employee_id: string;
          conversation_id?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
          data?: Json | null;
        };
        Update: {
          notification_type?: string;
          employee_id?: string;
          conversation_id?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
          data?: Json | null;
        };
      };
      event: {
        Row: {
          conversation_id: string;
          target_id: string | null;
          target_type: Database['public']['Enums']['event_entity_type'] | null;
          metadata: Json | null;
          id: string;
          organisation_id: string;
          created_at: string;
          type: Database['public']['Enums']['event_type'];
          source_type: Database['public']['Enums']['event_entity_type'] | null;
          source_id: string | null;
          source: Json;
          target: Json;
        };
        Insert: {
          conversation_id: string;
          target_id?: string | null;
          target_type?: Database['public']['Enums']['event_entity_type'] | null;
          metadata?: Json | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          type: Database['public']['Enums']['event_type'];
          source_type?: Database['public']['Enums']['event_entity_type'] | null;
          source_id?: string | null;
        };
        Update: {
          conversation_id?: string;
          target_id?: string | null;
          target_type?: Database['public']['Enums']['event_entity_type'] | null;
          metadata?: Json | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          type?: Database['public']['Enums']['event_type'];
          source_type?: Database['public']['Enums']['event_entity_type'] | null;
          source_id?: string | null;
        };
      };
      inbox: {
        Row: {
          name: string;
          id: string;
          organisation_id: string;
          updated_at: string;
          created_at: string;
          conversation_count: number;
        };
        Insert: {
          name: string;
          id?: string;
          organisation_id?: string;
          updated_at?: string;
          created_at?: string;
          conversation_count?: number;
        };
        Update: {
          name?: string;
          id?: string;
          organisation_id?: string;
          updated_at?: string;
          created_at?: string;
          conversation_count?: number;
        };
      };
      inbox_access: {
        Row: {
          inbox_id: string;
          employee_id: string | null;
          team_id: string | null;
          id: string;
          organisation_id: string;
          level: Database['public']['Enums']['inbox_level'];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          inbox_id: string;
          employee_id?: string | null;
          team_id?: string | null;
          id?: string;
          organisation_id?: string;
          level?: Database['public']['Enums']['inbox_level'];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          inbox_id?: string;
          employee_id?: string | null;
          team_id?: string | null;
          id?: string;
          organisation_id?: string;
          level?: Database['public']['Enums']['inbox_level'];
          created_at?: string;
          updated_at?: string;
        };
      };
      industry: {
        Row: {
          key: string;
          comment: string | null;
        };
        Insert: {
          key: string;
          comment?: string | null;
        };
        Update: {
          key?: string;
          comment?: string | null;
        };
      };
      language: {
        Row: {
          code: string;
          name: string;
        };
        Insert: {
          code: string;
          name: string;
        };
        Update: {
          code?: string;
          name?: string;
        };
      };
      locale: {
        Row: {
          code: string;
          english_name: string;
          native_name: string;
        };
        Insert: {
          code: string;
          english_name: string;
          native_name: string;
        };
        Update: {
          code?: string;
          english_name?: string;
          native_name?: string;
        };
      };
      message: {
        Row: {
          conversation_id: string;
          subject: string | null;
          blurb: string | null;
          html: string | null;
          text: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          is_inbound: boolean;
          author_id: string | null;
          status: Database['public']['Enums']['recipient_status'] | null;
          attachment_count: number | null;
          reply_to_message_id: string | null;
          external_files: Json | null;
          external_id: string | null;
          template_id: string | null;
          is_draft: boolean;
          review_channel_id: string | null;
          author_type: Database['public']['Enums']['author_type'] | null;
          author: unknown;
          files: Json;
        };
        Insert: {
          conversation_id: string;
          subject?: string | null;
          blurb?: string | null;
          html?: string | null;
          text?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          is_inbound?: boolean;
          author_id?: string | null;
          status?: Database['public']['Enums']['recipient_status'] | null;
          attachment_count?: number | null;
          reply_to_message_id?: string | null;
          external_files?: Json | null;
          external_id?: string | null;
          template_id?: string | null;
          is_draft?: boolean;
          review_channel_id?: string | null;
          author_type?: Database['public']['Enums']['author_type'] | null;
        };
        Update: {
          conversation_id?: string;
          subject?: string | null;
          blurb?: string | null;
          html?: string | null;
          text?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          is_inbound?: boolean;
          author_id?: string | null;
          status?: Database['public']['Enums']['recipient_status'] | null;
          attachment_count?: number | null;
          reply_to_message_id?: string | null;
          external_files?: Json | null;
          external_id?: string | null;
          template_id?: string | null;
          is_draft?: boolean;
          review_channel_id?: string | null;
          author_type?: Database['public']['Enums']['author_type'] | null;
        };
      };
      notification_preference: {
        Row: {
          notification_type: string;
          opt_in: boolean | null;
          employee_id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          notification_type: string;
          opt_in?: boolean | null;
          employee_id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          notification_type?: string;
          opt_in?: boolean | null;
          employee_id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      notification_type: {
        Row: {
          name: string;
          channel: Database['public']['Enums']['notification_channel'];
          title: string;
          body: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          channel: Database['public']['Enums']['notification_channel'];
          title: string;
          body: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          channel?: Database['public']['Enums']['notification_channel'];
          title?: string;
          body?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      opening_hours: {
        Row: {
          days_of_the_week: number[];
          open_time: string;
          close_time: string;
          id: string;
          created_at: string;
          organisation_id: string;
          updated_at: string;
        };
        Insert: {
          days_of_the_week: number[];
          open_time: string;
          close_time: string;
          id?: string;
          created_at?: string;
          organisation_id?: string;
          updated_at?: string;
        };
        Update: {
          days_of_the_week?: number[];
          open_time?: string;
          close_time?: string;
          id?: string;
          created_at?: string;
          organisation_id?: string;
          updated_at?: string;
        };
      };
      organisation: {
        Row: {
          name: string;
          mobile: string | null;
          landline: string | null;
          email: string | null;
          street: string | null;
          postal_code: string | null;
          city: string | null;
          id: string;
          created_at: string;
          industry: string | null;
          region: string | null;
          iso_country: string | null;
          updated_at: string;
          vat: string | null;
          is_sp: boolean | null;
          sp_full_name: string | null;
          sp_region: string | null;
          sp_postal_code: string | null;
          sp_street: string | null;
          sp_city: string | null;
          data_privacy_url: string | null;
          description: string | null;
          website_url: string | null;
          display_name: string;
          timezone: string;
          locale: string;
          address_line: string | null;
          contact_widget_image: Json;
          favicon: Json;
          logo: Json;
        };
        Insert: {
          name: string;
          mobile?: string | null;
          landline?: string | null;
          email?: string | null;
          street?: string | null;
          postal_code?: string | null;
          city?: string | null;
          id?: string;
          created_at?: string;
          industry?: string | null;
          region?: string | null;
          iso_country?: string | null;
          updated_at?: string;
          vat?: string | null;
          is_sp?: boolean | null;
          sp_full_name?: string | null;
          sp_region?: string | null;
          sp_postal_code?: string | null;
          sp_street?: string | null;
          sp_city?: string | null;
          data_privacy_url?: string | null;
          description?: string | null;
          website_url?: string | null;
          display_name: string;
          timezone: string;
          locale: string;
          address_line?: string | null;
        };
        Update: {
          name?: string;
          mobile?: string | null;
          landline?: string | null;
          email?: string | null;
          street?: string | null;
          postal_code?: string | null;
          city?: string | null;
          id?: string;
          created_at?: string;
          industry?: string | null;
          region?: string | null;
          iso_country?: string | null;
          updated_at?: string;
          vat?: string | null;
          is_sp?: boolean | null;
          sp_full_name?: string | null;
          sp_region?: string | null;
          sp_postal_code?: string | null;
          sp_street?: string | null;
          sp_city?: string | null;
          data_privacy_url?: string | null;
          description?: string | null;
          website_url?: string | null;
          display_name?: string;
          timezone?: string;
          locale?: string;
          address_line?: string | null;
        };
      };
      pinned_assignee: {
        Row: {
          assignee_id: string;
          organisation_id: string;
          employee_id: string;
        };
        Insert: {
          assignee_id: string;
          organisation_id?: string;
          employee_id?: string;
        };
        Update: {
          assignee_id?: string;
          organisation_id?: string;
          employee_id?: string;
        };
      };
      pinned_inbox: {
        Row: {
          inbox_id: string;
          organisation_id: string;
          employee_id: string;
        };
        Insert: {
          inbox_id: string;
          organisation_id?: string;
          employee_id?: string;
        };
        Update: {
          inbox_id?: string;
          organisation_id?: string;
          employee_id?: string;
        };
      };
      price: {
        Row: {
          id: string;
          product_id: string | null;
          description: string | null;
          metadata: Json | null;
          active: boolean | null;
        };
        Insert: {
          id: string;
          product_id?: string | null;
          description?: string | null;
          metadata?: Json | null;
          active?: boolean | null;
        };
        Update: {
          id?: string;
          product_id?: string | null;
          description?: string | null;
          metadata?: Json | null;
          active?: boolean | null;
        };
      };
      product: {
        Row: {
          id: string;
          name: string | null;
          description: string | null;
          metadata: Json | null;
          active: boolean | null;
        };
        Insert: {
          id: string;
          name?: string | null;
          description?: string | null;
          metadata?: Json | null;
          active?: boolean | null;
        };
        Update: {
          id?: string;
          name?: string | null;
          description?: string | null;
          metadata?: Json | null;
          active?: boolean | null;
        };
      };
      provider: {
        Row: {
          external_id: string | null;
          name: string | null;
          status: Database['public']['Enums']['provider_status'];
          rejection_reason: string | null;
          config: Json | null;
          type: Database['public']['Enums']['provider_type'];
          authorised_channel_types:
            | Database['public']['Enums']['channel_type'][]
            | null;
          authorised_review_channel_types:
            | Database['public']['Enums']['review_channel_type'][]
            | null;
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          external_id?: string | null;
          name?: string | null;
          status: Database['public']['Enums']['provider_status'];
          rejection_reason?: string | null;
          config?: Json | null;
          type: Database['public']['Enums']['provider_type'];
          authorised_channel_types?:
            | Database['public']['Enums']['channel_type'][]
            | null;
          authorised_review_channel_types?:
            | Database['public']['Enums']['review_channel_type'][]
            | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          external_id?: string | null;
          name?: string | null;
          status?: Database['public']['Enums']['provider_status'];
          rejection_reason?: string | null;
          config?: Json | null;
          type?: Database['public']['Enums']['provider_type'];
          authorised_channel_types?:
            | Database['public']['Enums']['channel_type'][]
            | null;
          authorised_review_channel_types?:
            | Database['public']['Enums']['review_channel_type'][]
            | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      provider_template_approval: {
        Row: {
          provider_id: string;
          template_id: string;
          status: Database['public']['Enums']['whatsapp_template_status'];
          external_id: string | null;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          provider_id: string;
          template_id: string;
          status: Database['public']['Enums']['whatsapp_template_status'];
          external_id?: string | null;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          provider_id?: string;
          template_id?: string;
          status?: Database['public']['Enums']['whatsapp_template_status'];
          external_id?: string | null;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      recipient: {
        Row: {
          conversation_id: string;
          message_id: string;
          contact_id: string | null;
          handle: string;
          full_name: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          role: Database['public']['Enums']['recipient_role'] | null;
          is_organisation: boolean | null;
          status: Database['public']['Enums']['recipient_status'] | null;
          context: Json | null;
        };
        Insert: {
          conversation_id: string;
          message_id: string;
          contact_id?: string | null;
          handle: string;
          full_name?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          role?: Database['public']['Enums']['recipient_role'] | null;
          is_organisation?: boolean | null;
          status?: Database['public']['Enums']['recipient_status'] | null;
          context?: Json | null;
        };
        Update: {
          conversation_id?: string;
          message_id?: string;
          contact_id?: string | null;
          handle?: string;
          full_name?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          role?: Database['public']['Enums']['recipient_role'] | null;
          is_organisation?: boolean | null;
          status?: Database['public']['Enums']['recipient_status'] | null;
          context?: Json | null;
        };
      };
      review: {
        Row: {
          review_channel_id: string;
          external_id: string | null;
          comment: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          has_reply: boolean;
          star_rating: number;
          updated_at: string;
        };
        Insert: {
          review_channel_id: string;
          external_id?: string | null;
          comment?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          has_reply?: boolean;
          star_rating: number;
          updated_at?: string;
        };
        Update: {
          review_channel_id?: string;
          external_id?: string | null;
          comment?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          has_reply?: boolean;
          star_rating?: number;
          updated_at?: string;
        };
      };
      review_channel: {
        Row: {
          type: Database['public']['Enums']['review_channel_type'];
          id: string;
          organisation_id: string;
          created_at: string;
          external_id: string | null;
          config: Json | null;
          active: boolean | null;
          name: string | null;
          updated_at: string;
          provider_id: string | null;
          welcome_text: string | null;
          link: string | null;
          new_review_link: string | null;
          provider_type: Database['public']['Enums']['provider_type'];
          handle: string;
          review_app_link: string | null;
          request_for_review_template_id: string | null;
          organisation_logo: Json;
        };
        Insert: {
          type: Database['public']['Enums']['review_channel_type'];
          id?: string;
          organisation_id?: string;
          created_at?: string;
          external_id?: string | null;
          config?: Json | null;
          active?: boolean | null;
          name?: string | null;
          updated_at?: string;
          provider_id?: string | null;
          welcome_text?: string | null;
          link?: string | null;
          new_review_link?: string | null;
          provider_type: Database['public']['Enums']['provider_type'];
          handle: string;
          review_app_link?: string | null;
          request_for_review_template_id?: string | null;
        };
        Update: {
          type?: Database['public']['Enums']['review_channel_type'];
          id?: string;
          organisation_id?: string;
          created_at?: string;
          external_id?: string | null;
          config?: Json | null;
          active?: boolean | null;
          name?: string | null;
          updated_at?: string;
          provider_id?: string | null;
          welcome_text?: string | null;
          link?: string | null;
          new_review_link?: string | null;
          provider_type?: Database['public']['Enums']['provider_type'];
          handle?: string;
          review_app_link?: string | null;
          request_for_review_template_id?: string | null;
        };
      };
      reviewer: {
        Row: {
          profile_photo_url: string | null;
          display_name: string | null;
          review_id: string;
          id: string;
          organisation_id: string;
          created_at: string;
          is_anonymous: boolean | null;
          updated_at: string;
        };
        Insert: {
          profile_photo_url?: string | null;
          display_name?: string | null;
          review_id: string;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          is_anonymous?: boolean | null;
          updated_at?: string;
        };
        Update: {
          profile_photo_url?: string | null;
          display_name?: string | null;
          review_id?: string;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          is_anonymous?: boolean | null;
          updated_at?: string;
        };
      };
      setting: {
        Row: {
          name: string;
          value: string;
        };
        Insert: {
          name: string;
          value: string;
        };
        Update: {
          name?: string;
          value?: string;
        };
      };
      subscription: {
        Row: {
          id: string;
          organisation_id: string;
          status: Database['public']['Enums']['subscription_status'] | null;
          metadata: Json | null;
        };
        Insert: {
          id: string;
          organisation_id: string;
          status?: Database['public']['Enums']['subscription_status'] | null;
          metadata?: Json | null;
        };
        Update: {
          id?: string;
          organisation_id?: string;
          status?: Database['public']['Enums']['subscription_status'] | null;
          metadata?: Json | null;
        };
      };
      subscription_item: {
        Row: {
          id: string;
          subscription_id: string;
          price_id: string;
          metadata: Json | null;
          quantity: number | null;
        };
        Insert: {
          id: string;
          subscription_id: string;
          price_id: string;
          metadata?: Json | null;
          quantity?: number | null;
        };
        Update: {
          id?: string;
          subscription_id?: string;
          price_id?: string;
          metadata?: Json | null;
          quantity?: number | null;
        };
      };
      tag: {
        Row: {
          name: string;
          color: string;
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          color: string;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          color?: string;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      team: {
        Row: {
          name: string;
          id: string;
          is_default: boolean;
          organisation_id: string;
          updated_at: string;
          created_at: string;
        };
        Insert: {
          name: string;
          id?: string;
          is_default?: boolean;
          organisation_id?: string;
          updated_at?: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          id?: string;
          is_default?: boolean;
          organisation_id?: string;
          updated_at?: string;
          created_at?: string;
        };
      };
      team_member: {
        Row: {
          team_id: string;
          employee_id: string;
          organisation_id: string;
          updated_at: string;
          created_at: string;
        };
        Insert: {
          team_id: string;
          employee_id: string;
          organisation_id?: string;
          updated_at?: string;
          created_at?: string;
        };
        Update: {
          team_id?: string;
          employee_id?: string;
          organisation_id?: string;
          updated_at?: string;
          created_at?: string;
        };
      };
      template: {
        Row: {
          name: string;
          hint: string | null;
          subject: string | null;
          html: string | null;
          text: string | null;
          metadata: Json | null;
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
          request_approvals: boolean | null;
          not_user_selectable: boolean | null;
          category: Database['public']['Enums']['template_category'] | null;
          language: string;
          key: string;
          files: Json;
          whatsapp_status: Database['public']['Enums']['whatsapp_template_status'];
        };
        Insert: {
          name: string;
          hint?: string | null;
          subject?: string | null;
          html?: string | null;
          text?: string | null;
          metadata?: Json | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
          request_approvals?: boolean | null;
          not_user_selectable?: boolean | null;
          category?: Database['public']['Enums']['template_category'] | null;
          language: string;
          key?: string;
        };
        Update: {
          name?: string;
          hint?: string | null;
          subject?: string | null;
          html?: string | null;
          text?: string | null;
          metadata?: Json | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
          request_approvals?: boolean | null;
          not_user_selectable?: boolean | null;
          category?: Database['public']['Enums']['template_category'] | null;
          language?: string;
          key?: string;
        };
      };
      timezone: {
        Row: {
          name: string;
          abbrev: string;
          utc_offset_minutes: number;
        };
        Insert: {
          name: string;
          abbrev: string;
        };
        Update: {
          name?: string;
          abbrev?: string;
        };
      };
      voice_call: {
        Row: {
          external_id: string;
          channel_id: string;
          from: string | null;
          duration: number | null;
          status: Database['public']['Enums']['call_status'];
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          external_id: string;
          channel_id: string;
          from?: string | null;
          duration?: number | null;
          status: Database['public']['Enums']['call_status'];
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          external_id?: string;
          channel_id?: string;
          from?: string | null;
          duration?: number | null;
          status?: Database['public']['Enums']['call_status'];
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      web_widget: {
        Row: {
          color: string | null;
          welcome_message: string | null;
          whatsapp_channel_id: string | null;
          sms_channel_id: string | null;
          facebook_channel_id: string | null;
          instagram_channel_id: string | null;
          email_channel_id: string | null;
          id: string;
          organisation_id: string;
          created_at: string;
          updated_at: string;
          name: string;
          background_color: string | null;
          data_privacy_url: string;
          email_channel_link: string;
          facebook_channel_link: string;
          instagram_channel_link: string;
          organisation_name: string;
          sms_channel_link: string;
          whatsapp_channel_link: string;
        };
        Insert: {
          color?: string | null;
          welcome_message?: string | null;
          whatsapp_channel_id?: string | null;
          sms_channel_id?: string | null;
          facebook_channel_id?: string | null;
          instagram_channel_id?: string | null;
          email_channel_id?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
          background_color?: string | null;
        };
        Update: {
          color?: string | null;
          welcome_message?: string | null;
          whatsapp_channel_id?: string | null;
          sms_channel_id?: string | null;
          facebook_channel_id?: string | null;
          instagram_channel_id?: string | null;
          email_channel_id?: string | null;
          id?: string;
          organisation_id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
          background_color?: string | null;
        };
      };
    };
    Views: {
      channel_link: {
        Row: {
          id: string | null;
          link: string | null;
        };
        Insert: {
          id?: string | null;
          link?: string | null;
        };
        Update: {
          id?: string | null;
          link?: string | null;
        };
      };
      pg_all_foreign_keys: {
        Row: {
          fk_schema_name: unknown | null;
          fk_table_name: unknown | null;
          fk_constraint_name: unknown | null;
          fk_table_oid: unknown | null;
          fk_columns: unknown[] | null;
          pk_schema_name: unknown | null;
          pk_table_name: unknown | null;
          pk_constraint_name: unknown | null;
          pk_table_oid: unknown | null;
          pk_index_name: unknown | null;
          pk_columns: unknown[] | null;
          match_type: string | null;
          on_delete: string | null;
          on_update: string | null;
          is_deferrable: boolean | null;
          is_deferred: boolean | null;
        };
      };
      public_organisation_profile: {
        Row: {
          id: string | null;
          data_privacy_url: string | null;
          display_name: string | null;
          website_url: string | null;
          description: string | null;
        };
        Insert: {
          id?: string | null;
          data_privacy_url?: string | null;
          display_name?: string | null;
          website_url?: string | null;
          description?: string | null;
        };
        Update: {
          id?: string | null;
          data_privacy_url?: string | null;
          display_name?: string | null;
          website_url?: string | null;
          description?: string | null;
        };
      };
      public_review_channel: {
        Row: {
          id: string | null;
          handle: string | null;
          link: string | null;
          new_review_link: string | null;
          type: Database['public']['Enums']['review_channel_type'] | null;
          organisation_id: string | null;
          welcome_text: string | null;
          organisation_name: string | null;
          name: string | null;
        };
      };
      tap_funky: {
        Row: {
          oid: unknown | null;
          schema: unknown | null;
          name: unknown | null;
          owner: unknown | null;
          args: string | null;
          returns: string | null;
          langoid: unknown | null;
          is_strict: boolean | null;
          kind: unknown | null;
          is_definer: boolean | null;
          returns_set: boolean | null;
          volatility: string | null;
          is_visible: boolean | null;
        };
      };
    };
    Functions: {
      _cleanup: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      _contract_on: {
        Args: { '': string };
        Returns: unknown;
      };
      _currtest: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      _db_privs: {
        Args: Record<PropertyKey, never>;
        Returns: unknown[];
      };
      _definer: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _dexists: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _expand_context: {
        Args: { '': string };
        Returns: string;
      };
      _expand_on: {
        Args: { '': string };
        Returns: string;
      };
      _expand_vol: {
        Args: { '': string };
        Returns: string;
      };
      _ext_exists: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _extensions:
        | {
            Args: { '': unknown };
            Returns: unknown;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: unknown;
          };
      _funkargs: {
        Args: { '': unknown };
        Returns: string;
      };
      _get: {
        Args: { '': string };
        Returns: number;
      };
      _get_db_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _get_dtype: {
        Args: { '': unknown };
        Returns: string;
      };
      _get_language_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _get_latest: {
        Args: { '': string };
        Returns: number[];
      };
      _get_note:
        | {
            Args: { '': string };
            Returns: string;
          }
        | {
            Args: { '': number };
            Returns: string;
          };
      _get_opclass_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _get_rel_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _get_schema_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _get_tablespace_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _get_type_owner: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _got_func: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _grolist: {
        Args: { '': unknown };
        Returns: unknown[];
      };
      _has_group: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _has_role: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _has_user: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _inherited: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _is_schema: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _is_super: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _is_trusted: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _is_verbose: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      _lang: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _opc_exists: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _parts: {
        Args: { '': unknown };
        Returns: unknown;
      };
      _pg_sv_type_array: {
        Args: { '': unknown };
        Returns: unknown[];
      };
      _prokind: {
        Args: { p_oid: unknown };
        Returns: unknown;
      };
      _query: {
        Args: { '': string };
        Returns: string;
      };
      _refine_vol: {
        Args: { '': string };
        Returns: string;
      };
      _relexists: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _returns: {
        Args: { '': unknown };
        Returns: string;
      };
      _strict: {
        Args: { '': unknown };
        Returns: boolean;
      };
      _table_privs: {
        Args: Record<PropertyKey, never>;
        Returns: unknown[];
      };
      _temptypes: {
        Args: { '': string };
        Returns: string;
      };
      _todo: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      _vol: {
        Args: { '': unknown };
        Returns: string;
      };
      accept_employee_invite: {
        Args: { employee_id: string };
        Returns: unknown;
      };
      accessable_channels: {
        Args: {
          v_search: string;
          v_channel_type: Database['public']['Enums']['channel_type'];
        };
        Returns: Record<string, unknown>[];
      };
      accessable_inboxes: {
        Args: {
          v_level: Database['public']['Enums']['inbox_level'];
          v_search: string;
        };
        Returns: Record<string, unknown>[];
      };
      accessable_pinned_inboxes: {
        Args: {
          v_level: Database['public']['Enums']['inbox_level'];
          v_search: string;
        };
        Returns: Record<string, unknown>[];
      };
      auth_header: {
        Args: { prefer_service_role: boolean };
        Returns: string;
      };
      author: {
        Args: { '': unknown };
        Returns: unknown;
      };
      broadcast_message: {
        Args: {
          v_conversation_input: unknown;
          v_message_input: unknown;
          v_recipients_input: unknown;
          v_channels: unknown;
        };
        Returns: Json;
      };
      build_notification_payload: {
        Args: { v_notification_type: string; v_input: unknown };
        Returns: Json;
      };
      build_submit_message_payload: {
        Args: { v_message_id: string };
        Returns: Json;
      };
      can: {
        Args: { '': unknown };
        Returns: string;
      };
      can_upsert_twilio_provider: {
        Args: { v_organisation_id: string };
        Returns: string[];
      };
      cascade_entity_deletion: {
        Args: {
          v_type: Database['public']['Enums']['event_entity_type'];
          v_id: string;
        };
        Returns: undefined;
      };
      casts_are: {
        Args: { '': unknown };
        Returns: string;
      };
      check_for_duplicates: {
        Args: { v_array: unknown };
        Returns: boolean;
      };
      col_is_null:
        | {
            Args: {
              schema_name: unknown;
              table_name: unknown;
              column_name: unknown;
              description: string;
            };
            Returns: string;
          }
        | {
            Args: {
              table_name: unknown;
              column_name: unknown;
              description: string;
            };
            Returns: string;
          };
      col_not_null:
        | {
            Args: {
              schema_name: unknown;
              table_name: unknown;
              column_name: unknown;
              description: string;
            };
            Returns: string;
          }
        | {
            Args: {
              table_name: unknown;
              column_name: unknown;
              description: string;
            };
            Returns: string;
          };
      collect_tap:
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          }
        | {
            Args: { '': unknown };
            Returns: string;
          };
      contact_widget_image: {
        Args: { '': unknown };
        Returns: Json;
      };
      conversation_chat: {
        Args: { v_conversation_id: string };
        Returns: Record<string, unknown>[];
      };
      conversation_follower_events: {
        Args: { employee: string };
        Returns: Record<string, unknown>[];
      };
      create_conversation: {
        Args: {
          v_conversation_input: unknown;
          v_message_input: unknown;
          v_recipients_input: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      data_privacy_url: {
        Args: { '': unknown };
        Returns: string;
      };
      diag:
        | {
            Args: { msg: string };
            Returns: string;
          }
        | {
            Args: { msg: unknown };
            Returns: string;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          };
      diag_test_name: {
        Args: { '': string };
        Returns: string;
      };
      display_date: {
        Args: { '': unknown };
        Returns: string;
      };
      do_tap:
        | {
            Args: { '': unknown };
            Returns: string;
          }
        | {
            Args: { '': string };
            Returns: string;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          };
      domains_are: {
        Args: { '': unknown };
        Returns: string;
      };
      email_channel_link: {
        Args: { '': unknown };
        Returns: string;
      };
      employee_id: {
        Args: { fail: boolean };
        Returns: string;
      };
      employees_with_access_to_inbox: {
        Args: { inbox_id: string; search: string };
        Returns: Record<string, unknown>[];
      };
      enums_are: {
        Args: { '': unknown };
        Returns: string;
      };
      extensions_are: {
        Args: { '': unknown };
        Returns: string;
      };
      facebook_channel_link: {
        Args: { '': unknown };
        Returns: string;
      };
      fail:
        | {
            Args: { '': string };
            Returns: string;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          };
      favicon: {
        Args: { '': unknown };
        Returns: Json;
      };
      files:
        | {
            Args: { '': unknown };
            Returns: Json;
          }
        | {
            Args: { '': unknown };
            Returns: Json;
          }
        | {
            Args: { '': unknown };
            Returns: Json;
          }
        | {
            Args: { '': unknown };
            Returns: Json;
          };
      findfuncs: {
        Args: { '': string };
        Returns: string[];
      };
      finish: {
        Args: { exception_on_failure: boolean };
        Returns: string;
      };
      foreign_tables_are: {
        Args: { '': unknown };
        Returns: string;
      };
      functions_are: {
        Args: { '': unknown };
        Returns: string;
      };
      groups_are: {
        Args: { '': unknown };
        Returns: string;
      };
      handle_message_bounced: {
        Args: {
          v_external_conversation_id: string;
          v_external_message_id: string;
          v_recipient_handle: string;
        };
        Returns: undefined;
      };
      handle_message_deleted: {
        Args: {
          v_external_conversation_id: string;
          v_external_message_id: string;
        };
        Returns: undefined;
      };
      handle_message_read: {
        Args: {
          v_external_conversation_id: string;
          v_external_message_id: string;
          v_recipient_handle: string;
        };
        Returns: undefined;
      };
      handle_message_sent: {
        Args: {
          v_external_conversation_id: string;
          v_external_message_id: string;
        };
        Returns: undefined;
      };
      handle_messages_read_until: {
        Args: {
          v_external_conversation_id: string;
          v_read_until: string;
          v_recipient_handle: string;
        };
        Returns: undefined;
      };
      handle_new_message:
        | {
            Args: {
              v_external_channel_id: string;
              v_external_conversation_id: string;
              v_message_input: unknown;
              v_recipients_input: unknown;
              v_metadata: Json;
              v_is_spam: boolean;
            };
            Returns: string;
          }
        | {
            Args: {
              v_channel_type: Database['public']['Enums']['channel_type'];
              v_external_channel_id: string;
              v_external_conversation_id: string;
              v_insert_with_conversation_id: string;
              v_message_input: unknown;
              v_recipients_input: unknown;
              v_metadata: Json;
              v_is_spam: boolean;
            };
            Returns: string;
          };
      handle_sending_error: {
        Args: {
          v_external_conversation_id: string;
          v_external_message_id: string;
          v_metadata: Json;
        };
        Returns: undefined;
      };
      handle_stripe_customer_event:
        | {
            Args: {
              v_organisation_input: unknown;
              v_stripe_customer_id: string;
              v_employee_input: unknown;
              v_delete_organisation: boolean;
            };
            Returns: string;
          }
        | {
            Args: {
              v_organisation_input: unknown;
              v_stripe_customer_id: string;
              v_employee_input: unknown;
              v_delete_organisation: boolean;
              v_desires_sms_channel: boolean;
            };
            Returns: string;
          };
      handle_stripe_subscription_event: {
        Args: {
          v_stripe_customer_id: string;
          v_subscription_input: unknown;
          v_subscription_items_input: unknown;
        };
        Returns: undefined;
      };
      has_access_to_conversation: {
        Args: { v_conversation_id: string };
        Returns: boolean;
      };
      has_access_to_inbox: {
        Args: { v_inbox_id: string };
        Returns: boolean;
      };
      has_check: {
        Args: { '': unknown };
        Returns: string;
      };
      has_composite: {
        Args: { '': unknown };
        Returns: string;
      };
      has_domain: {
        Args: { '': unknown };
        Returns: string;
      };
      has_enum: {
        Args: { '': unknown };
        Returns: string;
      };
      has_extension: {
        Args: { '': unknown };
        Returns: string;
      };
      has_fk: {
        Args: { '': unknown };
        Returns: string;
      };
      has_foreign_table: {
        Args: { '': unknown };
        Returns: string;
      };
      has_full_access_to_inbox: {
        Args: { v_inbox_id: string };
        Returns: boolean;
      };
      has_function: {
        Args: { '': unknown };
        Returns: string;
      };
      has_group: {
        Args: { '': unknown };
        Returns: string;
      };
      has_inherited_tables: {
        Args: { '': unknown };
        Returns: string;
      };
      has_language: {
        Args: { '': unknown };
        Returns: string;
      };
      has_materialized_view: {
        Args: { '': unknown };
        Returns: string;
      };
      has_missing_payment: {
        Args: { v_organisation_id: string };
        Returns: boolean;
      };
      has_opclass: {
        Args: { '': unknown };
        Returns: string;
      };
      has_pk: {
        Args: { '': unknown };
        Returns: string;
      };
      has_relation: {
        Args: { '': unknown };
        Returns: string;
      };
      has_role: {
        Args: { '': unknown };
        Returns: string;
      };
      has_schema: {
        Args: { '': unknown };
        Returns: string;
      };
      has_sequence: {
        Args: { '': unknown };
        Returns: string;
      };
      has_table: {
        Args: { '': unknown };
        Returns: string;
      };
      has_tablespace: {
        Args: { '': unknown };
        Returns: string;
      };
      has_type: {
        Args: { '': unknown };
        Returns: string;
      };
      has_unique: {
        Args: { '': string };
        Returns: string;
      };
      has_user: {
        Args: { '': unknown };
        Returns: string;
      };
      has_view: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_composite: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_domain: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_enum: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_extension: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_fk: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_foreign_table: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_function: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_group: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_inherited_tables: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_language: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_materialized_view: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_opclass: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_pk: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_relation: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_role: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_schema: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_sequence: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_table: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_tablespace: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_type: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_user: {
        Args: { '': unknown };
        Returns: string;
      };
      hasnt_view: {
        Args: { '': unknown };
        Returns: string;
      };
      in_todo: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      index_is_primary: {
        Args: { '': unknown };
        Returns: string;
      };
      index_is_unique: {
        Args: { '': unknown };
        Returns: string;
      };
      instagram_channel_link: {
        Args: { '': unknown };
        Returns: string;
      };
      is_admin_of_organisation: {
        Args: { v_organisation_id: string };
        Returns: boolean;
      };
      is_aggregate: {
        Args: { '': unknown };
        Returns: string;
      };
      is_clustered: {
        Args: { '': unknown };
        Returns: string;
      };
      is_definer: {
        Args: { '': unknown };
        Returns: string;
      };
      is_e164_format: {
        Args: { v_input: string };
        Returns: boolean;
      };
      is_employee_of_organisation: {
        Args: { v_organisation_id: string };
        Returns: boolean;
      };
      is_empty: {
        Args: { '': string };
        Returns: string;
      };
      is_member_of_team: {
        Args: { v_team_id: string };
        Returns: boolean;
      };
      is_normal_function: {
        Args: { '': unknown };
        Returns: string;
      };
      is_partitioned: {
        Args: { '': unknown };
        Returns: string;
      };
      is_procedure: {
        Args: { '': unknown };
        Returns: string;
      };
      is_strict: {
        Args: { '': unknown };
        Returns: string;
      };
      is_superuser: {
        Args: { '': unknown };
        Returns: string;
      };
      is_valid_email: {
        Args: { v_input: string };
        Returns: boolean;
      };
      is_window: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_aggregate: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_definer: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_empty: {
        Args: { '': string };
        Returns: string;
      };
      isnt_normal_function: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_partitioned: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_procedure: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_strict: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_superuser: {
        Args: { '': unknown };
        Returns: string;
      };
      isnt_window: {
        Args: { '': unknown };
        Returns: string;
      };
      language_is_trusted: {
        Args: { '': unknown };
        Returns: string;
      };
      languages_are: {
        Args: { '': unknown };
        Returns: string;
      };
      lives_ok: {
        Args: { '': string };
        Returns: string;
      };
      logo: {
        Args: { '': unknown };
        Returns: Json;
      };
      make_api_request: {
        Args: { v_path: string; v_body: Json; prefer_service_role: boolean };
        Returns: undefined;
      };
      materialized_views_are: {
        Args: { '': unknown };
        Returns: string;
      };
      merge_contacts: {
        Args: { a: string; b: string };
        Returns: unknown;
      };
      move_conversation: {
        Args: { v_conversation_id: string; v_inbox_id: string };
        Returns: unknown;
      };
      move_conversations: {
        Args: { v_conversation_ids: unknown; v_inbox_id: string };
        Returns: unknown;
      };
      no_plan: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      num_failed: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      ok: {
        Args: { '': boolean };
        Returns: string;
      };
      opclasses_are: {
        Args: { '': unknown };
        Returns: string;
      };
      operators_are: {
        Args: { '': unknown };
        Returns: string;
      };
      organisation_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      organisation_logo: {
        Args: { '': unknown };
        Returns: Json;
      };
      organisation_name: {
        Args: { '': unknown };
        Returns: string;
      };
      os_name: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      pass:
        | {
            Args: { '': string };
            Returns: string;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          };
      pg_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      pg_version_num: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      pgtap_version: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      plan: {
        Args: { '': number };
        Returns: string;
      };
      profile_image: {
        Args: { '': unknown };
        Returns: Json;
      };
      recipient_list: {
        Args: { '': unknown };
        Returns: string;
      };
      reply_to_conversation: {
        Args: {
          v_conversation_id: string;
          v_message_input: unknown;
          v_recipients_input: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      resolve_event_entity: {
        Args: {
          v_type: Database['public']['Enums']['event_entity_type'];
          v_id: string;
        };
        Returns: Json;
      };
      roles_are: {
        Args: { '': unknown };
        Returns: string;
      };
      runtests:
        | {
            Args: { '': unknown };
            Returns: string;
          }
        | {
            Args: { '': string };
            Returns: string;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: string;
          };
      schemas_are: {
        Args: { '': unknown };
        Returns: string;
      };
      seed_organisation: {
        Args: { v_domain: string };
        Returns: boolean;
      };
      seen: {
        Args: { '': unknown };
        Returns: boolean;
      };
      send_employee_invite: {
        Args: { v_employee_id: string };
        Returns: undefined;
      };
      send_morning_briefing: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      send_notification: {
        Args: { v_payload: Json };
        Returns: undefined;
      };
      sequences_are: {
        Args: { '': unknown };
        Returns: string;
      };
      session_time: {
        Args: { '': unknown };
        Returns: number;
      };
      single_file_object_for_entity: {
        Args: { v_bucket_id: string; v_entity_id: string };
        Returns: Json;
      };
      skip:
        | {
            Args: { why: string; how_many: number };
            Returns: string;
          }
        | {
            Args: { '': string };
            Returns: string;
          }
        | {
            Args: { '': number };
            Returns: string;
          };
      sms_channel_link: {
        Args: { '': unknown };
        Returns: string;
      };
      source: {
        Args: { '': unknown };
        Returns: Json;
      };
      strip_html: {
        Args: { v_input: string };
        Returns: string;
      };
      strip_special_chars: {
        Args: { v_input: string };
        Returns: string;
      };
      submit_message: {
        Args: { v_message_id: string };
        Returns: undefined;
      };
      tables_are: {
        Args: { '': unknown };
        Returns: string;
      };
      tablespaces_are: {
        Args: { '': unknown };
        Returns: string;
      };
      target: {
        Args: { '': unknown };
        Returns: Json;
      };
      throws_ok: {
        Args: { '': string };
        Returns: string;
      };
      todo:
        | {
            Args: { why: string; how_many: number };
            Returns: boolean;
          }
        | {
            Args: { how_many: number; why: string };
            Returns: boolean;
          }
        | {
            Args: { why: string };
            Returns: boolean;
          }
        | {
            Args: { how_many: number };
            Returns: boolean;
          };
      todo_end: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      todo_start:
        | {
            Args: { '': string };
            Returns: boolean;
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: boolean;
          };
      trigger_notifications: {
        Args: { v_notification_type: string; v_input: unknown };
        Returns: undefined;
      };
      types_are: {
        Args: { '': unknown };
        Returns: string;
      };
      upsert_contact: {
        Args: {
          v_contact_input: unknown;
          v_custom_fields_input: unknown;
          v_opt_ins_input: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      user_objects: {
        Args: { user_id: string };
        Returns: unknown;
      };
      users_are: {
        Args: { '': unknown };
        Returns: string;
      };
      utc_offset_minutes: {
        Args: { '': unknown };
        Returns: number;
      };
      uuid_from_filename: {
        Args: { filename: string };
        Returns: string;
      };
      uuid_from_path_level_1: {
        Args: { filename: string };
        Returns: string;
      };
      uuid_from_path_level_2: {
        Args: { filename: string };
        Returns: string;
      };
      uuid_from_path_level_3: {
        Args: { filename: string };
        Returns: string;
      };
      views_are: {
        Args: { '': unknown };
        Returns: string;
      };
      whatsapp_channel_link: {
        Args: { '': unknown };
        Returns: string;
      };
      whatsapp_status: {
        Args: { '': unknown };
        Returns: Database['public']['Enums']['whatsapp_template_status'];
      };
    };
    Enums: {
      author_type: 'employee' | 'bot' | 'external';
      call_status:
        | 'queued'
        | 'ringing'
        | 'in-progress'
        | 'completed'
        | 'busy'
        | 'failed'
        | 'no-answer';
      channel_status:
        | 'draft'
        | 'in-review'
        | 'rejected'
        | 'active'
        | 'inactive';
      channel_type:
        | 'email'
        | 'sms'
        | 'whatsapp'
        | 'instagram'
        | 'facebook'
        | 'google_business_messaging';
      conversation_status: 'open' | 'closed' | 'archived';
      event_entity_type:
        | 'employee'
        | 'channel'
        | 'comment'
        | 'message'
        | 'tag'
        | 'recipient';
      event_type:
        | 'assign'
        | 'unassign'
        | 'close'
        | 'reopen'
        | 'comment'
        | 'mention'
        | 'inbound'
        | 'outbound'
        | 'tag'
        | 'untag'
        | 'sending_error'
        | 'message_bounce_error'
        | 'submit'
        | 'subject_change'
        | 'submission_error'
        | 'read'
        | 'archive';
      field_type: 'string' | 'datetime' | 'boolean' | 'number' | 'date';
      inbox_level: 'full' | 'inbox_only';
      notification_channel: 'email' | 'push';
      opt_in_reason:
        | 'legitimate_interest'
        | 'contract_fulfillment'
        | 'consent_granted';
      pricing_plan_interval: 'day' | 'week' | 'month' | 'year';
      pricing_type: 'one_time' | 'recurring';
      provider_status:
        | 'draft'
        | 'in-review'
        | 'rejected'
        | 'active'
        | 'inactive';
      provider_type:
        | 'twilio-regulatory-bundle'
        | 'meta-account'
        | 'google-account'
        | 'nylas'
        | '360dialog-whatsapp-business-account';
      recipient_role: 'from' | 'to' | 'cc' | 'bcc';
      recipient_status:
        | 'sent'
        | 'sending_error'
        | 'bounce_error'
        | 'submission_error'
        | 'submitted'
        | 'sending'
        | 'read'
        | 'draft';
      review_channel_type: 'google-my-business';
      subscription_status:
        | 'trialing'
        | 'active'
        | 'canceled'
        | 'incomplete'
        | 'incomplete_expired'
        | 'past_due'
        | 'unpaid';
      template_category:
        | 'ACCOUNT_UPDATE'
        | 'AUTO_REPLY'
        | 'PAYMENT_UPDATE'
        | 'PERSONAL_FINANCE_UPDATE'
        | 'SHIPPING_UPDATE'
        | 'RESERVATION_UPDATE'
        | 'ISSUE_RESOLUTION'
        | 'APPOINTMENT_UPDATE'
        | 'TRANSPORTATION_UPDATE'
        | 'TICKET_UPDATE'
        | 'ALERT_UPDATE'
        | 'TRANSACTIONAL';
      whatsapp_template_status:
        | 'requested'
        | 'in_review'
        | 'approved'
        | 'rejected';
    };
  };
}
