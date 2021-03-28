import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Produto } from './produtos-model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  baseUrl = 'http://localhost:3001/produtos/';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMsg(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }



  create(produtos: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produtos).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  readById(id: number): Observable<Produto> {
    const url = ` ${this.baseUrl}${id} `;
    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;

  }

  update(produto: Produto): Observable<Produto> {
    const url = ` ${this.baseUrl}${produto.id} `;
    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  delete(id: number): Observable<Produto> {
    const url = ` ${this.baseUrl}${id} `;
    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMsg('Ocorreu um erro!', true);
    return EMPTY;
  }
}
