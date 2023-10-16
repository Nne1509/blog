import "./App.css";
import writer from "./images/writer.jpg";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          The Article
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="draft">
        <img
          src={writer}
          alt="A person types on a laptop with their left hand and draws on a pad with their right at a table with a cup of coffee"
        />
        <h2>
          Cozzie-livs: The satirical glamorization of the rapid economic decline
          of the 2020s in a bid to cope
        </h2>
        <p>
          The world is suffering a cost of living crisis as inflation has surged
          and disposable incomes have been squeezed. The full impact on young
          adults has been highlighted by a new survey.
        </p>
      </div>
    </main>
  );
}

export default App;
