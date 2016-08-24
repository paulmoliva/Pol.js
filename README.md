# Pol.js
Lightweight JavaScript library for political polling data

##About:
Pol.js is a synthetic API for retrieving Real Clear Politics polling data.

##Quick Start:

Clone the repo and create a new HTML file.
Ensure that you include jquery and pol.js in your HTML file.
Include:
```html
<div class="polls" id="polls-root">

</div>
```
in your html body.
Include:
```html
<script>
  presidentialPoll();
</script>
```
Your HTML file should look similar to this:
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
      presidentialPoll(5542);
    </script>
  </body>
</html>
```
Open the page in Chrome.

##Documentation:
```JavaScript
  presidentialPoll(state = 'national', format = 'html')
```
Displays presidential polling as hmtl or json for the specified state. If no state is specified, displays national polling data. If no format is specified, renders HTML to
```html
<div id "polls-root">
```
Note that you can specifiy a specific RCP poll ID by passing in a poll ID number as the state parameter, so
```JavaScript
presidentialPoll(5542);
//is the same as:
presidentialPoll('virginia', 'html');
```
