/**
 * This module defines a Client component for the search input.
 *
 * @see Search
 * @see https://nextjs.org/docs/app/building-your-application/rendering/client-components
 */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, type ChangeEvent } from "react";

/**
 * A search input component.
 */
export function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Keep track of the user's search query
  // Initialize the query with the value from the URL search parameters
  const [query, setQuery] = useState(searchParams.get("query") || "");

  // Sync the value of the search input with the query state
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Update the URL search parameters when the query changes
  useEffect(() => {
    router.push(`?query=${query}`);
  }, [query, router]);

  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          className="rounded-md border border-gray-300 p-1"
        />
      </label>
    </div>
  );
}
