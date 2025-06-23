"use strict";
(self["webpackChunktravlr_client"] = self["webpackChunktravlr_client"] || []).push([["common"],{

/***/ 8769:
/*!******************************************!*\
  !*** ./src/app/services/trip.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TripService: () => (/* binding */ TripService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class TripService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000/api/trips';
  }
  // Get all trips (public endpoint)
  getTrips() {
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  // Get single trip by ID (public endpoint)
  getTrip(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  // Create new trip (protected endpoint - requires authentication)
  createTrip(trip) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, trip, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  // Update existing trip (protected endpoint - requires authentication)
  updateTrip(id, trip) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.apiUrl}/${id}`, trip, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  // Partially update trip (protected endpoint - requires authentication)
  patchTrip(id, updates) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch(`${this.apiUrl}/${id}`, updates, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  // Delete trip (protected endpoint - requires authentication)
  deleteTrip(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  // Error handling
  handleError(error) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = error.error?.message || `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('TripService Error:', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(errorMessage));
  }
  static {
    this.ɵfac = function TripService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TripService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: TripService,
      factory: TripService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map