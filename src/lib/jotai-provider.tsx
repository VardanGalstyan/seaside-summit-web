"use client";

import { Provider } from "jotai";

interface Props extends React.PropsWithChildren {}

/**
 * Jotai is a global state manager.
 * Jotai Provider insures only single instance is created
 */
export default function JotaiProvider({ children }: Props): JSX.Element {
  return <Provider>{children}</Provider>;
}

export type { Props as JotaiProviderProps };
