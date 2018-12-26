<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Organization Chart Plugin</title>
  <!-- <link rel="icon" href="img/logo.png"> -->
  <!-- <link rel="stylesheet" href="css/font-awesome.min.css"> -->
  <link rel="stylesheet" href="/assets/css/jquery.orgchart.css">
  <!-- <link rel="stylesheet" href="css/style.css"> -->
  <style type="text/css">
    #chart-container { height: 600px; border: 2px solid #aaa; }
    .orgchart { background: #fff; }
  </style>
</head>
<body>
  <div id="chart-container"></div>

  <script src="/webjars/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="/assets/js/jquery.orgchart.js"></script>
  <script type="text/javascript">
    $(function() {
    var datascource = {
      'name': 'Lao Lao',
      'title': '<div style="color:red">general manager <br/> 한글은?</div>',
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager',
          'children': [{ 'name': 'Li Xin', 'title': 'senior engineer' }]
        },
        { 'name': 'Su Miao', 'title': 'department manager',
          'children': [
            { 'name': 'Tie Hua', 'title': 'senior engineer' },
            { 'name': 'Hei Hei', 'title': 'senior engineer',
              'children': [
                { 'name': 'Pang Pang', 'title': 'engineer' },
                { 'name': 'Dan Dan', 'title': 'UE engineer' }
              ]
            }
          ]
        },
        { 'name': 'Hong Miao', 'title': 'department manager' }
      ]
    };
    var oc = $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'draggable': true,
      'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
        if($draggedNode.find('.content').text().indexOf('manager') > -1 && $dropZone.find('.content').text().indexOf('engineer') > -1) {
          return false;
        }
        return true;
      }
    });
    oc.$chart.on('nodedrop.orgchart', function(event, extraParams) {
      console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
        + ', dragZone:' + extraParams.dragZone.children('.title').text()
        + ', dropZone:' + extraParams.dropZone.children('.title').text()
      );
    });
  });
  </script>
  </body>
</html>