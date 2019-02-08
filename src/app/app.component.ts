import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    const config = {
      apiKey: "AIzaSyDCyW1t9NH7MY4ckgOQ9OAIeEHL3dA0c0M",
      authDomain: "connecting-3fade.firebaseapp.com",
      databaseURL: "https://connecting-3fade.firebaseio.com",
      projectId: "connecting-3fade",
      storageBucket: "connecting-3fade.appspot.com",
      messagingSenderId: "75220225305"
    };
    firebase.initializeApp(config);
    
  }
}
