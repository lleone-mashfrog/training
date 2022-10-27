sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'restaurant/test/integration/FirstJourney',
		'restaurant/test/integration/pages/RestaurantList',
		'restaurant/test/integration/pages/RestaurantObjectPage'
    ],
    function(JourneyRunner, opaJourney, RestaurantList, RestaurantObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('restaurant') + '/index.html'
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