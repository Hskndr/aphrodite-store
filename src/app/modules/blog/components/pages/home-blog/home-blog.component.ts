import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/post.interface';
import { PostService } from '../../posts/post-services/post.service';


@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
})
export class HomeBlogComponent implements OnInit {
  public posts$: Observable<PostI[]>;

  constructor(
    private postSvc: PostService,
  ) { }
  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }

}
