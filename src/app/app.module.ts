import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CoprightsComponent } from './coprights/coprights.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';

import {mypage} from './routing';//calling serparate routing page
import { ProfileComponent } from './profile/profile.component';
import { ChangeaddressComponent } from './changeaddress/changeaddress.component';
import { ChangecontactComponent } from './changecontact/changecontact.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CategoryComponent } from './category/category.component';
import { LedsComponent } from './leds/leds.component';
import { RequirementComponent } from './requirement/requirement.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    PrivacyComponent,
    TermsComponent,
    CoprightsComponent,
    AboutComponent,
    ContactComponent,
    ChatComponent,
    AboutcompanyComponent,
    ProfileComponent,
    ChangeaddressComponent,
    ChangecontactComponent,
    ChangepasswordComponent,
    CategoryComponent,
    LedsComponent,
    RequirementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot(mypage),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
