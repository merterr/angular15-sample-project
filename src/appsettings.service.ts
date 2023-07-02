import { Settings } from './appsettings';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  public settings: Settings;

  constructor() {
    this.settings = new Settings();
  }
}
