import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileModel } from '../models/file.model';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit{
  textClass: string = '';
  size: string = '';
  path: string = '';
  name: string = '';
  type: string = '';
  faIcon: string = "";
  @Input()fileInfo!: EventEmitter<FileModel>;

  ngOnInit(): void {
      this.fileInfo.subscribe((data: FileModel) => {
        this.size =  (data.fileSize / 1024).toFixed(2);;
        this.name = data.fileName;
      });
  }

  
}
