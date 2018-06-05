import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './source/header/header.component';
import {FooterComponent} from './source/footer/footer.component';
import {MainComponent} from './home/main/main.component';
import {AboutUsComponent} from './home/about-us/about-us.component';
import {ContactsComponent} from './home/contacts/contacts.component';
import {ProjectsComponent} from './home/projects/projects.component';
import {ResultSearchComponent} from './home/result-search/result-search.component';
import {ResultSearchOneComponent} from './home/result-search/result-search-one/result-search-one.component';
import {RoomOneComponent} from './home/room-one/room-one.component';
import {ProjectOneComponent} from './home/project-one/project-one.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './admin/admin.component';
import {AddComponent} from './admin/add/add.component';
import {HouseComponent} from './admin/add/house/house.component';
import {FlatComponent} from './admin/add/house/flat/flat.component';
import {serviceProvider} from '../shared/service/service.providers';
import {MyHttpInterceptor} from '../shared/interceptor/my-http-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './source/sign-in/sign-in.component';
import {SignUpComponent} from './source/sign-up/sign-up.component';
import {NgxMaskModule} from 'ngx-mask';
import {DirectiveModule} from '../shared/directive/directive.module';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {
        path: '', component: HomeComponent, children: [
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
            path: 'project', children: [
              {
                path: '', component: ProjectsComponent
              },
              {
                path: ':id', component: ProjectOneComponent
              },
            ]
          },
          {
            path: 'result-search', component: ResultSearchComponent
          },
          {
            path: 'room/:id', component: RoomOneComponent
          },
        ]
      },
      {
        path: 'sign-up', component: SignUpComponent
      },
      {
        path: 'login', pathMatch: 'full', redirectTo: 'sign-in'
      },
      {
        path: 'sign-in', component: SignInComponent
      },
      {
        path: 'admin', component: AdminComponent, children:[
          {
            path: 'add', component: AddComponent, children:[
              {
                path: 'house', component: HouseComponent
              },
            ]
          },
        ]
      },
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
    ProjectsComponent,
    ResultSearchComponent,
    ResultSearchOneComponent,
    RoomOneComponent,
    ProjectOneComponent,
    AdminComponent,
    AddComponent,
    HouseComponent,
    FlatComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  providers: [
    ...serviceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
