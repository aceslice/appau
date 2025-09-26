// Netlify Function: Fetch latest Netlify Forms submissions for the "autograph" form
// Requires environment variables:
// - NETLIFY_API_TOKEN: a Personal Access Token with read permissions
// - NETLIFY_SITE_ID: the Site ID of this Netlify site

export async function handler() {
  const token = process.env.NETLIFY_API_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID;
  if (!token || !siteId) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entries: [] }),
    };
  }

  try {
    // Find the form ID for "autograph"
    const formsRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!formsRes.ok) throw new Error('Failed to list forms');
    const forms = await formsRes.json();
    const form = forms.find((f) => (f && f.name && f.name.toLowerCase()) === 'autograph');
    if (!form) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entries: [] }),
      };
    }

    // Fetch submissions
    const subsRes = await fetch(`https://api.netlify.com/api/v1/forms/${form.id}/submissions`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!subsRes.ok) throw new Error('Failed to list submissions');
    const subs = await subsRes.json();

    // Map to a slim client shape
    const entries = subs
      .map((s) => ({
        name: s?.data?.name || 'Guest',
        message: s?.data?.message || '',
        link: s?.data?.link || '',
        created_at: s?.created_at || s?.createdAt || null,
      }))
      .slice(0, 100);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entries }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entries: [] }),
    };
  }
}



