import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

   register(){
    firebase.firestore().collection('/users').add({
      username: 'sebaql',
      password: '123gallitoingles'
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }
}
