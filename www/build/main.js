webpackJsonp([0],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/themes/prototype/cadastro/confirm-cad/confirm-cad.module": [
		157
	],
	"../pages/themes/prototype/cadastro/step1/step1.module": [
		159
	],
	"../pages/themes/prototype/cadastro/step2/step2.module": [
		162
	],
	"../pages/themes/prototype/cadastro/step3/step3.module": [
		163
	],
	"../pages/themes/prototype/explore/explore.module": [
		164
	],
	"../pages/themes/prototype/feed/feed.module": [
		167
	],
	"../pages/themes/prototype/gostos/gostos.module": [
		168
	],
	"../pages/themes/prototype/login/login.module": [
		169
	],
	"../pages/themes/prototype/slides/slides.module": [
		170
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmCadPageModule", function() { return ConfirmCadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_cad__ = __webpack_require__(158);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_cad__["a" /* ConfirmCadPage */]),
            ],
        })
    ], ConfirmCadPageModule);
    return ConfirmCadPageModule;
}());

//# sourceMappingURL=confirm-cad.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmCadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    function ConfirmCadPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
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
    }
    ConfirmCadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-cad',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\confirm-cad\confirm-cad.html"*/'<ion-content>\n\n  <div class="content-center" >\n\n    <h3 class="page-title">Confirme sua conta</h3>\n    <p class="page-description">Confira seu e-mail ou mensagem sms para confirmar sua conta para seguir usar o aplicativo da melhor forma possível!</p>\n    <div class="cont-confirmcode" >\n      <div class="cad-form-content">\n        <label class="cad-form-label">\n          <input type="text" class="cad-form-ctrl text-center" placeholder="Codigo" >\n        </label><!-- cad-form-label -->\n      </div> <!-- cad-form-content -->\n    </div> <!-- cont-confirmcode -->\n\n  </div> <!-- content-center -->\n\n</ion-content>\n\n<ion-footer>\n  <div class="footer-steps">\n\n    <div class="next-step-action allowed" (click)="skipCad()">\n            <span class="next-step-label">\n                Pular\n            </span> <!-- next-stap-label -->\n      <div class="nextstep-icon">\n        <span class="caret-body"></span>\n        <span class="caret-direction"></span>\n      </div> <!-- nextstep-icon -->\n    </div> <!-- next-stap-action -->\n\n  </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\confirm-cad\confirm-cad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfirmCadPage);
    return ConfirmCadPage;
}());

//# sourceMappingURL=confirm-cad.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1PageModule", function() { return Step1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step1__ = __webpack_require__(79);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step1__["a" /* Step1Page */]),
            ]
        })
    ], Step1PageModule);
    return Step1PageModule;
}());

//# sourceMappingURL=step1.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GostosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
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
    function GostosPage(navCtrl, navParams, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.actived = [];
        this.actived1 = [];
        this.actived2 = [];
        this.actived3 = [];
        this.actived4 = [];
        this.intActived = 0;
        this.show8 = false;
        this.a = 0;
        this.estilos = [
            {
                id: '1',
                nome: "VERÃO",
            },
            {
                id: '2',
                nome: "INVERNO",
            },
            {
                id: '3',
                nome: "JEANS",
            },
            {
                id: '4',
                nome: "SPORT",
            },
            {
                id: '5',
                nome: "CASAMENTO",
            },
            {
                id: '6',
                nome: "FEMININO",
            },
            {
                id: '7',
                nome: "GRUNGE",
            },
            {
                id: '8',
                nome: "MASCULINO",
            }, {
                id: '9',
                nome: "ROUPAS EM PROMOÇÃO",
            },
            {
                id: '10',
                nome: "CASUAL",
            }
        ];
        this.subEstilo = [
            { 1: [{
                        id: '11',
                        nome: "CALÇA",
                        idEstilo: '1'
                    },
                    {
                        id: '12',
                        nome: "CAMISA",
                        idEstilo: '1'
                    },
                    {
                        id: '13',
                        nome: "BLUSA",
                        idEstilo: '1'
                    }],
                8: [{
                        id: '14',
                        nome: "CALÇA",
                        idEstilo: '8'
                    },
                    {
                        id: '15',
                        nome: "CAMISA",
                        idEstilo: '8'
                    },
                    {
                        id: '16',
                        nome: "BLUSA",
                        idEstilo: '8'
                    }] }
        ];
        this.rowNum = 0; //counter to iterate over the rows in the grid
        this.grid = [];
        this.colNum = [];
        this.closeMeModal = (function () {
            if (_this.actived.length > 0)
                _this.viewCtrl.dismiss();
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
        this.teste();
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
    GostosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gostos',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\gostos\gostos.html"*/'<!--\n\n  Generated template for the GostosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div class="content-card-estilo">\n\n        <ion-card class="card-boy-estilo">\n\n            <div class="icon-user-type">\n\n\n\n                <svg class="ico-config">\n\n                    <use [attr.xlink:href]="constants.src_svg + \'boy.svg#Layer_1\'"></use>\n\n                </svg> <!-- ico-config -->\n\n\n\n            </div> <!-- icon-user-type -->\n\n            <div class="text-icon">Qual é seu estilo?</div>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-grid style="padding-top: 12px;">\n\n\n\n        <ion-row class="row-estilo " *ngFor="let num of colNum" center>\n\n            <div *ngFor="let num2 of colNum">\n\n                <div *ngIf="grid[num]">\n\n                    <div *ngFor="let data of grid[num][num2]">\n\n                        <ion-col col-auto style="  vertical-align: middle;\n\n  line-height: normal;">\n\n                            <span text-align="center" class="btn-estilo "\n\n                                  [ngClass]="{ \'actived-type\': actived.indexOf(data.id) > -1 && actived1.indexOf(data.id) > -1, \'actived-type2\': actived.indexOf(data.id) > -1  && actived2.indexOf(data.id) > -1,\'actived-type3\': actived.indexOf(data.id) > -1  && actived3.indexOf(data.id) > -1,\'actived-type4\': actived.indexOf(data.id) > -1  && actived4.indexOf(data.id) > -1}"\n\n                                  (click)="defineActived(data.id)">\n\n                                <div text-align="center" class="text-btn-estilo">\n\n                                    {{data.nome}}\n\n                                </div>\n\n                                <div text-align="center" class="btn-confir wrapper">\n\n                                    <svg [ngClass]="{\'contents-col-sub-hide\': actived.indexOf(data.id) < 0, \'contents-col-sub\': actived.indexOf(data.id) > -1}"\n\n                                         class="svg-ico-usertype contents-col-sub">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'confirmar.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- svg-ico-usertype -->\n\n                                </div>\n\n                            </span>\n\n                        </ion-col>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div *ngFor="let num2 of colNum">\n\n                <div *ngIf="grid[num]">\n\n                    <div *ngFor="let data of grid[num][num2]">\n\n                        <div [hidden]="actived.indexOf(data.id) < 0" *ngIf="subEstilo[0][data.id]">\n\n                            <ion-row class="row-estilo sliderIn" center>\n\n                                <div>\n\n                                    <ion-col col-auto style="  vertical-align: middle;\n\n  line-height: normal;" *ngFor="let subData of subEstilo[0][data.id]">\n\n                                        <span class="btn-estilo"\n\n                                              [ngClass]="{ \'actived-type\': actived.indexOf(subData.idEstilo) > -1 && actived1.indexOf(subData.idEstilo) > -1, \'actived-type2\': actived.indexOf(subData.idEstilo) > -1  && actived2.indexOf(subData.idEstilo) > -1,\'actived-type3\': actived.indexOf(subData.idEstilo) > -1  && actived3.indexOf(subData.idEstilo) > -1,\'actived-type4\': actived.indexOf(subData.idEstilo) > -1  && actived4.indexOf(subData.idEstilo) > -1}"\n\n                                              (click)="defineActived(subData.id)">\n\n                                            <div text-align="center" class="btn-confir wrapper">\n\n                                            <div class="text-btn-estilo">{{subData.nome}}</div>\n\n                                            </div>\n\n                                            <div text-align="center" class="btn-confir wrapper">\n\n                                    <svg [ngClass]="{\'contents-col-sub-hide\': actived.indexOf(subData.id) < 0, \'contents-col-sub\': actived.indexOf(subData.id) > -1}"\n\n                                         class="svg-ico-usertype contents-col-sub">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'confirmar.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- svg-ico-usertype -->\n\n                                </div>\n\n                                        </span>\n\n                                    </ion-col>\n\n                                </div>\n\n                            </ion-row>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <div class="footer-steps">\n\n\n\n        <div class="next-step-action" [ngClass]="{\'allowed\': actived.length > 0}" (click)="closeMeModal()">\n\n            <span class="next-step-label">\n\n                Próximo\n\n            </span> <!-- next-stap-label -->\n\n            <div class="nextstep-icon">\n\n                <span class="caret-body"></span>\n\n                <span class="caret-direction"></span>\n\n            </div> <!-- nextstep-icon -->\n\n        </div> <!-- next-stap-action -->\n\n\n\n    </div> <!-- footer-steps -->\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\gostos\gostos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], GostosPage);
    return GostosPage;
}());

//# sourceMappingURL=gostos.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step2_step2__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_cad_confirm_cad__ = __webpack_require__(158);
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
            selector: 'page-step3',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step3\step3.html"*/'<ion-header>\n\n    <div class="header-back" (click)="backToStep2()">\n\n\n\n        <svg class="backpage-ico">\n\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n        </svg> <!-- backpage-ico -->\n\n\n\n    </div> <!-- header-back -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="step-indicator">\n\n\n\n        <span class="dotdot actived"></span>\n\n        <span class="dot-stick actived"></span>\n\n        <span class="dotdot actived"></span>\n\n        <span class="dot-stick actived"></span>\n\n        <span class="dotdot actived rounded"></span>\n\n\n\n    </div> <!-- step-indicator -->\n\n\n\n    <h3 class="title-step">Finalizar Cadastro</h3> <!-- title-step -->\n\n\n\n    <div class="cad-content-inn">\n\n        <ion-grid>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Username: </span> <!-- cad-form-label-txt -->\n\n                            <input type="text" class="cad-form-ctrl" placeholder="Username">\n\n                        </label><!-- cad-form-label -->\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Senha: </span> <!-- cad-form-label-txt -->\n\n                            <input type="password" [(ngModel)]="password" (keyup)="checkPass()" class="cad-form-ctrl" placeholder="Senha">\n\n                        </label><!-- cad-form-label -->\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n\n\n                        <label class="cad-form-label icon-right" [ngClass]="{ \'checked-icon\': passwordsValiable }">\n\n                            <span class="cad-form-label-txt"> Confirmar Senha: </span> <!-- cad-form-label-txt -->\n\n                            <input type="password" [(ngModel)]="confirmPassword" (keyup)="checkPass()" class="cad-form-ctrl" placeholder="Confirmar Senha">\n\n                            <ion-icon name="checkmark-circle"></ion-icon>\n\n                        </label><!-- cad-form-label -->\n\n\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Email: </span> <!-- cad-form-label-txt -->\n\n                            <input type="email" class="cad-form-ctrl" placeholder="Email">\n\n                        </label><!-- cad-form-label -->\n\n\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <div class="cad-form-content">\n\n\n\n                        <label class="cad-form-label">\n\n                            <span class="cad-form-label-txt"> Telefone: </span> <!-- cad-form-label-txt -->\n\n                            <input type="text" class="cad-form-ctrl" placeholder="Telefone">\n\n                        </label><!-- cad-form-label -->\n\n\n\n                    </div> <!-- cad-form-content -->\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n\n\n                    <button class="button-finish" (click)="cadFinish()"> Pronto! </button>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-grid>\n\n    </div> <!-- cad-content-inn -->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step3\step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Step3Page);
    return Step3Page;
}());

//# sourceMappingURL=step3.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2PageModule", function() { return Step2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step2__ = __webpack_require__(82);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step2__["a" /* Step2Page */]),
            ],
        })
    ], Step2PageModule);
    return Step2PageModule;
}());

//# sourceMappingURL=step2.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step3__ = __webpack_require__(161);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__step3__["a" /* Step3Page */]),
            ],
        })
    ], Step3PageModule);
    return Step3PageModule;
}());

//# sourceMappingURL=step3.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_share_module__ = __webpack_require__(165);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__explore__["a" /* ExplorePage */]),
                __WEBPACK_IMPORTED_MODULE_3__config_share_module__["a" /* SharedModule */]
            ]
        })
    ], ExplorePageModule);
    return ExplorePageModule;
}());

//# sourceMappingURL=explore.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_menu_bottom_menu_bottom__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_qrgo_header_qrgo_header__ = __webpack_require__(266);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__components_menu_bottom_menu_bottom__["a" /* MenuBottomComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__components_qrgo_header_qrgo_header__["a" /* QrgoHeaderComponent */])
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(265);
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
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = (function () {
    function FeedPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
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
        this.changeFilter = (function (event) {
            var $caret = __WEBPACK_IMPORTED_MODULE_3_jquery__(_this.filterCaret.nativeElement);
            var $filter = __WEBPACK_IMPORTED_MODULE_3_jquery__(event.path[0]);
            var dimensions = { w: $filter.width(), x: $filter.position().left };
            $caret.css({ width: dimensions.w + 'px', left: dimensions.x + 'px' });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('filterCaret'),
        __metadata("design:type", Object)
    ], FeedPage.prototype, "filterCaret", void 0);
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\feed\feed.html"*/'<!-- Start of footer Content -->\n\n<ion-header>\n\n    <qr-header></qr-header>\n\n</ion-header>\n\n<!-- End of header Default -->\n\n<!-- Content of feed page -->\n\n<ion-content>\n\n\n\n    <!-- Start of feed -->\n\n    <div class="feed-background"></div> <!-- feed-background -->\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n\n\n                <div class="feed-post-something">\n\n\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col class="post-something">\n\n                                Publique Algo...\n\n                            </ion-col><!-- post-something -->\n\n                            <ion-col col-auto>\n\n                                <div class="feed-publication-shortcut">\n\n                                    <svg class="ico-publication-shortcut">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'hanger.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- ico-publication-shortcut -->\n\n                                </div> <!-- feed-publication-shortcut -->\n\n                            </ion-col>\n\n                            <ion-col col-auto>\n\n                                <div class="feed-publication-shortcut">\n\n                                    <svg class="ico-publication-shortcut">\n\n                                        <use [attr.xlink:href]="constants.src_svg + \'picture.svg#Layer_1\'"></use>\n\n                                    </svg> <!-- ico-publication-shortcut -->\n\n                                </div> <!-- feed-publication-shortcut -->\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n\n\n                </div> <!-- feed-post-something -->\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <div class="feed-filter">\n\n                    <ion-grid>\n\n                        <ion-row>\n\n\n\n                            <ion-col (click)="changeFilter( $event )" [class]="{\'actived-filter\': filter == 1  }">\n\n                                Todos\n\n                            </ion-col>\n\n                            <ion-col (click)="changeFilter( $event )">\n\n                                Confecções\n\n                            </ion-col>\n\n                            <ion-col (click)="changeFilter( $event )">\n\n                                Lojistas\n\n                            </ion-col>\n\n                            <ion-col (click)="changeFilter( $event )">\n\n                                Roupas\n\n                            </ion-col>\n\n\n\n                            <span class="filter-indicator">\n\n                                <span class="filter-caret" #filterCaret ></span>\n\n                            </span><!-- filter-indicator -->\n\n\n\n                        </ion-row><!-- feed-filter -->\n\n                    </ion-grid>\n\n                </div> <!-- feed-filter -->\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <!-- Primeiro card do feed -->\n\n    <ion-card class="feed-card" *ngFor="let post of feed">\n\n        <div class="feed-card-structure">\n\n\n\n            <div class="feed-card-header">\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-2>\n\n                            <div class="feed-author-image">\n\n                                <div class="feed-author-img"></div> <!-- feed-author-img -->\n\n                            </div> <!-- feed-author-image -->\n\n                        </ion-col>\n\n                        <ion-col class="feed-author">\n\n                            <div class="feed-autor-label">\n\n                                <span class="feed-author-txt title ">\n\n                                    {{ post.company }}\n\n                                </span><!-- feed-author-txt -->\n\n                            </div> <!-- feed-autor-label -->\n\n                            <div class="feed-autor-label">\n\n                                <span class="feed-author-txt description">\n\n                                    Rua Anhaia, 284\n\n                                </span>\n\n                            </div> <!-- feed-autor-label -->\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div class="feed-card-header-options">\n\n                                <svg class="ico-card-options">\n\n                                    <use [attr.xlink:href]="constants.src_svg + \'vertical-dots.svg#Layer_1\'"></use>\n\n                                </svg> <!-- ico-card-options -->\n\n                            </div> <!-- feed-card-header-options -->\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div> <!-- feed-card-header -->\n\n            <div class="feed-card-body">\n\n\n\n                <!-- Primeira estrutura de layout de post -->\n\n                <!-- Post somente com imagens -->\n\n\n\n                <!-- ------------ -->\n\n                <div class="card-body-image" [hidden]="post.type != 1">\n\n\n\n                    <div class="card-body-img"\n\n                         [hidden]="post.image == null"\n\n                         [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + post.image + \')\' }"></div>\n\n                    <!-- card-body-img -->\n\n\n\n                    <div class="card-body-description">\n\n                        <span class="card-body-description-since"> Há 3 Minutos </span>\n\n                        <span class="card-body-description-desc">\n\n                            Welcome to <span class="hashtag-desc">#ThePradaDoubleClubMiami</span>, presented by Fondazione Prada and Carsten Höller. The temporary nightclub/installation is half gray scale.\n\n                        </span><!-- card-body-description-desc -->\n\n                    </div> <!-- card-body-description -->\n\n                    <div class="card-body-actions-post">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'hearth.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'share.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div> <!-- card-body-actions-post -->\n\n                </div> <!-- card-body-image -->\n\n                <!-- ------------ -->\n\n                <!-- ------------ -->\n\n                <div class="card-body-product" [hidden]="post.type != 2">\n\n\n\n                    <div class="card-body-product-img">\n\n\n\n                        <ion-slides class="product-variables">\n\n                            <ion-slide>\n\n                                <div class="product-variable-cover" [ngStyle]="{\'background-image\': \'url(\' + constants.src_img + \'exemples/\' + post.image + \')\'}"  ></div> <!-- product-variable-cover -->\n\n                            </ion-slide>\n\n                        </ion-slides><!-- product-variables -->\n\n\n\n                        <ul class="variables-valiable">\n\n                            <li class="variable actived-variable"></li> <!-- variable -->\n\n                            <li class="variable"></li> <!-- variable -->\n\n                            <li class="variable"></li> <!-- variable -->\n\n                        </ul><!-- variables-valiable -->\n\n\n\n                    </div> <!-- card-body-product-img -->\n\n\n\n                    <div class="card-body-description">\n\n                        <span class="card-body-description-since"> Há 3 Minutos </span>\n\n                        <div class="card-body-description-desc">\n\n\n\n                            <span class="product-title"> TURTLENECK TOP </span>\n\n                            <div class="product-prices">\n\n                                <ion-grid class="grid-prices">\n\n                                    <ion-row>\n\n                                        <ion-col class="col-border">\n\n                                            <span class="col-label"> Atacado </span><!-- col-label -->\n\n                                            <span class="price"> 590 </span> <!-- price -->\n\n                                        </ion-col>\n\n                                        <ion-col class="col-varejo">\n\n                                            <span class="col-label"> Varejo </span><!-- col-label -->\n\n                                            <span class="price"> 590 </span> <!-- price -->\n\n                                        </ion-col><!-- col-varejo -->\n\n                                        <ion-col class="col-action">\n\n                                            <button class="button-action-product">\n\n                                                <svg class="icon-button-action-product">\n\n                                                    <use [attr.xlink:href]="constants.src_svg + \'cart.svg#Layer_1\'"></use>\n\n                                                </svg> <!-- icon-button-action-product -->\n\n                                                Comprar\n\n                                            </button><!-- button-action-product -->\n\n                                        </ion-col><!-- col-action -->\n\n                                    </ion-row>\n\n                                </ion-grid><!-- grid-prices -->\n\n                            </div><!-- product-prices -->\n\n\n\n                        </div><!-- card-body-description-desc -->\n\n\n\n                        <span class="card-body-description-desc">\n\n                            Confira a novidade na nossa loja essa semana!\n\n                        </span><!-- card-body-description-desc -->\n\n\n\n                    </div> <!-- card-body-description -->\n\n\n\n                    <div class="card-body-actions-post">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'hearth.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'star.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'share.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div> <!-- card-body-actions-post -->\n\n\n\n                </div> <!-- card-body-product -->\n\n                <!-- ---------- -->\n\n                <!-- ---------- -->\n\n                <div class="card-body-product-group" [hidden]="post.type != 3">\n\n                    <div class="product-group-cover"\n\n                         [hidden]="post.image == null"\n\n                         [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + post.image + \')\' }" ></div> <!-- product-group-cover -->\n\n                    <div class="content-slide-group" >\n\n                        <ion-slides class="product-group-slides" pager>\n\n\n\n                            <ion-slide *ngFor="let grupos of post.products">\n\n                                <ul class="list-group-products">\n\n                                    <li class="item-group-product" *ngFor="let produto of grupos.group">\n\n                                        <div class="item-product-cover" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + produto.prod_image +\')\' }">\n\n                                        </div> <!-- item-product-cover -->\n\n                                    </li><!-- item-group-product -->\n\n                                </ul><!-- list-group-products -->\n\n                            </ion-slide>\n\n\n\n                        </ion-slides><!-- product-group-slides -->\n\n                    </div> <!-- content-slide-group -->\n\n\n\n                    <div class="card-body-description">\n\n                        <span class="card-body-description-since"> Há 3 Minutos </span>\n\n                        <span class="card-body-description-desc">\n\n                            Welcome to <span class="hashtag-desc">#ThePradaDoubleClubMiami</span>, presented by Fondazione Prada and Carsten Höller. The temporary nightclub/installation is half gray scale.\n\n                        </span><!-- card-body-description-desc -->\n\n                    </div> <!-- card-body-description -->\n\n                    <div class="card-body-actions-post">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'hearth.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'chat_ballon.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <div class="card-footer-action">\n\n                                        <svg class="ico-footer-action">\n\n                                            <use [attr.xlink:href]="constants.src_svg + \'share.svg#Layer_1\'"></use>\n\n                                        </svg> <!-- ico-footer-action -->\n\n                                    </div> <!-- card-footer-action" -->\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div> <!-- card-body-actions-post -->\n\n\n\n                </div> <!-- card-body-product-group -->\n\n                <!-- ---------- -->\n\n                <!-- ---------- -->\n\n\n\n                <!-- Fim da estrutura do tipo de layout de post ( Post somente com imagens ) -->\n\n            </div> <!-- feed-card-body -->\n\n\n\n        </div> <!-- feed-card-structure -->\n\n    </ion-card><!-- feed-card -->\n\n    <!-- fim do primeiro card do feed -->\n\n\n\n\n\n    <!-- Terceiro card do feed -->\n\n    <!-- Fim do terceiro card do feed -->\n\n\n\n</ion-content>\n\n<!-- End of content Feed Page -->\n\n<!-- Start of Footer Content -->\n\n<ion-footer>\n\n    <fixed-menu page="feed"></fixed-menu>\n\n</ion-footer>\n\n<!-- End of footer content -->'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], FeedPage);
    return FeedPage;
    var _a, _b;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_share_module__ = __webpack_require__(165);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
                __WEBPACK_IMPORTED_MODULE_3__config_share_module__["a" /* SharedModule */]
            ]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GostosPageModule", function() { return GostosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gostos__ = __webpack_require__(160);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gostos__["a" /* GostosPage */]),
            ],
        })
    ], GostosPageModule);
    return GostosPageModule;
}());

//# sourceMappingURL=gostos.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(80);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides__ = __webpack_require__(47);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesPage */]),
            ],
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 19:
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_themes_prototype_slides_slides__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_themes_prototype_slides_slides_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_themes_prototype_login_login_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_themes_prototype_cadastro_step1_step1_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_themes_prototype_cadastro_step2_step2_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_themes_prototype_cadastro_step3_step3_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_themes_prototype_cadastro_confirm_cad_confirm_cad_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_themes_prototype_explore_explore_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_gostos_gostos_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_feed_feed_module__ = __webpack_require__(167);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_themes_prototype_gostos_gostos_module__["GostosPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_themes_prototype_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */], {}, {
                    links: [
                        { loadChildren: '../pages/themes/prototype/cadastro/confirm-cad/confirm-cad.module#ConfirmCadPageModule', name: 'ConfirmCadPage', segment: 'confirm-cad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/cadastro/step1/step1.module#Step1PageModule', name: 'Step1Page', segment: 'step1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/cadastro/step2/step2.module#Step2PageModule', name: 'Step2Page', segment: 'step2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/cadastro/step3/step3.module#Step3PageModule', name: 'Step3Page', segment: 'step3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/gostos/gostos.module#GostosPageModule', name: 'GostosPage', segment: 'gostos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/themes/prototype/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Qrgo_prototype */],
                __WEBPACK_IMPORTED_MODULE_6__pages_themes_prototype_slides_slides__["a" /* SlidesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_themes_prototype_feed_feed__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_explore_explore__ = __webpack_require__(81);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Content */])
    ], MenuBottomComponent.prototype, "content", void 0);
    MenuBottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fixed-menu',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\components\menu-bottom\menu-bottom.html"*/'<ion-menu side="right" swipeEnabled="false" [content]="footer" >\n\n  <ion-content>\n\n\n\n    <ion-list>\n\n      <ion-item>Perfil</ion-item>\n\n      <ion-item>Carrinho</ion-item>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n  \n\n<div class="foot-menu" #footer>\n\n  <!-- Grid com os icones do menu -->\n\n  <ion-grid>\n\n    <!-- Linha com as colunas com os icones -->\n\n    <ion-row>\n\n      <!-- Colunas com os icones -->\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" (click)="goToFeed()">\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu" [ngClass]="{ \'current-page\': page == \'feed\' }">\n\n               <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/home.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" (click)="goToExplore()">\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu" [ngClass]="{ \'current-page\': page == \'explore\' }">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/search.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" >\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu" [ngClass]="{ \'current-page\': page == \'products\' }">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/bag.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" >\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/notification.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n\n\n        <div class="icon-menu-cont" menuToggle="right" >\n\n          <div class="icon-menu" >\n\n\n\n            <svg class="ico-menu">\n\n              <use [attr.xlink:href]=" constants.src_svg + \'menu-inferior/menu.svg#Layer_1\'"></use>\n\n            </svg> <!-- ico-menu -->\n\n\n\n          </div> <!-- icon-menu -->\n\n        </div> <!-- icon-menu -->\n\n\n\n      </ion-col>\n\n      <!-- Fim da linha  -->\n\n    </ion-row>\n\n    <!-- Fim do grid -->\n\n  </ion-grid>\n\n\n\n</div> <!-- foot-menu -->\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\components\menu-bottom\menu-bottom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], MenuBottomComponent);
    return MenuBottomComponent;
}());

//# sourceMappingURL=menu-bottom.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrgoHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Constants__ = __webpack_require__(19);
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qrgo_prototype; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_themes_prototype_slides_slides__ = __webpack_require__(47);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Qrgo_prototype);
    return Qrgo_prototype;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
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
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
        });
    }
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\slides\slides.html"*/'<ion-slides pager>\n\n\n\n  <ion-slide class="slider-content" >\n\n    \n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/01.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">A confecção na palma da sua mão</h1>\n\n    <p class="slide-description">\n\n      Uma rede que oferece o <strong>controle</strong> e <strong>divulgação</strong> dos seus produtos em tempo real!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 1 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/02.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Procura & Demanda</h1>\n\n    <p class="slide-description">\n\n      Milhares de lojistas e confecções procurando fazer novos contatos!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 2 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/03.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Sempre Informado</h1>\n\n    <p class="slide-description">\n\n      Acompanhe em primeira mão em uma unica plataforma as <strong>novidades, publicações</strong> e <strong>promoções</strong> dos seus contatos!\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 3 -->\n\n\n\n  <ion-slide class="slider-content" >\n\n\n\n    <div class="image-content" >\n\n      <img class="img-slide" [attr.src]="constants.src_img + \'slides/04.png\'" alt="">\n\n    </div> <!-- image-content -->\n\n\n\n    <h1 class="slider-title">Seja Independente</h1>\n\n    <p class="slide-description">\n\n      Sinta a liberdade de poder <strong>comprar</strong> e <strong>reservar peças</strong> sem estar a mercê do tempo de um vendedor.\n\n    </p><!-- slide-description -->\n\n\n\n    <button class="start-button" (click)="startLogin()">Começar!</button>\n\n\n\n    <button class="skip-slider" (click)="startLogin()"> Pular </button>\n\n\n\n  </ion-slide> <!-- End of slider 4 -->\n\n\n\n</ion-slides>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\slides\slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step2_step2__ = __webpack_require__(82);
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
            selector: 'page-step1',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step1\step1.html"*/'<ion-header>\n    <div class="header-back" (click)="backToLogin()" >\n\n        <svg class="backpage-ico">\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- header-back -->\n</ion-header>\n\n<ion-content>\n\n    <div class="step-indicator" >\n\n        <span class="dotdot actived rounded"></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot "></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot"></span>\n\n    </div> <!-- step-indicator -->\n\n    <h3 class="title-step">Escolha</h3> <!-- title-step -->\n\n    <div class="choose-content" >\n        <div class="choose-column" >\n\n            <div class="type-user" >\n\n                <div class="icon-user-type" [ngClass]="{ \'actived-type\': actived == 1 }" (click)="defineActived(1)" >\n                    <svg class="svg-ico-usertype">\n                        <use [attr.xlink:href]="constants.src_svg + \'confeccao.svg#Layer_1\'"></use>\n                    </svg> <!-- svg-ico-usertype -->\n                </div> <!-- icon-user-type -->\n\n                <p class="type-title"> Confecção </p> <!-- type-title -->\n                <p class="type-description">\n                    Cadastre a sua confecção para realizar novas ligações e econtrar novos revendedores para a sua marca\n                </p> <!-- type-description -->\n\n            </div> <!-- type-user -->\n\n        </div> <!-- choose-column -->\n        <div class="choose-column" >\n\n            <div class="type-user" >\n\n                <div class="icon-user-type" [ngClass]="{ \'actived-type\': actived == 2 }" (click)="defineActived(2)">\n                    <svg class="svg-ico-usertype">\n                       <use [attr.xlink:href]="constants.src_svg + \'vendedor.svg#Layer_1\'"></use>\n                    </svg> <!-- svg-ico-usertype -->\n                </div> <!-- icon-user-type -->\n\n                <p class="type-title"> Lojista </p> <!-- type-title -->\n                <p class="type-description">\n                    Cadastre o seu perfil como lojista, para encontrar novas confecções para revendas. E novas conexões de clientes.\n                </p> <!-- type-description -->\n\n            </div> <!-- type-user -->\n\n        </div> <!-- choose-column -->\n    </div> <!-- choose-content -->\n    \n</ion-content>\n\n<ion-footer>\n    <div class="footer-steps" >\n\n        <div class="next-step-action" [ngClass]="{\'allowed\': actived != 0}" (click)="goToStep2()">\n            <span class="next-step-label">\n                Próximo\n            </span> <!-- next-stap-label -->\n            <div class="nextstep-icon" >\n                <span class="caret-body"></span>\n                <span class="caret-direction"></span>\n            </div> <!-- nextstep-icon -->\n        </div> <!-- next-stap-action -->\n\n    </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step1\step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Step1Page);
    return Step1Page;
}());

//# sourceMappingURL=step1.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slides_slides__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_step1_step1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__explore_explore__ = __webpack_require__(81);
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
    function LoginPage(navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        /**
         * Função utilizada para redirecionar o usuário novamente à pagina de slides */
        this.goBackSlides = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__slides_slides__["a" /* SlidesPage */]);
        }); /* Fim da função de redirecionamento para os slides */
        /**
        * Função utilizada para redirecionar o usuário à pagina de realizar o cadastro */
        this.goToCadastro = (function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_step1_step1__["a" /* Step1Page */]);
        }); /* Fim da função de regdirecionamento para a página de cadastro */
        /**
         * Função utilizada para realizar o login do usuário */
        this.doLogin = (function () {
            /* Redireciona a pagina root como a pagina de exploração */
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__explore_explore__["a" /* ExplorePage */], {}, { animate: true, direction: 'forward' });
        }); /* Fim da função de realização do login do usuário */
    } /** Fim do constructor da classe */
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\login\login.html"*/'<div class="login-page">\n\n\n\n    <div class="backpage-login" (click)="goBackSlides()" >\n\n        <svg class="backpage-ico">\n\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- backpage-login -->\n\n\n\n    <div class="content-login-form">\n\n\n\n        <h3 class="welcome-title">Bem Vindo</h3>\n\n\n\n        <div class="image-logo-qrgo">\n\n            <img class="svg-logo" [src]="constants.src_svg + \'qrgo-logo.svg\'"/>\n\n        </div> <!-- image-logo-qrgo -->\n\n\n\n        <div class="content-form-login">\n\n            <div class="form-cont pdg-b20">\n\n                <input type="text" class="form-ctrl" placeholder="Username / E-mail">\n\n            </div> <!-- form-cont -->\n\n            <div class="form-cont">\n\n                <input type="password" class="form-ctrl" placeholder="Senha">\n\n            </div> <!-- form-cont -->\n\n\n\n            <p class="forgot-pass"> Esqueci minha senha </p>\n\n\n\n            <div class="form-cont">\n\n                <button class="login-btn" (click)="doLogin()" > Entrar</button>\n\n            </div> <!-- form-cont -->\n\n\n\n            <span class="line-divider"></span> <!-- line-divider -->\n\n\n\n            <div class="content-singup">\n\n                <p class="ask-singup" > Não possui cadastro? </p> <!-- ask-singup -->\n\n                <p class="button-singup" (click)="goToCadastro()" > Cadastre-se </p> <!-- ask-singup -->\n\n            </div> <!-- content-singup -->\n\n\n\n        </div> <!-- content-form-login -->\n\n\n\n\n\n        <div class="explore-contents" >\n\n            <span class="explore-label"> Explorar </span>\n\n            <span class="explore-stick">  </span>\n\n        </div> <!-- explore-contents -->\n\n\n\n    </div> <!-- content-login-form -->\n\n\n\n\n\n</div> <!-- login-page -->'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gostos_gostos__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Constants__ = __webpack_require__(19);
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
    function ExplorePage(navCtrl, navParams, modalCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
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
        /**
         * Função utilizada para iniciar o scroll do content */
        this.doScrollContent = (function (element, event) {
        }); /* Fim função executada com o scroll do content */
    }
    /* Função iniciada quando a view for iniciada */
    ExplorePage.prototype.ionViewDidLoad = function () {
        /* Quando a view foi iniciada, e ja está pronta */
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__gostos_gostos__["a" /* GostosPage */]);
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollerRecommended'),
        __metadata("design:type", Object)
    ], ExplorePage.prototype, "scrollerRecommended", void 0);
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\explore\explore.html"*/'<ion-content>\n\n    <!-- Content da pagina de explorar -->\n\n    \n\n    <div class="header-background" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'backgrounds/explore-background.png)\' }" ></div> <!-- header-background -->\n\n    \n\n    <!-- Header da pagina de exploração -->\n\n    <ion-header>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-1 class="col-icon">\n\n                    <div class="icon-back-header" >\n\n                        \n\n                        <svg class="ico-back-header">\n\n                           <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n\n                        </svg> <!-- ico-back-header -->\n\n                        \n\n                    </div> <!-- icon-back-header -->\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div class="content-search-input-header" >\n\n                        <input type="search" name="search-explore" class="inpt-search-explore" placeholder="Buscar">\n\n                        <ion-icon name="md-close-circle"></ion-icon>\n\n                    </div> <!-- content-search-input-header -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-header>\n\n    <!-- Fim do header da pagina de exploração -->\n\n    <div class="ion-styles-explore" >\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <span class="text-header-section">\n\n                        Seus estilos\n\n                    </span><!-- text-header-section -->\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div class="show-styles-selecteds" >\n\n                        <div class="styles-selecteds" >\n\n\n\n                            <span class="style-slected">Masculino</span>\n\n                            <span class="style-slected">Masculino</span>\n\n                            <span class="style-slected">Masculino</span>\n\n                            <span class="style-slected">Social</span>\n\n                            <span class="style-slected">Social</span>\n\n                            <span class="style-slected">Social</span>\n\n\n\n                        </div> <!-- styles-selecteds -->\n\n                    </div> <!-- show-styles-selecteds -->\n\n                </ion-col>\n\n                <ion-col col-2 class="cont-config-styles">\n\n                    <div class="config-styles" >\n\n                        \n\n                        <div class="config-ico" >\n\n                            <svg class="ico-config">\n\n                               <use [attr.xlink:href]="constants.src_svg + \'settings.svg#Layer_1\'"></use>\n\n                            </svg> <!-- ico-config -->\n\n                        </div> <!-- config-ico -->\n\n\n\n                    </div> <!-- config-styles -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </div> <!-- ion-styles-explore -->\n\n\n\n    <div class="ion-recommendations-explore" >\n\n        \n\n        <ion-grid class="grid-header-recommendations">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <span class="text-header-section">\n\n                        Recomendações\n\n                    </span><!-- text-header-section -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid><!-- grid-header-recommendations -->\n\n\n\n        <div class="recommendations-content scrollerRecommended" (scroll)="doScrollContent( \'scrollerRecommended\', $event )" >\n\n            <ul class="recommendation-list">\n\n\n\n                <li class="reccommendation-item item-scrollable"  *ngFor="let recommendation of recommendations">\n\n                    <div class="ctrl-recommendation-item" >\n\n\n\n                        <div class="recommendation-mark" >\n\n\n\n                            <div class="recommendation-mark-header" >\n\n                                <div class="mark-header-image" >\n\n                                    <div class="image-header-mark" >\n\n\n\n                                    </div> <!-- image-header-mark -->\n\n                                </div> <!-- mark-header-image -->\n\n                                <div class="mark-header-description" >\n\n                                    <div class="header-description-line" >\n\n                                        <div class="description" >\n\n                                            <span class="text-description title">\n\n                                                {{recommendation.mark}}\n\n                                            </span>\n\n                                        </div> <!-- description -->\n\n                                    </div> <!-- header-description-line -->\n\n                                    <div class="header-description-line" >\n\n                                        <div class="description" >\n\n                                            <span class="text-description description">\n\n                                                Confecção\n\n                                            </span>\n\n                                        </div> <!-- description -->\n\n                                    </div> <!-- header-description-line -->\n\n                                </div> <!-- mark-header-description -->\n\n                                <div class="mark-header-action" >\n\n                                    <button class="button-action-header-mark">\n\n                                        Visitar\n\n                                    </button> <!-- button-action-header-mark -->\n\n                                </div> <!-- mark-header-action -->\n\n                            </div> <!-- recommendation-mark-header -->\n\n                            <div class="recommendation-mark-body" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/\' + recommendation.wallpaper + \')\' }">\n\n                            </div> <!-- recommendation-mark-body -->\n\n\n\n                            <div class="recommendation-mark-footer" >\n\n                                <ul class="recommendation-mark-list-vitrine">\n\n                                    <li class="recommendation-mark-vitrine-item" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/roupa1.jpg)\' }"></li><!-- recommendation-mark-vitrine-item -->\n\n                                    <li class="recommendation-mark-vitrine-item" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/roupa1.jpg)\' }"></li><!-- recommendation-mark-vitrine-item -->\n\n                                    <li class="recommendation-mark-vitrine-item" [ngStyle]="{ \'background-image\': \'url(\' + constants.src_img + \'exemples/roupa1.jpg)\' }"></li><!-- recommendation-mark-vitrine-item -->\n\n                                </ul><!-- recommendation-mark-list-vitrine -->\n\n                            </div> <!-- recommendation-mark-footer -->\n\n\n\n\n\n                        </div> <!-- recommendation-mark -->\n\n\n\n                    </div> <!-- ctrl-recommendation-item -->\n\n                </li><!-- reccommendation-item -->\n\n\n\n            </ul><!-- recommendation-list -->\n\n        </div> <!-- recommendations-content -->\n\n    </div> <!-- ion-recommendations-explore -->\n\n\n\n    <div class="ion-explore-marks" >\n\n        <ion-grid class="no-padding">\n\n\n\n            <ion-row class="explore-mark" *ngFor="let marca of marcas">\n\n                <ion-col>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-2>\n\n                                <div class="image-mark-explore" >\n\n                                    <div class="img-mark-explore" >\n\n                                        <div class="img-mark" ></div> <!-- img-mark -->\n\n                                    </div> <!-- img-mark-explore -->\n\n                                </div> <!-- image-mark-explore -->\n\n                            </ion-col>\n\n                            <ion-col class="label-mark-explore-cont">\n\n                                <div class="label-mark-explore" >\n\n                                    <div class="text-label-mark-explore" >\n\n                                        <div class="txt-label-mark-explore title" >\n\n                                            {{marca.marca}}\n\n                                        </div> <!-- txt-label-mark-explore -->\n\n                                    </div> <!-- text-label-mark-explore -->\n\n                                    <div class="text-label-mark-explore" >\n\n                                        <div class="txt-label-mark-explore description" >\n\n                                            Há 3 dias\n\n                                        </div> <!-- txt-label-mark-explore -->\n\n                                    </div> <!-- text-label-mark-explore -->\n\n                                </div> <!-- label-mark-explore -->\n\n                            </ion-col> <!-- label-mark-explore-cont -->\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col>\n\n                                <div class="products-mark-explore" >\n\n                                    <ul class="list-products-mark-explore">\n\n                                        <li class="item-product-mark-explore" *ngFor="let produto of marca.produtos">\n\n\n\n                                            <div class="product-mark-image" [ngStyle]="{\'background-image\': \'url(\' + constants.src_img + \'exemples/jaqueta1.jpg)\'}" >\n\n                                                <ul class="colors-product-mark">\n\n                                                    <li class="color-product" [ngStyle]="{\'background-color\': \'#c80114\'}"></li><!-- color-product -->\n\n                                                    <li class="color-product" [ngStyle]="{\'background-color\': \'#1d1d1d\'}"></li><!-- color-product -->\n\n                                                </ul><!-- colors-product-mark -->\n\n                                            </div> <!-- product-mark-image -->\n\n                                            <div class="product-mark-label" >\n\n                                                <span class="product-mark-text">\n\n                                                    Rufed Jacket\n\n                                                </span><!-- product-mark-text -->\n\n                                            </div> <!-- product-mark-label -->\n\n\n\n                                        </li><!-- item-product-mark-explore -->\n\n                                    </ul><!-- list-products-mark-explore -->\n\n                                </div> <!-- products-mark-explore -->\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </ion-col>\n\n            </ion-row><!-- explore-mark -->\n\n\n\n        </ion-grid>\n\n    </div> <!-- ion-explore-marks -->\n\n    \n\n    \n\n<!-- Fim do content da pagina de exploração -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <fixed-menu page="explore"></fixed-menu>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\explore\explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step1_step1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step3_step3__ = __webpack_require__(161);
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
    function Step2Page(navCtrl, navParams, alertCtrl, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.keyboard = keyboard;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__config_Constants__["a" /* Constants */];
        this.cnpj = "";
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
    Step2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step2',template:/*ion-inline-start:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step2\step2.html"*/'<ion-header>\n    <div class="header-back" (click)="backToStep1()">\n\n        <svg class="backpage-ico">\n            <use [attr.xlink:href]="constants.src_svg + \'back.svg#Layer_1\'"></use>\n        </svg> <!-- backpage-ico -->\n\n    </div> <!-- header-back -->\n</ion-header>\n\n<ion-content>\n\n    <div class="step-indicator">\n\n        <span class="dotdot actived"></span>\n        <span class="dot-stick actived"></span>\n        <span class="dotdot actived rounded"></span>\n        <span class="dot-stick"></span>\n        <span class="dotdot"></span>\n\n    </div> <!-- step-indicator -->\n\n    <h3 class="title-step">Complete</h3> <!-- title-step -->\n\n    <div class="cad-content-inn">\n        <ion-grid>\n\n            <ion-row>\n                <ion-col>\n                    <div class="cad-form-content">\n                        <label class="cad-form-label">\n                            <span class="cad-form-label-txt"> CNPJ: </span> <!-- cad-form-label-txt -->\n                            <input type="text" [(ngModel)]="cnpj" (keyup)="keyupCnpj( cnpj )" class="cad-form-ctrl" placeholder="Insira o CNPJ">\n                        </label><!-- cad-form-label -->\n                    </div> <!-- cad-form-content -->\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n\n                <ion-grid class="grid-complete-cnpj" [hidden]="!stepOk">\n                    <ion-row>\n                        <ion-col>\n\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Razão Social: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Razão Social" value="Danillo Alves de Oliveira 47906756886" readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Nome Fantasia: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Nome Fantasia" value="Webdragon" readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Bairro: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Bairro" value="Pq. Piratininga." readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Endereço: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Endereço" value="Teófilo Braga" readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Nº: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Nº" value="415" readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n                        </ion-col>\n\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Cidade: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Cidade" value="Itaquaquecetuba" readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <div class="cad-form-content">\n                                <label class="cad-form-label">\n                                    <span class="cad-form-label-txt"> Estado: </span> <!-- cad-form-label-txt -->\n                                    <input type="text" class="cad-form-ctrl" placeholder="Estado" value="São Paulo" readonly>\n                                </label><!-- cad-form-label -->\n                            </div> <!-- cad-form-content -->\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-row>\n\n        </ion-grid>\n    </div> <!-- cad-content-inn -->\n\n\n</ion-content>\n\n\n<ion-footer>\n    <div class="footer-steps">\n\n        <div class="next-step-action" [ngClass]="{ \'allowed\': stepOk }" (click)="goToStep3()">\n            <span class="next-step-label">\n                Próximo\n            </span> <!-- next-stap-label -->\n            <div class="nextstep-icon">\n                <span class="caret-body"></span>\n                <span class="caret-direction"></span>\n            </div> <!-- nextstep-icon -->\n        </div> <!-- next-stap-action -->\n\n    </div> <!-- footer-steps -->\n</ion-footer>'/*ion-inline-end:"C:\wamp64\www\qrgo_prototype\src\pages\themes\prototype\cadastro\step2\step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */]])
    ], Step2Page);
    return Step2Page;
}());

//# sourceMappingURL=step2.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map