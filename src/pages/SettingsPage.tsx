// src/pages/SettingsPage.tsx

import { useSettings } from "../context/SettingsContext";

export default function SettingsPage() {
  const { settings } =
    useSettings();

  return (
    <div className="page">
      <h1>Settings</h1>

      <pre>
        {JSON.stringify(
          settings,
          null,
          2
        )}
      </pre>
    </div>
  );
}