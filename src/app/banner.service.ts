import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BannerService {
  baseUrl: string = "https://hack.kunderlabs.com/exam/telecom/api";

  constructor(private httpClient: HttpClient) {}

  get_product() {
    return this.httpClient.get(this.baseUrl + "/products/new");
  }
}
