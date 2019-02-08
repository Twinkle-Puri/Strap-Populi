import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SignUpComponent } from './out/sign-up/sign-up.component';
import { LoginComponent } from './out/login/login.component';
import { HomeComponent } from './home/home.component';
import { MyPostComponent } from './my-post/my-post.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule} from '@angular/forms';
import { RouteGuard } from './out/route-guard';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './shared/notification.service';
import { FireService } from './shared/myfire.service';
import { UserService } from './shared/user.service';
import { PostComponent } from './shared/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FollowingComponent,
    FavoritesComponent,
    MyPostComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    NotificationComponent,
    PostComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [RouteGuard,NotificationService,FireService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
