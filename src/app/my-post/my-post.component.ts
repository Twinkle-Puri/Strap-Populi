import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { NotificationService } from '../shared/notification.service';
import { FireService } from '../shared/myfire.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit ,OnDestroy{

    postLists:any =[];
    personalPostsRef : any =[];
  constructor(private myFire: FireService, 
              private notifier: NotificationService){}

  ngOnInit() {
      const uid = firebase.auth().currentUser.uid;
      this.personalPostsRef = this.myFire.getUserPostsRef(uid);
      this.personalPostsRef.on('child_added' ,data => {
        this.postLists.push({
          key: data.key,
          data: data.val()
        });
      });
  }

  onFileSelection(event){
    const fileList: FileList = event.target.files;

    if(fileList.length > 0){
      const file: File = fileList[0];
      this.myFire.uploadFile(file)
       .then(data => {
         this.notifier.display('success','picture successfully uploaded!!.');
         this.myFire.handleImageupload(data);
         //console.log(data['fileUrl']);

       })
       .catch(err => {
         this.notifier.display('error',err.message);
       });
    }
    
  }
  ngOnDestroy(){

    this.personalPostsRef.off();

  }

}
