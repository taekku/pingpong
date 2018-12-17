import { Page } from "./ping/action/page";
export default class Ping{
  constructor(){
    console.log("asdf Ping:");
  }
  public getPing() : string{
    let page:Page.Page = new Page.Page();

    // return "asdf";
    return page.getServcieId();
  }
}
export class MyClass{
  constructor(){
    console.log("constructor myclass");
  }
}
let myClass = new MyClass();
console.log("typescript pingpong:");

