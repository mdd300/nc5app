webpackJsonp([0],{

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    'base_url': './',
    'theme': 'prototype',
    'api_path': 'http://localhost/fashon/qrgo/',
    'src_img': './assets/themes/prototype/img/',
    'src_svg': './assets/themes/prototype/img/svg/',
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/themes/prototype/cadastro/confirm-cad/confirm-cad.module": [
		163
	],
	"../pages/themes/prototype/cadastro/step1/step1.module": [
		165
	],
	"../pages/themes/prototype/cadastro/step2/step2.module": [
<<<<<<< HEAD
		175
	],
	"../pages/themes/prototype/cadastro/step3/step3.module": [
		174
=======
		176
	],
	"../pages/themes/prototype/cadastro/step3/step3.module": [
		177
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
	],
	"../pages/themes/prototype/explore/explore.module": [
		178
	],
	"../pages/themes/prototype/feed/feed.module": [
		180
	],
	"../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module": [
		181
	],
	"../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module": [
		182
	],
	"../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module": [
		183
	],
	"../pages/themes/prototype/login/login.module": [
		184
	],
	"../pages/themes/prototype/modais/gostos/gostos.module": [
		185
	],
	"../pages/themes/prototype/modais/localizacao/localizacao.module": [
<<<<<<< HEAD
		185
	],
	"../pages/themes/prototype/modais/post/post.module": [
		184
=======
		186
	],
	"../pages/themes/prototype/modais/post/post.module": [
		187
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
	],
	"../pages/themes/prototype/slides/slides.module": [
		188
	],
	"../pages/themes/prototype/system-tabs/system-tabs.module": [
		189
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmCadPageModule", function() { return ConfirmCadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_cad__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmCadPageModule = (function () {
    function ConfirmCadPageModule() {
    }
    ConfirmCadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_cad__["a" /* ConfirmCadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_cad__["a" /* ConfirmCadPage */]),
            ],
        })
    ], ConfirmCadPageModule);
    return ConfirmCadPageModule;
}());

//# sourceMappingURL=confirm-cad.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmCadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
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
 * Generated class for the ConfirmCadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmCadPage = (function () {
    function ConfirmCadPage(navCtrl, navParams, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.Url_http = 'http://localhost/fashon/qrgo/cadastro/autenticacao';
        this.seisdigitos = false;
        /**
         * Função utilizada para pular a confirmação do cadastro
         */
        this.skipCad = (function () {
            /* Pula a confirmação do cadastro */
            var alert = _this.alertCtrl.create({
                title: 'Parabéns',
                subTitle: 'Parabéns, você realizou o cadastro em nosso sistema. Você será logado automáticamente.',
                buttons: ['Ok']
            });
            alert.present();
        });
        //função verifica o codiga com a existencia de 6 digitos 
        this.autenticaCod = (function (code) {
            //se o usuario digitar 6 digitos
            if (code.length == 6) {
                //desabilita o input 
                //this.seisdigitos=true;
                //realiza o ajax enviando como parametro o código de entrada "data"
                _this.http.post(_this.Url_http, __WEBPACK_IMPORTED_MODULE_3_jquery__["param"]({ codigo: code })).subscribe(function (data) {
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    //console.log(response._body);
                    //retorna o código
                    if (objeto_retorno === true) {
                        //modal de confirmação para o usuario
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Parabéns',
                            subTitle: 'Parabéns, você realizou o cadastro em nosso sistema. Você será logado automáticamente.',
                            buttons: ['Ok']
                        });
                        alert_1.present();
                    }
                    else {
                        //modal de código invalido
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Autenticação',
                            subTitle: 'Código incorreto',
                            buttons: ['Ok']
                        });
                        alert_2.present();
                    }
                }, function (error) {
                    //modal de erro na autenticação
                    var alert = _this.alertCtrl.create({
                        title: 'Autenticação',
                        subTitle: 'Erro na autenticação',
                        buttons: ['Ok']
                    });
                    alert.present();
                    console.log(error);
                });
            }
        });
    }
    ConfirmCadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-cad',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\confirm-cad\confirm-cad.html"*/'<ion-content>\n\n\n\n  <div class="content-center" >\n\n\n\n    <ion-grid class="grid-confirm-cad">\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n          <h3 class="page-title">Confirme sua conta</h3>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n          <p class="page-description">Confira seu e-mail ou mensagem sms para confirmar sua conta para seguir usar o aplicativo da melhor forma possível!</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n          <div class="cont-confirmcode" >\n\n            <div class="cad-form-content">\n\n              <label class="cad-form-label">\n\n                <input type="text" class="cad-form-ctrl text-center" placeholder="Codigo" maxlength="6" [(ngModel)]="codeautentic" (keyup)="autenticaCod ( codeautentic )" [disabled]="seisdigitos">\n\n              </label><!-- cad-form-label -->\n\n            </div> <!-- cad-form-content -->\n\n          </div> <!-- cont-confirmcode -->\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <span class="resend-code"> Re-enviar código </span>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button class="pink-button align-center" > Confirmar </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid><!-- grid-confirm-cad -->\n\n\n\n  </div> <!-- content-center -->\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <div class="footer-steps">\n\n\n\n    <div class="next-step-action allowed" (click)="skipCad()">\n\n            <span class="next-step-label">\n\n                Pular\n\n            </span> <!-- next-stap-label -->\n\n      <div class="nextstep-icon">\n\n        <span class="caret-body"></span>\n\n        <span class="caret-direction"></span>\n\n      </div> <!-- nextstep-icon -->\n\n    </div> <!-- next-stap-action -->\n\n\n\n  </div> <!-- footer-steps -->\n\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\confirm-cad\confirm-cad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfirmCadPage);
    return ConfirmCadPage;
}());

//# sourceMappingURL=confirm-cad.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1PageModule", function() { return Step1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step1__ = __webpack_require__(83);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */]),
            ]
        })
    ], Step1PageModule);
    return Step1PageModule;
}());

//# sourceMappingURL=step1.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizacao_localizacao__ = __webpack_require__(167);
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
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = (function () {
    function PostPage(navCtrl, navParams, modalCtrl, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.keyboard = keyboard;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.text = false;
        this.onBlur = (function () {
            _this.text = false;
        });
        this.onFocus = (function () {
            _this.text = true;
        });
        this.eventHandler = (function (num, target) {
            if (num == 13) {
                _this.text = false;
                var activeElement = document.activeElement;
                activeElement && activeElement.blur && activeElement.blur();
                _this.keyboard.close();
            }
        });
        // Abrir modal para realizar psot
        this.LocationPost = (function () {
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__localizacao_localizacao__["a" /* LocalizacaoPage */]);
            profileModal.present();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('textInput'),
        __metadata("design:type", Object)
    ], PostPage.prototype, "textInput", void 0);
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\modais\post\post.html"*/'<ion-content>\n\n\n\n    <div class="header-background" [hidden]="text"></div> <!-- header-background -->\n\n\n\n    <ion-header [hidden]="text">\n\n        <ion-grid>\n\n            <ion-row style="display: inline-flex;   ">\n\n                <ion-col col-1 class="col-icon">\n\n                    <div class="icon-back-header">\n\n\n\n                        <svg class="ico-back-header">\n\n                            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n                        </svg> <!-- ico-back-header -->\n\n                    </div> <!-- icon-back-header -->\n\n\n\n\n\n                </ion-col>\n\n                <ion-col col-auto style="width: 46%;">\n\n                    <div class="text-btn-publicar">PUBLIQUE ALGO...</div>\n\n                </ion-col>\n\n                <ion-col col-auto style="width: 45%">\n\n                    <div class="head-icon-right">\n\n                    <span text-align="center" class="btn-publicar">\n\n                        <div class="icon-publicar-send">\n\n                    <svg class="svg-send-header">\n\n                        <use [attr.xlink:href]="constants.src_svg + \'send-button.svg#Layer_1\'"></use>\n\n                    </svg> <!-- ico-back-header -->\n\n                        </div>\n\n                    <div text-align="center" class="text-btn-publicar">\n\n                        Publicar\n\n                    </div>\n\n                    <div text-align="center" class="btn-wrapper">\n\n\n\n                    </div>\n\n                    </span>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-header>\n\n\n\n    <div class="content-post">\n\n\n\n        <div class="empty-content-header" [hidden]="text">\n\n\n\n        </div>\n\n        <ion-row class="content-info-post row-user" [hidden]="text">\n\n            <ion-col col-3 class="col-user">\n\n                <div class="content-icon">\n\n                    <div class="content-icon-user">\n\n                        <div class="img-user-post">\n\n\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col class="col-user">\n\n                <div class="content-data-user">\n\n\n\n                    <div class="empty-content">\n\n\n\n                    </div>\n\n\n\n                    <div class="text-nome-fantasia">\n\n                        <b>UNIQUE CHIC</b>\n\n                    </div>\n\n\n\n\n\n                    <div class="content-btn-loc">\n\n\n\n                        <button ion-button class="btn-estilo" (click)="LocationPost()" outline>\n\n                            <div text-align="center" class="btn-confir wrapper">\n\n                                <svg class="svg-ico-usertype">\n\n                                    <use [attr.xlink:href]="constants.src_svg + \'maps-and-flags.svg#Layer_1\'"></use>\n\n                                </svg> <!-- svg-ico-usertype -->\n\n                            </div>\n\n                            <div text-align="center" class="text-btn-estilo">\n\n                                LOCALIZAR\n\n                            </div>\n\n                        </button>\n\n\n\n                        <!--<div text-align="center" class="btn-estilo">-->\n\n                        <!---->\n\n                        <!--</div>-->\n\n                    </div>\n\n                </div>\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <div class="content-data-post">\n\n            <ion-textarea class="input-text-post" #textInput placeholder="Escreva algo..." (ionBlur)="onBlur()"\n\n                          (ionFocus)="onFocus()"\n\n                          (keypress)="eventHandler($event.keyCode, $event.target)"></ion-textarea>\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="foo" [hidden]="text">\n\n    <ion-row>\n\n\n\n        <ion-col class="col-footer">\n\n            <div class="col-footer-post">\n\n                <div class="icon-footer">\n\n                    <svg class="svg-footer">\n\n                        <use [attr.xlink:href]="constants.src_svg + \'shirt-hanger.svg#Layer_1\'"></use>\n\n                    </svg> <!-- ico-back-header -->\n\n                </div>\n\n                <div class="text-footer-post">Produtos</div>\n\n            </div>\n\n        </ion-col>\n\n\n\n        <ion-col class="col-footer">\n\n            <div class="col-footer-post">\n\n                <div class="icon-footer">\n\n                    <svg class="svg-footer">\n\n                        <use [attr.xlink:href]="constants.src_svg + \'picture.svg#Layer_1\'"></use>\n\n                    </svg> <!-- ico-back-header -->\n\n                </div>\n\n                <div class="text-footer-post">Imagens</div>\n\n            </div>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\modais\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
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
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalizacaoPage = (function () {
    function LocalizacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
    }
    LocalizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-localizacao',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\modais\localizacao\localizacao.html"*/'<ion-content>\n\n\n\n  <div class="header-background" ></div> <!-- header-background -->\n\n\n\n  <ion-header >\n\n    <ion-grid>\n\n      <ion-row style="display: inline-flex;   ">\n\n        <ion-col col-1 class="col-icon">\n\n          <div class="icon-back-header">\n\n\n\n            <svg class="ico-back-header">\n\n              <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-back-header -->\n\n          </div> <!-- icon-back-header -->\n\n\n\n\n\n        </ion-col>\n\n        <ion-col col-auto style="width: 46%;">\n\n          <div class="text-btn-publicar">LOCALIZAÇÃO</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-header>\n\n\n\n  <div class="content-post">\n\n\n\n    <div class="empty-content-header" >\n\n\n\n    </div>\n\n    <div class="content-info-post ">\n\n        <div class="row-user" >\n\n            <ion-input  placeholder="Digite a Localização"></ion-input>\n\n        </div>\n\n      <div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\modais\localizacao\localizacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LocalizacaoPage);
    return LocalizacaoPage;
}());

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GostosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_categoria_categoria__ = __webpack_require__(89);
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
 * Generated class for the GostosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GostosPage = (function () {
    function GostosPage(navCtrl, navParams, viewCtrl, categoriaProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.categoriaProvider = categoriaProvider;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.actived = [];
        this.actived1 = [];
        this.actived2 = [];
        this.actived3 = [];
        this.actived4 = [];
        this.intActived = 0;
        this.show8 = false;
        this.a = 0;
        this.estilos = [];
        this.subEstilo = [];
        this.rowNum = 0; //counter to iterate over the rows in the grid
        this.grid = [];
        this.colNum = [];
        this.closeMeModal = (function () {
            if (_this.actived.length > 0) {
                _this.categoriaProvider.setCategorias(_this.actived).subscribe(function (data) {
                    console.log(data);
                }, function (error) {
                    console.log(error);
                }).add(function () {
                    _this.viewCtrl.dismiss();
                });
            }
        });
        this.defineActived = (function (data) {
            /* Define o ID do perfil selecionado */
            if (_this.actived.indexOf(data) === -1) {
                _this.actived.push(data);
                _this.intActived += 1;
                if (_this.intActived == 5) {
                    _this.intActived = 1;
                }
                if (_this.intActived == 1) {
                    _this.actived1.push(data);
                }
                else if (_this.intActived == 2) {
                    _this.actived2.push(data);
                }
                else if (_this.intActived == 3) {
                    _this.actived3.push(data);
                }
                else if (_this.intActived == 4) {
                    _this.actived4.push(data);
                }
            }
            else {
                _this.actived.splice(_this.actived.indexOf(data), 1);
                if (_this.actived1.indexOf(data) > -1) {
                    _this.actived1.splice(_this.actived1.indexOf(data), 1);
                }
                else if (_this.actived2.indexOf(data) > -1) {
                    _this.actived2.splice(_this.actived2.indexOf(data), 1);
                }
                else if (_this.actived3.indexOf(data) > -1) {
                    _this.actived3.splice(_this.actived3.indexOf(data), 1);
                }
                else if (_this.actived4.indexOf(data) > -1) {
                    _this.actived4.splice(_this.actived4.indexOf(data), 1);
                }
            }
        });
    }
    GostosPage.prototype.teste = function () {
        var i = 0;
        while (i < this.estilos.length) {
            this.grid[this.a] = [];
            for (var j = 0; j < 3; j++) {
                if (!this.estilos[i]) {
                    j = 3;
                }
                else {
                    if (this.estilos[i].nome.length > 15) {
                        if (j == 2) {
                            this.a++;
                            j++;
                        }
                        else if (j == 0) {
                            this.grid[this.a][j] = [];
                            this.grid[this.a][j].push(this.estilos[i]);
                            j++;
                            i++;
                        }
                        else {
                            this.grid[this.a][j] = [];
                            this.grid[this.a][j].push(this.estilos[i]);
                            this.a++;
                            j++;
                            i++;
                        }
                    }
                    else {
                        this.grid[this.a][j] = [];
                        this.grid[this.a][j].push(this.estilos[i]);
                        this.rowNum++;
                        i++;
                        if (j == 2) {
                            this.a++;
                        }
                    }
                }
            }
            // }
        }
        for (var b = 0; b <= this.a; b++) {
            this.colNum.push(b);
        }
    };
    ;
    /* Fim da função de definição do perfil selecionado */
    GostosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categoriaProvider.getCategorias().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.estilos = objeto_retorno.main;
            _this.subEstilo = [objeto_retorno.sub];
        }, function (error) {
            console.log(error);
        }).add(function () {
            _this.teste();
        });
    };
    GostosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gostos',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\modais\gostos\gostos.html"*/'<!--\n\n  Generated template for the GostosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div class="content-card-estilo">\n\n        <ion-card class="card-boy-estilo">\n\n            <div class="icon-user-type">\n\n\n\n                <svg class="ico-config">\n\n                    <use [attr.xlink:href]="constants.src_svg + \'boy.svg#Layer_1\'"></use>\n\n                </svg> <!-- ico-config -->\n\n\n\n            </div> <!-- icon-user-type -->\n\n            <div class="text-icon">Qual é seu estilo?</div>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-grid style="padding-top: 12px;">\n\n\n\n        <ion-row class="row-estilo " *ngFor="let num of colNum" center>\n\n            <div *ngFor="let num2 of colNum">\n\n                <div *ngIf="grid[num]">\n\n                    <div *ngFor="let data of grid[num][num2]">\n\n                        <ion-col col-auto style="  vertical-align: middle;\n\n  line-height: normal;">\n\n                            <span text-align="center" class="btn-estilo "\n\n                                  [ngClass]="{ \'actived-type\': actived.indexOf(data.id) > -1 && actived1.indexOf(data.id) > -1, \'actived-type2\': actived.indexOf(data.id) > -1  && actived2.indexOf(data.id) > -1,\'actived-type3\': actived.indexOf(data.id) > -1  && actived3.indexOf(data.id) > -1,\'actived-type4\': actived.indexOf(data.id) > -1  && actived4.indexOf(data.id) > -1}"\n\n                                  (click)="defineActived(data.id)">\n\n                                <div text-align="center" class="text-btn-estilo">\n\n                                    {{data.nome}}\n\n                                </div>\n\n                                <div text-align="center" class="btn-confir wrapper">\n\n                                    <svg [ngClass]="{\'contents-col-sub-hide\': actived.indexOf(data.id) < 0, \'contents-col-sub\': actived.indexOf(data.id) > -1}"\n\n                                         class="svg-ico-usertype contents-col-sub">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'confirmar.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- svg-ico-usertype -->\n\n                                </div>\n\n                            </span>\n\n                        </ion-col>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div *ngFor="let num2 of colNum">\n\n                <div *ngIf="grid[num]">\n\n                    <div *ngFor="let data of grid[num][num2]">\n\n                        <div [hidden]="actived.indexOf(data.id) < 0" *ngIf="subEstilo[0][data.id]">\n\n                            <ion-row class="row-estilo sliderIn" center>\n\n                                <div>\n\n                                    <ion-col col-auto style="  vertical-align: middle;\n\n  line-height: normal;" *ngFor="let subData of subEstilo[0][data.id]">\n\n                                        <span class="btn-estilo"\n\n                                              [ngClass]="{ \'actived-type\': actived.indexOf(subData.idEstilo) > -1 && actived1.indexOf(subData.idEstilo) > -1, \'actived-type2\': actived.indexOf(subData.idEstilo) > -1  && actived2.indexOf(subData.idEstilo) > -1,\'actived-type3\': actived.indexOf(subData.idEstilo) > -1  && actived3.indexOf(subData.idEstilo) > -1,\'actived-type4\': actived.indexOf(subData.idEstilo) > -1  && actived4.indexOf(subData.idEstilo) > -1}"\n\n                                              (click)="defineActived(subData.id)">\n\n                                            <div text-align="center" class="btn-confir wrapper">\n\n                                            <div class="text-btn-estilo">{{subData.nome}}</div>\n\n                                            </div>\n\n                                            <div text-align="center" class="btn-confir wrapper">\n\n                                    <svg [ngClass]="{\'contents-col-sub-hide\': actived.indexOf(subData.id) < 0, \'contents-col-sub\': actived.indexOf(subData.id) > -1}"\n\n                                         class="svg-ico-usertype contents-col-sub">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'confirmar.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- svg-ico-usertype -->\n\n                                </div>\n\n                                        </span>\n\n                                    </ion-col>\n\n                                </div>\n\n                            </ion-row>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <div class="footer-steps">\n\n\n\n        <div class="next-step-action" [ngClass]="{\'allowed\': actived.length > 0}" (click)="closeMeModal()">\n\n            <span class="next-step-label">\n\n                Próximo\n\n            </span> <!-- next-stap-label -->\n\n            <div class="nextstep-icon">\n\n                <span class="caret-body"></span>\n\n                <span class="caret-direction"></span>\n\n            </div> <!-- nextstep-icon -->\n\n        </div> <!-- next-stap-action -->\n\n\n\n    </div> <!-- footer-steps -->\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\modais\gostos\gostos.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_categoria_categoria__["a" /* CategoriaProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_categoria_categoria__["a" /* CategoriaProvider */]])
    ], GostosPage);
    return GostosPage;
}());

//# sourceMappingURL=gostos.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPass_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_2_forgot_pass_2__ = __webpack_require__(173);
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
 * Generated class for the ForgotPass_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPass_1Page = (function () {
    function ForgotPass_1Page(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        /**
         * Função utilizada para "voltar" uma pagina do aplicativo */
        this.backPage = (function () {
            /* Remove uma página do controller de navegação */
            _this.navCtrl.pop();
        }); /* Fim da função de backPage */
        /**
         * Verifica se o email é valido para prosseguir */
        this.validateEmail = (function (email) {
            var regex = new RegExp(/([a-zA-Z0-9\._\-]{2})+@+([a-zA-Z0-9]{2,20})+\.+[a-z]{2}/);
            _this.valid_email = regex.test(email);
        });
        /**
         * Função utilizada para prosseguir com o processo de recuperação de senha */
        this.sendEmail = (function () {
            /* Verifica se o Email digitado é valido */
            if (_this.valid_email) {
                /* Caso valido, prossegue com o processo */
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_2_forgot_pass_2__["a" /* ForgotPass_2Page */]);
            }
            else {
                /* Caso o email digitado não seja válido */
                /* Exibe o alerta dizendo que o email é necessário */
                var alert_1 = _this.alertCtrl.create({
                    title: 'Email necessário',
                    subTitle: 'Por favor, insira um email válido para prosseguir com o processo de recuperação de senha.',
                    buttons: ['Ok']
                });
                alert_1.present();
                /* Fim do alerta de email necessário */
            } /* Fim da verificação de validade de Email */
        }); /* Fim da função do processo de prosseguir com a recuperação da senha */
    }
    ForgotPass_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass-1',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\forgot-pass\forgot-pass-1\forgot-pass-1.html"*/'<ion-header>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-auto class="col-icon-back" (click)="backPage()">\n\n                <ion-icon name="ios-arrow-back" class="icon-back"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col> \n\n                <h3 class="title-page">\n\n                    Recuperar Senha.\n\n                </h3><!-- title-page -->\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <p class="page-description">\n\n                    Atenção: Se você perdeu, ou não lembra mais a sua senha de acesso, preencha este formulário para iniciar o processo para gerar uma nova senha para você!\n\n                </p><!-- page-description -->\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <span class="label-form">\n\n                Insira o seu Email\n\n                </span><!-- label-form -->\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                    <input type="email" [(ngModel)]="email_to_recover" (keyup)="validateEmail( email_to_recover )" class="recover-form" placeholder="exemple@exemple.com">\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <div class="footer-steps" >\n\n\n\n        <div class="next-step-action" [ngClass]="{\'allowed\': valid_email }" (click)="sendEmail()">\n\n            <span class="next-step-label">\n\n                Próximo\n\n            </span> <!-- next-stap-label -->\n\n            <div class="nextstep-icon" >\n\n                <span class="caret-body"></span>\n\n                <span class="caret-direction"></span>\n\n            </div> <!-- nextstep-icon -->\n\n        </div> <!-- next-stap-action -->\n\n        \n\n    </div> <!-- footer-steps -->\n\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\forgot-pass\forgot-pass-1\forgot-pass-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgotPass_1Page);
    return ForgotPass_1Page;
}());

//# sourceMappingURL=forgot-pass-1.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPass_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_3_forgot_pass_3__ = __webpack_require__(174);
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
 * Generated class for the ForgotPass_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPass_2Page = (function () {
    function ForgotPass_2Page(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validCode = true;
        /**
         * Função utilizada para "voltar" uma pagina do aplicativo */
        this.backPage = (function () {
            /* Remove uma página do controller de navegação */
            _this.navCtrl.pop();
        });
        /* Fim da função de backPage */
        /**
         * Função utilizada para confirmar o código de verificação do email */
        this.confirmCode = (function () {
            /* Verifica se o código digitado é valido */
            if (_this.validCode) {
                /* Caso valido, prossegue com o processo */
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_3_forgot_pass_3__["a" /* ForgotPass_3Page */]);
            }
            else {
                /* Caso o código digitado não seja válido */
                /* Exibe o alerta dizendo que o código é necessário */
                var alert_1 = _this.alertCtrl.create({
                    title: 'Código Inválido',
                    subTitle: 'Por favor, insira um código válido para prosseguir com o processo de recuperação de senha.',
                    buttons: ['Ok']
                });
                alert_1.present();
                /* Fim do alerta de codigo necessário */
            } /* Fim da verificação de validade de código */
        }); /* Fim da função de confirmação do código enviado no email */
    }
    ForgotPass_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass-2',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\forgot-pass\forgot-pass-2\forgot-pass-2.html"*/'<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-auto class="col-icon-back" (click)="backPage()">\n        <ion-icon name="ios-arrow-back" class="icon-back"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3 class="title-page">\n          Código de Confirmação\n        </h3><!-- title-page -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class="page-description">\n          Um código de verificação foi enviado ao seu email. Por favor, digite o código aqui para continuar o processo! estamos quase lá!\n        </p><!-- page-description -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n          <span class="label-form">\n          Código de Confirmação\n          </span><!-- label-form -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <input type="teste" class="recover-form" placeholder="Código">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <span class="resend-code"> Re-enviar código </span>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <div class="footer-steps" >\n\n    <div class="next-step-action" [ngClass]="{\'allowed\': true }" (click)="confirmCode()" >\n            <span class="next-step-label">\n                Confirmar!\n            </span> <!-- next-stap-label -->\n      <div class="nextstep-icon" >\n        <span class="caret-body"></span>\n        <span class="caret-direction"></span>\n      </div> <!-- nextstep-icon -->\n    </div> <!-- next-stap-action -->\n\n  </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\forgot-pass\forgot-pass-2\forgot-pass-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgotPass_2Page);
    return ForgotPass_2Page;
}());

//# sourceMappingURL=forgot-pass-2.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPass_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(42);
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
 * Generated class for the ForgotPass_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPass_3Page = (function () {
    function ForgotPass_3Page(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        /**
         * Função utilizada para "voltar" uma pagina do aplicativo */
        this.backPage = (function () {
            /* Remove uma página do controller de navegação */
            _this.navCtrl.pop();
        });
        /* Fim da função de backPage */
        /**
         * Função utilizada para finalizar o processo de recuperação de senha.
         */
        this.finishNewPass = (function () {
            var alert = _this.alertCtrl.create({
                title: 'Senhas Alteradas!',
                subTitle: 'Suas senhas foram alteradas com sucesso! você será redirecionado para a página de login.',
                enableBackdropDismiss: false,
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                        } /* Hander of "OK" button */
                    }]
            });
            alert.present();
        });
    }
    ForgotPass_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass-3',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\forgot-pass\forgot-pass-3\forgot-pass-3.html"*/'<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-auto class="col-icon-back" (click)="backPage()">\n        <ion-icon name="ios-arrow-back" class="icon-back"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3 class="title-page">\n          Novas Senhas\n        </h3><!-- title-page -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class="page-description">\n          Ultimo passo! para concluir este processo, Digite uma nova senha para que você possa efetuar o login novamente.\n        </p><!-- page-description -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n          <span class="label-form">\n          Digite sua nova senha.\n          </span><!-- label-form -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <span class="label-new-pass">Nova senha:</span>\n        <input type="password" class="recover-form" placeholder="Nova senha">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="label-new-pass">Confirme sua nova senha:</span>\n        <input type="password" class="recover-form" placeholder="Confirmar Senha">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <div class="footer-steps" >\n\n    <div class="next-step-action" [ngClass]="{\'allowed\': true }" (click)="finishNewPass()" >\n            <span class="next-step-label">\n                Terminar!\n            </span> <!-- next-stap-label -->\n      <div class="nextstep-icon" >\n        <span class="caret-body"></span>\n        <span class="caret-direction"></span>\n      </div> <!-- nextstep-icon -->\n    </div> <!-- next-stap-action -->\n\n  </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\forgot-pass\forgot-pass-3\forgot-pass-3.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object])
    ], ForgotPass_3Page);
    return ForgotPass_3Page;
    var _a, _b, _c;
}());

//# sourceMappingURL=forgot-pass-3.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step2_step2__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_cad_confirm_cad__ = __webpack_require__(164);
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
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Step3Page = (function () {
    function Step3Page(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        /** Definição das variáveis de escopo padrão */
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.passwordsValiable = false;
        /**
         * Função utilizada para voltar para o passo 2 do cadastro do perfil do usuário  */
        this.backToStep2 = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step2_step2__["a" /* Step2Page */]);
        });
        /* Fim da função de retorno para o passo 2 do cadastro do perfil */
        /**
         * Função utilizada para conferir se as senhas estão iguais */
        this.checkPass = (function () {
            /** Verifica se as senhas correspondem umas as outras*/
            _this.passwordsValiable = (_this.password == _this.confirmPassword ? true : false);
        }); /* Fim da função utilizada para conferir se as senhas estão iguais */
        /**
         * Função utilizada para finalizar o cadastro do perfil */
        this.cadFinish = (function () {
            /** Verifica se as senhas correspondem umas as outras */
            if (_this.passwordsValiable) {
                /* Caso as senhas correspondam umas as outras */
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__confirm_cad_confirm_cad__["a" /* ConfirmCadPage */]);
            }
            else {
                /* Caso as senhas não correspondam umas as outras */
                var alert_1 = _this.alertCtrl.create({
                    title: 'Senhas Incorretas',
                    subTitle: 'Por favor, preencha as senhas de forma identica!',
                    buttons: ['Ok']
                });
                alert_1.present();
            } /* Fim da verificação da correspondencia das senhas */
        });
    }
    Step3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step3',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step3\step3.html"*/'<ion-header>\n\n    <div class="header-back" (click)="backToStep2()">\n\n\n\n        <svg class="backpage-ico">\n\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n        </svg> <!-- backpage-ico -->\n\n\n\n    </div> <!-- header-back -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="step-indicator">\n\n\n\n        <span class="dotdot actived"></span>\n\n        <span class="dot-stick actived"></span>\n\n        <span class="dotdot actived"></span>\n\n        <span class="dot-stick actived"></span>\n\n        <span class="dotdot actived rounded"></span>\n\n\n\n    </div> <!-- step-indicator -->\n\n\n\n    <h3 class="title-step">Finalizar Cadastro</h3> <!-- title-step -->\n\n\n\n    <div class="cad-content-inn">\n\n        <ion-grid>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Username: </span> <!-- cad-form-label-txt -->\n\n                            <input type="text" class="cad-form-ctrl" placeholder="Username">\n\n                        </label><!-- cad-form-label -->\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Senha: </span> <!-- cad-form-label-txt -->\n\n                            <input type="password" [(ngModel)]="password" (keyup)="checkPass()" class="cad-form-ctrl" placeholder="Senha">\n\n                        </label><!-- cad-form-label -->\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n                        <label class="cad-form-label icon-right" [ngClass]="{ \'checked-icon\': passwordsValiable }">\n\n                            <span class="cad-form-label-txt"> Confirmar Senha: </span> <!-- cad-form-label-txt -->\n\n                            <input type="password" [(ngModel)]="confirmPassword" (keyup)="checkPass()" class="cad-form-ctrl" placeholder="Confirmar Senha">\n\n                            <ion-icon name="checkmark-circle"></ion-icon>\n\n                        </label><!-- cad-form-label -->\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Email: </span> <!-- cad-form-label-txt -->\n\n                            <input type="email" class="cad-form-ctrl" placeholder="Email">\n\n                        </label><!-- cad-form-label -->\n\n\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Telefone: </span> <!-- cad-form-label-txt -->\n\n                            <input type="text" class="cad-form-ctrl" placeholder="Telefone">\n\n                        </label><!-- cad-form-label -->\n\n\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <button class="button-finish" (click)="cadFinish()"> Pronto! </button>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-grid>\n\n    </div> <!-- cad-content-inn -->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step3\step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Step3Page);
    return Step3Page;
}());

//# sourceMappingURL=step3.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3__ = __webpack_require__(173);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step2__ = __webpack_require__(90);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step3PageModule = (function () {
    function Step3PageModule() {
    }
    Step3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */]),
            ],
        })
    ], Step3PageModule);
    return Step3PageModule;
}());

//# sourceMappingURL=step3.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2PageModule", function() { return Step2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step2__ = __webpack_require__(90);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3__ = __webpack_require__(175);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Step2PageModule = (function () {
    function Step2PageModule() {
    }
    Step2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__step2__["a" /* Step2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step2__["a" /* Step2Page */]),
            ],
        })
    ], Step2PageModule);
    return Step2PageModule;
}());

//# sourceMappingURL=step2.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore__ = __webpack_require__(88);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_share_module__ = __webpack_require__(177);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_share_module__ = __webpack_require__(179);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExplorePageModule = (function () {
    function ExplorePageModule() {
    }
    ExplorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__explore__["a" /* ExplorePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__explore__["a" /* ExplorePage */]),
                __WEBPACK_IMPORTED_MODULE_3__config_share_module__["a" /* SharedModule */]
            ]
        })
    ], ExplorePageModule);
    return ExplorePageModule;
}());

//# sourceMappingURL=explore.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_menu_bottom_menu_bottom__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_qrgo_header_qrgo_header__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__components_menu_bottom_menu_bottom__["a" /* MenuBottomComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__components_qrgo_header_qrgo_header__["a" /* QrgoHeaderComponent */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_menu_bottom_menu_bottom__["a" /* MenuBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_qrgo_header_qrgo_header__["a" /* QrgoHeaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_menu_bottom_menu_bottom__["a" /* MenuBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_qrgo_header_qrgo_header__["a" /* QrgoHeaderComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(85);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_share_module__ = __webpack_require__(177);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_share_module__ = __webpack_require__(179);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedPageModule = (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
                __WEBPACK_IMPORTED_MODULE_3__config_share_module__["a" /* SharedModule */]
            ]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPass_1PageModule", function() { return ForgotPass_1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_1__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPass_1PageModule = (function () {
    function ForgotPass_1PageModule() {
    }
    ForgotPass_1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_pass_1__["a" /* ForgotPass_1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_1__["a" /* ForgotPass_1Page */]),
            ],
        })
    ], ForgotPass_1PageModule);
    return ForgotPass_1PageModule;
}());

//# sourceMappingURL=forgot-pass-1.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPass_2PageModule", function() { return ForgotPass_2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_2__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPass_2PageModule = (function () {
    function ForgotPass_2PageModule() {
    }
    ForgotPass_2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_pass_2__["a" /* ForgotPass_2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_2__["a" /* ForgotPass_2Page */]),
            ],
        })
    ], ForgotPass_2PageModule);
    return ForgotPass_2PageModule;
}());

//# sourceMappingURL=forgot-pass-2.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPass_3PageModule", function() { return ForgotPass_3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_3__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPass_3PageModule = (function () {
    function ForgotPass_3PageModule() {
    }
    ForgotPass_3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_pass_3__["a" /* ForgotPass_3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_3__["a" /* ForgotPass_3Page */]),
            ],
        })
    ], ForgotPass_3PageModule);
    return ForgotPass_3PageModule;
}());

//# sourceMappingURL=forgot-pass-3.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(42);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GostosPageModule", function() { return GostosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gostos__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GostosPageModule = (function () {
    function GostosPageModule() {
    }
    GostosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gostos__["a" /* GostosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gostos__["a" /* GostosPage */]),
            ],
        })
    ], GostosPageModule);
    return GostosPageModule;
}());

//# sourceMappingURL=gostos.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostPageModule = (function () {
    function PostPageModule() {
    }
    PostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]),
            ],
        })
    ], PostPageModule);
    return PostPageModule;
}());

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoPageModule", function() { return LocalizacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizacao__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalizacaoPageModule = (function () {
    function LocalizacaoPageModule() {
    }
    LocalizacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localizacao__["a" /* LocalizacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localizacao__["a" /* LocalizacaoPage */]),
            ],
        })
    ], LocalizacaoPageModule);
    return LocalizacaoPageModule;
}());

//# sourceMappingURL=localizacao.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides__ = __webpack_require__(49);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesPage */]),
            ],
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemTabsPageModule", function() { return SystemTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_tabs__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SystemTabsPageModule = (function () {
    function SystemTabsPageModule() {
    }
    SystemTabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__system_tabs__["a" /* SystemTabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__system_tabs__["a" /* SystemTabsPage */]),
            ],
        })
    ], SystemTabsPageModule);
    return SystemTabsPageModule;
}());

//# sourceMappingURL=system-tabs.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_themes_prototype_slides_slides__ = __webpack_require__(49);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_slides_slides_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_login_login_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_cadastro_step1_step1_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_themes_prototype_cadastro_step2_step2_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_themes_prototype_cadastro_step3_step3_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_themes_prototype_cadastro_confirm_cad_confirm_cad_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_themes_prototype_explore_explore_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_modais_gostos_gostos_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_modais_localizacao_localizacao_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_themes_prototype_feed_feed_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_themes_prototype_modais_post_post_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_themes_prototype_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_themes_prototype_system_tabs_system_tabs_module__ = __webpack_require__(187);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_slides_slides_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_login_login_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_cadastro_step1_step1_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_themes_prototype_cadastro_step2_step2_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_themes_prototype_cadastro_step3_step3_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_themes_prototype_cadastro_confirm_cad_confirm_cad_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_themes_prototype_explore_explore_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_modais_gostos_gostos_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_modais_localizacao_localizacao_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_themes_prototype_feed_feed_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_themes_prototype_modais_post_post_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_themes_prototype_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_themes_prototype_system_tabs_system_tabs_module__ = __webpack_require__(189);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_themes_prototype_system_tabs_system_tabs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_categoria_categoria__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_themes_prototype_forgot_pass_forgot_pass_1_forgot_pass_1_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_themes_prototype_forgot_pass_forgot_pass_2_forgot_pass_2_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_themes_prototype_forgot_pass_forgot_pass_3_forgot_pass_3_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_storage__ = __webpack_require__(171);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_themes_prototype_cadastro_step2_step2_module__["Step2PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_themes_prototype_cadastro_step3_step3_module__["Step3PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_themes_prototype_cadastro_confirm_cad_confirm_cad_module__["ConfirmCadPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_themes_prototype_explore_explore_module__["ExplorePageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_modais_gostos_gostos_module__["GostosPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_themes_prototype_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_themes_prototype_modais_post_post_module__["PostPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_themes_prototype_system_tabs_system_tabs_module__["SystemTabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_modais_localizacao_localizacao_module__["LocalizacaoPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */], {}, {
                    links: [
                        { loadChildren: '../pages/themes/prototype/cadastro/confirm-cad/confirm-cad.module#ConfirmCadPageModule', name: 'ConfirmCadPage', segment: 'confirm-cad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/cadastro/step1/step1.module#Step1PageModule', name: 'Step1Page', segment: 'step1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/cadastro/step3/step3.module#Step3PageModule', name: 'Step3Page', segment: 'step3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/cadastro/step2/step2.module#Step2PageModule', name: 'Step2Page', segment: 'step2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module#ForgotPass_1PageModule', name: 'ForgotPass_1Page', segment: 'forgot-pass-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module#ForgotPass_2PageModule', name: 'ForgotPass_2Page', segment: 'forgot-pass-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module#ForgotPass_3PageModule', name: 'ForgotPass_3Page', segment: 'forgot-pass-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/modais/gostos/gostos.module#GostosPageModule', name: 'GostosPage', segment: 'gostos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/modais/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/modais/localizacao/localizacao.module#LocalizacaoPageModule', name: 'LocalizacaoPage', segment: 'localizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/system-tabs/system-tabs.module#SystemTabsPageModule', name: 'SystemTabsPage', segment: 'system-tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__pages_themes_prototype_forgot_pass_forgot_pass_1_forgot_pass_1_module__["ForgotPass_1PageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_themes_prototype_forgot_pass_forgot_pass_2_forgot_pass_2_module__["ForgotPass_2PageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_themes_prototype_forgot_pass_forgot_pass_3_forgot_pass_3_module__["ForgotPass_3PageModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'fashon',
                    driverOrder: ['sqlite', 'websql', 'indexeddb']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */],
                __WEBPACK_IMPORTED_MODULE_6__pages_themes_prototype_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_themes_prototype_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_themes_prototype_system_tabs_system_tabs__["a" /* SystemTabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_categoria_categoria__["a" /* CategoriaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_themes_prototype_feed_feed__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_explore_explore__ = __webpack_require__(88);
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
 * Generated class for the MenuBottomComponent component.
 *
 * Componente utilizado para manter o template do menu bottom padronizado
 * Criação do menu fixo inferior
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuBottomComponent = (function () {
    function MenuBottomComponent(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.constants = __WEBPACK_IMPORTED_MODULE_1__config_Constants__["a" /* Constants */];
        this.goToExplore = (function () {
            if (_this.page !== 'explore') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_explore_explore__["a" /* ExplorePage */]);
            }
            else {
                _this.content.scrollToTop();
            }
        });
        this.goToFeed = (function () {
            if (_this.page !== 'feed') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_themes_prototype_feed_feed__["a" /* FeedPage */]);
            }
            else {
                _this.content.scrollToTop();
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MenuBottomComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Content */])
    ], MenuBottomComponent.prototype, "content", void 0);
    MenuBottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fixed-menu',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\components\menu-bottom\menu-bottom.html"*/'<ion-menu side="right" swipeEnabled="false" [content]="footer" >\n\n  <ion-content>\n\n\n\n    <ion-list>\n\n      <ion-item>Perfil</ion-item>\n\n      <ion-item>Carrinho</ion-item>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n  \n\n<div class="foot-menu" #footer>\n\n  <!-- Grid com os icones do menu -->\n\n  <ion-grid>\n\n    <!-- Linha com as colunas com os icones -->\n\n    <ion-row>\n\n      <!-- Colunas com os icones -->\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" (click)="goToFeed()">\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu" [ngClass]="{ \'current-page\': page == \'feed\' }">\n\n               <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/home.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" (click)="goToExplore()">\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu" [ngClass]="{ \'current-page\': page == \'explore\' }">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/search.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" >\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu" [ngClass]="{ \'current-page\': page == \'products\' }">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/bag.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" >\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/notification.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" menuToggle="right" >\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/menu.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <!-- Fim da linha  -->\n\n    </ion-row>\n\n    <!-- Fim do grid -->\n\n  </ion-grid>\n\n\n\n</div> <!-- foot-menu -->\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\components\menu-bottom\menu-bottom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]])
    ], MenuBottomComponent);
    return MenuBottomComponent;
}());

//# sourceMappingURL=menu-bottom.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrgoHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Constants__ = __webpack_require__(13);
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
 * Generated class for the QrgoHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QrgoHeaderComponent = (function () {
    function QrgoHeaderComponent() {
        this.constants = __WEBPACK_IMPORTED_MODULE_1__config_Constants__["a" /* Constants */];
    }
    QrgoHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qr-header',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\components\qrgo-header\qrgo-header.html"*/'<ion-grid class="header-grid">\n    <ion-row class="header-grid-row">\n        <ion-col col-2 >\n\n            <div class="header-icon-action" >\n                <svg class="header-ico-action">\n                    <use [attr.xlink:href]="constants.src_svg + \'qrgo_square.svg#Layer_1\'"></use>\n                </svg> <!-- header-ico-action -->\n            </div> <!-- header-icon-action -->\n\n        </ion-col>\n        <ion-col>\n            <div class="header-qrgo-center" >\n                <img class="logo-qrgo-center" [src]="constants.src_svg + \'qrgo-logo.svg\'"/>\n            </div> <!-- header-qrgo-center -->\n        </ion-col>\n        <ion-col col-2 class="header-last">\n\n            <div class="header-icon-action" >\n                <svg class="header-ico-action">\n                    <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n                </svg> <!-- header-ico-action -->\n            </div> <!-- header-icon-action -->\n            \n        </ion-col><!-- header-last -->\n    </ion-row><!-- header-grid-row -->\n</ion-grid><!-- header-grid -->\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\components\qrgo-header\qrgo-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], QrgoHeaderComponent);
    return QrgoHeaderComponent;
}());

//# sourceMappingURL=qrgo-header.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qrgo_prototype; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_slides_slides__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_themes_prototype_login_login__ = __webpack_require__(42);
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
        this.storage = localStorage.getItem('qrgo_application');
        this.session = JSON.parse(this.storage);
        this.rootPage = ((this.session == null || this.session.first_access != false) ? __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_slides_slides__["a" /* SlidesPage */] : __WEBPACK_IMPORTED_MODULE_5__pages_themes_prototype_login_login__["a" /* LoginPage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Qrgo_prototype);
    return Qrgo_prototype;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slides_slides__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_step1_step1__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__system_tabs_system_tabs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_pass_forgot_pass_1_forgot_pass_1__ = __webpack_require__(172);
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
    function LoginPage(navCtrl, navParams, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.constants = __WEBPACK_IMPORTED_MODULE_3__config_Constants__["a" /* Constants */];
        this.login = {};
        this.logindata = {
            user_login: "",
            user_pass: ""
        };
        this.teste = "";
        /** Fim do constructor da classe */
        /**
         * Função utilizada para redirecionar o usuário novamente à pagina de slides */
        this.goBackSlides = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__slides_slides__["a" /* SlidesPage */]);
        });
        /* Fim da função de redirecionamento para os slides */
        /**
         * Função utilizada para redirecionar o usuário à pagina de realizar o cadastro */
        this.goToCadastro = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cadastro_step1_step1__["a" /* Step1Page */]);
        });
        /* Fim da função de regdirecionamento para a página de cadastro */
        /**
         * Função utilizada para realizar o login do usuário */
        this.doLogin = (function () {
            // var data_send = this.logindata;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__system_tabs_system_tabs__["a" /* SystemTabsPage */], {}, { animate: true, direction: 'forward' });
            // this.http.post(this.constants.api_path + 'login/dologin', $.param(data_send)).subscribe(response => {
            //
            //     const res = (response as any);
            //     this.login = JSON.parse(res._body);
            //     const login = (this.login as any);
            //
            //     if (login.success) {
            //
            //         if (login.no_verified) {
            //             console.log(login);
            //             this.navCtrl.push(ConfirmCadPage);
            //         }
            //         else {
            //             this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
            //         }
            //
            //     } else {
            //         var __this = this;
            //         setTimeout(function () {
            //             const text = (__this.login as any);
            //             text.text = "";
            //         }, 3000);
            //
            //     }
            //
            // });
        });
        /* Fim da função de realização do login do usuário */
        /**
         * Função para dar inicio ao processo de recuperar senha
         * @type {() => void}
         */
        this.recoverPass = (function () {
            /**
             * Redireciona o usuário para a primeira págimna do processo */
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgot_pass_forgot_pass_1_forgot_pass_1__["a" /* ForgotPass_1Page */]);
        });
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\login\login.html"*/'<div class="login-page">\n\n\n\n    <div class="backpage-login" (click)="goBackSlides()" >\n\n        <svg class="backpage-ico">\n\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- backpage-login -->\n\n\n\n    <div class="content-login-form">\n\n\n\n        <h3 class="welcome-title">Bem Vindo</h3>\n\n\n\n        <div class="image-logo-qrgo">\n\n            <img class="svg-logo" [src]="constants.src_svg + \'qrgo-logo.svg\'"/>\n\n        </div> <!-- image-logo-qrgo -->\n\n\n\n        <div class="content-form-login">\n\n            <div class="form-cont pdg-b20">\n\n                <input type="text" class="form-ctrl" placeholder="Username / E-mail" [(ngModel)]="logindata.user_login">\n\n            </div> <!-- form-cont -->\n\n            <div class="form-cont">\n\n                <input type="password" class="form-ctrl" placeholder="Senha" [(ngModel)]="logindata.user_pass">\n\n            </div> <!-- form-cont -->\n\n\n\n            <p class="forgot-pass"> {{ login.text }} </p>\n\n            <p class="forgot-pass" (click)="recoverPass()"> Esqueci minha senha </p>\n\n\n\n            <div class="form-cont">\n\n                <button [disabled]="!logindata.user_login || !logindata.user_pass" class="login-btn" (click)="doLogin()" > Entrar</button>\n\n            </div> <!-- form-cont -->\n\n\n\n            <span class="line-divider"></span> <!-- line-divider -->\n\n\n\n            <div class="content-singup">\n\n                <p class="ask-singup" > Não possui cadastro? </p> <!-- ask-singup -->\n\n                <p class="button-singup" (click)="goToCadastro()" > Cadastre-se </p> <!-- ask-singup -->\n\n            </div> <!-- content-singup -->\n\n\n\n        </div> <!-- content-form-login -->\n\n\n\n\n\n        <div class="explore-contents" >\n\n            <span class="explore-label"> Explorar </span>\n\n            <span class="explore-stick"></span>\n\n        </div> <!-- explore-contents -->\n\n\n\n    </div> <!-- content-login-form -->\n\n\n\n\n\n</div> <!-- login-page -->'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
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
        /**
         * Função utilizada para enviar o usuário para a pagina de login */
        this.startLogin = (function () {
            /* Envia o usuário à pagina de login */
            var storage = { 'first_access': false };
            localStorage.setItem("qrgo_application", JSON.stringify(storage));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
        });
    }
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\slides\slides.html"*/'<ion-slides pager>\n\n\n\n  <ion-slide class="slider-content" >\n\n    \n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/01.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">A confecção na palma da sua mão</h1>\n\n    <p class="slide-description">\n\n      Uma rede que oferece o <strong>controle</strong> e <strong>divulgação</strong> dos seus produtos em tempo real!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 1 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/02.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Procura & Demanda</h1>\n\n    <p class="slide-description">\n\n      Milhares de lojistas e confecções procurando fazer novos contatos!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 2 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/03.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Sempre Informado</h1>\n\n    <p class="slide-description">\n\n      Acompanhe em primeira mão em uma unica plataforma as <strong>novidades, publicações</strong> e <strong>promoções</strong> dos seus contatos!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 3 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/04.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Seja Independente</h1>\n\n    <p class="slide-description">\n\n      Sinta a liberdade de poder <strong>comprar</strong> e <strong>reservar peças</strong> sem estar a mercê do tempo de um vendedor.\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="start-button" (click)="startLogin()">Começar!</button>\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 4 -->\n\n\n\n</ion-slides>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\slides\slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step2_step2__ = __webpack_require__(90);
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
    function Step1Page(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.actived = 0;
        /**
         * Função utilizada para a "volta" da pagina para a pagina de login
         * @type {() => any} */
        this.backToLogin = (function () {
            /* Redireciona para a pagina de login */
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
        /**
         * Função utilizada para redirecionar para o segundo passo do cadastro */
        this.goToStep2 = (function () {
            /* Verifica se o redirect está habilitado. Só estará se algum perfil foi selecionado, ou seja: se actived for diferente de 0 */
            if (_this.actived != 0) {
                /* Se o redirect estiver hasbilitado */
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__step2_step2__["a" /* Step2Page */]);
            }
            else {
                /* Caso o redirect não esteja habilitado, exibe o alerta */
                var alert_1 = _this.alertCtrl.create({
                    title: 'Selecione o perfil',
                    subTitle: 'Por favor, selecione o seu perfil como usuário.',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }); /* Fim da função utiliazada para avançãr os passos do cadastro */
        /**
         * Função utilizada para definir o tipo do perfil selecionado
         * @type {(data: number) => any} - ID do perfil selecionado */
        this.defineActived = (function (data) {
            /* Define o ID do perfil selecionado */
            _this.actived = data;
        }); /* Fim da função de definição do perfil selecionado */
    }
    Step1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step1',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step1\step1.html"*/'<ion-header>\n    <div class="header-back" (click)="backToLogin()" >\n\n        <svg class="backpage-ico">\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- header-back -->\n</ion-header>\n\n<ion-content>\n\n    <div class="step-indicator" >\n\n        <span class="dotdot actived rounded"></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot "></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot"></span>\n\n    </div> <!-- step-indicator -->\n\n    <h3 class="title-step">Escolha</h3> <!-- title-step -->\n\n    <div class="choose-content" >\n        <div class="choose-column" >\n\n            <div class="type-user" >\n\n                <div class="icon-user-type" [ngClass]="{ \'actived-type\': actived == 1 }" (click)="defineActived(1)" >\n                    <svg class="svg-ico-usertype">\n                        <use [attr.xlink:href]="constants.src_svg + \'confeccao.svg#Layer_1\'"></use>\n                    </svg> <!-- svg-ico-usertype -->\n                </div> <!-- icon-user-type -->\n\n                <p class="type-title"> Confecção </p> <!-- type-title -->\n                <p class="type-description">\n                    Cadastre a sua confecção para realizar novas ligações e encontrar novos revendedores para a sua marca\n                </p> <!-- type-description -->\n\n            </div> <!-- type-user -->\n\n        </div> <!-- choose-column -->\n        <div class="choose-column" >\n\n            <div class="type-user" >\n\n                <div class="icon-user-type" [ngClass]="{ \'actived-type\': actived == 2 }" (click)="defineActived(2)">\n                    <svg class="svg-ico-usertype">\n                       <use [attr.xlink:href]="constants.src_svg + \'vendedor.svg#Layer_1\'"></use>\n                    </svg> <!-- svg-ico-usertype -->\n                </div> <!-- icon-user-type -->\n\n                <p class="type-title"> Lojista </p> <!-- type-title -->\n                <p class="type-description">\n                    Cadastre o seu perfil como lojista, para encontrar novas confecções para revendas. E novas conexões de clientes.\n                </p> <!-- type-description -->\n\n            </div> <!-- type-user -->\n\n        </div> <!-- choose-column -->\n    </div> <!-- choose-content -->\n    \n</ion-content>\n\n<ion-footer>\n    <div class="footer-steps" >\n\n        <div class="next-step-action" [ngClass]="{\'allowed\': actived != 0}" (click)="goToStep2()">\n            <span class="next-step-label">\n                Próximo\n            </span> <!-- next-stap-label -->\n            <div class="nextstep-icon" >\n                <span class="caret-body"></span>\n                <span class="caret-direction"></span>\n            </div> <!-- nextstep-icon -->\n        </div> <!-- next-stap-action -->\n\n    </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step1\step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Step1Page);
    return Step1Page;
}());

//# sourceMappingURL=step1.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explore_explore__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
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
 * Generated class for the SystemTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SystemTabsPage = (function () {
    function SystemTabsPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.pageHome = __WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */];
        this.pageExplore = __WEBPACK_IMPORTED_MODULE_3__explore_explore__["a" /* ExplorePage */];
        this.pageBag = null;
        this.pageNotification = null;
        /**
       * Função utilizada para realizar o Scroll até o topo da pagina, quando clicar na "tab" que já está ativa
       * @type {(event) => any} - Infos of pointer click event */
        this.scrollTopContent = (function (event) {
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__(event.target).closest('.tab-button[aria-selected="true"]').length > 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.scroll-content').stop().animate({ 'scrollTop': 0 }, 300);
            }
        }); /* Fim da função utilizada para o scroll até o topo da pagina */
    }
    SystemTabsPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    SystemTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-system-tabs',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\system-tabs\system-tabs.html"*/'<ion-menu [content]="tabs" side="right">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n</ion-menu>\n\n\n\n\n\n<ion-tabs #tabs selectedIndex="1" (tap)="scrollTopContent( $event )">\n\n  <ion-tab [root]="pageHome" tabIcon="QrHome"></ion-tab>\n\n  <ion-tab [root]="pageExplore" tabIcon="QrExplore"></ion-tab>\n\n  <ion-tab [root]="pageBag" tabIcon="QrBag"></ion-tab>\n\n  <ion-tab [root]="pageNotification" tabIcon="QrNotification"></ion-tab>\n\n  <ion-tab (ionSelect)="openMenu()" tabIcon="QrMore"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\system-tabs\system-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], SystemTabsPage);
    return SystemTabsPage;
}());

//# sourceMappingURL=system-tabs.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modais_post_post__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(168);
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
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = (function () {
    function FeedPage(navCtrl, modalCtrl, navParams, actionSheetCtrl, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        // Abrir modal para realizar psot
        this.doPost = (function () {
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modais_post_post__["a" /* PostPage */]);
            profileModal.present();
        });
        /**
         * Estrutura Padrão e Base de como os dados do feed devem ser retornados */
        this.feed = [
            { type: 1, company: 'Unique', image: "post1.jpg", products: null },
            { type: 1, company: 'Unieke', image: "unique.jpg", products: null },
            { type: 1, company: 'CHLOE', image: null, products: null },
            { type: 2, company: 'Marisa', image: 'roupa5.jpg', products: null },
            {
                type: 3, company: 'Zara', image: 'wallpaper.jpg', products: [
                    { group: [
                            { prod_image: 'roupa5.jpg' },
                            { prod_image: 'roupa1.jpg' },
                            { prod_image: 'roupa1.png' },
                        ] },
                    { group: [
                            { prod_image: 'roupa5.jpg' },
                            { prod_image: 'roupa2.png' },
                            { prod_image: 'roupa4.jpg' }
                        ] }
                ] /* Fim do products */
            },
            {
                type: 3, company: 'Brooksfield', image: null, products: [
                    { group: [
                            { prod_image: 'roupa1.jpg' },
                            { prod_image: 'roupa2.png' },
                            { prod_image: 'roupa3.jpg' },
                        ] },
                    { group: [
                            { prod_image: 'roupa1.png' },
                            { prod_image: 'roupa2.png' },
                            { prod_image: 'roupa1.png' }
                        ] },
                    { group: [
                            { prod_image: 'roupa1.jpg' },
                            { prod_image: 'roupa2.png' },
                        ] },
                ] /* Fim do products */
            },
            { type: 1, company: 'WebCloset', image: null, products: null }
        ];
        /* Fim da estrutura base de como o feed deve ser retornado */
        this.filter = 1;
        this.changeFilter = (function (event, filterId) {
            var $caret = __WEBPACK_IMPORTED_MODULE_4_jquery__(_this.filterCaret.nativeElement);
            var $filter = __WEBPACK_IMPORTED_MODULE_4_jquery__(event.path[0]);
            var dimensions = { w: $filter.width(), x: $filter.position().left };
            $caret.css({ width: dimensions.w + 'px', left: dimensions.x + 'px' });
            _this.filter = filterId;
        });
        this.feedAction = null;
        this.sharePost = (function (post) {
            _this.socialSharing.share('Olhe este produto que eu encontrei em: ', '', '', 'www.go.qrgo.com.br/image').then(function () {
            });
        });
    }
    /**
     * Função utilizada para realizar ações relacionadas para
     * @param post
     */
    FeedPage.prototype.actionsPostFeed = function (post) {
        this.feedAction = post;
        var actionSheet = this.actionSheetCtrl.create({
            cssClass: 'feed-post-actions',
            buttons: [
                {
                    text: 'Publicação: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'closeFeedActions'
                },
                {
                    text: 'Ocultar: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'actionButton btnOcultar',
                    handler: function () { }
                },
                {
                    text: 'Receber Notificações',
                    cssClass: 'actionButton btnNotifications',
                    handler: function () { }
                },
                {
                    text: 'Denunciar: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'actionButton btnDenunciar',
                    handler: function () { }
                },
            ]
        });
        /* Fim das options de ações de Post do Feed */
        actionSheet.present();
    }; /* Fim da function actionsPostFeed */
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('filterCaret'),
        __metadata("design:type", Object)
    ], FeedPage.prototype, "filterCaret", void 0);
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\feed\feed.html"*/'<!-- Start of footer Content -->\n\n<ion-header>\n\n    <qr-header></qr-header>\n\n</ion-header>\n\n<!-- End of header Default -->\n\n<!-- Content of feed page -->\n\n<ion-content #Content>\n\n\n\n    <!-- Start of feed -->\n\n    <div class="feed-background"></div> <!-- feed-background -->\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n\n\n                <div class="feed-post-something" >\n\n\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col class="post-something" (click)="doPost()">\n\n                                Publique Algo...\n\n                            </ion-col><!-- post-something -->\n\n                            <ion-col col-auto>\n\n                                <div class="feed-publication-shortcut">\n\n                                    <svg class="ico-publication-shortcut">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'hanger.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- ico-publication-shortcut -->\n\n                                </div> <!-- feed-publication-shortcut -->\n\n                            </ion-col>\n\n                            <ion-col col-auto>\n\n                                <div class="feed-publication-shortcut">\n\n                                    <svg class="ico-publication-shortcut">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'picture.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- ico-publication-shortcut -->\n\n                                </div> <!-- feed-publication-shortcut -->\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n\n\n                </div> <!-- feed-post-something -->\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <div class="feed-filter">\n\n                    <ion-grid>\n\n                        <ion-row>\n\n\n\n                            <ion-col (click)="changeFilter( $event, 1 )" [ngClass]="{\'actived-filter\': filter == 1 }">\n\n                                Todos\n\n                            </ion-col>\n\n                            <ion-col (click)="changeFilter( $event, 2 )" [ngClass]="{\'actived-filter\': filter == 2 }">\n\n                                Confecções\n\n                            </ion-col>\n\n                            <ion-col (click)="changeFilter( $event, 3 )" [ngClass]="{\'actived-filter\': filter == 3 }">\n\n                                Lojistas\n\n                            </ion-col>\n\n                            <ion-col (click)="changeFilter( $event, 4 )" [ngClass]="{\'actived-filter\': filter == 4 }">\n\n                                Roupas\n\n                            </ion-col>\n\n\n\n                            <span class="filter-indicator">\n\n                                <span class="filter-caret" #filterCaret ></span>\n\n                            </span><!-- filter-indicator -->\n\n\n\n                        </ion-row><!-- feed-filter -->\n\n                    </ion-grid>\n\n                </div> <!-- feed-filter -->\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <!-- Primeiro card do feed -->\n\n    <ion-card class="feed-card" *ngFor="let post of feed">\n\n        <div class="feed-card-structure">\n\n\n\n            <div class="feed-card-header">\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-2>\n\n                            <div class="feed-author-image">\n\n                                <div class="feed-author-img"></div> <!-- feed-author-img -->\n\n                            </div> <!-- feed-author-image -->\n\n                        </ion-col>\n\n                        <ion-col class="feed-author">\n\n                            <div class="feed-autor-label">\n\n                                <span class="feed-author-txt title ">\n\n                                    {{ post.company }}\n\n                                </span><!-- feed-author-txt -->\n\n                            </div> <!-- feed-autor-label -->\n\n                            <div class="feed-autor-label">\n\n                                <span class="feed-author-txt description">\n\n                                    Rua Anhaia, 284 <ion-icon name="ai-notification"></ion-icon>\n\n                                </span>\n\n                            </div> <!-- feed-autor-label -->\n\n                        </ion-col>\n\n                        <ion-col col-2 (click)="actionsPostFeed( post )">\n\n                            <div class="feed-card-header-options">\n\n                                <svg class="ico-card-options">\n\n                                    <use [attr.xlink:href]="constants.src_svg + \'vertical-dots.svg#Layer_1\'"></use>\n\n                                </svg> <!-- ico-card-options -->\n\n                            </div> <!-- feed-card-header-options -->\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div> <!-- feed-card-header -->\n\n            <div class="feed-card-body">\n\n\n\n                <!-- Primeira estrutura de layout de post -->\n\n                <!-- Post somente com imagens -->\n\n                <!-- ------------ -->\n\n                <div class="card-body-image" [hidden]="post.type != 1">\n\n\n\n                    <div class="card-body-img"\n\n                         [hidden]="post.image == null"\n\n                         [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + post.image + \')\' }"></div>\n\n                    <!-- card-body-img -->\n\n\n\n                    <div class="card-body-description">\n\n                        <span class="card-body-description-since"> Há 3 Minutos </span>\n\n                        <span class="card-body-description-desc">\n\n                            Welcome to <span class="hashtag-desc">#ThePradaDoubleClubMiami</span>, presented by Fondazione Prada and Carsten Höller. The temporary nightclub/installation is half gray scale.\n\n                        </span><!-- card-body-description-desc -->\n\n                    </div> <!-- card-body-description -->\n\n                    <div class="card-body-actions-post">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'hearth.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col (click)="sharePost( post )">\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'share.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div> <!-- card-body-actions-post -->\n\n                </div> <!-- card-body-image -->\n\n                <!-- ------------ -->\n\n                <!-- ------------ -->\n\n                <div class="card-body-product" [hidden]="post.type != 2">\n\n\n\n                    <div class="card-body-product-img">\n\n\n\n                        <ion-slides class="product-variables">\n\n                            <ion-slide>\n\n                                <div class="product-variable-cover" [ngStyle]="{\'background-image\': \'url(\' + constants.src_img + \'exemples/\' + post.image + \')\'}"  ></div> <!-- product-variable-cover -->\n\n                            </ion-slide>\n\n                        </ion-slides><!-- product-variables -->\n\n\n\n                        <ul class="variables-valiable">\n\n                            <li class="variable actived-variable"></li> <!-- variable -->\n\n                            <li class="variable"></li> <!-- variable -->\n\n                            <li class="variable"></li> <!-- variable -->\n\n                        </ul><!-- variables-valiable -->\n\n\n\n                    </div> <!-- card-body-product-img -->\n\n\n\n                    <div class="card-body-description">\n\n                        <span class="card-body-description-since"> Há 3 Minutos </span>\n\n                        <div class="card-body-description-desc">\n\n\n\n                            <span class="product-title"> TURTLENECK TOP </span>\n\n                            <div class="product-prices">\n\n                                <ion-grid class="grid-prices">\n\n                                    <ion-row>\n\n                                        <ion-col class="col-border">\n\n                                            <span class="col-label"> Atacado </span><!-- col-label -->\n\n                                            <span class="price"> 590 </span> <!-- price -->\n\n                                        </ion-col>\n\n                                        <ion-col class="col-varejo">\n\n                                            <span class="col-label"> Varejo </span><!-- col-label -->\n\n                                            <span class="price"> 590 </span> <!-- price -->\n\n                                        </ion-col><!-- col-varejo -->\n\n                                        <ion-col class="col-action">\n\n                                            <button class="button-action-product">\n\n                                                <svg class="icon-button-action-product">\n\n                                                    <use [attr.xlink:href]="constants.src_svg + \'cart.svg#Layer_1\'"></use>\n\n                                                </svg> <!-- icon-button-action-product -->\n\n                                                Comprar\n\n                                            </button><!-- button-action-product -->\n\n                                        </ion-col><!-- col-action -->\n\n                                    </ion-row>\n\n                                </ion-grid><!-- grid-prices -->\n\n                            </div><!-- product-prices -->\n\n\n\n                        </div><!-- card-body-description-desc -->\n\n\n\n                        <span class="card-body-description-desc">\n\n                            Confira a novidade na nossa loja essa semana!\n\n                        </span><!-- card-body-description-desc -->\n\n\n\n                    </div> <!-- card-body-description -->\n\n\n\n                    <div class="card-body-actions-post">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'hearth.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'star.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col (click)="sharePost( post )">\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'share.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div> <!-- card-body-actions-post -->\n\n\n\n                </div> <!-- card-body-product -->\n\n                <!-- ---------- -->\n\n                <!-- ---------- -->\n\n                <div class="card-body-product-group" [hidden]="post.type != 3">\n\n                    <div class="product-group-cover"\n\n                         [hidden]="post.image == null"\n\n                         [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + post.image + \')\' }" ></div> <!-- product-group-cover -->\n\n                    <div class="content-slide-group" >\n\n                        <ion-slides class="product-group-slides" pager>\n\n\n\n                            <ion-slide *ngFor="let grupos of post.products">\n\n                                <ul class="list-group-products">\n\n                                    <li class="item-group-product" *ngFor="let produto of grupos.group">\n\n                                        <div class="item-product-cover" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + produto.prod_image +\')\' }">\n\n                                        </div> <!-- item-product-cover -->\n\n                                    </li><!-- item-group-product -->\n\n                                </ul><!-- list-group-products -->\n\n                            </ion-slide>\n\n\n\n                        </ion-slides><!-- product-group-slides -->\n\n                    </div> <!-- content-slide-group -->\n\n\n\n                    <div class="card-body-description">\n\n                        <span class="card-body-description-since"> Há 3 Minutos </span>\n\n                        <span class="card-body-description-desc">\n\n                            Welcome to <span class="hashtag-desc">#ThePradaDoubleClubMiami</span>, presented by Fondazione Prada and Carsten Höller. The temporary nightclub/installation is half gray scale.\n\n                        </span><!-- card-body-description-desc -->\n\n                    </div> <!-- card-body-description -->\n\n                    <div class="card-body-actions-post">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'hearth.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col (click)="sharePost( post )">\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'share.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div> <!-- card-body-actions-post -->\n\n\n\n                </div> <!-- card-body-product-group -->\n\n                <!-- ---------- -->\n\n                <!-- ---------- -->\n\n\n\n                <!-- Fim da estrutura do tipo de layout de post ( Post somente com imagens ) -->\n\n            </div> <!-- feed-card-body -->\n\n\n\n        </div> <!-- feed-card-structure -->\n\n    </ion-card><!-- feed-card -->\n\n    <!-- fim do primeiro card do feed -->\n\n\n\n\n\n    <!-- Terceiro card do feed -->\n\n    <!-- Fim do terceiro card do feed -->\n\n\n\n</ion-content>\n\n<!-- End of content Feed Page -->\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modais_gostos_gostos__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categoria_categoria__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(171);
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
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExplorePage = (function () {
    function ExplorePage(navCtrl, navParams, modalCtrl, platform, categoriaProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.categoriaProvider = categoriaProvider;
        this.storage = storage;
        this.constants = __WEBPACK_IMPORTED_MODULE_3__config_Constants__["a" /* Constants */];
        this.recommendations = [
            { mark: 'Unique', wallpaper: 'unique.jpg' },
            { mark: 'Unike', wallpaper: 'unique2.jpg' },
            { mark: 'Unique', wallpaper: 'unique.jpg' },
            { mark: 'Unike', wallpaper: 'unique2.jpg' },
            { mark: 'Unique', wallpaper: 'unique.jpg' },
        ];
        this.marcas = [
            { marca: 'Unique', produtos: [{ null: null }, { null: null }] },
            { marca: 'Unieke', produtos: [{ null: null }, { null: null }, { null: null }, { null: null }] }
        ];
        this.styles = [];
        /**
         * Função utilizada para iniciar o scroll do content */
        this.doScrollContent = (function (element, event) {
        }); /* Fim função executada com o scroll do content */
    }
    /* Função iniciada quando a view for iniciada */
    ExplorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /* Quando a view foi iniciada, e ja está pronta */
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modais_gostos_gostos__["a" /* GostosPage */]);
        this.categoriaProvider.getCategoriasSelecionadas().subscribe(function (data) {
            _this.storage.set('profile_modal_clicado', true);
            _this.setCategoriasSelecionadas(data);
        }, function (error) {
            console.log(error);
            // captura dados locais caso não consiga os dados online
            _this.storage.get('styles').then(function (data) {
                _this.styles = (typeof data === 'object') ? data : [];
            });
        }).add(function () {
            // apresenta o modal caso o usuário nunca tenha cadastrado 1 estilo
            if (_this.styles.length < 1) {
                profileModal.present();
                profileModal.onDidDismiss(function () {
                    _this.categoriaProvider.getCategoriasSelecionadas().subscribe(function (data) {
                        _this.setCategoriasSelecionadas(data);
                    });
                });
            }
        });
    };
    ExplorePage.prototype.setCategoriasSelecionadas = function (data) {
        var response = data;
        var objeto_retorno = JSON.parse(response._body);
        this.styles = objeto_retorno;
        // armazena localmente para caso de falta de internet
        this.storage.set('styles', objeto_retorno);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollerRecommended'),
        __metadata("design:type", Object)
    ], ExplorePage.prototype, "scrollerRecommended", void 0);
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\explore\explore.html"*/'<ion-content>\n\n    <!-- Content da pagina de explorar -->\n\n    \n\n    <div class="header-background" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'backgrounds/explore-background.png)\' }" ></div> <!-- header-background -->\n\n    \n\n    <!-- Header da pagina de exploração -->\n\n    <ion-header>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-1 class="col-icon">\n\n                    <div class="icon-back-header" >\n\n                        \n\n                        <svg class="ico-back-header">\n\n                           <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n                        </svg> <!-- ico-back-header -->\n\n                        \n\n                    </div> <!-- icon-back-header -->\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div class="content-search-input-header" >\n\n                        <input type="search" name="search-explore" class="inpt-search-explore" placeholder="Buscar">\n\n                        <ion-icon name="md-close-circle"></ion-icon>\n\n                    </div> <!-- content-search-input-header -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-header>\n\n    <!-- Fim do header da pagina de exploração -->\n\n    <div class="ion-styles-explore" >\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <span class="text-header-section">\n\n                        Seus estilos\n\n                    </span><!-- text-header-section -->\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div class="show-styles-selecteds" >\n\n                        <div class="styles-selecteds">\n\n                            <span class="style-slected" *ngFor="let style of styles">{{ style.style_name }}</span>\n\n                        </div> <!-- styles-selecteds -->\n\n                    </div> <!-- show-styles-selecteds -->\n\n                </ion-col>\n\n                <ion-col col-2 class="cont-config-styles">\n\n                    <div class="config-styles" >\n\n                        \n\n                        <div class="config-ico" >\n\n                            <svg class="ico-config">\n\n                               <use [attr.xlink:href]="constants.src_svg + \'settings.svg#Layer_1\'"></use>\n\n                            </svg> <!-- ico-config -->\n\n                        </div> <!-- config-ico -->\n\n\n\n                    </div> <!-- config-styles -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </div> <!-- ion-styles-explore -->\n\n\n\n    <div class="ion-recommendations-explore" >\n\n        \n\n        <ion-grid class="grid-header-recommendations">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <span class="text-header-section">\n\n                        Recomendações\n\n                    </span><!-- text-header-section -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid><!-- grid-header-recommendations -->\n\n\n\n        <div class="recommendations-content scrollerRecommended" (scroll)="doScrollContent( \'scrollerRecommended\', $event )" >\n\n            <ul class="recommendation-list">\n\n\n\n                <li class="reccommendation-item item-scrollable"  *ngFor="let recommendation of recommendations">\n\n                    <div class="ctrl-recommendation-item" >\n\n\n\n                        <div class="recommendation-mark" >\n\n\n\n                            <div class="recommendation-mark-header" >\n\n                                <div class="mark-header-image" >\n\n                                    <div class="image-header-mark" >\n\n\n\n                                    </div> <!-- image-header-mark -->\n\n                                </div> <!-- mark-header-image -->\n\n                                <div class="mark-header-description" >\n\n                                    <div class="header-description-line" >\n\n                                        <div class="description" >\n\n                                            <span class="text-description title">\n\n                                                {{recommendation.mark}}\n\n                                            </span>\n\n                                        </div> <!-- description -->\n\n                                    </div> <!-- header-description-line -->\n\n                                    <div class="header-description-line" >\n\n                                        <div class="description" >\n\n                                            <span class="text-description description">\n\n                                                Confecção\n\n                                            </span>\n\n                                        </div> <!-- description -->\n\n                                    </div> <!-- header-description-line -->\n\n                                </div> <!-- mark-header-description -->\n\n                                <div class="mark-header-action" >\n\n                                    <button class="button-action-header-mark">\n\n                                        Visitar\n\n                                    </button> <!-- button-action-header-mark -->\n\n                                </div> <!-- mark-header-action -->\n\n                            </div> <!-- recommendation-mark-header -->\n\n                            <div class="recommendation-mark-body" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + recommendation.wallpaper + \')\' }">\n\n                            </div> <!-- recommendation-mark-body -->\n\n\n\n                            <div class="recommendation-mark-footer" >\n\n                                <ul class="recommendation-mark-list-vitrine">\n\n                                    <li class="recommendation-mark-vitrine-item" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/roupa1.jpg)\' }"></li><!-- recommendation-mark-vitrine-item -->\n\n                                    <li class="recommendation-mark-vitrine-item" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/roupa1.jpg)\' }"></li><!-- recommendation-mark-vitrine-item -->\n\n                                    <li class="recommendation-mark-vitrine-item" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/roupa1.jpg)\' }"></li><!-- recommendation-mark-vitrine-item -->\n\n                                </ul><!-- recommendation-mark-list-vitrine -->\n\n                            </div> <!-- recommendation-mark-footer -->\n\n\n\n\n\n                        </div> <!-- recommendation-mark -->\n\n\n\n                    </div> <!-- ctrl-recommendation-item -->\n\n                </li><!-- reccommendation-item -->\n\n\n\n            </ul><!-- recommendation-list -->\n\n        </div> <!-- recommendations-content -->\n\n    </div> <!-- ion-recommendations-explore -->\n\n\n\n    <div class="ion-explore-marks" >\n\n        <ion-grid class="no-padding">\n\n\n\n            <ion-row class="explore-mark" *ngFor="let marca of marcas">\n\n                <ion-col>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-2>\n\n                                <div class="image-mark-explore" >\n\n                                    <div class="img-mark-explore" >\n\n                                        <div class="img-mark" ></div> <!-- img-mark -->\n\n                                    </div> <!-- img-mark-explore -->\n\n                                </div> <!-- image-mark-explore -->\n\n                            </ion-col>\n\n                            <ion-col class="label-mark-explore-cont">\n\n                                <div class="label-mark-explore" >\n\n                                    <div class="text-label-mark-explore" >\n\n                                        <div class="txt-label-mark-explore title" >\n\n                                            {{marca.marca}}\n\n                                        </div> <!-- txt-label-mark-explore -->\n\n                                    </div> <!-- text-label-mark-explore -->\n\n                                    <div class="text-label-mark-explore" >\n\n                                        <div class="txt-label-mark-explore description" >\n\n                                            Há 3 dias\n\n                                        </div> <!-- txt-label-mark-explore -->\n\n                                    </div> <!-- text-label-mark-explore -->\n\n                                </div> <!-- label-mark-explore -->\n\n                            </ion-col> <!-- label-mark-explore-cont -->\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col>\n\n                                <div class="products-mark-explore" >\n\n                                    <ul class="list-products-mark-explore">\n\n                                        <li class="item-product-mark-explore" *ngFor="let produto of marca.produtos">\n\n\n\n                                            <div class="product-mark-image" [ngStyle]="{\'background-image\': \'url(\' + constants.src_img + \'exemples/jaqueta1.jpg)\'}" >\n\n                                                <ul class="colors-product-mark">\n\n                                                    <li class="color-product" [ngStyle]="{\'background-color\': \'#c80114\'}"></li><!-- color-product -->\n\n                                                    <li class="color-product" [ngStyle]="{\'background-color\': \'#1d1d1d\'}"></li><!-- color-product -->\n\n                                                </ul><!-- colors-product-mark -->\n\n                                            </div> <!-- product-mark-image -->\n\n                                            <div class="product-mark-label" >\n\n                                                <span class="product-mark-text">\n\n                                                    Rufed Jacket\n\n                                                </span><!-- product-mark-text -->\n\n                                            </div> <!-- product-mark-label -->\n\n\n\n                                        </li><!-- item-product-mark-explore -->\n\n                                    </ul><!-- list-products-mark-explore -->\n\n                                </div> <!-- products-mark-explore -->\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </ion-col>\n\n            </ion-row><!-- explore-mark -->\n\n\n\n        </ion-grid>\n\n    </div> <!-- ion-explore-marks -->\n\n    \n\n    \n\n<!-- Fim do content da pagina de exploração -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\explore\explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_categoria_categoria__["a" /* CategoriaProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategoriaProvider = (function () {
    function CategoriaProvider(http) {
        this.http = http;
        this.baseApiPath = 'http://localhost/fashon/qrgo/categorias/estilos/';
    }
    CategoriaProvider.prototype.getCategorias = function () {
        return this.http.get(this.baseApiPath);
    };
    CategoriaProvider.prototype.setCategorias = function (body) {
        return this.http.post(this.baseApiPath + 'create', { body: body });
    };
    CategoriaProvider.prototype.getCategoriasSelecionadas = function () {
        return this.http.get(this.baseApiPath + 'categories_selected');
    };
    CategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CategoriaProvider);
    return CategoriaProvider;
}());

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step1_step1__ = __webpack_require__(83);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step3_step3__ = __webpack_require__(173);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step3_step3__ = __webpack_require__(175);
>>>>>>> e03c2b45fb016ef573e998ae534ad2e3d76038b3
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
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
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Step2Page = (function () {
    function Step2Page(navCtrl, navParams, alertCtrl, keyboard, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.keyboard = keyboard;
        this.http = http;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.cnpj = "";
        this.emp = { razao: "", nome: "", bairro: "", endereco: "", numero: "", cidade: "", estado: "" };
        this.stepOk = false;
        /**
         * Função utilizada para retornar ao passo 1 do cadastro
         * @type {() => any} */
        this.backToStep1 = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__step1_step1__["a" /* Step1Page */]);
        }); /** Fim da função de retorno ao passo 1 do cadastro */
        /**
         * Função utilizada para verifica o CNPJ digitado
         * @type {(cnpj: number) => any} - valor do numero do cnpj
         */
        this.keyupCnpj = (function (cnpj) {
            /* Verifica se o CNPJ é real */
            _this.stepOk = ((cnpj == 123) ? true : false);
            _this.getPeople();
            console.log(cnpj);
            if (_this.stepOk) {
                _this.keyboard.close();
            }
        }); /* Fim da função */
        /**
         * Função utilizada para avançar para o Setep 3 Do cadastro do perfil
         * @type {() => any}*/
        this.goToStep3 = (function () {
            /* Verifica se o Passo está preenchido corretamente, ou seja, se o CNPJ foi escrito */
            if (_this.stepOk) {
                /* Caso os campos estejam preenchidos corretamente, o passo poderá ser avançado */
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__step3_step3__["a" /* Step3Page */]);
            }
            else {
                /* Caso os campos não estejam preenchidos corretamente, o passo não poderá ser avançado */
                var alert_1 = _this.alertCtrl.create({
                    title: 'Preencha o CNPJ',
                    subTitle: 'Por favor, preencha o seu CNPJ e verifique se os dados correspondem corretamente.',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }); /* Fim da função de avanço dos passos de cadastro do perfil */
    }
    Step2Page.prototype.getPeople = function () {
        this.http.post('http://localhost/fashon/qrgo/Cadastro/getCaptcha', JSON.stringify({ solicitacao: true })).subscribe(function (res) {
        });
    };
    Step2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step2',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step2\step2.html"*/'<ion-header>\n\n    <div class="header-back" (click)="backToStep1()">\n\n\n\n        <svg class="backpage-ico">\n\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n        </svg> <!-- backpage-ico -->\n\n\n\n    </div> <!-- header-back -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="step-indicator">\n\n\n\n        <span class="dotdot actived"></span>\n\n        <span class="dot-stick actived"></span>\n\n        <span class="dotdot actived rounded"></span>\n\n        <span class="dot-stick"></span>\n\n        <span class="dotdot"></span>\n\n\n\n    </div> <!-- step-indicator -->\n\n\n\n    <h3 class="title-step">Complete</h3> <!-- title-step -->\n\n\n\n    <div class="cad-content-inn">\n\n        <ion-grid>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div class="cad-form-content">\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> CNPJ: </span> <!-- cad-form-label-txt -->\n\n                            <input type="text" [(ngModel)]="cnpj" (keyup)="keyupCnpj( cnpj )" class="cad-form-ctrl" placeholder="Insira o CNPJ">\n\n                        </label><!-- cad-form-label -->\n\n                    </div> <!-- cad-form-content -->\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n\n\n                <ion-grid class="grid-complete-cnpj" [hidden]="!stepOk">\n\n                    <ion-row>\n\n                        <ion-col>\n\n\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Razão Social: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Razão Social" [(ngModel)]="emp.razao" value="" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n\n\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Nome Fantasia: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Nome Fantasia"  [(ngModel)]="emp.nome" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n\n\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Bairro: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Bairro" [(ngModel)]="emp.bairro" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n\n\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Endereço: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Endereço" [(ngModel)]="emp.endereco" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n\n\n                        </ion-col>\n\n\n\n                        <ion-col col-4>\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Nº: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Nº" [(ngModel)]="emp.numero" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n\n\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n\n\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Cidade: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Cidade" [(ngModel)]="emp.cidade" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n\n\n                        </ion-col>\n\n\n\n                        <ion-col col-4>\n\n                            <div class="cad-form-content">\n\n                                <label class="cad-form-label">\n\n                                    <span class="cad-form-label-txt"> Estado: </span> <!-- cad-form-label-txt -->\n\n                                    <input type="text" class="cad-form-ctrl" placeholder="Estado" [(ngModel)]="emp.estado" readonly>\n\n                                </label><!-- cad-form-label -->\n\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n\n\n\n                    </ion-row>\n\n\n\n                </ion-grid>\n\n\n\n            </ion-row>\n\n\n\n        </ion-grid>\n\n    </div> <!-- cad-content-inn -->\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <div class="footer-steps">\n\n\n\n        <div class="next-step-action" [ngClass]="{ \'allowed\': stepOk }" (click)="goToStep3()">\n\n            <span class="next-step-label">\n\n                Próximo\n\n            </span> <!-- next-stap-label -->\n\n            <div class="nextstep-icon">\n\n                <span class="caret-body"></span>\n\n                <span class="caret-direction"></span>\n\n            </div> <!-- nextstep-icon -->\n\n        </div> <!-- next-stap-action -->\n\n\n\n    </div> <!-- footer-steps -->\n\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step2\step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], Step2Page);
    return Step2Page;
}());

//# sourceMappingURL=step2.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map