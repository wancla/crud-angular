import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produtos-model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css'],
})
export class ProdutoUpdateComponent implements OnInit {
  produto: Produto;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.showMsg('Produto Alterado com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }
  cancelProduto(): void {
    this.router.navigate(['/produtos']);
  }
}
