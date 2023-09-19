import { Access } from "../entities/access";
import useData from './useData';
import { useCallback, useState } from "react";

export default function useAccesses() {
    const [accesses, setAccesses] = useState<Access[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAccesses = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch("http://localhost:8080/accesses");
            const data = await response.json();
            setAccesses(data);
        } catch (e) {
            console.error(e);
            setError(true);
        }

        setLoading(false);
    }, []);

    useData(fetchAccesses)

    return {
        accesses,
        loading,
        error,
    };
}