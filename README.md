# 📝 React + Vite Text Case Converter

A modern, fast, and SEO-optimized Text Case Converter web application built with **React**, **Vite**, and **Tailwind CSS**.

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## ✨ Features

This application provides instant, client-side text transformations without needing a backend server:
* **Sentence case:** Converts text to a standard sentence format.
* **lower case:** Converts all characters to lowercase.
* **UPPER CASE:** Converts all characters to uppercase.
* **Title Case:** Capitalizes the first letter of each major word.
* **Capitalize Each Word:** Capitalizes the first letter of every single word.
* **Copy to Clipboard:** One-click copy with temporary visual feedback.
* **Download as .txt:** Export the converted text directly to a local file.
* **Clear Input:** Instantly reset the text area.

## 🚀 Tech Stack

* **Frontend Library:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Deployment target:** Vercel / Netlify
* **Reverse Proxy:** Cloudflare Workers (for subpath deployment)

## 🛠️ Run Locally

This contains everything you need to run the app locally.

**Prerequisites:** * Node.js installed on your machine.

**Installation Steps:**

1. Clone the repository and navigate to the project directory.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000/case-converter](http://localhost:3000/case-converter) with your browser to see the result.

## 🌐 Deployment Strategy (Subpath Routing)

This application is designed to be hosted on platforms like Vercel but served under a main domain's subpath (e.g., `yourdomain.com/case-converter`) to maximize SEO benefits.

1. Configure the `base` property in `vite.config.ts` to match your subpath (e.g., `base: '/case-converter/',`).
2. Deploy the Vite app to Vercel (Vercel will automatically detect Vite and run the build command).
3. Set up a **Cloudflare Worker** as a reverse proxy on the main domain to fetch the Vercel deployment transparently.

---
*Developed by Abdul Aziz Ahwan* | [abdulazizahwan.com](https://abdulazizahwan.com)