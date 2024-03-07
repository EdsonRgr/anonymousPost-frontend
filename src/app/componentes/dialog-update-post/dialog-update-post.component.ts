import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-dialog-update-post',
  templateUrl: './dialog-update-post.component.html',
  styleUrls: ['./dialog-update-post.component.scss']
})
export class DialogUpdatePostComponent {

  formulario!: FormGroup;
  post: Post = {
    id: '',
    texto: '',
    urlImg: '',
    dataCriacao: '',
    dataAlteracao: null,
    desativado: false,
    dataDesativacao: null
  }

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogUpdatePostComponent>,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: Post 
  ) {
    this.formulario = this.formBuilder.group({
      texto: [data.texto, Validators.required],
      urlImg: [data.urlImg],
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.formulario?.patchValue({ urlImg: file });
  }

  atualizarPost(): void {
    if (this.formulario.valid) {
      this.post.id = this.data.id;
      this.post.texto = this.formulario.value.texto;
      this.post.urlImg = this.formulario.value.urlImg;
     
      this.postService.updatePost(this.post).subscribe(()=>{
        console.log("Deu certo")
        this.dialogRef.close();
      })
      
    }
  }
}

