import { Page } from "./pings/action/page";
import { Ping } from "./pings/service/Ping";
export class PingTest{
  constructor(){
  }
  public getPing() : Ping{
    const ping = new Ping("Test");
    return ping;
  }
}

