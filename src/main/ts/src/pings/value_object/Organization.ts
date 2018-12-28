
interface org{
  line:string;
  org_id:number;
  p_org_id:number;
  name:string;
  title:string;
}

class Organization implements org{
  line:string;
  org_id: number;
  p_org_id: number;
  name: string;
  title: string;
  public constructor(line:string, org_id:number, p_org_id:number, name:string, title:string){
    this.line = line;
    this.org_id = org_id;
    this.p_org_id = p_org_id;
    this.name = name;
    this.title = title;
  }
}