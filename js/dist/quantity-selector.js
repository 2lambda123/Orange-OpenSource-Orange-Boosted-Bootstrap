/*!
  * Boosted v0.2.0 (https://boosted.orange.com/innovation-cup)
  * Copyright 2015-2022 The Boosted Authors
  * Copyright 2015-2022 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/main-jd-innovation-cup/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap quantity-selector.js v0.2.0 (https://boosted.orange.com/innovation-cup)
  * Copyright 2011-2022 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./util/index'), require('./dom/event-handler'), require('./base-component'), require('./dom/selector-engine')) :
  typeof define === 'function' && define.amd ? define(['./util/index', './dom/event-handler', './base-component', './dom/selector-engine'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.QuantitySelector = factory(global.Index, global.EventHandler, global.BaseComponent, global.SelectorEngine));
})(this, (function (index, EventHandler, BaseComponent, SelectorEngine) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);

  /**
   * --------------------------------------------------------------------------
   * Boosted (v0.2.0): quantity-selector.js
   * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main-jd-innovation-cup/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'quantityselector';
  const DATA_KEY = 'bs.quantityselector';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_CHANGE_DATA_API = `change${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const SELECTOR_STEP_UP_BUTTON = '[data-bs-step="up"]';
  const SELECTOR_STEP_DOWN_BUTTON = '[data-bs-step="down"]';
  const SELECTOR_COUNTER_INPUT = '[data-bs-step="counter"]';
  const SELECTOR_INPUT_GROUP = '.input-group';
  /**
   * Class definition
   */

  class QuantitySelector extends BaseComponent__default.default {
    // Getters
    static get NAME() {
      return NAME;
    } // Public


    ValueOnLoad(element) {
      const counterInput = element.querySelector(SELECTOR_COUNTER_INPUT);
      const btnUp = element.querySelector(SELECTOR_STEP_UP_BUTTON);
      const btnDown = element.querySelector(SELECTOR_STEP_DOWN_BUTTON);
      const min = counterInput.getAttribute('min');
      const max = counterInput.getAttribute('max');
      const step = Number(counterInput.getAttribute('step'));

      if (Number(counterInput.value) - step < min) {
        btnDown.setAttribute('disabled', '');
      }

      if (Number(counterInput.value) + step > max) {
        btnUp.setAttribute('disabled', '');
      }
    } // Static


    static StepUp(event) {
      const parent = event.target.closest(SELECTOR_INPUT_GROUP);
      const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT);
      const max = counterInput.getAttribute('max');
      const step = Number(counterInput.getAttribute('step'));
      const round = Number(counterInput.getAttribute('data-bs-round'));
      const eventChange = new Event('change');

      if (Number(counterInput.value) < max) {
        counterInput.value = (Number(counterInput.value) + step).toFixed(round).toString();
      }

      counterInput.dispatchEvent(eventChange);
    }

    static StepDown(event) {
      const parent = event.target.closest(SELECTOR_INPUT_GROUP);
      const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT);
      const min = counterInput.getAttribute('min');
      const step = Number(counterInput.getAttribute('step'));
      const round = Number(counterInput.getAttribute('data-bs-round'));
      const eventChange = new Event('change');

      if (Number(counterInput.value) > min) {
        counterInput.value = (Number(counterInput.value) - step).toFixed(round).toString();
      }

      counterInput.dispatchEvent(eventChange);
    }

    static CheckIfDisabledOnChange(event) {
      const parent = event.target.closest(SELECTOR_INPUT_GROUP);
      const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT);
      const btnUp = parent.querySelector(SELECTOR_STEP_UP_BUTTON);
      const btnDown = parent.querySelector(SELECTOR_STEP_DOWN_BUTTON);
      const min = counterInput.getAttribute('min');
      const max = counterInput.getAttribute('max');
      const step = Number(counterInput.getAttribute('step'));
      btnUp.removeAttribute('disabled', '');
      btnDown.removeAttribute('disabled', '');

      if (Number(counterInput.value) - step < min) {
        btnDown.setAttribute('disabled', '');
      }

      if (Number(counterInput.value) + step > max) {
        btnUp.setAttribute('disabled', '');
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        const data = QuantitySelector.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CHANGE_DATA_API, SELECTOR_COUNTER_INPUT, QuantitySelector.CheckIfDisabledOnChange);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_UP_BUTTON, QuantitySelector.StepUp);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_DOWN_BUTTON, QuantitySelector.StepDown);
  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const el of SelectorEngine__default.default.find(SELECTOR_INPUT_GROUP)) {
      QuantitySelector.getOrCreateInstance(el).ValueOnLoad(el);
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(QuantitySelector);

  return QuantitySelector;

}));
//# sourceMappingURL=quantity-selector.js.map
