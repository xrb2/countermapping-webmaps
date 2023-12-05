// let topTitleDiv = "";

// let titleDiv = "";

// let bylineDiv = "";

// let descriptionDiv = "";
// let footerDiv = "";

// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 8;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 0;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running Order total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    // style: 'mapbox://styles/xrb2/clp71gbd500wh01qd80kefkhh',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoieHJiMiIsImEiOiJjbG5idjJiMzkwZW5zMnBxbDBxMTdiejFvIn0.Q4I5PA4YE4gs5CgSGuZrRQ',
    // accessToken: 'pk.eyJ1IjoiaWxlbmFwIiwiYSI6ImNsNW44NjJtNDAwZ2czYm4wZXdhZTBzNjUifQ.Ye-KUj_EW3nZ5Jgb9bd_mg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    // topTitle: topTitleDiv,
    // title: titleDiv,
    // subtitle: "Sergio's Morning Commute",
    // byline: bylineDiv,
    // description: descriptionDiv,
    // footer: footerDiv,
    chapters: [
      
        {
            id: 'drive-slide-0',
            title: '10 AM | Philadelphia | Lincoln Financial Field',
            description: 
                '<p>Time Cost: 20 min, including ticketing buying time</p>' + 
                '<p>Route: BSL (north)</p>' + 
                '<p><b>Total Time Spent: 20 min</b></p>',
            // location: {
            //     center: [-74.07490, 40.81354],
            //     zoom: 16.00,
            //     // pitch: 45.00,
            //     bearing: 0.00
            // },
        
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-01',
            title: '10:20 AM | Philadelphia | Downtown Philly',
            description: 
                '<p>Time Cost: 10 min, using the same ticket from the BSL</p>' + 
                '<p>Route: MFL (west)</p>' +  
                '<p><b>Total Time Spent: 30 min</b></p>',
            // location: {
            //     center: [-73.99367, 40.75068],
            //     zoom: 16.03,
            //     // pitch: 45.00,
            //     bearing: 0.00
            //      },           
                onChapterEnter: [],
                onChapterExit: []
                
        },
        {
            id: 'drive-slide-02',
            title: '10:30AM | Philadelphia | William H. Gary III 30th Street',
            description: 
                '<p>Time Cost: 2 hours, including ticket buying time</p>' + 
                '<p>Route: Amtrak Acela (north)</p>' +  
                '<p><b>Total Time Spent: 2 hours 30 min</b></p>',
            // location: {
            // center: [-75.18224, 39.95560],
            // zoom: 16.00,
            // // pitch: 45.00,
            // bearing: 0.00
            // },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-03',
            title: "11:30 PM | Between Philadelphia and New York City | On Amtrak",
            description: 
                '<p>Time Cost: 2 hours (continuous) </p>' + 
                '<p>Route: Amtrak Acela</p>' +  
                '<p><b>Total Time Spent: 2 hours 30 min</b></p>',
            // location: {
            // center: [-75.16751, 39.90091],
            // zoom: 16.00,
            // // pitch: 45.00,
            // bearing: 0.00
            // },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-04',
            title: '12:30 PM | Between Philadelphia and New York City | On Amtrak',
            description: 
                '<p>Time Cost: 2 hours (continuous) </p>' + 
                '<p>Route: Amtrak Acela</p>' +  
                '<p><b>Total Time Spent: 2 hours 30 min</b></p>',
            // location: {
            // center: [-74.07490, 40.81354],
            // zoom: 16.00,
            // // pitch: 45.00,
            // bearing: 0.00
            // },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-05',
            title: '12:40 PM | New York City | Penn Station (Amtrak)',
            description: 
                '<p>Time Cost: 10 min including buying a ticket</p>' + 
                '<p>Route: A/C/E</p>' +  
                '<p><b>Total Time Spent: 2 hours 40 min</b></p>',
            // location: {
            // center: [-73.99367, 40.75068],
            // zoom: 16.03,
            // // pitch: 45.00,
            // bearing: 0.00
            // },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-06',
            title: '1:10 PM | New York City | Port Authority Bus Terminal',
            description: 
                '<p>Time Cost: 30 min</p>' + 
                '<p>Route: 160</p>' +  
                '<p><b>Total Time Spent: 3 hours 10 min</b></p>',
            // location: {
            //     center: [-75.18224, 39.95560],
            //     zoom: 16.00,
            //     // pitch: 45.00,
            //     bearing: 0.00
            // },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-07',
            title: "1:40 PM | New York City | MetLife Stadium",
            description: 
                '<p>Time Cost: 30 min </p>' + 
                '<p>Route: 160</p>' +  
                '<p><b>Total Time Spent: 3 hours 40 min</b></p>',
            // location: {
            // center: [-75.16751, 39.90091],
            // zoom: 16.00,
            // // pitch: 45.00,
            // bearing: 0.00
            // },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
