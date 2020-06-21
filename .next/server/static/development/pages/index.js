module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Access.js":
/*!******************************!*\
  !*** ./components/Access.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ "./components/Map.js");
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Access.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Access = props => {
  const map_style = props.type === 'top' ? 'top' : 'sub';
  return __jsx("section", {
    className: `jsx-${styles.__hash}` + " " + (map_style || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `jsx-${styles.__hash}` + " " + "map_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_Map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("address", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("dl", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("dt", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "\u6240\u5728\u5730"), __jsx("dd", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "\u795E\u5948\u5DDD\u770C\u6A2A\u6D5C\u5E02\u795E\u5948\u5DDD\u533A\u516D\u89D2\u6A4B1\u4E01\u76EE11-2\u30D3\u30EB\u30CC\u30FC\u30F4\u767D\u697D403"), __jsx("dt", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "\u30A2\u30AF\u30BB\u30B9"), __jsx("dd", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "\u96FB\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u65B9", __jsx("br", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 24
    }
  }), "\u30FB\u6771\u6025\u6771\u6A2A\u7DDA \u767D\u697D\u99C5\u897F\u53E3\u3088\u308A\u5F92\u6B694\u5206"), __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\u30D0\u30B9\u3067\u304A\u8D8A\u3057\u306E\u65B9", __jsx("br", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 24
    }
  }), "\u30FB\u6A2A\u6D5C\u5E02\u55B6\u30D0\u30B9 \u300C\u516D\u89D2\u6A4B\u300D\u505C\u7559\u6240\u3088\u308A\u5F92\u6B692\u5206")), __jsx("dt", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "\u8A3A\u7642\u6642\u9593"), __jsx("dd", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "9:00 - 13:00 / 14:30 - 17:00 "), __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "\u5B9A\u4F11\u65E5 \u65E5\u66DC\u65E5\u30FB\u795D\u65E5"), __jsx("table", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("tbody", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("tr", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, "\u53D7\u4ED8\u6642\u9593"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, "\u6708"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "\u706B"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, "\u6C34"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, "\u6728"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "\u91D1"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, "\u571F"), __jsx("th", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "\u65E5")), __jsx("tr", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "9:00-13:00"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "\xD7")), __jsx("tr", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, "14:30-17:00"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, "\u25CB"), __jsx("td", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "\xD7"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles));
};

const styles = new String("section.jsx-1024523679{background-color:#fff;}.top.jsx-1024523679 .map_wrapper.jsx-1024523679{background-color:gray;width:100vw;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:500px;}.sub.jsx-1024523679 .map_wrapper.jsx-1024523679{background-color:gray;width:100%;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:500px;}address.jsx-1024523679{width:960px;margin:0 auto;margin-top:48px;-webkit-letter-spacing:0.15em;-moz-letter-spacing:0.15em;-ms-letter-spacing:0.15em;letter-spacing:0.15em;line-height:1.5em;}dl.jsx-1024523679{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}dt.jsx-1024523679{width:20%;color:#42B4D1;font-size:20px;border-bottom:1px solid #F7F7F7;padding:32px 0;}dd.jsx-1024523679{width:80%;color:#8A969A;font-size:16px;border-bottom:1px solid #F7F7F7;padding:32px 0;}table.jsx-1024523679{margin-top:32px;width:100%;background-color:red;text-align:center;border:1px solid #F7F7F7;}th.jsx-1024523679{background-color:#68B9CE;color:#fff;height:48px;line-height:48px;border:1px solid #F7F7F7;}td.jsx-1024523679{background-color:#fff;color:#AAAAAA;height:48px;line-height:48px;border:1px solid #F7F7F7;}th.jsx-1024523679:first-child,td.jsx-1024523679:first-child{width:20%;}dt.jsx-1024523679:last-of-type,dd.jsx-1024523679:last-of-type{border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9BY2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUd5QixBQUdELEFBUUEsQUFRVixBQU9FLEFBSUosQUFPQSxBQU9NLEFBT1MsQUFPSCxBQU9aLEFBR0csVUFyQ0UsQUFPQSxBQTRCaEIsRUE5Q2dCLEFBaURoQixJQXhCWSxNQTVDWixBQUdhLEFBUUQsQUErQ0csRUEzQkMsQUFPQSxDQWFKLENBL0JLLENBeUJLLE1BakNILENBUkEsRUFnRE4sQUFPQSxHQTNCb0IsQUFPQSxHQWxCVCxNQXlCTCxBQU9ELEFBT0EsR0EvQ1AsQ0FSQSxRQVNrQixDQVJBLElBZ0RGLEFBT0EsQ0FkQSxLQWRWLEFBT0EsR0FkRCxZQVFoQixBQU9BLElBY0EsQUFPQSxDQWRBLHdDQXJCQSxnQkFMbUIsTUFQTCxDQVJBLFdBZ0JkLENBUEEsQ0FSQSIsImZpbGUiOiIvVXNlcnMvbXlhYmUvU2l0ZXMvcmVnYWxvL2NvbXBvbmVudHMvQWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuaW1wb3J0IE1hcCBmcm9tICcuL01hcCc7XG5cbmNvbnN0IEFjY2VzcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtYXBfc3R5bGUgPSBwcm9wcy50eXBlID09PSAndG9wJyA/ICd0b3AnIDogJ3N1Yic7XG4gIHJldHVybihcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e21hcF9zdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcF93cmFwcGVyXCI+XG4gICAgICAgIDxNYXAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGFkZHJlc3M+XG4gICAgICAgIDxkbD5cbiAgICAgICAgICA8ZHQ+5omA5Zyo5ZywPC9kdD5cbiAgICAgICAgICA8ZGQ+56We5aWI5bed55yM5qiq5rWc5biC56We5aWI5bed5Yy65YWt6KeS5qmLMeS4geebrjExLTLjg5Pjg6vjg4zjg7zjg7Tnmb3mpb00MDM8L2RkPlxuICAgICAgICAgIDxkdD7jgqLjgq/jgrvjgrk8L2R0PlxuICAgICAgICAgIDxkZD5cbiAgICAgICAgICAgIDxwPumbu+i7iuOBp+OBiui2iuOBl+OBruaWuTxici8+44O75p2x5oCl5p2x5qiq57eaIOeZvealvemnheilv+WPo+OCiOOCiuW+kuatqTTliIY8L3A+XG4gICAgICAgICAgICA8cD7jg5DjgrnjgafjgYrotorjgZfjga7mlrk8YnIvPuODu+aoqua1nOW4guWWtuODkOOCuSDjgIzlha3op5LmqYvjgI3lgZznlZnmiYDjgojjgorlvpLmraky5YiGPC9wPlxuICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgPGR0PuiouueZguaZgumWkzwvZHQ+XG4gICAgICAgICAgPGRkPlxuICAgICAgICAgICAgPHA+OTowMCAtIDEzOjAwIC8gMTQ6MzAgLSAxNzowMCA8L3A+XG4gICAgICAgICAgICA8cD7lrprkvJHml6Ug5pel5puc5pel44O756Wd5pelPC9wPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPuWPl+S7mOaZgumWkzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+5pyIPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD7ngas8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPuawtDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+5pyoPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD7ph5E8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPuWcnzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+5pelPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD45OjAwLTEzOjAwPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD7il4s8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPuKXizwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+4peLPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD7il4s8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPuKXizwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+4peLPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD7DlzwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+MTQ6MzAtMTc6MDA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPuKXizwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+4peLPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD7il4s8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPuKXizwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+4peLPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD7il4s8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPsOXPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2RkPlxuICAgICAgICA8L2RsPlxuICAgICAgPC9hZGRyZXNzPlxuICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbnNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udG9wIC5tYXBfd3JhcHBlcntcbiAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICB3aWR0aDoxMDB2dztcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBoZWlnaHQ6NTAwcHg7XG59XG4uc3ViIC5tYXBfd3JhcHBlcntcbiAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICB3aWR0aDoxMDAlO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGhlaWdodDo1MDBweDtcbn1cbmFkZHJlc3N7XG4gIHdpZHRoOjk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDo0OHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICBsaW5lLWhlaWdodDoxLjVlbTtcbn1cbmRse1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6d3JhcDtcbn1cbmR0e1xuICB3aWR0aDoyMCU7XG4gIGNvbG9yOiAjNDJCNEQxO1xuICBmb250LXNpemU6MjBweDtcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0Y3RjdGNztcbiAgcGFkZGluZzogMzJweCAwO1xufVxuZGR7XG4gIHdpZHRoOjgwJTtcbiAgY29sb3I6ICM4QTk2OUE7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRjdGN0Y3O1xuICBwYWRkaW5nOiAzMnB4IDA7XG59XG50YWJsZXtcbiAgbWFyZ2luLXRvcDozMnB4O1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XG59XG50aHtcbiAgYmFja2dyb3VuZC1jb2xvcjojNjhCOUNFO1xuICBjb2xvcjojZmZmO1xuICBoZWlnaHQ6NDhweDtcbiAgbGluZS1oZWlnaHQ6NDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y3RjdGNztcbn1cbnRke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gIGNvbG9yOiNBQUFBQUE7XG4gIGhlaWdodDo0OHB4O1xuICBsaW5lLWhlaWdodDo0OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjdGN0Y3O1xufVxudGg6Zmlyc3QtY2hpbGQsdGQ6Zmlyc3QtY2hpbGR7XG4gIHdpZHRoOjIwJTtcbn1cbmR0Omxhc3Qtb2YtdHlwZSxkZDpsYXN0LW9mLXR5cGV7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmBcblxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzO1xuIl19 */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Access.js */");
styles.__hash = "1024523679";
/* harmony default export */ __webpack_exports__["default"] = (Access);

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Button = ({
  children
}) => {
  return __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, children), __jsx("img", {
    src: "../static/Icon_arrow.svg",
    alt: "arrow",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles)));
};

const styles = new String("a.jsx-3869505422{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;color:#fff;background-color :#68B9CE;border-radius:8px;border-bottom:solid #53A4B9 4px;line-height:58px;margin-bottom:16px;}a.jsx-3869505422:active{-webkit-transform:translateY(4px);-ms-transform:translateY(4px);transform:translateY(4px);border-bottom:none;}img.jsx-3869505422{display:inline-block;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);margin-left:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUdnQixBQVdhLEFBSU4scUJBQ0kscURBZkQsZ0JBV0osa0JBS0osQ0FKakIsZUFLQSxpREFoQlksV0FDQyxXQUNlLDBCQUNSLGtCQUNjLGdDQUNoQixpQkFDRSxtQkFDcEIiLCJmaWxlIjoiL1VzZXJzL215YWJlL1NpdGVzL3JlZ2Fsby9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3QgQnV0dG9uID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvSWNvbl9hcnJvdy5zdmdcIiBhbHQ9XCJhcnJvd1wiLz5cbiAgICAgICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogIzY4QjlDRTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNTNBNEI5IDRweDtcbiAgbGluZS1oZWlnaHQ6NThweDtcbiAgbWFyZ2luLWJvdHRvbToxNnB4O1xufVxuYTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbmltZ3tcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTtcbiAgbWFyZ2luLWxlZnQ6OHB4O1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Button.js */");
styles.__hash = "3869505422";
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Contact = () => {
  return __jsx("section", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089\u304B\u3089"), __jsx("div", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("address", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "tel:09061069510",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/Icon_telephone_white.svg",
    alt: "telephone",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 37
    }
  }), "090-6106-9510"), __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "\u53D7\u4ED8\u6642\u9593 9:00-13:00 / 14:30-17:00", __jsx("br", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 43
    }
  }), "(\u5B9A\u4F11\u65E5 \u65E5\u66DC\u65E5\u30FB\u795D\u65E5)")), __jsx("div", {
    className: `jsx-${styles.__hash}` + " " + "line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "../static/Icon_line_white.svg",
    alt: "line",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 16
    }
  }), "LINE\u3067\u306E\u3054\u4E88\u7D04")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles));
};

const styles = new String("section.jsx-224034464{margin-top:80px;height:250px;color:#fff;background-image:url(\"../static/contact_back.png\");background-position:center;position:relative;margin-bottom:80px;}section.jsx-224034464:after{display:block;content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:rgba(104,185,206,0.8);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);}h2.jsx-224034464{width:100%;text-align:center;font-size:24px;color:#fff;padding:24px 0;position:relative;z-index:10;}section.jsx-224034464>div.jsx-224034464{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:10;}address.jsx-224034464{width:50%;text-align:center;border-right:1px solid #fff;padding:18px 0;}address.jsx-224034464 a.jsx-224034464{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:16px;}address.jsx-224034464>a.jsx-224034464{font-size:45px;color:#fff;}address.jsx-224034464>p.jsx-224034464{font-size:14px;font-family:\"YuGothic\";font-weight:100;line-height:1.5em;}.line.jsx-224034464{width:50%;text-align:center;}.line.jsx-224034464 a.jsx-224034464{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;height:100%;color:#fff;width:300px;border:1px solid #fff;border-radius:10px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line.jsx-224034464 img.jsx-224034464{margin-bottom:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9Db250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFHa0IsQUFTRixBQVlILEFBU0EsQUFNRCxBQU1JLEFBS0UsQUFJQSxBQU1OLEFBSUcsQUFZSyxVQXBDQSxBQXFCQSxDQXBDQyxBQVNMLEdBckJILENBc0NBLEFBSWEsQ0FuRFgsRUF5RWQsT0EvRG1CLENBc0NuQixFQVg2QixBQXFCN0IsQ0F6RFksQUFxQkssU0E4QkEsRUFsRG1DLEdBUzdDLENBWUssS0FYSixLQXlDVyxDQTdCRixDQVhMLEFBeUJLLFdBeEJKLEdBV00sQ0FjbkIsQ0FlQSxFQVp5QixBQW1CVCxLQTlDTCxNQWdCUSxHQUxQLEFBb0NDLENBOUMyQixFQWJaLFFBd0I1QixDQW9DWSxHQS9CQSxRQWdDQyxHQS9CYixJQTdCbUIsS0E2REssS0FoREcsUUFaUCxTQTZEQyxVQTVEckIsU0E2RHdCLFNBeEJKLGVBekJwQixJQTBCQSxrREF3QnlCLG1HQUNKLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvbXlhYmUvU2l0ZXMvcmVnYWxvL2NvbXBvbmVudHMvQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPuOBlOS6iOe0hOODu+OBiuWVj+OBhOWQiOOCj+OBm+OBr+OBk+OBoeOCieOBi+OCiTwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YWRkcmVzcz5cbiAgICAgICAgICA8YSBocmVmPVwidGVsOjA5MDYxMDY5NTEwXCI+PGltZyBzcmM9XCIuLi9zdGF0aWMvSWNvbl90ZWxlcGhvbmVfd2hpdGUuc3ZnXCIgYWx0PVwidGVsZXBob25lXCIvPjA5MC02MTA2LTk1MTA8L2E+XG4gICAgICAgICAgPHA+5Y+X5LuY5pmC6ZaTIDk6MDAtMTM6MDAgLyAxNDozMC0xNzowMDxici8+KOWumuS8keaXpSDml6Xmm5zml6Xjg7vnpZ3ml6UpPC9wPlxuICAgICAgICA8L2FkZHJlc3M+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8YT48aW1nIHNyYz1cIi4uL3N0YXRpYy9JY29uX2xpbmVfd2hpdGUuc3ZnXCIgYWx0PVwibGluZVwiLz5MSU5F44Gn44Gu44GU5LqI57SEPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG5zZWN0aW9ue1xuICBtYXJnaW4tdG9wOjgwcHg7XG4gIGhlaWdodDoyNTBweDtcbiAgY29sb3I6I2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi9zdGF0aWMvY29udGFjdF9iYWNrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOjgwcHg7XG59XG5zZWN0aW9uOmFmdGVye1xuICBkaXNwbGF5OmJsb2NrO1xuICBjb250ZW50OlwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgei1pbmRleDowO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTA0LDE4NSwyMDYsMC44KTtcbiAgYmFja2Ryb3AtZmlsdGVyOmJsdXIoM3B4KTtcbn1cbmgye1xuICB3aWR0aDoxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6I2ZmZjtcbiAgcGFkZGluZzogMjRweCAwO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgei1pbmRleDoxMDtcbn1cbnNlY3Rpb24gPiBkaXZ7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB6LWluZGV4OjEwO1xufVxuYWRkcmVzc3tcbiAgd2lkdGg6NTAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxOHB4IDA7XG59XG5hZGRyZXNzIGF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOjE2cHg7XG59XG5hZGRyZXNzID4gYXtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBjb2xvcjojZmZmO1xufVxuYWRkcmVzcyA+IHB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiWXVHb3RoaWNcIjtcbiAgZm9udC13ZWlnaHQ6MTAwO1xuICBsaW5lLWhlaWdodDoxLjVlbTtcbn1cbi5saW5le1xuICB3aWR0aDo1MCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmxpbmUgYXtcbiAgZGlzcGxheTpmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OjEwMCU7XG4gIGNvbG9yOiNmZmY7XG4gIHdpZHRoOjMwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saW5lIGltZ3tcbiAgbWFyZ2luLWJvdHRvbTo4cHg7XG59XG5gXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Contact.js */");
styles.__hash = "224034464";
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Footer = () => {
  return __jsx("footer", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `jsx-${styles.__hash}` + " " + "footer_inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `jsx-${styles.__hash}` + " " + "address_innter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("figure", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "../static/logo.svg",
    alt: "",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })), __jsx("address", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "\u3012221-0802"), __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "\u795E\u5948\u5DDD\u770C\u6A2A\u6D5C\u5E02\u795E\u5948\u5DDD\u533A\u516D\u89D2\u6A4B\uFF11\u4E01\u76EE\uFF11\uFF11\u2212\uFF12", __jsx("br", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 39
    }
  }), "\u30D3\u30EB\u30CC\u30FC\u30F4\u767D\u697D403"), __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "TEL : 090-6106-9510"))), __jsx("nav", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 38
    }
  }, "\u306F\u3058\u3081\u306B"))), __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, "\u30E1\u30CB\u30E5\u30FC"))), __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "news",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "\u304A\u77E5\u3089\u305B"))), __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "access",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 39
    }
  }, "\u30A2\u30AF\u30BB\u30B9")))))), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}` + " " + "back_top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 24
    }
  }, __jsx("img", {
    src: "../static/Icon_arrow2.svg",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 48
    }
  }))), __jsx("small", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Copyright \xA9 2020 Regalo. All Rights Reserved.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles));
};

const styles = new String("footer.jsx-696155435{height:320px;background-color:#fff;width:100vw;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.footer_inner.jsx-696155435{width:1200px;margin:0 auto;padding-top:48px;position:relative;}figure.jsx-696155435{margin-bottom:24px;}address.jsx-696155435{font-size:12px;font-family:\"Yu-Gothic\";color:#AAAAAA;font-weight:100;line-height:1.4em;-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;}.address_innter.jsx-696155435{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}address.jsx-696155435>p.jsx-696155435:nth-child(3){margin-top:16px;}small.jsx-696155435{width:100%;margin:0 auto;text-align:center;display:inline-block;margin-top:40px;padding:24px 0;font-family:\"Yu-Gothic\";font-size:12px;font-weight:100;color:#AAAAAA;border-top:1px solid #F7F7F7;}ul.jsx-696155435{padding-top:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-696155435{margin-left:24px;color:#68B9CE;}.back_top.jsx-696155435{position:absolute;width:80px;height:80px;border-radius:80px;background-color:#fff;box-shadow:0px 2px 20px 0px rgba(0,0,0,0.08);right:0;top:-40px;line-height:80px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUdlLEFBUUEsQUFNTSxBQUdILEFBUUwsQUFLSyxBQUdMLEFBYU0sQUFJQSxBQUlDLFdBNUJMLEFBUUUsRUFqQ08sQUFRUCxFQVNVLENBYTFCLENBZ0JjLEFBSUUsQ0FJSixDQXhDWixNQW9CbUIsRUF6QkEsRUE4Q04sRUFKYixJQWxEYSxJQWlCRSxFQXNDSyxFQXJCRSxDQXpCSCxHQVJBLE1BaUJGLE9Bc0NNLEVBOUN2QixFQXlCaUIsQ0FqQ04sSUFpQlEsS0FoQlUsTUFpQ1osRUFxQjhCLEdBaENoQixFQUxSLElBMEJ2QixJQVR5Qix3QkFDVCxRQW9CUCxPQW5CUyxDQW9CUCxVQUNPLEtBcEJILFlBcUJJLEVBcEJZLEdBckMvQixhQTBEQSxRQXpDQSxLQXFCQSxPQWhCQSIsImZpbGUiOiIvVXNlcnMvbXlhYmUvU2l0ZXMvcmVnYWxvL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzX2lubnRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZmlndXJlPjxpbWcgc3JjPVwiLi4vc3RhdGljL2xvZ28uc3ZnXCIgYWx0PVwiXCIvPjwvZmlndXJlPlxuICAgICAgICAgICAgPGFkZHJlc3M+XG4gICAgICAgICAgICAgIDxwPuOAkjIyMS0wODAyPC9wPlxuICAgICAgICAgICAgICA8cD7npZ7lpYjlt53nnIzmqKrmtZzluILnpZ7lpYjlt53ljLrlha3op5LmqYvvvJHkuIHnm67vvJHvvJHiiJLvvJI8YnIvPuODk+ODq+ODjOODvOODtOeZvealvTQwMzwvcD5cbiAgICAgICAgICAgICAgPHA+VEVMIDogMDkwLTYxMDYtOTUxMDwvcD5cbiAgICAgICAgICAgIDwvYWRkcmVzcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cImFib3V0XCI+PGE+44Gv44GY44KB44GrPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIm1lbnVcIj48YT7jg6Hjg4vjg6Xjg7w8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwibmV3c1wiPjxhPuOBiuefpeOCieOBmzwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCJhY2Nlc3NcIj48YT7jgqLjgq/jgrvjgrk8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9XCJiYWNrX3RvcFwiPjxpbWcgc3JjPVwiLi4vc3RhdGljL0ljb25fYXJyb3cyLnN2Z1wiLz48L2E+PC9MaW5rPlxuICAgICAgICA8c21hbGw+Q29weXJpZ2h0IMKpIDIwMjAgUmVnYWxvLiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbmZvb3RlcntcbiAgaGVpZ2h0OjMyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gIHdpZHRoOjEwMHZ3O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uZm9vdGVyX2lubmVye1xuICB3aWR0aDoxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5maWd1cmV7XG4gIG1hcmdpbi1ib3R0b206MjRweDtcbn1cbmFkZHJlc3N7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiWXUtR290aGljXCI7XG4gIGNvbG9yOiNBQUFBQUE7XG4gIGZvbnQtd2VpZ2h0OjEwMDtcbiAgbGluZS1oZWlnaHQ6MS40ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbn1cbi5hZGRyZXNzX2lubnRlcntcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtcbn1cbmFkZHJlc3MgPiBwOm50aC1jaGlsZCgzKXtcbiAgbWFyZ2luLXRvcDoxNnB4O1xufVxuc21hbGx7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6NDBweDtcbiAgcGFkZGluZzogMjRweCAwO1xuICBmb250LWZhbWlseTpcIll1LUdvdGhpY1wiO1xuICBmb250LXNpemU6MTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6I0FBQUFBQTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGN0Y3Rjc7XG59XG51bHtcbiAgcGFkZGluZy10b3A6MjRweDtcbiAgZGlzcGxheTpmbGV4O1xufVxubGl7XG4gIG1hcmdpbi1sZWZ0OjI0cHg7XG4gIGNvbG9yOiAjNjhCOUNFO1xufVxuLmJhY2tfdG9we1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6ODBweDtcbiAgaGVpZ2h0OjgwcHg7XG4gIGJvcmRlci1yYWRpdXM6ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XG4gIHJpZ2h0OjA7XG4gIHRvcDotNDBweDtcbiAgbGluZS1oZWlnaHQ6ODBweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5gXG5cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Footer.js */");
styles.__hash = "696155435";
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => {
  return __jsx("header", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("figure", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "../static/logo.svg",
    alt: "",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }))))), __jsx("nav", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 34
    }
  }, "\u306F\u3058\u3081\u306B"))), __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, "\u30E1\u30CB\u30E5\u30FC"))), __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "news",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, "\u304A\u77E5\u3089\u305B"))), __jsx("li", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "access",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 35
    }
  }, "\u30A2\u30AF\u30BB\u30B9"))))), __jsx("div", {
    className: `jsx-${styles.__hash}` + " " + "telephone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "../static/Icon_telephone.svg",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }), __jsx("a", {
    href: "tel:09061069510",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 54
    }
  }, "090-6106-9510")), __jsx("span", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "\u53D7\u4ED8\u6642\u9593 9:00-13:00 / 14:30-17:00")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: `jsx-${styles.__hash}` + " " + "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B", __jsx("img", {
    src: "../static/Icon_arrow.svg",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles));
};

const styles = new String("header.jsx-859827179{position:fixed;z-index:100;margin-top:4vh;height:11vh;max-width:1200px;width:100%;box-shadow:0px 2px 20px 0px rgba(0,0,0,0.08);border-radius:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;}header.jsx-859827179>a.jsx-859827179{padding :17px 32px;margin-right:auto;}nav.jsx-859827179{margin-right:24px;}li.jsx-859827179{display:inline-block;margin-left :24px;}.telephone.jsx-859827179{height:36px;border-left:1px solid #F7F7F7;padding:0px 24px;}.telephone.jsx-859827179>p.jsx-859827179{font-size:21px;margin-bottom:2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.telephone.jsx-859827179>span.jsx-859827179{font-size:11px;font-family:\"\u6E38\u30B4\u30B7\u30C3\u30AF\";font-weight:100;color:#D3D3D3;}.button.jsx-859827179{max-height:44px;color:#fff;background-color :#68B9CE;padding:14px 27px;border-radius:8px;}.button.jsx-859827179>img.jsx-859827179{margin-left:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUdpQixBQWNLLEFBSUYsQUFHSSxBQUlULEFBS0csQUFLQSxBQU1DLEFBT0QsWUF0QmUsR0F6Qm5CLEFBOEJNLEFBS0csQ0FNVCxBQU9iLEVBOUJBLENBSm9CLEVBT0EsTUFwQkosQUF5Q1ksTUFYYixFQUtHLEVBckJsQixFQU9BLEdBcEJhLEFBd0JNLFNBV0gsRUFNSSxDQXhDRCxLQXdCbkIsTUFXQSxNQWxDYSxBQXdDTyxXQXZDMkIsT0F3Qy9DLGtCQWJBLG9CQTFCcUIsbUJBQ04sMEVBQ1ksaUdBQ04sNkZBQ0csc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4oXG4gICAgPGhlYWRlcj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8ZmlndXJlPjxpbWcgc3JjPVwiLi4vc3RhdGljL2xvZ28uc3ZnXCIgYWx0PVwiXCIvPjwvZmlndXJlPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cImFib3V0XCI+PGE+44Gv44GY44KB44GrPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayBocmVmPVwibWVudVwiPjxhPuODoeODi+ODpeODvDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIm5ld3NcIj48YT7jgYrnn6XjgonjgZs8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCJhY2Nlc3NcIj48YT7jgqLjgq/jgrvjgrk8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVsZXBob25lXCI+XG4gICAgICAgIDxwPjxpbWcgc3JjPVwiLi4vc3RhdGljL0ljb25fdGVsZXBob25lLnN2Z1wiIC8+PGEgaHJlZj1cInRlbDowOTA2MTA2OTUxMFwiPjA5MC02MTA2LTk1MTA8L2E+PC9wPlxuICAgICAgICA8c3Bhbj7lj5fku5jmmYLplpMgOTowMC0xMzowMCAvIDE0OjMwLTE3OjAwPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIj7jgZTkuojntITjg7vjgYrllY/jgYTlkIjjgo/jgZs8aW1nIHNyYz1cIi4uL3N0YXRpYy9JY29uX2Fycm93LnN2Z1wiIC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuaGVhZGVyIHtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHotaW5kZXg6MTAwO1xuICBtYXJnaW4tdG9wOjR2aDtcbiAgaGVpZ2h0OjExdmg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuaGVhZGVyID4gYXtcbiAgcGFkZGluZyA6IDE3cHggMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxubmF2e1xuICBtYXJnaW4tcmlnaHQ6MjRweDtcbn1cbmxpe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0IDogMjRweDtcbn1cbi50ZWxlcGhvbmV7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjdGN0Y3O1xuICBwYWRkaW5nOiAwcHggMjRweDtcbn1cbi50ZWxlcGhvbmUgPiBwe1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi1ib3R0b206MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbGVwaG9uZSA+IHNwYW57XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwi5ri444K044K344OD44KvXCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjRDNEM0QzO1xufVxuLmJ1dHRvbiB7XG4gIG1heC1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogIzY4QjlDRTtcbiAgcGFkZGluZzogMTRweCAyN3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uYnV0dG9uID4gaW1ne1xuICBtYXJnaW4tbGVmdDo0cHg7XG59XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Header.js */");
styles.__hash = "859827179";
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
/* harmony import */ var _static_Reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/Reset */ "./static/Reset.js");
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: `jsx-${styles.__hash}` + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\u6A2A\u6D5C\u306E\u7F8E\u5BB9\u6574\u4F53\u30B5\u30ED\u30F3 | Regalo")), _static_Reset__WEBPACK_IMPORTED_MODULE_6__["default"], _static_Style__WEBPACK_IMPORTED_MODULE_7__["default"], __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), children, __jsx(_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
};

const styles = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJrQiIsImZpbGUiOiIvVXNlcnMvbXlhYmUvU2l0ZXMvcmVnYWxvL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBSZXNldCBmcm9tICcuLi9zdGF0aWMvUmVzZXQnO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7mqKrmtZzjga7nvo7lrrnmlbTkvZPjgrXjg63jg7MgfCBSZWdhbG88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge1Jlc2V0fVxuICAgICAge1N0eWxlfVxuICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Q29udGFjdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbmEge1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Layout.js */");
styles.__hash = "1946005473";
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/myabe/Sites/regalo/components/Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Pin = props => {
  return __jsx("div", {
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "../static/logo_v_white.svg",
    alt: "Regalo\u306E\u5834\u6240",
    className: `jsx-${styles.__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: styles.__hash,
    __self: undefined
  }, styles));
};

const Map = () => {
  return __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyCxxpCoc0zVmL60eoQKft6Dh31tOm_uZsw"
    },
    defaultCenter: {
      lat: 35.487099,
      lng: 139.625780
    },
    defaultZoom: 15,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(Pin, {
    lat: 35.487099,
    lng: 139.625780,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, "Regalo"));
};

const styles = new String("div.jsx-175815612{width:50px;height:50px;background-color:#68B9CE;text-align:center;line-height:50px;padding:10px;border-radius:100px;box-shadow:0 2px 20px 0 rgba(0,0,0,0.2);position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-100%);-ms-transform:translate(-50%,-100%);transform:translate(-50%,-100%);}div.jsx-175815612::before{content:\"\";display:block;width:0;height:0;position:absolute;left:50%;bottom:-18px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);border-top:14px solid #68B9CE;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:10px solid transparent;}div.jsx-175815612 img.jsx-175815612{vertical-align:middle;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUdhLEFBY0EsQUFjWSxXQTNCWCxBQWNFLFdBY0YsQ0EzQmEsRUFjakIsUUFDQyxBQWFWLFNBWm1CLE1BZkEsWUFnQlIsTUFmTyxHQWdCSCxhQUNjLENBaEJmLGFBQ08sb0JBQ3FCLHdDQUN2QixrQkFDUixDQWFvQixRQVpyQixRQUN5QixjQVlBLGtDQUNDLG1DQUNFLHlCQWJ0QyxZQWNBIiwiZmlsZSI6Ii9Vc2Vycy9teWFiZS9TaXRlcy9yZWdhbG8vY29tcG9uZW50cy9NYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XG5cbmNvbnN0IFBpbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2xvZ29fdl93aGl0ZS5zdmdcIiBhbHQ9XCJSZWdhbG/jga7loLTmiYBcIi8+XG4gICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYXAgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcbiAgICAgICAga2V5OiBwcm9jZXNzLmVudi5HT09HTEVfQVBJX0tFWSxcbiAgICAgIH19XG4gICAgICBkZWZhdWx0Q2VudGVyPXt7XG4gICAgICAgIGxhdDogMzUuNDg3MDk5LFxuICAgICAgICBsbmc6IDEzOS42MjU3ODBcbiAgICAgIH19XG4gICAgICBkZWZhdWx0Wm9vbT17MTV9XG4gICAgPlxuICAgIDxQaW5cbiAgICAgIGxhdD17MzUuNDg3MDk5fVxuICAgICAgbG5nPXsxMzkuNjI1NzgwfVxuICAgID5cbiAgICBSZWdhbG9cbiAgICA8L1Bpbj5cbiAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbmRpdntcbiAgd2lkdGg6NTBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzY4QjlDRTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OjUwcHg7XG4gIHBhZGRpbmc6MTBweDtcbiAgYm9yZGVyLXJhZGl1czoxMDBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbn1cbmRpdjo6YmVmb3Jle1xuICBjb250ZW50OlwiXCI7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjA7XG4gIGhlaWdodDowO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IC0xOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci10b3A6MTRweCBzb2xpZCAjNjhCOUNFO1xuICBib3JkZXItbGVmdDo4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDo4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbmRpdiBpbWd7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXX0= */\n/*@ sourceURL=/Users/myabe/Sites/regalo/components/Map.js */");
styles.__hash = "175815612";
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./lib/instagram.js":
/*!**************************!*\
  !*** ./lib/instagram.js ***!
  \**************************/
/*! exports provided: instagramAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagramAPI", function() { return instagramAPI; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = 'https://graph.instagram.com';
const INSTAGRAM_ACCESS_TOKEN = "IGQVJWNWNHYlY1ZA1dTOC1GSTVQbmo5ekVoZAkhQYy13anNEakNZAME85N0ZAYbXBTcm5weUJhb0lTcm5lbkxfSnl3ZAHdOZAWo4TXBYcXU5WHpid2gyek1Vb1N3ak1XSEgyUnA0NjVRM1ZAB";
const instagramAPI = async () => {
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(API_URL + '/me/media?fields=media_url&access_token=' + INSTAGRAM_ACCESS_TOKEN);
  const json = await res.json();
  return json;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Access */ "./components/Access.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/instagram */ "./lib/instagram.js");
var _jsxFileName = "/Users/myabe/Sites/regalo/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const top = ({
  instagramPosts
}) => {
  return __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "fv",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fv_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Make you smile."), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "\u7B11\u9854\u3092\u5C4A\u3051\u308B", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 23
    }
  }), "\u7F8E\u5BB9\u6574\u4F53\u30B5\u30ED\u30F3"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "REGALO(\u30EC\u30AC-\u30ED)\u306F\u60A3\u8005\u306E\u7686\u69D8\u306B\u7B11\u9854\u3092\u5C4A\u3051\u308B\u3001\u6A2A\u6D5C\u306B\u3042\u308B\u7F8E\u5BB9\u6574\u4F53\u30B5\u30ED\u30F3\u3067\u3059\u3002\u4F53\u306E\u304A\u60A9\u307F\u3092\u6301\u3064\u60A3\u8005\u3072\u3068\u308A\u3072\u3068\u308A\u306B\u5BC4\u308A\u6DFB\u3044\u3001\u5065\u3084\u304B\u3067\u6C17\u6301\u3061\u306E\u3088\u3044\u66AE\u3089\u3057\u3092\u304A\u624B\u4F1D\u3044\u81F4\u3057\u307E\u3059\u3002"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "REGALO\u306B\u3064\u3044\u3066")), __jsx("div", {
    className: "fv_right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 700 530",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M369.953-10C560.539-10,706.1,108.058,697.707,260.1S513.439,520,322.854,520-19.429,410.164-.321,260.1,179.368-10,369.953-10Z",
    transform: "translate(1.948 10)",
    transform: "translate(30,30)",
    fill: "#CDE9F0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }), __jsx("image", {
    className: "mv",
    href: "../static/mv_image01.jpg",
    width: "130%",
    height: "130%",
    x: "-200",
    y: "-70",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }), __jsx("clipPath", {
    id: "mask",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M369.953-10C560.539-10,706.1,108.058,697.707,260.1S513.439,520,322.854,520-19.429,410.164-.321,260.1,179.368-10,369.953-10Z",
    transform: "translate(1.948 10)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }))))), __jsx("section", {
    className: "news",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "NEWS"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "2020.5.1"), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "5\u6708\u306E\u4F11\u8A3A\u65E5\u306E\u304A\u77E5\u3089\u305B")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "news",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "more",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "\u3082\u3063\u3068\u898B\u308B", __jsx("img", {
    src: "../static/Icon_arrow.svg",
    alt: "arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 38
    }
  })))), __jsx("section", {
    className: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "about_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "\u4F53\u306E\u5065\u5EB7\u306F\u3001", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }), "\u5FC3\u306E\u5065\u5EB7\u3002"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "\u80A9\u3053\u308A\u3001\u8170\u75DB\u3001\u982D\u75DB\u3001\u95A2\u7BC0\u75DB\u3001\u751F\u7406\u75DB\u7686\u3055\u3093\u306F\u4F53\u306B\u4E0D\u8ABF\u306F\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 49
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 54
    }
  }), "\u3053\u306E\u3088\u3046\u306A\u4E0D\u8ABF\u304C\u3042\u308B\u3068\u3001\u4F53\u304C\u8F9B\u3044\u3060\u3051\u3067\u306A\u304F\u3001\u6C17\u5206\u3082\u843D\u3061\u8FBC\u3093\u3067\u3057\u307E\u3044\u307E\u3059\u3002REGALO(\u30EC\u30AC-\u30ED)\u3067\u306F\u60A3\u8005\u306E\u7686\u3055\u3093\u306E\u4E0D\u8ABF\u3092\u6539\u5584\u3067\u304D\u308B\u80CC\u8853\u3092\u63D0\u4F9B\u3057\u3001\u4F53\u3060\u3051\u3067\u306A\u304F\u5FC3\u3082\u5065\u5EB7\u306B\u306A\u308C\u308B\u3088\u3046\u306B\u30B5\u30DD\u30FC\u30C8\u81F4\u3057\u307E\u3059\u3002", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 157
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 162
    }
  }), "\u305C\u3072\u4F53\u306E\u4E0D\u8ABF\u3092\u304A\u6301\u3061\u306E\u65B9\u306F\u3001\u4E00\u5EA6\u304A\u8D8A\u3057\u304F\u3060\u3055\u3044\u3002"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "\u30E1\u30CB\u30E5\u30FC\u30FB\u6599\u91D1")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }), "\u80A9\u3053\u308A"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }), "\u8170\u75DB"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }), "\u982D\u75DB"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }), "\u95A2\u7BC0\u75DB"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }), "\u751F\u7406\u75DB")))), __jsx("section", {
    className: "voice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "\u304A\u5BA2\u69D8\u306E\u58F0"), __jsx("div", {
    className: "voice_card_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "voice_card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "\u6A2A\u6D5C\u5E02 29\u6B73 \u5973\u6027"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "\u305A\u3063\u3068\u8170\u75DB\u306B\u60A9\u307E\u3055\u308C\u3066\u304D\u307E\u3057\u305F\u304C\u3001REGALO\u306B\u901A\u3046\u3053\u3068\u3067\u3001\u4F53\u304C\u697D\u306B\u306A\u308A\u6BCE\u65E5\u3092\u7B11\u9854\u3067\u904E\u3054\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u672C\u5F53\u306B\u611F\u8B1D\u3057\u3066\u3044\u307E\u3059\u3002")), __jsx("div", {
    className: "voice_card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "\u6A2A\u6D5C\u5E02 29\u6B73 \u5973\u6027"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "\u305A\u3063\u3068\u8170\u75DB\u306B\u60A9\u307E\u3055\u308C\u3066\u304D\u307E\u3057\u305F\u304C\u3001REGALO\u306B\u901A\u3046\u3053\u3068\u3067\u3001\u4F53\u304C\u697D\u306B\u306A\u308A\u6BCE\u65E5\u3092\u7B11\u9854\u3067\u904E\u3054\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u672C\u5F53\u306B\u611F\u8B1D\u3057\u3066\u3044\u307E\u3059\u3002")), __jsx("div", {
    className: "voice_card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\u6A2A\u6D5C\u5E02 29\u6B73 \u5973\u6027"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "\u305A\u3063\u3068\u8170\u75DB\u306B\u60A9\u307E\u3055\u308C\u3066\u304D\u307E\u3057\u305F\u304C\u3001REGALO\u306B\u901A\u3046\u3053\u3068\u3067\u3001\u4F53\u304C\u697D\u306B\u306A\u308A\u6BCE\u65E5\u3092\u7B11\u9854\u3067\u904E\u3054\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u672C\u5F53\u306B\u611F\u8B1D\u3057\u3066\u3044\u307E\u3059\u3002")))), __jsx(_components_Access__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: "instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "INSTAGRAM"), __jsx("div", {
    className: "instagram_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, instagramPosts.data.slice(0, 8).map(instagramPost => {
    return __jsx("div", {
      className: "instagram_item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: instagramPost.media_url,
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 49
      }
    }));
  })))));
};

const getStaticProps = async () => {
  const instagramPosts = (await Object(_lib_instagram__WEBPACK_IMPORTED_MODULE_6__["instagramAPI"])()) || [];
  return {
    props: {
      instagramPosts
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (top);

/***/ }),

/***/ "./static/Reset.js":
/*!*************************!*\
  !*** ./static/Reset.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/myabe/Sites/regalo/static/Reset.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (__jsx("style", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 16
  }
}, `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  `));

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/myabe/Sites/regalo/static/Style.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const blue = "#68B9CE";
const gray = "#8A969A";
/* harmony default export */ __webpack_exports__["default"] = (__jsx("style", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 16
  }
}, `
  body{
    margin: 0 auto;
    width: 1200px;
    font-family: fot-tsukuardgothic-std,sans-serif;
    font-weight: 700;
    font-style: normal;
    background-image: url("../static/background_circle.svg");
    background-repeat: no-repeat;
    background-color: #F7F7F7;
  }
  a{
    text-decoration: none;
    color:${blue};
  }
  .fv{
    padding-top:15vh;
    height:75vh;
    display: flex;
    align-items: center;
  }
  .fv_left{
    width:394px;
  }
  .fv h2{
    color: ${blue};
    font-size: 24px;
    letter-spacing: 0.2em;
  }
  .fv h1{
    color: ${blue};
    font-size: 3rem;
    letter-spacing: 0.15em;
    line-height:1.4em;
    margin-top:24px;
  }
  .fv p{
    color: ${gray};
    font-size: 15px;
    letter-spacing: 0.15em;
    line-height:2em;
    margin-top:32px;
    margin-bottom:32px;
  }
  .news{
    width: 100%;
    background-color: #fff;
    display:flex;
    height:10vh;
    align-items: center;
  }
  .news h2{
    color: ${blue};
    font-size:18px;
    padding: 0 32px;
    letter-spacing:0.15em;
    border-right: 1px #E3E3E3 solid;
  }
  .news span{
    color: ${blue};
    padding: 0 32px;
  }
  .news .data{
    color: ${gray};
    text-decoration: underline;
  }
  .news .more{
    font-size:14px;
    margin-left: auto;
    padding-right: 56px;
  }
  .news img{
    transform:rotate(270deg);
    margin-left:8px;
  }
  .about{
    background-color: #fff;
    padding: 100px 120px;
    display:flex;
  }
  .about_left{
    width:394px;
  }
  .about h2 {
    font-size: 54px;
    color: ${blue};
    letter-spacing: 0.2em;
    line-height:1.4em;
  }
  .about p {
    margin-top:64px;
    font-size: 16px;
    color: ${gray};
    letter-spacing: 0.15em;
    line-height:1.5em;
    margin-bottom:56px;
  }
  .voice{
    background-color:#fff;
    position:relative;
    padding-bottom:204px;
  }
  .voice::before{
    content : "";
    display: block;
    width:960px;
    height:300px;
    background-color:#F9FCFD;
    position:absolute;
    z-index:1;
    left: 50%;
    top: 30%;
    transform: translate(-50%);
  }
  .voice h2{
    font-size: 32px;
    color: ${blue};
    text-align: center;
    margin-bottom:32px;
    position: relative;
    z-index: 1
  }
  .voice_card{
    max-width:340px;
    height:296px;
    padding:32px 24px 48px;
    box-shadow: 0px 2px 10px 0 rgba(0,0,0,0.04);
    border-radius: 10px;
    box-sizing: border-box;
    margin-right:30px;
    background-color: #fff;
    position:relative;
    z-index:10;
  }
  .voice_card:last-child{
    margin-right:0px;
  }
  .voice_card figure{
    margin-bottom:12px;
    width:82px;
    height:82px;
    border-radius:100px;
    background-color:${blue};
    margin: 0 auto;
  }
  .voice_card span{
    display: inline-block;
    color: ${blue};
    font-size: 12px;
    width:100%;
    text-align:center;
    margin: 12px 0 24px;
  }
  .voice_card_wrapper{
    display:flex;
    justify-content: center;
  }
  .voice_card p{
    font-size: 14px;
    font-family: "Yu-Gothic";
    color: ${gray};
    font-weight: 100;
    line-height:1.8em;
    letter-spacing: 0.15em;
  }
  .instagram{
    padding:88px 0 120px;
    background-color:#fff;
  }
  .instagram h2{
    color:${blue};
    font-size: 32px;
    width: 100%;
    text-align:center;
  }
  .instagram_wrapper{
    margin:44px 120px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:flex-start;
  }
  .instagram_item{
    background-color:#F7F7F7;
    width:22%;
    margin-top:24px;
    position: relative;
  }
  .instagram_item::before{
    content: "";
    display: block;
    padding-top : 100%;

  }
  .instagram_item img{
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    object-fit: cover;
  }
  .fv_right{
    position:absolute;
    width:76vw;
    right:-9vw;
    z-index:-1;
  }
  .mv{
    clip-path: url(#mask);
  }
  .sub{
    background-color:#fff;
    padding:56px 120px;
    border-top: 1px solid #F7F7F7;
  }
  .sub h3{
    color:${blue};
    font-size:40px;
  }
  .sub p{
    color:${gray};
    margin-top:48px;
    font-size: 16px;
    line-height:1.8em;
  }
  .sub .name{
    color:${blue};
    font-size:20px;
    margin-top:0;
  }
  .sub .name span{
    font-size:16px;
    display:block;
  }
  .sub p dt {
    color:${blue};
    margin-top:16px;
  }
  .sub p dd {
    margin-bottom:16px;
  }
  .sub span{
    color:${blue};
  }
  `));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/myabe/Sites/regalo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map