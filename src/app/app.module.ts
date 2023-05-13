import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TweetComponent } from './shared/components/tweet/tweet.component';
import { HomeComponent } from './features/home/home.component';
import { MiniTagsComponent } from './features/side-taps/mini-tags/mini-tags.component';
import { MiniWhoToFollowComponent } from './features/side-taps/mini-who-to-follow/mini-who-to-follow.component';
import { TimelineForyouComponent } from './features/home/timeline-foryou/timeline-foryou.component';
import { TimelineFollowingComponent } from './features/home/timeline-following/timeline-following.component';
import { SideTapsComponent } from './features/side-taps/side-taps.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniTagsComponent,
    MiniWhoToFollowComponent,
    TimelineForyouComponent,
    TimelineFollowingComponent,
    TweetComponent,
    SideTapsComponent,
    NavigationComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
