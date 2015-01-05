// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function loadMap() {
	var myLatlng = new google.maps.LatLng(-23.136325, -45.476929000000005);
	var mapOptions = {
		zoom: 15,
		center: myLatlng
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var contentString = '<p>Alpendre</p><p>Estrada Municipal Geraldo Cursino de Moura, 1943 - Bairro Registro - Taubaté - SP</p>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Uluru (Ayers Rock)'
	});

	marker.setAnimation(google.maps.Animation.BOUNCE);

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
		marker.setAnimation(null);
	});

	google.maps.event.addListener(infowindow, 'closeclick', function() {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	});
}

$(document).ready(function() {
	setInterval(function () {
		$('#timer').html(countdown( new Date(2015, 8, 15, 17, 0, 0, 0) ).toString());
	}, 1000);

	loadMap();
});