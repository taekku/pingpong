import { Ping } from "./Ping";
import { RequestKind } from "./RequestKind";

class Service{
  private sId : string = "default";
  private ping: Ping;
  private data: any;
  constructor(sid: string){
    this.sId = sid;
    this.ping = new Ping(sid, RequestKind.Query);
  }
  public getServiceId() : string{
    return this.sId;
  }
}
export = Service;
