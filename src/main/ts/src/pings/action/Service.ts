import $ from "jquery";
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
  static putOrg(root:any, org:any):any{
    if( org.org_line.startsWith(root.org_line) ){
      if( org.org_line.indexOf('/',root.org_line.length + 1) < 0 ){
        root.children.push($.extend({children:[]}, org));
      } else {
        root.children.forEach( (o: any) => { this.putOrg(o, org); });
      }
    } else { // No Action, Not child
    }
  }
  static makeOrgChart(org:any[]){
    let root:any;
    let cur_line = "";
    root = $.extend({children:[]},org[0]);
    org.slice(1).forEach((o)=>{this.putOrg(root, o)});
    return root;
  }
  public requestOrgChart(myCallback:(x:any)=>any){
      const server_url = "/Pingpong/orgChart";
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
          var obj = result;
          console.log(obj);
          console.info("success(orgChart)==>" + result.org_data[0].name);
          console.info(result);
          let chart_data = Service.makeOrgChart(result.org_data);
          console.info(chart_data);
          myCallback(chart_data);
        },
        beforeSend: function(xhr){
          // xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
          xhr.overrideMimeType( "text/plain; charset=utf-8" );
        }
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
      return resultData;
  }
}