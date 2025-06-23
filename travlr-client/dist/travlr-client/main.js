"use strict";
(self["webpackChunktravlr_client"] = self["webpackChunktravlr_client"] || []).push([["main"],{

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 472);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 4796);









const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor,
    multi: true
  }, {
    provide: 'AUTH_ERROR_HANDLER',
    useFactory: authService => {
      return error => {
        if (error.status === 401) {
          authService.logout();
        }
      };
    },
    deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService]
  }]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);

const routes = [{
  path: '',
  redirectTo: '/trips',
  pathMatch: 'full'
}, {
  path: 'login',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_login_login_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/login/login.component */ 205)).then(m => m.LoginComponent)
}, {
  path: 'register',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_register_register_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/register/register.component */ 3997)).then(m => m.RegisterComponent)
}, {
  path: 'trips',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_trip-list_trip-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/trip-list/trip-list.component */ 5333)).then(m => m.TripListComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'add-trip',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_trip-add_trip-add_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/trip-add/trip-add.component */ 1505)).then(m => m.TripAddComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'edit-trip/:id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_trip-edit_trip-edit_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/trip-edit/trip-edit.component */ 9521)).then(m => m.TripEditComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/trips'
}];

/***/ }),

/***/ 5517:
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 4796);






function App_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 3)(1, "div", 4)(2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Travlr Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9)(8, "ul", 10)(9, "li", 11)(10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "All Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11)(14, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16)(18, "div", 17)(19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 20)(23, "li")(24, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function App_nav_0_Template_a_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.username) || "Admin", " ");
  }
}
function App_footer_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 29)(8, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Secure Admin Panel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.currentYear, " Travlr Getaways. All rights reserved. ");
  }
}
class App {
  constructor(authService) {
    this.authService = authService;
    this.title = 'Travlr Admin';
    this.isAuthenticated = false;
    this.currentUser = null;
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit() {
    // Subscribe to authentication state
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
    // Subscribe to current user
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    // Check if user is already authenticated on app start
    this.authService.checkAuthStatus();
  }
  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function App_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || App)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: App,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["class", "navbar navbar-expand-lg navbar-dark bg-primary shadow-sm", 4, "ngIf"], [1, "main-content"], ["class", "footer bg-light border-top mt-auto", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "shadow-sm"], [1, "container"], ["routerLink", "/trips", 1, "navbar-brand", "fw-bold"], [1, "fas", "fa-plane", "me-2"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], ["routerLink", "/trips", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-list", "me-1"], ["routerLink", "/add-trip", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-plus", "me-1"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-user-circle", "me-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt", "me-2"], [1, "footer", "bg-light", "border-top", "mt-auto"], [1, "container", "py-3"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0", "text-muted"], [1, "fas", "fa-copyright", "me-1"], [1, "col-md-6", "text-md-end"], [1, "text-muted"], [1, "fas", "fa-shield-alt", "me-1"]],
      template: function App_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, App_nav_0_Template, 27, 1, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, App_footer_3_Template, 11, 1, "footer", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("with-navbar", ctx.isAuthenticated);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: ["\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n  cursor: pointer;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n  transform: translateY(-1px);\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 0.375rem;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  transition: all 0.3s ease;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(5px);\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  padding: 0.75rem 1rem 0.25rem;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 120px);\n  padding: 0;\n}\n\n.main-content.with-navbar[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 180px);\n}\n\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n}\n\n.footer[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  \n  .nav-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  \n  .dropdown-menu[_ngcontent-%COMP%] {\n    margin-top: 0;\n    border-radius: 0;\n  }\n  \n  .main-content[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 100px);\n  }\n  \n  .main-content.with-navbar[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 160px);\n  }\n}\n\n@media (max-width: 576px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .footer[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    text-align: center !important;\n    margin-bottom: 0.5rem;\n  }\n  \n  .footer[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.5s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  transition: all 0.3s ease;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  margin-left: 0.5rem;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n\n\n.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.footer[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #007bff !important;\n}\n\n\n\n.nav-link.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: 2px;\n  background-color: #ffffff;\n  border-radius: 1px;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHAgQ29tcG9uZW50IFN0eWxlcyAqL1xuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW0gMC4yNXJlbTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLWNvbnRlbnQud2l0aC1uYXZiYXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xufVxuXG4uZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciAudGV4dC1tdXRlZCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbiAgXG4gIC5uYXYtbGluayB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB9XG4gIFxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICAubWFpbi1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICB9XG4gIFxuICAubWFpbi1jb250ZW50LndpdGgtbmF2YmFyIHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBcbiAgLmZvb3RlciAuY29sLW1kLTYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxuICBcbiAgLmZvb3RlciAuY29sLW1kLTY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4vKiBBbmltYXRpb24gZm9yIG5hdmJhciAqL1xuLm5hdmJhciB7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuNXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBIb3ZlciBlZmZlY3RzICovXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5uYXZiYXItdG9nZ2xlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogVXNlciBkcm9wZG93biBzdHlsaW5nICovXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5kcm9wZG93bi10b2dnbGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEZvb3RlciBob3ZlciBlZmZlY3RzICovXG4uZm9vdGVyIGkge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uZm9vdGVyOmhvdmVyIGkge1xuICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG4vKiBMb2FkaW5nIHN0YXRlIGZvciBuYXZpZ2F0aW9uICovXG4ubmF2LWxpbmsubG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIEFjdGl2ZSBzdGF0ZSBpbXByb3ZlbWVudHMgKi9cbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isAuthenticated$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);




class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    // Get the auth token from the service
    const authToken = this.authService.getToken();
    // Clone the request and add the authorization header if token exists
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }
    // Send the cloned request with header to the next handler
    return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      // If we get a 401 Unauthorized response, logout the user
      if (error.status === 401) {
        this.authService.logout();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);





class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000/api/auth';
    this.tokenKey = 'travlr_token';
    this.userKey = 'travlr_user';
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.checkAuthStatus();
  }
  checkAuthStatus() {
    const token = this.getToken();
    const user = this.getStoredUser();
    if (token && user) {
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(user);
    } else {
      this.logout();
    }
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      this.setToken(response.token);
      this.setUser(response.user);
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(response.user);
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Login error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  register(userData) {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      this.setToken(response.token);
      this.setUser(response.user);
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(response.user);
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Registration error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  logout() {
    this.removeToken();
    this.removeUser();
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }
  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      if (payload.exp < currentTime) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      this.logout();
      return false;
    }
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  setToken(token) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
  }
  removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
    }
  }
  setUser(user) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }
  removeUser() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.userKey);
    }
  }
  getStoredUser() {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem(this.userKey);
      if (userStr) {
        try {
          return JSON.parse(userStr);
        } catch {
          return null;
        }
      }
    }
    return null;
  }
  getAuthHeaders() {
    const token = this.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ 5517);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app__WEBPACK_IMPORTED_MODULE_1__.App, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map