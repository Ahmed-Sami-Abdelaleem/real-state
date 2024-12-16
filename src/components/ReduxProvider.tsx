"use client";

import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: ReactNode;
}

function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
