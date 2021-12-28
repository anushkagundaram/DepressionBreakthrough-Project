import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TakeasurveyComponent } from './takeasurvey/takeasurvey.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { MusictherapyComponent } from './musictherapy/musictherapy.component';
import { MeditationComponent } from './meditation/meditation.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    FeaturesComponent,
    LoginComponent,
    SignupComponent,
    TakeasurveyComponent,
    HomeComponent,
    TipsComponent,
    MusictherapyComponent,
    MeditationComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
