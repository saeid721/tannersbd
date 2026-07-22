/**
 * Gallery service — gallery and media API calls
 */

import apiClient from './apiClient';

const ENDPOINT = '/gallery';

/**
 * Get all gallery albums
 * @returns {Promise<Array>}
 */
export const getAlbums = () => apiClient.get(`${ENDPOINT}/albums`);

/**
 * Get photos for a specific album
 * @param {string|number} albumId
 * @param {Object} params - { page, limit }
 * @returns {Promise<Object>}
 */
export const getAlbumPhotos = (albumId, params = {}) =>
  apiClient.get(`${ENDPOINT}/albums/${albumId}/photos`, { params });

/**
 * Get all photos with optional category filter
 * @param {Object} params - { category, page, limit }
 * @returns {Promise<Object>}
 */
export const getPhotos = (params = {}) => apiClient.get(`${ENDPOINT}/photos`, { params });
