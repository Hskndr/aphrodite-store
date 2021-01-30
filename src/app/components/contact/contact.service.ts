import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize, filter } from 'rxjs/operators';

import { MessageI } from './Message';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.contactCollection = afs.collection<MessageI>('contacts', ref => ref.orderBy('date', 'desc'));
    console.log('contactSVC', this.contactCollection);
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

  // Get a Message
  public getOneMessage(id: MessageI): Observable<MessageI> {
    return this.afs.doc<MessageI>(`contacts/${id}`).valueChanges();
  }

  // Edit Message by Id

  public editMessageById(message: MessageI) {
    console.log('contact Service', message, message.id);
    return this.contactCollection.doc(message.id).update(message);
  }

  // Get unread Message
  public getUnread(): Observable<MessageI[]> {

    return this.afs.
      collection('contacts', ref => ref.where('read', '==', false)).
      snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as MessageI;
            const id = a.payload.doc.id;
            return data;
          });
        }));




  }


}
