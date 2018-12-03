<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Welcome to the Pingpong</title>
	<c:url value="/assets/css/index.css" var="jstlCss" />
  <link href="${jstlCss}" rel="stylesheet" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="/assets/js/ping_message.js"></script>
  <script type="text/javascript">
  $(document).ready(function(){
    //$("#myBody").src = "/ping";
    $("#myBody").attr("src","/ping");
  });
  </script>
</head>
  <body>
    Welcome to the Pingpong.
    ${ message }
    <a href="/ping">Ping</a>
    <iframe id="myBody" name="myBody" width="100%" height="500">

    </iframe>
  </body>
</html>