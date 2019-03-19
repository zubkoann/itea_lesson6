/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/DecoratorExample/Notifier.js":
/*!**************************************************!*\
  !*** ./application/DecoratorExample/Notifier.js ***!
  \**************************************************/
/*! exports provided: SmsNotifier, ViberNotifier, GmailNotifier, TelegramNotifier, SlackNotifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmsNotifier\", function() { return SmsNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViberNotifier\", function() { return ViberNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GmailNotifier\", function() { return GmailNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TelegramNotifier\", function() { return TelegramNotifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlackNotifier\", function() { return SlackNotifier; });\nclass Notifier {\n  send(msg, baseNode, block) {\n    console.log('CLASS NOTIFIER: mesasge was sended:', msg);\n    const target = baseNode.querySelector(`.notifier__item[data-slug=\"${block}\"]`);\n    console.log('target', target);\n    target.innerHTML += `<div>${msg}</div>`;\n  }\n\n}\n/*\n\n  // Пока не смотрит вниз :)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*/\n\n\nclass SmsNotifier extends Notifier {\n  constructor({\n    type\n  }) {\n    super();\n    this.type = type;\n  }\n\n  send(msg, baseNode, block = 'sms') {\n    if (this.type === 'kyivstar') {\n      console.log('send to kyivstar');\n    }\n\n    if (this.type === 'mts') {\n      console.log('send to mts');\n    } ///....\n    // fetch('kyivstar.ua/send?...')\n\n\n    super.send(msg, baseNode, block);\n  }\n\n}\nclass ViberNotifier extends Notifier {\n  send(msg, baseNode, block = 'viber') {\n    //...\n    // fetch('viber.com/send?...')\n    super.send(msg, baseNode, block);\n  }\n\n}\nclass GmailNotifier extends Notifier {\n  send(msg, baseNode, block = 'mail') {\n    // fetch('gmail.com/send?...')\n    super.send(msg, baseNode, block);\n  }\n\n}\nclass TelegramNotifier extends Notifier {\n  send(msg, baseNode, block = 'telegram') {\n    // fetch('telegram.com/send?...')\n    super.send(msg, baseNode, block);\n  }\n\n}\nclass SlackNotifier extends Notifier {\n  send(msg, baseNode, block = 'slack') {\n    // fetch('slack.com/send?...')\n    super.send(msg, baseNode, block);\n  }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notifier);\n\n//# sourceURL=webpack:///./application/DecoratorExample/Notifier.js?");

/***/ }),

/***/ "./application/DecoratorExample/baseDecorator.js":
/*!*******************************************************!*\
  !*** ./application/DecoratorExample/baseDecorator.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifier */ \"./application/DecoratorExample/Notifier.js\");\n\n\nclass BaseDecorator {\n  constructor(clients) {\n    let obs = clients.map(obs => {\n      if (obs.name === 'sms') {\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"SmsNotifier\"](obs);\n      } else if (obs.name === 'mail') {\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"GmailNotifier\"](obs);\n      } else if (obs.name === 'telegram') {\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"TelegramNotifier\"](obs);\n      } else if (obs.name === 'viber') {\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"ViberNotifier\"](obs);\n      } else if (obs.name === 'slack') {\n        return new _Notifier__WEBPACK_IMPORTED_MODULE_0__[\"SlackNotifier\"](obs);\n      }\n    });\n    this.clients = obs;\n  }\n\n  sendMessage(msg, baseNode) {\n    this.clients.map(obs => {\n      obs.send(msg, baseNode);\n    });\n  }\n\n  addNotifier(notifier) {\n    this.clients.push(notifier);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseDecorator);\n\n//# sourceURL=webpack:///./application/DecoratorExample/baseDecorator.js?");

/***/ }),

/***/ "./application/DecoratorExample/index.js":
/*!***********************************************!*\
  !*** ./application/DecoratorExample/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseDecorator */ \"./application/DecoratorExample/baseDecorator.js\");\n // import Notifier from './Notifier';\n\nclass Application {\n  constructor() {\n    this.notifierTargets = [{\n      name: 'sms',\n      image: 'images/sms.svg',\n      type: 'kyivstar'\n    }, {\n      name: 'sms',\n      image: 'images/sms.svg',\n      type: 'mts'\n    }, {\n      name: 'mail',\n      image: 'images/gmail.svg'\n    }, {\n      name: 'telegram',\n      image: 'images/telegram.svg'\n    }, {\n      name: 'viber',\n      image: 'images/viber.svg'\n    }, {\n      name: 'slack',\n      image: 'images/slack.svg'\n    }];\n    this.notifier = new _baseDecorator__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.notifierTargets);\n    this.createInterface = this.createInterface.bind(this);\n    this.node = null;\n  }\n\n  createInterface() {\n    const root = document.getElementById('root');\n    const AppNode = document.createElement('section');\n    AppNode.className = 'notifer_app';\n    console.log(this.notifierTargets);\n    AppNode.innerHTML = `\n      <div class=\"notifer_app--container\">\n        <header>\n          <input class=\"notifier__messanger\" type=\"text\"/>\n          <button class=\"notifier__send\">Send Message</button>\n        </header>\n        <div class=\"notifier__container\">\n        ${this.notifierTargets.map(item => `\n            <div class=\"notifier__item\" data-slug=\"${item.name}\">\n              <header class=\"notifier__header\">\n                <img width=\"25\" src=\"${item.image}\"/>\n                <span>${item.name}</span>\n              </header>\n              <div class=\"notifier__messages\"></div>\n            </div>\n            `).join('')}\n        </div>\n      </div>\n    `;\n    const container = AppNode.querySelector('.notifier__container');\n    const btn = AppNode.querySelector('.notifier__send');\n    const input = AppNode.querySelector('.notifier__messanger');\n    btn.addEventListener('click', () => {\n      let value = input.value;\n      this.notifier.sendMessage(value, this.node); // this.notifier.send(value, container, 'sms');\n      // this.notifier.send(value, container, 'mail');\n      // this.notifier.send(value, container, 'viber');\n      // this.notifier.send(value, container, 'telegram');\n      // this.notifier.send(value, container, 'slack');\n    });\n    this.node = AppNode;\n    root.appendChild(AppNode);\n  }\n\n}\n\nconst Demo = () => {\n  const NotifierApp = new Application();\n  NotifierApp.createInterface();\n  console.log(NotifierApp); // const NotApp = new Application();\n  // NotApp.createInterface();\n  // const NotApp2 = new Application();\n  // NotApp2.createInterface();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./application/DecoratorExample/index.js?");

/***/ }),

/***/ "./application/es7_functional_decorator/index.js":
/*!*******************************************************!*\
  !*** ./application/es7_functional_decorator/index.js ***!
  \*******************************************************/
/*! exports provided: es7Decorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"es7Decorator\", function() { return es7Decorator; });\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ \"./node_modules/@babel/runtime/helpers/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n// export const FunctionDecorator = () => {\n\n/*\n  Function Decorator:\n*/\n// function fluent(fn){\n//   return function (...args){\n//     console.log( 'fluent args', args );\n//     fn.apply(this, args);\n//     return this; // <-----\n//   }\n// }\n// function decoratorName( fn ) {\n//   return function(...rest){      \n//     fn.apply(this, ...rest);\n//   }\n// }\n// const decoratorName = fn => (...rest) => {\n//   fn.apply(this, ...rest );\n// }\n//   function Person(){}\n//   Person.prototype.setName = function( first, last ){\n//     this.first = first;\n//     this.last = last;\n//   };\n//   Person.prototype.sayName = function(){\n//     console.log( 'Person name is', this.first, this.last );\n//   };\n//   let Peter = new Person();\n//       Peter.setName('Peter', 'Jackson');\n//       Peter.sayName();\n//       console.log(Peter);\n//       Peter.setName('Peter', 'Parker').sayName().setName('Bilbo', 'Bagins').sayName().sayName();\n// }\nconst es7Decorator = () => {\n  /*\n    Декораторы принимают 3 аргумента:\n      - target : обьект к которому применяется декоратор\n      - key : название метода\n      - descriptor : дескриптор метода или свойства обьекта, это обьект который определяет\n      как эта функция должна работать.\n       Object.defineProperty();\n       Благодаря декоратору, мы можем применить, его к ф-и или обьекту и вернуть примененный дескриптор.\n      Новый дескриптор который мы возвращаем, станет дескриптором функции к которой мы хотим его применить.\n       Звучит немного не очевидно, и сразу не совсем понятно, что мы можем с этим делать.\n      На самом деле эта механика очень гибкая. Одно из свойств аргумента descriptor это\n      value, который является функцией которую мы хотим присвоить.\n      Мы можем перезаписать это новой функцией или в целом делать что угодно с этой функцией.\n  */\n  // function fluentDecorator({target, key, descriptor}){\n  //   console.log('target', target, 'key', key, 'descriptor', descriptor)\n  //   const originFn = descriptor.value;\n  //   descriptor.value = function( ...args ){\n  //     originFn.apply(this, args);\n  //     return this;\n  //   }\n  // }\n  //   function decorate( target, key, descriptor ){\n  //     console.log('target', target, 'key', key, 'descriptor', descriptor);\n  //     const originFn = descriptor.value;\n  //     descriptor.value = function(...args){\n  //       originFn.apply( target, args );\n  //       return target;\n  //     }\n  //   }\n  // class Person{\n  //   @fluentDecorator\n  //   setName( first, last ){\n  //     this.first = first;\n  //     this.last = last;\n  //   }\n  //   @fluentDecorator\n  //   sayName(){\n  //     console.log('Person say:');\n  //     console.log( 'Person name is', this.first, this.last );\n  //   }\n  // }\n  // let Hobbit = new Person();\n  //     Hobbit.setName('Barliman', 'Butterbur').sayName()\n  //           .setName('222', '333').sayName();\n  // - - - - - - - - - - - - - - - - - - - - - -\n  //\n  let Arr = Array(1000).fill(0).map(item => Math.floor(Math.random() * 100));\n  console.log(Arr); //   console.log( '- - - - - - - - - - - -');\n  //   //\n\n  function time({\n    target,\n    key,\n    descriptor\n  }) {\n    //   // Делаем bind на случай если в нашей исходной функии используется this\n    console.log(this, target, key, descriptor);\n    const originFn = descriptor.value;\n    let index = 0;\n\n    descriptor.value = function (...args) {\n      let id = index++;\n      console.time(key + id);\n      let value = originFn(...args);\n      console.timeEnd(key + id);\n      return value;\n    };\n  }\n\n  let SuperArray = _decorate(null, function (_initialize) {\n    class SuperArray {\n      constructor(S_Array) {\n        _initialize(this);\n\n        this.array = S_Array; // this.squareAll = this.squareAll.bind(this);\n      }\n\n    }\n\n    return {\n      F: SuperArray,\n      d: [{\n        kind: \"field\",\n        key: \"squareAll\",\n\n        value() {\n          return () => {\n            Arr.map(x => x * x);\n          };\n        }\n\n      }, {\n        kind: \"field\",\n        decorators: [time],\n        key: \"message\",\n\n        value() {\n          return message => {\n            console.log(message);\n          };\n        }\n\n      }]\n    };\n  });\n\n  let SuperrrArray = new SuperArray(Arr);\n  SuperrrArray.squareAll();\n  SuperrrArray.message('test');\n  console.log(SuperrrArray); // const Obj = {\n  //   @time\n  //   squareAll( arr) {\n  //     return arr.map( x => x * x );\n  //   }\n  // @time\n  // message(message){\n  //   console.log( message );\n  // }\n  // // }\n  // let x = Obj.squareAll( Arr )\n  // console.log( Arr, x);\n  //   //\n  //   // Obj.message('Hello');\n  //   // Obj.message('Hello');\n  //   // Obj.message('Hello');\n  //   // Obj.message('Hello');\n  //   //\n  //\n  //\n}; //end\n\n//# sourceURL=webpack:///./application/es7_functional_decorator/index.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DecoratorExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecoratorExample */ \"./application/DecoratorExample/index.js\");\n/* harmony import */ var _es7_functional_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es7_functional_decorator */ \"./application/es7_functional_decorator/index.js\");\n // import DecoratorBase from './decorator';\n\n\n/*\n  Демо декоратора\n*/\n// DecoratorBase();\n\nObject(_DecoratorExample__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // FunctionDecorator();\n// es7Decorator();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toArray.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _toArray(arr) {\n  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();\n}\n\nmodule.exports = _toArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toArray.js?");

/***/ })

/******/ });