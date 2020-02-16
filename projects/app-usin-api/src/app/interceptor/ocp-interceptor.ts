import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../tokens/base-url-token";

@Injectable()
export class OcpInterceptor implements HttpInterceptor {
  constructor(@Inject(BASE_URL) protected baseUrl: string) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(this.baseUrl)) {
      return next.handle(req);
    }
    const headers = req.headers.set(
      "Ocp-Apim-Subscription-Key",
      "cca99f2b5f5248dbaef0f95fe93e1150"
    );
    const duplicate = req.clone({
      headers
    });

    console.log(duplicate);
    return next.handle(duplicate);
  }
}
