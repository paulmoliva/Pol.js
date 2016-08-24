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
at the bottom of your body, outside the div tag you just created.
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
