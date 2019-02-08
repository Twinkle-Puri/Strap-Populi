import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isloggedIn: boolean = false;
    name: string;
    uid: string;
    email: string;

  constructor(private userService: UserService, 
              private router: Router) { }

  ngOnInit() {

    this.userService.statusChange.subscribe(userData =>{

      if(userData) {
        this.name = userData.name;
        this.email = userData.email;
        this.uid = userData.uid;
      } else {
        this.name = null;
        this.email = null;
        this.uid = null;
      }
    });

    firebase.auth().onAuthStateChanged(userData =>{
      //we are loggedin
      if (userData && userData.emailVerified){
            this.isloggedIn = true;
            const user = this.userService.getProfile();
            if(user && user.name){ 
              this.name = user.name;
              this.email = user.email;
              this.uid = user.uid;
            this.router.navigate(["/allposts"]);
            }
      }
       else {
          this.isloggedIn = false;
      }
    });
  }

      onLogout(){
        firebase.auth().signOut()
          .then(() => {
              this.userService.destroy();
              this.isloggedIn= false;
          });
      }
    
}
