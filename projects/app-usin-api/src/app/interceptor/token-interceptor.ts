import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSessionService } from "../services/app-session.service";
import { BASE_URL } from "../tokens/base-url-token";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    @Inject(BASE_URL) protected baseUrl: string,
    protected appSession: AppSessionService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Just being lazy
    if (!req.url.includes(this.baseUrl) || req.url.includes("token")) {
      return next.handle(req);
    }
    const headers = req.headers.set("Authorization", this.appSession.token);
    const duplicate = req.clone({
      headers
    });

    console.log(duplicate);
    return next.handle(duplicate);
  }
}
