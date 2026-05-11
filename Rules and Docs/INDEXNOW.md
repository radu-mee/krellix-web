# IndexNow Setup (Krellix)

This project uses a manual IndexNow integration to notify search engines when URLs change.

## Current key setup

- Key file path: `public/e0c25d2e12cf4f45bf3afad19f202b97.txt`
- Key file URL (production): `https://krellixlabs.com/e0c25d2e12cf4f45bf3afad19f202b97.txt`

The key file must remain publicly accessible and must contain only the key value.

## Available commands

- Submit all URLs from live sitemap:
  - `npm run indexnow:submit:sitemap`
- Submit specific URLs:
  - `npm run indexnow:submit:url -- https://krellixlabs.com/en/product https://krellixlabs.com/en/solutions`
- Submit URLs from a text file (one URL per line):
  - `npm run indexnow:submit:file -- ./urls-to-submit.txt`
- Deploy to Cloudflare and submit sitemap automatically (non-fatal submission step):
  - `npm run deploy:cf:indexnow`

## Optional environment variables

- `INDEXNOW_SITE_URL` (default fallback: `NEXT_PUBLIC_SITE_URL`, then `https://krellixlabs.com`)
- `INDEXNOW_KEY` (optional override)
- `INDEXNOW_KEY_FILE` (optional key file path or URL override)
- `INDEXNOW_ENDPOINT` (default: `https://api.indexnow.org/indexnow`)

## Recommended usage

1. Deploy site changes.
2. Submit only changed URLs whenever possible.
3. If you do not have a changed-URL list, use sitemap submission as fallback.
4. Check Bing Webmaster Tools IndexNow report for received URLs.

## Notes

- IndexNow helps discovery speed but does not guarantee indexing/ranking.
- Keep submissions relevant (new/updated/deleted URLs).
- Batch limit is 10,000 URLs per request.
