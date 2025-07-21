
# Translator - React Application

A beautiful and responsive language translator web application built using **React JS**, styled with **Tailwind CSS**, and powered by **Google Translate API** via **RapidAPI**.

---

## Features

- Translate text into **40+ global languages**
- **Modern UI** with **glassmorphism** and soft pastel gradients
- Built with **React Hooks (useState)** for seamless interactivity
- Integrated with **Axios** for API communication
- Smooth animations and responsive layout across devices
- Coded with ❤️ by **Ark Barua**

---

## Live Preview

> Deployed on **Vercel**
Click below to view the live working app:

**[Live Demo](https://codexintern-translator-reactapp.vercel.app)**

---

## 🔧 Technologies Used

- **React JS** (Functional Components + Hooks)
- **Tailwind CSS** (Utility-first modern styling)
- **Axios** (API request handling)
- **Google Translate API** (via RapidAPI)
- Deployed on **Vercel**

---

## How It Works

1. The user types a message into the input bar.
2. Selects the **target language** from a stylized dropdown.
3. Clicks on the **"Translate"** button.
4. The app uses Axios to send a POST request to the **Google Translate API**.
5. Translated text appears in a beautifully styled output box.

> Input is automatically detected as the source language (via `auto`), and translated into the selected language.

---

## Project Structure

```bash
translator-app/
│
├── public/
│   ├── appicon.png           # Custom favicon (optional)
│   └── index.html            # HTML wrapper
│
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React DOM rendering
│   └── index.css             # Tailwind CSS + custom styles
│
├── package.json              # Project metadata & dependencies
└── README.md                 # You're reading it now!
```

---

## Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/your-username/translator-app.git
cd translator-app
```

### Install Dependencies
```bash
npm install
```

### Start the Application
```bash
npm run dev
```

> Make sure to have **Node.js** and **npm** installed on your machine.

---

## API Configuration

> This app uses the **Google Translate API via RapidAPI**.

1. Create a free account at [https://rapidapi.com](https://rapidapi.com).
2. Subscribe to the [Google Translate API](https://rapidapi.com/robust-api-robust-api-default/api/google-translate113/playground/apiendpoint_1b635a2b-61fc-4798-9fe0-7142bccc868d).
3. Copy your API key.
4. Open `App.jsx` and **replace** the placeholder API key:

```js
headers: {
  "x-rapidapi-key": "YOUR_RAPIDAPI_KEY_HERE",
  ...
}
```

---

## UI Highlights

- **Gradient background** (soft pink to blue)
- **Glassmorphism** for input/output boxes
- Rounded **hover-animated button**
- Elegant custom **language dropdown**
- Footer includes:
  - `"Coded with ❤️ by Ark Barua"`
  - `"A project suggested by CODEXINTERN"`

---

## Languages Supported

Includes over 60 languages like:
English, Hindi, Bengali, Tamil, Telugu, Arabic, Spanish, French, Japanese, Korean, Chinese, Russian, Urdu, etc.

---

## Known Limitations

- No manual source-language selector yet (currently `from: "auto"`).
- No dark mode toggle (can be added as a bonus).
- Basic error handling (can be expanded for UX).

---

## Contact

**Made with ❤️ by Ark Barua**
> _Project suggested by [CODEXINTERN](https://codexintern.in/)_

---

![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=axios&logoColor=white)

---

## License

This project is open-source under the [**MIT License**](LICENSE).
Free to use, modify, and enhance for personal or commercial purposes.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---
