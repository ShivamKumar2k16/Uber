class DriverManager{
    private static instance:DriverManager;
   public static getInstance(){
        if(DriverManager.instance){
            DriverManager.instance=new DriverManager();
        }
    }
    addDriver(name:string,driver:any){
///api
    }

    getDriver(id:string){
//api
    }
}