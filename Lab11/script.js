mapboxgl.accessToken = 'pk.eyJ1IjoieHJiMiIsImEiOiJjbG5idjJiMzkwZW5zMnBxbDBxMTdiejFvIn0.Q4I5PA4YE4gs5CgSGuZrRQ';
const map = new mapboxgl.Map({
	container:'Xiomar', //container id
	style: 'mapbox://styles/xrb2/clnc0pxh407kn01p7crk73n6z',
	center: [-122.42090, 37.78168],
	zoom: 10.96,
	pitch: 49.00,
	bearing: 0.00,
	minZoom: 13

});

map.on('load', function () {
console.log('My name is Xiomar');
	map.addSource('restaurantSource',{
		'type':'vector',
		'url': 'mapbox://xrb2.avcp8uhj'
});

map.addLayer({
        'id':'restaurantLayer',
        'type':'circle',
        'source':'restaurantSource',
        'source-layer':'Historical_Restaurant_Scores_-bkwvm8',
        'paint':{
          'circle-color':'#00158f'
      }
  });

map.on('mouseenter', 'inspections', (e) => {
        //console.log(e.features[0]['properties']['business_name']);
        var name = (e.features[0]['properties']['business_name']);
        var textField = document.getElementById('restname');
  	textField.innerHTML = name;
    })
});