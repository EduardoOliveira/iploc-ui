import { createContext } from "react";
import { Access } from "../entities/access";

export type SelectedAccessType = Access | null;

export type SelectedAccessContextType = {
    selectedAccess: SelectedAccessType;
    setSelectedAccess: (access: Access|null) => void;
};

export const SelectedAccessContext = createContext<SelectedAccessContextType>({selectedAccess: null, setSelectedAccess: () => null});