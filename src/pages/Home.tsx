import Header from "../components/Header";
import Chat from "../components/Chat";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className="app">
      <Background />
      <Header />
      <Chat />
    </div>
  );
}