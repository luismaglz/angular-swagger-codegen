import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ApiModule, Configuration, ConfigurationParameters } from "dotrez-api";
import { AppComponent } from "./app.component";
import { OcpInterceptor } from "./interceptor/ocp-interceptor";
import { TokenInterceptor } from "./interceptor/token-interceptor";
import { BASE_URL } from "./tokens/base-url-token";

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: "https://digitalapim.azure-api.net/fk-dev"
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [
    { provide: BASE_URL, useValue: "https://digitalapim.azure-api.net/fk-dev" },
    { provide: HTTP_INTERCEPTORS, useClass: OcpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
