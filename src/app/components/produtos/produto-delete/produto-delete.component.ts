import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produtos-model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css'],
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto;

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id =  +this.route.snapshot.paramMap.get("id");
    this.produtoService.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  deleteProduto(): void {
    this.produtoService.delete(this.produto.id).subscribe(() => {
      this.produtoService.showMsg('Produto Excluido com Sucesso!');
      this.router.navigate(['/produtos']);
    });
  }
  cancelProduto(): void {
    this.router.navigate(['/produtos']);
  }
}
