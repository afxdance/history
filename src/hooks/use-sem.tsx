import * as React from "react"

export interface SemContext {
  currentSemKey?: string
  setCurrentSemKey: (semester?: string) => void
}

export const CurrentSemContext = React.createContext<SemContext>({
  currentSemKey: "recazNIM3EYCM5nnL", // "rec4GaaU2uP8FRfw3" (2020a)
  setCurrentSemKey: () => undefined,
})

export const SemProvider: React.FC = (props) => {
  const [currSem, setCurrSem] = React.useState<string | undefined>(undefined)

  const semContextValue = React.useMemo(
    () => {
      return {
        currentSemKey: currSem,
        setCurrentSemKey: setCurrSem,
      }
    },
    [currSem, setCurrSem]
  )
  return (
    <CurrentSemContext.Provider value={semContextValue}>
      {props.children}
    </CurrentSemContext.Provider>
  )
}

export const useSem = () => React.useContext(CurrentSemContext)
