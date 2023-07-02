import { Component, Input, OnInit } from '@angular/core';
import {EventSharingService} from "../../event-sharing.service";
import {BehaviorSubject, Subscription} from "rxjs";
import { FileModel } from '../models/file.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  unitId: number = 0;
  subscription: Subscription;
  @Input() btnTitle: string = 'Butona Tıkla';
  @Input() fileInfo = new BehaviorSubject<FileModel>(new FileModel());
  textClass: string = '';
  size: string = '';
  path: string = '';
  name: string = '';
  type: string = '';
  faIcon: string = "";
  constructor(private sharingService: EventSharingService) {
    this.subscription = sharingService.unitId.subscribe(
      id => {
        this.unitId = id;
      });
  }

  decreaseUnitId(){
    this.sharingService.decreaseUnitId();
    console.log(this.unitId);

  }
 
  ngOnInit() {
    this.fileInfo.subscribe((data) => {
      this.size = (data.fileSize / 1024).toFixed(2);
      this.path = 'https://merterr.com/' + data.pathFile;
      this.name = data.fileName;
      this.type = data.fileType;
    });
  }

}
