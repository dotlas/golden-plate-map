/**
 * This module defines a page component for the home page.
 *
 * @see HomePage
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/defining-routes
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 *
 * It uses React Server Components to fetch and render data on the server.
 *
 * @see https://nextjs.org/docs/app/building-your-application/rendering/server-components
 */

import Link from "next/link";

import { Search } from "@/app/_search";
import {
  searchRestaurants,
  type SearchQueryInput,
} from "@/services/restaurants/fetch";

type HomePageProps = {
  searchParams: SearchQueryInput;
};

/**
 * The component for the home page.
 *
 * This is rendered when the user navigates to the root URL, `/`.
 *
 */
export default async function HomePage({ searchParams }: HomePageProps) {
  // Use the search parameters in the URL to search for restaurants
  const searchResults = await searchRestaurants(searchParams);

  return (
    <div>
      <h1 className="text-3xl font-bold">Golden Plate Map</h1>
      <p>Find the best restaurants in California</p>

      <Search />
      <p>Search results: </p>
      <pre className="bg-slate-200">
        {JSON.stringify(searchResults, null, 2)}
      </pre>

      <Link href="/restaurant/1" className="text-blue-600 underline">
        Example restaurant page
      </Link>
    </div>
  );
}
