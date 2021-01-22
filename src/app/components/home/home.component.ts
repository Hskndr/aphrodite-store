import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/modules/blog/components/posts/post-services/post.service';
import { PostI } from 'src/app/modules/blog/shared/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostI[]>;

  constructor(
    private postSvc: PostService,

  ) { }

  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();

  }

}
