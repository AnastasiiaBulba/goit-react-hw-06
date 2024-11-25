import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфігурація для контактів
const persistConfig = {
  key: "contacts",
  storage,
  // Зберігаємо лише поле items
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  // Включення DevTools
  devTools: import.meta.env.MODE !== "production",
});

export const persistor = persistStore(store);
