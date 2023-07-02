import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FileModel } from '../models/file.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  fileInfo: BehaviorSubject<FileModel> = new BehaviorSubject<FileModel>(new FileModel());
  @Output() fileInfo1: EventEmitter<FileModel> = new EventEmitter();
  sampleFileInfo: FileModel = new FileModel();
  entityForm = new FormGroup({
    receiptFileId: new FormControl(0),
    receiptFile: new FormControl(),
  });
  ngOnInit() {
    this.fileInfo.next(this.sampleFileInfo);
  }

  onFileChange(event: any): void {
    console.log(event);

    this.fileInfo.next(new FileModel);

    if (event != null && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.sampleFileInfo.fileSize = file.size;
      this.sampleFileInfo.pathFile = '';
      this.sampleFileInfo.fileType = file.type;
      this.sampleFileInfo.fileName = file.name;
      this.fileInfo.next(this.sampleFileInfo);

      this.fileInfo1.emit(this.sampleFileInfo);

      this.entityForm.patchValue({
        receiptFile: file,
      });
    } else {
      this.entityForm.patchValue({
        receiptFile: '',
      });
    }
  }
}
