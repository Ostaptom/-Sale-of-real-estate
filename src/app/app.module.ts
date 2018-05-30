import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './source/header/header.component';
import { FooterComponent } from './source/footer/footer.component';
import { MainComponent } from './home/main/main.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {
        path:'', component: HomeComponent, children: [
          {
            path: '', component: MainComponent
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
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
