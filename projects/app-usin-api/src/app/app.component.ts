import { Component, OnInit } from "@angular/core";
import { Booking, BookingretrieveService, TokenService } from "dotrez-api";
import { AppSessionService } from "./services/app-session.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app-usin-api";
  booking: Booking;

  constructor(
    protected tokenService: TokenService,
    protected bookingRetrieveService: BookingretrieveService,
    protected appSession: AppSessionService
  ) {}

  ngOnInit(): void {
    this.getTokenAndCallBooking();
  }

  async getTokenAndCallBooking(): Promise<void> {
    const tokenResponse = await this.tokenService
      .apiNskV1TokenPost(null, "body")
      .toPromise();
    this.appSession.token = tokenResponse.data.token;
    const bookingResponse = await this.bookingRetrieveService
      .apiNskV2BookingRetrieveGet(
        "G5E22Z",
        undefined,
        undefined,
        "tylar",
        "hiss"
      )
      .toPromise();
    this.booking = bookingResponse.data;
  }
}
