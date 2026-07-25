import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/wedding.functions-XXofD9SH.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function serverClient() {
	const url = processModule.env.SUPABASE_URL;
	const key = processModule.env.SUPABASE_PUBLISHABLE_KEY;
	return createClient(url, key, {
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
}
var rsvpSchema = objectType({
	guest_name: stringType().trim().min(1).max(80),
	attendance: enumType(["attending", "not_attending"]),
	party_size: numberType().int().min(1).max(10),
	message: stringType().trim().max(500).optional().nullable()
});
var wishSchema = objectType({
	guest_name: stringType().trim().min(1).max(80),
	message: stringType().trim().min(1).max(500)
});
var submitRsvp_createServerFn_handler = createServerRpc({
	id: "5415a8fa0484317c21e3436c1fdbfb347ba7508662e13027aa0392709c49ee20",
	name: "submitRsvp",
	filename: "src/lib/wedding.functions.ts"
}, (opts) => submitRsvp.__executeServer(opts));
var submitRsvp = createServerFn({ method: "POST" }).validator((raw) => rsvpSchema.parse(raw)).handler(submitRsvp_createServerFn_handler, async ({ data }) => {
	const { error } = await serverClient().from("rsvps").insert({
		guest_name: data.guest_name,
		attendance: data.attendance,
		party_size: data.party_size,
		message: data.message ?? null
	});
	if (error) throw new Error(error.message);
	return { ok: true };
});
var submitWish_createServerFn_handler = createServerRpc({
	id: "89cfe436f87b720523e97cb824e7e61c6a09351afeb7221eed8a0cea44518759",
	name: "submitWish",
	filename: "src/lib/wedding.functions.ts"
}, (opts) => submitWish.__executeServer(opts));
var submitWish = createServerFn({ method: "POST" }).validator((raw) => wishSchema.parse(raw)).handler(submitWish_createServerFn_handler, async ({ data }) => {
	const { error } = await serverClient().from("wishes").insert({
		guest_name: data.guest_name,
		message: data.message
	});
	if (error) throw new Error(error.message);
	return { ok: true };
});
var listWishes_createServerFn_handler = createServerRpc({
	id: "3e310b31f448f214ee2d55445000187a5d783b2e41482400ce4f9dcbb94b92b9",
	name: "listWishes",
	filename: "src/lib/wedding.functions.ts"
}, (opts) => listWishes.__executeServer(opts));
var listWishes = createServerFn({ method: "GET" }).handler(listWishes_createServerFn_handler, async () => {
	const { data, error } = await serverClient().from("wishes").select("id, guest_name, message, created_at").order("created_at", { ascending: false }).limit(50);
	if (error) throw new Error(error.message);
	return { wishes: data ?? [] };
});
//#endregion
export { listWishes_createServerFn_handler, submitRsvp_createServerFn_handler, submitWish_createServerFn_handler };
