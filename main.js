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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\r\n    padding: 12px;\r\n    background-color: rgba(255, 0, 0, 0.2);\r\n    color: red;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div style=\"text-align:center\">\n  <!-- <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <button (click)=\"DisplayMyProperty()\">Display</button> -->\n</div>\n\n<!-- <div>\n  <app-testcomponent></app-testcomponent>\n</div>\n<div>\n  <ngswitch-example>\n    \n  </ngswitch-example>\n</div> -->\n\n<!-- <app-login></app-login>\n -->\n<router-outlet>\n  \n</router-outlet>\n\n<!--  <app-my-new-component>\n   \n </app-my-new-component> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
        this.myFirstProperty = "Sundar";
    }
    AppComponent.prototype.DisplayMyProperty = function () {
        alert(this.myFirstProperty);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-new-component/my-new-component.component */ "./src/app/my-new-component/my-new-component.component.ts");
/* harmony import */ var _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testcomponent/testcomponent.component */ "./src/app/testcomponent/testcomponent.component.ts");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/sample/sample.component.ts");
/* harmony import */ var _my_demo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-demo.service */ "./src/app/my-demo.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    {
        path: 'home/:id',
        component: _my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_4__["MyNewComponentComponent"]
    },
    {
        path: '',
        component: _my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_4__["MyNewComponentComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_4__["MyNewComponentComponent"], _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_5__["TestcomponentComponent"],
                _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_5__["NgSwitchExampleComponent"],
                _sample_sample_component__WEBPACK_IMPORTED_MODULE_6__["SampleComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                _my_demo_service__WEBPACK_IMPORTED_MODULE_7__["MyDemoService"],
                [_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.users = [
            "john",
            "Mary",
            "Ronaldo"
        ];
    }
    DataService.prototype.getFirst = function () {
        return this.users[0];
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && OnSubmit()\"> -->\n    <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"getProfile()\">\n    <table border=\"0\">\n  <!-- <tr>\n    <div>\n      <td><label for=\"firstName\">First Name</label></td>\n      <td><input type=\"text\" [ngClass]=\"{ 'is-invalid': f.submitted && FirstName.invalid }\" [(ngModel)]=\"model.firstName\" #FirstName=\"ngModel\" name=\"firstName\" required></td>\n      <td>\n          \n          <div *ngIf=\"f.submitted && FirstName.invalid\">\n              <div *ngIf=\"FirstName.errors.required\">First Name is required</div>\n          </div>      \n      </td>\n    </div>\n  </tr>\n  <tr>\n  <div>\n    <td><label for=\"lastName\">Last Name</label></td>\n    <td><input type=\"text\"  [(ngModel)]=\"model.lastName\" #LastName=\"ngModel\" name=\"lastName\" required></td>\n    <td>\n        <div *ngIf=\"f.submitted && LastName.invalid\">\n            <div *ngIf=\"LastName.errors.required\">Last name is required</div>\n        </div>\n    </td>\n  </div>\n  </tr>\n  <tr>\n  <div>\n    <td><label for=\"email\"> Email ID</label></td>\n    <td><input type=\"email\" [(ngModel)]=\"model.email\" #UEmail=\"ngModel\" name=\"email\" required email></td>\n    <td>\n        <div *ngIf=\"f.submitted && UEmail.invalid\">\n            <div *ngIf=\"UEmail.errors.required\">Email is required</div>\n            <div *ngIf=\"UEmail.errors.email\">Email must be a valid email address</div>\n        </div>\n    </td>\n  </div>\n  </tr>\n\n  <tr>\n\n  <div>\n    <td><label for=\"password\">Password</label></td>\n    <td><input type=\"password\" [(ngModel)]=\"model.password\" #Upwd=\"ngModel\" name=\"password\" required minlength=\"6\"></td>\n    <td>\n        <div *ngIf=\"f.submitted && Upwd.invalid\">\n            <div *ngIf=\"Upwd.errors.required\">Password is required</div>\n            <div *ngIf=\"Upwd.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </td>  \n      </div>      \n  </tr>\n -->\n\n <div>\n     <a routerLink=\"/home/10\"> Link 1</a>\n </div>\n  <tr colspan=\"2\">\n  <div>\n    <button> Register</button>\n  </div>\n  </tr>\n\n</table>\n</form> \n<div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, httpClient) {
        //this.ValueFromService=this.dataService.getFirst();
        this.dataService = dataService;
        this.httpClient = httpClient;
        this.model = {};
        this.sum = 0;
        this.name = "sundar";
    }
    LoginComponent.prototype.getProfile = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.OnSubmit = function () {
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
        //console.log(this.ValueFromService);
        //console.log(this.dataService.users)
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-demo.service.ts":
/*!************************************!*\
  !*** ./src/app/my-demo.service.ts ***!
  \************************************/
/*! exports provided: MyDemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDemoService", function() { return MyDemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyDemoService = /** @class */ (function () {
    function MyDemoService() {
    }
    MyDemoService.prototype.getData = function () {
        return "myDemo";
    };
    MyDemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MyDemoService);
    return MyDemoService;
}());



/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/my-new-component/my-new-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/my-new-component/my-new-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\" f.form.valid && OnSubmit()\">\n\n<div class=\"app\">\n  <div class=\"app-body\">\n      <div class=\"navbar\">\n          <button type=\"button\" class=\"btn btn-sidebar\" data-toggle=\"sidebar\"><i class=\"fa fa-bars\"></i></button>\n          <div class=\"navbar-brand\">\n              <!-- <img src=\"img/logo.png\" alt=\"logo\" /> -->\n          </div>\n          <div class=\"logo-slogan\"><span>D</span>igital <span>S</span>ales & <span>D</span>istribution</div>\n          <div class=\"right-section\">\n              <div class=\"user-info\">\n                  <div class=\"nav-item dropdown pull-right\">\n                      <a class=\"nav-profile\" id=\"profileDropdown\" href=\"#\">\n                          <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n                      </a>\n                      <a class=\"nav-profile\" id=\"profileDropdown\" href=\"#\">\n                          <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                      </a>\n                      <a class=\" nav-profile\" id=\"profileDropdown\" href=\"#\">\n                          <i class=\"fa fa-user-circle-o\"></i>\n                      </a>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"navbar-two\">\n      </div>\n      <div class=\"app-over\">\n          <div class=\"app-sidebar hight-one sidebar-slide-left\">\n              <div class=\"text-right\">\n                  <button type=\"button\" class=\"btn btn-sidebar\" data-dismiss=\"sidebar\">\n                      <span class=\"x\"></span></button>\n              </div>\n\n              <div id=\"sidebar\" class=\"sidebar-nav\">\n                  <div class=\"sidebar-nav-group\">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Dashboard</span></a>\n                  </div>\n                  <div class=\"sidebar-nav-group active\">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Manufacturers</span></a>\n                  </div>\n                  <div class=\"sidebar-nav-group \">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Buyers</span></a>\n                  </div>\n                  <div class=\"sidebar-nav-group\">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Pricing Zone</span></a>\n                  </div>\n                  <div class=\"sidebar-nav-group\">\n                      <a href=\"#device-controls\" class=\"sidebar-nav-link\" data-toggle=\"collapse\" >\n                          <span class=\"nav-link-text\">Pricing </span></a>\n                      <div id=\"device-controls\" class=\"sidebar-nav-group  collapse \" data-parent=\"#sidebar\">\n                          <a href=\"\" class=\"sidebar-nav-link\"><span class=\"nav-link-text\" >From Manufacturers</span></a>\n                          <a href=\"\" class=\"sidebar-nav-link \"><span class=\"nav-link-text\" >To Buyers</span></a>\n                      </div>\n                  </div>\n                  <div class=\"sidebar-nav-group\">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Buyer's PO</span></a>\n                  </div>\n                  <div class=\"sidebar-nav-group\">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Reports</span></a>\n                  </div>\n                  <div class=\"sidebar-nav-group\">\n                      <a href=\"#content\" class=\"nav-link\"><span class=\"nav-link-text\" >Settings</span></a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"app-content pb-3 hight-one\">\n              <div class=\"container-fulid container-body\">\n                                <h2>Manufacturer’s Registration</h2>\n                                <div class=\" bs-wizard row mx-5 justify-content-md-center\">\n                                          <div class=\"col-4 bs-wizard-step active\">\n                                              <a href=\"Parent_AddSellerVideo.html\"></a>\n                                              <div class=\"progress\"><div class=\"progress-bar\"></div></div>\n                                              <a href=\"#\" class=\"bs-wizard-dot\"></a>\n                                             <div class=\"bs-wizard-info text-center\">BASIC DETAILS</div>\n                                          </div>\n          \n                                          <div class=\"col-4 bs-wizard-step \"><!-- complete -->\n                                              <div class=\"progress\"><div class=\"progress-bar\"></div></div>\n                                              <a href=\"#\" class=\"bs-wizard-dot\"></a>\n                                               <div class=\"bs-wizard-info text-center\">PRODUCT DETAILS</div>\n                                          </div>\n                                        </div>\n\n<div class=\"card-body content-card-body\">\n<div class=\"form-one\">                        \n<div class=\"row \">\n  <div class=\"col-7\">\n     <div class=\"row\">\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Company Name*</label>\n              \n              <input type=\"text\" pattern=\"[a-zA-Z-\\.]{5,500}\" class=\"form-control\" id=\"exampleFormControlInput1\" [(ngModel)]=\"model.name\" #name=\"ngModel\" name=\"name\" required> \n              <div *ngIf=\"f.submitted && name.invalid\">\n                    <div *ngIf=\"name.errors.required\">Company name is required</div>\n                    <div *ngIf=\"name.errors.pattern\">Enter correct name </div>\n                </div>      \n            </div>\n        \n        </div>\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Business Type*</label>\n              <div class=\"select-box\">\n                 <label>\n                    <select class=\"form-control form-control-sm\" name=\"Business\" [(ngModel)]=\"model.Business\" #UBusiness=\"ngModel\" required>\n                       <option *ngFor=\"let tpe of btype\" value=\"{{tpe}}\" >\n                                {{tpe}}\n                       </option>\n                       \n                       <div *ngIf=\"f.submitted && UBusiness.invalid\">\n                           <div *ngIf=\"UBusiness.errors.required\">Business types is required</div>\n                       </div>\n\n                    </select>\n      \n                 </label> \n              </div>\n           </div>\n        </div>\n     </div>\n     <div class=\"row\">\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Established*</label>\n              <div class=\"select-box\">\n                 <label>\n                    <select class=\"form-control form-control-sm\" name=\"Establish\" [(ngModel)]=\"model.Establish\" #Establish=\"ngModel\" required>\n\n                       <option *ngFor=\"let row of year\" value=\"{{row}}\">\n                            {{row}}\n                       </option>\n\n                    </select>\n                 </label>\n              </div>\n           </div>\n        </div>\n\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Legal Status*</label>\n              <div class=\"select-box\">\n                 <label>\n                    <select class=\"form-control form-control-sm\" name=\"LegalSts\" [(ngModel)]=\"model.LegalSts\" #LegalSts=\"ngModel\" required>\n                            <option *ngFor=\"let ls of Legal\" value=\"{{ls}}\"> \n                                    {{ls}}\n                                </option>                    \n                    </select>\n                 </label>\n              </div>\n           </div>\n        </div>\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Website URL*</label>\n              \n              <input type=\"url\"  pattern=\"https?://.+\" class=\"form-control\" id=\"exampleFormControlInput1\" [(ngModel)]=\"model.Url\" #Url=\"ngModel\" name=\"Url\" required>\n              <div *ngIf=\"f.submitted && Url.invalid\">\n                  <div *ngIf=\"Url.errors.required\">URL is required</div>\n                  <div *ngIf=\"Url.errors.pattern\">Enter correct URL</div>  \n                </div>\n            </div>\n        </div>\n     </div>\n\n     <div class=\"row\">\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Mobile Number*</label>\n\n              <input type=\"text\"  pattern=\"[0-9]{10}\" class=\"form-control\" id=\"exampleFormControlInput1\" [(ngModel)]=\"model.Mobile\" #Mobile=\"ngModel\"  name=\"Mobile\" required>\n             <div *ngIf=\"Mobile.invalid && f.submitted\">\n                   <div *ngIf=\"Mobile.errors.required\">Mobile No is required </div> \n                   <div *ngIf=\"Mobile.errors.pattern\">Enter Correct Mobile No</div>\n             </div>\n\n            </div>\n        </div>\n\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Landline Number</label>\n              <input type=\"text\" pattern=\"[0-9]{15}\" class=\"form-control\" id=\"exampleFormControlInput1\" [(ngModel)]=\"model.Landline\" #Landline=\"ngModel\" name=\"Landline\" required>\n                   <div *ngIf=\"Landline.invalid && f.submitted\">\n                       <div *ngIf=\"Landline.errors.required\">Landline no is required</div>\n                       <div *ngIf=\"Landline.errors.pattern\">Enter correct number</div>\n                   </div> \n            </div>\n        </div>\n\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Email ID</label>\n              \n              <input type=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" #UEmail=\"ngModel\" name=\"email\" email>\n                \n              <div *ngIf=\"f.submitted && UEmail.invalid\">\n                        <div *ngIf=\"UEmail.errors.email\">Email must be a valid email address</div>\n                </div>\n\n            </div>\n\n        </div>\n     </div>\n\n     <div class=\"row\">\n        <div class=\"col-12\">\n           <div class=\"form-group\">\n              <label class=\"checkbox checkbox-primary\">\n              <input type=\"checkbox\">\n              <span class=\"check-mark\"></span> Allow mSupply to make calls or send SMS on my registered mobile number\n              </label>\n           </div>\n        </div>\n     </div>\n  </div>\n\n  <div class=\"col-5\">\n     <div class=\"row\">\n\n        <div class=\"col\">\n           <div class=\"upload-image\">\n              <div class=\"upload-image-content\">\n                 <br>\n                 Upload Image\n              </div>\n           </div>\n\n           <div class=\"mt-2 color-grey-off-light\">\n              <a href=\"#\">Upload Company Logo</a>\n              <br> \n              Max file size 2 mb\n           </div>\n        </div>\n\n        <div class=\"col\">\n           <div class=\"upload-image\">\n              <div class=\"upload-image-content\">\n                 <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\n                 <br>\n                 Upload Image\n              </div>\n           </div>\n\n           <div class=\"mt-2 color-grey-off-light\">\n              <a href=\"#\">Upload Company Logo</a>\n              <br>\n              Max file size 2 mb\n           </div>\n        </div>\n        <div class=\"col\">\n           <div class=\"upload-image\">\n              <div class=\"upload-image-content\">\n                 <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\n                 <br>\n                 Upload Image\n              </div>\n           </div>\n           <div class=\"mt-2 color-grey-off-light\">\n              <a href=\"#\">Upload Company Logo</a>\n              <br>\n              Max file size 2 mb\n           </div>\n        </div>\n     </div>\n  </div>\n  <div class=“clearfix”></div>\n</div>\n\n<hr/>\n<h3 class=\"header mt-5\">Proprietor / Partner Details</h3>\n<div class=\"row \">\n<div class=\"col-6\">\n      <h3 class=\"sub\">Proprietor / Partner 1</h3>\n</div>\n<div class=\"col-6 text-right\">\n      <button type=\"button\" class=\"btn btn-outline-dark text-left \"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Remove</button>\n      <button type=\"button\" class=\"btn btn-outline-primary\"> Add Proprietor/Partner</button>\n</div>\n</div>\n\n<div class=\"row \">\n  <div class=\"col-7\">\n     <div class=\"row\">\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Proprietor Name      \n                      </label>\n              <input type=\"text\" name=\"Pname\" [(ngModel)]=\"model.Pname\" #Pname=\"ngModel\" class=\"form-control\" id=\"exampleFormControlInput1\" > \n           </div>\n        </div>\n        \n     </div>\n     <div class=\"row\">\n          <div class=\"col-8\">\n             <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">Address Line 1*\n                </label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"AddrLine1\" [(ngModel)]=\"model.AddrLine1\" #AddrLine1=\"ngModel\" >\n             </div>\n          </div>\n\n       </div>\n       <div class=\"row\">\n              <div class=\"col-8\">\n                 <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Address Line 2*\n                    </label>\n                    <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"AddrLine2\" [(ngModel)]=\"model.AddrLine2\" #AddrLine2=\"ngModel\">\n                 </div>\n              </div>\n           </div>\n\n     <div class=\"row\">\n          <div class=\"col-4\">\n                  <div class=\"form-group\">\n                     <label for=\"exampleFormControlInput1\">State*</label>\n                     <div class=\"select-box\">\n                        <label>\n                           <select class=\"form-control form-control-sm\" name=\"Pstate\" [(ngModel)]=\"model.Pstate\" #Pstate=\"ngModel\" >\n                              <option value=\"aa\" selected=\"selected\">Select State</option>\n                              <option *ngFor=\"let state of ArrState\" value=\"{{state}}\"> \n                                    {{state}}\n                                </option>                 \n                           </select>\n                        </label>\n                     </div>\n                  </div>\n                  </div>\n\n                  <div class=\"col-4\">\n                          <div class=\"form-group\">\n                             <label for=\"exampleFormControlInput1\">City*</label>\n                             <div class=\"select-box\">\n                                <label>\n                                   <select class=\"form-control form-control-sm\" name=\"Pcity\" [(ngModel)]=\"model.Pcity\" #Pcity=\"ngModel\">\n                                      <option value=\"aa\" selected=\"selected\">Select City</option>\n                                      <option *ngFor=\"let city of ArrCity\" value=\"{{city}}\"> \n                                            {{city}}\n                                        </option>                 \n                                   </select>\n                                </label>\n                             </div>\n                          </div>\n                          </div>\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">PIN Code</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"Pincode\" [(ngModel)]=\"model.Pincode\" #Pincode=\"ngModel\">\n           </div>\n        </div>\n        <div class=\"col-4\">\n           <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Proprietor Date of Birth</label>\n              <input class=\"form-control form-control-sm\" type=\"date\" placeholder=\"\" name=\"Pdob\" [(ngModel)]=\"model.Pdob\" #Pdob=\"ngModel\">\n           </div>\n        </div>\n        <div class=\"col-4\">\n              <div class=\"form-group\">\n                 <label for=\"exampleFormControlInput1\">Proprietor Mobile Number </label>\n                 <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"Pmob\" [(ngModel)]=\"model.Pmob\" #Pmob=\"ngModel\">\n              </div>\n           </div>\n           <div class=\"col-4\">\n                  <div class=\"form-group\">\n                     <label for=\"exampleFormControlInput1\">Proprietor Email ID</label>\n                     <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"Pemail\" [(ngModel)]=\"model.Pemail\" #Pemail=\"ngModel\">\n                  </div>\n               </div>\n     </div>\n    </div>\n\n       <div class=“clearfix”></div>\n    </div>\n<hr/>\n\n\n<h3 class=\"header mt-5\">Invoice Address</h3>\n\n<div class=\"row \">\n      <div class=\"col-7\">\n<div class=\"row\">\n      <div class=\"col-8\">\n         <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Address Line 1*\n                \n                    </label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n         </div>\n      </div>\n\n   </div>\n   <div class=\"row\">\n          <div class=\"col-8\">\n             <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">Address Line 2*\n                      \n                      \n                        \n                        </label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n             </div>\n          </div>\n\n       </div>\n\n       <div class=\"row\">\n              <div class=\"col-4\">\n                      <div class=\"form-group\">\n                         <label for=\"exampleFormControlInput1\">State*</label>\n                         <div class=\"select-box\">\n                            <label>\n                               <select class=\"form-control form-control-sm\">\n                                  <option value=\"aa\" selected=\"selected\">Select State</option>\n                                  <option value=\"aaa\">State 1 </option>\n                               </select>\n                            </label>\n                         </div>\n                      </div>\n                      </div>\n                      <div class=\"col-4\">\n                              <div class=\"form-group\">\n                                 <label for=\"exampleFormControlInput1\">City*</label>\n                                 <div class=\"select-box\">\n                                    <label>\n                                       <select class=\"form-control form-control-sm\">\n                                          <option value=\"aa\" selected=\"selected\">Select City</option>\n                                          <option value=\"aaa\">City 1 </option>\n                                       </select>\n                                    </label>\n                                 </div>\n                              </div>\n                              </div>\n            <div class=\"col-4\">\n               <div class=\"form-group\">\n                  <label for=\"exampleFormControlInput1\">PIN Code</label>\n                  <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n               </div>\n            </div>\n          </div>\n      </div>\n    \n \n\n         <div class=“clearfix”></div>\n      </div>\n<hr/>\n<h3 class=\"header mt-5\">Bank Account Information\n\n</h3>\n\n<div class=\"row \">\n<div class=\"col-7\">\n<div class=\"row\">\n<div class=\"col-4\">\n<div class=\"form-group\">\n<label for=\"exampleFormControlInput1\">Account Holder Name*\n      \n       \n       </label>\n<input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n</div>\n</div>\n<div class=\"col-4\">\n<div class=\"form-group\">\n <label for=\"exampleFormControlInput1\">Account Number*\n      \n      \n       \n       \n         \n         </label>\n <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n</div>\n</div>\n<div class=\"col-4\">\n  <div class=\"form-group\">\n     <label for=\"exampleFormControlInput1\">Re-enter Account Number*\n          \n          \n           \n           \n             \n             </label>\n     <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n  </div>\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-4\">\n<div class=\"form-group\">\n   <label for=\"exampleFormControlInput1\">IFSC Code*\n          \n          \n         \n         \n           \n           </label>\n   <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n</div>\n</div>\n<div class=\"col-4\">\n  <div class=\"form-group\">\n     <label for=\"exampleFormControlInput1\">Account Type*\n          \n          </label>\n     <div class=\"select-box\">\n        <label>\n           <select class=\"form-control form-control-sm\">\n              <option value=\"aa\" selected=\"selected\">Select Account Type\n                      \n                      </option>\n              <option value=\"aaa\">Account Type 1 </option>\n           </select>\n        </label>\n     </div>\n  </div>\n  </div>\n</div>\n\n\n      <div class=\"row\">\n              <div class=\"col-8\">\n                      <div class=\"form-group\">\n                         <label for=\"exampleFormControlInput1\">Upload Cancelled Cheque*</label>\n                         <label class=\"custom-file\">\n                              <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n                              <span class=\"custom-file-control\"></span>\n                          </label>\n                      </div>\n                   </div>\n      </div>\n      \n\n      <div class=“clearfix”></div></div></div>\n<hr/>\n<h3 class=\"header\">Terms of Trade</h3>\n<div class=\"row \">\n  <div class=\"col-7\">\n  <div class=\"row\">\n  <div class=\"col-4\">\n    <div class=\"form-group\">\n       <label for=\"exampleFormControlInput1\">No. of Blank Cheques Received\n              </label>\n       <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n    </div>\n  </div>\n  <div class=\"col-4\">\n      <div class=\"form-group\">\n         <label for=\"exampleFormControlInput1\">No. of Blank Cheques Received\n               \n                 </label>\n         <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n      </div>\n   </div>\n   <div class=\"col-4\">\n          <div class=\"form-group\">\n             <label for=\"exampleFormControlInput1\">EMD Cheque Date\n                  \n                     </label>\n             <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n          </div>\n       </div>\n  </div>\n  <div class=\"row\">\n     <div class=\"col-4\">\n        <div class=\"form-group\">\n           <label for=\"exampleFormControlInput1\">Mode of Payment Details\n                 </label>\n           <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n        </div>\n     </div>\n     <div class=\"col-8\">\n          <div class=\"form-group\">\n             <label for=\"exampleFormControlInput1\">Name of Common Partner/Associate\n                   </label>\n             <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n          </div>\n       </div>\n\n  </div>\n  \n  \n              <div class=\"row\">\n                      <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                      <label class=\"checkbox checkbox-primary\">\n                                      <input type=\"checkbox\">\n                                      <span class=\"check-mark\"></span>  Authorize mSupply to access CIBIL records\n                                      \n                                      \n                                      </label>\n                                   </div>\n                           </div>\n              </div>\n  \n              <div class=“clearfix”></div></div></div>\n              <hr/>\n              <h3 class=\"header\">Other Information </h3>\n              <div class=\"row\">\n                  <div class=\"col-7\">\n\n                \n              <div class=\"row\">\n                      <div class=\"col-4\">\n                         <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Billing Software\n                                  \n                                  \n                                  </label>\n                            <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n                         </div>\n                      </div>\n                      <div class=\"col-4\">\n                           <div class=\"form-group\">\n                              <label for=\"exampleFormControlInput1\">Annual Turnover\n                                    </label>\n                              <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n                           </div>\n                        </div>\n               \n                   </div>\n                  </div>\n              </div>\n              <hr/>\n              <h3 class=\"header\">Documents & Attachments</h3>\n              <div class=\"row\">\n                  <div class=\"col-7\">\n\n                \n              <div class=\"row\">\n                  <div class=\"col-1 align-self-center\">1.</div>\n                      <div class=\"col-4\">\n                         <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Document Name\n                                 \n                                  </label>\n                            <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\">\n                         </div>\n                      </div>\n                      <div class=\"col-4\">\n                              <div class=\"form-group\">\n                                 <label for=\"exampleFormControlInput1\">Upload Document</label>\n                                 <label class=\"custom-file\">\n                                      <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n                                      <span class=\"custom-file-control\"></span>\n                                  </label>\n                              </div>\n                           </div>\n                      <div class=\"col-3  align-self-center\">\n                              <div class=\"form-group mb-0\">\n                                      <a href=\"#\" class=\" btn-minus\" role=\"button\" aria-pressed=\"true\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></a>\n                                      <a href=\"#\" class=\" btn-plus ml-3\" role=\"button\" aria-pressed=\"true\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></a>\n                                  </div>\n                        </div>\n                   </div>\n                  </div>\n              </div>\n\n <div class=\"mt-5 text-center\">\n\n    <button type=\"Submit\" class=\"btn btn-primary\">NEXT</button>\n    \n    </div>                     \n                          </div>\n                      </div>                        \n                  </div>\n              </div>\n          </div>    \n\n      <!--\n      <div class=\" footer  clearfix\">\n          <div class=\"content\">\n              Copyright © 2018 - mSupply.in\n\n          </div>\n\n      </div>-->    \n  </div>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/my-new-component/my-new-component.component.ts ***!
  \****************************************************************/
/*! exports provided: MyNewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNewComponentComponent", function() { return MyNewComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-demo.service */ "./src/app/my-demo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNewComponentComponent = /** @class */ (function () {
    function MyNewComponentComponent(ser, route) {
        this.ser = ser;
        this.route = route;
        this.model = {};
        this.Legal = ["Proprietorship", "Partnership", "Corporate"];
        this.ArrCity = ["Madurai", "Salem", "Trichy"];
        this.ArrState = ["Tamilnadu", "Karnataka"];
        this.year = [1900];
        this.start = 1990;
        this.btype = ["Corporate", "Manufacturing", "Hybrid"];
        while (this.start != 2018) {
            this.start = this.start + 1;
            this.year.push(this.start);
        }
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        //alert(id); 
    };
    MyNewComponentComponent.prototype.OnSubmit = function () {
        //alert('it works');
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    };
    MyNewComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-new-component',
            template: __webpack_require__(/*! ./my-new-component.component.html */ "./src/app/my-new-component/my-new-component.component.html"),
            styles: [__webpack_require__(/*! ./my-new-component.component.css */ "./src/app/my-new-component/my-new-component.component.css")]
        }),
        __metadata("design:paramtypes", [_my_demo_service__WEBPACK_IMPORTED_MODULE_1__["MyDemoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MyNewComponentComponent);
    return MyNewComponentComponent;
}());



/***/ }),

/***/ "./src/app/sample/sample.component.css":
/*!*********************************************!*\
  !*** ./src/app/sample/sample.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sample/sample.component.html":
/*!**********************************************!*\
  !*** ./src/app/sample/sample.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n<input type=\"text\" name=\"firstName\">\n</form>"

/***/ }),

/***/ "./src/app/sample/sample.component.ts":
/*!********************************************!*\
  !*** ./src/app/sample/sample.component.ts ***!
  \********************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", String)
    ], SampleComponent.prototype, "name", void 0);
    SampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.html */ "./src/app/sample/sample.component.html"),
            styles: [__webpack_require__(/*! ./sample.component.css */ "./src/app/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.html":
/*!************************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h4 style=\"text-align: center\">{{title}}</h4>\n<b style=\"margin-left: 600px\"><span [style.color]='color'>welcome to angular js</span></b>\n<table border=\"1\" style=\"margin-left: 500px;margin-top: 5px\">\n  <tr> \n  <th>\n    {{tb.username}}\n  </th>\n  <td><input type=\"text\" id=\"name\" name=\"name\"></td>\n  <tr>\n  <th>\n    {{tb.password}}\n  </th>\n  <td>\n    <input type=\"password\"  id=\"pwd\">\n  </td>\n</tr>\n  <tr>\n  <th>\n    {{tb.cpassword}}\n  </th>\n  <td>\n    <input type=\"password\" id=\"cpwd\">\n  </td>\n</tr>\n  <tr><th>\n    {{tb.mobile}}\n  </th>\n  <td>\n    <input type=\"number\" id=\"mobile\" [placeholder]=\"mobno\">\n  </td>\n</tr> \n<tr>\n  <th>\n    {{tb.email}}\n    </th>\n  <td>\n    <input type=\"email\" id=\"email\">\n  </td>\n  </tr>\n  <tr>\n    <th>\n    {{tb.address}}\n  </th>\n<td>\n  <input type=\"text\" id=\"address\">\n</td></tr>\n  <tr>\n  </tr>\n<tr>\n  <td>\n    <input type='text' [(ngModel)]='name'/>\n  </td>\n  <td>\n    <div>{{name}}</div>\n  </td>\n</tr>\n<tr>\n  <td>\n    <button type=\"button\" value=\"Submit\" (click)=\"Message()\">Submit</button>\n  </td>\n  <td>\n    {{subtext}}\n  </td>\n</tr>\n</table>\n</div>\n\n<div [hidden]=\"true\">\n  I am Hidden but will not reveal\n</div>\n\n<div *ngIf=\"isLoggedIn; else LoggedOut\">\n  welcome back ! friend ;\n</div>\n\n<ng-template #LoggedOut>\n  please friend,logged in\n</ng-template>\n\n<div *ngIf=\"true\">\n  I am not loaded At all\n</div>\n\n<div *ngFor =\"let item of delAddress\">\n      <p>{{item.Name}}</p>\n</div>\n\n<div *ngFor=\"let scount of college let i=index\">\n    <p>{{i+1}}-{{scount.state}}</p>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: TestcomponentComponent, NgSwitchExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcomponentComponent", function() { return TestcomponentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSwitchExampleComponent", function() { return NgSwitchExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestcomponentComponent = /** @class */ (function () {
    function TestcomponentComponent() {
        this.color = 'red';
        this.mobno = 'Mobile number is must';
        this.name = 'Sundar ';
        this.isLoggedIn = 'true';
        this.isNewUser = 'false';
        this.delAddress = [
            {
                Name: 'Sundar',
                Ph: '1234567',
                Street: 'XYZ'
            },
            {
                Name: 'XYZ',
                Ph: '1234567',
                Street: 'XYZ'
            },
            {
                Name: 'ABC',
                Ph: '1234567',
                Street: 'XYZ'
            }
        ];
        this.college = [
            {
                state: 'Tn',
            },
            {
                state: 'KR',
            },
            {
                state: 'KA',
            }
        ];
        this.title = "User Registration";
        this.a = 5;
        this.b = 5;
        this.tb = {
            username: 'Enter username',
            password: 'Enter password',
            cpassword: 'Enter confirm password',
            mobile: 'Enter mobile number',
            email: 'Enter Email address',
            address: 'Enter address'
        };
        this.tb.toString = function () {
            return "You are in " + this.address + " and your mobile number is " + this.mobile;
        };
    }
    TestcomponentComponent.prototype.ngOnInit = function () {
    };
    TestcomponentComponent.prototype.onFormSubmit = function (userForm) {
        console.log(userForm.controls['name'].value);
    };
    TestcomponentComponent.prototype.Message = function () {
        this.subtext = "Submitted Successfully !";
    };
    TestcomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testcomponent',
            template: __webpack_require__(/*! ./testcomponent.component.html */ "./src/app/testcomponent/testcomponent.component.html"),
            styles: [__webpack_require__(/*! ./testcomponent.component.css */ "./src/app/testcomponent/testcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestcomponentComponent);
    return TestcomponentComponent;
}());

var NgSwitchExampleComponent = /** @class */ (function () {
    function NgSwitchExampleComponent() {
        this.people = [
            {
                "name": "Douglas  Pace",
                "age": 35,
                "country": 'MARS'
            },
            {
                "name": "Mcleod  Mueller",
                "age": 32,
                "country": 'USA'
            },
            {
                "name": "Day  Meyers",
                "age": 21,
                "country": 'HK'
            },
            {
                "name": "Aguirre  Ellis",
                "age": 34,
                "country": 'UK'
            },
            {
                "name": "Cook  Tyson",
                "age": 32,
                "country": 'USA'
            }
        ];
    }
    NgSwitchExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngswitch-example',
            template: "<h4>NgSwitch</h4>\n<ul *ngFor=\"let person of people\"\n    [ngSwitch]=\"person.country\">\n\n  <li *ngSwitchCase=\"'UK'\"\n      class=\"text-success\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n  <li *ngSwitchCase=\"'USA'\"\n      class=\"text-primary\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n  <li *ngSwitchCase=\"'HK'\"\n      class=\"text-danger\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n  <li *ngSwitchDefault\n      class=\"text-warning\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n</ul>"
        })
    ], NgSwitchExampleComponent);
    return NgSwitchExampleComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map