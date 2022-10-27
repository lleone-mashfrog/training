sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'restoran/test/integration/FirstJourney',
		'restoran/test/integration/pages/RestaurantList',
		'restoran/test/integration/pages/RestaurantObjectPage'
    ],
    function(JourneyRunner, opaJourney, RestaurantList, RestaurantObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('restoran') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRestaurantList: RestaurantList,
					onTheRestaurantObjectPage: RestaurantObjectPage
                }
            },
            opaJourney.run
        );
    }
);