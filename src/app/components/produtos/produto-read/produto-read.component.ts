import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos-model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[];
  displayedColumns = ['id','nome','preco', 'action']

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos;
    })
  }

}
