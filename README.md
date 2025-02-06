# Next.js + Tauri

This template helps you get started with **Next.js** and **Tauri** for building cross-platform desktop applications using **Rust** and **React**.

## 📌 Features
- **Tauri Integration**: Leverage Rust for performance and system-level access.
- **Next.js**: Server-side rendering, API routes, and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Prettier & ESLint**: Code formatting and linting.
- **Tauri Plugins**: Clipboard, Dialog, File System, Global Shortcuts, HTTP, Notifications, OS, Process, and Shell support.

## 🛠 Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/)
- [Tauri VS Code Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [Rust Analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## 🚀 Getting Started
### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Run Development Mode
```sh
npm run tauri:dev
```

### 3️⃣ Build for Production
```sh
npm run tauri:build
```

## 📂 Project Structure
```
.
├── src/                # Next.js project source
├── src-tauri/          # Tauri Rust codebase
├── package.json        # Project dependencies & scripts
├── tailwind.config.js  # TailwindCSS configuration
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
└── README.md           # Project documentation
```

## 📜 Scripts
```json
"scripts": {
  "tauri:dev": "next dev src",
  "tauri:build": "next build src",
  "tauri:start": "next start src",
  "next:dev": "next dev src",
  "next:build": "next build src",
  "next:start": "next start src",
  "next:lint": "next lint src",
  "clippy": "cargo clippy --manifest-path ./src-tauri/Cargo.toml",
  "format": "prettier --check \"src/**/*.{js,jsx,ts,tsx}\"",
  "format:fix": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\""
}
```

## 🧩 Dependencies
### ✅ Main Dependencies
- **Next.js** `^15.1.6`
- **React** `^19.0.0`
- **Tauri API** `^2.2.0`
- **Tailwind CSS** `^4.0.0`

### 🛠 Development Dependencies
- **ESLint** `^9`
- **Prettier** `3.4.2`
- **TypeScript** `^5`
- **Tauri CLI** `^2.2.7`

## 📌 License
This project is licensed under the **MIT License**.

---
💡 **Happy Coding! 🚀**

