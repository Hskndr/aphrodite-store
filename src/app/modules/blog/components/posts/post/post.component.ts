import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-services/post.service';
import { PostI } from '../../../shared/post.interface';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // public posts$: Observable<PostI[]>;
  @Input() post: PostI;
  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    // this.posts$ = this.postSvc.getAllPosts();
  }

}
