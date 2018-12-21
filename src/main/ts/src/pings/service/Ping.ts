import { RequestKind } from "./RequestKind";
import { Status } from "./Status";

/**
 * Class Ping
 * Client Side request parameter
 */
export class Ping {
    private _id: string; // public ID
    private _size: number;
    private status: Status[];
    private _data: any[];
    constructor(mId:string){
        this._id = mId;
        this._size = 0;
        this.status = [];
        this._data = [];
    }
    public get id(){
        return this._id;
    }
    public set id(v: string){
        this._id = v;
    }
    /**
     * 가지고있는 Data의 갯수
     */
    get size():number{
      return this._size;
    }
    /**
     * 데이터크기 조절
     * TODO 어떻게 해야 할지?
     * @param sz 
     */
    private setSize(sz:number){
        this._size = sz;
        this.status.length = sz;
        this._data.length = sz;
    }
    /**
     * get value
     * @param idx data row
     * @param name data property
     */
    public getVal(idx:number=0,name:string):any{
        if( this.size > 0 ){
            return this._data[idx][name];
        } else {
            return null;
        }
    }
    /**
     * set value
     * @param idx 
     * @param name 
     * @param v 
     */
    public setVal(idx:number=0, name:string, v:any){
        this._data[idx][name] = v;
    }
    /**
     * set value to all records
     * @param name record property name
     * @param v property value of row
     */
    public setAll(name:string, v:any){
        this._data.forEach(function(obj){obj[name] = v;});
    }
    /**
     * 조건에 만족시키는 DATA를 리턴
     * private로 전환시킴 2018.12.21
     * @param filters : condition object
     *                  let filters = {
     *                                name: ["Krishna", "Naveen"],
     *                                city : ["London"]
     *                               };
     */
    private filterData(filters:any): any[]{        
        // return this.data.filter(o => Object.keys(filters).every(k => [].concat(filters[k]).some(v => o[k].includes(v))));
        return this._data.filter(o => Object.keys(filters).every(k => [].concat(filters[k]).some(v => o[k] === v)));
    }
    /**
     * Deep Clone
     * @param filters 
     */
    public getData(filters:any): any[]{        
        return JSON.parse(JSON.stringify(this.filterData(filters)));
    }
    /**
     * accept to the New Data
     * @param record row data
     */
    public push(record:any){
        this._data[this.size] = record;
        this.setSize(this.size + 1);
    }
}