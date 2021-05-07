class Timer{
    constructor(inputNumber, startButton, pauseButton, callBacks){
this.inputNumber = inputNumber;
this.startButton = startButton;
this.pauseButton = pauseButton;
if(callBacks){
    this.onStart = callBacks.onStart;
    this.onTick = callBacks.onTick;
    this.onComplete = callBacks.onComplete;
}

this.startButton.addEventListener('click', this.start);
this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart){
         this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);

    };

    tick = () => {
        if(this.onTick){
            this.onTick(this.timeRemaining);
        }
        const timeRemaining = this.timeRemaining;
        this.timeRemaining = timeRemaining - 0.02;
         if (this.timeRemaining <= 0) {
            this.pause();
            console.log(alert('The Time Over :( '));
        };
    };
       
        get timeRemaining() {
            return parseFloat(this.inputNumber.value);
        }

        set timeRemaining(time) {
            this.inputNumber.value = time.toFixed(2);
        }
    

    pause = () => {
        if(this.onComplete){
            this.onComplete();
        }
        clearInterval(this.interval);
    }

};