/**
 * This module defines a page component for a restaurant page.
 *
 * @see RestaurantPage
 */

import { RestaurantDetailMap } from "@/app/restaurant/[restaurantId]/_map";
import { getRestaurantById } from "@/services/restaurants/fetch";

type RestaurantPageParams = {
  restaurantId: string;
};

type RestaurantPageProps = {
  params: RestaurantPageParams;
};

/**
 * The component for a restaurant page.
 *
 * This is rendered when the user navigates to a restaurant page, `/restaurant/[restaurantId]`.
 */
export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurant = await getRestaurantById(parseInt(params.restaurantId, 10));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Restaurant ID: {params.restaurantId}
      </h1>

      <pre className="bg-slate-200">{JSON.stringify(restaurant, null, 2)}</pre>

      <RestaurantDetailMap
        latitude={restaurant.latitude}
        longitude={restaurant.longitude}
      />
    </div>
  );
}
