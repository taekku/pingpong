<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<c:url value="/assets/css/index.css" var="jstlCss" />
  <link href="${jstlCss}" rel="stylesheet" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="/assets/js/ping_message.js"></script>
  <script type="text/javascript" src="/assets/js/ping_action.js"></script>
  <script src="/assets/js/ping_bundle.js"></script>
  <script type="text/javascript">
  $(document).ready(function(){
    $("#btnSave").click(function(){
      let service = new ping.Service("TEST Service");
      $("#mySave").text($("#mycontents").val());
      let myData = {
        data: "Hi Data",
        Hello: ["Good Morning","Good Afternoon"],
        "Service": service,
        "myData" : [$("#mycontents").val()]
      };
      let myAjax = $.ajax({
        url: "/Pingpong",
        type: "POST",
        data: JSON.stringify(myData),
        success: function (data) {
          console.log("success:");
          console.log(data);
        },
        beforeSend: function(xhr){
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      })
      .done(function( data ) {
        $("#mySave").text(JSON.stringify(data) + data.Hello2);
      })
      .fail(function( data ) {
        console.error(data);
      })
      .always(function( data ) {
        // console.log("always==>");
        // console.log(data);
      });
    });
    $("#btnTest").click(function(evt){
      findField($("#myForm1"));
    });
  });
var pp = new ping.Ping('test');
console.log(pp);
pp._size = 10;
console.log(pp);
  </script>
</head>
<body>
   <p>What did you say?</p>
   <p>I said: <span class="text-underline">"${mymessage}."</span></p>
   <script type="text/javascript" src="/assets/js/test.js">
   </script>
   <form id="myForm1" name="myForm1" action="/myHello" method="POST" onsubmit="return false;">
      <textarea id="mycontents" name="mycontents" style="width: 100%" rows="20"></textarea>
      <input id="input1" name="input1">
      <input id="input2" name="input2" type="email">
      <input id="input3" name="input3" type="color">
      <button id="btnSave" name="btnSave">myContents</button>
      <button id="btnTest" name="btnTest">myTest</button>
      <div id="mySave"></div>

      ${ message }
   </form>
   <a href="/">Home</a>
</body>
</html>