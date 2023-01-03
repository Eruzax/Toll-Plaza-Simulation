function initialize()
{
    l = document.getElementById("log");
    time = document.getElementById("timer");
    seconds = 0;
    speed = 1;
    interval = null;
}


// Update the timer
function timer () 
{
    seconds++;

    // Format our time
    hrs = Math.floor(seconds / 3600);
    mins = Math.floor((seconds - (hrs * 3600)) / 60);
    secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    console.log(`${hrs}:${mins}:${secs}`);

    for (var i = 0; i < speed; i++)
    {

    }
}

function start() {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

function stop() 
{
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	console.log('00:00:00');
}

function car()
{

}