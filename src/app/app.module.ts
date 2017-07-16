import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HelpComponent } from './components/help/help.component';
import { ImportComponent } from './components/import/import.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'index',component:IndexComponent},
  {path:'about',component:AboutComponent},
  {path:'help',component:HelpComponent},
  {path:'user',component:UserComponent},
  {path:'import',component:ImportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelpComponent,
    ImportComponent,
    AboutComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
