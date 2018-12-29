
interface org{
  line:string;
  org_id:number;
  p_org_id:number;
  name:string;
  title:string;
  push(o:org):void;
}

export class Organization implements org{
  line:string;
  org_id: number;
  p_org_id: number;
  name: string;
  title: string;
  children: org[] = [];
  public constructor(line:string, org_id:number, p_org_id:number, name:string, title:string){
    this.line = line;
    this.org_id = org_id;
    this.p_org_id = p_org_id;
    this.name = name;
    this.title = title;
  }
  public push(o:org){
    if( o.line.lastIndexOf(this.line, 0) === 0 )
      if( o.line.indexOf('/',this.line.length + 1) < 0 )
        this.children.push(o);
      else
        this.children.forEach(p=>p.push(o));
  }
}