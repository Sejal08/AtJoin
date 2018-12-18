import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { ATjoinModule } from './ATjoin/ATjoin.module';

import { UserService } from './core/users.service';
import { HttpModule } from "@angular/http";

const routes: Routes = [
    {path:'', redirectTo:'/main', pathMatch:'full'},
    {path:'main', component:MainComponent},
    {path:'atjoin', loadChildren:'./ATjoin/ATjoin.module#ATjoinModule'},
  ];

@NgModule({
   declarations: [
      AppComponent,
      MainComponent
   ],
   imports: [
      ATjoinModule,
      HttpModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      FormsModule,
      ReactiveFormsModule,
      SlickModule.forRoot(),
      RouterModule.forRoot(routes),
   ],
   providers: [UserService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

