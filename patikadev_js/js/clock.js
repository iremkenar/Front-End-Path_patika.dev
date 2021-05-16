const askUserName = () => {
  const userName = prompt('Adınız nedir?');
  document.querySelector('#myName').innerHTML = userName;
};

const showTime = () => {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const time = new Intl.DateTimeFormat('TR-tr', options).format(now);
  const day = new Intl.DateTimeFormat('TR-tr', { weekday: 'long' }).format(now);
  let displayTime = document.querySelector('#myClock');
  displayTime.innerHTML = `${day} ${time}`;

  setTimeout(showTime, 1000);
};

askUserName();
showTime();
