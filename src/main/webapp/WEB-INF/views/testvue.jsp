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
    $(document).ready(function () {
      var app = new Vue({
        el: '#app',
        data: {
          Organization:[]
        },
        methods: {
          greet: function(message, event){
            console.log("click button");
            console.log(event);
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


      var sss = new pp.Service("testest");
      sss.requestOrgChart(function (data) {
        //console.log("mydata:");
        //console.log(data);
        app.Organization = data;
      });
    });
  </script>
</head>

<body>
  <p>Test Vue.js</p>
  <div id="app">
    {{ Organization.name }}
    <ul id="example-1">
      <li v-for="org in Organization.children">{{ org.name }}</li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, key, index) in Organization" v-if="key != 'children'">
        {{ index }}.{{ key }} : {{ value }}
      </li>
    </ul>
    <button v-on:click="greet('asdf', $event)">Greet</button>
  </div>
  ${ message }
</body>

</html>