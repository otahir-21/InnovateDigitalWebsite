# 📧 Email Setup Guide - Hostinger SMTP

This guide will help you configure the contact form to send emails to `osama@innovatedigital.ae` using Hostinger SMTP.

---

## 🔧 **Setup Steps**

### **Step 1: Create Email Account on Hostinger**

1. Log in to your **Hostinger control panel** (hPanel)
2. Go to **Emails** section
3. Create an email account (if not already created):
   - Example: `contact@innovatedigital.ae` or `noreply@innovatedigital.ae`
   - Set a strong password
   - Save the credentials

---

### **Step 2: Configure Environment Variables**

1. Open the file `.env.local` in the root directory
2. Replace the placeholder values with your actual Hostinger email credentials:

```env
# Your Hostinger email address
SMTP_USER=contact@innovatedigital.ae

# Your Hostinger email password
SMTP_PASSWORD=your-actual-password-here
```

**Important:** 
- Use the **full email address** as SMTP_USER
- Use the **actual password** you set for that email
- Never share or commit this file to version control (it's already in .gitignore)

---

### **Step 3: Restart Development Server**

After updating `.env.local`, restart your Next.js server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

### **Step 4: Test the Contact Form**

1. Go to http://localhost:3000/contact
2. Fill out the contact form
3. Click "Send Message"
4. Check `osama@innovatedigital.ae` inbox for the email

---

## 📋 **Hostinger SMTP Settings (Reference)**

These are already configured in the code:

- **SMTP Host:** `smtp.hostinger.com`
- **SMTP Port:** `465` (SSL)
- **Security:** SSL/TLS
- **Authentication:** Required

---

## ✉️ **Email Details**

### **What happens when someone submits the form:**

1. Form data is sent to `/api/send-email`
2. Email is sent via Hostinger SMTP
3. **Recipient:** `osama@innovatedigital.ae`
4. **From:** Your configured SMTP email (e.g., `contact@innovatedigital.ae`)
5. **Reply-To:** The user's email (so you can reply directly)

### **Email includes:**
- User's name
- User's email
- User's phone (if provided)
- User's company (if provided)
- User's message
- Timestamp (UAE timezone)

---

## 🎨 **Email Template**

The email is beautifully formatted with:
- Professional HTML design
- Gradient header
- Organized fields
- Clickable email and phone links
- Mobile-responsive

---

## 🔒 **Security Notes**

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. Use a **strong password** for your SMTP email
3. Consider creating a dedicated email like `noreply@innovatedigital.ae` for sending
4. The form validates all inputs before sending
5. Rate limiting can be added later if needed

---

## 🚨 **Troubleshooting**

### **"Failed to send email" error:**

1. **Check credentials:**
   - Verify SMTP_USER is the full email address
   - Verify SMTP_PASSWORD is correct
   - Try logging into webmail with these credentials

2. **Check Hostinger settings:**
   - Ensure the email account is active
   - Check if SMTP is enabled for your hosting plan
   - Verify your domain's email is properly configured

3. **Check server logs:**
   - Open browser console (F12)
   - Look for error messages
   - Check terminal for backend errors

4. **Test SMTP connection:**
   - Try sending a test email from Hostinger webmail
   - Verify you can receive emails at `osama@innovatedigital.ae`

### **Email not received:**

1. Check spam/junk folder
2. Verify `osama@innovatedigital.ae` exists and is active
3. Check email quota (not full)
4. Wait a few minutes (sometimes delayed)

### **Authentication failed:**

1. Double-check password (no extra spaces)
2. Try resetting the email password in Hostinger
3. Ensure 2FA is not blocking SMTP access
4. Contact Hostinger support if issues persist

---

## 🌐 **Production Deployment**

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform:
   - Go to project settings
   - Add `SMTP_USER` and `SMTP_PASSWORD`
   - Save and redeploy

2. **Vercel example:**
   ```
   Settings → Environment Variables
   Add: SMTP_USER = contact@innovatedigital.ae
   Add: SMTP_PASSWORD = your-password
   ```

3. **Test in production** after deployment

---

## 📞 **Need Help?**

If you encounter issues:

1. Check Hostinger documentation: https://support.hostinger.com
2. Contact Hostinger support for SMTP issues
3. Verify email account is working via webmail
4. Check server logs for specific error messages

---

## ✅ **Quick Checklist**

- [ ] Email account created on Hostinger
- [ ] `.env.local` file updated with credentials
- [ ] Development server restarted
- [ ] Contact form tested
- [ ] Email received at `osama@innovatedigital.ae`
- [ ] Environment variables added to production (when deploying)

---

**That's it! Your contact form is now fully functional and will send emails to osama@innovatedigital.ae** 🎉
