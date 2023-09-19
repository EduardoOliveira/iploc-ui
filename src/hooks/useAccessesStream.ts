import { useEffect, useState } from "react";
import { Access } from "../entities/access";

export default function useAccessesStream() {
  const [accessesStream, setAccessesStream] = useState<Map<string, Access>>(
    new Map()
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      setLoading(true);
      const source = new EventSource("http://localhost:8080/accesses/stream");


      source.onmessage = (event) => {
        setLoading(false);
        const access = JSON.parse(event.data);
        console.log(access);
        setAccessesStream(new Map(accessesStream.set(access.id, access)));
      };
      source.onerror = (event) => {
        setLoading(false);
        console.error(event);
        setError(new Error("EventSource failed."));
        source.close();
      };

      return () => {
        source.close();
      };
    }, []);

  return {
    accessesStream,
    loading,
    error,
  };
}
