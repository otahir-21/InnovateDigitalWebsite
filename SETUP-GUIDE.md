# 🚀 Quick Setup Guide

## Step-by-Step Installation

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### 2. Configure Your Site

#### Update Site Configuration
Edit `lib/config.ts`:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  description: 'Your description',
  url: 'https://yourdomain.ae',
  contact: {
    email: 'info@yourdomain.ae',
    phone: '+971 XX XXX XXXX',
    whatsapp: '971XXXXXXXXX',
    address: 'Your Address, Dubai, UAE',
  },
  links: {
    twitter: 'https://twitter.com/yourhandle',
    linkedin: 'https://linkedin.com/company/yourcompany',
    instagram: 'https://instagram.com/yourhandle',
    facebook: 'https://facebook.com/yourpage',
  },
}
```

#### Update Navigation (if needed)
Edit `lib/config.ts` - `navigationLinks` array

### 3. Add Your Branding

#### Logo
Replace the text logo in `components/layout/Header.tsx`:
```typescript
<div className="text-2xl font-bold gradient-text">
  Your Company Name
</div>
```

Or add an image:
```typescript
<Image src="/logo.png" alt="Your Company" width={150} height={40} />
```

#### Colors
Edit `tailwind.config.ts` to match your brand colors:
```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    600: '#YOUR_COLOR',
    // ...
  },
}
```

### 4. Add Essential Images

Create these images and add to `/public/` folder:

Required images:
- `favicon.ico` (16x16, 32x32)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)
- `og-image.jpg` (1200x630) - For social sharing
- `logo.png` - Your logo

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Customize Content

#### Homepage
- Edit `components/home/Hero.tsx` - Hero section
- Edit `components/home/Services.tsx` - Services list
- Edit `components/home/About.tsx` - About section
- Update stats, testimonials, case studies

#### Pages
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services listing
- `app/contact/page.tsx` - Contact page
- `app/blog/page.tsx` - Blog listing

### 7. SEO Configuration

#### Update Schema Markup
Edit `lib/schema.ts` with your business details:
- Address
- Geo coordinates (get from Google Maps)
- Opening hours

#### Submit to Google
1. Build your site: `npm run build`
2. Deploy to production
3. Submit sitemap to Google Search Console: `https://yourdomain.ae/sitemap.xml`
4. Add Google Analytics (optional)

### 8. Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live! 🎉

---

## Common Customizations

### Add a New Service Page

1. Create file: `app/services/your-service/page.tsx`
2. Copy structure from `app/services/seo/page.tsx`
3. Update content
4. Add to sitemap in `app/sitemap.ts`

### Add Blog Posts

For a simple blog, edit `app/blog/page.tsx` and add posts to the `blogPosts` array.

For a dynamic blog, consider integrating:
- Contentful
- Sanity CMS
- Strapi
- MDX

### Add Google Analytics

1. Get your GA4 measurement ID
2. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Add Google Analytics script to `app/layout.tsx`

### Add Contact Form Integration

The contact form in `components/contact/ContactForm.tsx` currently simulates submission.

To connect to a real backend:
- Use **Formspree** (easiest)
- Use **EmailJS**
- Create API route in `app/api/contact/route.ts`
- Use **SendGrid**, **Mailgun**, etc.

### Enable Arabic Language

1. Add Arabic font to `app/layout.tsx`
2. Create language toggle in Header
3. Duplicate content with Arabic translations
4. Use Next.js i18n or libraries like `next-intl`

---

## Performance Checklist

- [ ] Optimize all images (use WebP/AVIF)
- [ ] Add Google Analytics (optional)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 90+)
- [ ] Test page speed on [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Add real content and images
- [ ] Test all forms
- [ ] Test all links
- [ ] Add SSL certificate (automatic on Vercel)

---

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript Errors
Check that all components have proper types. Use `any` temporarily if needed:
```typescript
const data: any = someValue
```

### Styling Issues
Make sure Tailwind is loading:
```bash
# Restart dev server
npm run dev
```

---

## Need Help?

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion/)

Happy building! 🚀
