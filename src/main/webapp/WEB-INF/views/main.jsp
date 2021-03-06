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
  <script src="/assets/js/vue.js"></script>
  <script src="/assets/js/myVue.js"></script>
  <script type="text/javascript" src="/assets/js/ping_bundle.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      console.log("Start Main");
      new Vue({
        el: '#contents',
        data:{
          myMsg:"",
          foo:""
        },
        methods: {
          typing:function(d){
            this.myMsg = d.target.value;
          }
        }
      })
    });
  </script>
  <style>
    @viewport { width: auto;}
  </style>
</head>

<body>
  <div id="topMenu">
    top menu
  </div>
  <div id="leftMenu">
    left menu
  </div>
  <div id="rightMenu">
    right menu
  </div>
  <div id="contents">
    <input v-on:input="typing" v-model="myMsg">
    <br>
    <my-component v-bind:my-message='myMsg'></my-component>
    <br>
  </div>
</body>

</html>