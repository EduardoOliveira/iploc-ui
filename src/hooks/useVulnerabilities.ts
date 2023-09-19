import { useCallback, useState } from "react";
import useData from "./useData";

export default function useVulnerabilities(accessId: String, page: number, size: number) {
    const [vulnerabilities, setVulnerabilities] = useState<String[]>([]);
    const [pages, setPages] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchBanners = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/accesses/${accessId}/vulnerabilities?page=${page}&size=${size}`);
            const data = await response.json();
            setVulnerabilities(data["vulnerabilities"]);
            setPages(data["pages"]);
            setTotal(data["total"]);
        } catch (e) {
            console.error(e);
            setError(new Error("Failed to fetch vulnerabilities"));
        }

        setLoading(false);
    }, [page, size, accessId]);

    useData(fetchBanners)

    return {
        vulnerabilities,
        pages,
        total,
        loading,
        error,
    };

}