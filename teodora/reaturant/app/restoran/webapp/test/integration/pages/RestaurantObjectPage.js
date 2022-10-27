sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'restoran',
            componentId: 'RestaurantObjectPage',
            entitySet: 'Restaurant'
        },
        CustomPageDefinitions
    );
});