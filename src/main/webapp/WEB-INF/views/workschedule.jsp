<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <c:url value="/assets/css/index.css" var="jstlCss" />
  <link href="${jstlCss}" rel="stylesheet" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script type="text/javascript" src="/assets/js/ping_bundle.js"></script>
  <script type="text/javascript">
  Date.prototype.getWeekOfMonth = function () {
      var onejan = new Date(this.getFullYear(), 0, 1);
      return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }
    $(document).ready(function () {
      // todo-item 이름을 가진 컴포넌트를 정의합니다
      Vue.component('todo-item', {
        template: '<li>할일 항목 하나입니다.</li>'
      });
      function getCalendar(year,month, day){
        let today = new Date(year, month, day, 0, 0, 0);
        let firstDay = new Date(year, month, 1, 0, 0, 0);
        let weekFirstDay = new Date(firstDay);
        let weekNum = today.getWeekOfMonth();
        weekFirstDay.setDate(weekFirstDay.getDate() - weekFirstDay.getDay());
        // console.log(today);
        // console.log(firstDay);
        // console.log(weekFirstDay);
        // console.log("getDay():" + firstDay.getDay());
        let calendar = [];
        for (let perWeek = 0; perWeek < 6 && (perWeek===0 || today.getMonth()===weekFirstDay.getMonth()); perWeek++) {
          let week = [];
          for (let perDay = 0; perDay < 7; perDay++) {
            week.push({
              day_id: weekFirstDay.getFullYear() + "-" + (weekFirstDay.getMonth()+1) + "-" + weekFirstDay.getDate(),
              monthDay: weekFirstDay.getDay(), // 요일
              day: weekFirstDay.getDate(), // 날짜
              isToday: false,
              isCurMonth: today.getMonth()===weekFirstDay.getMonth(),
              isCurWeek: (today.getMonth() === weekFirstDay.getMonth()) && (weekNum ===  weekFirstDay.getWeekOfMonth()),
              weekDay: perDay,
              weekNum: weekFirstDay.getWeekOfMonth(),
              date: new Date(weekFirstDay.getFullYear(), weekFirstDay.getMonth(), weekFirstDay.getDay()),
              events: null
            });
            // monthViewStartDate.add(1, 'day');
            weekFirstDay.setDate(weekFirstDay.getDate() + 1);
          }
          calendar.push(week);
        }
        return calendar
      }
      
      var navYear, navMonth, navDate;
      let date1 = new Date();
      navYear = date1.getFullYear();
      navMonth = date1.getMonth();
      navDate = date1.getDate();
      var myCalendar = getCalendar(navYear, navMonth, navDate);
      var app = new Vue({
        el: '#app',
        data: {
          Organization:[],
          message:'hi',
          seen: false,
          dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
          monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          calendar: myCalendar,
          checkedDate: []
        },
        methods: {
          greet: function(message, event){
            //getCalendar('2019','00','21');
            this.seen = !this.seen;
            // this.checkedDate.array.forEach(element => {
            //   console.log("hi:" + element);
            // });
            console.log("asdf");
            console.log(this.checkedDate);
          },
          getWeekName(date){
            return this.dayNamesMin(date.getDay());
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


    });
  </script>
  <style>
    .other_month{
      color:beige
    }
    .this_month {
      color: darkcyan
    }
    .checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}

.checkbox-round:checked {
    background-color: darkcyan;
}
  </style>
</head>

<body>
  <p>Test Vue.js</p>
  <div id="app" style="width:100%;">
    <table style="width:100%">
      <tr>
        <th v-for="week in dayNamesMin">{{week}}</th>
      </tr>
      <tr v-for="week in calendar">
        <td v-for="day in week" style="text-align:center">
          <div style="width:50%">
            <input type="checkbox" v-if="day.isCurWeek" v-bind:class="['checkbox-round']" v-bind:value="day.day_id" v-model="checkedDate">
          </div>
          <div v-bind:class="[day.isCurMonth?'this_month':'other_month']" style="height:50px; text-align: right" style="width:50%">
            {{ day.day }}
          </div>
        </td>
      </tr>
    </table>
    <button v-on:click="greet('asdf', $event)"> Greet </button>
    {{ checkedDate }}
  </div>
  ${ message }
</body>

</html>