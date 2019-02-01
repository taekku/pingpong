/**
 * Organization Tree를 관리하려고 함.
 * class Organization is used for jquery.orgchart
 */
interface IOrganization {
  line: string;
  oid?: number;
  pid?: number;
  name: string;
  title: string;
  detail: string;
  children?: IOrganization[];
  push(o: IOrganization): void;
}

export class Organization implements IOrganization {
  public oid: number;
  children: IOrganization[] = [];
  public constructor(public line: string, public id: number, public pid: number,
       public name: string, public title: string, public detail: string) {
    this.oid = id;
  }
  public push(o: IOrganization) {
    if ( o.line.lastIndexOf(this.line, 0) === 0 )
      if ( o.line.indexOf('/', this.line.length + 1) < 0 )
        this.children.push(o);
      else
        this.children.forEach(p => p.push(o));
  }
}