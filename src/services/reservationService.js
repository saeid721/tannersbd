/**
 * Reservation service — all reservation-related API calls
 */

import apiClient from './apiClient';

const ENDPOINT = '/reservations';

/**
 * Submit a new reservation request
 * @param {Object} payload - { name, email, phone, date, time, guests, facilityId, notes }
 * @returns {Promise<Object>}
 */
export const submitReservation = (payload) => apiClient.post(ENDPOINT, payload);

/**
 * Get available time slots for a given facility and date
 * @param {string|number} facilityId
 * @param {string} date - ISO date string YYYY-MM-DD
 * @returns {Promise<Array>}
 */
export const getAvailableSlots = (facilityId, date) =>
  apiClient.get(`${ENDPOINT}/slots`, { params: { facilityId, date } });

/**
 * Cancel a reservation by ID
 * @param {string|number} reservationId
 * @returns {Promise<Object>}
 */
export const cancelReservation = (reservationId) =>
  apiClient.delete(`${ENDPOINT}/${reservationId}`);
