"use strict";
(self["webpackChunktravlr_client"] = self["webpackChunktravlr_client"] || []).push([["src_app_components_trip-list_trip-list_component_ts"],{

/***/ 697:
/*!*************************************************************!*\
  !*** ./src/app/components/trip-card/trip-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TripCardComponent: () => (/* binding */ TripCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);






const _c0 = a0 => ["/edit-trip", a0];
function TripCardComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function TripCardComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripCardComponent_div_39_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.trip._id));
  }
}
function TripCardComponent_div_40_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 54);
  }
}
function TripCardComponent_div_40_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 55);
  }
}
function TripCardComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are you sure you want to delete this trip? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41)(6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripCardComponent_div_40_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TripCardComponent_div_40_span_7_Template, 1, 0, "span", 50)(8, TripCardComponent_div_40_i_8_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripCardComponent_div_40_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.deleting ? "Deleting..." : "Yes, Delete", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.deleting);
  }
}
class TripCardComponent {
  constructor() {
    this.showAdminActions = false;
    this.deleteTrip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showDeleteConfirm = false;
    this.deleting = false;
  }
  onDelete() {
    this.showDeleteConfirm = true;
  }
  confirmDelete() {
    if (this.trip._id) {
      this.deleting = true;
      this.deleteTrip.emit(this.trip._id);
    }
  }
  cancelDelete() {
    this.showDeleteConfirm = false;
  }
  onImageError(event) {
    const target = event.target;
    if (target) {
      target.src = 'https://via.placeholder.com/400x250?text=No+Image';
    }
  }
  formatPrice(price) {
    if (!price) return '$0.00';
    // If price already has $ sign, return as is
    if (price.includes('$')) {
      return price;
    }
    // Otherwise, add $ sign and format
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (isNaN(numericPrice)) return '$0.00';
    return `$${numericPrice.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }
  formatDate(dateString) {
    if (!dateString) return 'TBD';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  }
  truncateDescription(description) {
    if (!description) return '';
    const maxLength = 120;
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength).trim() + '...';
  }
  getDurationBadgeClass(duration) {
    if (!duration) return 'bg-secondary';
    const days = this.extractDays(duration);
    if (days <= 3) return 'bg-info';
    if (days <= 5) return 'bg-warning';
    return 'bg-success';
  }
  getPriceBadgeClass(price) {
    if (!price) return 'bg-secondary';
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (isNaN(numericPrice)) return 'bg-secondary';
    if (numericPrice < 1000) return 'bg-success';
    if (numericPrice < 1500) return 'bg-warning';
    return 'bg-danger';
  }
  extractDays(duration) {
    const match = duration.match(/(\d+)\s*days?/i);
    return match ? parseInt(match[1], 10) : 0;
  }
  static {
    this.ɵfac = function TripCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TripCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TripCardComponent,
      selectors: [["app-trip-card"]],
      inputs: {
        trip: "trip",
        showAdminActions: "showAdminActions"
      },
      outputs: {
        deleteTrip: "deleteTrip"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 55,
      vars: 18,
      consts: [[1, "card", "h-100", "shadow-sm", "trip-card"], [1, "card-img-container"], [1, "card-img-top", 3, "error", "src", "alt"], [1, "badge", "position-absolute", "top-0", "start-0", "m-2"], [1, "fas", "fa-clock", "me-1"], [1, "badge", "position-absolute", "top-0", "end-0", "m-2"], [1, "card-body", "d-flex", "flex-column"], [1, "trip-header", "mb-3"], [1, "card-title", "fw-bold", "mb-1"], [1, "trip-meta"], [1, "text-muted"], [1, "fas", "fa-map-marker-alt", "me-1"], [1, "text-muted", "ms-3"], [1, "fas", "fa-calendar-alt", "me-1"], [1, "trip-code", "mt-1"], [1, "badge", "bg-light", "text-dark"], [1, "trip-description", "flex-grow-1", "mb-3"], [1, "card-text", "text-muted"], [1, "trip-details", "mb-3"], [1, "row", "g-2"], [1, "col-6"], [1, "detail-item"], [1, "fas", "fa-calendar-check", "text-primary", "me-2"], [1, "fw-semibold"], [1, "fas", "fa-dollar-sign", "text-success", "me-2"], [1, "card-actions", "mt-auto"], ["class", "d-grid gap-2", 4, "ngIf"], ["class", "btn-group w-100", 4, "ngIf"], ["class", "delete-confirmation", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-0", "pt-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "rating"], [1, "fas", "fa-star", "text-warning"], [1, "fas", "fa-star-half-alt", "text-warning"], [1, "text-muted", "ms-1"], [1, "availability"], [1, "badge", "bg-success"], [1, "fas", "fa-check-circle", "me-1"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary"], [1, "fas", "fa-info-circle", "me-2"], [1, "btn-group", "w-100"], ["title", "Edit Trip", 1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "fas", "fa-edit", "me-1"], ["title", "Delete Trip", 1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash", "me-1"], [1, "delete-confirmation"], [1, "alert", "alert-warning", "mb-2", "py-2"], [1, "fas", "fa-exclamation-triangle", "me-1"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "fas fa-check me-1", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-times", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fas", "fa-check", "me-1"]],
      template: function TripCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function TripCardComponent_Template_img_error_2_listener($event) {
            return ctx.onImageError($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "small", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14)(20, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20)(33, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TripCardComponent_div_38_Template, 4, 0, "div", 26)(39, TripCardComponent_div_39_Template, 7, 3, "div", 27)(40, TripCardComponent_div_40_Template, 13, 5, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29)(42, "div", 30)(43, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 32)(45, "i", 32)(46, "i", 32)(47, "i", 32)(48, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "4.5 (128 reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35)(52, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Available ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.trip.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.trip.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getDurationBadgeClass(ctx.trip.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.trip.length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getPriceBadgeClass(ctx.trip.perPerson));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formatPrice(ctx.trip.perPerson), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trip.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.trip.resort, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.formatDate(ctx.trip.start), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trip.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.truncateDescription(ctx.trip.description), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trip.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatPrice(ctx.trip.perPerson));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAdminActions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdminActions && !ctx.showDeleteConfirm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteConfirm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".trip-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 1rem;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  background: white;\n}\n\n.trip-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;\n}\n\n.card-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 250px;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.trip-card[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n}\n\n.badge.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;\n}\n\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%) !important;\n  color: #212529 !important;\n}\n\n.badge.bg-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%) !important;\n}\n\n.badge.bg-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #e83e8c 100%) !important;\n}\n\n.badge.bg-light[_ngcontent-%COMP%] {\n  background: #f8f9fa !important;\n  color: #495057 !important;\n  border: 1px solid #dee2e6;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 1.25rem;\n  line-height: 1.3;\n}\n\n.trip-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.trip-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\n.trip-code[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.trip-description[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.trip-details[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  margin: 0 -0.25rem;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);\n  border: none;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #0056b3 0%, #004085 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  color: #007bff;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);\n  border-color: #007bff;\n  transform: translateY(-1px);\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  color: #dc3545;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n  border-color: #dc3545;\n  transform: translateY(-1px);\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n  border: none;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);\n  border: none;\n}\n\n.delete-confirmation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.alert-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);\n  border: 1px solid #ffeaa7;\n  color: #856404;\n  border-radius: 0.5rem;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: transparent !important;\n}\n\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-right: 0.1rem;\n}\n\n.availability[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .card-img-container[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .trip-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  \n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 0.5rem 0.75rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .card-img-container[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  \n  .detail-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .rating[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  \n  .card-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n}\n\n\n\n.detail-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #007bff;\n  outline-offset: 2px;\n}\n\n\n\n.trip-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwLWNhcmQvdHJpcC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50cmlwLWNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udHJpcC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLnRyaXAtY2FyZDpob3ZlciAuY2FyZC1pbWctdG9wIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmFkZ2UuYmctc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLmJhZGdlLmJnLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZjMTA3IDAlLCAjZmQ3ZTE0IDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS5iZy1pbmZvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3YTJiOCAwJSwgIzZmNDJjMSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2UuYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2U4M2U4YyAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2UuYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnRyaXAtbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi50cmlwLW1ldGEgc21hbGwge1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi50cmlwLWNvZGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi50cmlwLWRlc2NyaXB0aW9uIHtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4udHJpcC1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBtYXJnaW46IDAgLTAuMjVyZW07XG59XG5cbi5kZXRhaWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZGV0YWlsLWl0ZW0gaSB7XG4gIHdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmIDAlLCAjMDA1NmIzIDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDU2YjMgMCUsICMwMDQwODUgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwN2JmZiAwJSwgIzAwNTZiMyAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2M4MjMzMyAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2M4MjMzMyAxMDAlKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2Yzc1N2QgMCUsICM1YTYyNjggMTAwJSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRlbGV0ZS1jb25maXJtYXRpb24ge1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYzY2QgMCUsICNmZmVhYTcgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmVhYTc7XG4gIGNvbG9yOiAjODU2NDA0O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ucmF0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJhdGluZyBpIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1yaWdodDogMC4xcmVtO1xufVxuXG4uYXZhaWxhYmlsaXR5IC5iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbn1cblxuLnNwaW5uZXItYm9yZGVyLXNtIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbn1cblxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWltZy1jb250YWluZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBcbiAgLnRyaXAtbWV0YSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gIH1cbiAgXG4gIC5idG4tZ3JvdXAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2FyZC1pbWctY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIFxuICAuZGV0YWlsLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIFxuICAucmF0aW5nIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgfVxuICBcbiAgLmNhcmQtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIH1cbn1cblxuLyogSG92ZXIgZWZmZWN0cyBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cbi5kZXRhaWwtaXRlbTpob3ZlciBpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYmFkZ2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4vKiBMb2FkaW5nIHN0YXRlICovXG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBGb2N1cyBzdGF0ZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgIzAwN2JmZjtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLyogQW5pbWF0aW9uIGZvciBjYXJkIGFwcGVhcmFuY2UgKi9cbi50cmlwLWNhcmQge1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuNXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5333:
/*!*************************************************************!*\
  !*** ./src/app/components/trip-list/trip-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TripListComponent: () => (/* binding */ TripListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _trip_card_trip_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-card/trip-card.component */ 697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trip.service */ 8769);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);








function TripListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add New Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TripListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Total Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 15)(10, "div", 21)(11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Avg. Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15)(18, "div", 23)(19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "From Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15)(26, "div", 25)(27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Top Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTripStats().total);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTripStats().averageDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getTripStats().priceRange.min));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getTripStats().priceRange.max));
  }
}
function TripListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading travel packages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TripListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TripListComponent_div_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.loadTrips());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.error, " ");
  }
}
function TripListComponent_div_14_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add First Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TripListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No trips available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "There are currently no travel packages to display.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TripListComponent_div_14_a_7_Template, 3, 0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isAuthenticated);
  }
}
function TripListComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "app-trip-card", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("deleteTrip", function TripListComponent_div_15_div_1_Template_app_trip_card_deleteTrip_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onTripDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trip_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("trip", trip_r4)("showAdminActions", ctx_r0.isAuthenticated);
  }
}
function TripListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TripListComponent_div_15_div_1_Template, 2, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.trips)("ngForTrackBy", ctx_r0.trackByTripId);
  }
}
function TripListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Showing all ", ctx_r0.trips.length, " travel packages ");
  }
}
class TripListComponent {
  constructor(tripService, authService) {
    this.tripService = tripService;
    this.authService = authService;
    this.trips = [];
    this.loading = true;
    this.error = null;
    this.isAuthenticated = false;
  }
  ngOnInit() {
    // Subscribe to authentication state
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
    this.loadTrips();
  }
  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  loadTrips() {
    this.loading = true;
    this.error = null;
    this.tripService.getTrips().subscribe({
      next: trips => {
        this.trips = trips;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading trips:', error);
        this.error = 'Failed to load trips. Please try again.';
        this.loading = false;
      }
    });
  }
  onTripDeleted(tripId) {
    this.tripService.deleteTrip(tripId).subscribe({
      next: () => {
        // Remove the trip from the local array
        this.trips = this.trips.filter(trip => trip._id !== tripId);
      },
      error: error => {
        console.error('Error deleting trip:', error);
        this.error = 'Failed to delete trip. Please try again.';
      }
    });
  }
  trackByTripId(index, trip) {
    return trip._id || index.toString();
  }
  getTripStats() {
    if (!this.trips.length) {
      return {
        total: 0,
        averageDuration: 0,
        priceRange: {
          min: 0,
          max: 0
        }
      };
    }
    const prices = this.trips.map(trip => {
      const price = parseFloat(trip.perPerson.replace(/[^0-9.]/g, ''));
      return isNaN(price) ? 0 : price;
    });
    const durations = this.trips.map(trip => {
      const match = trip.length.match(/(\d+)\s*days?/i);
      return match ? parseInt(match[1], 10) : 0;
    });
    return {
      total: this.trips.length,
      averageDuration: Math.round(durations.reduce((a, b) => a + b, 0) / durations.length),
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices)
      }
    };
  }
  formatPrice(price) {
    return `$${price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }
  static {
    this.ɵfac = function TripListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TripListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_trip_service__WEBPACK_IMPORTED_MODULE_1__.TripService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TripListComponent,
      selectors: [["app-trip-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 7,
      consts: [[1, "container", "mt-4"], [1, "row", "mb-4"], [1, "col"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "display-6", "fw-bold", "text-primary", "mb-2"], [1, "fas", "fa-suitcase-rolling", "me-3"], [1, "text-muted", "mb-0"], [4, "ngIf"], ["class", "row mb-4", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], ["routerLink", "/add-trip", 1, "btn", "btn-success", "btn-lg"], [1, "fas", "fa-plus", "me-2"], [1, "col-md-3", "col-sm-6", "mb-3"], [1, "card", "bg-primary", "text-white", "h-100"], [1, "card-body", "text-center"], [1, "fas", "fa-map-marked-alt", "fa-2x", "mb-2"], [1, "card-title"], [1, "card-text"], [1, "card", "bg-success", "text-white", "h-100"], [1, "fas", "fa-calendar-alt", "fa-2x", "mb-2"], [1, "card", "bg-info", "text-white", "h-100"], [1, "fas", "fa-dollar-sign", "fa-2x", "mb-2"], [1, "card", "bg-warning", "text-white", "h-100"], [1, "fas", "fa-star", "fa-2x", "mb-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["type", "button", 1, "btn", "btn-outline-danger", "ms-3", 3, "click"], [1, "fas", "fa-redo", "me-1"], [1, "empty-state"], [1, "fas", "fa-suitcase", "fa-4x", "text-muted", "mb-3"], [1, "text-muted"], ["routerLink", "/add-trip", "class", "btn btn-primary", 4, "ngIf"], ["routerLink", "/add-trip", 1, "btn", "btn-primary"], [1, "row"], ["class", "col-lg-4 col-md-6 mb-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-4", "col-md-6", "mb-4"], [3, "deleteTrip", "trip", "showAdminActions"], [1, "text-center", "mt-4"], [1, "fas", "fa-check-circle", "me-1"]],
      template: function TripListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Travel Packages ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Discover amazing destinations and experiences");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TripListComponent_div_10_Template, 4, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TripListComponent_div_11_Template, 33, 4, "div", 8)(12, TripListComponent_div_12_Template, 6, 0, "div", 9)(13, TripListComponent_div_13_Template, 6, 1, "div", 10)(14, TripListComponent_div_14_Template, 8, 1, "div", 9)(15, TripListComponent_div_15_Template, 2, 2, "div", 11)(16, TripListComponent_div_16_Template, 4, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.trips.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.trips.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.trips.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.trips.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _trip_card_trip_card_component__WEBPACK_IMPORTED_MODULE_0__.TripCardComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.display-5[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.lead[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.1rem;\n  border-radius: 0.5rem;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  border-width: 0.3em;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  color: #721c24;\n}\n\n.alert-heading[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  transition: all 0.3s ease;\n}\n\n.stat-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.stat-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.stat-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 2rem;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  color: #495057;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #007bff !important;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n\n.text-warning[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n\n.text-info[_ngcontent-%COMP%] {\n  color: #17a2b8 !important;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .display-5[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .lead[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .btn-lg[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n  }\n  \n  .stat-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  \n  .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem !important;\n  }\n}\n\n@media (max-width: 576px) {\n  .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .d-flex.justify-content-between[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.col-lg-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n\n.col-lg-4[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n\n.col-lg-4[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n\n.col-lg-4[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.3s;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);\n  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwLWxpc3QvdHJpcC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdFQUF3RTtBQUMxRTs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsNkNBQTZDO0FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG4uZGlzcGxheS01IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxlYWQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmJ0bi1sZyB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uc3Bpbm5lci1ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDAuM2VtO1xufVxuXG4uYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZDdkYSAwJSwgI2Y1YzZjYiAxMDAlKTtcbiAgY29sb3I6ICM3MjFjMjQ7XG59XG5cbi5hbGVydC1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xufVxuXG4uZW1wdHktc3RhdGUgaSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLnN0YXQtaXRlbSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5zdGF0LWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5zdGF0LWl0ZW0gaSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5zdGF0LWl0ZW06aG92ZXIgaSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnN0YXQtaXRlbSBoNCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmJ0bi1ncm91cCAuYnRuLWNoZWNrOmNoZWNrZWQgKyAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdhcm5pbmcge1xuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbmZvIHtcbiAgY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRpc3BsYXktNSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIFxuICAubGVhZCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgXG4gIC5zdGF0LWl0ZW0gaDQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAuZW1wdHktc3RhdGUge1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxuICBcbiAgLmVtcHR5LXN0YXRlIGkge1xuICAgIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZC1mbGV4Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAuYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB9XG59XG5cbi8qIEFuaW1hdGlvbiBmb3IgbG9hZGluZyAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmNvbC1sZy00IHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDtcbn1cblxuLmNvbC1sZy00Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cblxuLmNvbC1sZy00Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmNvbC1sZy00Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLyogSG92ZXIgZWZmZWN0cyAqL1xuLmJ0biB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSg0MCwgMTY3LCA2OSwgMC4zKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwN2JmZiAwJSwgIzY2MTBmMiAxMDAlKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_trip-list_trip-list_component_ts.js.map