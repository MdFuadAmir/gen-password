import { useState } from "react";
import { FaCopy, FaLock } from "react-icons/fa";
import logo from "../assets/pass.png";
const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const generatePassword = () => {
    let chars = "";
    if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) chars += "0123456789";
    if (options.symbols) chars += "!@#$%^&*()_+[]{}<>?";

    if (!chars) {
      alert("Select at least one option!");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="
          w-full max-w-md
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl
          shadow-2xl
          p-6
          text-white
        "
      >
        <img src={logo} alt="" className="w-44 h-44 mx-auto" />
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FaLock className="text-red-400" />
          Password Generator
        </h1>
        {/* Password Display */}
        <div className="flex items-center mb-5 rounded-xl overflow-hidden border border-white/20 bg-black/30">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Generated password"
            className="
              flex-1 px-4 py-3 bg-transparent
              text-white placeholder-gray-400
              outline-none
            "
          />
          <button
            onClick={copyPassword}
            className="
              px-4 py-3
              text-gray-300 hover:text-red-400
              transition
            "
          >
            <FaCopy />
          </button>
        </div>
        {/* Length */}
        <div className="mb-5">
          <label className="flex justify-between text-sm mb-2">
            <span>Password Length</span>
            <span className="font-semibold text-red-400">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-red-500"
          />
        </div>
        {/* Options */}
        <div className="space-y-3 mb-6 text-sm">
          {[
            { key: "uppercase", label: "Include Uppercase Letters" },
            { key: "lowercase", label: "Include Lowercase Letters" },
            { key: "numbers", label: "Include Numbers" },
            { key: "symbols", label: "Include Symbols" },
          ].map((opt) => (
            <label
              key={opt.key}
              className="
                flex items-center justify-between
                bg-white/5
                px-4 py-2
                rounded-lg
                border border-white/10
              "
            >
              <span>{opt.label}</span>
              <input
                type="checkbox"
                checked={options[opt.key]}
                onChange={() =>
                  setOptions({ ...options, [opt.key]: !options[opt.key] })
                }
                className="accent-red-500 w-4 h-4"
              />
            </label>
          ))}
        </div>
        {/* Button */}
        <button
          onClick={generatePassword}
          className="
            w-full py-3 rounded-xl
            bg-linear-to-r from-red-500 to-red-700
            hover:from-red-600 hover:to-red-800
            font-semibold
            tracking-wide
            shadow-lg
            transition
          "
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
