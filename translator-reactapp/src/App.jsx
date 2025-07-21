import { useState } from "react";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const captureText = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const captureOption = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

  const convertText = async () => {
    const options = {
      method: "POST",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
      headers: {
        "x-rapidapi-key": "65caa54dc5msh226b066265c7ea7p180575jsn65f906ade161",
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        from: "auto",
        to: language,
        text: inputText,
      },
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.trans);
    } catch (error) {
      setTranslatedText("Translation failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-gradient-to-br from-[#cce2ff] via-[#f0d9ff] to-[#ffd6e0] backdrop-blur-sm">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-12 drop-shadow fade-in">
        Translator - React Application
      </h1>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-5xl">
        {/* Input Box with Glass Effect */}
        <input
          type="text"
          value={inputText}
          onChange={captureText}
          placeholder="Type something..."
          className="flex-1 px-6 py-4 rounded-2xl shadow-xl bg-white/30 border border-white/40 backdrop-blur-lg text-gray-900 text-lg placeholder-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Dropdown */}
        <select
          value={language}
          onChange={captureOption}
          className="px-5 py-3 rounded-2xl bg-white/30 text-gray-800 border border-white/40 shadow-xl backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-base transition-all"
        >
          <option value="">Select Language</option>
          <option value="af">Afrikaans</option>
          <option value="ar">Arabic</option>
          <option value="bn">Bengali</option>
          <option value="bg">Bulgarian</option>
          <option value="zh">Chinese (Simplified)</option>
          <option value="hr">Croatian</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="et">Estonian</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="gu">Gujarati</option>
          <option value="he">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hu">Hungarian</option>
          <option value="id">Indonesian</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="kn">Kannada</option>
          <option value="ko">Korean</option>
          <option value="lv">Latvian</option>
          <option value="lt">Lithuanian</option>
          <option value="ml">Malayalam</option>
          <option value="mr">Marathi</option>
          <option value="ne">Nepali</option>
          <option value="no">Norwegian</option>
          <option value="pa">Punjabi</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sr">Serbian</option>
          <option value="si">Sinhala</option>
          <option value="sk">Slovak</option>
          <option value="es">Spanish</option>
          <option value="sv">Swedish</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="tr">Turkish</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="vi">Vietnamese</option>
        </select>

        {/* Button */}
        <button
          onClick={convertText}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
        >
          Translate
        </button>
      </div>

      {/* Output Box */}
      <div className="w-full max-w-5xl p-5 min-h-[120px] bg-white/30 border border-white/40 text-xl text-gray-800 mt-10 rounded-2xl shadow-2xl backdrop-blur-md fade-in transition-all">
        {translatedText || "Translation output will appear here..."}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-700 text-sm opacity-80">
        <p>
          Coded with ❤️ by{" "}
          <span className="font-semibold text-blue-400">Ark Barua</span>
        </p>
        <p>A project suggested By <strong><i><a href="https://codexintern.in/" className="text-blue-400">CODEXINTERN</a></i></strong></p>
      </footer>
    </div>
  );
}

export default App;
