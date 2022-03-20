import { gql, useQuery } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";

import { useAuth } from "../context/authContext";
import { Bike } from "../typeUtils/api";

const useBikeData = (id?: string) => {
  const [bikes, setBikes] = useState<Bike[] | null>(null);
  const [bikeId, setBikeId] = useState<string | undefined>(id);
  const token = useAuth()?.authToken;
  const searchInputRef = useRef<HTMLInputElement>(null);

  const VEHICLE_STATUS = gql`
    query VehicleStatus($vehicleStatusId: String) {
      VehicleStatus(id: $vehicleStatusId) {
        bike_id
        lat
        lon
        is_reserved
        is_disabled
        vehicle_type
      }
    }
  `;

  const rows = ["Id", "Lat", "Long", "Reserved", "Disabled", "Type"];

  const { loading, error, data } = useQuery(VEHICLE_STATUS, {
    variables: { vehicleStatusId: bikeId },
  });

  useEffect(() => {
    if (data && data.VehicleStatus) {
      setBikes(data.VehicleStatus);
    }
  }, [data, setBikes]);

  const handleSearch = useCallback(() => {
    if (searchInputRef?.current?.value)
      setBikeId(searchInputRef?.current?.value);
  }, []);

  return {
    bikes,
    loading,
    error,
    rows,
    handleSearch,
    isAuthenticated: !!token,
    searchInputRef,
  };
};

export default useBikeData;
