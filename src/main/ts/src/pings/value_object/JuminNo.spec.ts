import 'jasmine';
import { JuminNo } from "./JuminNo";

describe("JuminNo", ()=>{
  beforeAll(()=>{
  });
  afterAll(()=>{
  });
  it("gender()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205131382414");
    expect(jumin.gender()).toEqual(1);
    jumin = new JuminNo("7205130382414");
    expect(jumin.gender()).toEqual(2);
  });
  it("validation()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205131382414");
    expect(jumin.isValidation()).toEqual(true);
    expect(jumin.getMessage()).toEqual('');

    jumin = new JuminNo("7205130382414");
    expect(jumin.isValidation()).toEqual(false);
    expect(jumin.getMessage()).toContain('올바른');
    //console.log(jumin.getMessage());
  });
  it("birth()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205131382414");
    expect(jumin.birth()).toEqual(new Date("1972-05-13Z+09:00"));
    jumin = new JuminNo("7205133382414");
    expect(jumin.birth()).toEqual(new Date("2072-05-13Z+09:00"));
  });
});