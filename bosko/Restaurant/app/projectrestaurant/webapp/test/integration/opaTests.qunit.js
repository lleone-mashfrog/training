sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectrestaurant/test/integration/FirstJourney',
		'projectrestaurant/test/integration/pages/RestaurantList',
		'projectrestaurant/test/integration/pages/RestaurantObjectPage'
    ],
    function(JourneyRunner, opaJourney, RestaurantList, RestaurantObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectrestaurant') + '/index.html'
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