import { useCallback, useState } from "react";
import { Report } from "../entities/access";
import useData from "./useData";

export default function useReportLocations(accessId: String) {
    const [reportLocations, setReportLocations] = useState<Report[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchReports = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/accesses/${accessId}/reports/locations`);
            const data = await response.json();
            setReportLocations(data);
        } catch (e) {
            console.error(e);
            setError(new Error("Failed to fetch report locations"));
        }

        setLoading(false);
    }, [accessId]);

    useData(fetchReports)

    return {
        reportLocations,
        loading,
        error,
    };

}