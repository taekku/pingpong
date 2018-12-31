/**
 * Organization Tree를 관리하려고 함.
 * class Organization is used for jquery.orgchart
 */
interface IOrganization{
  line:string;
  oid?:number;
  pid?:number;
  name:string;
  title:string;
  detail:string;
  children?: IOrganization[];
  push(o:IOrganization):void;
}

export class Organization implements IOrganization{
  line:string;
  oid: number;
  pid: number;
  name: string;
  title: string;
  detail: string;
  children: IOrganization[] = [];
  public constructor(line:string, id:number, pid:number, name:string, title:string, detail:string){
    this.line = line;
    this.oid = id;
    this.pid = pid;
    this.name = name;
    this.title = title;
    this.detail = detail;
  }
  public push(o:IOrganization){
    // console.log(1);
    // console.log(this);
    // console.log(2);
    // console.log(o);
    if( o.line.lastIndexOf(this.line, 0) === 0 )
      if( o.line.indexOf('/',this.line.length + 1) < 0 )
      // if( o.line.indexOf('/',this.line.length + 1) === o.line.length - 1)
        this.children.push(o);
      else
        this.children.forEach(p=>p.push(o));
  }
}