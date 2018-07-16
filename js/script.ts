
class Locations{
	LocationName = "";
	LocationCity = "";
	LocationZipCode = 0;
	LocationAddress = "";
	LocationTeaserImage = "";
	LocationDate ="";
	LocationTime = 0;

	constructor(name, city, zipCode, address, teaserImage, date, time){
		this.LocationName = name;
		this.LocationCity = city;
		this.LocationZipCode = zipCode;
		this.LocationAddress = address;
		this.LocationTeaserImage = teaserImage;
		this.LocationDate = date;
		this.LocationTime = time;
	}
	
}

class Sights extends Locations{
	constructor(name, city, zipCode, address, teaserImage, date, time){
		super(name, city, zipCode, address, teaserImage, date, time);
	}
}

class Restaurants extends Locations{
	telephone;
	types;
	webAddress;

	constructor(name, city, zipCode, address, teaserImage, telephone, types, webAddress, date, time){
		super(name, city, zipCode, address, teaserImage, date, time);
		this.telephone = telephone;
		this.types = types;
		this.webAddress = webAddress;
	}
}

class Events extends Locations{
	eventDate;
	eventTime;
	ticketPrice;
	webAddress1;

	constructor(name, city, zipCode, address, teaserImage, eventDate, eventTime, ticketPrice, webAddress1, date, time){
		super(name, city, zipCode, address, teaserImage, date, time);
		this.webAddress1 = webAddress1;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}
}



function addSight(){
var Elements=[];

	var StCharles = new Sights("St. Charles Church","Wien", 1010, "Karlsplatz 1", "img/place1.jpg", "13 July 2018" , 1356);
	var viennaZoo = new Sights("Zoo Vienna", "Wien", 1130, "Maxingstraße 13b", "img/place2.jpg", "13 July 2018", 1402);
	
Elements = [StCharles, viennaZoo]

	for(var i = 0; i < Elements.length; i++){
		document.getElementById('sights').innerHTML += `
				<div class="col-md-6 col-sm-12 col-xs-12 well">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
						<p>Created: ${Elements[i].LocationDate}, ${Elements[i].LocationTime}</p>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<h3>${Elements[i].LocationName}</h3>
						<p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
					</div>	
				</div>
			`;
	}
		
}	

addSight();

function addRestaurants(){
var Elements=[];

	var LemonLeafThai = new Restaurants("Lemon Leaf Thai Restaurant","Wien", 1050, "Kettenbrückengasse 19", "img/restaurant1.png", "+43 1 581 23 08", "Chinesisch","www.lemonleaf.at", "13 July 2018", 1304);
	var Sixta = new Restaurants("Sixta", "Wien", 1050, "Schönbrunner Straße 21", "img/restaurant2.png", "+43 1 58 528 56", "wienerisch", "www.sixta.at", "13 July 2018", 1306); 
	var XinChao = new Restaurants("Xin Chao", "Wien", 1060, "Gumpendorfer Straße 127", "img/restaurant3.jpg", "+43 1 9437859", "vietnamesisch", "http://xinchao.at/index.php/de/", "13 July 2018", 1534)
	var Aragwi = new Restaurants("Aragwi", "Wien", 1070, "Neustiftgasse 3", "img/restaurant4.jpg", "+43 1 8906219", "georgisch", "http://www.aragwi.at/", "13 July 2018", 1145)

Elements = [LemonLeafThai, Sixta, XinChao, Aragwi]

	for(var i = 0; i < Elements.length; i++){
		document.getElementById('restaurants').innerHTML += `
				<div class="col-md-6 col-sm-12 col-xs-12 well">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
						<p>Created: ${Elements[i].LocationDate}, ${Elements[i].LocationTime}</p>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<h3>${Elements[i].LocationName}</h3>
						<p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
						<p>${Elements[i].telephone}</p>
						<p>${Elements[i].types}</p>
						<p><a href="http://${Elements[i].webAddress}">${Elements[i].webAddress}</a></p>
					</div>	
				</div>
			`;
	}
		
}	
addRestaurants();



function addEvents(){
var Elements=[];

	var KrisKristofferson = new Events("Kris Kristofferson","Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/event1.jpeg", "Fr., 15. Jun.", "20:00", "58,50", "www.kriskristofferson.com", "13 July 2018", 1310);
	var LennyKravitz = new Events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/event2.jpg", "Sa., 09. Jun.", "19:30", "47,80", "www.lennykravitz.com", "13 July 2018", 1420); 

Elements = [KrisKristofferson, LennyKravitz]

	for(var i = 0; i < Elements.length; i++){
		document.getElementById('events').innerHTML += `
				<div class="col-md-6 col-sm-12 col-xs-12 well">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
						<p>Created: ${Elements[i].LocationDate}, ${Elements[i].LocationTime}</p>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<h3>${Elements[i].LocationName}</h3>
						<p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
						<p>${Elements[i].eventDate} ${Elements[i].eventTime}</p>
						<p>€ ${Elements[i].ticketPrice}</p>
						<p><a href="http://${Elements[i].webAddress1}">${Elements[i].webAddress1}</a></p>
					</div>	
				</div>
			`;
	}
		
}	

addEvents();
