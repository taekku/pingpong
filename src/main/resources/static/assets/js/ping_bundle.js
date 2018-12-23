(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ping"] = factory();
	else
		root["ping"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Ping_1 = __webpack_require__(2);
exports.Ping = Ping_1.Ping;
var Service_1 = __webpack_require__(5);
exports.Service = Service_1.Service;
var RequestKind_1 = __webpack_require__(3);
exports.RequestKind = RequestKind_1.RequestKind;
var Status_1 = __webpack_require__(4);
exports.Status = Status_1.Status;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestKind_1 = __webpack_require__(3);
var Status_1 = __webpack_require__(4);
/**
 * Class Ping
 * Client Side request parameter
 */
var Ping = /** @class */ (function () {
    function Ping(mId, kind) {
        if (kind === void 0) { kind = RequestKind_1.RequestKind.Query; }
        this._id = mId;
        this._size = 0;
        this._status = [];
        this._data = [];
        this._requestKind = kind;
    }
    Object.defineProperty(Ping.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Ping.prototype.clear = function () {
        this._data = [];
        this._status = [];
        this.setSize(0);
    };
    Object.defineProperty(Ping.prototype, "size", {
        /**
         * 가지고있는 Data의 갯수
         */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 데이터크기 조절
     * TODO 어떻게 해야 할지?
     * @param sz
     */
    Ping.prototype.setSize = function (sz) {
        this._size = sz;
        this._status.length = sz;
        this._data.length = sz;
    };
    /**
     * get value
     * @param idx data row
     * @param name data property
     */
    Ping.prototype.getVal = function (idx, name) {
        if (idx === void 0) { idx = 0; }
        if (this.size > 0) {
            return this._data[idx][name];
        }
        else {
            return null;
        }
    };
    /**
     * set value
     * @param idx
     * @param name
     * @param v
     */
    Ping.prototype.setVal = function (idx, name, v) {
        if (idx === void 0) { idx = 0; }
        this._data[idx][name] = v;
    };
    /**
     * set value to all records
     * @param name record property name
     * @param v property value of row
     */
    Ping.prototype.setAll = function (name, v) {
        this._data.forEach(function (obj) { obj[name] = v; });
    };
    /**
     * 조건에 만족시키는 DATA를 리턴
     * private로 전환시킴 2018.12.21
     * @param filters : condition object
     *                  let filters = {
     *                                name: ["Krishna", "Naveen"],
     *                                city : ["London"]
     *                               };
     */
    Ping.prototype.filterData = function (filters) {
        // return this.data.filter(o => Object.keys(filters).every(k => [].concat(filters[k]).some(v => o[k].includes(v))));
        return this._data.filter(function (o) { return Object.keys(filters).every(function (k) { return [].concat(filters[k]).some(function (v) { return o[k] === v; }); }); });
    };
    /**
     * Deep Clone
     * @param filters
     */
    Ping.prototype.getData = function (filters) {
        return JSON.parse(JSON.stringify(this.filterData(filters)));
    };
    /**
     * accept to the New Data
     * @param record row data
     */
    Ping.prototype.push = function (record) {
        this._data[this.size] = record;
        this._status[this.size] = Status_1.Status.None;
        this.setSize(this.size + 1);
    };
    Object.defineProperty(Ping.prototype, "ReqKind", {
        get: function () {
            return this._requestKind;
        },
        set: function (kind) {
            this._requestKind = kind;
        },
        enumerable: true,
        configurable: true
    });
    return Ping;
}());
exports.Ping = Ping;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestKind;
(function (RequestKind) {
    RequestKind[RequestKind["Query"] = 0] = "Query";
    RequestKind[RequestKind["New"] = 1] = "New";
    RequestKind[RequestKind["Save"] = 2] = "Save";
    RequestKind[RequestKind["Delete"] = 3] = "Delete";
})(RequestKind = exports.RequestKind || (exports.RequestKind = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["None"] = 0] = "None";
    Status[Status["Select"] = 1] = "Select";
    Status[Status["Insert"] = 2] = "Insert";
    Status[Status["Update"] = 3] = "Update";
    Status[Status["Delete"] = 4] = "Delete";
})(Status = exports.Status || (exports.Status = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service(sid, ping) {
        if (ping === void 0) { ping = []; }
        this.sId = "default";
        this.sId = sid;
        if (ping instanceof Array)
            this.ping = ping;
        else
            this.ping = [ping];
    }
    Object.defineProperty(Service.prototype, "id", {
        get: function () {
            return this.sId;
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.push = function (ping) {
        this.ping.push(ping);
    };
    Service.prototype.findPing = function (ping_name) {
        return this.ping.filter(function (element) { return element.id == ping_name; });
    };
    Service.prototype.getPingIds = function () {
        var nm = [];
        this.ping.forEach(function (element) {
            nm.push(element.id);
        });
        return nm;
    };
    return Service;
}());
exports.Service = Service;


/***/ })
/******/ ]);
});