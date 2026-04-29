-- Fix the Audits table's primary key.
--
-- The table was originally created with `name` as the primary key, which
-- caused two problems:
--   1. Two people with the same name couldn't both book audits — second one
--      would fail to insert with a unique-constraint violation.
--   2. The same person couldn't book multiple audits over time.
--
-- This migration replaces the `name` PK with a proper UUID `id` PK and adds
-- a `created_at` timestamp for sorting.
--
-- Safe to run multiple times.
-- Run this in Supabase Dashboard → SQL Editor → New query → Run.

ALTER TABLE "Audits" DROP CONSTRAINT IF EXISTS "Audits_pkey";

ALTER TABLE "Audits" ADD COLUMN IF NOT EXISTS id uuid DEFAULT gen_random_uuid();
UPDATE "Audits" SET id = gen_random_uuid() WHERE id IS NULL;
ALTER TABLE "Audits" ALTER COLUMN id SET NOT NULL;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conrelid = '"Audits"'::regclass AND contype = 'p'
  ) THEN
    ALTER TABLE "Audits" ADD PRIMARY KEY (id);
  END IF;
END$$;

ALTER TABLE "Audits" ADD COLUMN IF NOT EXISTS created_at timestamptz NOT NULL DEFAULT now();
