function updateTime() {
    const date = new Date();
    const dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString(undefined, dateOptions);

    const calenderi = String.fromCodePoint(128197);
    const clocki = String.fromCodePoint(128348);

    document.getElementById('dateTime').innerHTML = `${calenderi} ${day} ${clocki} ${time}`;
  }

  setInterval(updateTime, 100);
  
  updateTime();