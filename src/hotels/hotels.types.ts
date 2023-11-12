export type Facility =
  | 'parking'
  | 'gym'
  | 'paymentByCard'
  | 'internet'
  | 'breakfast'
  | 'pool';

export type Hotel = {
  _id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  stars: number;
  description: string;
  photos: string[];
  facility: Facility[];
};

export type HotelsFilter = Partial<
  Pick<Hotel, 'city' | 'country' | 'name' | 'stars'>
>;

export type HotelsQuery = HotelsFilter & {
  page?: number;
  limit?: number;
};
