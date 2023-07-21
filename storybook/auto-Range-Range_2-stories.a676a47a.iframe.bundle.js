/*! For license information please see auto-Range-Range_2-stories.a676a47a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkboosted=self.webpackChunkboosted||[]).push([[790],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./stories/auto/Range/Custom-MDX-Documentation.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-range--range-0"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-range--range-1"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-range--range-2"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-range--range-3"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-range--range-4"})})]})}__webpack_exports__.Z=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./stories/auto/Range/Range_2.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Range_2:function(){return Range_2},__namedExportsOrder:function(){return __namedExportsOrder}});var _Range_2$parameters,_Range_2$parameters2,_Range_2$parameters2$,_Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/auto/Range/Custom-MDX-Documentation.mdx");__webpack_exports__.default={title:"Components/Range",parameters:{docs:{page:_Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__.Z}}};const Range_2=()=>'<div class="bd-example m-0 border-0 m-0 border-0">\n<label for="customRange2" class="form-label">Example range</label>\n<input type="range" class="form-range" min="0" max="5" id="customRange2">\n</div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>';Range_2.parameters={...Range_2.parameters,docs:{...null==(_Range_2$parameters=Range_2.parameters)?void 0:_Range_2$parameters.docs,source:{originalSource:'() => `<div class="bd-example m-0 border-0 m-0 border-0">\n<label for="customRange2" class="form-label">Example range</label>\n<input type="range" class="form-range" min="0" max="5" id="customRange2">\n</div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>`',...null==(_Range_2$parameters2=Range_2.parameters)||null==(_Range_2$parameters2$=_Range_2$parameters2.docs)?void 0:_Range_2$parameters2$.source}}};const __namedExportsOrder=["Range_2"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);