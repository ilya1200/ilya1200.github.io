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
/* harmony import */ var _components_hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hangman/hangman.component */ "./src/app/components/hangman/hangman.component.ts");




var routes = [
    { path: '', component: _components_hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"] }
];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.main-header{\r\n    margin-top: 5px;\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1haW4taGVhZGVye1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app container\">\n  <img class=\"img-fluid main-header\" src=\"assets/hangman/hangman-specs/assets/Group 8.png\">\n\n  <router-outlet></router-outlet>\n</div>"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_hangman_hangman_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hangman/hangman.component */ "./src/app/components/hangman/hangman.component.ts");
/* harmony import */ var _components_hangman_status_hangman_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hangman-status/hangman-status.component */ "./src/app/components/hangman-status/hangman-status.component.ts");
/* harmony import */ var _components_game_state_game_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-state/game-state.component */ "./src/app/components/game-state/game-state.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_keyboard_letter_keyboard_letter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/keyboard-letter/keyboard-letter.component */ "./src/app/components/keyboard-letter/keyboard-letter.component.ts");
/* harmony import */ var _components_display_letter_display_letter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/display-letter/display-letter.component */ "./src/app/components/display-letter/display-letter.component.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_hangman_hangman_component__WEBPACK_IMPORTED_MODULE_7__["HangmanComponent"],
                _components_hangman_status_hangman_status_component__WEBPACK_IMPORTED_MODULE_8__["HangmanStatusComponent"],
                _components_game_state_game_state_component__WEBPACK_IMPORTED_MODULE_9__["GameStateComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"],
                _components_keyboard_letter_keyboard_letter_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardLetterComponent"],
                _components_display_letter_display_letter_component__WEBPACK_IMPORTED_MODULE_12__["DisplayLetterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SweetAlert2Module"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/board/board.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board,\r\n.display,\r\n.word{\r\n    display: flex;\r\n}\r\n\r\n.board{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.keyboard{\r\n    padding: 5px;\r\n    width: 540px;\r\n}\r\n\r\n.display{\r\n    margin-bottom: 5px;\r\n    padding: 3px;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    width: 580px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.dletter {\r\n    margin: 10px;\r\n}\r\n\r\n.kletter{\r\n    cursor: pointer;\r\n}\r\n\r\n.word{\r\n    flex-direction: row;\r\n    margin-right: 20px;\r\n    flex-basis: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUdEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkLFxyXG4uZGlzcGxheSxcclxuLndvcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYm9hcmR7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ua2V5Ym9hcmR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogNTQwcHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDU4MHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuLmRsZXR0ZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ua2xldHRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndvcmR7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZmxleC1iYXNpczogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <div class=\"display\">\n    <!--progress-->\n    <div *ngFor=\"let word of progress\" class=\"word\">\n      <app-display-letter *ngFor=\"let dLetter of word\" [displayLetter]=\"dLetter\" class=\"dletter\"></app-display-letter>\n    </div>\n  </div>\n\n  <div class=\"keyboard\">\n    <!--keyboard-->\n    <app-keyboard-letter class=\"kletter\" *ngFor=\"let kLetter of letters\" [keyboardLetter]=\"kLetter\"\n      [isDisabled]=\"game.isGameOver() || game.isAlreadyBeenGuessed(kLetter)\" (onLetterClicked)=\"letterClicked($event)\">\n    </app-keyboard-letter>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");



var BoardComponent = /** @class */ (function () {
    function BoardComponent(game) {
        this.game = game;
        this.progress = [];
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', "R", 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.letterClicked = function (letterPressed) {
        this.onKeyPress.emit(letterPressed);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BoardComponent.prototype, "progress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoardComponent.prototype, "onKeyPress", void 0);
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/components/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/display-letter/display-letter.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/display-letter/display-letter.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letter{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    width: 40px;\r\n}\r\n\r\n.display-letter {\r\n    background-color: transparent;\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n}\r\n\r\n.display {\r\n    height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LWxldHRlci9kaXNwbGF5LWxldHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXktbGV0dGVyL2Rpc3BsYXktbGV0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0dGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWxldHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uZGlzcGxheSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/display-letter/display-letter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-letter/display-letter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"letter\">\n  <div class=\"display\">\n    <span class=\"display-letter\" *ngIf=\"displayLetter!='-'\">\n        {{displayLetter}}\n    </span>\n  </div>\n  <div *ngIf=\"displayLetter!=' '\">\n    <img src=\"assets/hangman/hangman-specs/assets/Rectangle.png\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/display-letter/display-letter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-letter/display-letter.component.ts ***!
  \***********************************************************************/
/*! exports provided: DisplayLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayLetterComponent", function() { return DisplayLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayLetterComponent = /** @class */ (function () {
    function DisplayLetterComponent() {
    }
    DisplayLetterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayLetterComponent.prototype, "displayLetter", void 0);
    DisplayLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-letter',
            template: __webpack_require__(/*! ./display-letter.component.html */ "./src/app/components/display-letter/display-letter.component.html"),
            styles: [__webpack_require__(/*! ./display-letter.component.css */ "./src/app/components/display-letter/display-letter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayLetterComponent);
    return DisplayLetterComponent;
}());



/***/ }),

/***/ "./src/app/components/game-state/game-state.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/game-state/game-state.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-state{\r\n    width: 150px;\r\n    height: 410px;\r\n}\r\n\r\n.layout{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n}\r\n\r\n.win{\r\n    color: lightgreen;\r\n}\r\n\r\n.lose{\r\n    color: tomato;\r\n}\r\n\r\n.game-state-message,\r\n.game-state-button{\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.game-state-button{\r\n    background-color: #2271BF;\r\n    color: white;\r\n    height: 75px;\r\n    border: 0;\r\n    border-radius: 16px;\r\n    margin-top: 22px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXN0YXRlL2dhbWUtc3RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IscUJBQXFCO0NBQ3hCOztBQUdEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFHRDs7SUFFSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1zdGF0ZS9nYW1lLXN0YXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1zdGF0ZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDEwcHg7XHJcbn1cclxuXHJcbi5sYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG5cclxuLndpbntcclxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xyXG59XHJcblxyXG4ubG9zZXtcclxuICAgIGNvbG9yOiB0b21hdG87XHJcbn1cclxuXHJcblxyXG4uZ2FtZS1zdGF0ZS1tZXNzYWdlLFxyXG4uZ2FtZS1zdGF0ZS1idXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lLXN0YXRlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjcxQkY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/game-state/game-state.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-state/game-state.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-state layout\">\n  <img class=\"game-state-icon\" *ngIf=\"gameStateIcon\" [src]=\"gameStateIcon\">\n  <div class=\"game-state-message\"  [ngClass]=\"gameState === GameState.win ? 'win' : 'lose'\" >\n    {{gameStateMessage}}\n  </div>\n  <button *ngIf=\"!isPlaying\" class=\"game-state-button\" (click)=\"onClick()\">AGAIN</button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/game-state/game-state.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game-state/game-state.component.ts ***!
  \***************************************************************/
/*! exports provided: GameStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateComponent", function() { return GameStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-structs/game-state.enum */ "./src/app/data-structs/game-state.enum.ts");



var GameStateComponent = /** @class */ (function () {
    function GameStateComponent() {
        this.GameState = src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"];
        this.againClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GameStateComponent.prototype.ngOnChanges = function () {
        this.isPlaying = (this.gameState === src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].playing);
        this.gameStateMessage = this.getGameStateMessage(this.gameState);
        this.gameStateIcon = this.getGameStateIcon(this.gameState);
    };
    GameStateComponent.prototype.onClick = function () {
        this.againClicked.emit(true);
    };
    GameStateComponent.prototype.getGameStateIcon = function (gameState) {
        var gameStateIcon = "";
        switch (gameState) {
            default:
            case src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].playing:
                gameStateIcon = "";
                break;
            case src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].win:
                gameStateIcon = "assets/hangman/hangman-photos/yes_symbol.png";
                break;
            case src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].lose:
                gameStateIcon = "assets/hangman/hangman-photos/shit_symbol.png";
                break;
        }
        return gameStateIcon;
    };
    GameStateComponent.prototype.getGameStateMessage = function (gameState) {
        var gameStateMessage = "";
        switch (gameState) {
            default:
            case src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].playing:
                gameStateMessage = "";
                break;
            case src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].win:
                gameStateMessage = "Yes you did is!";
                break;
            case src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].lose:
                gameStateMessage = "Shit! You died :(";
                break;
        }
        return gameStateMessage;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GameStateComponent.prototype, "gameState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GameStateComponent.prototype, "againClicked", void 0);
    GameStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-state',
            template: __webpack_require__(/*! ./game-state.component.html */ "./src/app/components/game-state/game-state.component.html"),
            styles: [__webpack_require__(/*! ./game-state.component.css */ "./src/app/components/game-state/game-state.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameStateComponent);
    return GameStateComponent;
}());



/***/ }),

/***/ "./src/app/components/hangman-status/hangman-status.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/hangman-status/hangman-status.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hangman-status{\r\n    min-width: 127px;\r\n    max-height: 256px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYW5nbWFuLXN0YXR1cy9oYW5nbWFuLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFuZ21hbi1zdGF0dXMvaGFuZ21hbi1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW5nbWFuLXN0YXR1c3tcclxuICAgIG1pbi13aWR0aDogMTI3cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/hangman-status/hangman-status.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/hangman-status/hangman-status.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img [src]=\"hangmanImg\" class=\"hangman-status\">\n</div>"

/***/ }),

/***/ "./src/app/components/hangman-status/hangman-status.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/hangman-status/hangman-status.component.ts ***!
  \***********************************************************************/
/*! exports provided: HangmanStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanStatusComponent", function() { return HangmanStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HangmanStatusComponent = /** @class */ (function () {
    function HangmanStatusComponent() {
        this.hangmanStatus = 0;
        this.hangmanImages = [
            "assets/hangman/hangman-photos/Hangman1.png",
            "assets/hangman/hangman-photos/Hangman2.png",
            "assets/hangman/hangman-photos/Hangman3.png",
            "assets/hangman/hangman-photos/Hangman4.png",
            "assets/hangman/hangman-photos/Hangman5.png",
            "assets/hangman/hangman-photos/Hangman6.png",
            "assets/hangman/hangman-photos/Hangman7.png"
        ];
        this.imgIndex = this.hangmanStatus;
        this.hangmanImg = this.hangmanImages[this.imgIndex];
    }
    HangmanStatusComponent.prototype.ngOnChanges = function () {
        this.updateHangmanImg(this.hangmanStatus);
    };
    HangmanStatusComponent.prototype.updateHangmanImg = function (hangmanStatus) {
        if (!hangmanStatus || hangmanStatus < 0 || hangmanStatus > this.hangmanImages.length - 1) {
            this.hangmanStatus = 0;
        }
        this.imgIndex = hangmanStatus;
        this.hangmanImg = this.hangmanImages[this.imgIndex];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HangmanStatusComponent.prototype, "hangmanStatus", void 0);
    HangmanStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hangman-status',
            template: __webpack_require__(/*! ./hangman-status.component.html */ "./src/app/components/hangman-status/hangman-status.component.html"),
            styles: [__webpack_require__(/*! ./hangman-status.component.css */ "./src/app/components/hangman-status/hangman-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HangmanStatusComponent);
    return HangmanStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/hangman/hangman.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/hangman/hangman.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hangman{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.hangman-status,\r\n.board,\r\n.game-state{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n@media(max-width:850px){\r\n    .hangman{\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .game-state,\r\n    .board{\r\n        order: -1;\r\n    }\r\n\r\n\r\n    .hangman-status,\r\n    .board,\r\n    .game-state{\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYW5nbWFuL2hhbmdtYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEOzs7SUFHSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUlEO0lBQ0k7UUFDSSw0QkFBNEI7S0FDL0I7O0lBRUQ7O1FBRUksVUFBVTtLQUNiOzs7SUFHRDs7O1FBR0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oYW5nbWFuL2hhbmdtYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW5nbWFue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmhhbmdtYW4tc3RhdHVzLFxyXG4uYm9hcmQsXHJcbi5nYW1lLXN0YXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICAuaGFuZ21hbntcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbWUtc3RhdGUsXHJcbiAgICAuYm9hcmR7XHJcbiAgICAgICAgb3JkZXI6IC0xO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaGFuZ21hbi1zdGF0dXMsXHJcbiAgICAuYm9hcmQsXHJcbiAgICAuZ2FtZS1zdGF0ZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/hangman/hangman.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/hangman/hangman.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hangman\">\n  <app-hangman-status class=\"hangman-status\" [hangmanStatus]=\"hangmanStatus\"></app-hangman-status>\n  <app-board class=\"board\" [progress]=\"progress\" (onKeyPress)=\"onGuessInput($event)\" class=\"app-board\"></app-board>\n  <app-game-state class=\"game-state\" [gameState]=\"gameState\" (againClicked)=\"startNewGame()\"></app-game-state>\n</div>\n\n<swal #answerAlert title=\"The answer is...\" text=\"{{answer}}\" type=\"error\" [showCancelButton]=\"false\"\n  [focusCancel]=\"true\">\n</swal>"

/***/ }),

/***/ "./src/app/components/hangman/hangman.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/hangman/hangman.component.ts ***!
  \*********************************************************/
/*! exports provided: HangmanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanComponent", function() { return HangmanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-structs/game-state.enum */ "./src/app/data-structs/game-state.enum.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");






var HangmanComponent = /** @class */ (function () {
    function HangmanComponent(http, game) {
        this.http = http;
        this.game = game;
    }
    HangmanComponent.prototype.createGame = function () {
        var _this = this;
        this.http.getMovies().subscribe(function (movies) {
            _this.hangmanStatus = 0;
            _this.gameState = src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_4__["GameState"].playing;
            _this.progress = _this.game.createGame(movies);
            _this.answer = _this.game.getAnswer();
        }, function (error) { return _this.errorMessage(error); });
    };
    HangmanComponent.prototype.onGuessInput = function (guessInputLetter) {
        if (this.gameState === src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_4__["GameState"].playing) {
            this.applyGuess(guessInputLetter);
        }
    };
    HangmanComponent.prototype.applyGuess = function (guessInputLetter) {
        this.isHit = this.game.applyGuess(guessInputLetter);
        this.progress = this.game.getCurrentProgress();
        if (!this.isHit) {
            this.hangmanStatus += 1;
        }
        this.determineGameOutcome();
    };
    HangmanComponent.prototype.determineGameOutcome = function () {
        if (this.game.isWon()) {
            this.gameState = src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_4__["GameState"].win;
        }
        else if (this.game.isLose()) {
            this.gameState = src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_4__["GameState"].lose;
            this.answerAlert.show();
        }
        else {
            this.gameState = src_app_data_structs_game_state_enum__WEBPACK_IMPORTED_MODULE_4__["GameState"].playing;
        }
    };
    HangmanComponent.prototype.startNewGame = function () {
        this.createGame();
    };
    HangmanComponent.prototype.errorMessage = function (error) {
        console.log(error);
    };
    HangmanComponent.prototype.ngOnInit = function () {
        this.createGame();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('answerAlert'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], HangmanComponent.prototype, "answerAlert", void 0);
    HangmanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hangman',
            template: __webpack_require__(/*! ./hangman.component.html */ "./src/app/components/hangman/hangman.component.html"),
            styles: [__webpack_require__(/*! ./hangman.component.css */ "./src/app/components/hangman/hangman.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], HangmanComponent);
    return HangmanComponent;
}());



/***/ }),

/***/ "./src/app/components/keyboard-letter/keyboard-letter.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/keyboard-letter/keyboard-letter.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keyboard-letter{\r\n    border: 0;\r\n    border-radius: 50%;\r\n    background-color: lightgray;\r\n    color: black;\r\n    margin-right: 9px;\r\n    margin-bottom: 15px;\r\n    font-weight: bold;\r\n    width: 46px;\r\n    height: 46px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    box-shadow: 0 0 7px rgba(0,0,0,0.3);\r\n}\r\n\r\n.keyboard-letter[disabled]{\r\n    cursor: not-allowed;\r\n    color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rZXlib2FyZC1sZXR0ZXIva2V5Ym9hcmQtbGV0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztDQUN2Qzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2tleWJvYXJkLWxldHRlci9rZXlib2FyZC1sZXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZXlib2FyZC1sZXR0ZXJ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5rZXlib2FyZC1sZXR0ZXJbZGlzYWJsZWRde1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/keyboard-letter/keyboard-letter.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/keyboard-letter/keyboard-letter.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"keyboard-letter\" [disabled]=\"isDisabled\" (click)=\"letterClicked()\">\n  {{keyboardLetter}}\n</button>\n"

/***/ }),

/***/ "./src/app/components/keyboard-letter/keyboard-letter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/keyboard-letter/keyboard-letter.component.ts ***!
  \*************************************************************************/
/*! exports provided: KeyboardLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardLetterComponent", function() { return KeyboardLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeyboardLetterComponent = /** @class */ (function () {
    function KeyboardLetterComponent() {
        this.onLetterClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDisabled = false;
    }
    KeyboardLetterComponent.prototype.ngOnInit = function () {
    };
    KeyboardLetterComponent.prototype.letterClicked = function () {
        this.isDisabled = true;
        this.onLetterClicked.emit(this.keyboardLetter);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], KeyboardLetterComponent.prototype, "keyboardLetter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], KeyboardLetterComponent.prototype, "onLetterClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], KeyboardLetterComponent.prototype, "isDisabled", void 0);
    KeyboardLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-keyboard-letter',
            template: __webpack_require__(/*! ./keyboard-letter.component.html */ "./src/app/components/keyboard-letter/keyboard-letter.component.html"),
            styles: [__webpack_require__(/*! ./keyboard-letter.component.css */ "./src/app/components/keyboard-letter/keyboard-letter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KeyboardLetterComponent);
    return KeyboardLetterComponent;
}());



/***/ }),

/***/ "./src/app/data-structs/game-state.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/data-structs/game-state.enum.ts ***!
  \*************************************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
var GameState;
(function (GameState) {
    GameState[GameState["playing"] = 0] = "playing";
    GameState[GameState["win"] = 1] = "win";
    GameState[GameState["lose"] = 2] = "lose";
})(GameState || (GameState = {}));


/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameService = /** @class */ (function () {
    function GameService() {
        this.MAX_MISSES = 6;
        this.letterAnswer = [];
        this.wordsAnswer = [];
        this.hits = [];
        this.misses = [];
    }
    GameService.prototype.createGame = function (movies) {
        this.selectedMovie = this.selectMovie(movies);
        this.letterAnswer = this.selectedMovie.split("");
        this.wordsAnswer = this.selectedMovie.split(" ");
        this.hits = [];
        this.misses = [];
        this.preFill();
        return this.getCurrentProgress();
    };
    GameService.prototype.getHits = function () {
        return this.hits;
    };
    GameService.prototype.getMisses = function () {
        return this.misses;
    };
    GameService.prototype.getAnswer = function () {
        return this.letterAnswer.join('');
    };
    GameService.prototype.preFill = function () {
        while (this.hits.length < this.letterAnswer.length * 0.25) {
            var letter = this.getRandomLetter();
            if (letter.match('[A-Z]{1}')) {
                this.applyGuess(letter);
            }
        }
    };
    GameService.prototype.getRandomLetter = function () {
        return this.letterAnswer[this.generateRandomNumber(0, this.letterAnswer.length - 1)];
    };
    GameService.prototype.applyGuess = function (guess) {
        var isHit = this.isHit(guess);
        if (isHit) {
            this.hits.push(guess);
        }
        else {
            this.misses.push(guess);
        }
        return isHit;
    };
    GameService.prototype.getCurrentProgress = function () {
        var answer = this.wordsAnswer;
        var progress = [];
        for (var i = 0; i < answer.length; i++) {
            var word = answer[i].split("");
            var wordProgress = [];
            for (var j = 0; j < word.length; j++) {
                var char = word[j];
                var display = '-';
                if (this.hits.indexOf(char) > -1) {
                    display = char;
                }
                wordProgress.push(display);
            }
            progress.push(wordProgress);
        }
        return progress;
    };
    GameService.prototype.getRemainingTries = function () {
        return this.MAX_MISSES - this.misses.length;
    };
    GameService.prototype.isHit = function (letter) {
        return (this.letterAnswer.indexOf(letter) > -1);
    };
    GameService.prototype.isAlreadyBeenGuessed = function (letter) {
        if (this.hits && this.misses) {
            return (this.hits.indexOf(letter) > -1) || (this.misses.indexOf(letter) > -1);
        }
        else {
            return false;
        }
    };
    GameService.prototype.isGameOver = function () {
        return (this.isWon() || this.isLose());
    };
    GameService.prototype.isWon = function () {
        var isWon = true;
        var progress = this.getCurrentProgress();
        for (var i = 0; i < progress.length; i++) {
            var word = progress[i];
            if (word.indexOf('-') > -1) {
                return false;
            }
        }
        return isWon;
    };
    GameService.prototype.isLose = function () {
        return (this.getRemainingTries() === 0);
    };
    GameService.prototype.selectMovie = function (movies) {
        var randomMovie = this.generateRandomNumber(0, movies.length - 1);
        return movies[randomMovie].title.toUpperCase();
    };
    GameService.prototype.generateRandomNumber = function (lower, upper) {
        return Math.floor(Math.random() * (upper - (lower) + 1)) + (lower);
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.getMoviesUrl = "assets/movies.json";
    }
    HttpService.prototype.getMovies = function () {
        return this.http.get(this.getMoviesUrl);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! C:\Users\ilya1\OneDrive\Desktop\Hangman\myTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map