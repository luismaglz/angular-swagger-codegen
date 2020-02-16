import { HttpHeaders } from "@angular/common/http";
import { InjectionToken } from "@angular/core";

export const BASE_URL = new InjectionToken<HttpHeaders>("@app base url");
