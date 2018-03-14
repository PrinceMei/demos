webpackJsonp([3],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(36);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38811b24_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(62);
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38811b24_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vertical_center_index_scss__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vertical_center_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vertical_center_index_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Vertical',
  data() {
    return {};
  },
  components: {}
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "body {\n  font-size: 12px;\n  font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;\n  word-break: break-word;\n  text-rendering: optimizeLegibility;\n  color: #333;\n  background-color: #f4f5f5; }\n\n#vertical {\n  background-color: #fff;\n  max-width: 700px;\n  padding: 24px;\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto; }\n  #vertical .box__title {\n    font-size: 18px;\n    color: #0d1a26;\n    font-family: Lato, \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    clear: both;\n    margin-bottom: 0.6em; }\n  #vertical .box__demo {\n    border: 1px solid #ebedf0;\n    padding: 42px 24px 50px;\n    color: rgba(0, 0, 0, 0.65); }\n  #vertical .box__code {\n    font-size: 13px;\n    margin: 16px 0;\n    overflow: auto;\n    color: black;\n    background: #f2f4f5;\n    font-family: \"Lucida Console\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.2;\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n    -webkit-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    border-radius: 2px; }\n  #vertical .table {\n    display: table-cell;\n    vertical-align: middle;\n    width: 200px;\n    height: 200px;\n    background-color: #1890ff; }\n    #vertical .table-cell {\n      margin-left: auto;\n      margin-right: auto;\n      width: 100px;\n      height: 100px;\n      background-color: #fff; }\n  #vertical .flex {\n    width: 200px;\n    height: 200px;\n    background-color: #1890ff;\n    color: #fff;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  #vertical .position {\n    width: 200px;\n    height: 200px;\n    background-color: #1890ff;\n    color: #fff;\n    position: relative; }\n    #vertical .position-child {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 100px;\n      height: 100px;\n      margin-left: -50px;\n      margin-top: -50px;\n      background-color: #f8f8f8; }\n  #vertical .translate {\n    width: 200px;\n    height: 200px;\n    background-color: #1890ff;\n    color: #fff;\n    position: relative; }\n    #vertical .translate-child {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      -webkit-transform: translate(-50%, -50%);\n      -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      width: 100px;\n      height: 100px;\n      background-color: #f8f8f8; }\n  #vertical .reset {\n    width: 200px;\n    height: 200px;\n    background-color: #1890ff;\n    color: #fff;\n    position: relative; }\n    #vertical .reset-child {\n      position: absolute;\n      width: 100px;\n      height: 100px;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      margin: auto;\n      background-color: #f8f8f8; }\n  #vertical .lineHeight {\n    width: 200px;\n    height: 200px;\n    background-color: #1890ff;\n    color: #fff;\n    line-height: 200px;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vertical"}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"box__title"},[_vm._v("\n      方法一： table-cell\n    ")]),_vm._v(" "),_c('div',{staticClass:"box__demo"},[_c('div',{staticClass:"table"},[_c('div',{staticClass:"table-cell"})])]),_vm._v(" "),_c('div',{staticClass:"box__code"},[_vm._v("\n      .table{\n        display: table-cell;\n        vertical-align: middle;\n        width: 200px;\n        height: 200px;\n        background-color: #1890ff;\n      }\n      .table-cell{\n        margin-left: auto;\n        margin-right: auto;\n        width: 100px;\n        height: 100px;\n        background-color: #fff;\n      }\n    ")])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"box__title"},[_vm._v("\n      方法二： display:flex\n    ")]),_vm._v(" "),_c('div',{staticClass:"box__demo"},[_c('div',{staticClass:"flex"},[_c('div',[_c('p',[_vm._v("文字垂直居中")])])])]),_vm._v(" "),_c('div',{staticClass:"box__code"},[_vm._v("\n      .flex{\n        width: 200px;\n        height: 200px;\n        background-color: #1890ff;\n        color: #fff;\n\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -webkit-box-pack:center;\n        -webkit-justify-content:center;\n        -ms-flex-pack:center;\n        justify-content:center;\n      }\n    ")])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"box__title"},[_vm._v("\n      方法三： 绝对定位和负边距(确定子元素宽高)\n    ")]),_vm._v(" "),_c('div',{staticClass:"box__demo"},[_c('div',{staticClass:"position"},[_c('div',{staticClass:"position-child"})])]),_vm._v(" "),_c('div',{staticClass:"box__code"},[_vm._v("\n      .position{\n        width: 200px;\n        height: 200px;\n        background-color: #1890ff;\n        color: #fff;\n\n        position: relative;\n      }\n      position-child{\n        position: absolute;\n        top:50%;\n        left:50%;\n        width: 100px;\n        height: 100px;\n        margin-left: -50px;\n        margin-top: -50px;\n        background-color: #f8f8f8;\n        color: #000;\n      }\n    ")])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"box__title"},[_vm._v("\n      方法四： translate(方法三的变种, 但子元素可不固定高度、宽度)\n    ")]),_vm._v(" "),_c('div',{staticClass:"box__demo"},[_c('div',{staticClass:"translate"},[_c('div',{staticClass:"translate-child"})])]),_vm._v(" "),_c('div',{staticClass:"box__code"},[_vm._v("\n      .translate{\n        width: 200px;\n        height: 200px;\n        background-color: #1890ff;\n        color: #fff;\n\n        position: relative;\n      }\n      .translate-child{\n        position: absolute;\n        top:50%;             \n        left:50%;             \n        transform:translate(-50%,-50%);             \n        -webkit-transform:translate(-50%,-50%);             \n        -moz-transform:translate(-50%,-50%);             \n        -ms-transform:translate(-50%,-50%);\n        width: 100px;\n        height: 100px;\n        background-color: #f8f8f8;\n      }\n    ")])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"box__title"},[_vm._v("\n      方法五： top,bottom,left,right: 0\n    ")]),_vm._v(" "),_c('div',{staticClass:"box__demo"},[_c('div',{staticClass:"reset"},[_c('div',{staticClass:"reset-child"})])]),_vm._v(" "),_c('div',{staticClass:"box__code"},[_vm._v("\n      .reset{\n        width: 200px;\n        height: 200px;\n        background-color: #1890ff;\n        color: #fff;\n\n        position: relative;\n      }\n      .reset-child{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        margin:auto;\n        background-color: #f8f8f8;\n      }\n    ")])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"box__title"},[_vm._v("\n      方法六： line-height(常用于文字垂直居中)\n    ")]),_vm._v(" "),_c('div',{staticClass:"box__demo"},[_c('div',{staticClass:"lineHeight"},[_c('p',[_vm._v("文字垂直居中")])])]),_vm._v(" "),_c('div',{staticClass:"box__code"},[_vm._v("\n      .lineHeight{\n        width: 200px;\n        height: 200px;\n        background-color: #1890ff;\n        color: #fff;\n        line-height: 200px;\n        text-align: center;\n      }\n    ")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=3.js.map