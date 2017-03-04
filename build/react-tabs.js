(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("classnames"), require("react")) : factory(root["classnames"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TabPanel = exports.Tab = exports.TabList = exports.Tabs = undefined;
	
	var _tabs = __webpack_require__(6);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tabList = __webpack_require__(3);
	
	var _tabList2 = _interopRequireDefault(_tabList);
	
	var _tab = __webpack_require__(5);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tabPanel = __webpack_require__(4);
	
	var _tabPanel2 = _interopRequireDefault(_tabPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tabs = _tabs2.default;
	exports.TabList = _tabList2.default;
	exports.Tab = _tab2.default;
	exports.TabPanel = _tabPanel2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(1);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabList = function (_Component) {
	  _inherits(TabList, _Component);
	
	  function TabList() {
	    _classCallCheck(this, TabList);
	
	    return _possibleConstructorReturn(this, (TabList.__proto__ || Object.getPrototypeOf(TabList)).apply(this, arguments));
	  }
	
	  _createClass(TabList, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        this.props.children
	      );
	    }
	  }]);
	
	  return TabList;
	}(_react.Component);
	
	exports.default = TabList;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(1);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabPanel = function (_Component) {
	  _inherits(TabPanel, _Component);
	
	  function TabPanel() {
	    _classCallCheck(this, TabPanel);
	
	    return _possibleConstructorReturn(this, (TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).apply(this, arguments));
	  }
	
	  _createClass(TabPanel, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2.default)(this.props.className, { 'is-selected': this.props.selected });
	
	      return _react2.default.createElement(
	        'div',
	        { className: classes },
	        this.props.children
	      );
	    }
	  }]);
	
	  return TabPanel;
	}(_react.Component);
	
	TabPanel.propTypes = {
	  className: _react2.default.PropTypes.string,
	  selected: _react2.default.PropTypes.bool
	};
	
	exports.default = TabPanel;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(1);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_Component) {
	  _inherits(Tab, _Component);
	
	  function Tab(props) {
	    _classCallCheck(this, Tab);
	
	    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Tab, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2.default)(this.props.className, { 'is-selected': this.props.selected });
	
	      return _react2.default.createElement(
	        'div',
	        { className: classes, onClick: this.handleClick },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Tab;
	}(_react.Component);
	
	Tab.propTypes = {
	  className: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func,
	  selected: _react2.default.PropTypes.bool
	};
	
	exports.default = Tab;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(1);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_Component) {
	  _inherits(Tabs, _Component);
	
	  function Tabs(props) {
	    _classCallCheck(this, Tabs);
	
	    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));
	
	    _this.state = {
	      selectedIndex: _this.props.selectedIndex,
	      tabsAbove: _this.props.tabsAbove,
	      onChange: _this.props.onChange
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Tabs, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick(this.props.id);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        selectedIndex: nextProps.selectedIndex
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(id) {
	      var previousIndex = this.state.selectedIndex;
	
	      this.setState({
	        selectedIndex: id
	      });
	
	      this.state.onChange(previousIndex, id);
	    }
	  }, {
	    key: '_getChildren',
	    value: function _getChildren() {
	      return [this._getTabList(), this._getTabPanels()];
	    }
	  }, {
	    key: '_getTabList',
	    value: function _getTabList() {
	      var self = this;
	      var index = 0;
	      var children = this.props.children;
	      var tabList = this.state.tabsAbove ? children[0] : children.slice[-1];
	      var selectedIndex = this.state.selectedIndex;
	
	      return (0, _react.cloneElement)(tabList, {
	        ref: 'tablist',
	        key: index,
	        children: _react2.default.Children.map(tabList.props.children, function (tab) {
	          var currentIndex = index++;
	
	          return (0, _react.cloneElement)(tab, {
	            ref: 'tab-' + currentIndex,
	            onClick: self.onClick,
	            id: currentIndex,
	            selected: selectedIndex == currentIndex
	          });
	        })
	      });
	    }
	  }, {
	    key: '_getTabPanels',
	    value: function _getTabPanels() {
	      var index = 0;
	      var children = this.props.children;
	      var tabPanels = this.state.tabsAbove ? children.slice(1, children.length) : children.slice(0, -1);
	      var selectedIndex = this.state.selectedIndex;
	
	      return _react2.default.Children.map(tabPanels, function (tabPanel) {
	        var currentIndex = index++;
	
	        return (0, _react.cloneElement)(tabPanel, {
	          ref: 'panel-' + currentIndex,
	          id: currentIndex,
	          selected: selectedIndex == currentIndex
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('', this.props.className) },
	        this._getChildren()
	      );
	    }
	  }]);
	
	  return Tabs;
	}(_react.Component);
	
	;
	
	Tabs.propTypes = {
	  className: _react2.default.PropTypes.string,
	  selectedIndex: _react2.default.PropTypes.number,
	  onChange: _react2.default.PropTypes.func
	};
	
	Tabs.defaultProps = {
	  selectedIndex: 0,
	  tabsAbove: true,
	  onChange: function onChange() {}
	};
	
	exports.default = Tabs;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-tabs.js.map