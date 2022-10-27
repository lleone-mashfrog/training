namespace my.restaurant;
using managed from '@sap/cds/common';

entity Menu : managed{
    key id: Integer;
    name: String;
    type: String;
    currency: String;
    price: Integer;
}
