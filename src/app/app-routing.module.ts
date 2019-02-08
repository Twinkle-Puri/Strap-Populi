import {Routes,RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FollowingComponent } from './following/following.component';
import { MyPostComponent } from './my-post/my-post.component';
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./out/sign-up/sign-up.component";
import { LoginComponent } from "./out/login/login.component";
import { RouteGuard } from "./out/route-guard";

const appRoutes: Routes=[
  { path : '', component: HomeComponent}, 
  { path : 'allposts', component: AllPostsComponent, canActivate: [RouteGuard]},
  { path : 'favorites', component: FavoritesComponent, canActivate: [RouteGuard]},
  { path : 'following', component: FollowingComponent, canActivate: [RouteGuard]},
  { path : 'mypost', component: MyPostComponent, canActivate: [RouteGuard]},
  { path : 'signup', component: SignUpComponent},
  { path: 'login' , component:LoginComponent},
  
];
@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
