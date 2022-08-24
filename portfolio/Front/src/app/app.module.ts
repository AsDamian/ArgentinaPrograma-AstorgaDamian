import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TestComponent } from './components/test/test.component';
import { PieComponent } from './components/pie/pie.component';

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
    SobremiComponent,
    ExperienciaComponent,
    PuestoComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    TestComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      imageHeight:150,
      imageWidth:150,
      radius:100,
      showImage:true,
      outerStrokeWidth:16,
      innerStrokeWidth:8,
      outerStrokeColor:"#78C000",
      innerStrokeColor:"#C7E596",
      animation:true,
      animationDuration:300,
     } ),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
