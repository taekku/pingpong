import { Page } from "./pings/action/page";
export class Ping{
  constructor(){
  }
  public getPing() : string{
    let page:Page = new Page();
    return page.getServcieId();
  }
}

