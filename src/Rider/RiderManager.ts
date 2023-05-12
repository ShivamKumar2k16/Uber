class RiderManager {
  private static instance: RiderManager;

  addRider(name: string, rider: any) {
    //create api
  }

  getRider(id: string) {
    //get api
  }

  public static getInstance() {
    if (!RiderManager.instance) {
      RiderManager.instance = new RiderManager();
    }
    return RiderManager.instance;
  }
}
