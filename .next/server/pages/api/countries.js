"use strict";
(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 6142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_countries_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2721);

function handler(req, res) {
    res.status(200).send({
        countries: _data_countries_json__WEBPACK_IMPORTED_MODULE_0__
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [721], () => (__webpack_exec__(6142)));
module.exports = __webpack_exports__;

})();