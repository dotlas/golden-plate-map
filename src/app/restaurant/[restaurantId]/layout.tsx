import type { PropsWithChildren } from "react";

export default function RestaurantLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <p>This is a restaurant</p>
      <div>{children}</div>
    </div>
  );
}
