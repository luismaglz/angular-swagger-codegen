import { Component, OnInit } from "@angular/core";
import { BookingretrieveService, TokenService } from "dotrez-api";
import { take } from "rxjs/operators";

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
    this.tokenService
      .apiNskV1TokenPost()
      .pipe(take(1))
      .subscribe(t => console.log(t));
    const booking = this.bookingRetrieveService.apiNskV2BookingRetrieveGet(
      "PNR"
    );
    booking.pipe(take(1)).subscribe(b => {
      b.journeys[0].designator.arrival;
    });
  }
}
