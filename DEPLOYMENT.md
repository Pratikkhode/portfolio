# Deployment Guide

## Vercel Deployment

1. **Remove vercel.json** - Let Vercel auto-detect the framework
2. **Use Node.js 18.17.0** - Specified in .nvmrc
3. **Build command**: `npm run build`
4. **Output directory**: `dist`

## Netlify Deployment

1. **Use netlify.toml** - Configuration provided
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. **SPA redirects** - Configured for React Router

## Troubleshooting

### Blank Page Issues:
1. Check browser console for JavaScript errors
2. Verify all assets are loading (CSS, JS, images)
3. Check if the photo.jpg file exists in src/assets/
4. Ensure all imports are working correctly

### Build Errors:
1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear build cache: `rm -rf dist && npm run build`
3. Check for TypeScript errors: `npm run lint`

### Permission Denied:
1. Remove vercel.json and let auto-detection work
2. Use Node.js 18.17.0
3. Ensure package.json has correct scripts

## Files to Check:
- ✅ src/App.tsx - Main component
- ✅ src/main.tsx - Entry point
- ✅ index.html - HTML template
- ✅ src/assets/photo.jpg - Profile image
- ✅ package.json - Dependencies and scripts
- ✅ vite.config.ts - Build configuration 