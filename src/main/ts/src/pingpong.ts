import { Page } from "./pings/action/page";
export default class PingTest{
  constructor(){
  }
  public getPing() : string{
    let page:Page = new Page();
    return page.getServcieId();
  }
}

