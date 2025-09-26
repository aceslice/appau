import type { APIRoute } from 'astro';
import seedEntries from '../../libs/guestbook.json';

export const GET: APIRoute = async () => {
  // In local development, just return the seed data
  // In production, this will be handled by the Netlify function
  return new Response(JSON.stringify({ entries: seedEntries }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
