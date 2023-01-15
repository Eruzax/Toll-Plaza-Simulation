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

    for (var i = 0; i < speed; i++)
    {
        let vehicle = {type: "", ezpass: false, resident: false, toll: 0, time:""};
        let ranV = Math.floor(Math.random() * (4) + 1);
        if (ranV == 1)
        {
            vehicle.type = "Car";
            let randPass = Math.floor(Math.random() * (10) + 1);
            if (randPass )
            {
                vehicle.resident = true;
                
            }
            else if (randPass)
            {
                
            }
        }
        else if (ranV == 2)
        {
            vehicle.type = "Truck";
        }
        else if (ranV == 3)
        {
            vehicle.type ="Motorcycle";
        }
        else if(ranV == 4)
        {
            vehicle.type = "Bus";
            vehicle.ezpass = true;
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

function generate()
{

}