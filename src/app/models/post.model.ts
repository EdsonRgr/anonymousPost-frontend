export interface Post {
    id: string;
    nomeDoUsuario?: string;
    texto: string;
    urlImg: string;
    dataCriacao: string;
    dataAlteracao: string | null;
    desativado: boolean;
    dataDesativacao: string | null;
  }