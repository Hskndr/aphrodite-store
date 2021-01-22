import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { MessageI } from './Message';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.contactCollection = afs.collection<MessageI>('contacts');
  }

  saveMessage(newContact: MessageI): void {
    this.contactCollection.add(newContact);
  }
  // Get Messages
  public getAllMesages(): Observable<MessageI[]> {
    return this.afs.
      collection('contacts').
      snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as MessageI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        ));
  }
}
