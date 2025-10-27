# How to Embed Tweets in Your Blog

## ✅ Simple Method: Just Paste the Embed Code!

Your blog now supports raw HTML, so you can paste Twitter embed code directly into your markdown content.

### Step 1: Get the Embed Code from Twitter/X

1. Go to the tweet you want to embed
2. Click the **share** icon (⋯ or share button)
3. Select **"Embed Tweet"** or **"Copy embed code"**
4. Copy the entire HTML code

### Step 2: Paste into Your MDX File

Just paste the code directly into your `.mdx` file:

```markdown
Your regular markdown content here...

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweet content here...</p>&mdash; Username (@handle) <a href="https://twitter.com/handle/status/123456789">Date</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

More content continues...
```

### Step 3: That's It!

The tweet will automatically render beautifully in your blog post. The Twitter widget script loads automatically.

## 📝 Example from Your SNS Post

```markdown
SNS is a pioneering Web3 brand...

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">You've seen .sol on wallets.<br>Now you're about to see it on bodies...</p>&mdash; sns.sol (@sns) <a href="https://twitter.com/sns/status/1951296984754667828">August 1, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

By bridging on-chain identity with wearable culture...
```

## 💡 Tips

- **Multiple Tweets**: You can embed as many tweets as you want in a single post
- **Script Tag**: Only need ONE `<script>` tag per page, but it's fine to include it with each tweet
- **Styling**: Tweets automatically inherit your blog's styling and are responsive
- **Loading**: Tweets load asynchronously, so they won't slow down your page

## 🎨 What Works

- ✅ Single tweets
- ✅ Tweets with images
- ✅ Tweets with videos
- ✅ Tweet threads (embed each separately)
- ✅ Retweets
- ✅ Quote tweets

## 🔧 Technical Details

- Uses `rehype-raw` to process HTML in markdown
- Twitter widgets script loads once per page
- Tweets are responsive and mobile-friendly
- Works with both twitter.com and x.com URLs

---

**That's it!** Just paste, save, and publish. No complex setup needed. 🚀

