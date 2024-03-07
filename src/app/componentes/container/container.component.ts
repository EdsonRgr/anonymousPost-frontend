import { Component, OnInit, createComponent } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/posts.service';
import { DialogCreatePostComponent } from '../dialog-create-post/dialog-create-post.component';
import { DialogUpdatePostComponent } from '../dialog-update-post/dialog-update-post.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{

  posts!: Post[];
  postsFiltrados!: Post[];
  termoPesquisa: string = '';
  contadorDePosts: number = 0
  value = 'limpar';

  constructor(
    private postService: PostService,
    private dialog: MatDialog){
    
      this.updatePosts();
  }

  ngOnInit(): void{
    
  }

  updatePosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.sort((a, b) => {
        const dataA = new Date(a.dataCriacao).getTime();
        const dataB = new Date(b.dataCriacao).getTime();
        return dataB - dataA;
      });
      this.postsFiltrados = this.posts;
      this.contadorDePosts = this.posts.length
    });
  }


  createPost(): void {
    const dialogRef = this.dialog.open(DialogCreatePostComponent, {
      width: '400px', 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.updatePosts();
    });
  }


  desativarPost(id: string): void {
    this.postService.desativarPost(id).subscribe(
      (r:any) => {
        this.updatePosts();
      }
    );
  }

  excluiPost(id: string): void {
    this.postService.deletarPost(id).subscribe(
      (r:any) => {
        this.updatePosts();
      }
    );
  }


  editarPost(post: Post){
    const dialogRef = this.dialog.open(DialogUpdatePostComponent, {
      width: '400px',
      data: post
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updatePosts();
    });
  }

  

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.postsFiltrados = this.posts.filter(x => {
      return x.texto.toLowerCase().includes(value);
    })
    
  }

  

}
