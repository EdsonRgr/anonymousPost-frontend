import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePost } from 'src/app/models/createPost.model';
import { PostService } from 'src/app/services/posts.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-post',
  templateUrl: './dialog-create-post.component.html',
  styleUrls: ['./dialog-create-post.component.scss']
})
export class DialogCreatePostComponent {

  formulario!: FormGroup;
  creatPost: CreatePost = {};
  

  constructor(
    private form: FormBuilder,
    private postService: PostService,
    private dialogRef: MatDialogRef<DialogCreatePostComponent>) {}

  ngOnInit(): void {
    this.formulario = this.form.group({
      texto: ['', Validators.required],
      imagem: [''],
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.formulario?.patchValue({ imagem: file });
  }

  criarPost(): void {

    console.log(this.formulario.value.texto);

    if (this.formulario.valid) {
      this.creatPost ={
        texto: this.formulario.value.texto,
        urlImg: this.formulario.value.imagem
      }

      this.postService.createPost(this.creatPost).subscribe(
        (novoPost) => {
          console.log('Post criado com sucesso:', novoPost);

         
          this.dialogRef.close();
        },
        (erro) => {
          console.error('Erro ao criar post:', erro);

        }
      );
    }
  
  }

}
