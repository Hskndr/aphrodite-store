import { Component, OnInit } from '@angular/core';
import { FileItem } from './models/file-item';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  providers: [StorageService],
})
export class UploadImageComponent {

  files: FileItem[] = [];
  isOverDrop = false;

  constructor(private readonly storageSvc: StorageService) { }


  onUpload() {
    this.storageSvc.uploadImage(this.files);
  }
}
