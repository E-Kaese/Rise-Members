import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HexagonGridComponent } from './hexagon-grid/hexagon-grid.component';
import { HexComponent } from './hex/hex.component';
import { MemberComponent } from './member/member.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { MainComponent } from './dashboard/main/main.component';
import { DashboardService } from './dashboard/services/dashboard.service';
import { AuthGuard } from './dashboard/services/auth-guard.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { RemoveComponent } from './dashboard/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonGridComponent,
    HexComponent,
    MemberComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    EditComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [DashboardService, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
