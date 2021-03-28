import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from './produtos-model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  baseUrl = 'http://localhost:3001/produtos/';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMsg(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  create(produtos: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produtos);
  }
  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
  readById(id: number): Observable<Produto> {
    const url = ` ${this.baseUrl}${id} `;
    return this.http.get<Produto>(url);
    console.log(url);
  }
  update(produto: Produto): Observable<Produto> {
    const url = ` ${this.baseUrl}${produto.id} `;
    return this.http.put<Produto>(url, produto);
  }
  delete(id: number): Observable<Produto> {
    const url = ` ${this.baseUrl}${id} `;
    return this.http.delete<Produto>(url);
  }
}
