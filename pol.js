
let pollData = {};
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
        success: (data) => {
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
  let $h4 = $('<h4></h4>');
  $h4.html(data.date);
  $pollDiv.append($h4);
  let candidates = data.candidate;
  for (let i = 0; i < candidates.length; i++){
    let color;
    color = (candidates[i].affiliation === "Democrat") ? "blue" : "red";
    $pollDiv.append(`<div class = 'candidate-name' id = poll-${count}-candidate${i}-name></div>`);
    $pollDiv.append(`<div class = 'candidate-value' id = poll-${count}-candidate${i}-value></div>`);
    $(`#poll-${count}-candidate${i}-name`)[0].innerHTML = (candidates[i].name);
    $(`#poll-${count}-candidate${i}-value`)[0].innerHTML = (candidates[i].value);
    let el = $(`#poll-${count}-candidate${i}-value`)[0];
    $(el).css({'width': `${candidates[i].value * 2}px`, 'border-bottom': 'solid', 'border-bottom-color': `${color}`});
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
  else if (state === 'national'){
    return 5491;
  } else if (state === 'ohio'){
    return 5634;
  } else if (state === 'virginia'){
    return 5542;
  } else {
    return 5491;
  }
}
