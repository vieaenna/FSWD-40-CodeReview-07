var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zipCode, address, teaserImage, date, time) {
        this.LocationName = "";
        this.LocationCity = "";
        this.LocationZipCode = 0;
        this.LocationAddress = "";
        this.LocationTeaserImage = "";
        this.LocationDate = "";
        this.LocationTime = 0;
        this.LocationName = name;
        this.LocationCity = city;
        this.LocationZipCode = zipCode;
        this.LocationAddress = address;
        this.LocationTeaserImage = teaserImage;
        this.LocationDate = date;
        this.LocationTime = time;
    }
    return Locations;
}());
var Sights = /** @class */ (function (_super) {
    __extends(Sights, _super);
    function Sights(name, city, zipCode, address, teaserImage, date, time) {
        return _super.call(this, name, city, zipCode, address, teaserImage, date, time) || this;
    }
    return Sights;
}(Locations));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zipCode, address, teaserImage, telephone, types, webAddress, date, time) {
        var _this = _super.call(this, name, city, zipCode, address, teaserImage, date, time) || this;
        _this.telephone = telephone;
        _this.types = types;
        _this.webAddress = webAddress;
        return _this;
    }
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, teaserImage, eventDate, eventTime, ticketPrice, webAddress1, date, time) {
        var _this = _super.call(this, name, city, zipCode, address, teaserImage, date, time) || this;
        _this.webAddress1 = webAddress1;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    return Events;
}(Locations));
function addSight() {
    var Elements = [];
    var StCharles = new Sights("St. Charles Church", "Wien", 1010, "Karlsplatz 1", "img/place1.jpg", "13 July 2018", 1356);
    var viennaZoo = new Sights("Zoo Vienna", "Wien", 1130, "Maxingstraße 13b", "img/place2.jpg", "13 July 2018", 1402);
    Elements = [StCharles, viennaZoo];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('sights').innerHTML += "\n\t\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-12 well\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t\t\t\t<p>Created: " + Elements[i].LocationDate + ", " + Elements[i].LocationTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<h3>" + Elements[i].LocationName + "</h3>\n\t\t\t\t\t\t<p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t";
    }
}
addSight();
function addRestaurants() {
    var Elements = [];
    var LemonLeafThai = new Restaurants("Lemon Leaf Thai Restaurant", "Wien", 1050, "Kettenbrückengasse 19", "img/restaurant1.png", "+43 1 581 23 08", "Chinesisch", "www.lemonleaf.at", "13 July 2018", 1304);
    var Sixta = new Restaurants("Sixta", "Wien", 1050, "Schönbrunner Straße 21", "img/restaurant2.png", "+43 1 58 528 56", "wienerisch", "www.sixta.at", "13 July 2018", 1306);
    var XinChao = new Restaurants("Xin Chao", "Wien", 1060, "Gumpendorfer Straße 127", "img/restaurant3.jpg", "+43 1 9437859", "vietnamesisch", "http://xinchao.at/index.php/de/", "13 July 2018", 1534);
    var Aragwi = new Restaurants("Aragwi", "Wien", 1070, "Neustiftgasse 3", "img/restaurant4.jpg", "+43 1 8906219", "georgisch", "http://www.aragwi.at/", "13 July 2018", 1145);
    Elements = [LemonLeafThai, Sixta, XinChao, Aragwi];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('restaurants').innerHTML += "\n\t\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-12 well\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t\t\t\t<p>Created: " + Elements[i].LocationDate + ", " + Elements[i].LocationTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<h3>" + Elements[i].LocationName + "</h3>\n\t\t\t\t\t\t<p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n\t\t\t\t\t\t<p>" + Elements[i].telephone + "</p>\n\t\t\t\t\t\t<p>" + Elements[i].types + "</p>\n\t\t\t\t\t\t<p><a href=\"http://" + Elements[i].webAddress + "\">" + Elements[i].webAddress + "</a></p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t";
    }
}
addRestaurants();
function addEvents() {
    var Elements = [];
    var KrisKristofferson = new Events("Kris Kristofferson", "Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/event1.jpeg", "Fr., 15. Jun.", "20:00", "58,50", "www.kriskristofferson.com", "13 July 2018", 1310);
    var LennyKravitz = new Events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/event2.jpg", "Sa., 09. Jun.", "19:30", "47,80", "www.lennykravitz.com", "13 July 2018", 1420);
    Elements = [KrisKristofferson, LennyKravitz];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('events').innerHTML += "\n\t\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-12 well\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t\t\t\t<p>Created: " + Elements[i].LocationDate + ", " + Elements[i].LocationTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<h3>" + Elements[i].LocationName + "</h3>\n\t\t\t\t\t\t<p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n\t\t\t\t\t\t<p>" + Elements[i].eventDate + " " + Elements[i].eventTime + "</p>\n\t\t\t\t\t\t<p>\u20AC " + Elements[i].ticketPrice + "</p>\n\t\t\t\t\t\t<p><a href=\"http://" + Elements[i].webAddress1 + "\">" + Elements[i].webAddress1 + "</a></p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t";
    }
}
addEvents();
