import { config } from '@vue/test-utils';

// Stub NuxtLink component
config.stubs['nuxt-link'] = true;

// Mock i18n module
config.mocks.$t = i => i;
config.mocks.localePath = i => i;

if (typeof window.URL.createObjectURL === 'undefined') {
    window.URL.createObjectURL = () => {
        // Mock this function for mapbox-gl to work
    };
}
