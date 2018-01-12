class Clock {
  constructor() {
    let date = new Date;
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    setInterval( this._tick.bind(this), 1000);

  }

   printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);

  }

   _tick() {
      this._incrementSeconds();
      this.printTime();
    }

    _incrementSeconds() {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this._incrementMinutes();
      }
    }

    _incrementMinutes() {
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this._incrmentHours();
      }
    }

    _incrementHours() {
      this.hours = (this.hours + 1) % 24;
    }
  }

const clock = new Clock();
