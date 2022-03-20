import { useCallback, useEffect, useState } from "react";

import { useAuth } from "../context/authContext";
import { Bike, ResponseData } from "../typeUtils/api";
import { RequestTypes } from "../typeUtils/enums";
import { FETCH_URL } from "../utils/contants";
import customFetch from "../utils/customFetch";

const useBikeData = () => {
  const [bikes, setBikes] = useState<Bike[] | null>(null);
  const token = useAuth()?.authToken;
  const rows = ["Id", "Lat", "Long", "Reserved", "Disabled", "Type"];

  useEffect(() => {
    const getBikes = async () => {
      const result: ResponseData = await customFetch(`${FETCH_URL}/bikes`, {
        method: RequestTypes.GET,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (result) setBikes(result);
    };
    getBikes();
  }, []);

  const handleSearch = useCallback(() => {
    console.log("HERE THE VALUE");
  }, []);

  return {
    bikes,
    rows,
    handleSearch,
    isAuthenticated: !!token,
  };
};

export default useBikeData;
