import { ReactNode } from "react";
import { GraphState } from "./Context/AppContext";
import { SetState } from "@neynar/react/dist/types/common";

interface Props {
    children: ReactNode;
}

interface AppContextInterface {
    graphButton: GraphState;
    setGraphButton: SetState<GraphState>;
}

export type { Props, AppContextInterface }