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
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
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
  static makeOrgChart(org:any[]){
    let root;
    let cur_line = "";
    root = $.extend({children:[]},org[0]);
    let cur_node = root;
    cur_line = root.org_line;
    for(let i=1; i<org.length;i++){
      if( org[i].org_line.startsWith(cur_line) )
        cur_node.children.push($.extend({children:[]}, org[i]));
    }
    return root;
  }
  public requestOrgChart(){
      const server_url = "/Pingpong/orgChart";
      let requestData = {
        "ServiceId" : this.id,
        "Ping" : this.ping
      };
      var resultData;
      let myAjax = $.ajax({
        url: server_url,
        type: "POST",
        data: JSON.stringify(requestData),
        success: function (result) {
          console.info("success(orgChart)==>");
          console.info(result);
          let chart_data = Service.makeOrgChart(result.org_data);
          console.info(chart_data);
          resultData = chart_data;
        },
        beforeSend: function(xhr){
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
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
      return resultData;
  }
}