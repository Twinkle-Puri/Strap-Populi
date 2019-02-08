import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from 'node_modules/lodash';
import { FireService } from '../shared/myfire.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit,OnDestroy {

    allRef: any;
    loadMoreRef: any;
    all: any = [];
    
  constructor( private myFire: FireService,
              private notifier:NotificationService) { }

  ngOnInit() {

    this.allRef = firebase.database().ref('allposts').limitToFirst(2);
    this.allRef.on('child_added', data => {
      this.all.push({
        key: data.key,
        data: data.val()
      });
    });
  }
   onLoadMore(){
    if(this.all.length >= 0){
      const lastLoadedPost = _.last(this.all);
      const lastLoadedPostKey = lastLoadedPost.key;

      this.loadMoreRef = firebase.database().ref('allposts').startAt(null ,lastLoadedPostKey).limitToFirst(2+1)
      
      this.loadMoreRef.on('child_added', data => {

        if(data.key === lastLoadedPostKey){
          return;
        } else{
            this.all.push({
              key: data.key,
              data: data.val()
            });
        }
            });
    }
    
  }

  ngOnDestroy(){
  this.allRef.off();
  if(this.loadMoreRef){
    this.loadMoreRef.off();
  }
  }
  onFavoritesClicked(imageData){
    this.myFire.handleFavoriteClicked(imageData)
      .then(data =>{
          this.notifier.display('success','Image added to favorite');
      })
        .catch(err =>{
          this.notifier.display('error','error added to favorite');
        })
    
  }

  onFollowClicked(imageData){
    this.myFire.handlefollowUser(imageData.uploadedBy)
      .then(data =>{
          this.notifier.display('success','Following'+ imageData.uploadedBy.name + "!!!");
      })
        .catch(err =>{
          this.notifier.display('error','err');
        })
    
  }
}