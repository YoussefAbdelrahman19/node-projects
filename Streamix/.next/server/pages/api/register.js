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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n// import bcrypt from \"bcrypt\";\n// import prismadb from \"@/lib/prismadb\";\n// import { NextApiResponse, NextApiRequest } from \"next\";\n// export default async function handler(\n//   req: NextApiRequest,\n//   res: NextApiResponse\n// ) {\n//     console.log('working in api',req);\n//   if (req.method !== \"POST\") {\n//     res.status(405).json({msg:'runnig'});\n//   }\n//   try {\n//     const { email, name, password } = req.body;\n//     const existingUser = await prismadb.findUnique({\n//       where: {\n//         email,\n//       },\n//     });\n//     if (existingUser) {\n//       return res.status(422).json({ error: \"Email is already in use\" });\n//     }\n//     const hashedPasssword = await bcrypt.hash(password, 12);\n//     const user = await prismadb.user.create({\n//       data: {\n//         email,\n//         name,\n//         hashedPasssword,\n//         image: \"\",\n//         emailVerified: new Date(),\n//       },\n//     });\n//     return res.status(201).json(user);\n//   } catch (error) {\n//     console.log(error);\n//     res.status(400).end();\n//   }\n// }\n\n\nconst prismadb = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    console.log(\"working in api\", req);\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            msg: \"Method Not Allowed\"\n        });\n        return;\n    }\n    try {\n        const { email, name, password } = req.body;\n        const existingUser = await prismadb.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            return res.status(422).json({\n                error: \"Email is already in use\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 12);\n        const user = await prismadb.user.create({\n            data: {\n                email,\n                name,\n                hashedPassword,\n                image: \"\",\n                emailVerified: new Date()\n            }\n        });\n        return res.status(201).json(user);\n    } catch (error) {\n        console.log(error);\n        res.status(400).end();\n    } finally{\n        await prismadb.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IseUNBQXlDO0FBQ3pDLDBEQUEwRDtBQUMxRCx5Q0FBeUM7QUFDekMseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixNQUFNO0FBQ04seUNBQXlDO0FBRXpDLGlDQUFpQztBQUNqQyw0Q0FBNEM7QUFDNUMsTUFBTTtBQUNOLFVBQVU7QUFDVixrREFBa0Q7QUFDbEQsdURBQXVEO0FBQ3ZELGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsV0FBVztBQUNYLFVBQVU7QUFDViwwQkFBMEI7QUFDMUIsMkVBQTJFO0FBQzNFLFFBQVE7QUFDUiwrREFBK0Q7QUFDL0QsZ0RBQWdEO0FBQ2hELGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIscUNBQXFDO0FBQ3JDLFdBQVc7QUFDWCxVQUFVO0FBQ1YseUNBQXlDO0FBQ3pDLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLE1BQU07QUFDTixJQUFJO0FBQ3dCO0FBQ2tCO0FBRzlDLE1BQU1FLFdBQVcsSUFBSUQsd0RBQVlBO0FBRWxCLGVBQWVFLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0I7SUFFcEJDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JIO0lBRTlCLElBQUlBLElBQUlJLE1BQU0sS0FBSyxRQUFRO1FBQ3pCSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLEtBQUs7UUFBcUI7UUFDakQ7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBR1YsSUFBSVcsSUFBSTtRQUMxQyxNQUFNQyxlQUFlLE1BQU1kLFNBQVNlLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ2xEQyxPQUFPO2dCQUNMUDtZQUNGO1FBQ0Y7UUFDQSxJQUFJSSxjQUFjO1lBQ2hCLE9BQU9YLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVVLE9BQU87WUFBMEI7UUFDakU7UUFDQSxNQUFNQyxpQkFBaUIsTUFBTXJCLGtEQUFXLENBQUNjLFVBQVU7UUFDbkQsTUFBTUcsT0FBTyxNQUFNZixTQUFTZSxJQUFJLENBQUNNLE1BQU0sQ0FBQztZQUN0Q0MsTUFBTTtnQkFDSlo7Z0JBQ0FDO2dCQUNBUTtnQkFDQUksT0FBTztnQkFDUEMsZUFBZSxJQUFJQztZQUNyQjtRQUNGO1FBQ0EsT0FBT3RCLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNPO0lBQzlCLEVBQUUsT0FBT0csT0FBTztRQUNkZCxRQUFRQyxHQUFHLENBQUNhO1FBQ1pmLElBQUlJLE1BQU0sQ0FBQyxLQUFLbUIsR0FBRztJQUNyQixTQUFVO1FBQ1IsTUFBTTFCLFNBQVMyQixXQUFXO0lBQzVCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRmbGl4LWNsb25lLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbi8vIGltcG9ydCBwcmlzbWFkYiBmcm9tIFwiQC9saWIvcHJpc21hZGJcIjtcclxuLy8gaW1wb3J0IHsgTmV4dEFwaVJlc3BvbnNlLCBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbi8vICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuLy8gICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4vLyApIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCd3b3JraW5nIGluIGFwaScscmVxKTtcclxuXHJcbi8vICAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbi8vICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7bXNnOidydW5uaWcnfSk7XHJcbi8vICAgfVxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbi8vICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWFkYi5maW5kVW5pcXVlKHtcclxuLy8gICAgICAgd2hlcmU6IHtcclxuLy8gICAgICAgICBlbWFpbCxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBlcnJvcjogXCJFbWFpbCBpcyBhbHJlYWR5IGluIHVzZVwiIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc3QgaGFzaGVkUGFzc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEyKTtcclxuLy8gICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmNyZWF0ZSh7XHJcbi8vICAgICAgIGRhdGE6IHtcclxuLy8gICAgICAgICBlbWFpbCxcclxuLy8gICAgICAgICBuYW1lLFxyXG4vLyAgICAgICAgIGhhc2hlZFBhc3Nzd29yZCxcclxuLy8gICAgICAgICBpbWFnZTogXCJcIixcclxuLy8gICAgICAgICBlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24odXNlcik7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcclxuLy8gICB9XHJcbi8vIH1cclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVzcG9uc2UsIE5leHRBcGlSZXF1ZXN0IH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmNvbnN0IHByaXNtYWRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGNvbnNvbGUubG9nKFwid29ya2luZyBpbiBhcGlcIiwgcmVxKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1zZzogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7IGVycm9yOiBcIkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMik7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICBlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24odXNlcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgcHJpc21hZGIuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImJjcnlwdCIsIlByaXNtYUNsaWVudCIsInByaXNtYWRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibXNnIiwiZW1haWwiLCJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVycm9yIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiY3JlYXRlIiwiZGF0YSIsImltYWdlIiwiZW1haWxWZXJpZmllZCIsIkRhdGUiLCJlbmQiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();