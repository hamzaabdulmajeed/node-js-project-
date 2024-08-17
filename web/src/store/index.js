// import { configureStore } from "@reduxjs/toolkit"
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import rootReducer from "./rootReducer"
// // import themeSlice from "./themeSlice"
// // import cartSlice from "./cartSlice"

// const persistConfig = {
//     key: 'root',
//     storage,
//   }
   
//   const persistedReducer = persistReducer(persistConfig, rootReducer)


// const store = configureStore({
// reducer: persistedReducer

// })
// const persistor = persistStore(store)

// export {store , persistor}
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // If needed to avoid errors with non-serializable values
      }),
});

const persistor = persistStore(store);

export { store, persistor };
