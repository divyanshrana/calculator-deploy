(this["webpackJsonpcalculator-deploy"]=this["webpackJsonpcalculator-deploy"]||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_logo_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_logo_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_ResultComponent_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),_KeyPadComponent_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9),App=function(_React$Component){Object(C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"\u2190"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Users_hp1_Desktop_react_calculator_deploy_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null," First React calculator"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ResultComponent_js__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_KeyPadComponent_js__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),o=_(3),c=_(0),s=_.n(c),l=(_(18),function(e){Object(r.a)(_,e);var t=Object(o.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this.props.result;return s.a.createElement("div",{className:"result"},s.a.createElement("p",null,e))}}]),_}(s.a.Component));t.a=l},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),o=_(3),c=_(0),s=_.n(c),l=(_(19),function(e){Object(r.a)(_,e);var t=Object(o.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"button"},s.a.createElement("button",{className:"inbutton",name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),s.a.createElement("button",{className:"inbutton",name:"\u2190",onClick:function(t){return e.props.onClick(t.target.name)}},"\u2190"),s.a.createElement("button",{className:"inbutton",name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),s.a.createElement("button",{className:"inbutton",name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),s.a.createElement("button",{className:"inbutton",name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),s.a.createElement("button",{className:"inbutton",name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),s.a.createElement("button",{className:"inbutton",name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),s.a.createElement("button",{className:"inbutton",name:"+",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),s.a.createElement("button",{className:"inbutton",name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),s.a.createElement("button",{className:"inbutton",name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),s.a.createElement("button",{className:"inbutton",name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),s.a.createElement("button",{className:"inbutton",name:"-",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),s.a.createElement("button",{className:"inbutton",name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),s.a.createElement("button",{className:"inbutton",name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),s.a.createElement("button",{className:"inbutton",name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),s.a.createElement("button",{className:"inbutton",name:"*",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),s.a.createElement("button",{className:"inbutton",name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),s.a.createElement("button",{className:"inbutton",name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),s.a.createElement("button",{className:"inbutton",style:{background:"orange  "},name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"="),s.a.createElement("button",{className:"inbutton",name:"/",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"))}}]),_}(s.a.Component));t.a=l},function(e,t,_){e.exports=_(20)},,,,,function(e,t,_){},function(e,t,_){e.exports=_.p+"static/media/logo.5d5d9eef.svg"},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(6),o=_.n(r),c=(_(15),_(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7d18b369.chunk.js.map