/**
 * Axios HTTP client configuration
 * All API calls should use this instance, never raw fetch/axios
 */

import axios from 'axios';
import config from '../utils/config';

// ─── Create Axios Instance ────────────────────────────────────
const apiClient = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ─── Request Interceptor ─────────────────────────────────────
apiClient.interceptors.request.use(
  (requestConfig) => {
    // Attach auth token if available (e.g., member login)
    const token = localStorage.getItem('dbc_token');
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  },
  (error) => Promise.reject(error)
);

// ─── Response Interceptor ────────────────────────────────────
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Centralized error handling
    if (error.response) {
      const { status, data } = error.response;
      // 401 → redirect to login or clear session
      if (status === 401) {
        localStorage.removeItem('dbc_token');
        // Optionally: window.location.href = '/login';
      }
      return Promise.reject({
        status,
        message: data?.message || 'An error occurred. Please try again.',
        errors: data?.errors || null,
      });
    }
    if (error.request) {
      return Promise.reject({ message: 'Network error. Please check your connection.' });
    }
    return Promise.reject({ message: error.message });
  }
);

export default apiClient;
