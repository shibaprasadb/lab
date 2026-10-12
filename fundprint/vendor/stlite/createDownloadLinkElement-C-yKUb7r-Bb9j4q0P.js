import { Cr as e } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/createDownloadLinkElement-C-yKUb7r.js
var t = ({ enforceDownloadInNewTab: t, url: n, filename: r }) => {
	let i = document.createElement("a");
	i.setAttribute("href", n), t ? i.setAttribute("target", "_blank") : i.setAttribute("target", "_self");
	let a = e.DOWNLOAD_ASSETS_BASE_URL;
	return (!a || !n.startsWith(a) || window.navigator.userAgent.includes("Firefox")) && i.setAttribute("download", r), i;
};
//#endregion
export { t };

//# sourceMappingURL=createDownloadLinkElement-C-yKUb7r-Bb9j4q0P.js.map