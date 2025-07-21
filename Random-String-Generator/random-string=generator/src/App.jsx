import React, { useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [inputValue, setInputValue] = useState(8);
  const [result, setResult] = useState("");
  const [warning, setWarning] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const captureValue = (e) => {
    const value = Number(e.target.value);
    if (value > 50) {
      setWarning("Maximum length allowed is 50.");
      setInputValue(50);
    } else {
      setWarning("");
      setInputValue(value);
    }
  };

  useEffect(() => {
    setLength(inputValue);
  }, [inputValue]);

  const generateRandomString = () => {
    let characters = "";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()-_=+[]{};:,.<>?";

    if (!characters) {
      setWarning("Please select at least one character set.");
      return;
    }

    let randomStr = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomStr += characters[randomIndex];
    }

    setResult(randomStr);
    setWarning("");

    setHistory((prev) => {
      const updated = [randomStr, ...prev];
      return updated.slice(0, 5);
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen flex items-center justify-center p-4 transition-colors duration-300`}>
      <div className="w-full max-w-xl rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 transition-all duration-300">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-2xl font-semibold">
            🔐 <span>Random String Generator</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:ring-2 ring-offset-2 ring-blue-400 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Input + Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            min="1"
            max="50"
            value={inputValue}
            onChange={captureValue}
            placeholder="Length (max 50)"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />

          <div className="flex flex-col space-y-1 text-sm">
            <label><input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" /> Uppercase</label>
            <label><input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" /> Lowercase</label>
            <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" /> Numbers</label>
            <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" /> Symbols</label>
          </div>
        </div>

        {warning && <p className="text-red-500 text-sm mb-2">{warning}</p>}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <button
            onClick={generateRandomString}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Generate
          </button>

          <button
            onClick={copyToClipboard}
            disabled={!result}
            className={`w-full py-2 rounded-lg transition ${
              result ? "bg-gray-700 hover:bg-gray-800 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Copy to Clipboard
          </button>
        </div>

        {/* Result */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center font-mono text-lg break-all min-h-[50px] text-gray-900 dark:text-white mb-4">
          {result || "Your generated string will appear here."}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="text-sm mb-2">
            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold">🕓 Recent Strings</h2>
              <button
                onClick={clearHistory}
                className="text-red-500 hover:underline text-xs"
              >
                Clear History
              </button>
            </div>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-700 dark:text-gray-300">
              {history.map((str, index) => (
                <li key={index} className="break-words">{str}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer with personal touch */}
        <div className="text-xs text-center text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700 mt-6 space-y-1">
          <p>© {new Date().getFullYear()} • Built with ❤️ using React + Tailwind CSS</p>
          <p>🔧 Made by <span className="font-semibold text-blue-500 dark:text-blue-400">Ark</span><br /><hr></hr><br></br><span className="font-semibold text-blue-500 dark:text-blue-400"><a href="https://github.com/Ark-Barua">Visit Github For More Projects</a></span></p>
          <p>💡 Suggested by <span className="font-semibold text-purple-500 dark:text-purple-400"><a href="https://codexintern.in/">CodexIntern</a></span></p>
        </div>

      </div>
    </div>
  );
}

export default App;
