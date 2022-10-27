sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'menupresentation/test/integration/FirstJourney',
		'menupresentation/test/integration/pages/MenuList',
		'menupresentation/test/integration/pages/MenuObjectPage'
    ],
    function(JourneyRunner, opaJourney, MenuList, MenuObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('menupresentation') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMenuList: MenuList,
					onTheMenuObjectPage: MenuObjectPage
                }
            },
            opaJourney.run
        );
    }
);