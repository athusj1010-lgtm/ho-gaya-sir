// src/components/Settings.tsx

import { useState } from "react";

export default function Settings() {
  const [dark, setDark] = useState(true);
  const [voice, setVoice] = useState("Male");

  return (
    <div className="settings-panel">

      <h2>Settings</h2>

      <div className="setting">

        <label>Theme</label>

        <button
          className="toggle-btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? "🌙 Dark" : "☀ Light"}
        </button>

      </div>

      <div className="setting">

        <label>Voice</label>

        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
        >
          <option>Male</option>
          <option>Female</option>
        </select>

      </div>

      <div className="setting">

        <label>Language</label>

        <select defaultValue="English">
          <option>English</option>
          <option>Hindi</option>
          <option>Hinglish</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Japanese</option>
        </select>

      </div>

    </div>
  );
}