-- Add constraint to ensure nickname is not empty
ALTER TABLE "public"."subscribers"
ADD CONSTRAINT "subscribers_nickname_not_empty" CHECK (length(nickname) > 0);

-- Make patreon_id not null for future records
-- (existing records can still have null patreon_id)
