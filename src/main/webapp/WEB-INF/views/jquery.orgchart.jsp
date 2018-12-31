<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Organization Chart Plugin</title>
  <!-- <link rel="icon" href="img/logo.png"> -->
  <!-- <link rel="stylesheet" href="css/font-awesome.min.css"> -->
  <link rel="stylesheet" href="/assets/css/jquery.orgchart.css">
  <!-- <link rel="stylesheet" href="css/style.css"> -->
  <style type="text/css">
    #chart-container { height: 600px; border: 2px solid #aaa; }
    .orgchart { background: #fff; }
  </style>
  <script type="text/javascript" src="/assets/js/ping_bundle.js"></script>
</head>
<body>
  <div id="chart-container"></div>
  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="/assets/js/jquery.orgchart.js"></script><!-- 2.1.3 -->
  <script type="text/javascript" src="/assets/js/html2canvas.min.js"></script><!-- 0.5.0-beta4 -->
  <script type="text/javascript" src="/assets/js/jspdf.min.js"></script><!-- 1.3.5 -->
  <script type="text/javascript">
  var sss = new pp.Service("testest");
  sss.requestOrgChart(function(data){
    var nodeTemplate = function(data){
      return "<div class='title'>" + data.name + "</div>"
        +"<div class='content'>" + data.title +  "<div class='office'>" + data.detail + "</div></div>";
    }
    var oc1 = $('#chart-container').orgchart({
      'data' : data,
      'nodeContent': 'title',
      'exportButton': true,
      'exportFilename': 'MyOrgChart',
      'exportFileextension': 'pdf',
      'draggable': true,
      'nodeTemplate': nodeTemplate,
      'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
        //console.log($draggedNode);
        if($draggedNode.find('.content').text().indexOf('manager') > -1 && $dropZone.find('.content').text().indexOf('engineer') > -1) {
          return false;
        }
        return true;
      }
    });
    oc1.$chart.on('nodedrop.orgchart', function(event, extraParams) {
      console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
        + ', dragZone:' + extraParams.dragZone.children('.title').text()
        + ', dropZone:' + extraParams.dropZone.children('.title').text()
      );
    });
  }) ;
  </script>
  </body>
</html>