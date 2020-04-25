import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MailerService } from 'src/app/mailer.service';
import {Contacto } from '../modelos/contacto';
import { Power2,TimelineMax } from 'gsap/TweenMax';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: [
    
  ]
})
export class ContactoComponent implements OnInit {

  name:any;
  email:any;
  message:any;
  okbtntext:string="¡Listo!";
  isContactFormShown:boolean;
  showContactFormAnimation: any;
  clientHeight: number;

  //validators
  isNameValid:boolean;
  isEmailValid:boolean;
  flag: boolean;
  constructor(private toastr: ToastrService,private  Mailer:MailerService,private contacto:Contacto) { }

  ngOnInit() {
    this.isContactFormShown =false;
    this.showContactFormAnimation = new TimelineMax();
    this.clientHeight = document.getElementById('msg-content').clientHeight+20;
    this.flag=false;
    //initialize validators
    this.isNameValid=false;
    this.isEmailValid=false;

  }

  showAnimation(){
    var tl = new TimelineMax();
    tl.to('#message-wrapper',0.4,{  height:this.clientHeight})
    .to('#msg-content',0.5,{opacity:1,padding:15});  
  }

  hideAnimation(){
    var tl = new TimelineMax();
    tl.to('#msg-content',0.5,{ opacity:0})
    .to('#message-wrapper',0.3,{ height:0});
  }
  
  validateName(){
    if (!(typeof this.name === "undefined" ||  this.name==="")&&this.name.length>=3){
      this.isNameValid=true;
    }else this.isNameValid=false;
    this.enableButtonState();

  }

   validateEmail() {
    var re =  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if( re.test(String(this.email).toLowerCase())){
      this.isEmailValid=true;
    }else this.isEmailValid=false;
    this.enableButtonState();
}

  enablerButtonState:boolean=true;
  enableButtonState(){
    this.enablerButtonState= !(this.isEmailValid&&this.isNameValid);
  }

enabledInputs:boolean = true;
isModificable: boolean= false; //es modificable? no -> el boton dice ¡Listo! // sí -> el boton dice Editar

enablerButton(){
  var tl = new TimelineMax();
  if(!this.isModificable){
    //aqui debemos hacer que los inputs de name y email se desactiven
    this.isModificable=!this.isModificable;
    this.enabledInputs=false;
    //tl.to('#ok-contact-btn',0.1,{ backgroundColor:'#c9d6ff'});
    this.okbtntext="Modificar";
    this.enablerButtonState=true;
    setTimeout(() =>{
      this.enablerButtonState=false;
    },1500);
    this.showAnimation();
  }else{
    this.isModificable=!this.isModificable;
    this.enabledInputs=true;
    this.name="";
    this.email="";
    this.isEmailValid=false;
    this.isNameValid=false;
    //tl.to('#ok-contact-btn',0.1,{ backgroundColor:'#4007ba'});
    this.okbtntext="¡Listo!";
    this.enablerButtonState=true;
    this.hideAnimation();
  }

}

validateMsg(){
  if (!(typeof this.message === "undefined" ||  this.message==="")&&this.message.length>=10){
    this.flag=true;
  }else this.flag= false;
}

submit(){
  let contacto = new Contacto ();
  contacto.setProperties(this.name,this.email,this.message);
  this.Mailer.performGetEx(contacto).subscribe();
  this.toastr.info('Hemos recibido tu mensaje, nos contactaremos contigo :)', '¡Genial!');
  this.flag=!this.flag;
}




}
