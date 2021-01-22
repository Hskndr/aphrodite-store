import { Injectable } from '@angular/core';
import { BlogUserI } from '../user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FileI } from '../file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthBlogService {
  public userData$: Observable<firebase.User>;
  private filePath: string;

  constructor(
    private afBlogAuth: AngularFireAuth,
    private storage: AngularFireStorage,
  ) {
    this.userData$ = afBlogAuth.authState;
  }

  loginByEmail(user: BlogUserI) {
    const { email, password } = user;
    return this.afBlogAuth.auth.signInWithEmailAndPassword(email, password);

  }

  logout() {
    this.afBlogAuth.auth.signOut();
    console.log('logeeout');
  }

  preSaveUserProfile(user: BlogUserI, image?: FileI): void {
    if (image) {
      this.uploadImage(user, image);

    } else {
      this.saveUserProfile(user);
    }
  }

  private uploadImage(user: BlogUserI, image: FileI): void {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          user.photoURL = urlImage;
          this.saveUserProfile(user);
        });
      })
    ).subscribe();
  }

  private saveUserProfile(user: BlogUserI) {
    this.afBlogAuth.auth.currentUser.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    }).then(() => console.log('User Update')).catch(
      err => console.log('Error', err)
    );
  }
}
