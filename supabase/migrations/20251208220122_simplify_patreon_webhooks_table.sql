-- Drop existing patreon_webhooks table
DROP TABLE IF EXISTS "public"."patreon_webhooks";

-- Create simplified table for storing Patreon webhook events
CREATE TABLE IF NOT EXISTS "public"."patreon_webhooks" (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "raw_payload" jsonb NOT NULL,
    "created_at" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."patreon_webhooks" OWNER TO "postgres";

-- Add primary key
ALTER TABLE ONLY "public"."patreon_webhooks"
    ADD CONSTRAINT "patreon_webhooks_pkey" PRIMARY KEY ("id");

-- Create index for created_at for efficient time-based queries
CREATE INDEX "idx_patreon_webhooks_created_at" ON "public"."patreon_webhooks" USING btree ("created_at");

-- Grant permissions
GRANT ALL ON TABLE "public"."patreon_webhooks" TO "anon";
GRANT ALL ON TABLE "public"."patreon_webhooks" TO "authenticated";
GRANT ALL ON TABLE "public"."patreon_webhooks" TO "service_role";
