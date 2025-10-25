# TinaCMS Schema Sync Guide

## 🚨 Issue

Your Netlify build is failing because TinaCMS Cloud doesn't know about the new collections (guides, case-studies, blog, features, compare, news) that we just added locally.

**Error:** Local GraphQL schema defines new types that haven't been pushed to the remote schema.

---

## ✅ Solution: Push Schema to TinaCMS Cloud

You need to sync your local schema with TinaCMS Cloud **before** deploying.

---

## 📝 Step-by-Step Instructions

### Step 1: Get Your TINA_TOKEN

1. Go to [TinaCMS Dashboard](https://app.tina.io/)
2. Log in to your account
3. Select your project
4. Go to **Settings** → **Tokens**
5. Copy your **Read/Write Token** (not the read-only one)

### Step 2: Set the Token Locally

**Option A: Export in Terminal (Temporary)**
```bash
export TINA_TOKEN="your-token-here"
```

**Option B: Create .env File (Recommended)**
```bash
# Create .env file
echo "TINA_TOKEN=your-token-here" > .env
```

Make sure `.env` is in your `.gitignore` (it should be already).

### Step 3: Push the Schema

```bash
# Install dependencies if needed
npm install

# Push schema to TinaCMS Cloud
npx @tinacms/cli@latest schema:push --token $TINA_TOKEN
```

**Expected Output:**
```
✓ Pushing schema to Tina Cloud...
✓ Schema successfully pushed!
✓ Generating types...
```

### Step 4: Commit Generated Files

After pushing, TinaCMS will update some generated files:

```bash
# Check what changed
git status

# Add generated files
git add tina/__generated__/

# Commit
git commit -m "Sync TinaCMS schema with new collections"

# Push to GitHub
git push origin main
```

### Step 5: Trigger Netlify Rebuild

Now that the schema is synced, Netlify will build successfully:

1. Go to your Netlify dashboard
2. Click "Trigger deploy" → "Deploy site"
3. Or just push any change and it will auto-deploy

---

## 🔧 Alternative: One-Line Command

If you have the token ready:

```bash
TINA_TOKEN="your-token-here" npx @tinacms/cli@latest schema:push
```

---

## 📋 What This Does

The `schema:push` command:

1. ✅ Reads your local `tina/config.ts`
2. ✅ Generates GraphQL schema
3. ✅ Pushes schema to TinaCMS Cloud
4. ✅ Updates `tina/__generated__/` files
5. ✅ Registers new collections (guides, case-studies, blog, features, compare, news)

---

## 🔐 Environment Variables

### Local Development
Create a `.env` file (if you haven't):

```env
TINA_TOKEN=your-tina-token-here
VITE_TINA_CLIENT_ID=your-client-id-here
```

### Netlify (Production)
Make sure these are set in Netlify:

1. Go to Netlify Dashboard
2. Site Settings → Environment Variables
3. Add:
   - `TINA_TOKEN` - Your Tina token
   - `VITE_TINA_CLIENT_ID` - Your Tina client ID

---

## 🐛 Troubleshooting

### "Schema push failed"
- Check your token is correct
- Make sure you have write permissions
- Verify you're in the right TinaCMS project

### "No changes detected"
- Your schema might already be synced
- Try running with `--force` flag:
  ```bash
  npx @tinacms/cli@latest schema:push --token $TINA_TOKEN --force
  ```

### "Authentication failed"
- Your token might be expired
- Generate a new token from TinaCMS dashboard
- Make sure you're using the **Read/Write** token, not read-only

### Netlify Still Failing After Push
- Check Netlify has the `TINA_TOKEN` environment variable
- Clear Netlify cache: Settings → Build & Deploy → Clear cache
- Trigger a fresh deploy

---

## 📚 What Changed in Your Schema

We added 6 new collections:

1. **guide** - Guides collection
2. **case_study** - Case Studies collection  
3. **blog** - Blog collection
4. **feature** - Features collection
5. **compare** - Comparisons collection
6. **news** - News collection

Plus removed old collections:
- ~~tutorial~~ (replaced with guide)
- ~~review~~ (no longer needed)
- ~~post~~ (replaced with blog)

All these changes need to be registered with TinaCMS Cloud before deploying.

---

## ✅ Verification

After pushing, verify:

1. **Check TinaCMS Dashboard:**
   - Go to app.tina.io
   - Your project should show the new collections

2. **Check Local:**
   - Run `npx tinacms dev --local`
   - Admin panel should show all 6 collections

3. **Check Production:**
   - Deploy should complete successfully
   - Visit `/admin` on your live site
   - All collections should appear

---

## 🚀 Quick Checklist

- [ ] Get TINA_TOKEN from TinaCMS dashboard
- [ ] Set token locally (export or .env)
- [ ] Run `npx @tinacms/cli@latest schema:push --token $TINA_TOKEN`
- [ ] Commit generated files
- [ ] Push to GitHub
- [ ] Verify Netlify environment variables
- [ ] Trigger Netlify deploy
- [ ] ✅ Build succeeds!

---

## 💡 Pro Tip: Automate This

Add to your deployment workflow:

**package.json:**
```json
{
  "scripts": {
    "build": "npm run tina:push && tinacms build && tsc && vite build",
    "tina:push": "tinacms schema:push"
  }
}
```

Then Netlify will automatically push schema on each build (requires TINA_TOKEN in env).

---

## 📞 Need Help?

If you're still stuck:
1. Check [TinaCMS Docs](https://tina.io/docs/)
2. TinaCMS Discord community
3. Check Netlify build logs for specific errors

---

**Remember:** Always push schema changes to TinaCMS Cloud before deploying! 🎯

