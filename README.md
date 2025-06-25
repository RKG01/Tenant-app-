
# 🏢 Tenant App

A modern full-stack **multi-tenant** application built using [Next.js App Router](https://nextjs.org/docs/app), [Clerk](https://clerk.com/) for authentication and organization management, [Neon](https://neon.tech) for serverless PostgreSQL, and [Drizzle ORM](https://orm.drizzle.team/) for type-safe database access.

---

## ✨ Features

* 🔐 **Authentication & Multi-Tenancy** with Clerk (supports user accounts & organizations)
* ⚡️ **Fast & Scalable** serverless architecture using Neon PostgreSQL
* 🧠 **Type-safe database layer** using Drizzle ORM
* 💻 **Built with Next.js App Router** for modern, file-based routing
* 🎨 Custom UI using TailwindCSS & Geist Font

---

## 📦 Tech Stack

* **Frontend**: Next.js 14 (App Router)
* **Authentication**: Clerk
* **Database**: Neon PostgreSQL (Serverless)
* **ORM**: Drizzle ORM
* **Styling**: Tailwind CSS + Geist Font
* **Deployment**: Vercel

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tenant-app.git
cd tenant-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
DATABASE_URL=your_neon_postgres_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> Get your Neon database URL from [Neon](https://neon.tech/) and your Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com/).

### 4. Run the App

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗃️ Database Setup (Drizzle ORM)

1. Define your schema in `drizzle/schema.ts`
2. Use Drizzle CLI to generate SQL migrations:

```bash
npx drizzle-kit push
```

> Ensure your `drizzle.config.ts` is properly configured.

---

## 👥 How It Works

* Users can **sign up or log in** using Clerk.
* After logging in, users can **create or join organizations**.
* Each organization acts as a **tenant**, with isolated data (multi-tenant architecture).
* Data is securely stored in **Neon PostgreSQL**, and accessed via **Drizzle ORM** with full TypeScript safety.

---

## 🧪 Learn More

* [Clerk Docs](https://clerk.dev/docs)
* [Drizzle ORM Docs](https://orm.drizzle.team/docs)
* [Neon Docs](https://neon.tech/docs/introduction)
* [Next.js App Router](https://nextjs.org/docs/app/building-your-application)

---

## 📤 Deploy on Vercel

1. Push your code to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Add environment variables in Vercel dashboard.
4. Deploy 🎉

---

## 📄 License

MIT © \[RAHUL GUPTA]

---

