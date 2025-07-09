"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sheet";
exports.ids = ["pages/api/sheet"];
exports.modules = {

/***/ "(api-node)/./lib/sheet.js":
/*!**********************!*\
  !*** ./lib/sheet.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSheetData: () => (/* binding */ getSheetData)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getSheetData() {\n    const keyFile = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'credentials.json');\n    const credentials = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_2__.promises.readFile(keyFile, 'utf8'));\n    const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({\n        credentials,\n        scopes: [\n            'https://www.googleapis.com/auth/spreadsheets.readonly'\n        ]\n    });\n    const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n        version: 'v4',\n        auth\n    });\n    const spreadsheetId = '1ndcPLgJV-NeW3zWB4NCZzJM3E7EKAK01cdI1pSycnfI';\n    const range = '시트1!A2:F'; // 지역 포함 (A~F)\n    const response = await sheets.spreadsheets.values.get({\n        spreadsheetId,\n        range\n    });\n    return response.data.values; // rows만 리턴\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9zaGVldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9DO0FBQ1o7QUFDWTtBQUU3QixlQUFlSTtJQUNwQixNQUFNQyxVQUFVSixnREFBUyxDQUFDTSxRQUFRQyxHQUFHLElBQUk7SUFDekMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDLE1BQU1SLHdDQUFFQSxDQUFDUyxRQUFRLENBQUNQLFNBQVM7SUFFMUQsTUFBTVEsT0FBTyxJQUFJYiw4Q0FBTUEsQ0FBQ2EsSUFBSSxDQUFDQyxVQUFVLENBQUM7UUFDdENMO1FBQ0FNLFFBQVE7WUFBQztTQUF3RDtJQUNuRTtJQUVBLE1BQU1DLFNBQVNoQiw4Q0FBTUEsQ0FBQ2dCLE1BQU0sQ0FBQztRQUFFQyxTQUFTO1FBQU1KO0lBQUs7SUFFbkQsTUFBTUssZ0JBQWdCO0lBQ3RCLE1BQU1DLFFBQVEsWUFBYSxjQUFjO0lBRXpDLE1BQU1DLFdBQVcsTUFBTUosT0FBT0ssWUFBWSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBQztRQUNwREw7UUFDQUM7SUFDRjtJQUVBLE9BQU9DLFNBQVNJLElBQUksQ0FBQ0YsTUFBTSxFQUFFLFdBQVc7QUFDMUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFkZWtcXERlc2t0b3BcXHdlZGRpbmctZmFpci1zaXRlXFxsaWJcXHNoZWV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdvb2dsZSB9IGZyb20gJ2dvb2dsZWFwaXMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hlZXREYXRhKCkge1xyXG4gIGNvbnN0IGtleUZpbGUgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2NyZWRlbnRpYWxzLmpzb24nKTtcclxuICBjb25zdCBjcmVkZW50aWFscyA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoa2V5RmlsZSwgJ3V0ZjgnKSk7XHJcblxyXG4gIGNvbnN0IGF1dGggPSBuZXcgZ29vZ2xlLmF1dGguR29vZ2xlQXV0aCh7XHJcbiAgICBjcmVkZW50aWFscyxcclxuICAgIHNjb3BlczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cy5yZWFkb25seSddLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzaGVldHMgPSBnb29nbGUuc2hlZXRzKHsgdmVyc2lvbjogJ3Y0JywgYXV0aCB9KTtcclxuXHJcbiAgY29uc3Qgc3ByZWFkc2hlZXRJZCA9ICcxbmRjUExnSlYtTmVXM3pXQjROQ1p6Sk0zRTdFS0FLMDFjZEkxcFN5Y25mSSc7XHJcbiAgY29uc3QgcmFuZ2UgPSAn7Iuc7Yq4MSFBMjpGJzsgIC8vIOyngOyXrSDtj6ztlaggKEF+RilcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gICAgc3ByZWFkc2hlZXRJZCxcclxuICAgIHJhbmdlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YS52YWx1ZXM7IC8vIHJvd3Prp4wg66as7YS0XHJcbn1cclxuIl0sIm5hbWVzIjpbImdvb2dsZSIsInBhdGgiLCJwcm9taXNlcyIsImZzIiwiZ2V0U2hlZXREYXRhIiwia2V5RmlsZSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiY3JlZGVudGlhbHMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZSIsImF1dGgiLCJHb29nbGVBdXRoIiwic2NvcGVzIiwic2hlZXRzIiwidmVyc2lvbiIsInNwcmVhZHNoZWV0SWQiLCJyYW5nZSIsInJlc3BvbnNlIiwic3ByZWFkc2hlZXRzIiwidmFsdWVzIiwiZ2V0IiwiZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/sheet.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsheet&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csheet.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsheet&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csheet.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_sheet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\sheet.js */ \"(api-node)/./pages/api/sheet.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_sheet_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_sheet_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/sheet\",\n        pathname: \"/api/sheet\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_sheet_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGc2hlZXQmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q3NoZWV0LmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQ21EO0FBQ25EO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxnREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsZ0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcc2hlZXQuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NoZWV0XCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2hlZXRcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsheet&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csheet.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/sheet.js":
/*!****************************!*\
  !*** ./pages/api/sheet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/sheet */ \"(api-node)/./lib/sheet.js\");\n\nasync function handler(req, res) {\n    try {\n        const { region } = req.query; // 쿼리로 지역 받기\n        const data = await (0,_lib_sheet__WEBPACK_IMPORTED_MODULE_0__.getSheetData)();\n        // 지역별 필터링\n        const filteredData = region ? data.filter((row)=>row[0] === region) : data;\n        res.status(200).json(filteredData);\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            error: '데이터를 불러오지 못했습니다.'\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9zaGVldC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUVoQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdGLElBQUlHLEtBQUssRUFBRSxZQUFZO1FBQzFDLE1BQU1DLE9BQU8sTUFBTU4sd0RBQVlBO1FBRS9CLFVBQVU7UUFDVixNQUFNTyxlQUFlSCxTQUNqQkUsS0FBS0UsTUFBTSxDQUFDLENBQUNDLE1BQVFBLEdBQUcsQ0FBQyxFQUFFLEtBQUtMLFVBQ2hDRTtRQUVKSCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtJQUN2QixFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkVCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBbUI7SUFDbkQ7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqYWRla1xcRGVza3RvcFxcd2VkZGluZy1mYWlyLXNpdGVcXHBhZ2VzXFxhcGlcXHNoZWV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNoZWV0RGF0YSB9IGZyb20gJy4uLy4uL2xpYi9zaGVldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcmVnaW9uIH0gPSByZXEucXVlcnk7IC8vIOy/vOumrOuhnCDsp4Dsl60g67Cb6riwXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKCk7XHJcblxyXG4gICAgLy8g7KeA7Jet67OEIO2VhO2EsOungVxyXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gcmVnaW9uXHJcbiAgICAgID8gZGF0YS5maWx0ZXIoKHJvdykgPT4gcm93WzBdID09PSByZWdpb24pXHJcbiAgICAgIDogZGF0YTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihmaWx0ZXJlZERhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICfrjbDsnbTthLDrpbwg67aI65+s7Jik7KeAIOuqu+2WiOyKteuLiOuLpC4nIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0U2hlZXREYXRhIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlZ2lvbiIsInF1ZXJ5IiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsInJvdyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/sheet.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsheet&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csheet.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();