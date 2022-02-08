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
// Lors du lancement de l'application, on exécutera que app.init()
const app = {
    init: ()=>{
        // create.cards() est une fonction qui permet de créer chaque carte que l'on a dans nos data.
        // Comme on a besoin d'une paires de chaque élément, on exécute deux fois la fonction.
        for(let i = 1; i <= 2; i++)_index.card.createCards();
        // On récupére chaque élément possédant la classe "card" (document.querySelectorAll) avec notre fonction custom (utils)
        const cardsList = _get.get.allByClass(".card");
        // On récupére l'élément parent de la première carte.
        const parentEl = cardsList[0].parentElement;
        // Dès le lancement de la page, on :
        // - mélange les cartes fraîchement créées,
        // - ajoute des events listener sur les boutons (start / reset / input)
        // - récupére la liste des 10 meilleurs joueurs
        _gameBoard.gameBoard.shuffle(parentEl);
        _gameBoard.gameBoard.resetBtn(cardsList);
        _gameBoard.gameBoard.startBtn(cardsList);
        _userName.userName.inputForm();
        _leadershipBoard.leadershipBoard.getListPlayers();
    }
};
// L’évènement load est émis lorsqu’une ressource et ses ressources dépendantes sont completement chargées.
document.addEventListener("load", app.init());

},{"./card/index":"bd9EV","./gameBoard":"ebeTO","./leadershipBoard":"7d4d4","./userName":"4pdm1","./utils/get":"3IVc9"}],"bd9EV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "card", ()=>card
);
var _dataImgs = require("./dataImgs");
// Ici, on retrouvera tout ce qui peut être relatif à la création d'une carte.
const card = {
    // Cette fonction permet de créer toutes les cartes suivant les data dans dataImgs.
    createCards: ()=>{
        // On va créer une carte pour chaque objet dans notre tableau
        _dataImgs.dataImgs.forEach((dataImage)=>{
            const { source , alt , dataSet  } = dataImage;
            // on crée le container
            const container = card.cardContainer(dataSet);
            // on crée la face avant de la carte
            const frontCard = card.frontCard(source, alt);
            // on crée la face arrière de la carte
            const backCard = card.backCard();
            // on récupère la div qui va contenir toutes les cartes
            const cardsContainerDOM = document.getElementsByClassName("card-container");
            // on donne le container à la div qui va contenir toutes nos cartes
            cardsContainerDOM[0].appendChild(container);
            // on rajoute la face avant
            container.appendChild(frontCard);
            // on rajoute la face arrière
            container.appendChild(backCard);
        });
    },
    // Cette fonction permet de créer la div qui va contenir la face avant et arrière.
    cardContainer: (dataSet)=>{
        // on crée la div
        const container = document.createElement("div");
        // on rajoute la classe
        container.classList.add("card");
        // on rajoute les dataset qui nous serons trèèèèès utile pour savoir s'il y a un match ou non
        container.dataset.card = dataSet;
        return container;
    },
    // Cette fonction permet de créer la face avant de la carte
    frontCard: (source, alt)=>{
        // on crée une image
        const frontCard = document.createElement("img");
        // on ajoute la classe
        frontCard.classList.add("card-front");
        // on ajoute la source
        frontCard.src = source;
        // on ajoute le texte alternatif
        frontCard.alt = alt;
        return frontCard;
    },
    // Cette fonction permet de créer la face avant de la carte
    backCard: ()=>{
        // on crée une image
        const backCard = document.createElement("img");
        // on ajoute la classe
        backCard.classList.add("card-back");
        // on ajoute la source
        backCard.src = "https://preview.redd.it/qnnotlcehu731.jpg?auto=webp&s=55d9e57e829608fc8e632eb2e4165d816288177c";
        // on ajoute le texte alternatif
        backCard.alt = "Dos d'une carte Magic the gathering";
        return backCard;
    }
};

},{"./dataImgs":"b9ZPf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9ZPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataImgs", ()=>dataImgs
);
// data pour créer les images
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
// Ici, on retrouvera tout ce qui peut être relatif au bon fonctionnement du jeu.
// on instancie nos variables que l'on va réutiliser dans nos fonctions.
// isFlip pour savoir si la carte est retournée ou non
// lockGame permet de locker le jeu, c'est à dire que le joueur ne pourra pas retourner les cartes.
// firstCardSelected, secondCardSelected servent à savoir quelle est la première  et la seconde carte sélectionnées par l'utilisateur
// start/resetButtonDOM permet de nous renvoyer l'élément voulu.
let isFlip = false;
let lockGame = false;
let firstCardSelected, secondCardSelected;
const startButtonDOM = _get.get.byId("start");
const resetButtonDOM = _get.get.byId("reset");
// Si l'utilisateur n'a pas rentré de pseudo cet Array permettra d'en créer.
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
    // Cette fonction permet de rajouter un event listener sur chaque carte et de démarer le jeu.
    startBtn: (cardsList)=>{
        // on ajoute un event sur le bouton start
        startButtonDOM.addEventListener("click", ()=>{
            // Au clique :
            // on reset le timer
            _timer.timer.resetTimer();
            // on reset le board
            gameBoard.resetBoard();
            // on ajoute un event listener sur chaque carte avec la fonction flip
            cardsList.forEach((card)=>card.addEventListener("click", gameBoard.flip)
            );
            // on démarre le timer.
            _timer.timer.startTimer(startButtonDOM);
        });
    },
    // Cette fonction permet de retirer les event listener sur chaque carte et de reset le jeu.
    resetBtn: (cardsList)=>{
        // on ajoute un event sur le bouton reset
        resetButtonDOM.addEventListener("click", ()=>{
            // Au clique :
            // on enlève l'event listener sur chaque carte et on retire la classe flip.
            cardsList.forEach((card)=>{
                card.classList.remove("flip");
                card.removeEventListener("click", gameBoard.flip);
            });
            // on reset le timer
            _timer.timer.resetTimer();
            // on mélange le jeu
            gameBoard.shuffle(cardsList[0].parentElement);
            // on reset le compteur de mouvement
            _move.move.resetCount();
            // on lock le game
            lockGame = true;
        });
    },
    // Cette fonction permet :
    // -  de savoir si on a selectionner la première carte ou la seconde carte
    // - de retourner la carte si le jeu n'est pas lock
    // - d'incrémenter le nombre de mouvement
    flip: (event)=>{
        // ajoute +1 au nombre de mouvement
        _move.move.addCount();
        const { parentElement  } = event.target;
        // si le jeu est bloqué alors on n'exécute pas le reste.
        if (lockGame) return;
        // si l'élément parent sélectionné est égal à la première carte sélectionné, alors on n'éxécute pas le reste
        if (parentElement === firstCardSelected) return;
        // on ajoute la classe flip au parent (à notre div (div > img face | img retourné))
        parentElement.classList.add("flip");
        // si isFlip est false alors on éxécute la condition.
        if (!isFlip) {
            isFlip = true;
            firstCardSelected = parentElement;
            return;
        }
        // si isFlip === true, que le jeu n'est pas bloqué et que l'élément parent n'est pas égal à la première carte sélectionnée alors ça veut dire que l'on a sélectionné la seconde carte
        secondCardSelected = parentElement;
        // on va vérifier si les deux cartes sont les mêmes.
        gameBoard.isMatch();
    },
    // Cette fonction permet de vérifier, via les dataset, si les deux cartes sont égales entre elles.
    isMatch: ()=>{
        let isMatch = firstCardSelected.dataset.card === secondCardSelected.dataset.card;
        isMatch ? gameBoard.disable() : gameBoard.unFlip();
    },
    // Cette fonction permet de retournées les cartes qui ont été sélectionnées et qui ne match pas entre elles.
    unFlip: ()=>{
        // on lock le jeu, pour éviter que l'utilisateur retourne d'autres cartes. (petit filtre anti-triche)
        lockGame = true;
        setTimeout(()=>{
            // on retire la classe flip des cartes que l'on vient de sélectionner.
            firstCardSelected.classList.remove("flip");
            secondCardSelected.classList.remove("flip");
            // on reset le board cad (isFlip et lockgame = false)
            gameBoard.resetBoard();
        }, 500);
    },
    // Cette fonction permet de retirer les fonctions et les events sur les cartes sélectionnées.
    disable: ()=>{
        firstCardSelected.removeEventListener("click", gameBoard.flip);
        secondCardSelected.removeEventListener("click", gameBoard.flip);
        // on vérifie ensuite si le jeu est terminé ou non
        gameBoard.isWinOrLost();
        // on reset le board cad (isFlip et lockgame = false)
        gameBoard.resetBoard();
    },
    // Cette fonction permet de redéfinir nos variables.
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
    // Fonction qui permet de mélanger le jeu suivant la méthode de : Fisher–Yates
    // Comme je n'étais pas satisfait de ma propre fonction j'ai préféré en chercher une plus performante.
    // https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
    shuffle: (parentEl)=>{
        for(let i = parentEl.children.length; i >= 0; i--)parentEl.appendChild(parentEl.children[Math.random() * i | 0]);
    },
    // Fonction permettant de savoir si le jeu :
    // - continue
    // - s'arrête à cause du temps
    // ou si le joueur à gagner.
    isWinOrLost: ()=>{
        // on récupère le temps
        const time = _timer.timer.getSeconde();
        // on regarde le nombre de cartes retournées
        const numberOfFlippedCard = _get.get.allByClass(".flip").length;
        // on récupère la liste de toutes les cartes.
        const cardsList = _get.get.allByClass(".card");
        // on prépare nous data dans un éventuel envoie vers notre serveur.
        const data = {
            userName: // s'il n'y a pas de pseudo rentré alors on en crée un au hasard avec notre tableau ligne 22
            _userName.userName.get() ?? `O'${randomName[Math.floor(Math.random() * randomName.length - 1)]}`,
            time,
            // on récupère le nombre de coups joués
            move: _move.move.getCount()
        };
        // si le nombre de cartes retournées est égal au nombre de cartes dans tout le jeu et que le temps est inférieur à 60 alors :
        // - on vérouille le jeu
        // - on arrête le timer
        // - on envoie notre score
        // - on refresh le score
        // - on récupére la liste du top 10.
        // - on met le nombre de coups à 0
        // - on envoie une alerte annonçant la bonne nouvelle.
        if (numberOfFlippedCard == cardsList.length && time < 60) {
            lockGame = true;
            _timer.timer.timerCount(false);
            _leadershipBoard.leadershipBoard.postScore(data);
            _leadershipBoard.leadershipBoard.refresh();
            _leadershipBoard.leadershipBoard.getListPlayers();
            _move.move.resetCount();
            return alert(`C'est gagné ${data.userName} !!! Vous avez fait un score de ${data.time * data.move} (temps: ${data.time}s, move: ${data.move} )`);
        }
        // si le timer est supérieur ou égal à 60 alors c'est que le joueur à perdu.
        // - on vérouille le jeu
        // - on arrête le timer
        // - on met le nombre de coups à 0
        // - on envoie une alerte annonçant la mauvaise nouvelle.
        if (time >= 60) {
            lockGame = true;
            _timer.timer.timerCount(false);
            _move.move.resetCount();
            alert(`C'est perdu ${data.userName} ... ${time}s se sont écoulées, il manque ${((cardsList.length - numberOfFlippedCard) / 2).toFixed(0)} ${(cardsList.length - numberOfFlippedCard) / 2 > 1 ? "paires" : "paire"}...`);
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
// Ici, on retrouvera tout ce qui peut être relatif à notre tableau.
const tbodyDOM = _get.get.byId("tbody");
const leadershipBoard = {
    // Cette fonction va nous créer les lignes de notre tableau avec les data reçuent.
    // Comme on fait une demande à notre serveur, on utilisera une fonction asynchrone.
    getListPlayers: async ()=>{
        // on récupère les data de tout les joueurs.
        const playersList = await _fetch.fetchData.getAllPlayers();
        // on va les trier suivant le score, on va récupérer les 10 premiers et on va créer les lignes dans notre tableau.
        playersList.data.sort((a, b)=>a.score - b.score
        ).slice(0, 10).map((element, key)=>{
            leadershipBoard.createNewTabLines(element, key);
        });
        return playersList.data;
    },
    // Cette fonction permet d'enregistrer notre joueur avec son temps, le nombre de coups et son pseudo.
    postScore: async (data)=>{
        await _fetch.fetchData.post(data);
    },
    // Cette fonction permet de supprimer tout les enfants se trouvant dans notre body.
    refresh: ()=>{
        while(tbodyDOM.firstChild)tbodyDOM.removeChild(tbodyDOM.lastChild);
    },
    // Cette fonction permet de créer les lignes du tableau 
    createNewTabLines: (data, key)=>{
        // Insère une ligne dans la table à l'indice de ligne "key" (0 = première ligne du tableau)
        const newRow = tbodyDOM.insertRow(key);
        // chaque ligne se compose de plusieurs cellules.
        // Ici nous avons 5 colonnes ( rank, username, score, time et move)
        for(let i1 = 0; i1 <= 4; i1++){
            // on crée la cellule
            const newCell = newRow.insertCell(i1);
            // et suivant la cellule on va injecter la data qui nous intéresse.
            let textCell = (i)=>{
                switch(i){
                    // rank
                    case 0:
                        return document.createTextNode(key + 1);
                    // username
                    case 1:
                        return document.createTextNode(data.userName);
                    // score
                    case 2:
                        return document.createTextNode(data.score);
                    // time
                    case 3:
                        return document.createTextNode(`${data.time}s`);
                    // move
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
// Ici, on retrouvera tout ce qui peut être relatif aux requêtes que nous pouvons faire.
const url = "https://memoxy-2022.herokuapp.com/players/"; // or http://localhost:8888/players/
const fetchData = {
    // Cette fonction permet de récupèrer tout les joueurs.
    // comme on fait un appel vers notre back, on utilisera une fonction asynchrone.
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
    // Cette fonction permet d'envoyer une requête pour enregistrer notre joueur et sa performance
    // elle prendra en paramètre: le userName, le temps et les coups.
    // comme on fait un appel vers notre back, on utilisera une fonction asynchrone.
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
        }).then((res)=>console.log(res.json())
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
// Ici, on retrouvera tout ce qui peut être relatif au temps.
let seconde = 0;
let timeInterval = null;
const progressBar = _get.get.byId("barStatus");
const startButtonDOM = _get.get.byId("start");
const timeDOM = _get.get.byId("time");
const cardsList = _get.get.allByClass(".card");
const timer = {
    // Cette fonction permet de :
    // - démarrer le timer,
    // - de désactiver le bouton,
    // - de rajouter l'event clique sur chaque carte.
    startTimer: (startButtonDOM1)=>{
        timer.timerCount(true);
        startButtonDOM1.disabled = true;
        _gameBoard.gameBoard.startBtn(cardsList);
    },
    // Cette fonction permet de :
    // - désactiver le timer,
    // - d'activer le bouton start,
    // - de remettre la barre de progression à 0%
    // - de remettre la variable du temps à 0
    // - de remettre le texte du compte à rebours à 60s
    // - de remettre la bonne couleur au compte à rebours
    // - de rajouter l'event clique sur chaque carte.
    resetTimer: ()=>{
        timer.timerCount(false);
        startButtonDOM.disabled = false;
        progressBar.style.width = "0%";
        seconde = 0;
        timeDOM.textContent = `60s`;
        timeDOM.style.color = "rgba(255, 70, 141, 0.918)";
    },
    // Cette fonction permet d'activer ou de désactiver le timer
    timerCount: (isON)=>{
        // Si isOn est false alors on enlève l'interval.
        if (!isON) clearInterval(timeInterval);
        // Si isOn est true et que les secondes sont à 0, alors on démarre l'interval.
        if (isON && seconde === 0) {
            clearInterval(timeInterval);
            timeInterval = setInterval(()=>{
                seconde += 1;
                // on augmente la progresse barre de façon progressive, suivant le nombre de secondes
                progressBar.style.width = (seconde * 100 / 60).toFixed(2) + "%";
                // on diminue le compte à rebours.
                timeDOM.textContent = `${60 - seconde}s`;
                // on change la couleur du compte à rebours.
                timeDOM.style.color = "rgb(89, 119, 255)";
                // si le temps est supérieur à 60 alors :
                // - on arrête l'interval
                // - on regarde si le joueur a gagné ou perdu.
                if (seconde >= 60) {
                    timeInterval = clearInterval(timeInterval);
                    _gameBoard.gameBoard.isWinOrLost();
                }
            }, 1000); // on exécute timeInterval toutes les 1000ms
            return timeInterval;
        }
        return clearInterval(timeInterval);
    },
    // Cette fonction permet de retourner le nombre de seconde.
    getSeconde: ()=>seconde
};

},{"./gameBoard":"ebeTO","./utils/get":"3IVc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77eKm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "move", ()=>move
);
let count = 0;
const move = {
    // Cette fonction permet d'ajoute +1 au nombre de coups
    addCount: ()=>{
        count++;
        return count;
    },
    // Cette fonction permet de retourner le nombre de coups
    getCount: ()=>count
    ,
    // Cette fonction permet de mettre le nombre de coup à 0.
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
    // Cette fonction permet de récupèrer le pseudo que l'utilisateur a tapé dans l'input.
    inputForm: ()=>{
        const buttonInputDOM = _get.get.byId("name");
        const userNameDivDOM = _get.get.byId("userName");
        const inputDOM = _get.get.byId("input");
        // on ajoute l'event clique sur le bouton
        buttonInputDOM.addEventListener("click", ()=>{
            // on récupère la valeur dans notre input.
            name = inputDOM.value;
            // si il n'y a pas de pseudo alors on n'enlève pas l'input et le bouton.
            if (name.length === 0) return;
            // on cache l'input et le bouton
            inputDOM.style.display = "none";
            buttonInputDOM.style.display = "none";
            // on crée un nouveau paragraphe
            const newP = document.createElement("p");
            // on crée le text
            const newUserName = document.createTextNode(name);
            // on ajoute le text au nouvel élément.
            newP.appendChild(newUserName);
            // on ajoute cet élément à notre div.
            userNameDivDOM.appendChild(newP);
        });
        return name;
    },
    // Cette fonction permet de retourner le pseudo du joueur ou null (si le joueur n'a rien tapé dans l'input)
    get: ()=>name ?? null
};

},{"./utils/get":"3IVc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequire8f8d")

//# sourceMappingURL=index.739bf03c.js.map
