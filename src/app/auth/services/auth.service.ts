import { User } from './../../components/shared/models/user.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { switchMap, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { RoleValidator } from '../helpers/roleValidator';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends RoleValidator {
  public user$: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  //Login Method
  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  //Register Method
  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  //Logout Method
  async logout() {
    try {
      await this.afAuth.auth.signOut();
      //Se puede agregar los cambios en el localstorage.
    } catch (error) {
      console.log(error);
    }
  }
  //Get current user Method
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  //Send email Method
  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }

  // Reset Password
  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  // Google login
  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;

    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'EDITOR',
    };

    return userRef.set(data, { merge: true });
  }
  // ******
}

