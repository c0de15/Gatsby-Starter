import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

export interface ScreenDimensions {
  width: number
  height: number
}
const WindowDimensionsCtx = createContext({ width: 0, height: 0 })
const WindowDimensionsProvider = ({ children }: { children: ReactNode }) => {
  const [dimensions, setDimensions] = useState<ScreenDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener(`resize`, handleResize)
    return () => {
      window.removeEventListener(`resize`, handleResize)
    }
  }, [])
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  )
}
export default WindowDimensionsProvider
export const useWindowDimensions = () => useContext(WindowDimensionsCtx)
