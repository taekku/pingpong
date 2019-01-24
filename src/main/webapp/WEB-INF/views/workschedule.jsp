<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%-- @ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" --%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <%-- c:url value="/assets/css/index.css" / --%>
<!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" /> -->
  <%-- link href="${jstlCss}" rel="stylesheet" / --%>
  <link href="/assets/css/index.css" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script type="text/javascript" src="/assets/js/ping_bundle.js"></script>
  <script type="text/javascript">
    Date.prototype.getWeekOfMonth = function () {
      var onejan = new Date(this.getFullYear(), 0, 1);
      return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    };
    getDateId = function (_date) {
      const formatStr = "";
      return _date.getFullYear() + formatStr + (_date.getMonth() < 9 ? "0" : "") + (_date.getMonth() + 1)
              + formatStr + (_date.getDate()<10?"0":"") + _date.getDate();
    }
    getMonthId = function (_date) {
      const formatStr = "";
      return _date.getFullYear() + formatStr + (_date.getMonth() < 9 ? "0" : "") + (_date.getMonth() + 1);
    }
    $(document).ready(function () {
      // todo-item 이름을 가진 컴포넌트를 정의합니다
      Vue.component('todo-item', {
        template: '<li>할일 항목 하나입니다.</li>'
      });
      function getCalendar(year, month, day) {
        let today = new Date(year, month, day, 0, 0, 0);
        let weekNum = today.getWeekOfMonth();
        let retrieveDate = new Date(year, month, 1, 0, 0, 0);
        retrieveDate.setDate(retrieveDate.getDate() - retrieveDate.getDay());
        let calendar = [];
        for (let perWeek = 0; perWeek < 6 && (perWeek === 0 || today.getMonth() === retrieveDate.getMonth()); perWeek++) {
          let week = [];
          for (let perDay = 0; perDay < 7; perDay++) {
            week.push({
              day_id: getDateId(retrieveDate),
              month_id: getMonthId(retrieveDate),
              monthDay: retrieveDate.getDay(), // 요일
              day: retrieveDate.getDate(), // 날짜
              isToday: (today.getMonth() === retrieveDate.getMonth()) && (today.getDate() === retrieveDate.getDate()),
              isCurMonth: today.getMonth() === retrieveDate.getMonth(),
              isCurWeek: (today.getMonth() === retrieveDate.getMonth()) && (weekNum === retrieveDate.getWeekOfMonth()),
              weekDay: perDay,
              weekNum: retrieveDate.getWeekOfMonth(),
              date: new Date(retrieveDate.getFullYear(), retrieveDate.getMonth(), retrieveDate.getDate(), 0, 0, 0),
              message: '',
              events: null
            });
            // monthViewStartDate.add(1, 'day');
            retrieveDate.setDate(retrieveDate.getDate() + 1);
          }
          calendar.push(week);
        }
        return calendar
      }

      function getWorkWeek(_year, _month, _date){
        let work_date = new Date(_year, _month, _date, 0, 0, 0);
        let start_week = work_date;
        start_week.setDate(start_week.getDate() - start_week.getDay());
        let days = [];
        for(let i=0;i<7;i++){
          if( _month === start_week.getMonth() )
            days.push(new Date(start_week));
          start_week.setDate(start_week.getDate() + 1);
        }
        return days;
      }
      
      var navYear, navMonth, navDate;
      let date1 = new Date();
      navYear = date1.getFullYear();
      navMonth = date1.getMonth();
      navDate = date1.getDate();
      var myCalendar = getCalendar(navYear, navMonth, navDate);
      var workWeek = getWorkWeek(navYear, navMonth, navDate + 7 - date1.getDay());
      var app = new Vue({
        el: '#app',
        data: {
          Organization:[],
          message:'hi',
          seen: false,
          dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
          monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          calendar: myCalendar,
          workWeek: workWeek,
          checkedDate: [],
          time_kind: [
            { kind: 1, fromTime: '08:00', toTime: '17:30' },
            { kind: 2, fromTime: '08:30', toTime: '18:00' },
            { kind: 3, fromTime: '09:00', toTime: '18:30' },
          ],
          select_time_kind: null,
          fromTime: '0:00',
          toTime: '0:00',
          fromTimeOut: '0:00',
          toTimeOut: '0:00',
          monitor_time: '',
          monitor_times: [
            { text: '선택하세요', value: "" },
            { text: '19시', value: "19" },
            { text: '20시', value: "20" },
            { text: '21시', value: "21" },
            { text: '22시', value: "22" },
          ],
          select_rest_kind: '00',
          rest_kind: [
            { text: '추가휴게입력', value: '00'},
            { text: '휴게', value: '01'}
          ],
          work_accept_time: '',
          work_rest_time: '',
          add_rest_from: '',
          add_rest_to: '',
          real_work_time: '',
          real_rest_off_time: '',
          work_hours: {
            monthMax: 227,
            monthStd: 136,
            weekStd: 40.5,
            myWork: 27.5,
          },
          work_rate: {
            //monthMax: 10,
            monthStd: 10,
            weekStd: 10,
            myWork: 10
          },
          work_title: {
            monthMax: '',
            monthStd: '',
            weekStd: '',
            myWork: ''
          },
          work_color: {
            monthStd: "#d9534f",
            weekStd: "#5cb85c",
            myWork: "#f0ad4e"
          },
          // barColor: ["#f0ad4e", "#5cb85c", "#d9534f"],
          barColor: ["#f0ad4e", "#5cb85c", "#d9534f"],
          workTitle: ["", "", ""],
          weekCount: 1,

          title1: function(){ return "누적근무설정시간: " + this.work_hours.myWork + "H"; },
          ttile2: "1주차 권장진도율: ",
          ttile3: "소정근로시간: ",
          ttile4: "최대근무가능H: ",
          myHeight: 10,
          myHeight1: 10,
          myHeight2: 20,
          myHeight3: 30,
          myHeight4: 10,
        },
        methods: {
          greet: function(message, event){
            //getCalendar('2019','00','21');
            this.seen = !this.seen;
            // this.checkedDate.array.forEach(element => {
            //   console.log("hi:" + element);
            // });
            // console.log("asdf");
            // console.log(this.checkedDate);
            // console.log(this.workWeek);
          },
          is_input_week: function(day){
            let isWeek = false;
            this.workWeek.forEach(function(element){
              if( day.getTime() == element.getTime() )
                isWeek = true;
            });
            return isWeek;
          },
          check_std_week: function(){
            this.checkedDate = [];
            var newCheckDate = [];
            this.workWeek.forEach(function(element){
              if( element.getDay() > 0 && element.getDay() < 6){
                newCheckDate.push(getDateId(element));
              }
            });
            this.checkedDate = newCheckDate;
          },
          change_time_kind: function(){
            var sTimeKind = this.select_time_kind;
            var selectTime;
            this.time_kind.forEach(function(t){
              if( t.kind == sTimeKind ){
                selectTime = t;
              }
            });
            if( selectTime ){
              this.fromTime = selectTime.fromTime;
              this.toTime = selectTime.toTime;
            }
          },
          changeWorkHour: function( addMy, addWeek, addMonth ){
            this.work_hours.myWork = this.work_hours.myWork + addMy;
            this.work_hours.weekStd = this.work_hours.weekStd + addWeek;
            this.work_hours.monthStd = this.work_hours.monthStd + addMonth;
            if( this.work_hours.myWork < 0 )
              this.work_hours.myWork = 0;
            if( this.work_hours.myWork > this.work_hours.monthMax )
              this.work_hours.myWork = this.work_hours.monthMax;
            this.calRate();

            //this.draw_title();
            var delayInMilliseconds = 500; // 0.5 second
            var drawFunc = this.draw_title;

            setTimeout( function(){
              drawFunc();
            }, delayInMilliseconds);

          },
          calRate: function(){
            this.work_title.monthMax = "최대근무가능H: " + this.work_hours.monthMax + "H";
            this.work_title.monthStd = "소정근로시간: " + this.work_hours.monthStd + "H";
            this.work_title.weekStd = this.weekCount + "주차 권장진도율: " + this.work_hours.weekStd + "H";
            this.work_title.myWork = "누적근무설정시간: " + this.work_hours.myWork + "H";

            //this.work_rate.monthMax = this.work_hours.monthMax / this.work_hours.monthMax * 100;
            this.work_rate.monthStd = this.work_hours.monthStd / this.work_hours.monthMax * 100;
            this.work_rate.weekStd = this.work_hours.weekStd / this.work_hours.monthMax * 100;
            this.work_rate.myWork = this.work_hours.myWork / this.work_hours.monthMax * 100;
            var maxWork = this.work_rate;
            var sortable = [];
            for (var work in maxWork) {
              sortable.push([work, maxWork[work]]);
            }

            sortable.sort(function (a, b) {
              return a[1] - b[1];
            });
            console.log(sortable);
            this.myHeight1 = sortable[0][1];
            this.myHeight2 = sortable[1][1] - this.myHeight1;
            this.myHeight3 = sortable[2][1] - this.myHeight2 - this.myHeight1;
            //this.myHeight4 = sortable[3][1] - this.myHeight3 - this.myHeight2 - this.myHeight1;

            this.workTitle[0] = this.work_title[sortable[0][0]];
            this.workTitle[1] = this.work_title[sortable[1][0]];
            this.workTitle[2] = this.work_title[sortable[2][0]];

            this.barColor[0] = this.work_color[sortable[0][0]];
            this.barColor[1] = this.work_color[sortable[1][0]];
            this.barColor[2] = this.work_color[sortable[2][0]];

            console.log(this.workTitle);


            var delayInMilliseconds = 500; // 0.5 second
            var drawFunc = this.draw_title;

            setTimeout(function () {
              drawFunc();
            }, delayInMilliseconds);
          },
          draw_title: function(){
console.log("Draw_title");
            var title_height = $("#myTitle0").height() / 2;
            var font_height = $("#myTitle0").height() - 2;

            var g1_top = $("#myG1").offset().top;
            var g1_height = $("#myG1").height();
            var g2_top = $("#myG2").offset().top;
            var g3_top = $("#myG3").offset().top;
            var gt_top = $("#myGround").offset().top;

            var t0_top = g1_top + g1_height - title_height;

            var t1_top = g1_top - title_height;  // title1
            if( t0_top - t1_top < font_height )
              t1_top = t0_top -  font_height;

            var t2_top = g2_top - title_height;
            if( t1_top - t2_top < font_height)
              t2_top = t1_top - font_height;

            var t3_top = g3_top - title_height;
            if( t2_top - t3_top < font_height)
              t3_top = t2_top - font_height;
            
            var t4_top = gt_top - title_height;
            if( t3_top - t4_top < font_height)
              t3_top = t4_top + font_height;

            $("#myTitle0").offset({ top: t0_top });
            $("#myTitle1").offset({ top: t1_top });
            $("#myTitle2").offset({ top: t2_top });
            $("#myTitle3").offset({ top: t3_top });
            $("#myTitle4").offset({ top: t4_top });
            // console.log($("#myTitle0").position());
          },
          calculateWorkTime: function(){
            console.log('Dummy Work Calculate:');
            this.work_accept_time = '08:00';
            this.work_rest_time = '01:30';
          },
          calculateRealWorkTime: function(){
            console.log('Dummy Work Calculate:');
            this.real_work_time = '08:00';
            this.real_rest_off_time = '01:30';
          },
          getWeekName: function(date){
            return this.dayNamesMin(date.getDay());
          },
          button_save: function () {
            console.log("save button click");
          },
          button_delete: function () {
            console.log("delete button click");
          },

          check_s_date: function(day, event){
            // console.log("check_s_date");
            // console.log(event);
            if( this.is_input_week(day.date) ){
              // console.log(day);
              let isExists = false;
              this.checkedDate.forEach( function(element) {
                if( element == day.day_id )
                  isExists = true;
              });
              // console.log( "isExists:" + isExists );
              if( isExists ) {
                this.checkedDate = this.checkedDate.filter( function(element) {
                  return element !== day.day_id
                });
              } else {
                this.checkedDate.push(day.day_id);
              }
            } else {
              // console.log('체크하면 안되는 주:' + day.day_id);
            }
          }
        }
        // watch:{
        //   message: function(val){
        //     this.message = val;
        //   }
        // }
      });
      // $watch 는 인스턴스 메소드 입니다.
      // app.$watch('message', function (newVal, oldVal) {
      //   console.log(newVal);
      //   console.log(oldVal);
      // })
      //app.message = "asdf";

      // 초기값 Setting
      app.work_hours = {
        monthMax: 226,
        monthStd: 174,
        weekStd: 80,
        myWork: 30
      };
      app.weekCount = 2;
      app.calRate();
    });
  </script>
  <style>
body{
  font-size: 1.1em;
}
    .other_month{
      color:rgb(115, 158, 156)
    }
    .this_month {
      color: rgb(16, 14, 165)
    }

.checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid rgb(65, 64, 64);
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.checkbox-double{
  border: 4px double;
}
.checkbox-round:checked {
    background-color: darkcyan;
}

table.cal_table {
    border: 1px solid #444444;
    border-collapse: collapse;
}
.cal_table th, .cal_table td {
  border: 1px solid #444444;
  padding: 0px;
}
input.class_time{
  text-align: center;
  width: 4rem;
}

.progress-bar-vertical {
  width: 35px;
  min-height: 100%;
  margin-right: 20px;
  border-radius: 10px !important;
  display: flex;
  flex-direction: column-reverse;
}

.progress-bar-vertical .progress-bar {
  width: 100%;
  height: 0;
  -webkit-transition: height 0.6s ease;
  -o-transition: height 0.6s ease;
  transition: height 0.6s ease;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}

.progress {
  overflow: hidden;
  height: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
  </style>
</head>

<body>

  <div id="app" style="width:100%;">
    <div>
      <div>
        년 월
      </div>
      <table style="width:70%;float: left; " class="cal_table">
        <tr>
          <th v-for="week in dayNamesMin" style="width: 14%">{{week}}</th>
        </tr>
        <tr v-for="week in calendar">
          <td v-for="day in week" style="width: 14%">
              <div style="float:left; width:10%;">
                <input type="checkbox" v-if="is_input_week(day.date)" v-bind:class="['checkbox-round', {'checkbox-double':day.isToday}]" v-bind:value="day.day_id" v-model="checkedDate">
              </div>
              <div v-bind:class="[day.isCurMonth?'this_month':'other_month']"
                style="text-align: right;width: 90%; float: right;" v-on:click="check_s_date(day, $event)">
                {{ day.day }}
              </div>
            <div style="width:100%; height:50px; text-align: center; clear: both;" v-on:click="check_s_date(day, $event)">
              {{ day.message }}
            </div>
          </td>
        </tr>
      </table>
      <table style="width:30%;float: right; ">
        <tr>
          <td id="myTable1" style="text-align: right; vertical-align: text-top; font-size: medium">
            <div id="myTitle0" style="position: relative; left: 0px; top: -10px">0H</div>
            <div id="myTitle1" style="position: relative; left: 0px; top: -10px">{{ workTitle[0] }}</div>
            <div id="myTitle2" style="position: relative; left: 0px; top: -10px">{{ workTitle[1] }}</div>
            <div id="myTitle3" style="position: relative; left: 0px; top: -10px">{{ workTitle[2] }}</div>
            <div id="myTitle4" style="position: relative; left: 0px; top: -10px">최대근무가능H: {{ work_hours.monthMax }}H</div>
</td>
<td style="border-spacing: 0px; padding: 0px;">
  <table style="border: 0px; padding: 0px; border-spacing: 0px; display: none">
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="width: 10px; background-color: gray; border-bottom: 1px; padding: 0px"></td>
    </tr>
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="background-color: red; border: 0px; padding: 0px"></td>
    </tr>
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="background-color: yellow; border: 0px; padding: 0px"></td>
    </tr>
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="background-color: green; border: 0px; padding: 0px"></td>
    </tr>
  </table>
</td>
<td id="myTable2">

<div id="myGT" style="height: 350px;">
  <div id="myGround" class="progress progress-bar-vertical">
    <div id="myG1" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0"
      aria-valuemax="100" v-bind:style="{height: myHeight1 + '%', 'background-color': barColor[0]}"
      >
      <span class="sr-only">60% Complete</span>
    </div>
    <div id="myG2" class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="10" aria-valuemin="0"
      aria-valuemax="100" v-bind:style="{height: myHeight2 + '%', 'background-color': barColor[1]}">
      <span class="sr-only">10% Complete</span>
    </div>
    <div id="myG3" class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
      v-bind:style="{height: myHeight3 + '%', 'background-color': barColor[2]}">
      <span class="sr-only">20% Complete</span>
    </div>
  </div>
</div>
          </td>
        </tr>
      </table>
    </div>
    <div style="width: 100%; float: none">
      HI
    </div>
    <div style="width: 100%; float: none">
      <div style="width: 60%; float: left;">

        <table style="width: 100%">
          <tr>
            <td>
              선택된 날짜: {{ checkedDate }}
            </td>
            <td>
              <button v-on:click="check_std_week()"> 평일 전체 선택 </button>
            </td>
          </tr>
        </table>
        <table style="width: 100%">
          <tr>
            <th style="width: 8em; text-align: left">
              시간선택
            </th>
            <td v-for="time of time_kind" style="width: 25%;">
              <input type="radio" v-bind:id="'time_kind' + time.kind" v-bind:value="time.kind" v-model="select_time_kind" v-on:change="change_time_kind">
              <label v-bind:for="'time_kind' + time.kind">
                {{ time.fromTime }} ~ {{ time.toTime }}
              </label>
            </td>
          </tr>
          <tr>
            <th style="width: 8em; text-align: left">사내근무시간</th>
            <td v-bind:colspan="time_kind.length">
              <input type="text" v-model="fromTime" style="text-align: center; width: 4em;">
              ~
              <input type="text" v-model="toTime" style="text-align: center; width: 4em;">
            </td>
          </tr>
          <tr>
            <th style="width: 8em; text-align: left">출장/외근</th>
            <td v-bind:colspan="time_kind.length">
              <input type="text" v-model="fromTimeOut" style="text-align: center; width: 4em;">
              ~
              <input type="text" v-model="toTimeOut" style="text-align: center; width: 4em;">
            </td>
          </tr>
          <tr>
            <th style="width: 8em; text-align: left">
              시간外 라이브방송 모니터링
              <br>
              <span style="font-size: 0.5em;">* 방송MD의 경우에만 해당</span>
            </th>
            <td v-bind:colspan="time_kind.length">
              <select v-model="monitor_time">
                <option v-for="option in monitor_times" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
              <br>
              <span style="font-size: 0.5em;">* 1개 PGM당 최대 2H인정</span>
            </td>
          </tr>
          <tr>
            <th style="width: 8em; text-align: left">
          
            </th>
            <td v-bind:colspan="time_kind.length">
              <table style="width: 100%">
                <tr>
                  <td style="width: 50%;">
                    <ul>
                      <li>근무 인정시간 : {{ work_accept_time }} </li>
                      <li>의무 휴게시간 : {{ work_rest_time }} </li>
                    </ul>
                  </td>
                  <td style="width: 50%;">
                    <button v-on:click="calculateWorkTime()">근무/휴게시간계산</button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <th style="width: 8em; text-align: left">
              추가휴게 입력
            </th>
            <td v-bind:colspan="time_kind.length">
              <table style="width: 100%">
                <tr>
                  <td style="width: 30%;">
                    <select v-model="select_rest_kind">
                      <option v-for="option in rest_kind" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </td>
                  <td style="width: 60%;">
                    <input v-model="add_rest_from" class="class_time">
                    ~
                    <input v-model="add_rest_to" class="class_time">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div>
          <table style="width: 100%">
            <tr>
              <th>근무시간</th>
              <td>{{ real_work_time }}</td>
              <th>휴게/OFF</th>
              <td>{{ real_rest_off_time }}</td>
              <th>
                <button v-on:click="calculateRealWorkTime">근무시간계산</button>
              </th>
            </tr>
          </table>
        </div>
        <div style="font-size: 0.8em">
        </div>
        <button v-on:click="button_delete('asdf', $event)"> 삭제 </button>
        <button v-on:click="button_save('asdf', $event)"> 저장 </button>
    </div>
    <div style="width: 40%; float: right;">
      <div style="width: 100%; height: 100%; border: 1px solid rgb(65, 64, 64)">
        <table>
          <tr>
            <td>
              여기에 설명이 죽있으면 좋겠습니다.
            </td>
          </tr>
        </table>
        <button v-on:click="button_delete('asdf', $event)"> 근무등록 </button>
        <button v-on:click="button_save('asdf', $event)"> 등록취소 </button>
      </div>
    </div>
    </div>
      <div style="float: unset">
          <button v-on:click="changeWorkHour(10, 0, 0)">근무시간 +10H</button>
          <button v-on:click="changeWorkHour(-10, 0, 0)">근무시간 -10H</button>
<br/>
          <button v-on:click="changeWorkHour(0, 10, 0)">권장진도율 +10H </button>
          <button v-on:click="changeWorkHour(0, -10, 0)">권장진도율 -10H </button>
<br/>
          <button v-on:click="changeWorkHour(0, 0, 10)"> 소정근로시간 +10H </button>
          <button v-on:click="changeWorkHour(0, 0, -10)"> 소정근로시간 -10H </button>
      </div>
  </div>
</body>

</html>