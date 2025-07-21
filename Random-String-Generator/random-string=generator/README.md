# Random String Generator

A **React** web app for generating customizable random strings—ideal for passwords, tokens, or unique codes. Features options to select character sets (uppercase, lowercase, numbers, symbols), set string length, toggle dark mode, and maintain a history of recent generations.

## Features

- **Custom Length:** Choose a length for your string (1-50 characters; max 50).
- **Character Set Selection:**
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*()-_=+[]{};:,.<>?)  
- **Dark Mode:** Toggle dark/light theme for comfort.
- **Copy to Clipboard:** Copy generated string instantly.
- **Generation History:** See your last 5 generated strings.
- **Built with:** React + Tailwind CSS

## Demo

![App Screenshot with actual screenshot if available)*

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6+) or yarn

### Installation

```bash
git clone 
cd 
npm install # or yarn install
```

### Running the App

```bash
npm start # or yarn start
```
App will be served at `http://localhost:3000`.

## Usage

1. Set desired **length** (max: 50).
2. Toggle options for **uppercase**, **lowercase**, **numbers**, **symbols**.
3. Click **Generate** to create random string.
4. Click **Copy** to copy the result.
5. Review your last 5 generated strings in history; use **Clear History** to reset.

> **Note:** At least one character set must be selected to generate a string.

## Code Overview

All main logic is inside `App.jsx`:

- **State management:** Uses React `useState` and `useEffect`.
- **Input validation:** Limits string length to 50 with warnings.
- **Random generation:** Builds a pool based on selected options and picks randomly for each character[1].
- **Clipboard:** Simple browser clipboard API for copying[1].
- **History:** Stores last 5 generations, oldest auto-removed[1].
- **Dark mode:** Controlled via React state.

## Credits

- **Developer:** Ark  
- **Idea by:** CodexIntern  
- **Built with:** React, Tailwind CSS

## License

MIT. See [LICENSE](LICENSE).

\*Replace placeholders (like `` and screenshot) with real values as needed.  
\*For bug reports or feature requests, submit an issue or pull request.

[1]

[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/47989688/6a4ea034-2c41-401f-8dd8-1c919c2a472b/App.jsx