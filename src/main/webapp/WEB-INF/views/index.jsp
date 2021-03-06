<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Welcome to the Pingpong</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<c:url value="/assets/css/index.css" var="jstlCss" />
  <link href="${jstlCss}" rel="stylesheet" />
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script type="text/javascript" src="/assets/js/ping_message.js"></script>
  <script type="text/javascript">
  $(document).ready(function(){
  });
  </script>
</head>
  <body>
    Welcome to the Pingpong.
    ${ message }
    <a href="/ping">Ping</a>
  </body>
</html>