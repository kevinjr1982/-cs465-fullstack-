"use strict";
(self["webpackChunktravlr_client"] = self["webpackChunktravlr_client"] || []).push([["src_app_components_login_login_component_ts"],{

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);








function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_button_click_3_listener() {
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
function LoginComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 49);
  }
}
function LoginComponent_i_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 50);
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.credentials = {
      email: '',
      password: ''
    };
    this.loading = false;
    this.error = null;
    this.showPassword = false;
  }
  ngOnInit() {
    // If user is already authenticated, redirect to trips
    this.authService.isAuthenticated$.subscribe(isAuth => {
      if (isAuth) {
        this.router.navigate(['/trips']);
      }
    });
  }
  onSubmit() {
    if (!this.validateForm()) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.authService.login(this.credentials).subscribe({
      next: response => {
        this.loading = false;
        // Navigation will be handled by the auth service and guards
        this.router.navigate(['/trips']);
      },
      error: error => {
        this.loading = false;
        this.error = error.error?.message || 'Login failed. Please check your credentials and try again.';
        console.error('Login error:', error);
      }
    });
  }
  validateForm() {
    if (!this.credentials.email?.trim()) {
      this.error = 'Email is required';
      return false;
    }
    if (!this.isValidEmail(this.credentials.email)) {
      this.error = 'Please enter a valid email address';
      return false;
    }
    if (!this.credentials.password?.trim()) {
      this.error = 'Password is required';
      return false;
    }
    if (this.credentials.password.length < 6) {
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
  fillDemoCredentials() {
    this.credentials.email = 'admin@travlr.com';
    this.credentials.password = 'admin123';
    this.error = null;
  }
  clearForm() {
    this.credentials = {
      email: '',
      password: ''
    };
    this.error = null;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 64,
      vars: 13,
      consts: [["loginForm", "ngForm"], [1, "login-container"], [1, "container"], [1, "row", "justify-content-center", "align-items-center", "min-vh-100"], [1, "col-lg-5", "col-md-7", "col-sm-9"], [1, "card", "shadow-lg", "border-0", "login-card"], [1, "card-header", "text-center", "bg-primary", "text-white"], [1, "login-header"], [1, "fas", "fa-plane", "fa-3x", "mb-3"], [1, "fw-bold", "mb-1"], [1, "mb-0", "opacity-75"], [1, "card-body", "p-4"], ["role", "alert", 1, "alert", "alert-info", "border-0", "mb-4"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-info-circle", "me-2"], [1, "flex-grow-1"], [1, "fw-semibold"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-info", 3, "click", "disabled"], [1, "fas", "fa-user-cog", "me-1"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit"], [1, "mb-3"], ["for", "email", 1, "form-label", "fw-semibold"], [1, "fas", "fa-envelope", "me-1"], ["type", "email", "id", "email", "name", "email", "placeholder", "Enter your email", "autocomplete", "email", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "password", 1, "form-label", "fw-semibold"], [1, "fas", "fa-lock", "me-1"], [1, "input-group"], ["id", "password", "name", "password", "placeholder", "Enter your password", "autocomplete", "current-password", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "d-grid", "gap-2", "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-sign-in-alt me-2", 4, "ngIf"], [1, "d-grid"], [1, "fas", "fa-eraser", "me-2"], [1, "card-footer", "bg-light", "text-center"], [1, "text-muted"], ["routerLink", "/register", 1, "text-decoration-none"], [1, "fas", "fa-user-plus", "me-1"], [1, "text-center", "mt-4"], [1, "card", "bg-light", "border-0"], [1, "card-body", "py-3"], [1, "card-title", "mb-2"], [1, "fas", "fa-shield-alt", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-sign-in-alt", "me-2"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Travlr Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign in to manage travel packages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15)(17, "small", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Demo Access Available");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Use the demo button below for quick access");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.fillDemoCredentials());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Demo Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 4, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 20, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.credentials.email, $event) || (ctx.credentials.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25)(34, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 28)(38, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.credentials.password, $event) || (ctx.credentials.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.togglePasswordVisibility());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 31)(42, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, LoginComponent_span_43_Template, 1, 0, "span", 33)(44, LoginComponent_i_44_Template, 1, 0, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 35)(47, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.clearForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Clear Form ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 37)(51, "small", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Register here ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 41)(57, "div", 42)(58, "div", 43)(59, "h6", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Secure Admin Access ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "small", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " This is a secure area for authorized administrators only. All login attempts are monitored and logged. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          const loginForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.credentials.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.credentials.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || !loginForm_r4.form.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing In..." : "Sign In", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  display: flex;\n  align-items: center;\n  padding: 2rem 0;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.95);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 1.5rem 1.5rem 0 0 !important;\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important;\n  padding: 2rem;\n  border: none;\n}\n\n.login-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% { transform: translateY(0px); }\n  50% { transform: translateY(-10px); }\n}\n\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 2rem !important;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n  padding: 0.75rem 1rem;\n}\n\n.form-control-lg[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  font-size: 1.1rem;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  transform: translateY(-2px);\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.75rem 0 0 0.75rem;\n}\n\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 0.75rem 0.75rem 0;\n  border: 2px solid #e9ecef;\n  border-left: none;\n}\n\n.input-group[_ngcontent-%COMP%]:focus-within   .btn[_ngcontent-%COMP%] {\n  border-color: #007bff;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  padding: 0.75rem 1.5rem;\n}\n\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);\n  border: none;\n  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #0056b3 0%, #004085 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #007bff;\n  opacity: 0.7;\n  transform: none;\n  box-shadow: none;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d;\n  color: #6c757d;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n  transform: translateY(-1px);\n}\n\n.btn-outline-info[_ngcontent-%COMP%] {\n  border-color: #17a2b8;\n  color: #17a2b8;\n  font-size: 0.85rem;\n}\n\n.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: white;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  border: none;\n  padding: 1rem;\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);\n  color: #0c5460;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  color: #721c24;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n  border: none;\n  padding: 1.5rem;\n}\n\n.card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  transform: translateY(-1px);\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n.alert-info[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.8rem;\n}\n\n\n\n.bg-light[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%) !important;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n\n\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  \n  .card-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  \n  .login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  \n  .login-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  \n  .form-control-lg[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    font-size: 1rem;\n  }\n  \n  .btn-lg[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .col-sm-9[_ngcontent-%COMP%] {\n    flex: 0 0 95%;\n    max-width: 95%;\n  }\n  \n  .login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  \n  .card-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n\n\n\n.login-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInUp 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #007bff;\n  outline-offset: 2px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\n.btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n\n\n\n.form-control[_ngcontent-%COMP%]:invalid {\n  border-color: #dc3545;\n}\n\n.form-control[_ngcontent-%COMP%]:valid {\n  border-color: #28a745;\n}\n\n\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.login-container[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: \n    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),\n    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);\n  pointer-events: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZEQUE2RDtFQUM3RCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHdFQUF3RTtFQUN4RSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVcsMEJBQTBCLEVBQUU7RUFDdkMsTUFBTSw0QkFBNEIsRUFBRTtBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0RBQWdEO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsMEdBQTBHO0VBQzFHLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVDs7b0ZBRWtGO0VBQ2xGLG9CQUFvQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW0gMS41cmVtIDAgMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmIDAlLCAjMDA1NmIzIDEwMCUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxvZ2luLWhlYWRlciBpIHtcbiAgb3BhY2l0eTogMC45O1xuICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG59XG5cbi5sb2dpbi1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xufVxuXG4uZm9ybS1jb250cm9sLWxnIHtcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAwIDAgMC43NXJlbTtcbn1cblxuLmlucHV0LWdyb3VwIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwIDAuNzVyZW0gMC43NXJlbSAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLmlucHV0LWdyb3VwOmZvY3VzLXdpdGhpbiAuYnRuIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG59XG5cbi5idG4tbGcge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmIDAlLCAjMDA1NmIzIDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNTZiMyAwJSwgIzAwNDA4NSAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuNCk7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xuICBjb2xvcjogIzE3YTJiODtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4uYnRuLW91dGxpbmUtaW5mbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QxZWNmMSAwJSwgI2JlZTVlYiAxMDAlKTtcbiAgY29sb3I6ICMwYzU0NjA7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhkN2RhIDAlLCAjZjVjNmNiIDEwMCUpO1xuICBjb2xvcjogIzcyMWMyNDtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLmNhcmQtZm9vdGVyIGEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNhcmQtZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uc3Bpbm5lci1ib3JkZXItc20ge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG4vKiBEZW1vIGNyZWRlbnRpYWxzIHN0eWxpbmcgKi9cbi5hbGVydC1pbmZvIC5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4vKiBBZGRpdGlvbmFsIGluZm8gY2FyZCAqL1xuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDAlLCByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuOSkgMTAwJSkgIWltcG9ydGFudDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG4gIFxuICAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICBcbiAgLmxvZ2luLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG4gIFxuICAubG9naW4taGVhZGVyIGkge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sLWxnIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb2wtc20tOSB7XG4gICAgZmxleDogMCAwIDk1JTtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxuICBcbiAgLmxvZ2luLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBcbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FyZC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cblxuLyogQW5pbWF0aW9uIGZvciBjYXJkIGFwcGVhcmFuY2UgKi9cbi5sb2dpbi1jYXJkIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC42cyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLyogRm9jdXMgc3RhdGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMwMDdiZmY7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBMb2FkaW5nIHN0YXRlICovXG4uYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogSW5wdXQgdmFsaWRhdGlvbiBzdHlsaW5nICovXG4uZm9ybS1jb250cm9sOmludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbi5mb3JtLWNvbnRyb2w6dmFsaWQge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi8qIEhvdmVyIGVmZmVjdHMgKi9cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIEJhY2tncm91bmQgcGF0dGVybiAqL1xuLmxvZ2luLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI1JSAyNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc1JSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_login_login_component_ts.js.map