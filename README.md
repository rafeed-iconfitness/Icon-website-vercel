# IconFitness Website

This is a modern, high-performance website for IconFitness, built with Next.js and React.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd icon_website
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using pnpm:
    ```bash
    pnpm install
    ```

### Development

To start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
pnpm build
```

To start the production server after building:

```bash
npm run start
# or
pnpm start
```

## Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Charts:** [Recharts](https://recharts.org/)

---

## Production Deployment

This project is deployed on a **Hostinger VPS** running **Ubuntu 24.04** with **CloudPanel** and **Cloudflare CDN**.

### Server Details

| Component | Details |
|-----------|---------|
| **VPS Provider** | Hostinger |
| **OS** | Ubuntu 24.04 LTS |
| **Control Panel** | CloudPanel |
| **Process Manager** | PM2 |
| **CDN** | Cloudflare |
| **SSL** | Let's Encrypt |

### Deployment Workflow

#### 1. Push Changes to Git

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

#### 2. Deploy to VPS

SSH into the server and run:

```bash
# Connect as site user
ssh icontraining@YOUR_VPS_IP

# Navigate to project
cd ~/htdocs/www.icontraining.app/Icon-website-vercel

# Pull latest changes
git pull origin main

# Install dependencies (if package.json changed)
npm install

# Build for production
npm run build

# Restart PM2
pm2 restart ecosystem.config.js

# Or if using named process
pm2 restart icon-website
```

#### 3. Clear Cloudflare Cache (if needed)

After deployment, purge Cloudflare cache:
- Go to Cloudflare Dashboard → Caching → Configuration → **Purge Everything**

### PM2 Commands

| Command | Description |
|---------|-------------|
| `pm2 status` | View running processes |
| `pm2 logs icon-website` | View application logs |
| `pm2 restart icon-website` | Restart the app |
| `pm2 reload ecosystem.config.js` | Zero-downtime restart |
| `pm2 monit` | Real-time monitoring |

### Quick Deploy Script

Create a `deploy.sh` script on the VPS for faster deployments:

```bash
#!/bin/bash
cd ~/htdocs/www.icontraining.app/Icon-website-vercel
git pull origin main
npm install
npm run build
pm2 restart icon-website
echo "✅ Deployment complete!"
```

Make it executable: `chmod +x deploy.sh`

Run with: `./deploy.sh`

### Environment Variables

Create `.env.production` on the VPS with:

```env
MAIL_API_KEY=your_mailerlite_api_key
MAIL_USER_GROUP_ID=your_user_group_id
MAIL_TRAINER_GROUP_ID=your_trainer_group_id
GMAIL_USER=your_gmail_address
GMAIL_APP_PASSWORD=your_gmail_app_password
NODE_ENV=production
```

> ⚠️ Never commit `.env.production` to git!

### Cloudflare Settings

| Setting | Value |
|---------|-------|
| **SSL Mode** | Full (Strict) |
| **Always Use HTTPS** | Enabled |
| **Auto Minify** | JS, CSS, HTML |
| **Brotli** | Enabled |
| **HTTP/3** | Enabled |

### Troubleshooting

**App not starting:**
```bash
pm2 logs icon-website --lines 50
```

**Check if port 3000 is in use:**
```bash
sudo netstat -tlnp | grep 3000
```

**Restart PM2 completely:**
```bash
pm2 delete all
pm2 start ecosystem.config.js
pm2 save
```

**SSL certificate renewal:**
```bash
# Via CloudPanel UI: Sites → SSL/TLS → Actions → Renew
# Let's Encrypt auto-renews 30 days before expiry
```
