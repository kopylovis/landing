import { useState, useEffect, useCallback } from 'react'
import { LoadingState } from '../types'

interface UseAsyncResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
  state: LoadingState
  execute: () => Promise<void>
  reset: () => void
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
): UseAsyncResult<T> {
  const [state, setState] = useState<LoadingState>('idle')
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(async () => {
    setState('loading')
    setError(null)
    
    try {
      const result = await asyncFunction()
      setData(result)
      setState('success')
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'))
      setState('error')
    }
  }, [asyncFunction])

  const reset = useCallback(() => {
    setState('idle')
    setData(null)
    setError(null)
  }, [])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return {
    data,
    loading: state === 'loading',
    error,
    state,
    execute,
    reset
  }
}

export default useAsync