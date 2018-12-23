import { Ping } from "./pings/action/Ping";
export class PingTest{
  constructor(){
  }
  public getPing() : Ping{
    const ping = new Ping("Test");
    return ping;
  }
}

