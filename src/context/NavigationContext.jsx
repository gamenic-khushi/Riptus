import { createContext, useContext, useState } from 'react'

const Ctx = createContext([1, () => {}])

export function NavigationProvider({ children }) {
  const [direction, setDirection] = useState(1)
  return <Ctx.Provider value={[direction, setDirection]}>{children}</Ctx.Provider>
}

export const useNavDirection = () => useContext(Ctx)
