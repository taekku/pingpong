import 'jasmine';
import { Organization, IOrganization} from "./Organization";

describe("Organization", ()=>{
  let org:IOrganization;
  beforeAll(()=>{
    org = new Organization('/root', 100, 0, 'Root', 'TitleRoot','Detail');
    // console.log('Organiztion Test Start.');
  });
  afterAll(()=>{
    // console.log('Organiztion Test End.');
  });
  it("push()", ()=>{
    org.push(new Organization('/root/line0101', 1001, 100, 'child', 'Child01','Detail01'));
    org.push(new Organization('/root/line0102', 1002, 100, 'child', 'Child02','Detail02'));
    org.push(new Organization('/root/line0101/myline', 1003, 1001, 'Child', 'Child01','Detail01'));
    org.push(new Organization('/root/line0102/myline', 1004, 1002, 'Child', 'Child01','Detail01'));
    org.push(new Organization('/root/line0103', 11002, 100, 'child', 'Child03','Detail03'));
    console.log(org);
  });
});