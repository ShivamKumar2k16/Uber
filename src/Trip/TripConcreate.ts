//this class will have only few data points of trip that is required in strategy not other data like riders data etc
class TripConcreate {
    startLocation: Location;
    destination: Location;
    driverRating: Rating;
    riderRating: Rating;
    constructor(startLocation: Location, destination: Location, driverRating: Rating, riderRating: Rating) {
        this.destination = destination;
        this.startLocation = startLocation;
        this.driverRating = driverRating;
        this.riderRating = riderRating;
    }
    getDriverRating(){
        
    }
    setDriverRating(){
        
    }
    getRiderRating(){
        
    }
}
