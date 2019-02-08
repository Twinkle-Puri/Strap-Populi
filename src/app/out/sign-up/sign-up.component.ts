import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private notifier: NotificationService) {
   }

  ngOnInit() { }
    onSubmit(form: NgForm){
      const name = form.value.name;
      const email = form.value.email;
      const password = form.value.password;

      console.log(name,email,password);
       firebase.auth().createUserWithEmailAndPassword(email,password)
      .then( userData =>   {
        userData.sendEmailVerification();
        const message = `A verification email has been sent to ${email} . kindly check your inbox`;
        this.notifier.display('success', message);
        return firebase.database().ref('users/' + userData.uid).set({
          email: email,
          uid: userData.uid,
          password: password,
          registrationDate: new Date().toString(),
          name : name 
        })
          .then(onResolve =>
          {
              firebase.auth().signOut();
          });
      })
        .catch(err => {
          this.notifier.display('error' ,err.message);
          console.log(err);
        });
      }
    }