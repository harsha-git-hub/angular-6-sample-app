import {Router, Routes} from '@angular/router';import { AppComponent } from './app.component';


import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CoprightsComponent } from './coprights/coprights.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { Route } from '@angular/compiler/src/core';
import { ProfileComponent } from './profile/profile.component';
import { ChangeaddressComponent } from './changeaddress/changeaddress.component';
import { ChangecontactComponent } from './changecontact/changecontact.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LedsComponent } from './leds/leds.component';
import { CategoryComponent } from './category/category.component';
import { RequirementComponent } from './requirement/requirement.component';

export const mypage:Routes=[
                    {path:"leds",component:LedsComponent},
                    {path:"category",component:CategoryComponent},
                    {path:"requirement",component:RequirementComponent},
                    {path:"profile",component:ProfileComponent,
                    children:[
                        {path:"contact",component:ChangecontactComponent},
                        {path:"address",component:ChangeaddressComponent},
                        {path:"password",component:ChangepasswordComponent}
                    ]
                },
                {

                    path:"company",component:AboutcompanyComponent,
                    children:[
                        {path:"privacy",component:PrivacyComponent},
                        {path:"terms",component:TermsComponent},
                        {path:"copyrights",component:CoprightsComponent},
                        {path:"about",component:AboutComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"chat",component:ChatComponent}
                    ]
                 }
];