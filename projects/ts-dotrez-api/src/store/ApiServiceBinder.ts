import { interfaces } from "inversify";

import { StoreAccountService } from "./api/account.service";
import { StoreAddOnsService } from "./api/addOns.service";
import { StoreApoService } from "./api/apo.service";
import { StoreAvailabilityService } from "./api/availability.service";
import { StoreBookingService } from "./api/booking.service";
import { StoreBookingboardingpassesService } from "./api/bookingboardingpasses.service";
import { StoreBookingcheckinService } from "./api/bookingcheckin.service";
import { StoreBookingcontactsService } from "./api/bookingcontacts.service";
import { StoreBookingjourneysService } from "./api/bookingjourneys.service";
import { StoreBookingpassengersService } from "./api/bookingpassengers.service";
import { StoreBookingpaymentsService } from "./api/bookingpayments.service";
import { StoreBookingretrieveService } from "./api/bookingretrieve.service";
import { StoreBookingsService } from "./api/bookings.service";
import { StoreBookingssrsService } from "./api/bookingssrs.service";
import { StoreBundlesService } from "./api/bundles.service";
import { StoreCollectionService } from "./api/collection.service";
import { StoreConfigurationService } from "./api/configuration.service";
import { StoreCurrencyService } from "./api/currency.service";
import { StoreFareRulesService } from "./api/fareRules.service";
import { StoreGraphService } from "./api/graph.service";
import { StoreHealthService } from "./api/health.service";
import { StoreManifestService } from "./api/manifest.service";
import { StoreMessagesService } from "./api/messages.service";
import { StoreOneTimeTravelNotificationsService } from "./api/oneTimeTravelNotifications.service";
import { StoreOrganizationsService } from "./api/organizations.service";
import { StoreOrganizations2Service } from "./api/organizations2.service";
import { StorePersonsService } from "./api/persons.service";
import { StorePromotionsService } from "./api/promotions.service";
import { StoreQueuesService } from "./api/queues.service";
import { StoreRedirectService } from "./api/redirect.service";
import { StoreRedisService } from "./api/redis.service";
import { StoreResourcesService } from "./api/resources.service";
import { StoreSeatmapsService } from "./api/seatmaps.service";
import { StoreSettingsService } from "./api/settings.service";
import { StoreTokenService } from "./api/token.service";
import { StoreTripService } from "./api/trip.service";
import { StoreUserService } from "./api/user.service";
import { StoreUserpersonService } from "./api/userperson.service";
import { StoreUsersService } from "./api/users.service";
import { StoreUtilitiesService } from "./api/utilities.service";
import { StoreVoucherIssuanceService } from "./api/voucherIssuance.service";
import { StoreVouchersService } from "./api/vouchers.service";

export class StoreApiServiceBinder {
  public static withStoreAccountService(container: interfaces.Container) {
    container
      .bind<AccountService>("AccountService")
      .to(AccountService)
      .inSingletonScope();
    container
      .bind<StoreAccountService>("StoreAccountService")
      .to(StoreAccountService)
      .inSingletonScope();
  }
  public static withStoreAddOnsService(container: interfaces.Container) {
    container
      .bind<AddOnsService>("AddOnsService")
      .to(AddOnsService)
      .inSingletonScope();
    container
      .bind<StoreAddOnsService>("StoreAddOnsService")
      .to(StoreAddOnsService)
      .inSingletonScope();
  }
  public static withStoreApoService(container: interfaces.Container) {
    container
      .bind<ApoService>("ApoService")
      .to(ApoService)
      .inSingletonScope();
    container
      .bind<StoreApoService>("StoreApoService")
      .to(StoreApoService)
      .inSingletonScope();
  }
  public static withStoreAvailabilityService(container: interfaces.Container) {
    container
      .bind<AvailabilityService>("AvailabilityService")
      .to(AvailabilityService)
      .inSingletonScope();
    container
      .bind<StoreAvailabilityService>("StoreAvailabilityService")
      .to(StoreAvailabilityService)
      .inSingletonScope();
  }
  public static withStoreBookingService(container: interfaces.Container) {
    container
      .bind<BookingService>("BookingService")
      .to(BookingService)
      .inSingletonScope();
    container
      .bind<StoreBookingService>("StoreBookingService")
      .to(StoreBookingService)
      .inSingletonScope();
  }
  public static withStoreBookingboardingpassesService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingboardingpassesService>("BookingboardingpassesService")
      .to(BookingboardingpassesService)
      .inSingletonScope();
    container
      .bind<StoreBookingboardingpassesService>(
        "StoreBookingboardingpassesService"
      )
      .to(StoreBookingboardingpassesService)
      .inSingletonScope();
  }
  public static withStoreBookingcheckinService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingcheckinService>("BookingcheckinService")
      .to(BookingcheckinService)
      .inSingletonScope();
    container
      .bind<StoreBookingcheckinService>("StoreBookingcheckinService")
      .to(StoreBookingcheckinService)
      .inSingletonScope();
  }
  public static withStoreBookingcontactsService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingcontactsService>("BookingcontactsService")
      .to(BookingcontactsService)
      .inSingletonScope();
    container
      .bind<StoreBookingcontactsService>("StoreBookingcontactsService")
      .to(StoreBookingcontactsService)
      .inSingletonScope();
  }
  public static withStoreBookingjourneysService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingjourneysService>("BookingjourneysService")
      .to(BookingjourneysService)
      .inSingletonScope();
    container
      .bind<StoreBookingjourneysService>("StoreBookingjourneysService")
      .to(StoreBookingjourneysService)
      .inSingletonScope();
  }
  public static withStoreBookingpassengersService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingpassengersService>("BookingpassengersService")
      .to(BookingpassengersService)
      .inSingletonScope();
    container
      .bind<StoreBookingpassengersService>("StoreBookingpassengersService")
      .to(StoreBookingpassengersService)
      .inSingletonScope();
  }
  public static withStoreBookingpaymentsService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingpaymentsService>("BookingpaymentsService")
      .to(BookingpaymentsService)
      .inSingletonScope();
    container
      .bind<StoreBookingpaymentsService>("StoreBookingpaymentsService")
      .to(StoreBookingpaymentsService)
      .inSingletonScope();
  }
  public static withStoreBookingretrieveService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingretrieveService>("BookingretrieveService")
      .to(BookingretrieveService)
      .inSingletonScope();
    container
      .bind<StoreBookingretrieveService>("StoreBookingretrieveService")
      .to(StoreBookingretrieveService)
      .inSingletonScope();
  }
  public static withStoreBookingsService(container: interfaces.Container) {
    container
      .bind<BookingsService>("BookingsService")
      .to(BookingsService)
      .inSingletonScope();
    container
      .bind<StoreBookingsService>("StoreBookingsService")
      .to(StoreBookingsService)
      .inSingletonScope();
  }
  public static withStoreBookingssrsService(container: interfaces.Container) {
    container
      .bind<BookingssrsService>("BookingssrsService")
      .to(BookingssrsService)
      .inSingletonScope();
    container
      .bind<StoreBookingssrsService>("StoreBookingssrsService")
      .to(StoreBookingssrsService)
      .inSingletonScope();
  }
  public static withStoreBundlesService(container: interfaces.Container) {
    container
      .bind<BundlesService>("BundlesService")
      .to(BundlesService)
      .inSingletonScope();
    container
      .bind<StoreBundlesService>("StoreBundlesService")
      .to(StoreBundlesService)
      .inSingletonScope();
  }
  public static withStoreCollectionService(container: interfaces.Container) {
    container
      .bind<CollectionService>("CollectionService")
      .to(CollectionService)
      .inSingletonScope();
    container
      .bind<StoreCollectionService>("StoreCollectionService")
      .to(StoreCollectionService)
      .inSingletonScope();
  }
  public static withStoreConfigurationService(container: interfaces.Container) {
    container
      .bind<ConfigurationService>("ConfigurationService")
      .to(ConfigurationService)
      .inSingletonScope();
    container
      .bind<StoreConfigurationService>("StoreConfigurationService")
      .to(StoreConfigurationService)
      .inSingletonScope();
  }
  public static withStoreCurrencyService(container: interfaces.Container) {
    container
      .bind<CurrencyService>("CurrencyService")
      .to(CurrencyService)
      .inSingletonScope();
    container
      .bind<StoreCurrencyService>("StoreCurrencyService")
      .to(StoreCurrencyService)
      .inSingletonScope();
  }
  public static withStoreFareRulesService(container: interfaces.Container) {
    container
      .bind<FareRulesService>("FareRulesService")
      .to(FareRulesService)
      .inSingletonScope();
    container
      .bind<StoreFareRulesService>("StoreFareRulesService")
      .to(StoreFareRulesService)
      .inSingletonScope();
  }
  public static withStoreGraphService(container: interfaces.Container) {
    container
      .bind<GraphService>("GraphService")
      .to(GraphService)
      .inSingletonScope();
    container
      .bind<StoreGraphService>("StoreGraphService")
      .to(StoreGraphService)
      .inSingletonScope();
  }
  public static withStoreHealthService(container: interfaces.Container) {
    container
      .bind<HealthService>("HealthService")
      .to(HealthService)
      .inSingletonScope();
    container
      .bind<StoreHealthService>("StoreHealthService")
      .to(StoreHealthService)
      .inSingletonScope();
  }
  public static withStoreManifestService(container: interfaces.Container) {
    container
      .bind<ManifestService>("ManifestService")
      .to(ManifestService)
      .inSingletonScope();
    container
      .bind<StoreManifestService>("StoreManifestService")
      .to(StoreManifestService)
      .inSingletonScope();
  }
  public static withStoreMessagesService(container: interfaces.Container) {
    container
      .bind<MessagesService>("MessagesService")
      .to(MessagesService)
      .inSingletonScope();
    container
      .bind<StoreMessagesService>("StoreMessagesService")
      .to(StoreMessagesService)
      .inSingletonScope();
  }
  public static withStoreOneTimeTravelNotificationsService(
    container: interfaces.Container
  ) {
    container
      .bind<OneTimeTravelNotificationsService>(
        "OneTimeTravelNotificationsService"
      )
      .to(OneTimeTravelNotificationsService)
      .inSingletonScope();
    container
      .bind<StoreOneTimeTravelNotificationsService>(
        "StoreOneTimeTravelNotificationsService"
      )
      .to(StoreOneTimeTravelNotificationsService)
      .inSingletonScope();
  }
  public static withStoreOrganizationsService(container: interfaces.Container) {
    container
      .bind<OrganizationsService>("OrganizationsService")
      .to(OrganizationsService)
      .inSingletonScope();
    container
      .bind<StoreOrganizationsService>("StoreOrganizationsService")
      .to(StoreOrganizationsService)
      .inSingletonScope();
  }
  public static withStoreOrganizations2Service(
    container: interfaces.Container
  ) {
    container
      .bind<Organizations2Service>("Organizations2Service")
      .to(Organizations2Service)
      .inSingletonScope();
    container
      .bind<StoreOrganizations2Service>("StoreOrganizations2Service")
      .to(StoreOrganizations2Service)
      .inSingletonScope();
  }
  public static withStorePersonsService(container: interfaces.Container) {
    container
      .bind<PersonsService>("PersonsService")
      .to(PersonsService)
      .inSingletonScope();
    container
      .bind<StorePersonsService>("StorePersonsService")
      .to(StorePersonsService)
      .inSingletonScope();
  }
  public static withStorePromotionsService(container: interfaces.Container) {
    container
      .bind<PromotionsService>("PromotionsService")
      .to(PromotionsService)
      .inSingletonScope();
    container
      .bind<StorePromotionsService>("StorePromotionsService")
      .to(StorePromotionsService)
      .inSingletonScope();
  }
  public static withStoreQueuesService(container: interfaces.Container) {
    container
      .bind<QueuesService>("QueuesService")
      .to(QueuesService)
      .inSingletonScope();
    container
      .bind<StoreQueuesService>("StoreQueuesService")
      .to(StoreQueuesService)
      .inSingletonScope();
  }
  public static withStoreRedirectService(container: interfaces.Container) {
    container
      .bind<RedirectService>("RedirectService")
      .to(RedirectService)
      .inSingletonScope();
    container
      .bind<StoreRedirectService>("StoreRedirectService")
      .to(StoreRedirectService)
      .inSingletonScope();
  }
  public static withStoreRedisService(container: interfaces.Container) {
    container
      .bind<RedisService>("RedisService")
      .to(RedisService)
      .inSingletonScope();
    container
      .bind<StoreRedisService>("StoreRedisService")
      .to(StoreRedisService)
      .inSingletonScope();
  }
  public static withStoreResourcesService(container: interfaces.Container) {
    container
      .bind<ResourcesService>("ResourcesService")
      .to(ResourcesService)
      .inSingletonScope();
    container
      .bind<StoreResourcesService>("StoreResourcesService")
      .to(StoreResourcesService)
      .inSingletonScope();
  }
  public static withStoreSeatmapsService(container: interfaces.Container) {
    container
      .bind<SeatmapsService>("SeatmapsService")
      .to(SeatmapsService)
      .inSingletonScope();
    container
      .bind<StoreSeatmapsService>("StoreSeatmapsService")
      .to(StoreSeatmapsService)
      .inSingletonScope();
  }
  public static withStoreSettingsService(container: interfaces.Container) {
    container
      .bind<SettingsService>("SettingsService")
      .to(SettingsService)
      .inSingletonScope();
    container
      .bind<StoreSettingsService>("StoreSettingsService")
      .to(StoreSettingsService)
      .inSingletonScope();
  }
  public static withStoreTokenService(container: interfaces.Container) {
    container
      .bind<TokenService>("TokenService")
      .to(TokenService)
      .inSingletonScope();
    container
      .bind<StoreTokenService>("StoreTokenService")
      .to(StoreTokenService)
      .inSingletonScope();
  }
  public static withStoreTripService(container: interfaces.Container) {
    container
      .bind<TripService>("TripService")
      .to(TripService)
      .inSingletonScope();
    container
      .bind<StoreTripService>("StoreTripService")
      .to(StoreTripService)
      .inSingletonScope();
  }
  public static withStoreUserService(container: interfaces.Container) {
    container
      .bind<UserService>("UserService")
      .to(UserService)
      .inSingletonScope();
    container
      .bind<StoreUserService>("StoreUserService")
      .to(StoreUserService)
      .inSingletonScope();
  }
  public static withStoreUserpersonService(container: interfaces.Container) {
    container
      .bind<UserpersonService>("UserpersonService")
      .to(UserpersonService)
      .inSingletonScope();
    container
      .bind<StoreUserpersonService>("StoreUserpersonService")
      .to(StoreUserpersonService)
      .inSingletonScope();
  }
  public static withStoreUsersService(container: interfaces.Container) {
    container
      .bind<UsersService>("UsersService")
      .to(UsersService)
      .inSingletonScope();
    container
      .bind<StoreUsersService>("StoreUsersService")
      .to(StoreUsersService)
      .inSingletonScope();
  }
  public static withStoreUtilitiesService(container: interfaces.Container) {
    container
      .bind<UtilitiesService>("UtilitiesService")
      .to(UtilitiesService)
      .inSingletonScope();
    container
      .bind<StoreUtilitiesService>("StoreUtilitiesService")
      .to(StoreUtilitiesService)
      .inSingletonScope();
  }
  public static withStoreVoucherIssuanceService(
    container: interfaces.Container
  ) {
    container
      .bind<VoucherIssuanceService>("VoucherIssuanceService")
      .to(VoucherIssuanceService)
      .inSingletonScope();
    container
      .bind<StoreVoucherIssuanceService>("StoreVoucherIssuanceService")
      .to(StoreVoucherIssuanceService)
      .inSingletonScope();
  }
  public static withStoreVouchersService(container: interfaces.Container) {
    container
      .bind<VouchersService>("VouchersService")
      .to(VouchersService)
      .inSingletonScope();
    container
      .bind<StoreVouchersService>("StoreVouchersService")
      .to(StoreVouchersService)
      .inSingletonScope();
  }
}
