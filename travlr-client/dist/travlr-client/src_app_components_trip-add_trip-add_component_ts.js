"use strict";
(self["webpackChunktravlr_client"] = self["webpackChunktravlr_client"] || []).push([["src_app_components_trip-add_trip-add_component_ts"],{

/***/ 1505:
/*!***********************************************************!*\
  !*** ./src/app/components/trip-add/trip-add.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TripAddComponent: () => (/* binding */ TripAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/trip.service */ 8769);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function TripAddComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripAddComponent_div_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.success = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.success, " ");
  }
}
function TripAddComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripAddComponent_div_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.error = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.error, " ");
  }
}
function TripAddComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 61);
  }
}
function TripAddComponent_i_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 62);
  }
}
class TripAddComponent {
  constructor(tripService, router) {
    this.tripService = tripService;
    this.router = router;
    this.trip = {
      code: '',
      name: '',
      length: '',
      start: '',
      resort: '',
      perPerson: '',
      image: '',
      description: ''
    };
    this.loading = false;
    this.error = null;
    this.success = null;
  }
  onSubmit() {
    if (!this.validateForm()) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.success = null;
    this.tripService.createTrip(this.trip).subscribe({
      next: response => {
        this.loading = false;
        this.success = 'Trip created successfully!';
        // Redirect to trips list after a short delay
        setTimeout(() => {
          this.router.navigate(['/trips']);
        }, 1500);
      },
      error: error => {
        this.loading = false;
        this.error = error.message || 'Failed to create trip. Please try again.';
        console.error('Error creating trip:', error);
      }
    });
  }
  validateForm() {
    if (!this.trip.code?.trim()) {
      this.error = 'Trip code is required';
      return false;
    }
    if (!this.trip.name?.trim()) {
      this.error = 'Trip name is required';
      return false;
    }
    if (!this.trip.length?.trim()) {
      this.error = 'Trip length is required';
      return false;
    }
    if (!this.trip.start?.trim()) {
      this.error = 'Start date is required';
      return false;
    }
    if (!this.trip.resort?.trim()) {
      this.error = 'Resort information is required';
      return false;
    }
    if (!this.trip.perPerson?.trim()) {
      this.error = 'Price per person is required';
      return false;
    }
    if (!this.trip.image?.trim()) {
      this.error = 'Image URL is required';
      return false;
    }
    if (!this.trip.description?.trim()) {
      this.error = 'Description is required';
      return false;
    }
    this.error = null;
    return true;
  }
  onCancel() {
    this.router.navigate(['/trips']);
  }
  clearForm() {
    this.trip = {
      code: '',
      name: '',
      length: '',
      start: '',
      resort: '',
      perPerson: '',
      image: '',
      description: ''
    };
    this.error = null;
    this.success = null;
  }
  formatCode() {
    if (this.trip.code) {
      this.trip.code = this.trip.code.toUpperCase().replace(/[^A-Z0-9]/g, '');
    }
  }
  formatPrice() {
    if (this.trip.perPerson) {
      // Remove any non-numeric characters except decimal point
      let price = this.trip.perPerson.replace(/[^0-9.]/g, '');
      // Ensure only one decimal point
      const parts = price.split('.');
      if (parts.length > 2) {
        price = parts[0] + '.' + parts.slice(1).join('');
      }
      // Add dollar sign and formatting
      if (price && !isNaN(parseFloat(price))) {
        const numericPrice = parseFloat(price);
        this.trip.perPerson = `$${numericPrice.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`;
      }
    }
  }
  static {
    this.ɵfac = function TripAddComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TripAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_trip_service__WEBPACK_IMPORTED_MODULE_0__.TripService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TripAddComponent,
      selectors: [["app-trip-add"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 94,
      vars: 17,
      consts: [["tripForm", "ngForm"], [1, "container", "mt-4"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-10"], [1, "card", "shadow-sm", "border-0", "mb-4"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [1, "fas", "fa-plus-circle", "me-2"], [1, "mb-0", "mt-1", "opacity-75"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "shadow-sm", "border-0"], [1, "card-body", "p-4"], ["novalidate", "", 3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "code", 1, "form-label", "fw-semibold"], [1, "fas", "fa-barcode", "me-1"], ["type", "text", "id", "code", "name", "code", "placeholder", "e.g., GALR210214", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], [1, "form-text"], ["for", "name", 1, "form-label", "fw-semibold"], [1, "fas", "fa-map-marked-alt", "me-1"], ["type", "text", "id", "name", "name", "name", "placeholder", "e.g., Gale Reef Adventure", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "length", 1, "form-label", "fw-semibold"], [1, "fas", "fa-calendar-alt", "me-1"], ["type", "text", "id", "length", "name", "length", "placeholder", "e.g., 4 days / 3 nights", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "start", 1, "form-label", "fw-semibold"], [1, "fas", "fa-calendar-check", "me-1"], ["type", "date", "id", "start", "name", "start", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "resort", 1, "form-label", "fw-semibold"], [1, "fas", "fa-hotel", "me-1"], ["type", "text", "id", "resort", "name", "resort", "placeholder", "e.g., Emerald Bay, 3 stars", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "perPerson", 1, "form-label", "fw-semibold"], [1, "fas", "fa-dollar-sign", "me-1"], ["type", "text", "id", "perPerson", "name", "perPerson", "placeholder", "e.g., $1,269.00", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], [1, "mb-3"], ["for", "image", 1, "form-label", "fw-semibold"], [1, "fas", "fa-image", "me-1"], ["type", "url", "id", "image", "name", "image", "placeholder", "https://example.com/image.jpg", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "description", 1, "form-label", "fw-semibold"], [1, "fas", "fa-align-left", "me-1"], ["id", "description", "name", "description", "rows", "4", "placeholder", "Describe the trip experience, activities, and highlights...", "maxlength", "1000", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "fas", "fa-times", "me-2"], ["type", "button", 1, "btn", "btn-outline-warning", 3, "click", "disabled"], [1, "fas", "fa-eraser", "me-2"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-save me-2", 4, "ngIf"], [1, "card", "bg-light", "border-0", "mt-4"], [1, "card-body"], [1, "card-title"], [1, "fas", "fa-info-circle", "me-2"], [1, "mb-0", "small"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-save", "me-2"]],
      template: function TripAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add New Trip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create a new travel package");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TripAddComponent_div_10_Template, 4, 1, "div", 9)(11, TripAddComponent_div_11_Template, 4, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "form", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TripAddComponent_Template_form_ngSubmit_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Trip Code * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.code, $event) || (ctx.trip.code = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function TripAddComponent_Template_input_blur_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.formatCode());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Unique identifier for the trip (letters and numbers only)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Trip Name * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.name, $event) || (ctx.trip.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Duration * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.length, $event) || (ctx.trip.length = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15)(36, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Start Date * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.start, $event) || (ctx.trip.start = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14)(41, "div", 15)(42, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Resort/Accommodation * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.resort, $event) || (ctx.trip.resort = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15)(47, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Price Per Person * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.perPerson, $event) || (ctx.trip.perPerson = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function TripAddComponent_Template_input_blur_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.formatPrice());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 35)(52, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Image URL * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.image, $event) || (ctx.trip.image = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "URL to the trip's main image");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 39)(59, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Description * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "textarea", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TripAddComponent_Template_textarea_ngModelChange_62_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.trip.description, $event) || (ctx.trip.description = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 43)(66, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripAddComponent_Template_button_click_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripAddComponent_Template_button_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.clearForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Clear Form ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, TripAddComponent_span_73_Template, 1, 0, "span", 49)(74, TripAddComponent_i_74_Template, 1, 0, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 51)(77, "div", 52)(78, "h6", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Form Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ul", 55)(82, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "All fields marked with * are required");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Trip codes should be unique and contain only letters and numbers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Use clear, descriptive names for better searchability");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Include star ratings in resort information (e.g., \"Resort Name, 4 stars\")");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Prices will be automatically formatted with currency symbols");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Provide high-quality image URLs for better presentation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          const tripForm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.start);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.resort);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.perPerson);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.image);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.trip.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx.trip.description == null ? null : ctx.trip.description.length) || 0, "/1000 characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || !tripForm_r5.form.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Creating..." : "Create Trip", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  transition: all 0.3s ease;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 1rem 1rem 0 0 !important;\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6;\n  transition: all 0.3s ease;\n  padding: 0.75rem 1rem;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  transform: translateY(-1px);\n}\n\n.form-control[_ngcontent-%COMP%]:invalid {\n  border-color: #dc3545;\n}\n\n.form-control[_ngcontent-%COMP%]:valid {\n  border-color: #28a745;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.3s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: none;\n}\n\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #218838 0%, #1e7e34 100%);\n  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d;\n  color: #6c757d;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n\n.btn-outline-warning[_ngcontent-%COMP%] {\n  border-color: #ffc107;\n  color: #ffc107;\n}\n\n.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #212529;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: none;\n  padding: 1rem 1.25rem;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);\n  color: #155724;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  color: #721c24;\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n\n\n\n.form-text[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  font-weight: 500;\n}\n\n\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0 0.5rem;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0;\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n\n\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n  }\n  \n  .d-flex.gap-3[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem !important;\n  }\n  \n  .d-flex.gap-3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n  }\n  \n  .col-md-6[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #007bff;\n  outline-offset: 2px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n\n\n\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid {\n  border-color: #28a745;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='m2.3 6.73.94-.94 1.38 1.38'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid {\n  border-color: #dc3545;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath d='m5.8 4.6 1.4 1.4'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n\n\n.bg-light[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n\n.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: #6c757d;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwLWFkZC90cmlwLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdEQUFnRDtFQUNoRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxxQkFBcUI7RUFDckIsK0tBQStLO0VBQy9LLDRCQUE0QjtFQUM1QiwyREFBMkQ7RUFDM0QsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtPQUErTztFQUMvTyw0QkFBNEI7RUFDNUIsMkRBQTJEO0VBQzNELGdFQUFnRTtBQUNsRTs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwN2JmZiAwJSwgIzAwNTZiMyAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5mb3JtLWNvbnRyb2w6aW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuLmZvcm0tY29udHJvbDp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn1cblxuLmZvcm0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjE4ODM4IDAlLCAjMWU3ZTM0IDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoNDAsIDE2NywgNjksIDAuMyk7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xuICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4uYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDRlZGRhIDAlLCAjYzNlNmNiIDEwMCUpO1xuICBjb2xvcjogIzE1NTcyNDtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGQ3ZGEgMCUsICNmNWM2Y2IgMTAwJSk7XG4gIGNvbG9yOiAjNzIxYzI0O1xufVxuXG4uc3Bpbm5lci1ib3JkZXItc20ge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cblxuLyogQ2hhcmFjdGVyIGNvdW50ZXIgc3R5bGluZyAqL1xuLmZvcm0tdGV4dDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIElucHV0IGdyb3VwIHN0eWxpbmcgKi9cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAgMCAwLjVyZW07XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjVyZW0gMC41cmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbn1cblxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIFxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgXG4gIC5kLWZsZXguZ2FwLTMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kLWZsZXguZ2FwLTMgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICB9XG4gIFxuICAuY29sLW1kLTYge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cblxuLyogQW5pbWF0aW9uIGZvciBmb3JtIGFwcGVhcmFuY2UgKi9cbi5jYXJkIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjVzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8qIEZvY3VzIHN0YXRlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMDA3YmZmO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogTG9hZGluZyBzdGF0ZSAqL1xuLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKiBGb3JtIHZhbGlkYXRpb24gc3R5bGluZyAqL1xuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPSclMjMyOGE3NDUnIGQ9J20yLjMgNi43My45NC0uOTQgMS4zOCAxLjM4Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAwLjE4NzVyZW0pIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKSBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDEyJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZGMzNTQ1JyUzZSUzY2NpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvJTNlJTNjcGF0aCBkPSdtNS44IDQuNiAxLjQgMS40Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAwLjE4NzVyZW0pIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKSBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKTtcbn1cblxuLyogSGVscCBzZWN0aW9uIHN0eWxpbmcgKi9cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_trip-add_trip-add_component_ts.js.map