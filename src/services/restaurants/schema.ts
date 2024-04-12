/**
 * This module contains the schema for the restaurant data.
 *
 * It is defined using the Zod library.
 *
 * @see https://zod.dev/
 * @see Restaurant
 * @see restaurantSchema
 */

import { z } from "zod";

const diningStyles = [
  "Casual Dining",
  "Casual Elegant",
  "Elegant Dining",
  "Fine Dining",
  "Home Style",
] as const;

const dressCodes = [
  "Business Casual",
  "Casual Dress",
  "Formal Attire",
  "Jacket Preferred",
  "Jacket Required",
  "Resort Casual",
  "Smart Casual",
] as const;

const parkingInfos = [
  "Hotel Parking",
  "None",
  "Private Lot",
  "Public Lot",
  "Street Parking",
  "Valet",
] as const;

const paymentOptions = [
  "AMEX",
  "Carte Blanche",
  "Cash not accepted",
  "Cash Only",
  "Cheque Gourmet",
  "Contactless Payment",
  "Diners Club",
  "Discover",
  "Eurocheque Card",
  "JCB",
  "MasterCard",
  "Mastercard",
  "Pay with OpenTable",
  "Sodexo Pass",
  "Visa",
] as const;

const priceRanges = ["$30 and under", "$31 to $50", "$50 and over"] as const;

const reviewTopics = [
  "Charming",
  "Dog-friendly",
  "Fancy",
  "Gluten-free-friendly",
  "Good for business meals",
  "Good for groups",
  "Good for special occasions",
  "Great for brunch",
  "Great for craft beers",
  "Great for creative cocktails",
  "Great for fine wines",
  "Great for happy hour",
  "Great for live music",
  "Great for outdoor dining",
  "Great for scenic views",
  "Healthy",
  "Hot spot",
  "Innovative",
  "Kid-friendly",
  "Lively",
  "Neighborhood gem",
  "Outstanding value",
  "Romantic",
  "Vegan-friendly",
  "Vegetarian-friendly",
] as const;

const tags = [
  "BYO Liquor",
  "BYO Wine",
  "Banquet",
  "Bar Dining",
  "Bar/Lounge",
  "Beer",
  "Beer Garden",
  "Cafe",
  "Chef's Table",
  "Cigar Room",
  "Cocktails",
  "Corkage Fee",
  "Counter Seating",
  "Dancing",
  "Delivery",
  "Dog Friendly",
  "Entertainment",
  "Farm to Table",
  "Full Bar",
] as const;

const deliveryPartners = ["CHOW_NOW", "POSTMATES", "UBER_EATS"] as const;

/**
 * The schema for a single restaurant.
 */
const restaurantSchema = z.object({
  country: z.literal("United States"),
  Subregion: z.literal("California"),
  city: z.string(),
  brand_name: z.string(),
  categories: z.string().array(),
  latitude: z.number(),
  longitude: z.number(),
  area: z.string(),
  address: z.string(),
  description: z.string(),
  public_transit: z.string().nullable(),
  cross_street: z.string().nullable(),
  restaurant_website: z.string().nullable(),
  phone_number: z.string(),
  dining_style: z.enum(diningStyles),
  executive_chef_name: z.string().nullable(),
  parking_info: z.enum(parkingInfos),
  dress_code: z.enum(dressCodes),
  entertainment: z.string().nullable(),
  operating_hours: z.string(),
  price_range_id: z.number(),
  price_range: z.enum(priceRanges),
  payment_options: z.enum(paymentOptions).array(),
  maximum_days_advance_for_reservation: z.number(),
  rating: z.number(),
  rating_count: z.number(),
  atmosphere_rating: z.number(),
  noise_rating: z.number(),
  food_rating: z.number(),
  service_rating: z.number(),
  value_rating: z.number(),
  terrible_review_count: z.number(),
  poor_review_count: z.number(),
  average_review_count: z.number(),
  very_good_review_count: z.number(),
  excellent_review_count: z.number(),
  review_count: z.number(),
  review_topics: z.enum(reviewTopics).array(),
  tags: z.enum(tags).array(),
  has_clean_menus: z.boolean(),
  has_common_area_cleaning: z.boolean(),
  has_common_area_distancing: z.boolean(),
  has_contact_tracing_collected: z.boolean(),
  has_contactless_payment: z.boolean(),
  requires_diner_temperature_check: z.boolean(),
  has_limited_seating: z.boolean(),
  prohibits_sick_staff: z.boolean(),
  has_proof_of_vaccination_outdoor: z.boolean(),
  requires_proof_of_vaccination: z.boolean(),
  requires_diner_masks: z.boolean(),
  requires_wait_staff_masks: z.boolean(),
  has_sanitized_surfaces: z.boolean(),
  provides_sanitizer_for_customers: z.boolean(),
  has_sealed_utensils: z.boolean(),
  has_vaccinated_staff: z.boolean(),
  requires_staff_temp_checks: z.boolean(),
  has_table_layout_with_extra_space: z.boolean(),
  is_permanently_closed: z.boolean(),
  is_waitlist_only: z.boolean(),
  has_waitlist: z.boolean(),
  has_bar: z.boolean(),
  has_counter: z.boolean(),
  has_high_top_seating: z.boolean(),
  has_outdoor_seating: z.boolean(),
  has_priority_seating: z.boolean(),
  has_private_dining: z.boolean(),
  has_takeout: z.boolean(),
  has_delivery_partners: z.boolean(),
  has_pickup: z.boolean(),
  has_gifting: z.boolean(),
  delivery_partners: z.enum(deliveryPartners).array(),
  facebook: z.string().nullable(),
  menu_url: z.string().nullable(),
  daily_reservation_count: z.number().nullable(),
  meal_cost: z.number(),
  restaurant_id: z.number(),
});

/**
 * A single restaurant.
 */
export type Restaurant = z.infer<typeof restaurantSchema>;
