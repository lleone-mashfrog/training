using my.RestaurantShop as my from '../db/Restaurant';

service CatalogService {

    entity Restaurant as projection on my.Restaurant;
       annotate Restaurant with @odata.draft.enabled;
}