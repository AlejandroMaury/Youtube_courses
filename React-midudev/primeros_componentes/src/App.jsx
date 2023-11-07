import "./App.css";
import { TwitterCard } from "./components/TwitterCard";

function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <>
      <section className="tw-section">
        <TwitterCard
          formatUserName={formatUserName}
          userName="alejandromaury"
          name="Alejandro Arango"
        />

        <TwitterCard
          formatUserName={formatUserName}
          userName="jjaramillom"
          name="Jacobo Jaramillo"
        />

        <TwitterCard
          formatUserName={formatUserName}
          userName="midudev"
          name="Miguel Angel Duran"
        />
      </section>
    </>
  );
}

export default App;
