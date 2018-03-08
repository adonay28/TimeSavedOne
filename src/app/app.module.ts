import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared/shared.service';
import { LoginComponent } from "./login/login.component";
import { JobsModule } from "./jobs/jobs.module";
import { SharedModule } from "./common/shared.module";

@NgModule({
  imports: [ 
    SharedModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    JobsModule
  ],
  providers: [
    SharedService
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  entryComponents: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }