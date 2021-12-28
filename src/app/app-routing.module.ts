import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TakeasurveyComponent } from './takeasurvey/takeasurvey.component';
import { TipsComponent } from './tips/tips.component';
import { MusictherapyComponent } from './musictherapy/musictherapy.component';
import { MeditationComponent } from './meditation/meditation.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'tips',component:TipsComponent},
  {path:'musictherapy',component:MusictherapyComponent},
  {path:'meditation',component:MeditationComponent},
  {path:'experiences',component:ExperiencesComponent},
  {path:'features',component:FeaturesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'takeasurvey',component:TakeasurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
