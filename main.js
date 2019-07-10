(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <header>\n    <h1 class=\"display-4\">\n      {{ title }}\n    </h1>\n  </header>\n\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  text-align: center;\n  border: 0;\n  border-bottom: 14px solid rgba(0, 0, 0, 0.16);\n  margin-bottom: 2.5rem; }\n  header h1 {\n    margin: 0;\n    padding-top: 1.2rem;\n    padding-bottom: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxpbHlhMVxcT25lRHJpdmVcXERlc2t0b3BcXEZ1bGxOYW1lUGFyc2VyXFxmdWxsLW5hbWUtcGFyc2VyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULDhDQUF5QztFQUN6QyxzQkFBcUIsRUFPeEI7RUFYRDtJQU9RLFVBQVM7SUFDVCxvQkFBbUI7SUFDbkIsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCByZ2JhKDAsMCwwLC4xNik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblxyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMnJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Full Name Parser';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_parser_parser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parser/parser.component */ "./src/app/components/parser/parser.component.ts");
/* harmony import */ var _components_parser_results_parser_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parser-results/parser-results.component */ "./src/app/components/parser-results/parser-results.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_parser_parser_component__WEBPACK_IMPORTED_MODULE_6__["ParserComponent"],
                _components_parser_results_parser_results_component__WEBPACK_IMPORTED_MODULE_7__["ParserResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: 'parser', component: _components_parser_parser_component__WEBPACK_IMPORTED_MODULE_6__["ParserComponent"] },
                    { path: '', redirectTo: 'parser', pathMatch: 'full' },
                    { path: '**', redirectTo: 'parser', pathMatch: 'full' }
                ]),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/full-name.ts":
/*!**************************************!*\
  !*** ./src/app/classes/full-name.ts ***!
  \**************************************/
/*! exports provided: FullName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullName", function() { return FullName; });
var FullName = /** @class */ (function () {
    function FullName() {
    }
    return FullName;
}());



/***/ }),

/***/ "./src/app/classes/patterns.enum.ts":
/*!******************************************!*\
  !*** ./src/app/classes/patterns.enum.ts ***!
  \******************************************/
/*! exports provided: Patterns, FirstNameFirst, LastNameFirst, GetInputPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patterns", function() { return Patterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstNameFirst", function() { return FirstNameFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastNameFirst", function() { return LastNameFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInputPattern", function() { return GetInputPattern; });
var Patterns;
(function (Patterns) {
    Patterns["Prefix"] = "([A-Z][a-z]+\\.[ ]+)?";
    Patterns["FirstName"] = "[A-Z][a-z]+";
    Patterns["Middle"] = "([A-Z](\\.|[a-z]+)[ ]*)?";
    Patterns["LastName"] = "[A-Z][a-z]+";
    Patterns["Suffix"] = "([ ]*[A-Z][A-Za-z]+(\\.))?[ ]*";
    Patterns["Space"] = "[ ]+";
})(Patterns || (Patterns = {}));
var FirstNameFirst = Patterns.Prefix +
    Patterns.FirstName +
    Patterns.Space +
    Patterns.Middle +
    Patterns.LastName +
    Patterns.Suffix;
var LastNameFirst = Patterns.Prefix +
    Patterns.LastName +
    '\,' +
    Patterns.Space +
    Patterns.FirstName +
    '[ ]*' +
    Patterns.Middle +
    Patterns.Suffix;
var GetInputPattern = function () {
    return "^(" + FirstNameFirst + "|" + LastNameFirst + ")$";
};


/***/ }),

/***/ "./src/app/components/parser-results/parser-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/parser-results/parser-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid py-3\">\n\n  <h1 class=\"display-4 p-1 mb-3 parser-result-header\">Parser Results</h1>\n\n  <div class=\"container\">\n    <div class=\"card-deck p-1\">\n      <div class=\"result-row\">\n        <div class=\"card mb-3 result-card\" *ngFor=\"let name of parsedNames\">\n          <div class=\"card-header\">\n            Parsed Name\n          </div>\n\n          <div class=\"card-body crd-body\">\n            <div class=\"info\">\n              <dl class=\"row\">\n                <dt class=\"col-sm-6\">Prefix</dt>\n                <dd class=\"col-sm-6\">{{name.prefix}}</dd>\n              </dl>\n\n              <dl class=\"row\">\n                <dt class=\"col-sm-6\">First name</dt>\n                <dd class=\"col-sm-6\">{{name.firstName}}</dd>\n              </dl>\n\n              <dl class=\"row\">\n                <dt class=\"col-sm-6\">Middle name</dt>\n                <dd class=\"col-sm-6\">{{name.middleName}}</dd>\n              </dl>\n\n              <dl class=\"row\">\n                <dt class=\"col-sm-6\">Last name</dt>\n                <dd class=\"col-sm-6\">{{name.lastName}}</dd>\n              </dl>\n\n              <dl class=\"row\">\n                <dt class=\"col-sm-6\">Sufix</dt>\n                <dd class=\"col-sm-6\">{{name.suffix}}</dd>\n              </dl>\n            </div>\n\n\n            <button type=\"button\" (click)=\"delete(name)\" class=\"btn btn-outline-dark btn-lg btn-block\">Delete</button>\n          </div>\n\n        </div>\n        <!--card-->\n      </div>\n      <!--row-->\n    </div>\n    <!--card-deck-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/parser-results/parser-results.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/parser-results/parser-results.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parser-result-header {\n  text-align: center;\n  border: 0;\n  border-bottom: 14px solid rgba(0, 0, 0, 0.1); }\n\n.crd-body {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.result-row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%; }\n\n.result-card {\n  flex-grow: 1;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3); }\n\n@media (min-width: 575px) {\n    .result-card {\n      flex-basis: 40%;\n      max-width: 40%; } }\n\n@media (min-width: 900px) {\n    .result-card {\n      flex-basis: 30%;\n      max-width: 30%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJzZXItcmVzdWx0cy9DOlxcVXNlcnNcXGlseWExXFxPbmVEcml2ZVxcRGVza3RvcFxcRnVsbE5hbWVQYXJzZXJcXGZ1bGwtbmFtZS1wYXJzZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhcnNlci1yZXN1bHRzXFxwYXJzZXItcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsNkNBQXdDLEVBQzNDOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QiwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGFBQVk7RUFDWix1Q0FBc0MsRUFXekM7O0FBVEc7SUFKSjtNQUtRLGdCQTVCZ0I7TUE2QmhCLGVBN0JnQixFQW9DdkIsRUFBQTs7QUFKRztJQVRKO01BVVEsZ0JBaENlO01BaUNmLGVBakNlLEVBbUN0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJzZXItcmVzdWx0cy9wYXJzZXItcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtZWRpdW0tc2NyZWVuOjU3NXB4O1xyXG4kbGFyZ2Utc2NyZWVuOiA5MDBweDtcclxuXHJcbiRtZWRpdW0tc2NyZWVuLWNhcmQ6IDQwJTtcclxuJGxhcmdlLXNjcmVlbi1jYXJkOiAzMCU7XHJcblxyXG4ucGFyc2VyLXJlc3VsdC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xyXG59XHJcblxyXG4uY3JkLWJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJlc3VsdC1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZXN1bHQtY2FyZHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiRtZWRpdW0tc2NyZWVuKSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogJG1lZGl1bS1zY3JlZW4tY2FyZDtcclxuICAgICAgICBtYXgtd2lkdGg6ICRtZWRpdW0tc2NyZWVuLWNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6JGxhcmdlLXNjcmVlbikge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6ICRsYXJnZS1zY3JlZW4tY2FyZDtcclxuICAgICAgICBtYXgtd2lkdGg6ICRsYXJnZS1zY3JlZW4tY2FyZDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/parser-results/parser-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/parser-results/parser-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: ParserResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserResultsComponent", function() { return ParserResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParserResultsComponent = /** @class */ (function () {
    function ParserResultsComponent() {
        this.parsedNames = [];
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ParserResultsComponent.prototype.ngOnInit = function () {
    };
    ParserResultsComponent.prototype.delete = function (nameIdToBeDeleted) {
        this.deleteClicked.emit(nameIdToBeDeleted);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ParserResultsComponent.prototype, "parsedNames", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ParserResultsComponent.prototype, "deleteClicked", void 0);
    ParserResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parser-results',
            template: __webpack_require__(/*! ./parser-results.component.html */ "./src/app/components/parser-results/parser-results.component.html"),
            styles: [__webpack_require__(/*! ./parser-results.component.scss */ "./src/app/components/parser-results/parser-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParserResultsComponent);
    return ParserResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/parser/parser.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/parser/parser.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card parser-card\">\n  <h5 class=\"card-header\">Parser</h5>\n  <div class=\"card-body\">\n\n    <div *ngIf=\"fName.invalid && fName.touched\" class=\"alert alert-danger mt-1\" role=\"alert\">\n      <strong>Error!</strong> A full name should follow the pattern — check it out!\n    </div>\n\n    <form #form=\"ngForm\" (submit)=\"submitForm(form)\" autocomplete=\"off\" novalidate class=\"parser-card-body\" [class.error]=\"fName.invalid && fName.touched\">\n      <div class=\"form-group\">\n        <label for=\"fullName\">Enter your full name:</label>\n        <input type=\"text\" #fName=\"ngModel\" [(ngModel)]=\"fullName\" [pattern]=\"inputPattern\" required class=\"form-control\" id=\"fullName\"\n          name=\"fullName\" placeholder=\"full name\">\n      </div>\n      <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n    </form>\n  </div>\n</div>\n\n<app-parser-results [parsedNames]=\"parsedResults\" (deleteClicked)='onDeleteClicked($event)'></app-parser-results>"

/***/ }),

/***/ "./src/app/components/parser/parser.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/parser/parser.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parser-card {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);\n  margin-bottom: 2.5rem; }\n\n@media (min-width: 575px) {\n  .parser-card-body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; } }\n\n@media (min-width: 575px) {\n  .parser-card-body div {\n    flex-grow: 8;\n    flex-basis: 80%;\n    margin-bottom: 0; } }\n\n@media (min-width: 575px) {\n  .parser-card-body button {\n    flex-grow: 2;\n    flex-basis: 20%;\n    margin-left: 3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJzZXIvQzpcXFVzZXJzXFxpbHlhMVxcT25lRHJpdmVcXERlc2t0b3BcXEZ1bGxOYW1lUGFyc2VyXFxmdWxsLW5hbWUtcGFyc2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYXJzZXJcXHBhcnNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVDQUFzQztFQUN0QyxzQkFBcUIsRUFDeEI7O0FBR0c7RUFESjtJQUVRLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCLEVBa0JyQyxFQUFBOztBQWRPO0VBUlI7SUFTWSxhQUFZO0lBQ1osZ0JBQWU7SUFDZixpQkFBZ0IsRUFFdkIsRUFBQTs7QUFHRztFQWhCUjtJQWlCWSxhQUFZO0lBQ1osZ0JBQWU7SUFDZixpQkFBZ0IsRUFFdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFyc2VyL3BhcnNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtZWRpdW0tc2NyZWVuOjU3NXB4O1xyXG5cclxuLnBhcnNlci1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbi5wYXJzZXItY2FyZC1ib2R5e1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6JG1lZGl1bS1zY3JlZW4pIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdntcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbWVkaXVtLXNjcmVlbikge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDg7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRtZWRpdW0tc2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/parser/parser.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/parser/parser.component.ts ***!
  \*******************************************************/
/*! exports provided: ParserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserComponent", function() { return ParserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_parsing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/parsing.service */ "./src/app/services/parsing.service.ts");
/* harmony import */ var src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/patterns.enum */ "./src/app/classes/patterns.enum.ts");




var ParserComponent = /** @class */ (function () {
    function ParserComponent(parsing) {
        this.parsing = parsing;
        this.resolveParsing = this.resolveParsing.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }
    ParserComponent.prototype.ngOnInit = function () {
        this.parsedResults = [];
        this.inputPattern = Object(src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__["GetInputPattern"])();
    };
    ParserComponent.prototype.submitForm = function (form) {
        if (form.invalid) {
            console.log("form was invalid");
            return;
        }
        this.fullName = form.value.fullName;
        this.parsing.parseFullName(this.fullName).then(this.resolveParsing, this.errorHandler);
        form.resetForm();
    };
    ParserComponent.prototype.resolveParsing = function (fullNameParsed) {
        this.fullNameParsed = fullNameParsed;
        this.parsedResults.push(this.fullNameParsed);
    };
    ParserComponent.prototype.errorHandler = function (err) {
        console.log(err);
    };
    ParserComponent.prototype.onDeleteClicked = function (nameIdToBeDeleted) {
        this.parsedResults.splice(this.parsedResults.indexOf(nameIdToBeDeleted), 1);
    };
    ParserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parser',
            template: __webpack_require__(/*! ./parser.component.html */ "./src/app/components/parser/parser.component.html"),
            styles: [__webpack_require__(/*! ./parser.component.scss */ "./src/app/components/parser/parser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_parsing_service__WEBPACK_IMPORTED_MODULE_2__["ParsingService"]])
    ], ParserComponent);
    return ParserComponent;
}());



/***/ }),

/***/ "./src/app/services/parsing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/parsing.service.ts ***!
  \*********************************************/
/*! exports provided: ParsingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsingService", function() { return ParsingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_full_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/full-name */ "./src/app/classes/full-name.ts");
/* harmony import */ var src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/patterns.enum */ "./src/app/classes/patterns.enum.ts");




var ParsingService = /** @class */ (function () {
    function ParsingService() {
        this.patterns = [src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__["FirstNameFirst"], src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__["LastNameFirst"]];
    }
    ParsingService.prototype.parseFullName = function (fullName) {
        var _this = this;
        var fullNamePromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                var splitedName = fullName.trim().split(/\s+/);
                var current = 0;
                _this.fullNameParsed = new _classes_full_name__WEBPACK_IMPORTED_MODULE_2__["FullName"]();
                if (splitedName[current].indexOf(".") >= 0) {
                    _this.fullNameParsed.prefix = splitedName[current];
                    current++;
                }
                if (fullName.match("^" + _this.patterns[0] + "$")) {
                    _this.fullNameParsed.firstName = splitedName[current];
                    current++;
                    if (splitedName.length - current == 3) {
                        _this.fullNameParsed.middleName = splitedName[current++];
                        _this.fullNameParsed.lastName = splitedName[current++];
                        _this.fullNameParsed.suffix = splitedName[current++];
                    }
                    else if (splitedName.length - current == 1) {
                        _this.fullNameParsed.lastName = splitedName[current];
                    }
                    else if (splitedName.length - current == 2 && splitedName[splitedName.length - 1].match("^" + src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__["Patterns"].Suffix + "$")) {
                        _this.fullNameParsed.lastName = splitedName[current++];
                        _this.fullNameParsed.suffix = splitedName[current++];
                    }
                    else {
                        _this.fullNameParsed.middleName = splitedName[current++];
                        _this.fullNameParsed.lastName = splitedName[current++];
                    }
                }
                else if (fullName.match("^" + _this.patterns[1] + "$")) {
                    _this.fullNameParsed.lastName = splitedName[current].replace(',', '');
                    current++;
                    _this.fullNameParsed.firstName = splitedName[current++];
                    if (current < splitedName.length && splitedName[current].match("^" + src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__["Patterns"].Middle + "$") && (splitedName[current].indexOf('.') == -1 || splitedName[current].length == 2)) {
                        _this.fullNameParsed.middleName = splitedName[current];
                        current++;
                    }
                    if (current < splitedName.length && splitedName[current].match("^" + src_app_classes_patterns_enum__WEBPACK_IMPORTED_MODULE_3__["Patterns"].Suffix + "$")) {
                        _this.fullNameParsed.suffix = splitedName[current];
                        current++;
                    }
                }
                else {
                    reject("Invalid");
                    return;
                }
                resolve(_this.fullNameParsed);
            }, 1000);
        }); // Promise
        return fullNamePromise;
    };
    ParsingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParsingService);
    return ParsingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ilya1\OneDrive\Desktop\FullNameParser\full-name-parser\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map