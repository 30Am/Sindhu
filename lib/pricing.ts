/**
 * Source of truth for audit pricing.
 * Server-side only — never trust the browser to set the amount it pays.
 *
 * Razorpay amounts are in the smallest currency unit:
 *   - INR: paise (1 INR = 100 paise)
 */

export type Tier = "basic" | "advanced" | "both";

export const TIER_LABELS: Record<Tier, string> = {
  basic: "Basic Audit",
  advanced: "Advanced Audit",
  both: "Both Platforms",
};

/** Price in INR rupees (display-friendly). */
export const TIER_PRICE_INR: Record<Tier, number> = {
  basic: 2999,
  advanced: 6999,
  both: 11999,
};

/** Price in paise — what Razorpay's API expects. */
export const TIER_PRICE_PAISE: Record<Tier, number> = {
  basic: TIER_PRICE_INR.basic * 100,
  advanced: TIER_PRICE_INR.advanced * 100,
  both: TIER_PRICE_INR.both * 100,
};

export const CURRENCY = "INR" as const;

export function isValidTier(value: unknown): value is Tier {
  return value === "basic" || value === "advanced" || value === "both";
}
