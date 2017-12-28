import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {LocalizacaoPage} from "../localizacao/localizacao";
import {FileChooser} from '@ionic-native/file-chooser';
import {ActionSheetController} from 'ionic-angular'
import {Http} from '@angular/http';
import * as $ from 'jquery';
import {LoadingController} from 'ionic-angular';
import {LoginPage} from "../../login/login";
import {FeedPage} from "../../feed/feed";
import {Storage} from '@ionic/storage';
import {Platform} from 'ionic-angular';
import {ImagePicker} from '@ionic-native/image-picker';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {App} from "ionic-angular";
import {File as File2} from '@ionic-native/file';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 *
 See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-post',
    templateUrl: 'post.html',
})


export class PostPage {

    public constants = Constants;
    public text = false;
    @ViewChild('textInput') textInput;
    private feedAction: any = null;
    public locationPost = [];
    public locationMore = 0;
    public nomeLocation;
    public teste;

    public base64Image: string;
    public imagePost;
    public post: any = {
        text_title: "",
        text: "",
        img_father: "",
        img_childs: [],
        type_layout: "",
        localizacao: [],
        prod: [],
        user_id_fk: ""
    };


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public fileChooser: FileChooser,
                public actionSheetCtrl: ActionSheetController,
                private http: Http,
                public loadingCtrl: LoadingController,
                //public camera: Camera,
                public storage: Storage,
                public viewCtrl: ViewController,
                public imagepicker: ImagePicker,
                public platform: Platform,
                public Camera: Camera, /* Init of constructor of class */
                public app: App,
                public file: File2,
                public alertCtrl: AlertController) { /* Init of constructor of class */

        platform.ready().then(() => {

            storage.get('user_logged').then((user_logged) => {
                console.log(user_logged);
                if (user_logged !== null) {
                    if (user_logged.user_id) {
                        this.post.user_id_fk = user_logged.user_id;
                    }
                } else {
                    this.app.getRootNav().setRoot(LoginPage);//this.navCtrl.push(LoginPage);
                }


            });


        });
    }

// Tirar foto com a camera

    public takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.Camera.DestinationType.FILE_URI,
            encodingType: this.Camera.EncodingType.JPEG,
            mediaType: this.Camera.MediaType.PICTURE
        }

        this.Camera.getPicture(options).then((imageData) => {

            var imagePath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
            var imageName = imageData.substr(imageData.lastIndexOf('/') + 1);

            this.file.readAsDataURL(imagePath, imageName).then((base64Img) => {
                this.imagePost = base64Img;
                this.post.img_father = base64Img;
            });

        }, (err) => {
            // Handle error
        });
    }

    // Abrir modal para realizar psot
    public LocationPost = (() => {
        let profileModal = this.modalCtrl.create(LocalizacaoPage, {location: this.post.localizacao});

        profileModal.onDidDismiss(data => {
            let textNome;
            let num = 0;
            this.locationPost = data;
            // if(this.locationPost.length > 2){
            //     this.locationMore = this.locationPost.length - 2;
            // }
            this.post.localizacao.forEach(function (data, index) {

                if (index > 0) {
                    textNome = textNome + ' | ' + data.end;
                    if (textNome.length > 25) {
                        textNome = textNome.substring(0, 25);
                        textNome = textNome + '...';
                        num++;
                    }
                } else {
                    textNome = data.end;
                }

            });
            this.locationMore = num;
            this.nomeLocation = textNome;
        });

        profileModal.present();
    });

// Menu de Imagem
    public actionsPostFeed(post: any) {

        this.feedAction = post;
        let actionSheet = this.actionSheetCtrl.create({
            cssClass: 'feed-post-actions',
            buttons: [
                {
                    text: 'Imagem ',
                    cssClass: 'closeFeedActions'
                },
                {
                    text: 'Camera ',
                    cssClass: 'actionButton ios-camera',
                    handler: () => {
                        this.takePicture();
                    }
                },
                {
                    text: 'Galeria ',
                    cssClass: 'actionButton ios-images',
                    handler: () => {
                        let options = {
                            maximumImagesCount: 1,
                            width: 500,
                            height: 500,
                            quality: 75
                        }


                        this.imagepicker.getPictures(options).then(
                            file_uris => {

                                if (file_uris.length == 1) {
                                    file_uris = file_uris[0];
                                    var imagePath = file_uris.substr(0, file_uris.lastIndexOf('/') + 1);
                                    var imageName = file_uris.substr(file_uris.lastIndexOf('/') + 1);
                                    this.file.readAsDataURL(imagePath, imageName).then((base64Img) => {
                                        console.log(base64Img);
                                        this.imagePost = base64Img;
                                        this.post.img_father = base64Img;
                                    });
                                }

                            },
                        );

                        console.log(this.imagePost);
                    }
                }
            ]
        });
        actionSheet.present();
    }

    public publicar = (() => {
        this.post.type_layout = this.validationType(this.post);

        if (this.post.text.length > 0) {
            this.setPost();
        } else {
            let alert = this.alertCtrl.create({
                title: 'Ops!',
                subTitle: 'Parece que o conteúdo do post está vazio, por favor preencha o conteúdo para prosseguir',
                buttons: ['Ok']
            });
            alert.present();
        }
    });

    public validationType = ((data) => {
        var tipo = 1;

        if (data.img_father != "") {
            tipo = 2;
        }
        if (this.post.prod.length > 0) {
            tipo = 3;
        }

        return tipo;
    });


    //Funçao que retorna o usuario pra pagina de feed
    public toFeed = (() => {
        this.app.goBack();
    });


    // Função responsavel por criar post
    public setPost = (() => {
        this.storage.get('access').then((access) => {
            //  console.log(access);
            var resposta = null;
            let loader = this.loadingCtrl.create({content: "Aguarde..."});
            loader.present();
            this.http.post(
                //   Constants.api_path + 'post/insertPost', $.param(this.post))
                Constants.api_path + 'post/insertPost', $.param({
                    data_post: this.post,
                    token_id: access.token_id,
                    token_hash: access.token_hash
                }))
                .subscribe((data) => {
                        resposta = (data as any);
                        resposta = JSON.parse(resposta._body);
                        loader.dismissAll();
                        if (resposta.success) {
                            this.navCtrl.push(FeedPage);
                        }

                    }
                )
        });
    });
    //Fim Função responsavel por criar post

    public onFocus = (() => {
        this.text = true;
    })
    public onBlur = (() => {
        this.text = false;
    })
    public returnPage = (() => {
        this.viewCtrl.dismiss();
    });
    public deleteImage = (() => {
        this.imagePost = '';

    });

};