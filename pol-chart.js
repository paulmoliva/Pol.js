
let pollData = {};
let dates = [];
var count = 0;
function _make_request(pollID, callBack){
  const rcpURL = 'http://www.realclearpolitics.com/epolls/json/';
  const historical = '_historical.js';
  const requestURL = rcpURL + pollID + historical;
  var request = new XMLHttpRequest();
  $( () => {
    $.ajax(
      {
        url: rcpURL + pollID.toString() + historical,
        dataType: 'jsonp',
        success: (someData) => {
          console.log('success!');
        },
        error: () => {
          console.log(pollData);
          callBack(pollData);
        }
      });
  });
}

function return_json(obj) {
  pollData = obj;
}


function htmlDisplay(obj){
  let poll = obj.poll;

  //_emptyTags();

  let $h3 = $('<h3></h3>');
  $h3.html(poll.title);
  const $root = $('#polls-root');
  $root.append(`<div id = poll${count}></div>`);
  let $pollDiv = $(`#poll${count}`);
  $pollDiv.prepend($h3);
  let data = poll.rcp_avg[0];
  let prevDay = poll.rcp_avg[1];
  let $h4 = $('<h4></h4>');
  $h4.html(data.date);
  $pollDiv.append($h4);
  let candidates = data.candidate;
  let prevCandidates = prevDay.candidate;
  for (let i = 0; i < candidates.length; i++){
    let color;
    if (candidates[i].affiliation === "Democrat"){
      color = 'blue';
    } else if (candidates[i].affiliation === "Republican"){
      color = 'red';
    } else if (candidates[i].affiliation === "Green"){
      color = 'green';
    } else if (candidates[i].affiliation === "Libertarian"){
      color = 'yellow';
    }
    let value = candidates[i].value;
    let prevValue = prevCandidates[i].value;
    if (value === prevValue){
      var arrowText = '';
    } else if (value > prevValue){
      var arrowText = `<span style = "color: green; font-size: 14px">▲${Math.round((value - prevValue) * 10) / 10}</span>`;
    } else {
      var arrowText = `<span style = "color: red; font-size: 14px">▼${Math.round((value - prevValue) * 10) / 10}</span>`;
    }    $pollDiv.append(`<div class = 'candidate-name' id = poll-${count}-candidate${i}-name></div>`);
    $pollDiv.append(`<div class = 'candidate-value' id = poll-${count}-candidate${i}-value></div>`);
    $(`#poll-${count}-candidate${i}-name`)[0].innerHTML = '<strong>' + (candidates[i].name) + '<strong>';
    $(`#poll-${count}-candidate${i}-value`)[0].innerHTML = (candidates[i].value + '%' + arrowText);
    console.log(arrowText);
    let el = $(`#poll-${count}-candidate${i}-value`)[0];
    $(el).css({'width': `${candidates[i].value * 2}px`, 'overflow-x':'visible', 'border-bottom': 'solid 7px', 'border-bottom-color': `${color}`});
  }
  count ++;
}

function _emptyTags(){
  $('#polls-root').children().each((i, el) => {
    $(el).remove();
  });
}

function asJSON(obj){
  document.getElementById('polls-root').innerHTML = JSON.stringify(obj);
}

function presidentialPoll(state = 'national', format = 'html'){
  let id = _getPollID(state);
  if (format === 'html'){
    _make_request(id, htmlDisplay);
  } else {
    _make_request(id, asJSON);
  }
}

function _getPollID(state){
  if (typeof state === 'number'){
    return state;
  }
  state = state.toLowerCase();
  if (state === 'national'){
    return 5491;
  } else if (state === 'ohio'){
    return 5634;
  } else if (state === 'virginia'){
    return 5542;
  } else if (state === 'florida'){
    return 5635;
  } else if (state === 'michigan'){
    return 5533;
  } else if (state === 'pennsylvania'){
    return 5633;
  } else if (state === 'virginia'){
    return 5542;
  } else if (state === 'north carolina' ){
    return 5538;
  } else if (state === 'georgia'){
    return 5741;
  } else if (state === 'new hampshire'){
    return 5596;
  } else if (state === 'wisconsin'){
    return 5659;
  } else if (state === 'iowa'){
    return 5597;
  } else if (state === 'minnesota'){
    return 5591;
  } else if (state === 'missouri'){
    return 5609;
  } else if (state === 'colorado'){
    return 5751;
  } else if (state === 'nevada'){
    return 5891;
  } else if (state === 'arizona'){
    return 5832;
  } else if (state === 'oregon'){
    return 5892;
  } else if (state === 'california') {
    return  5849;
  } else if (state === 'massachusetts') {
    return  5863;
  } else if (state === 'dc') {
    return  5901;
  } else if (state === 'hawaii') {
    return  5902;
  } else if (state === 'maryland') {
    return  5859;
  } else if (state === 'rhode island') {
    return   5909;
  } else if (state === 'vermont') {
    return  5912;
  } else if (state === 'alaska') {
    return 5884;
  } else if (state === 'arkansas') {
    return 5899;
  } else if (state === 'kentucky') {
    return 5523;
  } else if (state === 'idaho') {
    return 5903;
  } else if (state === 'nebraska') {
    return 5905;
  } else if (state === 'north dakota') {
    return  5907;
  } else if (state === 'oklahoma') {
    return  5908;
  } else if (state === 'tennessee') {
    return 5911;
  } else if (state === 'west virginia') {
    return 5885;
  } else if (state === 'wyoming') {
    return  5913;
  } else if (state === 'washington')
       return 5895;
    else if (state === 'delaware')
       return 5900;
    else if (state === 'illinois')
       return 5583;
    else if (state === 'new york')
       return 5792;
    else if (state === 'new hampshire')
       return 5596;
    else if (state === 'pennsylvania')
       return 5633;
    else if (state === 'michigan')
       return 5533;
    else if (state === 'wisconsin')
       return 5659;
    else if (state === 'colorado')
       return 5751;
    else if (state === 'minnesota')
       return 5591;
    else if (state === 'oregon')
       return 5892;
    else if (state === 'new mexico')
       return 5894;
    else if (state === 'connecticut')
       return 5720;
    else if (state === 'maine')
       return 5896;
    else if (state === 'ohio')
       return 5634;
    else if (state === 'florida')
       return 5635;
    else if (state === 'north carolina')
       return 5538;
    else if (state === 'iowa')
       return 5597;
    else if (state === 'nevada')
       return 5891;
    else if (state === 'arizona')
       return 5832;
    else if (state === 'georgia')
       return 5741;
    else if (state === 'missouri')
       return 5609;
    else if (state === 'maine')
       return 5897;
    else if (state === 'south carolina')
       return 5748;
    else if (state === 'utah')
       return 5971;
    else if (state === 'texas')
       return 5694;
    else if (state === 'nebraska')
       return 5906;
    else if (state === 'montana')
       return 5893;
    else if (state === 'louisiana')
       return 5696;
    else if (state === 'south dakota')
       return 5910;
    else if (state === 'kansas')
       return 5904;
     else if (state === 'four-way-national'){
        return 5952;
  } else {
    return 5491;
  }
}

var idx = 0;

function pollChart(){
  _make_request(5491, makeArray);
}

function makeArray(obj, i = idx) {
  let poll = obj.poll;
  pollData = poll.rcp_avg;
  let k = idx+1;
  dates = pollData.map( el => el.date.split([' ']).slice(1,4).join(' '));
  console.log(dates[0].split(' ').slice(0,4));
  console.log(pollData[0].candidate);
  let pollData2 = pollData.map( (el, j) => (el.candidate[k].value) );
  pollData = pollData.map( (el, j) => (el.candidate[i].value) );

  var ctx = document.getElementById('canvas').getContext('2d');
  var data = {
    datasets: [{
      data: pollData
    }]
  };
  var myLineChart = new Chart.Line(ctx, {
    data: {datasets:[
            {data: pollData.reverse().slice(pollData.length -31), label: 'Clinton', borderColor: 'blue'},
            {data: pollData2.reverse().slice(pollData.length -31), label: 'Trump', borderColor: 'red'}
          ], labels: dates.reverse().slice(pollData.length -31)

  },

    options: {}
  });
}
