import Image from "next/image";
import { notFound } from "next/navigation";

import MenuItem from "../../../components/MenuItem/MenuItem";
import RestaurantHeader from "../../../components/RestaurantHeader/RestaurantHeader";
import restaurantsData from "../../../data/restaurants.json";

export default async function RestaurantPage({ params }) {
  const { slug } = await params;

  const restaurant = restaurantsData.restaurants.find(
    (currentRestaurant) => currentRestaurant.slug === slug
  );

  if (!restaurant) {
    notFound();
  }

  const { name, image, menu } = restaurant;

  return (
    <main>
      <div className="heroImage">
        <Image
          src={image}
          alt={`Plat servi au restaurant ${name}`}
          fill
          priority
          sizes="100vw"
          className="image"
        />
      </div>

      <div className="mainWrapper">
        <div className="contentWrapper">
          <RestaurantHeader name={name} />

          <div className="menu">
            {Object.entries(menu).map(([category, items]) => (
              <section key={category}>
                <h3 className="sectionTitle">{category}</h3>

                {items.map((item, index) => (
                  <MenuItem
                    key={`${category}-${item.nom}`}
                    item={item}
                    index={index}
                  />
                ))}
              </section>
            ))}
          </div>

          <button type="button" className="orderButton">
            Commander
          </button>
        </div>
      </div>
    </main>
  );
}