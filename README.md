# CodexInterns React Project Suite

This repository brings together three production-ready **React** applications, each designed to demonstrate modern web techniques and elegant interfaces using React, Tailwind CSS, and popular third-party libraries. These projects are ideal for learning, hackathons, or as professional portfolio starters.

## Projects Overview

| Project Name                | Description                                                                    | Key Tech            | Demo/Docs Section                |
|-----------------------------|--------------------------------------------------------------------------------|---------------------|----------------------------------|
| **1. Translator App**       | Translate text between 60+ languages with a beautiful glassmorphism UI.        | React, Tailwind, Axios, RapidAPI    | [Translator App](#1-translator---react-application)         |
| **2. Random String Generator** | Generate customizable random passwords/tokens with history and dark mode.        | React, Tailwind    | [Random String Generator](#2-random-string-generator)       |
| **3. React Router Starter** | A React SPA with router-powered navigation and a clean, modular file structure. | React, React Router | [React Router Starter](#3-react-router-starter-app)         |

## 1. Translator - React Application

A sleek and responsive **language translator web application** built using **React JS**, styled with **Tailwind CSS**, and powered by the **Google Translate API** via **RapidAPI**.

### Features

- Translate text into **60+ global languages**
- Modern glassmorphism UI with pastel gradients
- **React Hooks** for smooth interactivity
- Uses **Axios** for HTTP requests
- Responsive across devices
- Live deployment on Vercel

### Live Demo

[CodexIntern Translator Live](https://codexintern-translator-reactapp.vercel.app)
Random String Generator Live <- COMING SOON

### Technologies Used

- **React JS** (Functional Components, Hooks)
- **Tailwind CSS**
- **Axios**
- **Google Translate API** (via RapidAPI)
- **Vercel** (deployment)

### How It Works

1. Type a message in the input bar.
2. Select the target language from the stylized dropdown.
3. Click **Translate**.
4. The app sends a request via Axios to the Google Translate API.
5. The translated text is displayed in a styled output box.

_Source language is detected automatically._

### Project Structure

```
translator-app/
  public/
    appicon.png
    index.html
  src/
    App.jsx
    main.jsx
    index.css
  package.json
  README.md
```

### Installation & Setup

```bash
git clone https://github.com/your-username/translator-app.git
cd translator-app
npm install
npm run dev
```

**API Setup:**  
1. Create a [RapidAPI](https://rapidapi.com) account.  
2. Subscribe to the [Google Translate API](https://rapidapi.com/robust-api-robust-api-default/api/google-translate113/).  
3. Replace your RapidAPI key in `App.jsx` where indicated.

### Highlights & Limitations

- Glassmorphism, gradient background, and animated buttons
- Custom dropdown for language selection
- Footer credits: “Coded with ❤️ by Ark Barua”, “Project suggested by CODEXINTERN”
- Over 60 languages supported
- Limitations: Source-language auto-detect only, no dark mode yet, basic error handling

## 2. Random String Generator

A powerful **React app** for generating customizable random strings and passwords, ideal for secure tokens or codes.

### Features

- **Custom Length** input (1–50 chars)
- Choose character sets: Uppercase, Lowercase, Numbers, Symbols
- **Dark mode** toggle
- Copy to clipboard
- Last 5 generations are saved in history

### Screenshot

_Add your screenshot here!_

### Technologies

- **React**
- **Tailwind CSS**

### Installation

```bash
git clone https://github.com/your-username/random-string-generator.git
cd random-string-generator
npm install
npm start
```

### Usage

- Adjust **length** and toggle desired character sets.
- Click **Generate**.
- Copy result or clear history as needed.

#### Development Notes

- All main logic in `App.jsx`
- Uses React state, controlled inputs, and basic validation
- Maximum string length of 50
- Uses browser Clipboard API and local session state for history

### Credits

- Developed by Ark | Idea by CodexIntern

### License

MIT License

## 3. React Router Starter App

A production-ready **React SPA** featuring routing between Home, About, and Contact pages, with modular organization and robust navigation.

### Features

- **React Router v6** integration
- Multi-page navigation: Home, About, Contact
- **NotFound** fallback for unmatched routes
- Each page as a separate, modular component

### Structure

```
/src
  /pages
    Home.jsx
    About.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx
  index.js
```

### Installation

```bash
git clone https://github.com/your-username/react-router-starter.git
cd react-router-starter
npm install
npm start
```
Access at `http://localhost:3000`

### Sample App.jsx Setup

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
        Home
        About
        Contact
        } />
        } />
        } />
        } />  
  );
}
export default App;
```

### Customization

- Add or replace pages in `/pages`
- Extend router setup for additional navigation routes

## General Instructions

- **All apps:**  
  - Require **Node.js (v14+)** and **npm** or **yarn**
  - To run: `npm install` then `npm start` or `npm run dev` (per project `README.md`)
- **Replace** placeholder links and names as appropriate for your deployment!

### License

All projects are open-source under the **MIT License**. See each directory for details.

**Built for CodexInterns | Developed by Ark Barua**  
*Inspire. Learn. Ship together.*
