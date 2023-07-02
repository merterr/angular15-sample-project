import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsHttpService } from 'src/appsettings.http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';

export function app_Init(settingsHttpService: SettingsHttpService) {
  return () => settingsHttpService.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: app_Init, deps: [SettingsHttpService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
