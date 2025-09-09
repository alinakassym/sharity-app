# My App Draft

A **React + Vite** boilerplate project. This repository serves as a **foundation** for future applications — pre-configured and ready to use, so you can focus on business logic instead of setup.

## Tech Stack

- ⚛️ **React** + **Vite**  
- 📘 **TypeScript**  
- 🎨 **ESLint** + **Prettier** (configured with auto-format on save) 
- 📂 **Redux Toolkit** state management  
- 🌗 Light/Dark theme support  
- 📱 Ready-to-use component & slice structure  

---

## Installation & Running

### 1. Clone the repository
```bash
git clone git@github.com:alinanigman/my-app-draft.git
cd my-app-draft
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in development
```bash
npm start
# or
npx expo start
# with cache clean
npx expo start -c
```

📱 **Expo Go**: scan the QR code from the terminal using your phone’s camera (with Expo Go installed).  

---

## OTA Updates via EAS Update

**Authentication & project initialization:**
```bash
eas login
eas init
```

**Send an update:**
```bash
eas update --branch main --message "feat: first OTA update"
```

---

## Commit Style

We follow **Conventional Commits**:

- `feat: ...` — new feature  
- `fix: ...` — bug fix  
- `chore: ...` — infrastructure/config updates  
- `docs: ...` — documentation changes  
- `refactor: ...` — code refactoring without changing logic  

---

## Project Structure

```
src/
 ├── app/            # App initialization
 ├── features/       # Redux slices & feature modules
 ├── shared/         # Reusable components & utils
 ├── assets/         # Static resources
 └── index.tsx       # Entry point
```

---

## Purpose

This repository is a **starter template** for new applications.  
It provides a clean and ready-to-go setup so you can start coding features immediately.
