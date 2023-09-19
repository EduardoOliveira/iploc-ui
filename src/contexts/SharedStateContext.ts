import { createContext } from "react";
import { Access } from "../entities/access";

export interface SharedState {
  selectedAccess?: Access;
  mode: "accesses" | "reports";
  
}

export type SharedStateContextType = {
  sharedState: SharedState | null;
  setSharedState: (sharedState: SharedState) => void;
};

export const SharedStateContext = createContext<SharedStateContextType>({
  sharedState: null,
  setSharedState: () => null,
});
