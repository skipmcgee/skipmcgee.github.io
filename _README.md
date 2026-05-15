# 🧪 Jekyll & Hire

> A modern, interactive portfolio website built with Jekyll, featuring a sleek tech-themed design perfect for developers and tech professionals (or anyone interested!). The idea is to, well, get hired!

![Portfolio Preview](data/img/jekyllandhire.jpg)

![Jekyll](https://img.shields.io/badge/Jekyll-3.9.0-red.svg)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue.svg)
![License: GNU GPL v2.0](https://img.shields.io/badge/GNU-GPL%20v2.0-yellow.svg)

## 📋 Table of Contents

### 🚀 Getting Started
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)

### 📧 Contact Form Setup
- [Contact Form Backend Setup](#contact-form-backend-setup)
- [Step 1: Create Google Form](#step-1-create-google-form-2-minutes)
- [Step 2: Connect Google Sheet](#step-2-connect-google-sheet-30-seconds)
- [Step 3: Deploy Google Apps Script](#step-3-deploy-google-apps-script-2-minutes)
- [Step 4: Set Up Triggers](#step-4-set-up-the-trigger-30-seconds)
- [Step 5: Get Form IDs](#step-5-get-form-ids-for-frontend-1-minute)
- [Step 6: Update JavaScript](#step-6-update-your-javascript-30-seconds)
- [Testing Your Setup](#testing-your-setup)

### 🎨 Customization
- [Customizing the Portfolio YAML File](#customizing-the-portfolio-yaml-file)
- [Customing the Site Configuration YAML File](#customing-the-site-configuration-yaml-file)
- [YAML Editing Tips](#yaml-editing-tips)
- [Profile Image](#profile-image)
- [Deployment](#deployment)

### 🔧 Maintenance & Advanced
- [Content Workflow](#content-workflow)
- [Important Files](#important-files)
- [Quick Setup Checklist](#quick-setup-checklist)
- [Troubleshooting](#troubleshooting)


---

## 🚀 Getting Started

### Overview

A responsive, professional portfolio website template with modern animations and interactive elements. **Completely free to use and deploy**

### ✨ Key Features

- **🎨 Dual Theme System** - Professional dark mode + clean light mode
- **📱 Fully Responsive** - Works on all devices
- **⚡ Interactive Elements** - Custom cursor, parallax effects, smooth animations
- **🔧 Easy Content Management** - Update everything through a single YAML file
- **🚀 Fast Loading** - Optimized static site
- **🔍 SEO Optimized** - Built-in meta tags and structured data
- **🛠️ GitHub Pages Ready** - Deploy with zero configuration
- **📧 Functional Contact Form** - Google Forms backend with email notifications
- **💰 100% Free** - No hosting costs, runs on GitHub Pages

### 🎯 Perfect For

- Anyone looking for a modern portfolio!

## 🚀 How to Use

### Prerequisites

Before you begin, make sure you have:

- **Ruby** (version 3.0 or higher) - [Download here](https://rubyinstaller.org/) (Windows) or `brew install ruby` (macOS)
- **Bundler** - Install with `gem install bundler`
- **Git** - [Download here](https://git-scm.com/)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   ```
   Visit: http://localhost:4000
   ```

Your site will automatically reload when you make changes!

## 📧 Contact Form Setup

### Contact Form Backend Setup

Your portfolio includes a fully functional contact form with Google Forms backend, email notifications, and spam protection. Here's how to set it up:

### 🚀 **Quick Setup Overview (5 minutes)**

1. **Create Google Form** → Get form submissions
2. **Connect Google Sheet** → Store responses automatically  
3. **Deploy Apps Script** → Send custom email notifications
4. **Update JavaScript** → Connect your frontend to backend

---

### **Step 1: Create Google Form (2 minutes)**

1. **Go to [forms.google.com](https://forms.google.com)**
2. **Click "Blank Form"** 
3. **Set form title**: "Portfolio Contact Form"
4. **Add these EXACT fields:**

   ```
   Question 1: Name
   - Type: Short answer
   - Required: YES
   
   Question 2: Email  
   - Type: Short answer
   - Required: YES
   
   Question 3: Subject
   - Type: Short answer
   - Required: YES
   
   Question 4: Message
   - Type: Paragraph
   - Required: YES
   ```

---

### **Step 2: Connect Google Sheet (30 seconds)**

1. **In your Google Form**, click the `Responses` tab
2. **Click the green Google Sheets icon** 📊  
3. **Select "Create a new spreadsheet"**
4. **Name it**: "Portfolio Contact Responses"
5. **Click "Create"** → Google automatically links them

---

### **Step 3: Deploy Google Apps Script (2 minutes)**

1. **Open your new Google Sheet**
2. **Click Extensions → Apps Script**
3. **Replace the default code** with this enhanced script:

```javascript
// =====================================================================================
// PORTFOLIO CONTACT FORM - Google Apps Script Email Notifications
// =====================================================================================

const CONFIG = {
  YOUR_EMAIL: 'your.email@gmail.com', // 🔥 UPDATE THIS!
  SEND_AUTO_RESPONDER: true,
  EMAIL_SIGNATURE: 'Your Name' // 🔥 UPDATE THIS!
};

function onFormSubmit(e) {
  try {
    const values = e.values;
    const [timestamp, name, email, subject, message] = values;
    
    // Send notification to you
    sendNotificationEmail({ timestamp, name, email, subject, message });
    
    // Send confirmation to form submitter
    if (CONFIG.SEND_AUTO_RESPONDER) {
      sendAutoResponder({ name, email, subject });
    }
    
    console.log('✅ Emails sent successfully');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

function sendNotificationEmail(data) {
  const subject = `🚀 New Portfolio Contact: ${data.subject}`;
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; color: white; text-align: center;">
        <h2 style="margin: 0; font-size: 28px;">🚀 New Portfolio Contact</h2>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Professional inquiry received</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px;">
        <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea;">
          <table style="width: 100%;">
            <tr>
              <td style="width: 50%; padding-right: 20px;">
                <strong>👤 Name:</strong> ${data.name}<br>
                <strong>📧 Email:</strong> <a href="mailto:${data.email}">${data.email}</a>
              </td>
              <td style="width: 50%; border-left: 1px solid #e9ecef; padding-left: 20px;">
                <strong>📋 Subject:</strong> ${data.subject}<br>
                <strong>⏰ Time:</strong> ${data.timestamp}
              </td>
            </tr>
          </table>
        </div>
      </div>
      
      <div style="background: white; padding: 30px;">
        <h3 style="margin: 0 0 20px 0; color: #495057;">💬 Message:</h3>
        <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #28a745; border-radius: 8px;">
          <p style="margin: 0; line-height: 1.7; color: #495057;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 25px; text-align: center;">
        <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
           style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">
          📧 Reply to ${data.name}
        </a>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: CONFIG.YOUR_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: data.email
  });
}

function sendAutoResponder(data) {
  const subject = `✅ Thank you for your message, ${data.name}!`;
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 30px; color: white; text-align: center;">
        <h2 style="margin: 0; font-size: 28px;">✅ Message Received</h2>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for reaching out!</p>
      </div>
      
      <div style="background: white; padding: 40px;">
        <p style="font-size: 18px; margin: 0 0 20px 0;"><strong>Hello ${data.name},</strong></p>
        
        <p style="margin: 0 0 25px 0; line-height: 1.7; color: #6c757d;">
          Thank you for reaching out through my portfolio! I've received your message regarding 
          "<strong>${data.subject}</strong>" and appreciate you taking the time to connect.
        </p>
        
        <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #28a745; margin: 25px 0; text-align: center;">
          <p style="margin: 0; font-weight: 500;"><span style="color: #28a745;">⚡</span> I'll respond within 24 hours</p>
        </div>
        
        <p style="margin: 0; line-height: 1.7; color: #6c757d;">
          Best regards,<br>
          <strong>${CONFIG.EMAIL_SIGNATURE}</strong><br>
          <span style="color: #adb5bd;">Portfolio & Professional Services</span>
        </p>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: CONFIG.YOUR_EMAIL
  });
}

// Test function - run this to test email notifications
function testEmails() {
  const testData = {
    timestamp: new Date().toLocaleString(),
    name: "Test Contact",
    email: CONFIG.YOUR_EMAIL,
    subject: "System Test",
    message: "This is a test message to verify the email system works correctly."
  };
  
  sendNotificationEmail(testData);
  sendAutoResponder(testData);
  console.log('✅ Test emails sent!');
}
```

4. **Update the CONFIG section:**
   ```javascript
   const CONFIG = {
     YOUR_EMAIL: 'your.email@gmail.com', // Your actual email
     SEND_AUTO_RESPONDER: true,
     EMAIL_SIGNATURE: 'Your Name' // Your actual name
   };
   ```

5. **Save the project** (Ctrl+S or File → Save)

---

### **Step 4: Set Up the Trigger (30 seconds)**

1. **In Apps Script**, click the **Triggers** icon ⏰ (left sidebar)
2. **Click "Add Trigger"**
3. **Configure:**
   - Function: `onFormSubmit`
   - Event source: `From spreadsheet`  
   - Event type: `On form submit`
4. **Click "Save"** and authorize permissions when prompted

---

### **Step 5: Get Form IDs for Frontend (1 minute)**

1. **Get Form ID:**
   - In Google Form, click "Send" button
   - Click the link icon 🔗
   - Copy the ID from URL: `https://docs.google.com/forms/d/FORM_ID_HERE/viewform`

2. **Get Entry IDs:**
   - Right-click on form → `View Page Source` and look for the 4 different form boxes (e.g, Name, Email, Subject, Message)
   - Search for the field name (Ctrl+F) and look for them in one of the elements
     - Only look for the word (e.g., Message) and search within the `[[` character space. This is where the form id is located (e.g., 000000000)
   - Copy the 4 entry IDs you find as in this example:
   ```html
   <div jsmodel="CP1oW" data-params="%.@.[1234567890,&quot;Message&quot;,null,0,[[000000000,null,true,null,null,null,null,null,null,null,[]]],null,null,null,null,null,null,[null,&quot;Message&quot;]]  <!-- Message field -->
   ```

---

### **Step 6: Update Your JavaScript (30 seconds)**

**In your `assets/js/main.js`**, update the configuration:

```javascript
const CONTACT_FORM_CONFIG = {
    formId: 'YOUR_ACTUAL_FORM_ID_HERE', // From Step 5
    fields: {
        name: 'entry.YOUR_NAME_ENTRY_ID',     // From Step 5
        email: 'entry.YOUR_EMAIL_ENTRY_ID',    // From Step 5  
        subject: 'entry.YOUR_SUBJECT_ENTRY_ID', // From Step 5
        message: 'entry.YOUR_MESSAGE_ENTRY_ID'  // From Step 5
    },
    fallbackEmail: 'your.email@gmail.com' // Your email
};
```

---

### Testing Your Setup

1. **Test the Apps Script:**
   - In Apps Script, run the `testEmails()` function
   - Check your email for test notifications

2. **Test the Live Form:**
   - Submit a test message through your portfolio
   - Verify you receive both emails (notification + auto-responder)
   - Check Google Sheet for the response data

3. **Troubleshooting:**
   - Check browser console for JavaScript errors
   - Verify form IDs and entry IDs are correct
   - Ensure trigger is properly set up
   - Check spam folder for emails

---

### **✨ Contact Form Benefits**

✅ Spam protection via Google Forms  
✅ Custom HTML email notifications  
✅ Auto-responder for form submitters  
✅ Automatic data storage in Google Sheets  
✅ Mobile-friendly emails  
✅ Easy maintenance through Google's interface  
✅ **100% free** - no hosting costs

**Setup Time:** ~5 minutes | **Maintenance:** Zero  

---

## 🎨 Customization

### Customizing the Portfolio YAML file

**All your content is managed through two main files:**

#### 🎯 Primary Content

File: `_data/portfolio.yml`

This YAML file contains all your personal information, experience, and projects. Here's how to edit each section:

**👤 Personal Information:**

```yaml
personal:
  name: "Your Full Name"                    # Appears in hero section
  title: "Your Professional Title"          # Job title/role
  tagline: "// Your Personal Motto"         # Appears under title
  logo: "Y.N"                               # Your initials for navigation
  email: "your.email@example.com"           # Contact email
  phone: "+1 (555) 123-4567"                # Phone number
  location: "Your City, State"              # Where you're located
  linkedin: "linkedin.com/in/yourprofile"   # LinkedIn profile
  github: "github.com/yourusername"         # GitHub profile
  profileImage: "/assets/img/profile.jpg"   # Path to your photo
  bio:                                      # About section paragraphs
    - "First paragraph about your background..."
    - "Second paragraph about your interests..."
    - "Third paragraph about your philosophy..."
```

**💼 Professional Experience:**

```yaml
experience:
  - title: "Your Job Title"                 # Position name
    company: "Company Name"                 # Employer
    period: "2022 - Present"                # Employment dates
    description: "What you accomplished in this role..."
```

**🎓 Education:**

```yaml
education:
  - degree: "Bachelor of Computer Science"  # Degree name
    institution: "University Name"          # School name
    period: "2016 - 2020"                   # Dates attended
    description: "Relevant coursework, honors, etc."
```

**🏆 Certifications:**

```yaml
certifications:
  - name: "AWS Certified"                   # Certification name
    issuer: "Amazon Web Services"           # Issuing organization
    year: "2023"                            # Year obtained
```

**💻 Skills:**

```yaml
skills:
  - category: "Programming"                 # E.g., "Programming Languages"
    icon: "⚡"                              # Emoji icon for visual appeal
    tags:                                   # List of specific skills
      - "Python"
      - "JavaScript"
      - "React"
```

**🚀 Projects:**

```yaml
projects:
  - title: "Project Name"                   # Project title
    icon: "🤖"                             # Emoji icon
    description: "Brief description of what this project does..."
    links:                                 # Project links
      - label: "Demo"                      # Link text
        url: "https://demo-link.com"       # Actual URL
      - label: "GitHub"
        url: "https://github.com/user/repo"
```

**🧭 Navigation:**

```yaml
navigation:
  - label: "HOME"
    href: "#home"
  - label: "ABOUT"
    href: "#about"
  - label: "SKILLS"
    href: "#skills"
```

**🔍 SEO Settings:**

```yaml
seo:
  title: "Your Name - Your Title"
  description: "Brief description for search engines..."
  keywords: "your, skills, here"
  ogImage: "/assets/img/og-image.jpg"
```

### Customing the Site Configuration YAML File

File: `_config.yml`

```yaml
title: "Your Portfolio Title"
description: "Your professional description"
url: "https://yourusername.github.io"
baseurl: "/repository-name"

author: "Your Name"
google_analytics: "GA_MEASUREMENT_ID"  # Optional
```

### YAML Editing Tips

**Important rules:**
- Use spaces, not tabs for indentation
- Keep consistent spacing (2 spaces per level)
- Quote strings with special characters
- Use lists with `-` for multiple items

**Example:**
```yaml
skills:
  - category: "Programming"
    icon: "⚡"
    tags:
      - "Python"
      - "JavaScript"
```

**Validation:**
```bash
ruby -c _data/portfolio.yml
```
Or use online: [yamllint.com](http://www.yamllint.com/)

### Profile Image

Add your photo to `assets/img/profile.jpg`
- **Recommended:** 500x500px, JPG format, under 500KB

### Deployment

#### GitHub Pages (Free)
1. Push code to GitHub
2. Go to repository Settings → Pages
3. Under Build and deployment select Source: "GitHub Actions"
4. Click on Configure for GitHub Pages Jekyll
5. Press on Commit changes on both windows
6. Visit your your site once deployment is completed: `https://yourusername.github.io/repository-name`

## 🔧 Maintenance & Advanced

### Content Workflow

**Update your portfolio in 4 steps:**

1. **Edit content:** `_data/portfolio.yml`
2. **Test locally:** `bundle exec jekyll serve`
3. **Deploy:** `git add . && git commit -m "Update content" && git push`
4. **Wait 2-5 minutes** for GitHub Pages to rebuild

### Important Files

**Files you'll edit regularly:**
- `_data/portfolio.yml` - Your content
- `_config.yml` - Site settings
- `assets/img/profile.jpg` - Your profile photo

**Files to leave alone:**
- `_layouts/default.html` - Site structure
- `assets/css/style.css` - All styling
- `assets/js/main.js` - Interactive features
- `index.html` - Homepage template

### Quick Setup Checklist

**After cloning, customize these in order:**
- **Step 1:** [Edit `_data/portfolio.yml`](#customizing-the-portfolio-yaml-file) - All your personal content
- **Step 2:** [Update `_config.yml`](#customing-the-site-configuration-yaml-file) - Site title, URL, your name
- **Step 3:** [Add profile image](#profile-image) - `assets/img/profile.jpg`
- **Step 4:** [Set up contact form](#contact-form-backend-setup) - Follow the Contact Form Backend Setup section
- **Step 5:** [Test locally](#local-development-setup) - `bundle exec jekyll serve`
- **Step 6:** [Deploy](#deployment) - Push to GitHub and enable Pages

### Troubleshooting

**Common issues and solutions:**

| Problem | Solution |
|---------|----------|
| Site not building | Check `bundle exec jekyll build --verbose` for errors |
| Content not updating | Ensure YAML syntax is correct (spaces, not tabs) |
| YAML parsing errors | Use [yamllint.com](http://www.yamllint.com/) to validate |
| Contact form not working | Follow the Contact Form Backend Setup section |
| Images not loading | Verify file paths and image file names |

**YAML syntax check:**
```bash
ruby -c _data/portfolio.yml
```

## 🎯 Customization

### 🎨 Change Colors
Edit `assets/css/style.css`:
```css
:root {
  --primary-cyber: #your-color;
  --secondary-cyber: #your-color;
}
```

### 📊 Add Analytics
Add to `_config.yml`:
```yaml
google_analytics: "GA_MEASUREMENT_ID"
```

---

**⭐ If this template helped you, consider starring this repository!**