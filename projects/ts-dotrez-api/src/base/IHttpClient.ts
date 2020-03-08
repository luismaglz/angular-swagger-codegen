import { Observable } from 'rxjs';
import { Headers } from './Headers';
import { HttpResponse } from './HttpResponse';

export interface IHttpClient {
  get(url: string, headers?: Headers): Observable<HttpResponse>;
  post(
    url: string,
    body?: {} | FormData,
    headers?: Headers
  ): Observable<HttpResponse>;
  put(url: string, body?: {}, headers?: Headers): Observable<HttpResponse>;
  patch(url: string, body?: {}, headers?: Headers): Observable<HttpResponse>;
  delete(url: string, body?: {}, headers?: Headers): Observable<HttpResponse>;
}
