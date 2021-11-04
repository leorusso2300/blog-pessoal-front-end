import { Postagem } from "./Postagem"

export class Tema{
    public id: number  
    public descricao: string 
    public titulo: string 
    public postagem: Postagem[]
}