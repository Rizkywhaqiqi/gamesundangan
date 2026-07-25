//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-wTZ4OWIr.js
var manifest = {
	"3e310b31f448f214ee2d55445000187a5d783b2e41482400ce4f9dcbb94b92b9": {
		functionName: "listWishes_createServerFn_handler",
		importer: () => import("./_ssr/wedding.functions-XXofD9SH.mjs")
	},
	"5415a8fa0484317c21e3436c1fdbfb347ba7508662e13027aa0392709c49ee20": {
		functionName: "submitRsvp_createServerFn_handler",
		importer: () => import("./_ssr/wedding.functions-XXofD9SH.mjs")
	},
	"89cfe436f87b720523e97cb824e7e61c6a09351afeb7221eed8a0cea44518759": {
		functionName: "submitWish_createServerFn_handler",
		importer: () => import("./_ssr/wedding.functions-XXofD9SH.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
