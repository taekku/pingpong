<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>

<head>
  <!--Load the AJAX API-->
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
  google.charts.load('current', { 'packages': ['bar'] });
  google.charts.setOnLoadCallback(drawStuff);

  function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
      ['년도', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
        'Western', 'Literature', { type:'number', role: 'annotation' }],
      ['2100', 10, 24, 20, 32, 18, 5, 5],
      ['2020', 16, 22, 23, 30, 16, 9, 6],
      ['2030', 28, 19, 29, 30, 12, 13, 4]
    ]);

    var options = {
      width: 800,
      legend: { position: 'top', maxLines: 3 },
      chart: {
        title: 'Chess opening moves',
        subtitle: 'popularity by percentage'
      },
      axes: {
        x: {
          0: { side: 'bottom', label: 'White to move' } // Top x-axis.
        }
      },
      // hAxis: { title: 'Month' },
      vAxis: { title: '근무시간H' },
      bar: { groupWidth: "100%" },
      isStacked: true,
      series: {5: {type: 'line', lineWidth:0}}
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };
</script>
    </head>
    
    <body>
      <div id="top_x_div" style="width: 800px; height: 600px;"></div>
</body>

</html>