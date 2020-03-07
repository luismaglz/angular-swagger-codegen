export enum __TypeKind {}

export enum __DirectiveLocation {}

export enum PhoneNumberType {
  Other = 0,
  Home = 1,
  Work = 2,
  Mobile = 3,
  Fax = 4
}

export enum InventoryQuantityGrouping {
  Existing = 0,
  Total = 1
}

export enum PaymentAction {
  SellingSystemCollects = 1,
  PassThroughHold = 2,
  NoPaymentRequired = 3,
  ReferToSupplierMessage = 4,
  PassThroughCharge = 5
}

export enum ChargeOrigin {
  Internal = 0,
  External = 1,
  Unknown = 2
}

export enum SearchSortType {
  SupplierDefined = 0,
  Price = 1,
  Rating = 2,
  Name = 3,
  Category = 4,
  VendorDescription = 5,
  Preferred = 6,
  Relevance = 7
}

export enum ProductTypeCode {
  Default = 0,
  Insurance = 1,
  Activity = 2,
  Hotel = 3,
  Car = 4
}

export enum BookingHistoryEvent {
  Unknown = 0,
  ConvertedHistory = 1,
  FlightTimeChange = 2,
  FlightDesignatorChange = 3,
  AssignedSeat = 4,
  RemoveSeat = 5,
  AddedFlight = 6,
  DeletedFlight = 7,
  DeletedPassenger = 8,
  NameChange = 9,
  GroupNameChange = 10,
  CancelledTicketing = 11,
  ScheduleChange = 12,
  AddedPayment = 13,
  ServiceFee = 14,
  QueuedPnr = 15,
  UnqueuedPnr = 16,
  DeletedComment = 17,
  Divided = 18,
  CheckedIn = 19,
  CheckedOut = 20,
  FareOverride = 21,
  AddedBaggage = 22,
  ChangedBaggageWeight = 23,
  CheckedBaggage = 24,
  RemovedBaggage = 25,
  BoardedPassenger = 26,
  UnboardedPassenger = 27,
  ManualAuthorization = 28,
  ManualDecline = 29,
  UndoCancel = 30,
  ItinerarySent = 31,
  ContactChange = 32,
  SsrAdded = 33,
  FlightMoved = 34,
  VerifiedDocument = 35,
  RemovedVerifiedDocument = 36,
  Promotion = 37,
  BookingComment = 38,
  CancelledSchedule = 39,
  CancelServiceFee = 40,
  OverrideServiceFee = 41,
  AddedRecordLocator = 42,
  DeletedRecordLocator = 43,
  UpgradeClassOfService = 44,
  DowngradeClassOfService = 45,
  StandbyPriorityChange = 46,
  AssignedTicketNumber = 47,
  DeletedTicketNumber = 48,
  ConfirmSegmentStatusCodeChange = 49,
  CodeshareFlightChanged = 50,
  PdsCancel = 51,
  PdsPending = 52,
  PdsConfirm = 53,
  PdsFinalized = 54,
  PdsDeclined = 55,
  PdsException = 56,
  PdsCancelRefused = 57,
  PdsCancelUnsuccessful = 58,
  Apps = 59,
  InhibitedOverride = 60,
  PrintedBagTag = 61,
  SelfPrintedBagTag = 62,
  PrintedBoardingPass = 63,
  AddCustomerId = 64,
  DeleteCustomerId = 65,
  HoldCreated = 66,
  HoldRemoved = 67,
  HoldChanged = 68,
  OverrideCoupon = 69,
  PdsSynchronized = 70,
  PdsItemremoved = 71,
  Reprice = 72,
  ChannelOverride = 73,
  EmdCreated = 74,
  EmdRemoved = 75,
  EmdChanged = 76,
  ServiceBundle = 77,
  PublishedFareOverride = 78,
  FareClassRealignment = 79
}

export enum HistoryCategory {
  Unknown = 0,
  Baggage = 1,
  BagTagPrint = 2,
  BoardingPassPrint = 3,
  CheckIn = 4,
  ClassOfServiceChange = 5,
  Comment = 6,
  ConfirmedSegment = 7,
  ContactChange = 8,
  Converted = 9,
  CouponOverride = 10,
  DividePnr = 11,
  FareOverride = 12,
  Fee = 13,
  FlightMove = 14,
  GroupNameChange = 15,
  Hold = 16,
  ItinerarySent = 17,
  ManualPayment = 18,
  MoveBackPnr = 19,
  NameChange = 20,
  NameRemove = 21,
  Payment = 22,
  Pds = 23,
  Promotion = 24,
  QueuePlaceRemove = 25,
  RecordLocator = 26,
  ScheduleCancelllation = 27,
  ScheduleCodeShareChange = 28,
  ScheduleFlightDesignatorChange = 29,
  ScheduleTimeChange = 30,
  SeatAssignment = 31,
  SegmentChange = 32,
  Reprice = 33,
  SsrChange = 34,
  StandByChange = 35,
  TicketNumber = 36,
  VerifiedTravelDocument = 37,
  Apps = 38,
  InhibitedOverride = 39,
  CustomIdChange = 40,
  HoldDateChange = 41
}

export enum SeatAssignmentEvent {
  AssignedSeat = 4,
  RemoveSeat = 5
}

export enum DayOfWeek {
  None = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

export enum SegmentChangeEvent {
  AddedFlight = 6,
  DeletedFlight = 7
}

export enum ChangeReasonCodes {
  NoChange = 0,
  Irop = 1,
  ScheduleChange = 2,
  Move = 3,
  VoluntaryFlyAhead = 4,
  InvoluntaryFlyAhead = 5,
  SelfServiceRebooking = 6
}

export enum BookingMessageHistoryType {
  TeletypeMessage = 0,
  ETicket = 1,
  GovernmentSecurity = 2,
  PnrGovernment = 3,
  BaggageMessage = 4,
  Iatci = 5
}

export enum SubscriptionEventType {
  Unknown = 0,
  Departure = 1,
  DepartureDelay = 2,
  Arrival = 3,
  ArrivalDelay = 4,
  ScheduleChange = 5,
  CheckIn = 6
}

export enum SeatAvailability {
  Unknown = 0,
  Reserved = 1,
  Blocked = 2,
  HeldForAnotherSession = 3,
  HeldForThisSession = 4,
  Open = 5,
  Missing = 6,
  CheckedIn = 7,
  FleetBlocked = 8,
  Restricted = 9,
  Broken = 10,
  ReservedForPnr = 11,
  SoftBlocked = 12,
  Unavailable = 13
}

export enum UnitType {
  None = 0,
  NormalSeat = 1,
  LargeSeat = 2,
  Couchette = 3,
  Compartment = 4,
  Table = 5,
  Wall = 6,
  Window = 7,
  Door = 8,
  Stairs = 9,
  Wing = 10,
  Other = 12,
  Bulkhead = 13,
  BedOneOfThree = 14,
  BedTwoOfThree = 15,
  BedThreeOfThree = 16,
  BedOneOfTwo = 17,
  BedTwoOfTwo = 18,
  Bed = 19,
  Exit = 20,
  LabelRuler = 21,
  GenericUnitResizableArea = 22,
  Lavatory = 23,
  LavatoryWithHandicappedFacilities = 24,
  Luggage = 25,
  MovableCompartmentDivider = 26,
  Bar = 27,
  Closet = 28,
  Galley = 29,
  MovieScreen = 30,
  Storage = 31
}

export enum EquipmentCategory {
  None = 0,
  JetAircraft = 1,
  PistonAircraft = 2,
  TurbopropAircraft = 3,
  Helicopter = 4,
  Surface = 5,
  Train = 6,
  Bus = 7,
  AllCategories = 8
}

export enum MatchCriteria {
  StartsWith = 0,
  EndsWith = 1,
  Contains = 2,
  ExactMatch = 3
}

export enum AmountControl {
  Fixed = 0,
  FixedAtIssuance = 1,
  Calculated = 2
}

export enum CalculatedAmountControl {
  Default = 0,
  Fares = 1,
  FaresPlusTaxes = 2,
  FaresTaxesAndFees = 3,
  FaresTaxesFeesAndOtherServices = 4
}

export enum VoucherExpirationControl {
  None = 0,
  Fixed = 1,
  FixedAtIssuance = 2,
  Calculated = 3
}

export enum VoucherExpirationType {
  TravelBy = 0,
  TravelCompleteBy = 1,
  BookingBy = 2
}

export enum VoucherIssuanceControl {
  IssuedToPassengers = 0,
  IssuedToContact = 1
}

export enum IssuanceType {
  Individual = 0,
  Batch = 1,
  FlightBatch = 2,
  HighVolumeBatch = 3,
  OdBatch = 4
}

export enum Directionality {
  None = 0,
  To = 1,
  From = 2,
  Between = 3
}

export enum RegionType {
  Default = 0,
  Station = 1,
  City = 2,
  ProvinceState = 3,
  Country = 4,
  FeeZone = 5,
  SubZone = 6,
  Area = 7,
  All = 8,
  Mac = 9
}

export enum MarketRestrictionType {
  MustBeOne = 0,
  MustNot = 1
}

export enum VoucherNameRestriction {
  None = 0,
  MustBePassenger = 1,
  MustBePassengerOrContact = 2
}

export enum TravelRestrictionType {
  Default = 0,
  Blackout = 1,
  Season = 2
}

export enum VoucherTripType {
  Any = 0,
  OneWay = 1,
  RoundTrip = 2,
  None = 3
}

export enum VoucherType {
  Credit = 0,
  SingleUseCredit = 1,
  Service = 2,
  SingleUse = 3,
  MultiUse = 4,
  SingleUseNegativeAdjustment = 5
}

export enum VoucherUsageType {
  None = 0,
  Fares = 1,
  Taxes = 2,
  TravelFees = 3,
  ServiceFees = 4,
  PenaltyFees = 5,
  SsrFees = 6,
  NonFlightServiceFees = 7,
  UpgradeFees = 8,
  SeatFees = 9,
  SpoilageFees = 10,
  NameChangeFees = 11,
  ConvenienceFees = 12,
  Car = 13,
  Hotel = 14,
  Insurance = 15,
  Activities = 16
}

export enum VoucherStatus {
  Available = 0,
  Void = 1,
  Redeemed = 2,
  Expired = 3
}

export enum VoucherTransactionType {
  Debit = 0,
  Credit = 1,
  Void = 2,
  Reinstate = 3,
  Adjustment = 4
}

export enum FareApplicationType {
  Route = 0,
  Sector = 1,
  Governing = 2
}

export enum FareStatus {
  Default = 0,
  SameDayStandBy = 1,
  FareOverrideConfirming = 2,
  FareOverrideConfirmed = 3,
  PublishedFareOverrideConfirming = 4,
  PublishedFareOverrideConfirmed = 5
}

export enum CollectType {
  SellerChargeable = 0,
  ExternalChargeable = 1,
  SellerNonChargeable = 2,
  ExternalNonChargeable = 3,
  ExternalChargeableImmediate = 4
}

export enum ChargeType {
  FarePrice = 0,
  Discount = 1,
  IncludedTravelFee = 2,
  IncludedTax = 3,
  TravelFee = 4,
  Tax = 5,
  ServiceCharge = 6,
  PromotionDiscount = 7,
  ConnectionAdjustmentAmount = 8,
  AddOnsPrice = 9,
  FarePoints = 10,
  DiscountPoints = 11,
  IncludedAddOnsFee = 16,
  AddOnsFee = 17,
  AddOnsMarkup = 18,
  FareSurcharge = 19,
  AddOnsCancelFee = 21,
  Calculated = 22,
  Note = 23,
  Points = 24,
  DynamicFareAdjustment = 25
}

export enum ClassStatus {
  Active = 1,
  InActive = 2,
  AvsOpen = 3,
  AvsOnRequest = 4,
  AvsClosed = 5
}

export enum FlightType {
  None = 0,
  NonStop = 1,
  Through = 2,
  Direct = 3,
  Connect = 4,
  All = 5
}

export enum CodeShareIndicator {
  NonCodeShare = 0,
  CodeShareCommercialDuplicate = 1,
  SharedDesignatorOrWetLease = 2,
  CodeShareHostOperatingCarrier = 3,
  CodeShareCommercialDuplicateWithOverrideText = 4,
  SharedDesignatorOrWetLeaseWithOverrideText = 5
}

export enum LegStatus {
  Normal = 0,
  Closed = 1,
  Canceled = 2,
  Suspended = 3,
  ClosedPending = 5,
  BlockAllActivities = 6,
  Mishap = 7
}

export enum NestType {
  Default = 0,
  Net = 1,
  Serial = 2,
  OneBooking = 3
}

export enum ArrivalStatus {
  Default = 0,
  Cancelled = 1,
  Arrived = 2,
  SeeAgent = 3,
  Delayed = 4
}

export enum DepartureStatus {
  Default = 0,
  Cancelled = 1,
  Boarding = 2,
  SeeAgent = 3,
  Delayed = 4,
  Departed = 5
}

export enum SegmentTypes {
  Normal = 0,
  CodeShareOperating = 1,
  CodeShareMarketing = 2,
  InterlineOutbound = 3,
  InterlineInbound = 4,
  Passive = 5
}

export enum FareClassControl {
  LowestFareClass = 0,
  CompressByProductClass = 1,
  Default = 2
}

export enum SoldAsConnectionType {
  None = 0,
  Domestic = 1,
  International = 2,
  Both = 3
}

export enum AvailabilityFilter {
  Default = 0,
  ExcludeDeparted = 1,
  ExcludeImminent = 2,
  ExcludeUnavailable = 3
}

export enum AvailabilityType {
  Default = 0,
  Standby = 1,
  Overbook = 2,
  NoPricing = 3
}

export enum LoyaltyFilter {
  MonetaryOnly = 0,
  PointsOnly = 1,
  PointsAndMonetary = 2,
  PreserveCurrent = 3
}

export enum JourneySortKey {
  ServiceType = 0,
  ShortestTravelTime = 1,
  LowestFare = 2,
  HighestFare = 3,
  EarliestDeparture = 4,
  LatestDeparture = 5,
  EarliestArrival = 6,
  LatestArrival = 7,
  NoSort = 8,
  BiasOnlineCommercialDuplicates = 9,
  JourneyNumber = 10
}

export enum AvailabilitySsrCollectionsMode {
  None = 0,
  Leg = 1
}

export enum TaxesAndFeesRollupMode {
  None = 0,
  Taxes = 1,
  TaxesAndFees = 2
}

export enum Gender {
  XX = 0,
  Male = 1,
  Female = 2
}

export enum BaggageStatus {
  Default = 0,
  Checked = 1,
  Removed = 2,
  Added = 3,
  AddedPrinted = 4
}

export enum WeightType {
  Default = 0,
  Pounds = 1,
  Kilograms = 2
}

export enum LiftStatus {
  Default = 0,
  CheckedIn = 1,
  Boarded = 2,
  NoShow = 3
}

export enum InboundOutbound {
  None = 0,
  Inbound = 1,
  Outbound = 2,
  Both = 3,
  RoundFrom = 4,
  RoundTo = 5
}

export enum LowFareFlightFilter {
  NoFlights = 0,
  AllFlights = 1,
  SelectedFlight = 2
}

export enum OrderFeeType {
  Default = 0,
  Tax = 1,
  Markup = 2,
  Discount = 3
}

export enum AddOnStatus {
  Unknown = 0,
  Active = 1,
  Pending = 2,
  Confirming = 3,
  CancelPending = 4,
  Cancelled = 5
}

export enum CommentType {
  Default = 0,
  Itinerary = 1,
  Manifest = 2,
  Alert = 3,
  Archive = 4
}

export enum DistributionOption {
  None = 0,
  Mail = 1,
  Email = 2,
  Fax = 3,
  MailFax = 4,
  Airport = 5,
  Hold = 6,
  Print = 7
}

export enum NotificationPreference {
  None = 0,
  Promotional = 1
}

export enum ChannelType {
  Default = 0,
  Direct = 1,
  Web = 2,
  Gds = 3,
  Api = 4
}

export enum PaidStatus {
  UnderPaid = 0,
  PaidInFull = 1,
  OverPaid = 2
}

export enum PriceStatus {
  Invalid = 0,
  Override = 1,
  Valid = 2
}

export enum BookingProfileStatus {
  Default = 0,
  KnownIndividual = 1,
  ResolutionGroup = 2,
  SelecteeGroup = 3,
  NotUsed = 4,
  FailureGroup = 5,
  RandomSelectee = 6,
  Exempt = 7
}

export enum BookingStatus {
  Default = 0,
  Hold = 1,
  Confirmed = 2,
  Closed = 3,
  HoldCanceled = 4,
  PendingArchive = 5,
  Archived = 6
}

export enum OverbookIndicatorTypes {
  NormalSell = 0,
  Oversold = 1,
  ClassOrCabinOversold = 2
}

export enum SeatPreference {
  None = 0,
  Window = 1,
  Aisle = 2,
  NoPreference = 3,
  Front = 4,
  Rear = 5,
  WindowFront = 6,
  WindowRear = 7,
  AisleFront = 8,
  AisleRear = 9
}

export enum SimpleSeatPreference {
  None = 0,
  Window = 1,
  Aisle = 2,
  Other = 3
}

export enum TravelClassSeatPreference {
  None = 0,
  Business = 1,
  Economy = 2,
  FirstClass = 3
}

export enum SsrDurationType {
  Segment = 0,
  Journey = 1,
  Leg = 2
}

export enum TicketIndicatorCode {
  Unknown = 0,
  TicketRequired = 1,
  AutomatedTicketLiftRequired = 2,
  ManualTicketLiftRequired = 3,
  AutomatedTicketNoLiftRequired = 4,
  ManualTicketNoLiftRequired = 5,
  HostETicketNoLiftRequired = 6,
  ElectronicTicketNoLiftRequired = 7
}

export enum TicketStatusCode {
  Unknown = 0,
  TicketAvailableForUse = 1,
  TicketUnavailableForUse = 2,
  TicketReissueRequiredForPassenger = 3,
  TicketReissueRequiredForInfant = 4,
  TicketReissueRequiredForBoth = 5
}

export enum ApisAddressStatus {
  Residence = 0,
  InCountry = 1,
  Emergency = 2,
  Contact = 3
}

export enum FeeType {
  All = 0,
  Tax = 1,
  TravelFee = 2,
  ServiceFee = 3,
  PaymentFee = 4,
  PenaltyFee = 5,
  SsrFee = 6,
  NonFlightServiceFee = 7,
  UpgradeFee = 8,
  SeatFee = 9,
  BaseFare = 10,
  SpoilageFee = 11,
  NameChangeFee = 12,
  ConvenienceFee = 13,
  BaggageFee = 14,
  FareSurcharge = 15,
  PromotionDiscount = 16,
  ServiceBundle = 17,
  ExtraBagFee = 18,
  ATPCOBagFee = 19
}

export enum WeightCategory {
  Male = 1,
  Female = 2,
  Child = 3
}

export enum AuthorizationStatus {
  Unknown = 0,
  Acknowledged = 1,
  Pending = 2,
  InProcess = 3,
  Approved = 4,
  Declined = 5,
  Referral = 6,
  PickUpCard = 7,
  HotCard = 8,
  Voided = 9,
  Retrieval = 10,
  ChargedBack = 11,
  Error = 12,
  ValidationFailed = 13,
  Address = 14,
  VerificationCode = 15,
  FraudPrevention = 16,
  ForcedApproval = 17,
  ForcedDecline = 18
}

export enum DirectCurrencyConversionStatus {
  DccNotOffered = 0,
  DccOfferRejected = 1,
  DccOfferAccepted = 2,
  DccInitialValue = 3,
  MccInUse = 4
}

export enum BookingPaymentStatus {
  New = 0,
  Received = 1,
  Pending = 2,
  Approved = 3,
  Declined = 4,
  Unknown = 5,
  PendingCustomerAction = 6
}

export enum PaymentMethodType {
  ExternalAccount = 0,
  PrePaid = 1,
  AgencyAccount = 2,
  CustomerAccount = 3,
  Voucher = 4,
  Loyalty = 5
}

export enum QueueAction {
  Default = 0,
  Warning = 1,
  Lock = 2,
  DefaultAndNotify = 3,
  WarningAndNotify = 4,
  LockAndNotify = 5
}

export enum QueueMode {
  EnQueued = 0,
  DeQueued = 1
}

export enum QueueEventType {
  Default = 0,
  BookingBalanceDue = 1,
  BookingNegativeBalance = 2,
  BookingCustomerComment = 3,
  DeclinedPaymentInitial = 4,
  DeclinedPaymentChange = 5,
  FareOverride = 6,
  ScheduleTimeChange = 7,
  ScheduleTimeChangeMisconnect = 8,
  ScheduleCancellation = 9,
  FlightDesignatorChange = 10,
  ReaccommodationMove = 11,
  GdsCancelWithPendingPayment = 12,
  InvalidPriceStatusOverride = 13,
  FareRestrictionOverride = 14,
  HeldBookings = 15,
  InvalidPriceStatus = 16,
  Watchlist = 17,
  NonFlightServiceFee = 18,
  NotAllTicketNumbersReceived = 19,
  BookingSegmentOversold = 20,
  ReaccommodationCancel = 21,
  ExternalSsrAutoConfirmed = 22,
  OpCarrierSegUpdate = 23,
  OpCarrierSsrUpdate = 24,
  OpCarrierOtherUpdate = 25,
  NameChangeNotAllowed = 26,
  InboundAscNotProcessed = 27,
  OpCarrierInformationChange = 28,
  BookingComponentUpdate = 29,
  GroupBookings = 30,
  BankDirectPnrOutOfBalance = 31,
  NoSeatAssigned = 32,
  SeatNumberChange = 33,
  SsrNotSupportedOnNewSeat = 34,
  FewerSeatPreferencesMetOnNewSeat = 35,
  AosUnableToConfirmCancel = 36,
  ETicketIssue = 37,
  ETicketFollowup = 38,
  InvoluntaryFlyAhead = 39,
  ManualClearanceOnOutage = 40,
  UnbalancedPoints = 41,
  OpCarrierTimeChange = 42,
  OaCarrierTimeChange = 43,
  VoluntaryFlightChange = 44,
  InvoluntaryFlightChange = 45,
  HoldCancellationFailed = 46,
  ScheduleTimeChangeWithDynamicQueueCode = 47,
  ReaccommodationMoveWithDynamicQueueCode = 48,
  ItineraryIntegrity = 49,
  ReducePartyNotProcessed = 50,
  CheckedPassengerUpdate = 51,
  NameChangeWithinRule = 57,
  IncompletePassengerEMDCoupon = 58,
  ASVCUpdateFailed = 59,
  ScheduleTimeChangeMisconnectBelowMinimum = 61,
  ScheduleTimeChangeMisconnectAboveMaximum = 62,
  OpCarrierMisconnect = 63,
  InventoryQueuing = 64,
  SelfServiceAsm = 65,
  SelfServiceDelay = 66,
  SelfServiceFlightCancellation = 67,
  SelfServiceIrop = 68,
  SelfServiceScheduleChange = 69,
  SelfServiceTimeChange = 70,
  AosAddOrCancelNotSuccessful = 71,
  MissingGdsFareFamily = 72,
  ChangeCabinQueue = 73
}

export enum InventoryControlType {
  HoldSpace = 0,
  SoftHoldSpace = 1,
  ClaimSpace = 2,
  OversellSpace = 3,
  StandBy = 4
}

export enum SeatRestriction {
  Undefined = 0,
  AlwaysAllowed = 1,
  DefaultAllowed = 2,
  DefaultRestricted = 3
}

export enum SsrType {
  Standard = 0,
  Infant = 1,
  Meal = 2,
  BaggageAllowance = 3,
  TravelLineMeal = 4
}

export enum DccType {
  None = 0,
  ZeroRate = 1,
  FullAmount = 2
}

export enum BookingPaymentField {
  Miscellaneous = 0,
  AccountNumber = 1,
  Amount = 2,
  ExpirationDate = 3,
  CurrencyCode = 4,
  PaymentText = 5,
  PrepaidApprovalCode = 6,
  Deposit = 7
}

export enum RefundState {
  Enabled = 0,
  Disabled = 1,
  Hidden = 2
}

export enum RequiredType {
  Required = 0,
  Optional = 1,
  NotAllowed = 2
}

export enum ValueType {
  Unknown = 0,
  String = 1,
  UpperCaseString = 2,
  Numeric = 3,
  Alphanumeric = 4,
  Amount = 5,
  Date = 6,
  Mod10 = 7,
  Name = 8,
  Address = 9,
  State = 10,
  Zip = 11,
  Country = 12,
  City = 13,
  Boolean = 14,
  Email = 15
}

export enum PaymentRefundType {
  NotAllowed = 0,
  LineItemLevel = 1,
  AccountLevel = 2,
  BookingLevel = 3
}

export enum RefundCurrencyControl {
  UseCollectedCurrency = 0,
  UseQuotedCurrency = 1
}

export enum CreditType {
  Customer = 0,
  Booking = 1,
  Organization = 2
}

export enum FieldUsage {
  Prompt = 0,
  DoNotPrompt = 1,
  Required = 2
}

export enum PaymentModType {
  None = 0,
  Mod10 = 10,
  Mod11 = 11
}

export enum BaggageAllowanceBehavior {
  Default = 0,
  WeightSharing = 1,
  PerPiece = 2,
  PerPieceWithWeightSharing = 3
}

export enum GovernmentAdditionalDataType {
  CountryOfResidence = 0,
  InTransitOrigin = 1,
  InTransitDestination = 2,
  DateOfBirth = 3,
  Gender = 4,
  FirstName = 5,
  LastName = 6
}

export enum GovernmentDocumentFieldType {
  FirstName = 0,
  MiddleName = 1,
  LastName = 2,
  Title = 3,
  Suffix = 4,
  DateOfBirth = 5,
  BirthCountry = 6,
  Gender = 7,
  Nationality = 8,
  Number = 9,
  IssuingCountry = 10,
  ExpirationDate = 11,
  IssuedDate = 12,
  Verified = 13
}

export enum DocumentGroup {
  Unknown = 0,
  AlienRegistrationCard = 1,
  PermanentResidentCard = 2,
  FacilitationDocument = 3,
  InsPass = 4,
  MilitaryId = 5,
  Passport = 6,
  ReEntryPermit = 7,
  CreditCard = 8,
  TravelVisa = 9,
  OaFrequentFlyer = 10,
  ParoleLetter = 11,
  NoticeOfAction = 12,
  TransportationLetter = 13,
  BorderCrossingCard = 14,
  PilotLicense = 15,
  UsNaturalizationCertificate = 16,
  RefugeeTravelDocument = 17,
  GovernmentId = 18,
  DriversLicense = 19,
  RedressNumber = 20,
  KnownTravelerId = 21,
  FormOfId = 22,
  Nexus = 23,
  SecondaryExempt = 24
}

export enum CheckinPassengerRestrictionType {
  NotFound = 0,
  MissingDestinationAddress = 1,
  MissingCountryOrResidence = 2,
  OnLockQueue = 3,
  MissingRequiredSsrs = 4,
  ContainsRestrictedSsrs = 5,
  IsSelectee = 6,
  MissingSeat = 7,
  NotConfirmed = 8,
  NotStandby = 9,
  ContainsUnknownSsr = 10,
  MissingApisRequirement = 11,
  MissingDocuments = 12,
  MissingName = 13,
  MissingInfantName = 14,
  MissingDateOfBirth = 15,
  MissingInfantDateOfBirth = 16,
  RestrictedInfantInLap = 17
}

export enum CheckinRestrictionType {
  Closed = 0,
  NotOpened = 1,
  PnrLocked = 2,
  MarketingCodeShareNotAllowed = 3,
  NotPaidInFull = 4,
  PaymentsPending = 5,
  PaymentsPendingCustomerAction = 6,
  RestrictedOnAnotherSystem = 7,
  NotAllowed = 8,
  ApisNotAllowed = 9,
  AppsNotAllowed = 10,
  SegmentNotFound = 11,
  InvalidPrice = 12,
  MissingEMDCoupon = 13
}

export enum FeeApplication {
  Pnr = 0,
  TravelComponent = 1,
  EachPassenger = 2,
  EachPassengerTravelComponent = 3,
  SpecifyPassenger = 4,
  AllPaxCheckingBagsTogether = 5,
  PerBookingNoLimit = 6
}

export enum FeeRuleOperator {
  Default = 0,
  MustBe = 1,
  MustNotBe = 2
}

export enum FeeRulePropertyOperator {
  Default = 0,
  MustBe = 1,
  MustNotBe = 2,
  AllMustBe = 3
}

export enum FeeRulePropertyType {
  Default = 0,
  PassengerType = 1,
  FromStationClass = 2,
  FareClass = 3,
  PassengerResidentCountry = 4,
  FeeCode = 5,
  ToStationClass = 6,
  EventChannel = 7,
  OrganizationGroup = 8,
  OrganizationCode = 9,
  AgentRole = 10,
  BestCustomerProgramLevel = 11,
  WorstCustomerProgramLevel = 12,
  ExactCustomerProgramLevel = 13,
  CarrierCode = 14,
  SeatGroup = 15,
  FeeType = 16,
  ProductClass = 17,
  SystemCode = 18,
  TripType = 19,
  PaymentType = 20,
  TicketAccountingCode = 21,
  SoldChannel = 22,
  ItineraryFullyWithinCountry = 23,
  ChangeReasonCode = 24,
  GuestRecognitionLevel = 25,
  FlightType = 26,
  FareType = 27,
  DayOfWeek = 28,
  StartTimeOfDay = 29,
  EndTimeOfDay = 30,
  StartFlightNumberRange = 31,
  EndFlightNumberRange = 32,
  MinAdvancedPurchaseDays = 33,
  FareDiscount = 34,
  BookingStatus = 35,
  EarliestAdvancedPurchaseDays = 36,
  SalesStartTimeOfDay = 37,
  SalesEndTimeOfDay = 38,
  BookingCurrency = 39,
  CardSubType = 40,
  PaymentMethodCode = 41,
  ServiceBundle = 42,
  CreatedAgentRoleCode = 43,
  StartExtraBagRange = 44,
  EndExtraBagRange = 45,
  JourneyDepartureStation = 46,
  JourneyDepartureCountry = 47,
  GSTStateCode = 48,
  SystemType = 49,
  FarePriceType = 50
}

export enum DeductionType {
  All = 0,
  First = 1,
  Last = 2,
  ExceptForFirst = 3,
  ExceptForLast = 4,
  None = 5
}

export enum TravelSegmentIndicator {
  None = 0,
  CheckAgainstJourney = 1,
  CheckAgainstTrip = 2,
  Departure = 100,
  DepartureOfTripOrigin = 101,
  DepartureAtConnection = 102,
  DepartureWithinStopoverTime = 103,
  DepartureAtPointOfTurnaround = 104,
  DepartureOfTransOceanicSegment = 105,
  DepartureFromGateway = 106,
  DepartureOfLastSegment = 107,
  DepartureExceedsStopoverTime = 108,
  NotDepartingViaConnection = 109,
  GroundTimeBeforeDepartureOfJourneyWithin = 110,
  GroundTimeBeforeDepartureOfJourneyExceeds = 111,
  Arrival = 200,
  ArrivalOfTransOceanicSegment = 201,
  ArrivalAtGateway = 202,
  ArrivalAtPointOfTurnaround = 203,
  ArrivalAtConnection = 204,
  ArrivalAtTripOrigin = 206,
  NotDepartingViaConnectionOnSameCalendarDay = 207,
  CheckAgainstItinerary = 208,
  GroundTimeAfterArrivalAtConnectionWithin = 209,
  GroundTimeAfterArrivalAtConnectionExceeds = 210,
  GroundTimeAfterArrivalOfJourneyWithin = 211,
  GroundTimeAfterArrivalOfJourneyExceeds = 212
}

export enum TaxApplication {
  Unknown = 0,
  Taxable = 1,
  TaxableLocal = 2,
  NonTaxable = 3,
  NonTaxableApplyToBaseFareOnly = 4,
  TaxableByTrip = 5,
  TaxableByItinerary = 6
}

export enum TravelComponent {
  Unknown = 0,
  Itinerary = 1,
  Trip = 2,
  Journey = 3,
  Segment = 4,
  Leg = 5,
  ItineraryWithJourneySalesDate = 9,
  TripWithJourneySalesDate = 10,
  JourneyWithBookingSalesDate = 11,
  JourneyWithJourneySalesDate = 12,
  SegmentWithJourneySalesDate = 13,
  LegWithJourneySalesDate = 14,
  Fare = 15
}

export enum OneTimeNotificationEventType {
  DepartureDelay = 0,
  ArrivalDelay = 1
}

export enum DeliveryMethodCode {
  Email = 0,
  Sms = 1,
  Push = 2
}

export enum NotificationTimedEventType {
  Departure = 0,
  Arrival = 1
}

export enum NotificationEventType {
  DepartureDelay = 0,
  ArrivalDelay = 1,
  ScheduleChange = 2,
  CheckIn = 3
}

export enum UnitInventoryControlType {
  Session = 0,
  None = 1
}

export enum SeatAssignmentMode {
  AutoDetermine = 0,
  PreSeatAssignment = 1,
  WebCheckIn = 2
}

export enum MovePassengerJourneyType {
  None = 0,
  Irop = 1,
  Diversion = 2,
  FlightClose = 4,
  FlyAhead = 5,
  SplitJourney = 6,
  SelfServiceRebooking = 7
}

export enum OperationsFlightType {
  All = 0,
  NonStop = 1,
  Through = 2,
  Direct = 3,
  Connect = 4
}

export enum OperationCommentType {
  Default = 0,
  Reservation = 1,
  Operation = 2,
  PitLoad = 3,
  Irop = 4,
  AppsOverride = 5,
  ManualAppsOverride = 6
}

export enum CrewType {
  Default = 0,
  Pilot = 1,
  CoPilot = 2,
  CockpitJumpseat = 3,
  CabinJumpseat = 4,
  CabinCrew = 5
}

export enum CheckInType {
  Default = 0,
  Local = 1,
  Through = 2,
  Connecting = 4,
  NonLocal = 6
}

export enum SystemName {
  Default = 0,
  WinRez = 1,
  FareManager = 2,
  ScheduleManager = 3,
  WinManager = 4,
  ConsoleRez = 5,
  WebRez = 6,
  WebServicesApi = 7,
  WebServicesEsc = 8,
  InternalService = 9,
  WebReporting = 10,
  TaxAndFeeManager = 11,
  Dcs = 12,
  DCS_Kiosk = 13
}

export enum ManifestFilter {
  None = 0,
  Baggage = 1,
  PassengerTravelDoc = 2,
  PassengerInfant = 3,
  PassengerAddress = 4,
  BookingComment = 5,
  BookingQueue = 6,
  PassengerJourneySegmentProperty = 7,
  PassengerJourneySsr = 8,
  InventoryLegOpComments = 9,
  All = 10
}

export enum TripType {
  None = 0,
  OneWay = 1,
  RoundTrip = 2,
  HalfRound = 3,
  OpenJaw = 4,
  CircleTrip = 5,
  All = 6
}

export enum BookingQueueHistoryEvent {
  Unknown = 0,
  Add = 1,
  Remove = 2,
  Update = 3
}

export enum SearchType {
  StartsWith = 0,
  EndsWith = 1,
  Contains = 2,
  ExactMatch = 3
}

export enum QueueProcessState {
  Default = 0,
  SegmentsConfirmed = 1,
  BookingBalanced = 2,
  Other = 4,
  Complete = 7
}

export enum QueueProcessStatus {
  Ready = 0,
  Pending = 1
}

export enum BookingQueueRestriction {
  Restricted = 0,
  AddAllowedOnly = 1,
  Allowed = 2
}

export enum CreditExpirationType {
  None = 0,
  FixedAtIssuance = 1,
  FixedDate = 2,
  FixedAtBooking = 3
}

export enum BundleSsrType {
  InBundle = 0,
  InBundleUpgrade = 1,
  NotInBundle = 2
}

export enum DelayType {
  Unknown = 0,
  AirlineInternalCodes = 1,
  Others = 2,
  Schedules = 3,
  PassengerAndBaggage = 4,
  CargoAndMail = 5,
  MailOnly = 6,
  AircraftAndRampHandling = 7,
  TechnicalAndAircraftEquipment = 8,
  DamageToAircraft = 9,
  EdpAutomatedEquipmentFailure = 10,
  FlightOperationsAndCrewing = 11,
  Weather = 12,
  AirTrafficFlowManagement = 13,
  AirportAndGovernmentalAuthorities = 14,
  Reactionary = 15,
  Miscellaneous = 16
}

export enum ChargeLimitMode {
  FirstOccurrences = 0,
  LastOccurrences = 1,
  FirstOutLastInOccurrences = 2
}

export enum FeeOptionMode {
  Default = 0,
  All = 1,
  LowestCost = 2,
  HighestCost = 3
}

export enum LocationType {
  Other = 0,
  Station = 1,
  City = 2
}

export enum ApisCheckInType {
  NotAllowed = 0,
  AllowedWithVerifiedDocument = 1,
  AllowedWithDocument = 2,
  AllowedWithoutVerifiedDocument = 3
}

export enum IappCheckInType {
  NotAllowed = 0,
  AllowedWithVerifiedDocument = 1,
  AllowedWithDocument = 2,
  AllowedWithoutVerifiedDocument = 3
}

export enum BagWeightControl {
  WeightNotRequired = 0,
  TotalWeightRequired = 1,
  IndividualWeightRequired = 2
}

export enum FieldControlType {
  Required = 0,
  Optional = 1,
  Disabled = 2,
  RequiredMasked = 3,
  OptionalMasked = 4
}

export enum CustomerAccessControl {
  View = 0,
  CreateAndChange = 1
}

export enum FareDisplayType {
  HideLowerFares = 0,
  ShowAndAllowLowerFares = 1,
  ShowButDisableLowerFares = 2
}

export enum FareSelection {
  BySortPrice = 0,
  ByCalculatedFarePrice = 1
}

export enum LowFareCacheOption {
  AlwaysUseCache = 0,
  BypassCacheOnRequest = 1,
  NeverUseCache = 2
}

export enum SeatAssignmentRole {
  Never = 0,
  OnlyOnUnheldBookings = 1,
  Always = 2
}

export enum BookingAccessControl {
  None = 0,
  ScheduleOnly = 1,
  Availability = 2,
  View = 3,
  ModifyNoCommit = 4,
  Create = 5,
  Change = 6,
  CreateAndChange = 7
}

export enum GroupAccessControl {
  Agent = 0,
  Organization = 1,
  OrganizationGroup = 2,
  All = 3
}

export enum HighlightOption {
  None = 0,
  Highlight = 1
}

export enum ReassignSeatingBehavior {
  DropSeats = 0,
  LikeForLike = 1,
  Algorithm = 2
}

export enum TimeDisplay {
  Default = 0,
  AmPm = 1,
  TwentyFourHour = 2
}

export enum TbaPassengersAllowed {
  Never = 0,
  IfFirstPassengerIsKnown = 1,
  Always = 2
}

export enum AdHocFlightControl {
  None = 0,
  View = 1,
  Sell = 2
}

export enum AllowedFareOverrideType {
  DiscountedPrice = 0,
  PublishedPrice = 1,
  All = 2
}

export enum MoveFlightCode {
  NotAllowed = 0,
  AllowedOnInventory = 1,
  Allowed = 2
}

export enum OverbookControl {
  CannotOverbook = 0,
  CanOverbookClass = 1,
  CanOverbookNest = 2,
  CanOverbookLeg = 3
}

export enum ViewManifestControl {
  None = 0,
  StandbyOnly = 1,
  Full = 2
}

export enum ShoppingAttributeType {
  None = 0,
  Destination = 1,
  Region = 2,
  Event = 3
}

export enum MarketLocationType {
  Undefined = 0,
  Station = 1,
  Mac = 3
}

export enum TravelLocationsRequired {
  None = 0,
  FromTravel = 1,
  ToTravel = 2,
  BothTravel = 3
}

export enum QueueCategoriesAccessControl {
  None = 0,
  View = 1,
  All = 2
}

export enum ResponseContentType {
  Unknown = 0,
  Json = 1,
  Xml = 2
}

export enum ManifestViewDateType {
  BookingDate = 0,
  SoldDate = 1
}

export enum PostalCodeLookupType {
  None = 0,
  UsZipCode = 1
}

export enum ProgramType {
  Default = 0,
  Internal = 1,
  External = 2
}

export enum PassengerDiscountType {
  Default = 0,
  Regular = 1,
  Loyalty = 2
}

export enum PassengerTypeIndicator {
  Adult = 0,
  Infant = 1,
  Child = 2,
  NonAdult = 3
}

export enum OrganizationStatus {
  Default = 0,
  Active = 1,
  Cancelled = 2,
  Pending = 3
}

export enum OrganizationType {
  Default = 0,
  Master = 1,
  Carrier = 2,
  TravelAgency = 3,
  ThirdParty = 4
}

export enum AccountOwnerType {
  Organization = 0,
  Personnal = 1,
  Booking = 2,
  Unknown = 3
}

export enum AccountStatus {
  Open = 0,
  Closed = 1,
  AgencyInactive = 2,
  Unknown = 3
}

export enum AccountType {
  Credit = 0,
  Prepaid = 1,
  Supplementary = 2,
  Dependent = 3,
  Unknown = 4
}

export enum TransactionType {
  Default = 0,
  Payment = 1,
  Adjustment = 2,
  Supplementary = 3,
  Transfer = 4,
  Spoilage = 5,
  StatementDateAndBalance = 6,
  PayableCommission = 7,
  Commission = 8,
  ChildCommissionTransfer = 9,
  ParentCommissionTransfer = 10
}

export enum SessionPermissionType {
  Unknown = 0,
  Customer = 1,
  Anonymous = 2,
  Agent = 3
}

export enum UserStatus {
  Default = 0,
  Active = 1,
  Pending = 2,
  Suspended = 3,
  Terminated = 4
}

export enum PersonAliasType {
  Alias = 0,
  Variant = 1
}

export enum PersonCommentType {
  Default = 0,
  Itinerary = 1,
  Manifest = 2,
  Alert = 3,
  Archive = 4
}

export enum PersonStatus {
  Active = 0,
  Terminated = 1,
  Suspended = 2
}

export enum PersonType {
  None = 0,
  Customer = 1,
  Agent = 2
}

export enum ExternalDistributionOption {
  NoDistribution = 0,
  UseOrganizationEmailOnly = 1,
  UseMessageEmailOnly = 2,
  UseMessageEmail = 3
}

export enum ReferralType {
  Default = 0,
  Allowed = 1,
  AllowedWithUrlMatch = 2,
  NotAllowed = 3
}

export enum ApoPricingStage {
  Look = 0,
  Sell = 1,
  Book = 2
}

export enum PersonalizationDataType {
  Unknown = 0,
  Bool = 1,
  List = 2,
  Text = 3,
  Date = 4
}

export enum VoucherStatusUpdate {
  Reinstate = 0,
  Void = 1
}

export enum TransitType {
  Default = 0,
  Origin = 1,
  Destination = 2,
  Both = 3
}

export enum PreCancelStatus {
  Unknown = 0,
  CancelAvailable = 1,
  ExternalCancelAvailable = 2,
  ImmediateCancel = 3,
  CancelDenied = 4,
  RemoveFromBooking = 5,
  CancelPending = 6
}

export enum OverrideChannelType {
  Direct = 0,
  Web = 1,
  Api = 2
}

export enum IgnoreLiftStatus {
  IgnoreNotAllowed = 0,
  IgnoreCheckin = 1,
  IgnoreBoarded = 2
}

export enum MoveSsrOption {
  OverbookSsr = 0,
  MoveAvailableSsr = 1,
  MoveNone = 2
}

export enum AllowedAccountTypes {
  Credit = 0,
  Prepaid = 1,
  Supplementary = 2
}

export enum AllowedTransactionTypes {
  Default = 0,
  Payment = 1,
  Adjustment = 2,
  Supplementary = 3
}
