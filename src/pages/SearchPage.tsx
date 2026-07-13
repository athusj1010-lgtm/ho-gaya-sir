// src/pages/SearchPage.tsx

import { useState } from "react";

import { useChat } from "../hooks/useChat";

import { searchChats } from "../services/search";

export default function SearchPage() {
  const { chats } = useChat();

  const [query, setQuery] =
    useState("");

  const results = searchChats(
    chats,
    query
  );

  return (
    <div className="page">
      <h1>Search</h1>

      <input
        value={query}
        placeholder="Search..."
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      {results.map((chat) => (
        <div key={chat.id}>
          {chat.title}
        </div>
      ))}
    </div>
  );
}