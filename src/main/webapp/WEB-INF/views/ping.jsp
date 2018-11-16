
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<c:url value="/assets/css/index.css" var="jstlCss" />
	<link href="${jstlCss}" rel="stylesheet" />
</head>
<body>
   <p>What did you say?</p>
   <p>I said: <span class="text-underline">"${mymessage}."</span></p>
   <script type="text/javascript" src="/assets/js/test.js">
   </script>
</body>
</html>