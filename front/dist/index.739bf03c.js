// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l4AUa":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var _index = require("./card/index");
var _gameBoard = require("./gameBoard");
var _leadershipBoard = require("./leadershipBoard");
var _userName = require("./userName");
var _get = require("./utils/get");
const app = {
    init: ()=>{
        for(let i = 1; i <= 2; i++)_index.card.createCard();
        document.title = "Memoxy";
        const cardsList = _get.get.allByClass(".card");
        const parentEl = cardsList[0].parentElement;
        _gameBoard.gameBoard.shuffle(parentEl);
        _gameBoard.gameBoard.resetBtn(cardsList);
        _gameBoard.gameBoard.startBtn(cardsList);
        _leadershipBoard.leadershipBoard.getListPlayers();
        _userName.userName.inputForm();
    }
};
document.addEventListener("load", app.init());

},{"./card/index":"bd9EV","./gameBoard":"ebeTO","./leadershipBoard":"7d4d4","./userName":"4pdm1","./utils/get":"3IVc9"}],"bd9EV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "card", ()=>card
);
var _dataImgs = require("./dataImgs");
const card = {
    createCard: ()=>{
        _dataImgs.dataImgs.forEach((dataImage)=>{
            const { source , alt , dataSet  } = dataImage;
            const container = card.cardContainer(dataSet);
            const frontCard = card.frontCard(source, alt);
            const backCard = card.backCard();
            const gameBoard = document.getElementsByClassName("card-container");
            gameBoard[0].appendChild(container);
            container.appendChild(frontCard);
            container.appendChild(backCard);
        });
    },
    cardContainer: (dataSet)=>{
        const container = document.createElement("div");
        container.classList.add("card");
        container.dataset.card = dataSet;
        return container;
    },
    frontCard: (source, alt)=>{
        const frontCard = document.createElement("img");
        frontCard.classList.add("card-front");
        frontCard.src = source;
        frontCard.alt = alt;
        return frontCard;
    },
    backCard: ()=>{
        const backCard = document.createElement("img");
        backCard.classList.add("card-back");
        backCard.src = "https://preview.redd.it/qnnotlcehu731.jpg?auto=webp&s=55d9e57e829608fc8e632eb2e4165d816288177c";
        backCard.alt = "Dos d'une carte Magic the gathering";
        return backCard;
    }
};

},{"./dataImgs":"b9ZPf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9ZPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataImgs", ()=>dataImgs
);
const dataImgs = [
    {
        source: "https://www.play-in.com/images/cartes/stronghold/mox_diamond.jpg",
        alt: "mox de diamant",
        dataSet: "mox_diamond"
    },
    {
        source: "https://www.play-in.com/images/cartes/scars_of_mirrodin/mox_opal.png",
        alt: "mox d'opal",
        dataSet: "mox_opal"
    },
    {
        source: "https://www.play-in.com/images/cartes/dominaria/mox_amber.png",
        alt: "mox d'amber",
        dataSet: "mox_amber"
    },
    {
        source: "https://www.play-in.com/images/cartes/modern_horizons/mox_tantalite.png",
        alt: "mox de tantalite",
        dataSet: "mox_tantalite"
    },
    {
        source: "https://www.play-in.com/images/cartes/mirrodin/chrome_mox.jpg",
        alt: "mox de chrome",
        dataSet: "chrome_mox"
    },
    {
        source: "https://www.play-in.com/images/cartes/unlimited/mox_jet.jpg",
        alt: "mox jet",
        dataSet: "mox_jet"
    },
    {
        source: "https://mtg-wiki.fr/wp-content/themes/rt_citadel/custom/images/leb-265-mox-ruby.jpg",
        alt: "mox ruby",
        dataSet: "mox_ruby"
    },
    {
        source: "https://static.cardmarket.com/img/82721fdcc32d450e26c2e52900e58f17/items/1/LEA/5465.jpg",
        alt: "lotus noir",
        dataSet: "black_lotus"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ebeTO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameBoard", ()=>gameBoard
);
var _leadershipBoard = require("./leadershipBoard");
var _timer = require("./timer");
var _move = require("./move");
var _get = require("./utils/get");
var _userName = require("./userName");
let isFlip = false;
let lockGame = false;
let firstCardSelected, secondCardSelected;
const startButtonDOM = _get.get.byId("start");
const resetButtonDOM = _get.get.byId("reset");
const randomName = [
    "Yes",
    "No",
    "MinceAlors",
    "Rizon",
    "Top",
    "Lala",
    "Zut",
    "OhOh!",
    "Tacos",
    "Zone",
    "Bewan", 
];
const gameBoard = {
    startBtn: (cardsList)=>{
        startButtonDOM.addEventListener("click", ()=>{
            _timer.timer.resetTimer();
            gameBoard.resetBoard();
            cardsList.forEach((card)=>card.addEventListener("click", gameBoard.flip)
            );
            _timer.timer.startTimer(startButtonDOM);
        });
    },
    resetBtn: (cardsList)=>{
        resetButtonDOM.addEventListener("click", ()=>{
            cardsList.forEach((card)=>{
                card.classList.remove("flip");
                card.removeEventListener("click", gameBoard.flip);
            });
            _timer.timer.resetTimer();
            gameBoard.shuffle(cardsList[0].parentElement);
            gameBoard.startBtn(cardsList);
            _move.move.resetCount();
            lockGame = true;
        });
    },
    flip: (event)=>{
        _move.move.addCount();
        const { parentElement  } = event.target;
        if (lockGame) return;
        if (parentElement === firstCardSelected) return;
        parentElement.classList.add("flip");
        if (!isFlip) {
            isFlip = true;
            firstCardSelected = parentElement;
            return;
        }
        secondCardSelected = parentElement;
        gameBoard.isMatch();
    },
    unFlip: ()=>{
        lockGame = true;
        setTimeout(()=>{
            firstCardSelected.classList.remove("flip");
            secondCardSelected.classList.remove("flip");
            gameBoard.resetBoard();
        }, 500);
    },
    isMatch: ()=>{
        let isMatch = firstCardSelected.dataset.card === secondCardSelected.dataset.card;
        isMatch ? gameBoard.disable() : gameBoard.unFlip();
    },
    disable: ()=>{
        firstCardSelected.removeEventListener("click", gameBoard.flip);
        secondCardSelected.removeEventListener("click", gameBoard.flip);
        gameBoard.isWinOrLost();
        gameBoard.resetBoard();
    },
    resetBoard: ()=>{
        [isFlip, lockGame] = [
            false,
            false
        ];
        [firstCardSelected, secondCardSelected] = [
            null,
            null
        ];
    },
    // https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
    shuffle: (parentEl)=>{
        for(let i = parentEl.children.length; i >= 0; i--)parentEl.appendChild(parentEl.children[Math.random() * i | 0]);
    },
    isWinOrLost: ()=>{
        const time = _timer.timer.getSeconde();
        const numberOfFlippedCard = _get.get.allByClass(".flip").length;
        const cardsList = _get.get.allByClass(".card");
        const data = {
            userName: _userName.userName.get() ?? `O'${randomName[Math.floor(Math.random() * randomName.length - 1)]}`,
            time,
            move: _move.move.getCount()
        };
        if (numberOfFlippedCard == cardsList.length && time < 60) {
            lockGame = true;
            _timer.timer.timerCount(false);
            _leadershipBoard.leadershipBoard.postScore(data);
            _leadershipBoard.leadershipBoard.refresh();
            _leadershipBoard.leadershipBoard.getListPlayers();
            _move.move.resetCount();
            return alert(`C'est gagné ${data.userName} !!! Vous avez fait un score de ${data.time * data.move} (temps: ${data.time}, move: ${data.move} )`);
        }
        if (time == 60) {
            lockGame = true;
            _timer.timer.timerCount(false);
            _move.move.resetCount();
            alert(`C'est perdu ${data.userName} ... ${time}s se sont écoulées, il manque ${((16 - numberOfFlippedCard) / 2).toFixed(0)} ${(16 - numberOfFlippedCard) / 2 > 1 ? "paires" : "paire"}...`);
        }
        return;
    }
};

},{"./leadershipBoard":"7d4d4","./timer":"9Okty","./move":"77eKm","./utils/get":"3IVc9","./userName":"4pdm1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7d4d4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "leadershipBoard", ()=>leadershipBoard
);
var _fetch = require("./utils/fetch");
var _get = require("./utils/get");
const tbodyDOM = _get.get.byId("tbody");
const leadershipBoard = {
    getListPlayers: async ()=>{
        const playersList = await _fetch.fetchData.getAllPlayers();
        playersList.data.sort((a, b)=>a.score - b.score
        ).slice(0, 10).map((data, key)=>{
            leadershipBoard.createNewTabLines(data, key);
        });
        return playersList.data;
    },
    postScore: async (data)=>{
        await _fetch.fetchData.post(data);
    },
    refresh: ()=>{
        while(tbodyDOM.firstChild)tbodyDOM.removeChild(tbodyDOM.lastChild);
    },
    createNewTabLines: (data, key)=>{
        // Insère une ligne dans la table à l'indice de ligne "key"
        const newRow = tbodyDOM.insertRow(key);
        for(let i1 = 0; i1 <= 4; i1++){
            const newCell = newRow.insertCell(i1);
            let textCell = (i)=>{
                switch(i){
                    case 0:
                        return document.createTextNode(key + 1);
                    case 1:
                        return document.createTextNode(data.userName);
                    case 2:
                        return document.createTextNode(data.score);
                    case 3:
                        return document.createTextNode(`${data.time}s`);
                    case 4:
                        return document.createTextNode(data.move);
                    default:
                        return;
                }
            };
            newCell.appendChild(textCell(i1));
        }
    }
};

},{"./utils/fetch":"5AvII","./utils/get":"3IVc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AvII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchData", ()=>fetchData
);
const url = "http://localhost:3000/players/";
const fetchData = {
    getAllPlayers: async ()=>{
        const allPlayersData = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer"
        }).then((res)=>res.json()
        ).catch((err)=>{
            console.log(err);
        });
        return allPlayersData;
    },
    post: async (data)=>{
        const postScore = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer"
        }).then((res)=>"success"
        ).catch((err)=>{
            console.log(err);
        });
        return postScore;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IVc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get
);
const get = {
    allByClass: (className)=>document.querySelectorAll(className)
    ,
    byId: (idName)=>document.getElementById(idName)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Okty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timer", ()=>timer
);
var _gameBoard = require("./gameBoard");
var _get = require("./utils/get");
let seconde = 0;
let timeInterval = null;
const progressBar = _get.get.byId("barStatus");
const startButtonDOM = _get.get.byId("start");
const timeDOM = _get.get.byId("time");
const cardsList = _get.get.allByClass(".card");
const timer = {
    startTimer: (startButtonDOM1)=>{
        timer.timerCount(true);
        startButtonDOM1.disabled = true;
        _gameBoard.gameBoard.startBtn(cardsList);
    },
    resetTimer: ()=>{
        timer.timerCount(false);
        startButtonDOM.disabled = false;
        progressBar.style.width = "0%";
        seconde = 0;
        timeDOM.textContent = `60s`;
        timeDOM.style.color = "rgba(255, 70, 141, 0.918)";
    },
    timerCount: (isON)=>{
        if (!isON) clearInterval(timeInterval);
        if (isON && seconde === 0) {
            clearInterval(timeInterval);
            timeInterval = setInterval(()=>{
                seconde += 1;
                progressBar.style.width = (seconde * 100 / 60).toFixed(2) + "%";
                timeDOM.textContent = `${60 - seconde}s`;
                timeDOM.style.color = "rgb(89, 119, 255)";
                if (seconde >= 60) {
                    timeInterval = clearInterval(timeInterval);
                    _gameBoard.gameBoard.isWinOrLost();
                }
            }, 1000);
            return timeInterval;
        }
        return clearInterval(timeInterval);
    },
    getSeconde: ()=>seconde
};

},{"./gameBoard":"ebeTO","./utils/get":"3IVc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77eKm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "move", ()=>move
);
let count = 0;
const move = {
    addCount: ()=>{
        count++;
        return count;
    },
    getCount: ()=>count
    ,
    resetCount: ()=>count = 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4pdm1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userName", ()=>userName
);
var _get = require("./utils/get");
let name;
const userName = {
    inputForm: ()=>{
        const buttonInputDOM = _get.get.byId("name");
        const userNameDivDOM = _get.get.byId("userName");
        const inputDOM = _get.get.byId("input");
        buttonInputDOM.addEventListener("click", ()=>{
            name = inputDOM.value;
            const newP = document.createElement("p");
            const newUserName = document.createTextNode(name);
            newP.appendChild(newUserName);
            userNameDivDOM.appendChild(newUserName);
            inputDOM.style.display = "none";
            buttonInputDOM.style.display = "none";
        });
        return name;
    },
    get: ()=>name ?? null
};

},{"./utils/get":"3IVc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequire8f8d")

//# sourceMappingURL=index.739bf03c.js.map
