import { RequestKind } from "./RequestKind";
import { Status } from "./Status";

export class Ping {
    private mId: string; // public ID
    private len: number;
    private status: Status[];
    private data: any[];
    constructor(mId:string){
        this.mId = mId;
        this.len = 0;
        this.status = [];
        this.data = [];
    }
    get length():number{
      return this.len;
    }
    set length(len:number){
        this.len = len;
        this.status.length = len;
        this.data.length = len;
    }
    public getVal(idx:number=0,name:string):any{
        if( this.length > 0 ){
            return this.data[idx][name];
        } else {
            return null;
        }
    }
    public setAll(name:string, v:any){
        this.data.forEach(function(obj){obj[name] = v;});
    }
    public setVal(idx:number=0, name:string, v:any){
        this.data[idx][name] = v;
    }
}