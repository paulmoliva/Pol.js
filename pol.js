$( () => {
  $.ajax(
    {
      url: 'http://www.realclearpolitics.com/epolls/json/5491_historical.js',
      dataType: 'jsonp',
      success: (data) => {
        console.log(data);
      }
    }
  );
}
);/*
function return_json(obj) {
  console.log(obj);
  let poll = obj.poll;
  $h4 = $('<h3></h3>');
  $h4.html(poll.title)
  $('.polls').prepend($h4);
  let data = poll.rcp_avg[0];
  $h4 = $('<h4></h4>');
  $h4.html(data.date);
  $('.polls').append($h4);
  let candidates = data.candidate;
  for (let i = 0; i < candidates.length; i++){
    let color;
    color = (i === 0) ? "blue" : "red";
    $(`#candidate${i}-name`)[0].innerHTML = (candidates[i].name);
    $(`#candidate${i}-value`)[0].innerHTML = (candidates[i].value);
    let el = $(`#candidate${i}-value`)[0];
    $(el).css({'width': `${candidates[i].value * 2}px`, 'border-bottom-color': `${color}`});
  }
};*/

// import JSON from 'JSON';

function make_request(pollID){
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
          console.log(data);
        }
      }
    );
  }
);
}

function return_json(obj) {
  $('polls').children().each((i, el) => {
    el.empty();
  });
  let h3 = $('.polls h3');
  let h4 = $('.polls h4');
  if (h3.length && h4.length){
    h3[0].innerHTML = ('');
    h4[0].innerHTML = ('');
  }
  console.log(obj);
  let poll = obj.poll;
  let $h4 = $('<h3></h3>');
  $h4.html(poll.title)
  $('.polls').prepend($h4);
  let data = poll.rcp_avg[0];
  $h4 = $('<h4></h4>');
  $h4.html(data.date);
  $('.polls').append($h4);
  let candidates = data.candidate;
  for (let i = 0; i < candidates.length; i++){
    let color;
    color = (i === 0) ? "blue" : "red";
    $(`#candidate${i}-name`)[0].innerHTML = (candidates[i].name);
    $(`#candidate${i}-value`)[0].innerHTML = (candidates[i].value);
    let el = $(`#candidate${i}-value`)[0];
    $(el).css({'width': `${candidates[i].value * 2}px`, 'border-bottom-color': `${color}`});
  }
};
