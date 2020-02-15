import { Component, OnInit } from "@angular/core";
import { BookingretrieveService, TokenService } from "dotrez-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app-usin-api";

  constructor(
    protected tokenService: TokenService,
    protected bookingRetrieveService: BookingretrieveService
  ) {}

  ngOnInit(): void {
    this.tokenService.apiNskV1TokenPost();
    const booking = this.bookingRetrieveService.apiNskV2BookingRetrieveGet(
      "PNR"
    );
    booking.subscribe(b => {
      b.journeys[0].designator.arrival;
    });
  }
}
