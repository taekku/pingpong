<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<c:url value="/assets/css/index.css" var="jstlCss" />
  <link href="${jstlCss}" rel="stylesheet" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
  $(document).ready(function(){
    $("#btnSave").click(function(){
      $("#mySave").text($("#mycontents").val());
      let myData = {
        data: "Hi Data",
        Hello: ["Good Morning","Good Afternoon"],
        "myData" : [$("#mycontents").val()]
      };
      let myAjax = $.ajax({
        url: "/myHello3",
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
        // console.log("fail==>");
        // console.log(data);
      })
      .always(function( data ) {
        // console.log("always==>");
        // console.log(data);
      });
    });
  });
  </script>
</head>
<body>
   <p>What did you say?</p>
   <p>I said: <span class="text-underline">"${mymessage}."</span></p>
   <script type="text/javascript" src="/assets/js/test.js">
   </script>
   <form id="myForm1" action="/myHello" method="POST" onsubmit="return false;">
      <textarea id="mycontents" name="mycontents" style="width: 100%" rows="20"></textarea>
      <button id="btnSave">myContents</button>
      <div id="mySave"></div>
   </form>
</body>
</html>