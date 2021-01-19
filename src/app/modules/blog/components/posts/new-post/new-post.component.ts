import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostI } from '../../../shared/post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image: any = 'assets/HatchfulExport-All/logo.png';

  constructor(
    private postSvc: PostService
  ) { }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    pricePost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  addNewPost(data: PostI) {
    this.postSvc.preAddAndUpdatePost(data, this.image);
    console.log('New Post', data);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
    console.log('Image before save post', this.image);
  }
}
