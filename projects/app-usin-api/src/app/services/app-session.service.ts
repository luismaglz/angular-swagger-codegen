import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppSessionService {
  token: string;
  constructor() {}
}
