"use strict";
(self["webpackChunktravlr_client"] = self["webpackChunktravlr_client"] || []).push([["src_app_components_register_register_component_ts"],{

/***/ 3997:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);








function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
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
function RegisterComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 40);
  }
}
function RegisterComponent_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 41);
  }
}
class RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.userData = {
      username: '',
      email: '',
      password: ''
    };
    this.loading = false;
    this.error = null;
    this.showPassword = false;
  }
  onSubmit() {
    if (!this.validateForm()) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.authService.register(this.userData).subscribe({
      next: response => {
        this.loading = false;
        this.router.navigate(['/trips']);
      },
      error: error => {
        this.loading = false;
        this.error = error.error?.message || 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    });
  }
  validateForm() {
    if (!this.userData.username?.trim()) {
      this.error = 'Username is required';
      return false;
    }
    if (!this.userData.email?.trim()) {
      this.error = 'Email is required';
      return false;
    }
    if (!this.isValidEmail(this.userData.email)) {
      this.error = 'Please enter a valid email address';
      return false;
    }
    if (!this.userData.password?.trim()) {
      this.error = 'Password is required';
      return false;
    }
    if (this.userData.password.length < 6) {
      this.error = 'Password must be at least 6 characters long';
      return false;
    }
    this.error = null;
    return true;
  }
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  clearForm() {
    this.userData = {
      username: '',
      email: '',
      password: ''
    };
    this.error = null;
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 49,
      vars: 13,
      consts: [["registerForm", "ngForm"], [1, "register-container"], [1, "container"], [1, "row", "justify-content-center", "align-items-center", "min-vh-100"], [1, "col-lg-5", "col-md-7", "col-sm-9"], [1, "card", "shadow-lg", "border-0", "register-card"], [1, "card-header", "text-center", "bg-success", "text-white"], [1, "register-header"], [1, "fas", "fa-user-plus", "fa-3x", "mb-3"], [1, "fw-bold", "mb-1"], [1, "mb-0", "opacity-75"], [1, "card-body", "p-4"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit"], [1, "mb-3"], ["for", "username", 1, "form-label", "fw-semibold"], [1, "fas", "fa-user", "me-1"], ["type", "text", "id", "username", "name", "username", "placeholder", "Enter your username", "autocomplete", "username", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "form-label", "fw-semibold"], [1, "fas", "fa-envelope", "me-1"], ["type", "email", "id", "email", "name", "email", "placeholder", "Enter your email", "autocomplete", "email", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "password", 1, "form-label", "fw-semibold"], [1, "fas", "fa-lock", "me-1"], [1, "input-group"], ["id", "password", "name", "password", "placeholder", "Enter your password", "autocomplete", "new-password", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "d-grid", "gap-2", "mb-3"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-user-plus me-2", 4, "ngIf"], [1, "d-grid"], [1, "fas", "fa-eraser", "me-2"], [1, "card-footer", "bg-light", "text-center"], [1, "text-muted"], ["routerLink", "/login", 1, "text-decoration-none"], [1, "fas", "fa-sign-in-alt", "me-1"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-user-plus", "me-2"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Join Travlr Admin Panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 4, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Username ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userData.username, $event) || (ctx.userData.username = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userData.email, $event) || (ctx.userData.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21)(27, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24)(31, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userData.password, $event) || (ctx.userData.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.togglePasswordVisibility());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27)(35, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RegisterComponent_span_36_Template, 1, 0, "span", 29)(37, RegisterComponent_i_37_Template, 1, 0, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 31)(40, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.clearForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Clear Form ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33)(44, "small", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Sign in here ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          const registerForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userData.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userData.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || !registerForm_r4.form.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Creating Account..." : "Create Account", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".register-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  display: flex;\n  align-items: center;\n  padding: 2rem 0;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.95);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 1.5rem 1.5rem 0 0 !important;\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;\n  padding: 2rem;\n  border: none;\n}\n\n.register-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% { transform: translateY(0px); }\n  50% { transform: translateY(-10px); }\n}\n\n.register-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 2rem !important;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n  padding: 0.75rem 1rem;\n}\n\n.form-control-lg[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  font-size: 1.1rem;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n  transform: translateY(-2px);\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.75rem 0 0 0.75rem;\n}\n\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 0.75rem 0.75rem 0;\n  border: 2px solid #e9ecef;\n  border-left: none;\n}\n\n.input-group[_ngcontent-%COMP%]:focus-within   .btn[_ngcontent-%COMP%] {\n  border-color: #28a745;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  padding: 0.75rem 1.5rem;\n}\n\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: none;\n  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);\n}\n\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #218838 0%, #1e7e34 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);\n}\n\n.btn-success[_ngcontent-%COMP%]:disabled {\n  background: #28a745;\n  opacity: 0.7;\n  transform: none;\n  box-shadow: none;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d;\n  color: #6c757d;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n  transform: translateY(-1px);\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: none;\n  padding: 1rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  color: #721c24;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n  border: none;\n  padding: 1.5rem;\n}\n\n.card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #218838;\n  transform: translateY(-1px);\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  \n  .card-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  \n  .register-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  \n  .register-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  \n  .form-control-lg[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    font-size: 1rem;\n  }\n  \n  .btn-lg[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .col-sm-9[_ngcontent-%COMP%] {\n    flex: 0 0 95%;\n    max-width: 95%;\n  }\n  \n  .register-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  \n  .card-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n\n\n\n.register-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInUp 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #28a745;\n  outline-offset: 2px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\n.btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n\n\n\n.form-control[_ngcontent-%COMP%]:invalid {\n  border-color: #dc3545;\n}\n\n.form-control[_ngcontent-%COMP%]:valid {\n  border-color: #28a745;\n}\n\n\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.register-container[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: \n    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),\n    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);\n  pointer-events: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZEQUE2RDtFQUM3RCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHdFQUF3RTtFQUN4RSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVcsMEJBQTBCLEVBQUU7RUFDdkMsTUFBTSw0QkFBNEIsRUFBRTtBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0RBQWdEO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Q7O29GQUVrRjtFQUNsRixvQkFBb0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuLnJlZ2lzdGVyLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtIDEuNXJlbSAwIDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5yZWdpc3Rlci1oZWFkZXIgaSB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYW5pbWF0aW9uOiBmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxufVxuXG4ucmVnaXN0ZXItaGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbn1cblxuLmZvcm0tY29udHJvbC1sZyB7XG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gMCAwIDAuNzVyZW07XG59XG5cbi5pbnB1dC1ncm91cCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjc1cmVtIDAuNzVyZW0gMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5pbnB1dC1ncm91cDpmb2N1cy13aXRoaW4gLmJ0biB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xufVxuXG4uYnRuLWxnIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoNDAsIDE2NywgNjksIDAuMyk7XG59XG5cbi5idG4tc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTg4MzggMCUsICMxZTdlMzQgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjQpO1xufVxuXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhkN2RhIDAlLCAjZjVjNmNiIDEwMCUpO1xuICBjb2xvcjogIzcyMWMyNDtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLmNhcmQtZm9vdGVyIGEge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNhcmQtZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzIxODgzODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uc3Bpbm5lci1ib3JkZXItc20ge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG4gIFxuICAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG4gIFxuICAucmVnaXN0ZXItaGVhZGVyIGkge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sLWxnIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb2wtc20tOSB7XG4gICAgZmxleDogMCAwIDk1JTtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBcbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FyZC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cblxuLyogQW5pbWF0aW9uIGZvciBjYXJkIGFwcGVhcmFuY2UgKi9cbi5yZWdpc3Rlci1jYXJkIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC42cyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLyogRm9jdXMgc3RhdGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMyOGE3NDU7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBMb2FkaW5nIHN0YXRlICovXG4uYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogSW5wdXQgdmFsaWRhdGlvbiBzdHlsaW5nICovXG4uZm9ybS1jb250cm9sOmludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbi5mb3JtLWNvbnRyb2w6dmFsaWQge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi8qIEhvdmVyIGVmZmVjdHMgKi9cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIEJhY2tncm91bmQgcGF0dGVybiAqL1xuLnJlZ2lzdGVyLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI1JSAyNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc1JSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_register_register_component_ts.js.map