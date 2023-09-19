import { useCallback, useState } from "react";
import { Location } from "../entities/location";
import locationCache from "../cache/LocationCache";
import useData from "./useData";

export default function useLocationsByCountryCode(countryCode: string) {
    const [location, setLocation] = useState<Location>({} as Location);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    

    const fetchCountryLocation = useCallback(async () => {
        if (locationCache.has(countryCode)) {
            setLocation(locationCache.get(countryCode));
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/locations?countries=${countryCode}`);
            const data = await response.json();
            locationCache.set(countryCode, data[0]);
            setLocation(data[0]);
        } catch (e) {
            console.error(e);
            setError(new Error("Failed to fetch country location"));
        }

        setLoading(false);
    }, [countryCode]);

    useData(fetchCountryLocation)

    return {
        location,
        loading,
        error,
    };

}