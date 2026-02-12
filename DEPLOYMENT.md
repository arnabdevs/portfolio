# Fixing Domain Mismatch & Deployment

You are seeing a "Domain Mismatch" error because your domain is pointing to a Vercel IP (`216.198.79.1`) but Vercel doesn't recognize it for your project, or it expects the standard A Record.

## Step 1: Update DNS Records (CRITICAL)

Go to your Domain Provider's DNS Settings (e.g., GoDaddy, Namecheap, Cloudflare) and apply these changes:

1.  **Find existing A Records**: Look for any A Record pointing to `216.198.79.1`.
2.  **Delete** that record.
3.  **Add New A Record**:
    *   **Type**: `A`
    *   **Name/Host**: `@` (or leave blank)
    *   **Value/Target**: `76.76.21.21`
    *   **TTL**: Automatic or 3600

4.  **Add CNAME Record** (for www):
    *   **Type**: `CNAME`
    *   **Name/Host**: `www`
    *   **Value/Target**: `cname.vercel-dns.com`

## Step 2: Verify Vercel Project

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project (`portfolio-website`).
3.  Go to **Settings** > **Domains**.
4.  Ensure your domain (e.g., `yourdomain.com`) is listed there.
5.  If not, click **Add** and type your domain name.
6.  Vercel will check the DNS configuration. It might take up to 24 hours to propagate, but usually it's much faster.
