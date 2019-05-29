import 'jasmine';
import { JuminNo, Gender } from "./JuminNo";

describe("JuminNo", ()=>{
  beforeAll(()=>{
  });
  afterAll(()=>{
  });
  it("gender()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205201382418");
    expect(jumin.gender()).toEqual(1);
    expect(jumin.gender()).toEqual(Gender.M);
    jumin = new JuminNo("7205200382418");
    expect(jumin.gender()).toEqual(2);
    expect(jumin.gender()).toEqual(Gender.F);
  });
  it("validation()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205201382418");
    expect(jumin.isValidation()).toEqual(true);
    expect(jumin.getMessage()).toEqual('');

    jumin = new JuminNo("7205200382419");
    expect(jumin.isValidation()).toEqual(false);
    expect(jumin.getMessage()).toContain('올바른');
  });
  it("birth()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205201382418");
    expect(jumin.birth()).toEqual(new Date("1972-05-20Z+09:00"));
    jumin = new JuminNo("7205203382414");
    expect(jumin.birth()).toEqual(new Date("2072-05-20Z+09:00"));
  });
  it("jumin_no()", ()=>{
    let jumin:JuminNo;
    jumin = new JuminNo("7205200382418");
    expect(jumin.jumin_no()).toEqual("7205200382418");
  });
});