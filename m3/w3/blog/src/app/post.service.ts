import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:3000/posts'

  getAllPosts(){
    return this.http.get<Post[]>(this.apiUrl)
  }

  getPostBySlug(slug:string){
    return this.http.get<Post[]>(this.apiUrl+'/?slug='+slug)
  }

  addPost(post:Post){
    return this.http.post<Post>(this.apiUrl,post)
  }

  editPost(post:Post){
    return this.http.put<Post>(this.apiUrl+'/'+post.id,post)
  }

  deletePost(post: Post){
    return this.http.delete<Post>(this.apiUrl+'/'+post.id)
  }

}
