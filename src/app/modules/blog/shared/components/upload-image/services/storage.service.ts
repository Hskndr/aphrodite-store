import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileItem } from '../models/file-item';
import { finalize } from 'rxjs/operators';

@Injectable()

export class StorageService {

  private MEDIA_STORAGE_PATH = 'products-images';

  constructor(
    private readonly storage: AngularFireStorage,
  ) { }
  // Método que subira los arhvos
  uploadImage(images: FileItem[]) {
    for (const item of images) {
      item.uploading = true;
      // Nombre especifico para que no se sobreescriban
      const filePath = this.genetateFileName(item.name);
      // Referencia a la ruta
      const fileRef = this.storage.ref(filePath);
      // Fichero y ruta para donde se guardaran
      const task = this.storage.upload(filePath, item.file);

      // Devuelve porcentaje de subida del archivo
      item.uploadPercent = task.percentageChanges();
      // Magia de AngularFireStorage
      task.snapshotChanges()
        .pipe(
          finalize(() => {
            item.downloadURL = fileRef.getDownloadURL();
            item.uploading = false;
          })
        ).subscribe();
    }
  }

  // Generar nombre del archivo
  private genetateFileName(name: string): string {
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }

}
