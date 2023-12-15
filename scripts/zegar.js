function updateClock() {

    var now = new Date();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var day = days[now.getDay()];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var timeString = `${day} ${month} ${date} ${year} &nbsp; &nbsp; &nbsp; ${hours}:${minutes} ${ampm}`;
    document.getElementById('clock').innerHTML = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();