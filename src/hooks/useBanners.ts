import { useCallback, useState } from "react";
import { Banner } from "../entities/access";
import useData from "./useData";

export default function useBanners(accessId: String, page: number, size: number) {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [pages, setPages] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchBanners = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/accesses/${accessId}/banners?page=${page}&size=${size}`);
            const data = await response.json();
            setBanners(data["banners"]);
            setPages(data["pages"]);
            setTotal(data["total"]);
        } catch (e) {
            console.error(e);
            setError(new Error("Failed to fetch banners"));
        }

        setLoading(false);
    }, [page, size, accessId]);

    useData(fetchBanners)

    return {
        banners,
        pages,
        total,
        loading,
        error,
    };

}