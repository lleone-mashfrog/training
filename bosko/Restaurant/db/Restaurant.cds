namespace my.RestaurantShop;
    using { managed } from '@sap/cds/common'; 

entity Restaurant : managed{
  key ID : String; 
  name : String;
  type : String;
  currency : String;
  price : Integer;
}