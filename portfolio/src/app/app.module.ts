import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgComponent } from './components/logo-arg/logo-arg.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { FotoComponent } from './components/foto/foto.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    LoginComponent,
    FotoComponent,
    SobremiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
