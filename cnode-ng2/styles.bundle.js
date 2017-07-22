webpackJsonp([2,4],{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(679);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(718)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(680)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,body{\n    margin: 0;\n    padding: 0;\n}\n\nul,li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\nul{\n    height: 100%;\n}\na {\n    text-decoration: none;\n}\n\n#list {\n    margin-top: 3.3rem;\n    /*margin-bottom: 3rem;*/\n}\n#list a:link { \n    color:#000; \n    text-decoration:none; \n} \n#list a:visited { \n    color:#b2b2b2; \n    text-decoration:none; \n} \n#list a:hover { \n    color:#000; \n    text-decoration: none; \n} \n#list a:active { \n    color:#b2b2b2; \n    text-decoration:none; \n}   \n\n#list li{\n    padding: .5rem; \n    border-bottom: 1px solid #ccc;\n    word-wrap: break-word;\n}\n\n#list li img {\n    float: left;\n    width: 5rem;\n    height: 4.4rem;\n}\n\n\n\n#list .list-item{\n    padding: .5rem; \n    margin-left: 5.5rem; \n    min-height: 4.4rem;\n}\n#list .list-item p{\n    margin: 0;\n    margin-bottom: .5rem;\n    padding: 0;\n    font-size: 1.1rem;\n    font-weight: normal; \n    word-wrap: break-word;\n    word-break: break-all;\n}\n\n#list .list-item h5{\n    margin: 0;\n    padding: 0;\n    font-size: .8rem;\n    font-weight: normal; \n}\n/*#list p::after {\n    content: '';\n    clear: both;\n    height: 0;\n    width: 0;\n    display: block;\n}*/\n\n#content .more-center{\n    margin: .5rem auto 3.3rem;\n    padding: 0 40%;\n}\n\n.clr {\n    clear: both;\n    display: none;\n}\n\n\n.nav{\n    position: fixed;\n    top: 0;\n    height: 3.3rem;\n    width: 100%;\n    /*background-color: rgb(0, 187, 156);*/\n    background: -webkit-linear-gradient(top, #65bbce, #50b1c8);\n    line-height: 3.3rem;\n    padding: 0 .5rem;\n}\n.nav img{\n    /*width: 4.4rem;*/\n    /*line-height: 3.3rem;*/\n    height: 3.3rem;\n}\n\n.nav .homepage-left-img {\n    width: 4.4rem;\n    float: left;    \n}\n\n.nav .homepage-right-img {\n    margin-top: .7rem;\n    margin-right: 1.2rem;\n    width: 1.6rem;\n    height: 1.6rem;\n    line-height: 3.3rem;\n    float: right;    \n}\n\n.nav-text {\n    /*text-align: center;*/\n    /*margin-left: 4rem;*/\n    color: #fff;\n    font-size: 1.2rem;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding-right: .5rem;\n    /*float: left;*/\n}\n\n.nav .nav-img{\n    position: absolute;\n    margin-top: .2rem;\n    margin-right: 1.2rem;\n    width: 1.6rem;\n    height: 1.6rem;\n    line-height: 3.3rem;\n    /*float: right;*/\n    right: 1rem;\n    top: .5rem;\n}\n\n.nav .btn-back{\n    margin-top: .7rem;\n    margin-right: 1.2rem;\n    width: 1.6rem;\n    height: 1.6rem;\n    line-height: 3.3rem;\n    float: left;\n}\n\n#detail{\n    margin: 0;\n    padding: .5rem;\n    margin-top: 3.3rem;\n    word-wrap: break-word;\n    word-break: break-all;\n}\n#detail pre{\n    font-size: 14px;\n    border-radius: 0;\n    padding: 0 15px;\n    border: none;\n    border-width: 1px 0;\n    background: #f7f7f7;\n    -o-tab-size: 4;\n    -moz-tab-size: 4;\n    tab-size: 4;\n    word-break: break-all;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n}\n\n\n#detail img {\n    max-width: 100%;\n}\n\n#detail .comment-icon {\n    width: 2rem;\n    height: 2rem;\n    vertical-align: top;\n    margin-right: .5rem;\n}\n\n#detail .comment-text{\n    color: #65bbce;\n    font-size: 1.2rem; \n    vertical-align: top;\n    text-decoration: underline;\n}\n\n#detail li{\n    padding: .5rem; \n    border-bottom: 1px solid #ccc;\n    word-wrap: break-word;\n}\n\n#detail li img {\n    float: left;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n}\n\n#replie-img .left-avatar{\n    float: left;\n    width: 3.5rem;\n}\n\n#replie-img .loginname-avatar{\n    font-size: .8rem;\n}\n#replie-img li:last-child {\n    border-bottom: none;\n}\n\n#detail .list-item{\n    padding: .5rem; \n    margin-left: 3.5rem; \n    min-height: 4.4rem;\n}\n#detail .list-item p{\n    margin: 0;\n    margin-bottom: .5rem;\n    padding: 0;\n    font-size: 1.1rem;\n    font-weight: normal; \n    word-wrap: break-word;\n    word-break: break-all;\n}\n\n#detail .list-item h5{\n    margin: 0;\n    padding: 0;\n    font-size: .8rem;\n    font-weight: normal; \n}\n\n\n\n\n\n.content-center{\n    margin: 70% 40%;\n}\n\n\n\n#user {\n    margin-top: 3.3rem;\n    margin-bottom: 3rem;\n}\n\n#user li{\n    padding: .5rem; \n    border-bottom: 1px solid #ccc;\n    word-wrap: break-word;\n}\n\n#user li img{\n    width: 10rem;\n    height: 8rem;\n}\n\n#user .list-item{\n    padding: .5rem; \n    min-height: 4.4rem;\n}\n#user .list-item p{\n    margin: 0;\n    margin-bottom: .5rem;\n    padding: 0;\n    font-size: 1.1rem;\n    font-weight: normal; \n    word-wrap: break-word;\n    word-break: break-all;\n}\n\n#user .list-item h5{\n    margin: 0;\n    padding: 0;\n    font-size: .8rem;\n    font-weight: normal; \n}\n\n#user .user-topic-list {\n    border-bottom: 1px solid #ccc;\n    color: #65bbce;\n    /*text-shadow: 4px 2px 4px #480b0b;*/\n}\n\n#user .login-btn{\n    display: inline-block;\n    margin: 1rem 1rem 0;\n    background: #65bbce;\n    color: #fff;\n    font-size: 1.2rem;\n    text-align: center;\n    line-height: 2.6rem;\n    width: 7rem;\n    height: 2.6rem;\n    border-radius: .5rem;\n    border: none;\n    vertical-align: top;\n}\n\n#user a:link { \n    color:#000; \n    text-decoration:none; \n} \n#user a:visited { \n    color:#b2b2b2; \n    text-decoration:none; \n} \n#user a:hover { \n    color:#000; \n    text-decoration: none; \n} \n#user a:active { \n    color:#b2b2b2; \n    text-decoration:none; \n} \n\n\n.toast-it {\n    z-index: 10001;\n    background-color: #555555;\n    color: #F4F4F4;\n    padding: 3px 20px;\n    border-radius: 20px;\n    text-align: center;\n    position: fixed;\n    /* center horizontally */\n    top: 80%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -80%);\n            transform: translate(-50%, -80%);\n \n    -webkit-animation-name: TOAST-APPEAR;\n \n            animation-name: TOAST-APPEAR;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n}\n \n@-webkit-keyframes TOAST-APPEAR {\n    0% {\n        opacity: 0;\n    }\n    15% {\n        opacity: 1;\n    }\n    80% {\n        opacity: 1;\n        top: 80%;\n    }\n    100% {\n        opacity: 0;\n        top: 75%;\n    }\n}\n \n@keyframes TOAST-APPEAR {\n    0% {\n        opacity: 0;\n    }\n    15% {\n        opacity: 1;\n    }\n    80% {\n        opacity: 1;\n        top: 80%;\n    }\n    100% {\n        opacity: 0;\n        top: 75%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ 680:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 718:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ })

},[723]);
//# sourceMappingURL=styles.bundle.map