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
        	'circle-color': [
      			'step',
      			['get', 'inspection_score'],
      			  '#808080',
			      45, '#440154',
			      80, '#3b528b',
			      85, '#21908d',
			      90, '#5dc963',
			      95, '#fde725'
    ]}
      //{ 'range': '45 - 80', 'circle-color': '#440154' },
      //{ 'range': '80 - 85', 'circle-color': '#3b528b' },
      //{ 'range': '85 - 90', 'circle-color': '#21908d' },
      //{ 'range': '90 - 95', 'circle-color': '#5dc963' },
      //{ 'range': '95 - 100', 'circle-color': '#fde725' },]
        	// 'fill-color':[
  //'step',
  //['get','AMR5E002'],
 // '#440154',45-80,'#3b528b',80-85,'#21908d',85-90,'#5dc963',90-95,'#fde725',95-100,'#808080',
 // ]
          //'circle-color':'#440154', range: 45 - 80,
          //'circle-color':'#3b528b', 80 - 85,
          //'circle-color':'#21908d', 85 - 90,
          //'circle-color':'#5dc963', 90 - 95,
          //'circle-color':'#fde725', 95 - 100,
      
  });

map.on('mouseenter', 'restaurantLayer', (e) => {
        //console.log(e.features[0]['properties']['business_name']);
        var name = (e.features[0]['properties']['business_name']);
        var textField = document.getElementById('restname');
  	textField.innerHTML = name;
    })
});