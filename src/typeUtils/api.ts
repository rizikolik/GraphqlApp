export type Bike = {
  bike_id: string;
  lat: number;
  lon: number;
  is_reserved: number;
  is_disabled: number;
  vehicle_type: string;
};
export type ResponseData = Bike[] | null;

export interface loginResponse {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
}
