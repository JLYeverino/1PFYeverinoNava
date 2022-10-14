import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { AbmTablaComponent } from './components/abm-tabla/abm-tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CrearPersonaDialogComponent } from './components/crear-persona-dialog/crear-persona-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    DirectivasComponent,
    AbmTablaComponent,
    CrearPersonaDialogComponent,
    DirectivaPersonalizadaDirective,
    NombreCompletoPipe
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
