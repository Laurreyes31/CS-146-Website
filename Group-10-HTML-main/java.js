function sleepLog(){
    var text = document.getElementById('text').value;
    document.getElementById('text').value = '';
    var ul = document.getElementById("posts");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.setAttribute("class", "entry");
    ul.appendChild(li);
    document.getElementById('recent').innerHTML = text;

}

var alarmNoise = new Audio();
alarmNoise.src = 'images/alarmsound.mp3';
var alarmTimer;

function setAlarm(button) {
  var time = document.getElementById('alarmTime').valueAsNumber;
  if(isNaN(time)) {
    alert('Invalid Date');
    return;
  }

  var alarm = new Date(time);
  var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());

  var differenceInTime = alarmTime.getTime() - (new Date()).getTime();

  if(differenceInTime < 0) {
    alert('Entered time has already passed :(');
    return;
  }

  alarmTimer = setTimeout(initAlarm, differenceInTime);
  button.innerText = 'Cancel Alarm';
  button.setAttribute('onclick', 'cancelAlarm(this);');
};

function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);')
};

function initAlarm() {
  alarmNoise.play();
  document.getElementById('alarmOptions').style.display = '';
};

function stopAlarm() {
  alarmNoise.pause();
  alarmNoise.currentTime = 0;
  document.getElementById('alarmOptions').style.display = 'none';
  cancelAlarm(document.getElementById('alarmButton'));
};
