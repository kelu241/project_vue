import { Observable } from "rxjs";
import { from } from "rxjs";

export class ProdutoService {


  public RequisitarProdutos(url: string, method: string, headers: HeadersInit, body: Object): Observable<any> {


    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      ...headers
    };

    const fechOptions: RequestInit = {
      method: method,
      headers: defaultHeaders,
    };

    if (method !== 'GET' && body) {
      fechOptions.body = JSON.stringify(body)
    }

    return from(fetch(url, fechOptions)
      .then(resposta => resposta.json()));

  }

}