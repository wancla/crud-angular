import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import {Router} from '@angular/router';
import { Produto } from '../produtos-model';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: null
  }

  constructor(private produtoService: ProdutosService, private router: Router) { }

  ngOnInit(): void {

  }
  createProduto(): void{
    this.produtoService.create(this.produto).subscribe(()=>{
      this.produtoService.showMsg("Produto Criado!");
      this.router.navigate(['/produtos']);
    });

  }
  cancelProduto(): void{
    this.router.navigate(['/produtos']);
  }
}
