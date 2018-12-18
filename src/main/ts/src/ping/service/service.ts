import { Ping } from "./Ping";
import { RequestKind } from "./RequestKind";

class Service{
  private sId : string = "default";
  //private rType: RequestKind; // request kind
  private data: Ping[];
  constructor(sid: string){
    this.sId = sid;
    this.data = [];
  }
  public getServiceId() : string{
    return this.sId;
  }
}
export = Service;
