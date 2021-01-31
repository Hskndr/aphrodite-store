import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PostI } from '../../../shared/post.interface';
import { FileI } from '../../../shared/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsCollection: AngularFirestoreCollection<PostI>;
  private filePath: any;
  private downloadURL: Observable<string>;


  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
  ) {
    this.postsCollection = afs.collection<PostI>('posts');
  }

  // Métodos
  public getAllPosts(): Observable<PostI[]> {
    return this.afs.
      collection('posts').
      snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PostI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        ));
  }

  // Obtener un Post
  public getOnePost(id: PostI): Observable<PostI> {
    return this.afs.doc<PostI>(`posts/${id}`).valueChanges();
  }

  // Borrar un post
  public deletePostById(post: PostI) {
    return this.postsCollection.doc(post.id).delete();
  }

  // Editar un post
  public editPostById(post: PostI, newImage?: FileI) {
    if (newImage) {
      this.uploadImage(post, newImage);
    } else {
      return this.postsCollection.doc(post.id).update(post);
    }

  }

  // PreCargar imagen
  public preAddAndUpdatePost(post: PostI, image: FileI): void {
    this.uploadImage(post, image);
  }

  // Para crear y editar el post
  private savePost(post: PostI) {
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      pricePost: post.pricePost,
      categoryPost: post.categoryPost,
      colorPost: post.colorPost,
      brandPost: post.brandPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost,
      createdAt: post.createdAt,
      editedAt: post.editedAt,
    };
    // TODO: editpost
    // Verificar si tiene id
    if (post.id) {
      return this.postsCollection.doc(post.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }
  }

  // Cargar imagen
  private uploadImage(post: PostI, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;
          console.log('URL_IMAGE', urlImage);
          console.log('POST', post);
          // CALL ADD
          this.savePost(post);
        });
      })
    ).subscribe();
  }

}
