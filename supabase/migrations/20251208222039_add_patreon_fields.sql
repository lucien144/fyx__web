-- Add patreon_id to subscribers table
ALTER TABLE "public"."subscribers"
ADD COLUMN "patreon_id" text UNIQUE;

-- Add index for patreon_id lookups
CREATE INDEX "idx_subscribers_patreon_id" ON "public"."subscribers" USING btree ("patreon_id");

-- Add amount and patreon_id to patreon_webhooks table
ALTER TABLE "public"."patreon_webhooks"
ADD COLUMN "amount" bigint,
ADD COLUMN "patreon_id" text;

-- Add index for patreon_id in webhooks
CREATE INDEX "idx_patreon_webhooks_patreon_id" ON "public"."patreon_webhooks" USING btree ("patreon_id");
