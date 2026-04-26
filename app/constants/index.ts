// API Configuration
export const API_ENDPOINTS = {
  JSONPLACEHOLDER: 'https://jsonplaceholder.typicode.com',
  DUMMYJSON: 'https://dummyjson.com',
  REQRES: 'https://reqres.in/api'
} as const;

// UI Constants
export const COLORS = {
  PRIMARY: 'blue',
  SUCCESS: 'green',
  WARNING: 'yellow',
  DANGER: 'red'
} as const;

// Chat Constants
export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
  TYPING_INDICATOR_DELAY: 1000,
  MESSAGE_FETCH_LIMIT: 50
} as const;