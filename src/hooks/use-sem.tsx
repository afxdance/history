import * as React from "react";

export interface SemContext {
  currentSemKey?: string;
  setCurrentSemKey: (semester?: string) => void;
}

export const CurrentSemContext = React.createContext<SemContext>({
  currentSemKey: "rec4GaaU2uP8FRfw3",
  setCurrentSemKey: () => { },
});

export const SemProvider: React.FC = ({ children }) => {
  const [currSem, setCurrSem] = React.useState<string | undefined>(undefined);

  const semContextValue = React.useMemo(
    () => {
      return {
        currentSemKey: currSem,
        setCurrentSemKey: setCurrSem,
      };
    },
    [currSem, setCurrSem]
  );
  return (
    <CurrentSemContext.Provider value={semContextValue}>
      {children}
    </CurrentSemContext.Provider>
  );
};

export const useSem = () => React.useContext(CurrentSemContext);
