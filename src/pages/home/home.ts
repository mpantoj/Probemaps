import { Component } from '@angular/core';
import {
  NavController,
  AlertController, // Controlador de alertas
  LoadingController, //Controlador de carga
  Loading,        //Mensajes de carga
  Platform,       //Conocer en que plataforma se corre
  ToastController //Mostrar mensajes toast
} from 'ionic-angular';

//Diagnostico de nuestro Hardware
import {Diagnostic} from '@ionic-native/diagnostic';
//Geolocalización
import {Geolocation} from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading; //Objeto de carga

  lat: number = 19.257927;
  lng: number = -99.173566;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private diagnostic: Diagnostic,
    private geolocation: Geolocation,
    private platform: Platform,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController) {

  }
  //función que se encarga de mostrar alerta de carga
  private showLoading(){
    this.loading=this.loadingCtrl.create({
      content: 'Por favor espera...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  //función que se encarga de mostrar mensajes Toast
  private mostrarToast(texto:string){
    this.toastCtrl.create(
      {
        message:texto,
        duration:3000
      }).present();
  }
  //función que se encarga de mostrar mensaje Alerta
  private displayMessage(err:string, title:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle:err,
      buttons: [
        "Ok"
      ]
    });
    alert.present(prompt);
  }

  buscarUbicacion(){
    //Verificamos si etamos en un celular
    if(!this.platform.is("cordova")){
      this.mostrarToast("No es un celular")
      return;
    }
    //Mostrar mensaje
    this.showLoading()

    this.diagnostic.isLocationEnabled().then(
      
    )
  }

}
