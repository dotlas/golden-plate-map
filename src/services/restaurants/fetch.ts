/**
 * This module defines methods for fetching restaurant data.
 *
 * @see getRestaurantById
 * @see searchRestaurants
 */

import { z } from "zod";

import data from "@/data/restaurants.json";
import type { Restaurant } from "@/services/restaurants/schema";

const restaurants = data as Restaurant[];

/**
 * Fetches the first restaurant with the given ID.
 */
export async function getRestaurantById(
  id: number,
): Promise<Restaurant | null> {
  return (
    restaurants.find((restaurant) => restaurant.restaurant_id === id) || null
  );
}

const searchQueryInputSchema = z.object({
  query: z.string(),
  limit: z.number().optional().default(10),
});

/**
 * Input parameters for searching restaurants.
 */
export type SearchQueryInput = z.infer<typeof searchQueryInputSchema>;

/**
 * Searches for restaurants based on the given query.
 */
export async function searchRestaurants(
  input: SearchQueryInput,
): Promise<Restaurant[]> {
  const { query, limit } = searchQueryInputSchema.parse(input);

  throw new Error("Not implemented");
}
