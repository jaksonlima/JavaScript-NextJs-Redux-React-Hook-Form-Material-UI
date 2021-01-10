import { createStore, applyMiddleware, combineReducers } from 'redux'
import { useMemo } from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

let store

function initStore() {
  return createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // Depois de navegar para uma página com um estado Redux inicial, mescle esse estado
  // com o estado atual da loja e criar uma nova loja
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reinicializar a loja atual
    store = undefined
  }

  // Para SSG e SSR, sempre crie uma nova loja
  if (typeof window === 'undefined') return _store
  // Crie a loja uma vez no cliente
  if (!store) store = _store
  
  return _store
}

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState])
}