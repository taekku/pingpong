<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
    <title>Test Javascript</title>
  <script>
    var DMSCalendar=(function(){
      function DMSCalendar(){
        var today = new Date();
        
      }
      return DMSCalendar;
    }());
    $(document).ready(function(){
      var app = $("#myApp");
      app.html("<p>Good</p>");
    });
  </script>
  </head>
  <body>
    <div id="myApp"></div>
  </body>
</html>