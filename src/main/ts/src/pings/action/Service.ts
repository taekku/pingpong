import { Ping } from "./Ping";
import { RequestKind } from "./RequestKind";

export class Service{
  private sId : string = "default";
  private ping: Ping[];
  constructor(sid: string, ping:Ping[]=[]){
    this.sId = sid;
    this.ping = ping;
  }
  get id(){
      return this.sId;
  }
  public push(ping:Ping){
      this.ping.push(ping);
  }
}