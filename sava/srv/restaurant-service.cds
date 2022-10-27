using my.restaurant as my from '../db/data-model';

@path: 'service/restaurant'
service RestaurantService {
    entity Menu as projection on my.Menu;
        annotate Menu with @odata.draft.enabled;
        
}