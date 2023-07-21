/*! For license information please see auto-Validation-Validation_3-stories.35911765.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkboosted=self.webpackChunkboosted||[]).push([[8377],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./stories/auto/Validation/Custom-MDX-Documentation.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-validation--validation-0"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-validation--validation-1"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-validation--validation-2"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{id:"components-validation--validation-3"})})]})}__webpack_exports__.Z=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./stories/auto/Validation/Validation_3.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Validation_3:function(){return Validation_3},__namedExportsOrder:function(){return __namedExportsOrder}});var _Validation_3$paramet,_Validation_3$paramet2,_Validation_3$paramet3,_Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/auto/Validation/Custom-MDX-Documentation.mdx");__webpack_exports__.default={title:"Components/Validation",parameters:{docs:{page:_Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__.Z}}};const Validation_3=()=>'<div class="bd-example m-0 border-0 m-0 border-0">\n<form class="was-validated">\n  <div class="mb-3">\n    <label for="validationTextarea" class="form-label is-required">Textarea</label>\n    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>\n    <div class="invalid-feedback">\n      Please enter a message in the textarea.\n    </div>\n  </div>\n\n  <div class="form-check mb-3">\n    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required="">\n    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>\n    <div class="invalid-feedback">Example invalid feedback text</div>\n  </div>\n\n  <div class="form-check">\n    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required="">\n    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>\n  </div>\n  <div class="form-check mb-3">\n    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required="">\n    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>\n    <div class="invalid-feedback">More example invalid feedback text</div>\n  </div>\n\n  <div class="mb-3">\n    <select class="form-select" required="" aria-label="select example">\n      <option value="">Open this select menu</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </select>\n    <div class="invalid-feedback">Example invalid select feedback</div>\n  </div>\n\n  <div class="mb-3">\n    <input type="file" class="form-control" aria-label="file example" required="">\n    <div class="invalid-feedback">Example invalid form file feedback</div>\n  </div>\n\n  <div class="mb-3">\n    <label for="inputQuantitySelector" class="form-label">Quantity selector</label>\n    <div class="input-group quantity-selector w-100">\n      <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="11" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">\n      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">\n        <span class="visually-hidden">Step down</span>\n      </button>\n      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">\n        <span class="visually-hidden">Step up</span>\n      </button>\n      <div class="invalid-feedback">Please enter a valid number.</div>\n    </div>\n  </div>\n\n  <div class="mb-3">\n    <button class="btn btn-primary mt-2" type="submit" disabled="">Submit form</button>\n  </div>\n</form>\n</div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>';Validation_3.parameters={...Validation_3.parameters,docs:{...null==(_Validation_3$paramet=Validation_3.parameters)?void 0:_Validation_3$paramet.docs,source:{originalSource:'() => `<div class="bd-example m-0 border-0 m-0 border-0">\n<form class="was-validated">\n  <div class="mb-3">\n    <label for="validationTextarea" class="form-label is-required">Textarea</label>\n    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>\n    <div class="invalid-feedback">\n      Please enter a message in the textarea.\n    </div>\n  </div>\n\n  <div class="form-check mb-3">\n    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required="">\n    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>\n    <div class="invalid-feedback">Example invalid feedback text</div>\n  </div>\n\n  <div class="form-check">\n    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required="">\n    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>\n  </div>\n  <div class="form-check mb-3">\n    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required="">\n    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>\n    <div class="invalid-feedback">More example invalid feedback text</div>\n  </div>\n\n  <div class="mb-3">\n    <select class="form-select" required="" aria-label="select example">\n      <option value="">Open this select menu</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </select>\n    <div class="invalid-feedback">Example invalid select feedback</div>\n  </div>\n\n  <div class="mb-3">\n    <input type="file" class="form-control" aria-label="file example" required="">\n    <div class="invalid-feedback">Example invalid form file feedback</div>\n  </div>\n\n  <div class="mb-3">\n    <label for="inputQuantitySelector" class="form-label">Quantity selector</label>\n    <div class="input-group quantity-selector w-100">\n      <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="11" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">\n      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">\n        <span class="visually-hidden">Step down</span>\n      </button>\n      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">\n        <span class="visually-hidden">Step up</span>\n      </button>\n      <div class="invalid-feedback">Please enter a valid number.</div>\n    </div>\n  </div>\n\n  <div class="mb-3">\n    <button class="btn btn-primary mt-2" type="submit" disabled="">Submit form</button>\n  </div>\n</form>\n</div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>`',...null==(_Validation_3$paramet2=Validation_3.parameters)||null==(_Validation_3$paramet3=_Validation_3$paramet2.docs)?void 0:_Validation_3$paramet3.source}}};const __namedExportsOrder=["Validation_3"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);