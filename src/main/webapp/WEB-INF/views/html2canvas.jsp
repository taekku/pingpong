<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      .feedback-overlay-black{
        background-color:#000;
        opacity:0.5;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        margin:0;
      }

    </style>

    <style>
      div{
        padding:20px;
        margin:0 auto;
        border:5px solid black;
      }

      h1{
        border-bottom:2px solid white;
      }

      h2{
        background: #efefef;
        padding:10px;
      }


    </style>
  </head>
  <body>
    <div style="background:red;">
      <div style="background:green;">
        <div style="background:blue;border-color:white;">
          <div style="background:yellow;"><div style="background:orange;"><h1>Heading</h1>
              Text that isn't wrapped in anything.
              <p>Followed by some text wrapped in a <b>&lt;p&gt; paragraph.</b> </p>
              Maybe add a <a href="#">link</a> or a different style of <a href="#" style="background:white;" id="highlight">link with a highlight</a>.
              <hr />
              <h2>More content</h2>
              <div style="width:10px;height:10px;border-width:10px;padding:0;">a</div>
            </div></div>

        </div>

      </div>
    </div>
    <script type="text/javascript" src="/assets/js/html2canvas.js"></script>
    <script type="text/javascript">
        html2canvas(document.body).then(function(canvas) {
            document.body.appendChild(canvas);
        });
    </script>
  </body>
</html>
