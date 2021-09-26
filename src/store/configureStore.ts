/**
 * Create the store with dynamic reducers
 */
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };

  const rootReducer = createReducer();

  console.log('rootReducer', rootReducer);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(...middlewares),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  // const store = configureStore({
  //   reducer: persistedReducer,
  //   middleware: [...getDefaultMiddleware(), ...middlewares],
  //   devTools: process.env.NODE_ENV !== 'production',
  //   enhancers,
  // });
  store.replaceReducer(persistedReducer);
  let persistor = persistStore(store);
  // persistor.persist();

  return { store, persistor };
}
