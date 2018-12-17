export class Page {
  private serviceId : string = "kk";
  constructor(){
    this.serviceId = "Good";
  }
  public getServcieId() : string{
    return this.serviceId;
  }
};