function initialize()
{
    l = document.getElementById("log");
    log = ""
    toll = document.getElementById("tolls");


    seconds = 0;
    speed = 1;
    interval = null;
    cars = [];
    trucks = [];
    motorcycles =[];
    buses = [];
}


// Update the timer
function timer() 
{
    seconds += 1 * speed;

    // Format our time
    hrs = Math.floor(seconds / 3600);
    mins = Math.floor((seconds - (hrs * 3600)) / 60);
    secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    console.log(`${hrs}:${mins}:${secs}`);
    if (mins <= 24)
    {
        for (var i = 0; i < speed; i++)
    {
        let vehicle = {type: "", ezpass: false, resident: false, toll: 0, time:""};
        let ranV = Math.floor(Math.random() * (4) + 1);
        if (ranV == 1)
        {
            vehicle.type = "Car";
            let randPass = Math.floor(Math.random() * (10) + 1);
            if (randPass <= 7)
            {
                vehicle.ezpass = true;
                let vRes = Math.floor(Math.random() * (10) + 1);
                if (vRes <= 6)
                {
                    vehicle.resident = true;
                    vehicle.toll = Math.floor((12 * 60)) /100;
                }
                else
                {
                    vehicle.toll = Math.floor((12 * 90) /100);
                }
            }
            else
            {
                vehicle.toll = 12;
            }
        }
        else if (ranV == 2)
        {
            vehicle.type ="Motorcycle";
            let randPass = Math.floor(Math.random() * (10) + 1);
            if (randPass <= 7)
            {
                vehicle.ezpass = true;
                let vRes = Math.floor(Math.random() * (10) + 1);
                if (vRes <= 6)
                {
                    vehicle.resident = true;
                    vehicle.toll = 8 * 0.6;
                }
                else
                {
                    vehicle.toll = 8 * 0.9;
                }
            }
            else
            {
                vehicle.toll = 8;
            }
        }
        else if (ranV == 3)
        {
            vehicle.type = "Truck";
            let randPass = Math.floor(Math.random() * (10) + 1);
            if (randPass <= 9)
            {
                vehicle.toll = 18 * 0.9;
            }

        }
        else if (ranV == 4)
        {
            vehicle.type = "Bus";
            vehicle.ezpass = true;
        }
        
        let tp = secs - 1 +i;
        if (mins == 0)
        {
            if (tp < 10)
            {
                vehicle.time = "12:0" + (secs + i) + "am";
            }
            else
            {
                vehicle.time = "12:" + (secs + i) + "am";
            }
        }
        else if (mins < 12)
        {
            if (tp < 10)
            {
                vehicle.time = mins + ":" + (secs + i) + "am";
            }
            else
            {
                vehicle.time = mins + ":" + (secs + i) + "am";
            }
        }
        else if (mins == 12)
        {
            if (tp < 10)
            {
                vehicle.time = "12:0" + (secs + i) + "pm";
            }
            else
            {
                vehicle.time = "12:" + (secs + i) + "pm";
            }
        }
        else if (mins > 12)
        {
            if (tp < 10)
            {
                vehicle.time = mins + ":0" + (secs + i) + "pm";
            }
            else
            {
                vehicle.time = mins - 12 + ":" + (secs + i) + "pm";
            }
        }

        if (vehicle.resident)
        {
            if (vehicle.ezpass)
            {
                log += vehicle.time + "- A residential " + vehicle.type + " with EZ-Pass paid $" + vehicle.toll + "." + "<br />";
            }
            else
            {
                log += vehicle.time + "- A residential " + vehicle.type + " paid $" + vehicle.toll + "." + "<br />";
            }
        }
        else
        {
            if (vehicle.ezpass)
            {
                log += vehicle.time + "- A " + vehicle.type + " with EZ-Pass paid $" + vehicle.toll + "." + "<br />";
            }
            else
            {
                log += vehicle.time + "- A " + vehicle.type + " paid $" + vehicle.toll + "." + "<br />";
            }
        }

        display();
    }
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

function speedUp()
{
    if (speed != 4)
    {
        speed*=2;
        console.log(speed);
    }
}

function slowDown()
{
    if (speed != 1/4)
    {
        speed/=2;
        console.log(speed);
    }
}

function reset()
{
    window.location.reload();
}

function display()
{
    l.innerHTML = log;
}