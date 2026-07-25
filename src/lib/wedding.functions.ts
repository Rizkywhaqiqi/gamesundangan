import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

function serverClient() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

const rsvpSchema = z.object({
  guest_name: z.string().trim().min(1).max(80),
  attendance: z.enum(["attending", "not_attending"]),
  party_size: z.number().int().min(1).max(10),
  message: z.string().trim().max(500).optional().nullable(),
});

const wishSchema = z.object({
  guest_name: z.string().trim().min(1).max(80),
  message: z.string().trim().min(1).max(500),
});

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => rsvpSchema.parse(raw))
  .handler(async ({ data }) => {
    const supabase = serverClient();
    const { error } = await supabase.from("rsvps").insert({
      guest_name: data.guest_name,
      attendance: data.attendance,
      party_size: data.party_size,
      message: data.message ?? null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const submitWish = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => wishSchema.parse(raw))
  .handler(async ({ data }) => {
    const supabase = serverClient();
    const { error } = await supabase.from("wishes").insert({
      guest_name: data.guest_name,
      message: data.message,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listWishes = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = serverClient();
  const { data, error } = await supabase
    .from("wishes")
    .select("id, guest_name, message, created_at")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) throw new Error(error.message);
  return { wishes: data ?? [] };
});
