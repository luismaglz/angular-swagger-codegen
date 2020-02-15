import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ApiModule, Configuration, ConfigurationParameters } from "dotrez-api";
import { AppComponent } from "./app.component";

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
