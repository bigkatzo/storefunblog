# Deployment Guide

## Environment Variables for Netlify

To deploy this blog to Netlify, you need to set up the following environment variables:

### Required Environment Variables

Go to your Netlify dashboard → Site settings → Environment variables and add:

| Variable Name | Description | Where to get it |
|--------------|-------------|-----------------|
| `VITE_TINA_CLIENT_ID` | TinaCMS Client ID (public) | TinaCMS Dashboard → Tokens |
| `TINA_TOKEN` | TinaCMS Read-Only Token | TinaCMS Dashboard → Tokens |
| `TINA_SEARCH_TOKEN` | TinaCMS Search Indexer Token | TinaCMS Dashboard → Tokens |

### Your Values

```bash
VITE_TINA_CLIENT_ID=7f8ccbe4-4107-4210-98e9-8b901365fdb0
TINA_TOKEN=8f4a5ba3c0e12f0bd887e4a715b4a68fa36b52e5
TINA_SEARCH_TOKEN=131bd66fe1c11d6c2f8128ffabc5a8e7ec05c724
```

## Steps to Deploy

1. **Set Environment Variables in Netlify:**
   - Go to: https://app.netlify.com/sites/storefunblog/settings/deploys#environment
   - Click "Add a variable"
   - Add each of the three variables above

2. **Trigger a Redeploy:**
   - Either push to main (automatic)
   - Or manually trigger a deploy in Netlify dashboard

3. **Verify:**
   - Visit: https://storefunblog.netlify.app/
   - Visit admin: https://storefunblog.netlify.app/admin
   - Test search functionality in the admin

## Local Development

For local development, copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
# Edit .env with your actual values
```

Then run:
```bash
npm run tina:dev
```

## Security Notes

- ✅ All tokens are now in environment variables
- ✅ `.env` is in `.gitignore` (not committed to Git)
- ✅ Production tokens are only in Netlify, not in code
- ⚠️ The `VITE_TINA_CLIENT_ID` is exposed in the browser (this is normal and safe)
- 🔒 `TINA_TOKEN` and `TINA_SEARCH_TOKEN` are only used during build time

