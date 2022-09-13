import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private postSvc: PostService) { }

  posts:Post[] = []

  ngOnInit(): void {
    this.postSvc.getAllPosts().subscribe(res => {
      this.posts = res
    })
  }

}
