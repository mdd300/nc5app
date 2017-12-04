webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/themes/prototype/cadastro/step1/step1.module": [
		154
	],
	"../pages/themes/prototype/login/login.module": [
		156
	],
	"../pages/themes/prototype/slides/slides.module": [
		157
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1PageModule", function() { return Step1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step1__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step1PageModule = (function () {
    function Step1PageModule() {
    }
    Step1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */]),
            ]
        })
    ], Step1PageModule);
    return Step1PageModule;
}());

//# sourceMappingURL=step1.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Step1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Step1Page = (function () {
    function Step1Page(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.actived = 0;
        this.backToLogin = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
        this.defineActived = (function (data) {
            _this.actived = data;
        });
    }
    Step1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step1',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step1\step1.html"*/'<ion-header>\n    <div class="header-back" (click)="backToLogin()" >\n\n        <svg class="backpage-ico">\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- header-back -->\n</ion-header>\n\n<ion-content>\n\n    <div class="step-indicator" >\n\n        <span class="dotdot actived rounded"></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot "></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot"></span>\n\n    </div> <!-- step-indicator -->\n\n    <h3 class="title-step">Escolha</h3> <!-- title-step -->\n\n    <div class="choose-content" >\n        <div class="choose-column" >\n\n            <div class="type-user" >\n\n                <div class="icon-user-type" [ngClass]="{ \'actived-type\': actived == 1 }" (click)="defineActived(1)" >\n                    <svg class="svg-ico-usertype">\n                        <use [attr.xlink:href]="constants.src_svg + \'confeccao.svg#Layer_1\'"></use>\n                    </svg> <!-- svg-ico-usertype -->\n                </div> <!-- icon-user-type -->\n\n                <p class="type-title"> Confecção </p> <!-- type-title -->\n                <p class="type-description">\n                    Cadastre a sua confecção para realizar novas ligações e econtrar novos revendedores para a sua marca\n                </p> <!-- type-description -->\n\n            </div> <!-- type-user -->\n\n        </div> <!-- choose-column -->\n        <div class="choose-column" >\n\n            <div class="type-user" >\n\n                <div class="icon-user-type" [ngClass]="{ \'actived-type\': actived == 2 }" (click)="defineActived(2)">\n                    <svg class="svg-ico-usertype">\n                       <use [attr.xlink:href]="constants.src_svg + \'vendedor.svg#Layer_1\'"></use>\n                    </svg> <!-- svg-ico-usertype -->\n                </div> <!-- icon-user-type -->\n\n                <p class="type-title"> Lojista </p> <!-- type-title -->\n                <p class="type-description">\n                    Cadastre o seu perfil como lojista, para encontrar novas confecções para revendas. E novas conexões de clientes.\n                </p> <!-- type-description -->\n\n            </div> <!-- type-user -->\n\n        </div> <!-- choose-column -->\n    </div> <!-- choose-content -->\n    \n</ion-content>\n\n<ion-footer>\n    <div class="footer-steps" >\n\n        <div class="next-stap-action" >\n            <span class="next-step-label">\n                Próximo\n            </span> <!-- next-stap-label -->\n            <div class="nextstep-icon" >\n                <span class="caret-body"></span>\n                <span class="caret-direction"></span>\n            </div> <!-- nextstep-icon -->\n        </div> <!-- next-stap-action -->\n\n    </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step1\step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Step1Page);
    return Step1Page;
}());

//# sourceMappingURL=step1.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidesPageModule = (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesPage */]),
            ],
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_themes_prototype_slides_slides__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_slides_slides_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_login_login_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_cadastro_step1_step1_module__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_slides_slides_module__["SlidesPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_cadastro_step1_step1_module__["Step1PageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */], {}, {
                    links: [
                        { loadChildren: '../pages/themes/prototype/cadastro/step1/step1.module#Step1PageModule', name: 'Step1Page', segment: 'step1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */],
                __WEBPACK_IMPORTED_MODULE_6__pages_themes_prototype_slides_slides__["a" /* SlidesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qrgo_prototype; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_slides_slides__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Qrgo_prototype = (function () {
    function Qrgo_prototype(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_slides_slides__["a" /* SlidesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    Qrgo_prototype = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Qrgo_prototype);
    return Qrgo_prototype;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidesPage = (function () {
    function SlidesPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.goToLoginPage = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    }
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\slides\slides.html"*/'<ion-slides pager>\n\n\n\n  <ion-slide class="slider-content" >\n\n    \n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/01.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">A confecção na palma da sua mão</h1>\n\n    <p class="slide-description">\n\n      Uma rede que oferece o <strong>controle</strong> e <strong>divulgação</strong> dos seus produtos em tempo real!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="goToLoginPage()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 1 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/02.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Procura & Demanda</h1>\n\n    <p class="slide-description">\n\n      Milhares de lojistas e confecções procurando fazer novos contatos!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="goToLoginPage()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 2 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/03.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Sempre Informado</h1>\n\n    <p class="slide-description">\n\n      Acompanhe em primeira mão em uma unica plataforma as <strong>novidades, publicações</strong> e <strong>promoções</strong> dos seus contatos!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="goToLoginPage()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 3 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/04.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Seja Independente</h1>\n\n    <p class="slide-description">\n\n      Sinta a liberdade de poder <strong>comprar</strong> e <strong>reservar peças</strong> sem estar a mercê do tempo de um vendedor.\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="goToLoginPage()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 4 -->\n\n\n\n</ion-slides>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\slides\slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    'base_url': './',
    'theme': 'prototype',
    'src_img': './assets/themes/prototype/img/',
    'src_svg': './assets/themes/prototype/img/svg/',
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slides_slides__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_step1_step1__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.goBackSlides = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__slides_slides__["a" /* SlidesPage */]);
        });
        this.goToCadastro = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_step1_step1__["a" /* Step1Page */]);
        });
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\login\login.html"*/'<div class="login-page">\n\n\n\n    <div class="backpage-login" (click)="goBackSlides()" >\n\n        <svg class="backpage-ico">\n\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- backpage-login -->\n\n\n\n    <div class="content-login-form">\n\n\n\n        <h3 class="welcome-title">Bem Vindo</h3>\n\n\n\n        <div class="image-logo-qrgo">\n\n            <img class="svg-logo" [src]="constants.src_svg + \'qrgo-logo.svg\'"/>\n\n        </div> <!-- image-logo-qrgo -->\n\n\n\n        <div class="content-form-login">\n\n            <div class="form-cont pdg-b20">\n\n                <input type="text" class="form-ctrl" placeholder="Username / E-mail">\n\n            </div> <!-- form-cont -->\n\n            <div class="form-cont">\n\n                <input type="password" class="form-ctrl" placeholder="Senha">\n\n            </div> <!-- form-cont -->\n\n\n\n            <p class="forgot-pass"> Esqueci minha senha </p>\n\n\n\n            <div class="form-cont">\n\n                <button class="login-btn"> Entrar</button>\n\n            </div> <!-- form-cont -->\n\n\n\n            <span class="line-divider"></span> <!-- line-divider -->\n\n\n\n            <div class="content-singup">\n\n                <p class="ask-singup" > Não possui cadastro? </p> <!-- ask-singup -->\n\n                <p class="button-singup" (click)="goToCadastro()" > Cadastre-se </p> <!-- ask-singup -->\n\n            </div> <!-- content-singup -->\n\n\n\n        </div> <!-- content-form-login -->\n\n\n\n\n\n        <div class="explore-contents" >\n\n            <span class="explore-label"> Explorar </span>\n\n            <span class="explore-stick">  </span>\n\n        </div> <!-- explore-contents -->\n\n\n\n    </div> <!-- content-login-form -->\n\n\n\n\n\n</div> <!-- login-page -->'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map