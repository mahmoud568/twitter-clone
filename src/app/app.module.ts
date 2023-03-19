import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TimelineForyouComponent } from './pages/home/timeline-foryou/timeline-foryou.component';
import { TimelineFollowingComponent } from './pages/home/timeline-following/timeline-following.component';
import { TweetComponent } from './pages/home/tweet/tweet.component';
import { SearchComponent } from './pages/side-taps/search/search.component';
import { MiniTagsComponent } from './pages/side-taps/mini-tags/mini-tags.component';
import { MiniWhoToFollowComponent } from './pages/side-taps/mini-who-to-follow/mini-who-to-follow.component';
import { SideTapsComponent } from './pages/side-taps/side-taps.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MiniTagsComponent,
    MiniWhoToFollowComponent,
    TimelineForyouComponent,
    TimelineFollowingComponent,
    TweetComponent,
    SideTapsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
