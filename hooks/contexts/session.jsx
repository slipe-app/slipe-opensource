import { useContext, createContext } from "react";
import { load } from '@tauri-apps/plugin-store';

const store = await load('settings.json', {
	autoSave: 0,
});

const token = await store.get("token");

export const SessionContext = createContext(null);

export const SessionContextProvider = ({ children }) => {
	return <SessionContext.Provider value={{ token, store }}>{children}</SessionContext.Provider>;
};

export const useStorage = () => useContext(SessionContext);