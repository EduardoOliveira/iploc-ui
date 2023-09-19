import { createContext } from "react";

export interface Status  {
    loading: boolean | null;
    error: Error | null;
    message: string | null;
};

export type SelectedAccessContextType = {
    status: Status | null;
    setStatus: (access: Status) => void;
};

export const StatusContext = createContext<SelectedAccessContextType>({status: null, setStatus: () => null});