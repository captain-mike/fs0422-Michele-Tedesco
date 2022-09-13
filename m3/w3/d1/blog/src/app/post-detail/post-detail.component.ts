import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private postService:PostService) { }

  post:Post = new Post('','')

  ngOnInit(): void {

    this.route.params.subscribe((params:any) => {
      this.postService.getPostBySlug(params.slug).subscribe(post => {
        this.post = post[0];
      })
    })

  }

}
