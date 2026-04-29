-- Add Razorpay payment metadata columns to the Audits table.
-- Safe to run multiple times.
-- Run this in Supabase Dashboard → SQL Editor → New query → Run.

ALTER TABLE "Audits"
  ADD COLUMN IF NOT EXISTS razorpay_order_id   text,
  ADD COLUMN IF NOT EXISTS razorpay_payment_id text,
  ADD COLUMN IF NOT EXISTS payment_status      text DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS amount              integer,    -- in INR rupees (whole units)
  ADD COLUMN IF NOT EXISTS currency            text DEFAULT 'INR';

-- Helpful indexes for lookups during reconciliation / webhook processing.
CREATE INDEX IF NOT EXISTS audits_razorpay_payment_id_idx
  ON "Audits" (razorpay_payment_id);
CREATE INDEX IF NOT EXISTS audits_razorpay_order_id_idx
  ON "Audits" (razorpay_order_id);
