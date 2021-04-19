import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

function useDidChanged(effect: EffectCallback, deps?: DependencyList) {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    effect()
  }, deps)
}

export default useDidChanged
