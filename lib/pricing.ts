/**
 * Source of truth for audit pricing.
 * Server-side only; never trust the browser to set the amount it pays.
 *
 * Razorpay amounts are in the smallest currency unit:
 *   - INR: paise (1 INR = 100 paise)
 */

export type Platform = "instagram" | "youtube" | "both";
export type Tier = "basic" | "advanced";

export const PLATFORM_LABELS: Record<Platform, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  both: "Both Platforms",
};

export const TIER_LABELS: Record<Tier, string> = {
  basic: "Basic Audit",
  advanced: "Advanced Audit",
};

/** Price matrix in INR rupees, indexed by platform × tier. */
export const PRICING: Record<Platform, Record<Tier, number>> = {
  instagram: { basic: 3999, advanced: 7999 },
  youtube:   { basic: 5999, advanced: 9999 },
  both:      { basic: 10999, advanced: 15999 },
};

export const CURRENCY = "INR" as const;

export function getPriceInr(platform: Platform, tier: Tier): number {
  return PRICING[platform][tier];
}

export function getPricePaise(platform: Platform, tier: Tier): number {
  return getPriceInr(platform, tier) * 100;
}

export function isValidPlatform(value: unknown): value is Platform {
  return value === "instagram" || value === "youtube" || value === "both";
}

export function isValidTier(value: unknown): value is Tier {
  return value === "basic" || value === "advanced";
}

/** Combined "{platform}_{tier}" key stored in the DB tier column for one-row clarity. */
export function toTierKey(platform: Platform, tier: Tier): string {
  return `${platform}_${tier}`;
}
