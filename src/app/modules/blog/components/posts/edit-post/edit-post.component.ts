import { Component, OnInit, Input } from '@angular/core';
import { PostI } from '../../../shared/post.interface';
import { PostService } from '../post-services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post: PostI;

  constructor(
    private postSvc: PostService
  ) { }

  get titlePost() { return this.editPostForm.get('titlePost'); }
  get contentPost() { return this.editPostForm.get('contentPost'); }
  get pricePost() { return this.editPostForm.get('pricePost'); }
  get categoryPost() { return this.editPostForm.get('categoryPost'); }
  get colorPost() { return this.editPostForm.get('colorPost'); }
  get brandPost() { return this.editPostForm.get('brandPost'); }
  get tagsPost() { return this.editPostForm.get('tagsPost'); }

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    pricePost: new FormControl('', Validators.required),
    categoryPost: new FormControl('', Validators.required),
    colorPost: new FormControl('', Validators.required),
    brandPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.image = this.post.imagePost;
    this.imageOriginal = this.post.imagePost;
    this.initValuesForm();
  }

  editPost(post: PostI) {

    if (this.image === this.imageOriginal) {
      post.imagePost = this.imageOriginal;
      // Call method (post)
      this.postSvc.editPostById(post);
    } else {
      // Call method (post, this.image)
      this.postSvc.editPostById(post, this.image);
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: this.post.id,
      titlePost: this.post.titlePost,
      contentPost: this.post.contentPost,
      tagsPost: this.post.tagsPost,
      categoryPost: this.post.categoryPost,
      colorPost: this.post.colorPost,
      brandPost: this.post.brandPost,
      pricePost: this.post.pricePost,
    });
  }

  setDate() {
    const date = new Date();
    console.log('actualdate', date);
    return date;
  }


}
