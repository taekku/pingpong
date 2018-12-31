<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Organization Sample Code</title>
  <!-- <link rel="icon" href="img/logo.png"> -->
  <!-- <link rel="stylesheet" href="css/font-awesome.min.css"> -->
  <link rel="stylesheet" href="/assets/css/font-awesome.min.css">
  <link rel="stylesheet" href="/assets/css/jquery.orgchart.css">
  <!-- <link rel="stylesheet" href="css/style.css"> -->
  <style type="text/css">
    #chart-container { height: 600px; border: 2px solid #aaa; }
    .orgchart { background: #fff; }
  </style>
  <script type="text/javascript" src="/assets/js/ping_bundle.js"></script>
  <style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
}
#chart-container {
  position: relative;
  display: inline-block;
  top: 10px;
  left: 10px;
  height: 820px;
  width: calc(100% - 24px);
  border: 2px dashed #aaa;
  border-radius: 5px;
  overflow: auto;
  text-align: center;
}
  </style>
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
        +"<div class='content'>" + data.title// +  "<div class='office'>" + data.detail + "</div>"
        +"</div>";
    }
    var oc1 = $('#chart-container').orgchart({
      'data' : data,
      'nodeContent': 'title',
      'exportButton': true,
      'exportFilename': 'MyOrgChart',
      'exportFileextension': 'pdf',
      'draggable': true,
      'toggleSiblingsResp': true,
      'verticalLevel': 4,
      'visibleLevel': 4,
      // 'direction': 'l2r',
      // 'pan': true,
      'zoom': true,
      'nodeTemplate': nodeTemplate,
      'initCompleted': function ($chart) {
          var $container = $('#chart-container');
          $container.scrollLeft(($container[0].scrollWidth - $container.width())/2);
        },
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
    $('#btn_expand').on('click', function() {
      var $temp = oc1.$chart.find('.hidden').removeClass('hidden');
      $temp[0].offsetWidth;
      $temp.find('.slide-up').removeClass('slide-up');
    });
    
    $('#btn_collapse').on('click', function() {
      oc1.hideChildren(oc1.$chart.find('.node:first'));
    });
  }) ;
  </script>
  </body>
</html>