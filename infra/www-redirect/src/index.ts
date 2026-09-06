// alepes-www-redirect — a minimal redirect Worker.
//
// Serves the `www.alepes.com` Custom Domain and issues a permanent (301)
// redirect to the apex `alepes.com`, preserving the path and query string.
// The apex site (alepes-website) is a separate, purely-static Workers Static
// Assets project and is intentionally untouched by this Worker.

/**
 * Build the apex redirect target for a request URL. Pure and unit-testable —
 * rewrites only protocol/hostname/port, preserving the path and query string.
 */
export function buildApexRedirect(urlString: string): {
  status: number;
  location: string;
} {
  const destination = new URL(urlString);
  destination.protocol = "https:";
  destination.hostname = "alepes.com";
  destination.port = "";
  return { status: 301, location: destination.toString() };
}

export default {
  fetch(request: Request): Response {
    const { status, location } = buildApexRedirect(request.url);
    return Response.redirect(location, status);
  },
};