import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'app/auth.guard';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
  // declarations: 属于这个模块的内容
  //are to make directives (including components and pipes) from the current module available to other directives in the current module.
  //Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
  declarations: [
    AppComponent,
    UserPageComponent,
    LoginComponent,
    SiteHeaderComponent,
    UserFilterPipe
  ],
  // imports: 这个模块使用的内容
  //makes the exported declarations of other modules available in the current module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: 这个模块依赖的内容
  //are to make services and values known to DI.
  //They are added to the root scope and they are injected to other services or directives that have them as dependency.
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
