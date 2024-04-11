type RestaurantPageParams = {
  restaurantId: string;
};

type RestaurantPageProps = {
  params: RestaurantPageParams;
};

export default function RestaurantPage({ params }: RestaurantPageProps) {
  return (
    <div>
      <h1>Restaurant ID: {params.restaurantId}</h1>
    </div>
  );
}
