webpackJsonp([0],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/themes/prototype/feed/feed.module": [
		158
	],
	"../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module": [
		161
	],
	"../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module": [
		166
	],
	"../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module": [
		165
	],
	"../pages/themes/prototype/login/login.module": [
		167
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(84);
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
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPass_1PageModule", function() { return ForgotPass_1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_1__ = __webpack_require__(162);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_1__["a" /* ForgotPass_1Page */]),
            ],
        })
    ], ForgotPass_1PageModule);
    return ForgotPass_1PageModule;
}());

//# sourceMappingURL=forgot-pass-1.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPass_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_pass_2_forgot_pass_2__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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
    function ForgotPass_1Page(navCtrl, navParams, alertCtrl, storage, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        /**
         * Função utilizada para "voltar" uma pagina do aplicativo */
        this.backPage = (function () {
            /* Remove uma página do controller de navegação */
            _this.navCtrl.pop();
        });
        /* Fim da função de backPage */
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
                var data_send = { user_login: _this.email_to_recover };
                //configura modal de load para reeinviar codigo
                var loader_1 = _this.loadingCtrl.create({ content: "Autenticando o e-mail..." });
                //ativa o modal
                loader_1.present();
                _this.http.post(_this.constants.api_path + 'login/start_recover', __WEBPACK_IMPORTED_MODULE_6_jquery__["param"](data_send)).subscribe(function (response) {
                    //destroe o modal
                    loader_1.dismissAll();
                    var res = response;
                    _this.response = JSON.parse(res._body);
                    if (_this.response.success) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_pass_2_forgot_pass_2__["a" /* ForgotPass_2Page */], { user_login: _this.email_to_recover });
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'QRGO',
                            subTitle: 'E-mail não cadastrado.',
                            buttons: ['Ok']
                        });
                        alert_1.present();
                    }
                }, function (erro) {
                    loader_1.dismissAll();
                    var alert = _this.alertCtrl.create({
                        title: 'QRGO',
                        subTitle: 'Erro interno,<br> tente novamente mais tarde.',
                        buttons: ['Ok']
                    });
                    alert.present();
                });
                // console.log(this.storage.get('user_logged'));
                // this.navCtrl.push( ForgotPass_2Page )
            }
            else {
                /* Caso o email digitado não seja válido */
                /* Exibe o alerta dizendo que o email é necessário */
                var alert_2 = _this.alertCtrl.create({
                    title: 'Email necessário',
                    subTitle: 'Por favor, insira um email válido para prosseguir com o processo de recuperação de senha.',
                    buttons: ['Ok']
                });
                alert_2.present();
                /* Fim do alerta de email necessário */
            }
            /* Fim da verificação de validade de Email */
        });
    }
    ForgotPass_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass-1',template:/*ion-inline-start:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.html"*/'<ion-header>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-auto class="col-icon-back" (click)="backPage()">\n                <ion-icon name="ios-arrow-back" class="icon-back"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col> \n                <h3 class="title-page">\n                    Recuperar Senha.\n                </h3><!-- title-page -->\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p class="page-description">\n                    Atenção: Se você perdeu, ou não lembra mais a sua senha de acesso, preencha este formulário para iniciar o processo para gerar uma nova senha para você!\n                </p><!-- page-description -->\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <span class="label-form">\n                Insira o seu Email\n                </span><!-- label-form -->\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                    <input type="email" [(ngModel)]="email_to_recover" (keyup)="validateEmail( email_to_recover )" class="recover-form" placeholder="exemple@exemple.com">\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n              <button ion-button class="pink-button align-center" (click)="sendEmail (  )"> Enviar </button>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!--  remoção do botão proximo para adição do botão enviar\n    <ion-footer>\n        <div class="footer-steps" >\n\n            <div class="next-step-action" [ngClass]="{\'allowed\': valid_email }" (click)="sendEmail()">\n                <span class="next-step-label">\n                    Próximo\n                </span>  next-stap-label\n                <div class="nextstep-icon" >\n                    <span class="caret-body"></span>\n                    <span class="caret-direction"></span>\n                </div>  nextstep-icon\n            </div>  next-stap-action \n            \n        </div>  footer-steps\n    </ion-footer>    \n-->'/*ion-inline-end:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], ForgotPass_1Page);
    return ForgotPass_1Page;
}());

//# sourceMappingURL=forgot-pass-1.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPass_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_3_forgot_pass_3__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
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
    function ForgotPass_2Page(navCtrl, navParams, alertCtrl, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.constants = __WEBPACK_IMPORTED_MODULE_3__config_Constants__["a" /* Constants */];
        this.validCode = true;
        /**
         * Função utilizada para "voltar" uma pagina do aplicativo */
        this.backPage = (function () {
            /* Remove uma página do controller de navegação */
            _this.navCtrl.pop();
        });
        //reenviar código de confirmação 
        this.reviewCode = (function () {
            //configura modal de load para reeinviar codigo
            var loader = _this.loadingCtrl.create({ content: "Reenviando código..." });
            //ativa o modal
            loader.present();
            _this.http.post(_this.constants.api_path + 'login/start_recover', __WEBPACK_IMPORTED_MODULE_5_jquery__["param"]({ user_login: _this.navParams.get('user_login') })).subscribe(function (response) {
                var res = response;
                _this.response = JSON.parse(res._body);
                //destroy o modal de load
                loader.dismissAll();
                var alert = _this.alertCtrl.create({
                    title: 'QRGO',
                    subTitle: 'Código enviado para: <br><br>' + _this.navParams.get('user_login'),
                    buttons: ['Ok']
                });
                alert.present();
            }, function (error) {
                loader.dismissAll();
                //modal de erro na autenticação
                var alert = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: 'Tente novamente mais tarde.',
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
        /* Fim da função de backPage */
        /**
         * Função utilizada para confirmar o código de verificação do email */
        this.confirmCode = (function () {
            /* Verifica se o código digitado é valido */
            if (_this.validCode) {
                var user_login = _this.navParams.get('user_login');
                var data_send = { code: _this.code, user_login: user_login };
                _this.http.post(_this.constants.api_path + 'login/do_recover', __WEBPACK_IMPORTED_MODULE_5_jquery__["param"](data_send)).subscribe(function (response) {
                    var res = response;
                    _this.response = JSON.parse(res._body);
                    if (_this.response.success) {
                        /* Caso valido, prossegue com o processo */
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_3_forgot_pass_3__["a" /* ForgotPass_3Page */], { access: _this.response.access });
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Código incorreto',
                            subTitle: _this.response.text,
                            buttons: ['Ok']
                        });
                        alert_1.present();
                    }
                });
            }
            else {
                /* Caso o código digitado não seja válido */
                /* Exibe o alerta dizendo que o código é necessário */
                var alert_2 = _this.alertCtrl.create({
                    title: 'Código Inválido',
                    subTitle: 'Por favor, insira um código válido para prosseguir com o processo de recuperação de senha.',
                    buttons: ['Ok']
                });
                alert_2.present();
                /* Fim do alerta de codigo necessário */
            }
            /* Fim da verificação de validade de código */
        });
    }
    ForgotPass_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass-2',template:/*ion-inline-start:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.html"*/'<ion-header>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-auto class="col-icon-back" (click)="backPage()">\n                <ion-icon name="ios-arrow-back" class="icon-back"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <h3 class="title-page">\n                    Código de Confirmação\n                </h3><!-- title-page -->\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p class="page-description">\n                    Um código de verificação foi enviado ao seu email. Por favor, digite o código aqui para continuar o\n                    processo! estamos quase lá!\n                </p><!-- page-description -->\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n          <span class="label-form">\n          Código de Confirmação\n          </span><!-- label-form -->\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <input type="teste" [(ngModel)]="code" class="recover-form" placeholder="Código">\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <span class="resend-code" (click)="reviewCode()"> Re-enviar código </span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n              <button ion-button class="pink-button align-center" [ngClass]="{\'allowed\': true }" (click)="confirmCode()"> Confirmar </button>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n\n</ion-content>\n<!--\n    <ion-footer>\n        <div class="footer-steps">\n\n            <div class="next-step-action" [ngClass]="{\'allowed\': true }" (click)="confirmCode()">\n                <span class="next-step-label">\n                    Confirmar!\n                </span>  next-stap-label \n                <div class="nextstep-icon">\n                    <span class="caret-body"></span>\n                    <span class="caret-direction"></span>\n                </div>  nextstep-icon \n            </div>  next-stap-action \n\n        </div>  footer-steps \n    </ion-footer>\n-->'/*ion-inline-end:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ForgotPass_2Page);
    return ForgotPass_2Page;
}());

//# sourceMappingURL=forgot-pass-2.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPass_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(26);
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
    function ForgotPass_3Page(navCtrl, navParams, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.constants = __WEBPACK_IMPORTED_MODULE_3__config_Constants__["a" /* Constants */];
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
            if (_this.user_pass == _this.confirm_pass) {
                var access = _this.navParams.get('access');
                var access_id = access.access_id;
                var access_secret = access.access_secret;
                var data_send = { access_id: access_id, access_secret: access_secret, user_pass: _this.user_pass };
                _this.http.post(_this.constants.api_path + 'login/update_pass', __WEBPACK_IMPORTED_MODULE_4_jquery__["param"](data_send)).subscribe(function (response) {
                    var res = response;
                    _this.response = JSON.parse(res._body);
                    if (_this.response.success) {
                        /* Caso valido, prossegue com o processo */
                        var alert_1 = _this.alertCtrl.create({
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
                        alert_1.present();
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Código incorreto',
                            subTitle: _this.response.text,
                            buttons: ['Ok']
                        });
                        alert_2.present();
                    }
                });
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Senhas diferentes',
                    subTitle: 'Por favor, confira se as senhas foram digitadas iguais',
                    enableBackdropDismiss: false,
                    buttons: ['Ok']
                });
                alert_3.present();
            }
        });
    }
    ForgotPass_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass-3',template:/*ion-inline-start:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.html"*/'<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-auto class="col-icon-back" (click)="backPage()">\n        <ion-icon name="ios-arrow-back" class="icon-back"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3 class="title-page">\n          Novas Senhas\n        </h3><!-- title-page -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class="page-description">\n          Ultimo passo! para concluir este processo, Digite uma nova senha para que você possa efetuar o login novamente.\n        </p><!-- page-description -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n          <span class="label-form">\n          Digite sua nova senha.\n          </span><!-- label-form -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <span class="label-new-pass">Nova senha:</span>\n        <input type="password" class="recover-form" [(ngModel)]="user_pass" placeholder="Nova senha">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="label-new-pass">Confirme sua nova senha:</span>\n        <input type="password" class="recover-form" [(ngModel)]="confirm_pass" placeholder="Confirmar Senha">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button class="pink-button align-center" [ngClass]="{\'allowed\': true }" (click)="finishNewPass()"> Enviar </button>\n      </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n<!-- \n  <ion-footer>\n    <div class="footer-steps" >\n\n      <div class="next-step-action" [ngClass]="{\'allowed\': true }" (click)="finishNewPass()" >\n              <span class="next-step-label">\n                  Terminar!\n              </span>  next-stap-label \n        <div class="nextstep-icon" >\n          <span class="caret-body"></span>\n          <span class="caret-direction"></span>\n        </div>  nextstep-icon \n      </div>  next-stap-action \n\n    </div>  footer-steps \n  </ion-footer>\n-->'/*ion-inline-end:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], ForgotPass_3Page);
    return ForgotPass_3Page;
}());

//# sourceMappingURL=forgot-pass-3.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPass_3PageModule", function() { return ForgotPass_3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_3__ = __webpack_require__(164);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_3__["a" /* ForgotPass_3Page */]),
            ],
        })
    ], ForgotPass_3PageModule);
    return ForgotPass_3PageModule;
}());

//# sourceMappingURL=forgot-pass-3.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPass_2PageModule", function() { return ForgotPass_2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_pass_2__ = __webpack_require__(163);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_pass_2__["a" /* ForgotPass_2Page */]),
            ],
        })
    ], ForgotPass_2PageModule);
    return ForgotPass_2PageModule;
}());

//# sourceMappingURL=forgot-pass-2.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(50);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_feed_feed_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_feed_feed__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_login_login_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_themes_prototype_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_categoria_categoria__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_forgot_pass_forgot_pass_1_forgot_pass_1_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_forgot_pass_forgot_pass_2_forgot_pass_2_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_themes_prototype_forgot_pass_forgot_pass_3_forgot_pass_3_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_post_post__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_profile_ProfileProvider__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__ = __webpack_require__(260);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* Qrgo_prototype */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_feed_feed_module__["FeedPageModule"],
                /* Páginas relacionadas ao Perfil */
                /* Paginas relacionadas ao sistema */
                /* Paginas relacionadas ao processo de recuperação de senha */
                __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_forgot_pass_forgot_pass_1_forgot_pass_1_module__["ForgotPass_1PageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_forgot_pass_forgot_pass_2_forgot_pass_2_module__["ForgotPass_2PageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_themes_prototype_forgot_pass_forgot_pass_3_forgot_pass_3_module__["ForgotPass_3PageModule"],
                /* Paginas relacionadas aos produtos */
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'fashon',
                    driverOrder: ['sqlite', 'websql', 'indexeddb']
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* Qrgo_prototype */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/themes/prototype/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module#ForgotPass_1PageModule', name: 'ForgotPass_1Page', segment: 'forgot-pass-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module#ForgotPass_3PageModule', name: 'ForgotPass_3Page', segment: 'forgot-pass-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module#ForgotPass_2PageModule', name: 'ForgotPass_2Page', segment: 'forgot-pass-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* Qrgo_prototype */],
                __WEBPACK_IMPORTED_MODULE_10__pages_themes_prototype_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_feed_feed__["a" /* FeedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__providers_profile_ProfileProvider__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_categoria_categoria__["a" /* CategoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_19__providers_post_post__["a" /* PostProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["a" /* FileTransfer */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qrgo_prototype; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_themes_prototype_login_login__ = __webpack_require__(50);
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
    function Qrgo_prototype(platform, statusBar, keyboard, splashScreen) {
        this.platform = platform;
        this.keyboard = keyboard;
        // private storage: string = localStorage.getItem('qrgo_application');
        // private session: any = JSON.parse(this.storage);
        // private user_logged = (localStorage.getItem('user_logged') == '' ? null : JSON.parse(localStorage.getItem('user_logged')));
        //
        // rootPage: any = ((this.session == null || this.session.first_access != false) ? LoginPage : (this.user_logged == null ? LoginPage : FeedPage));
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_themes_prototype_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            statusBar.hide();
            statusBar.overlaysWebView(false);
            splashScreen.hide();
        });
    }
    Qrgo_prototype.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.keyboard.disableScroll(true);
        });
    };
    Qrgo_prototype.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.keyboard.disableScroll(false);
        });
    };
    Qrgo_prototype = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/nc5app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/nc5app/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Qrgo_prototype);
    return Qrgo_prototype;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(32);
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
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
    }
    CategoriaProvider.prototype.getCategorias = function () {
        return this.http.get(this.constants.api_path + 'categorias/estilos/');
    };
    CategoriaProvider.prototype.setCategorias = function (body) {
        return this.http.post(this.constants.api_path + 'categorias/estilos/create', { body: body });
    };
    CategoriaProvider.prototype.getCategoriasSelecionadas = function () {
        return this.http.get(this.constants.api_path + 'categorias/estilos/categories_selected');
    };
    CategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoriaProvider);
    return CategoriaProvider;
}());

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(35);
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





/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostProvider = (function () {
    function PostProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
    }
    PostProvider.prototype.getPosts = function (access) {
        return this.http.post(this.constants.api_path + 'post', __WEBPACK_IMPORTED_MODULE_4_jquery__["param"](access));
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])();
var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        this._values = {
            'ownProfile': true,
            'seenProfile': false
        };
        this.get = (function (value) {
            switch (value) {
                case 'ownProfile':
                    return _this._values.ownProfile;
                case 'seenProfile':
                    return _this._values.seenProfile;
                default:
                    break;
            }
        });
        /**
         * Função utilizada para definir um valor padrõa aos valores internos do provider */
        this.set = (function (field, value) {
            /* Inicia um bloco de condicionais para verificar qual o valor que deve ser alterado */
            /* Cada case é um indice da variável "_values" */
            switch (field) {
                case 'ownProfile':
                    _this._values.ownProfile = value;
                    break;
                case 'seenProfile':
                    _this._values.seenProfile = value;
                    break;
                default:
                    break;
            } /* Fim do bloco de condicionais  */
        }); /* Fim da função utilizada para definir um valor padrão para os valores internos do provider */
    }
    return ProfileProvider;
}());

//# sourceMappingURL=ProfileProvider.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    'base_url': './',
    'theme': 'prototype',
    //local
    'api_path': 'http://localhost/nc5/',
    'src_img': './assets/themes/prototype/img/',
    'src_img_posts': '../uploads/',
    'src_svg': './assets/themes/prototype/img/svg/',
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass_1_forgot_pass_1__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed_feed__ = __webpack_require__(84);
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
    function LoginPage(navCtrl, navParams, toastCtrl, http, storage, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.login = {};
        this.logindata = {
            user_login: "",
            user_pass: ""
        };
        /** Fim do constructor da classe */
        /**
         * Função utilizada para redirecionar o usuário novamente à pagina de slides */
        this.goBackSlides = (function () {
        });
        /* Fim da função de redirecionamento para os slides */
        /* Fim da função de regdirecionamento para a página de cadastro */
        /**
         * Função utilizada para realizar o login do usuário */
        this.doLogin = (function () {
            //this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_send = _this.logindata;
            _this.http.post(_this.constants.api_path + 'login/do_login', __WEBPACK_IMPORTED_MODULE_5_jquery__["param"](data_send), options).subscribe(function (response) {
                var res = response;
                _this.login = JSON.parse(res._body);
                var login = _this.login;
                console.log(login.user);
                if (login.success) {
                    _this.storage.set('user_logged', login.user).then(function () {
                        localStorage.setItem('user_logged', JSON.stringify(login)); // E no localStorage
                    });
                    console.log(localStorage.getItem('user_logged'));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__feed_feed__["a" /* FeedPage */], { 'id': login.user }, { animate: true, direction: 'forward' });
                }
                else {
                    var __this = _this;
                    setTimeout(function () {
                        var text = __this.login;
                        text.text = "";
                    }, 3000);
                }
            });
        });
        /* Fim da função de realização do login do usuário */
        /**
         * Função para dar inicio ao processo de recuperar senha
         * @type {() => void}
         */
        this.recoverPass = (function () {
            /**
             * Redireciona o usuário para a primeira págimna do processo */
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass_1_forgot_pass_1__["a" /* ForgotPass_1Page */]);
        });
        console.log(this.storage.get('user_logged'));
        platform.ready().then(function () {
            // console.log(user_logged);
            //
            // storage.set('user_logged', null);
            //
            // storage.get('user_logged').then((user_logged) => {
            //
            //     console.log(user_logged);
            //
            //     if (user_logged !== null) {
            //
            //         console.log(user_logged.user_id);
            //
            //         if (user_logged.user_id) {
            //             console.log(user_logged);
            //             this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
            //         }
            //     }
            //
            // });
        });
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/login/login.html"*/'<div class="login-page">\n\n\n    <div class="content-login-form">\n\n        <h3 class="welcome-title">Bem Vindo</h3>\n\n\n\n        <div class="content-form-login">\n            <div class="form-cont pdg-b20">\n                <input type="text" class="form-ctrl" placeholder="E-mail" [(ngModel)]="logindata.user_login">\n            </div> <!-- form-cont -->\n            <div class="form-cont">\n                <input type="password" class="form-ctrl" placeholder="Senha" [(ngModel)]="logindata.user_pass">\n            </div> <!-- form-cont -->\n\n            <p class="forgot-pass"> {{ login.text }} </p>\n\n            <div class="form-cont">\n                <button [disabled]="!logindata.user_login || !logindata.user_pass" class="login-btn" (click)="doLogin()" > Entrar</button>\n            </div> <!-- form-cont -->\n\n\n        </div> <!-- content-form-login -->\n\n    </div> <!-- content-login-form -->\n\n\n</div> <!-- login-page -->'/*ion-inline-end:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(160);
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
    function FeedPage(navCtrl, navParams, http, transfer, file) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.files = [];
        this.fileTransfer = this.transfer.create();
        this.id = navParams.get("id");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.http.post(this.constants.api_path + 'manager/comercial/map/getFiles', __WEBPACK_IMPORTED_MODULE_4_jquery__["param"]({ 'id': this.id, 'like': '' }), options).subscribe(function (response) {
            var res = response;
            var file = JSON.parse(res._body);
            _this.files = file.files;
        });
    }
    FeedPage.prototype.download = function (fileD, fileName) {
        this.fileTransfer.download(fileD, this.file.dataDirectory + fileName).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            // handle error
        });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/feed/feed.html"*/'<ion-header class="content-header">\n    <div class="content-title"> Meus Arquivos</div>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let file of files" col-6 >\n        <div class="content-file" (click)="download(constants.api_path + \'public/assets/metronic/app/media/img/uploads/\' + file.file_link, file.nome)">\n          <div class="img-file"\n               ngStyle="{\'background-image\': \'url(\'+  constants .api_path + \'public/assets/metronic/app/media/img/icons/\'+ file.file_icon  + \')\'}"\n               [ngStyle]="{\'background-image\': \'url(\'+  constants .api_path + \'public/assets/metronic/app/media/img/icons/\'+ file.file_icon  + \')\'}">\n          </div>\n          <div class="info-file">{{file.file_nome}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/nc5app/src/pages/themes/prototype/feed/feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map