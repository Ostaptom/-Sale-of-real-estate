import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './source/header/header.component';
import { FooterComponent } from './source/footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { ProjectsComponent } from './home/projects/projects.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {
        path:'', component: HomeComponent, children: [
          {
            path: '', component: MainComponent
          },
          {
            path: 'about-us', component: AboutUsComponent
          },
          {
            path: 'contacts', component: ContactsComponent
          },
          {
            path: 'projects', component: ProjectsComponent
          },
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    ContactsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
