import $ from "jquery";
import { Ping } from "./Ping";
import { Organization } from "../value_object/Organization";

export class Service{
    private sId : ()=>string;
    private ping: Ping[];
    constructor(myId: string, ping:Ping[]=[]){
      this.sId = (()=>{return ():string=>{return myId};})();
      if( ping instanceof Array )
        this.ping = ping;
      else
        this.ping = [ping];
  }
  get id(){
      return this.sId();
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
  public request(){
      const server_url = "/Pingpong";
      let requestData = {
        "ServiceId" : this.id,
        "Ping" : this.ping
      };
      let myAjax = $.ajax({
        url: "/Pingpong",
        type: "POST",
        data: JSON.stringify(requestData),
        success: function (result) {
          console.info("success==>");
          console.info("length:" + result.Pong.length);
          console.info(result);
          console.info("result.Pong:");
          console.info(result['Pong']);
          console.info("result.Pong2:");
          console.info(result['Pong2']);
        },
        beforeSend: function(xhr){
          xhr.overrideMimeType( "text/plain; charset=utf-8" );
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      })
      .done(function( pong ) {
        console.info('done==>');
      })
      .fail(function( pong ) {
        console.error( pong);
      })
      .always(function( pong ) {
        console.log("always==>");
        // this.log(pong);
      });
  }
  public requestOrgChart(myCallback:(x:any)=>any){
      const server_url = "/Pingpong/orgChart2";
      let requestData = {
        "ServiceId" : this.id,
        "Ping" : this.ping
      };
      var resultData;
      let myAjax = $.ajax({
        url: server_url,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(requestData),
        success: function (result) {
          let org = result.org_data[0];
          let kk:string = org.ORG_LINE;
          let root = new Organization(org.ORG_LINE.substring(0,org.ORG_LINE.length -1), org.ID, org.PID, org.NAME, org.TITLE, org.DETAIL);
          result.org_data.slice(1).forEach((org:any) => {
            root.push(new Organization(org.ORG_LINE.substring(0,org.ORG_LINE.length -1), org.ID, org.PID, org.NAME, org.TITLE, org.DETAIL));
          });
          myCallback(root);
        },
        beforeSend: function(xhr){
          xhr.overrideMimeType( "text/plain; charset=utf-8" );
        }
      })
      .done(function( pong ) {
        // console.info('done==>');
      })
      .fail(function( pong ) {
        // console.info('fail==>');
      })
      .always(function( pong ) {
        // console.log("always==>");
      });
      return resultData;
  }
}