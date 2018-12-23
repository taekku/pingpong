import { Ping } from "./Ping";
import { RequestKind } from "./RequestKind";

export class Service{
  private sId : string = "default";
  //private rType: RequestKind; // request kind
  private request: Ping[];
  constructor(sid: string, req:Ping[]=[]){
    this.sId = sid;
    this.request = req;
  }
  get id(){
      return this.sId;
  }
  get Request():Ping[]{
      return this.request;
  }
  public push(ping:Ping){
      this.request.push(ping);
  }
}
