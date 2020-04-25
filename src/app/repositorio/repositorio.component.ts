import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
}) 

export class RepositorioComponent implements OnInit {

  constructor() {FirebaseService:FirebaseService }
 
  repo:any = [
    {id:1, name:"Angular", iconRoute:"../../assets/images/Mockup.png", downloadUuid:"aa1326cf-fc69-4163-9ace-a5eb94e10d23.zip", duration:"500 horas", esVideo:true
  ,description:"Angular es un framework para desarrollar Single Page Application (SPA), cuenta con años de desarrollo y es respaldado por el equipo de Google."},
    {id:2, name:"React", iconRoute:"../../assets/images/repo/reactjs.png", downloadUuid:"fadd9318-fed6-4ca8-8ef7-18bcc41b33dc.png", duration:"50 horas"}
  ]
  
  ngOnInit() {
  }

  disableButton(idButton:string){
    document.getElementById(idButton);
  }
  

}
