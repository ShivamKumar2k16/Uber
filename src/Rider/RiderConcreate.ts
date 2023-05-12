class RiderConcreate{
    name:string;
    rating:Rating;
    rider;

    constructor(name:string,rating:Rating){
        this.rider=RiderManager.getInstance();
        this.name=name;
        this.rating=rating;
    }

    getRiderName(){
        return this.name;
    }
    getRiderRating(){
        return this.rating;
    }

}