# Pol.js
Embed the most up to date political polling data and charts in your site with pol.js.

##About:
Pol.js is a synthetic API that retrieves up to the minute polling data from Real Clear Politics and embeds it in your website hassle-free..

##Quick Start:

Clone the repo and create a new HTML file.
Ensure that you include jquery and pol.js in your HTML file.
In your html body, include:
```html
<div class="polls" id="polls-root">

</div>
```


Also include your calls in a script tag:
```html
<script>
  presidentialPoll();
</script>
```
Your HTML file could look something like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="../pol.js" charset="utf-8"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Pol.js Demo</title>
  </head>
  <body>
    <div class="polls" id="polls-root">

    </div>
    <script>
      presidentialPoll();
      presidentialPoll('ohio');
      presidentialPoll('pennsylvania');
      presidentialPoll('North Carolina');
      presidentialPoll('NEW HAMPSHIRE');
      presidentialPoll(5542);
    </script>
  </body>
</html>
```
Open the page in Chrome.

###Embedding Charts
First, download [chart.js](http://www.chartjs.org/) and include it in your html file:
```html
    <script src="./assets/Chart.js" charset="utf-8"></script>
```
create a canvas element with id 'canvas':
```html
<canvas id="canvas" width="600" height="300"></canvas>
```
call pollChart with your desired data passed in as a string:
```html
<script>
  pollChart('four-way-national');
</script>
```
If you want to constrain the size of your chart, place it in a div with a fixed size:
```html
<div class="canvas-container" style: 'width: 600px; height: 300px;'>
  <canvas id="canvas" width="600" height="300"></canvas>
</div>
```
It's that easy!

Live Demo [here](http://www.pauloliva.com/chart-demo.html)

##Documentation:
```JavaScript
  presidentialPoll(state = 'national', format = 'html')
```
Displays presidential polling as html or json for the specified state. If no state is specified, displays national polling data. If no format is specified, renders HTML to
```html
<div id "polls-root">
```
Note that you can specifiy a specific RCP poll ID by passing in a poll ID number as the state parameter, so
```JavaScript
presidentialPoll(5542);
//is the same as:
presidentialPoll('virginia', 'html');
```
You can get the 4 way race polling with:
```JavaScript
presidentialPoll('four-way-national');
```

###Senate Races

2016 senate races are also available with Pol.js.

```JavaScript
senatePoll('Ohio')
senateChart('Ohio')
```
