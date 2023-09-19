import { useCallback, useState } from "react";
import { Report } from "../entities/access";
import useData from "./useData";

export default function useReports(accessId: String, page: number, size: number) {
    const [reports, setReports] = useState<Report[]>([]);
    const [pages, setPages] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchReports = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/accesses/${accessId}/reports?page=${page}&size=${size}`);
            const data = await response.json();
            setReports(data["reports"]);
            setPages(data["pages"]);
            setTotal(data["total"]);
        } catch (e) {
            console.error(e);
            setError(new Error("Failed to fetch reports"));
        }

        setLoading(false);
    }, [page, size, accessId]);

    useData(fetchReports)

    return {
        reports,
        pages,
        total,
        loading,
        error,
    };

}