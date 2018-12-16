import { Page } from "./ping/action/page";
class Ping{
  public getPing() : string{
    let page:Page.Page = new Page.Page();

    // return "asdf";
    return page.getServcieId();
  }
}
export = Ping;
