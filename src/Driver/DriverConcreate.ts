class DriverConcreate{
    name;
    isAvailable:boolean=false;
    rating;
    driverManger;
    constructor(name:string,rating:Rating){
        this.driverManger=DriverManager.getInstance();
        this.name=name;
        this.rating=rating;
    }

    updateAvailable(isAvailable:boolean){
//update api patch
    }

    getDriver(id:string){
//get api
    }
}