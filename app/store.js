import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../features/services/servicesSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
    reducer: {
        services: servicesReducer,
        themeMode: themeReducer,
    },
});
