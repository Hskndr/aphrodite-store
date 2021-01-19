import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-services/post.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {

  public post$: Observable<PostI>;

  constructor(
    private route: ActivatedRoute,
    private postSvc: PostService,
  ) { }

  ngOnInit(): void {
    // Esto recupera el id del post
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
  }

}
