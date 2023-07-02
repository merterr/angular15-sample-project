import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SettingsService } from "./appsettings.service";
import { Settings } from "./appsettings";
import { ReplaySubject } from "rxjs";
import { __values } from "tslib";

@Injectable({ providedIn: 'root' })
export class SettingsHttpService {
  data1!: Settings;
  constructor(private http: HttpClient, private settingsService: SettingsService) {
  }

  initializeApp(){
    
    this.http.get("assets/env.prod.txt",{responseType: 'text'}).subscribe({
      next: data =>{
        console.log(data.toString());
      }
    });
  }

}
