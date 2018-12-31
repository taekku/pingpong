export enum Gender {
  M=1,
  F=2,
  None=0
}
interface IJuminNo{
  birth(): Date|undefined;
  gender(): Gender;
}
interface JuminNoConstructor {
  new(sno:string): IJuminNo;
}
declare var IJuminNo: JuminNoConstructor;
export { IJuminNo };

export class JuminNo implements IJuminNo {
  public jumin_no: () => string;
  private _gender: Gender;
  private _validation: boolean = false;
  private _message: string='';
  private _date: Date|undefined;
  constructor(jumin_no:string){
    // this.jumin_no = jumin_no;
    this.jumin_no = (()=>{return ():string=>{return jumin_no};})();
    switch (jumin_no.substr(6,1)) {
      case "1": case "3": case "9": case "5": case "7":
        this._gender = Gender.M;
        break;
      case "2": case "4": case "0": case "6": case "8":
        this._gender = Gender.F;
        break;
      default:
        this._gender = Gender.None;
    }
    this.setBirth(jumin_no);
    this.setValidation(jumin_no);
  }
  private setBirth(jumin_no:string){
    let yy:number,mm:number,dd:number;
    yy = Number(jumin_no.substring(0,2));
    mm = Number(jumin_no.substring(2,4)) - 1;
    dd = Number(jumin_no.substring(4,6));
    switch (jumin_no.substr(6,1)) {
      case "1": case "2": case "5": case "6":
        yy += 1900; break;
      case "3": case "4": case "7": case "7":
        yy += 2000; break;
      case "9": case "0":
        yy += 1800; break;
      default:
        yy += 1900; break;
    }
    this._date = new Date(yy,mm,dd);
  }
  private setValidation(jumin_no:string){
    let check = false;
    this._message = '';
    let arr_ssn:number[] = [],
        compare:number[] = [2,3,4,5,6,7,8,9,2,3,4,5],
        sum:number       = 0;
    if( jumin_no.length !== 13 ) {
      this._message = '올바른 주민등록 번호를 입력하여 주세요.';
      return;
    }
    if( jumin_no.match('[^0-9]') ){
      this._message = '주민등록번호는 숫자만 입력하셔야 합니다.';
      return;
    }
    // 공식: M = (11 - ((2×A + 3×B + 4×C + 5×D + 6×E + 7×F + 8×G + 9×H + 2×I + 3×J + 4×K + 5×L) % 11)) % 11
    for(let i = 0; i<13; i++) {
      arr_ssn[i] = Number(jumin_no.substring(i,i+1));
    }
    for(let i = 0; i<12; i++){
      sum = sum + (arr_ssn[i] * compare[i]);
    }
    sum = (11 - (sum % 11)) % 10;
    if (sum != arr_ssn[12]){
      this._message = "올바른 주민등록 번호를 입력하여 주세요.";
      return;
    }
    this._validation = true;
  }
  public gender(): Gender {
    return this._gender;
  }
  public birth(): Date|undefined {
    return this._date;
  }
  public isValidation(): boolean {
    return this._validation;
  }
  public getMessage():string {
    return this._message;
  }

}