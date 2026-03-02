/**
 * dateUtils.ts
 * ─────────────
 * Date formatting using the built-in Intl API.
 * No external dependency needed.
 */

/** Formats a Date as "April 10, 2024" */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}

/** Formats a Date as "Apr 2024" */
export function formatDateShort(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
