import { Ping } from "./Ping";
import { RequestKind } from "./RequestKind";

export class Service{
  private sId : string = "default";
  //private rType: RequestKind; // request kind
  private data: Ping[];
  constructor(sid: string){
    this.sId = sid;
    this.data = [];
  }
  get id(){
      return this.sId;
  }
}
