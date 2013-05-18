/**
 * @author Tom
 */

function Meter (value, elem)
{
	this.Element = elem;
	this.CurrValue = value;
	this.UpdateValue = function(newValue)
	{
		
		if ((this.CurrValue != newValue) && (newValue <= 100))
		{
			this.Element.style.width = String(newValue) + "%";
			if (newValue < 25)
				this.Element.style.background = "red";
			else if (newValue < 50)
				this.Element.style.background = "orange";
			else if (newValue < 75)
				this.Element.style.background = "yellow";
			else 
				this.Element.style.background = "lime";
			this.CurrValue = newValue;
		}
	} 
}

var vMeter1;
var pinger;


function Ping()
{
	
	vMeter1.UpdateValue(vMeter1.CurrValue + 5);

}


function OnLoad()
{
	
	
	var meter1 = document.getElementById('meter1');
	vMeter1 = new Meter(-5, meter1);

	pinger = setInterval(Ping, 1000)
	
}