using {my.restaurant as rt} from '../db/schema';

@path : 'service/restaurant'
service Restaurant{
    entity Restaurant as projection on rt.Restaurant;
        
} 