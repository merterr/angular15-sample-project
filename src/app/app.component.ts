import { Component } from '@angular/core';
import { Settings } from 'src/appsettings';
import { SettingsHttpService } from 'src/appsettings.http.service';
import { app_Init } from './app.module';
import {Subscription} from "rxjs";
import {EventSharingService} from "../event-sharing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 Test Projesi';

  unitId: number = 0;
  subscription: Subscription;
  constructor(private sharingService: EventSharingService) {
    this.subscription = sharingService.unitId.subscribe(
      id => {
        this.unitId = id;
      });
  }





}
