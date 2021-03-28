import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import  {ProdutoCrudComponent} from './views/produto-crud/produto-crud.component';
import {ProdutosCreateComponent} from './components/produtos/produtos-create/produtos-create.component';
import {ProdutoUpdateComponent} from './components/produtos/produto-update/produto-update.component';
import {ProdutoDeleteComponent} from './components/produtos/produto-delete/produto-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent
  },
  {
    path: "produtos/create",
    component: ProdutosCreateComponent
  },
  {
    path: "produtos/update/:id",
    component: ProdutoUpdateComponent
  },
  {
    path: "produtos/delete/:id",
    component: ProdutoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
