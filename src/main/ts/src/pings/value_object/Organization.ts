/**
 * Organization Tree를 관리하려고 함.
 * class Organization is used for jquery.orgchart
 */
interface IOrganization{
  line:string;
  id?:number;
  pid?:number;
  name:string;
  title:string;
  children?: IOrganization[];
  push(o:IOrganization):void;
}

export class Organization implements IOrganization{
  line:string;
  id: number;
  pid: number;
  name: string;
  title: string;
  children: IOrganization[] = [];
  public constructor(line:string, id:number, pid:number, name:string, title:string){
    this.line = line;
    this.id = id;
    this.pid = pid;
    this.name = name;
    this.title = title;
  }
  public push(o:IOrganization){
    if( o.line.lastIndexOf(this.line, 0) === 0 )
      if( o.line.indexOf('/',this.line.length + 1) < 0 )
        this.children.push(o);
      else
        this.children.forEach(p=>p.push(o));
  }
}