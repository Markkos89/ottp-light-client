import { ReactNode } from "react";
import { SetState } from "@neynar/react/dist/types/common";
import { GraphState } from "@/Context/AppContext";

interface Props {
  children: ReactNode;
}

interface AppContextInterface {
  graphButton: GraphState;
  setGraphButton: SetState<GraphState>;
}

export type { Props, AppContextInterface };
