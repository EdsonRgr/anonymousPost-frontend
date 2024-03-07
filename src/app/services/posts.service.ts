import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { CreatePost } from '../models/createPost.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(createPostData: CreatePost):Observable<Post>{
    return this.http.post<Post>(`${this.apiUrl}`, createPostData)
  } 

  desativarPost(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/desativa/${id}`, null);
  }

  updatePost(postUpdateData: Post): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, postUpdateData);
  }

  deletarPost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}