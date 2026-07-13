import { createClient, OAuthStrategy } from "@wix/sdk";
import { plans } from "@wix/pricing-plans";
import { bookings } from "@wix/bookings";
import { members } from "@wix/members";
import { items } from "@wix/data";

export function getWixClient() {
  return createClient({
    modules: { plans, bookings, members, items },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    }),
  });
}

export type WixClient = ReturnType<typeof getWixClient>;
