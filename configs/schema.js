import { pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const carListing=pgTable('carListing', {
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice'),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    type:varchar('type').notNull(),
    model:varchar('model'),
    mileage:varchar('mileage'),
    year:varchar('year'),
    drivetype:varchar('drivetype'),
    transmission:varchar('transmission'),
    make:varchar('make'),
    fueltype:varchar('fueltype'),
    engineSize:varchar('engineSize'),
    price:varchar('price'),
    listingdescription:varchar('listingdescription'),
    offertype:varchar('offertype'),
    cylinder:varchar('cylinder'),
    vin:varchar('vin'),
    offertype:varchar('offertype'),
    door:varchar('door'),
    color:varchar('color')
})