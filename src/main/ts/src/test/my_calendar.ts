class MyCalendar {
  public today: Date = new Date();
  public cal:any = [];
  public calculate(){
    return 100;
  }
  public dateId(day: Date): string {
    let s:string;
    const m = day.getMonth() + 1;
    const d = day.getDate();
    let sm = (m<10?"0":"") + m;
    s = day.getFullYear() + sm + (d<10?"0":"") + d;
    return s;
  }
  public getCalendar(myStr:string='default'){
    //var cal = [];
    // this.cal = [];
    var myDate = new Date();
    var myCalen = this;
    for(let i=0; i<2; i++){
      this.cal.push({
        myString: function(){return myStr},
        date_id: this.dateId(myDate),
        isToday: function(){
          var date_id = myCalen.dateId(new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()));
          console.log("isToday():this.date_id:"  + this.date_id);
          console.log("isToday():date_id:"  + date_id);
          return (myCalen.dateId(myCalen.today) === myCalen.dateId(this.date))},
        date: new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(),
          0, 0, 0),
        isCurWeek: function(){
          return myCalen.dateId(myCalen.today);
        }
      });
      myDate.setDate(myDate.getDate() + 1);
    }
  }
}
let myCal = new MyCalendar();
myCal.getCalendar();
console.log("========");
myCal.cal.forEach(function(val,idx){
  console.log("forEach:" + idx + ":" + val.date_id + ":" + val.isToday());
  console.log("isCurWeek:" + val.isCurWeek());
console.log("++++++++");
});
myCal.today.setMonth(3);
console.log("--------");
myCal.cal.forEach(function(val,idx){
  console.log("forEach:" + idx + ":" + val.date_id + ":" + val.isToday());
  console.log("isCurWeek:" + val.isCurWeek());
});
console.log("========");
