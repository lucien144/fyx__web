-- Create table for storing Patreon webhook events
CREATE TABLE IF NOT EXISTS "public"."patreon_webhooks" (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "event_id" text,
    "event_type" text NOT NULL,
    "patreon_user_id" text,
    "patron_status" text,
    "patron_email" text,
    "patron_full_name" text,
    "tier_id" text,
    "tier_title" text,
    "amount_cents" bigint,
    "currency" text,
    "pledge_relationship_start" timestamp with time zone,
    "raw_payload" jsonb NOT NULL,
    "created_at" timestamp with time zone DEFAULT now() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT now()
);

ALTER TABLE "public"."patreon_webhooks" OWNER TO "postgres";

-- Add primary key
ALTER TABLE ONLY "public"."patreon_webhooks"
    ADD CONSTRAINT "patreon_webhooks_pkey" PRIMARY KEY ("id");

-- Add unique constraint on event_id to prevent duplicate webhook processing
ALTER TABLE ONLY "public"."patreon_webhooks"
    ADD CONSTRAINT "patreon_webhooks_event_id_key" UNIQUE ("event_id");

-- Create indexes for efficient queries
CREATE INDEX "idx_patreon_webhooks_event_type" ON "public"."patreon_webhooks" USING btree ("event_type");
CREATE INDEX "idx_patreon_webhooks_patreon_user_id" ON "public"."patreon_webhooks" USING btree ("patreon_user_id");
CREATE INDEX "idx_patreon_webhooks_patron_email" ON "public"."patreon_webhooks" USING btree ("patron_email");
CREATE INDEX "idx_patreon_webhooks_created_at" ON "public"."patreon_webhooks" USING btree ("created_at");

-- Grant permissions
GRANT ALL ON TABLE "public"."patreon_webhooks" TO "anon";
GRANT ALL ON TABLE "public"."patreon_webhooks" TO "authenticated";
GRANT ALL ON TABLE "public"."patreon_webhooks" TO "service_role";
