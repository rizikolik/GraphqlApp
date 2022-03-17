export type Bike = {
  bike_id: string;
  lat: number;
  lon: number;
  is_reserved: number;
  is_disabled: number;
  vehicle_type: string;
  android: string;
  ios: string;
};
export type ResponseData = {
  last_updated: 1603386427821;
  ttl: 0;
  data: {
    bikes: Bike[];
  };
} | null;
