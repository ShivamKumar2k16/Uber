//this class will have only few data points of trip that is required in strategy not other data like riders data etc
class Trip {
  startLocation: Location;
  destination: Location;
  driver;
  rider;
  tripId;
  price;
  priceStrategy;
  driverStrategy;

  constructor(
    startLocation: Location,
    destination: Location,
    driver: any,
    rider: any,
    tripId: string,
    price: number,
    priceStrategy: any,
    driverStrategy: any
  ) {
    this.destination = destination;
    this.startLocation = startLocation;
    this.driver = driver;
    this.rider = rider;
    this.price = price;
    this.tripId = tripId;

    this.priceStrategy = priceStrategy;
    this.driverStrategy = driverStrategy;
  }
  getTripId() {}
  getTripDetails() {}
}
