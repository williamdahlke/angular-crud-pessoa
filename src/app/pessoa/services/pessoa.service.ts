import { Injectable } from '@angular/core';
import { Pessoa } from '../../shared/models/pessoa.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';

const LS_CHAVE = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  BASE_URL = "http://localhost:8080/pessoas";

  httpOptions = {
    observe: "response" as "response",
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient : HttpClient) { }

  listarTodos(): Observable<Pessoa[] | null> {
    return this.httpClient.get<Pessoa[]>(
      this.BASE_URL, this.httpOptions).pipe(
        map((resp: HttpResponse<Pessoa[]>) => {
          if (resp.status != 200) {            
            return [];
          } else {
            let lista : Pessoa[] = [];
            if (resp.body && resp.body.length>0){              
              let pes : Pessoa = new Pessoa();
              resp.body.forEach(p=> {
                pes = new Pessoa(p.id, p.nome, p.idade, p.dataNascimento, p.motorista);
                pes.dateFromRest();                
                lista.push(pes);
              });
            }
            return lista;
          }
        }
        ), catchError((e, c) => {
          if (e.status == 404) {
            return of([]);
          } else {
            return throwError(() => e);
          }
        })
      );
  }

  buscarPorId(id: number): Observable<Pessoa | null> {
    return this.httpClient.get<Pessoa>(this.BASE_URL + "/" + id,
      this.httpOptions).pipe(
        map((resp: HttpResponse<Pessoa>) => {
          if (resp.status != 200) {
            return null;
          } else {
            let pes : Pessoa = new Pessoa(resp.body?.id, resp.body?.nome, resp.body?.idade, resp.body?.dataNascimento, resp.body?.motorista);
            pes.dateFromRest();
            return pes;
          }
        }), catchError((e, c) => {
          if (e.status == 404) {
            return of(null);
          } else {
            return throwError(() => e);
          }
        })
      )
  }

  inserir(pessoa: Pessoa): Observable<Pessoa | null> {
    pessoa.dateToRest();
    return this.httpClient.post<Pessoa>(this.BASE_URL,
      JSON.stringify(pessoa), this.httpOptions).pipe(
        map((resp: HttpResponse<Pessoa>) => {
          if (resp.status != 201) {
            return null;
          } else {
            let pes : Pessoa = new Pessoa(resp.body?.id, resp.body?.nome, resp.body?.idade, resp.body?.dataNascimento, resp.body?.motorista);
            pes.dateFromRest();
            return pes;
          }
        }), catchError((e, c) => {
          return throwError(() => e);
        })
      );
  }

  remover(id: number): Observable<Pessoa | null> {
    return this.httpClient.delete<Pessoa>(this.BASE_URL + "/" + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Pessoa>) => {
        if (resp.status != 200) {
          return null;
        } else {
          let pes : Pessoa = new Pessoa(resp.body?.id, resp.body?.nome, resp.body?.idade, resp.body?.dataNascimento, resp.body?.motorista);
          pes.dateFromRest();
          return pes;          
        }
      }), catchError((e, c) => {
        return throwError(() => e);
      })      
    )
  }

  alterar(pessoa: Pessoa): Observable<Pessoa | null> {
    pessoa.dateToRest();
    return this.httpClient.put<Pessoa>(this.BASE_URL + "/" + pessoa.id, JSON.stringify(pessoa), 
    this.httpOptions).pipe(
        map((resp: HttpResponse<Pessoa>) => {
          if (resp.status != 200) {
            return null;
          } else {
            let pes : Pessoa = new Pessoa(resp.body?.id, resp.body?.nome, resp.body?.idade, resp.body?.dataNascimento, resp.body?.motorista);
            pes.dateFromRest();
            return pes;
          }
        }), catchError((e, c) => {
          return throwError(() => e);
        })
      );        
  }
}
