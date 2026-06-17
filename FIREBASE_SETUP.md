# Firebase Hosting Setup Guide

This guide walks you through setting up and deploying your portfolio to Firebase Hosting.

## Prerequisites

- Node.js 14+ installed
- A Google account
- Firebase project created (or create one during setup)

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

Verify installation:
```bash
firebase --version
```

## Step 2: Authenticate with Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

## Step 3: Create a Firebase Project

If you don't have a Firebase project yet:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter your project name (e.g., "my-portfolio")
4. Follow the setup wizard
5. Copy your **Project ID**

## Step 4: Update Firebase Configuration

Edit `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID` with your actual Firebase Project ID:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

## Step 5: Build Your Project

```bash
npm run build
```

This creates a `dist` folder with your optimized production build.

## Step 6: Deploy to Firebase

```bash
firebase deploy
```

After deployment completes, you'll see your hosting URL. Your portfolio is now live!

## Step 7: Configure Custom Domain (Optional)

1. In Firebase Console, go to **Hosting**
2. Click **Connect domain**
3. Follow the domain setup instructions

## Common Commands

### View deployment history
```bash
firebase hosting:channel:list
```

### Preview before deploying
```bash
firebase hosting:channel:deploy preview
```

### View deployment logs
```bash
firebase functions:log
```

## Environment Variables (if needed)

If your app uses environment variables, create a `.env` file:

```
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_key
```

Then reference in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Troubleshooting

**"dist folder not found"**
- Run `npm run build` first

**"Permission denied" error**
- Run `firebase login` again
- Check Firebase project permissions

**Site not updating after deploy**
- Clear browser cache (Ctrl+Shift+Delete on Windows)
- Check that new files are in the `dist` folder

## CI/CD Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml` for automatic deployment on push:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: YOUR_PROJECT_ID
```

To use GitHub Actions:
1. Generate a Firebase service account key in Firebase Console
2. Add it as a GitHub secret named `FIREBASE_SERVICE_ACCOUNT`

## Performance Tips

Your `firebase.json` is already optimized with:
- Long cache for assets (1 year)
- Short cache for index.html (5 minutes)
- SPA rewrites for React Router

Monitor performance in Firebase Console under **Hosting** > **Metrics**.
