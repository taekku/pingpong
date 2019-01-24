<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <c:url value="/assets/css/index.css" var="jstlCss" />
  <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" /> -->
  <link href="${jstlCss}" rel="stylesheet" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="/assets/js/gaugeVue.js"></script>
  <script>
$(document).ready(function () {
  // 루트 인스턴스 생성
  new Vue({
    el: '#my-gaugedd'
  });
});
  </script>
  <style>
.gauge_td{
  width: 10px;
  height: 100px;
  background-color: gray;
  border: 0px;
  padding: 0px
}
.gauge_td_1{
  background-color: green;
}
.gauge_td_2{
  background-color: blue;
}
.gauge_td_3{
  background-color: blueviolet;
}
.gauge_td_4{
  background-color: palevioletred;
}
  </style>
</head>
<body>
  <div id="my-gaugedd">
    <my-gauge title0="myTitle" myvalue='123'>
      ㅁㄴㅇㄹ
    </my-gauge>
  </div>
</body>
</html>