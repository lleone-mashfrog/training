sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/RestaurantList',
		'project1/test/integration/pages/RestaurantObjectPage'
    ],
    function(JourneyRunner, opaJourney, RestaurantList, RestaurantObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
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