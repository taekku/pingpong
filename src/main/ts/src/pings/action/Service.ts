import { Ping } from "./Ping";
import { RequestKind } from "./RequestKind";

export class Service{
  private sId : string = "default";
  private ping: Ping[];
  constructor(sid: string, ping:Ping[]=[]){
    this.sId = sid;
    if( ping instanceof Array )
      this.ping = ping;
    else
      this.ping = [ping];
  }
  get id(){
      return this.sId;
  }
  public addPing(ping:Ping){
      this.ping.push(ping);
  }
  public findPing(ping_name:string):Ping[]{
      return this.ping.filter(element => element.id == ping_name);
  }
  public getPingIds():string[]{
      let nm:string[] = [];
      this.ping.forEach(element => {
          nm.push(element.id);
      });
      return nm;
  }
}