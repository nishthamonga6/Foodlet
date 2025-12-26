# Deploying to Vercel

## Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- A Google AI API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

## Deployment Steps

### 1. Prepare Your Repository
Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git repository
4. Vercel will automatically detect Next.js

### 3. Configure Environment Variables
In the Vercel project settings, add the following environment variable:

**Required:**
- `GOOGLE_GENAI_API_KEY` or `GOOGLE_API_KEY` - Your Google AI API key

To add environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add the variable name and value
4. Select which environments (Production, Preview, Development)
5. Click "Save"

### 4. Deploy
Click "Deploy" and Vercel will:
- Install dependencies
- Build your Next.js app
- Deploy to a production URL

## Vercel Configuration

This project includes:
- **vercel.json** - Redirects and CORS headers
- **.vercelignore** - Files to exclude from deployment
- **API Route** - `/api/generate-ad-copy` endpoint for AI features

## Features
- ✅ Automatic HTTPS
- ✅ Edge network CDN
- ✅ Serverless functions for API routes
- ✅ Environment variable management
- ✅ Automatic Git deployments
- ✅ Preview deployments for PRs

## Testing Locally with Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Link to your Vercel project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run locally
npm run dev
```

## Troubleshooting

### Build Errors
- Make sure all environment variables are set in Vercel
- Check build logs in the Vercel dashboard
- TypeScript and ESLint errors are currently ignored (see next.config.ts)

### API Issues
- Verify your Google AI API key is valid
- Check function logs in Vercel dashboard under "Functions"
- Ensure CORS headers are properly configured in vercel.json

## Differences from Firebase App Hosting
- Removed `apphosting.yaml` (Firebase-specific)
- Added `vercel.json` for Vercel configuration
- API routes use Next.js App Router format
- Environment variables managed in Vercel dashboard
- Genkit dev server not needed in production

## Local Development
```bash
# Install dependencies
npm install

# Create .env.local from .env.example
cp .env.example .env.local

# Add your Google AI API key to .env.local

# Run development server
npm run dev
```

## Additional Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Genkit Documentation](https://firebase.google.com/docs/genkit)
