import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

import { BannerService } from "../banner.service";

@Component({
  selector: "dynamic-banner",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./dynamic-banner.component.html",
  styleUrls: ["./dynamic-banner.component.scss"]
})
export class DynamicBannerComponent implements OnInit {
  private product = [];
  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.get_product();
  }

  get_product() {
    this.bannerService.get_product().subscribe((res: any[]) => {
      console.log(res["product"]);
      this.product = res["product"];
    });
  }
}
