# 🏦 Alpha Finance Dashboard

**Alpha Finance** is a high-performance financial monitoring platform designed to provide a unified, real-time view of global assets, including Stocks and Cryptocurrencies. This project is built as a showcase of **Full-Cycle Software Engineering**, from product discovery and Agile management to edge-runtime deployment.

> 🌐 **Live Demo:** [soon](https://alpha.sededigital.pt)  
> 📊 **Project Roadmap:** [Public Jira Board](https://financialdashboard.atlassian.net/jira/polaris/projects/AL/ideas/view/11032328)   
> 🎨 **Design System:** [Figma Prototype](https://www.figma.com/make/g5uKbIVnK0r0opWnH4zHPL/Dashboard-para-A%C3%A7%C3%B5es-e-Crypto?fullscreen=1&t=BDtjpW5Mlsvl209O-1)

---

## 🚀 The Architecture
The project follows a **Monorepo** strategy managed by **Deno 2.0 Workspaces**, ensuring maximum code sharing and type safety between the frontend and backend.

### 🛠 Tech Stack
* **Runtime:** [Deno 2.0](https://deno.com/) (Backend) & Node.js (Frontend)
* **Frontend:** [Next.js 15](https://nextjs.org/) with **React Compiler**
* **Backend:** [Hono](https://hono.dev/) (Ultrafast web framework for the Edge)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) with **Glassmorphism** UI principles
* **Infrastructure:** Vercel (Frontend) & Deno Deploy (Backend)
* **API Integration:** Alpha Vantage (Real-time Market Data)

---

## 🧠 Why Deno 2.0 + Hono?
Unlike traditional Node.js setups, this project leverages **Deno 2.0** for:
* **Native TypeScript Support:** No complex build steps for the backend.
* **Edge Runtime:** The Hono API runs on Deno Deploy's global edge network, resulting in near-zero latency.
* **Security by Default:** Fine-grained control over network and file system permissions.

---

## 📋 Project Management (Agile)
This repository is the technical execution of a documented product lifecycle:
* **Product Discovery:** Managed via **Jira Product Discovery** to prioritize features based on value and effort.
* **Agile Workflow:** Sprint planning, task estimation (Story Points), and automated GitHub-Jira integration.
* **Documentation:** Technical specs and Product Requirements Documents (PRD) hosted on **Confluence**.

---

## 📂 Project Structure
```text
.
├── apps/
│   ├── frontend/       # Next.js 15 Application
│   └── backend/        # Hono API (Deno 2.0)
├── packages/
│   └── shared/         # Shared TypeScript types & Zod schemas
├── deno.json           # Workspace configuration
└── .gitignore          # Monorepo-wide ignore rules

## ⚙️ Setup & Installation

**Prerequisites:**
* [Deno 2.0+](https://deno.com/)
* [Node.js 20+](https://nodejs.org/)
```
## 1. **Clone the repository:**
   ```bash
   git clone [https://github.com/TEU_UTILIZADOR/alpha-finance.git](https://github.com/TEU_UTILIZADOR/alpha-finance.git)
   cd alpha-finance
  ```
## 2.Install Dependencies:
 ```bash
   deno install
  ```
## 3.Environment Variables: Create a .env file in apps/backend and apps/frontend with your Alpha Vantage API Key
 
## Run Development Mode:
 ```bash
 deno task dev:backend
  ```
 ```bash
 deno task dev: frontend
  ```



  
