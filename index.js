// ReactDOM.render = allows us to render something to the screen:
// What do i want to render (<h1>....</h1>) and where do i want it (document.getElementById)

ReactDOM.render(
  <p>Always take Lamela with you everywhere you go!</p>,
  document.getElementById("root")
);
ReactDOM.render(
  <p>Hello! Hello! We are the Tottenham boys!</p>,
  document.getElementById("chant2")
);

ReactDOM.render(
  <ul>
    <li>Pape Matar Sarr</li>
    <li>Richarlison</li>
  </ul>,
  document.getElementById("list1")
);

// React is better than vanilla JS which is alot more code (see below JS example)
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);

// if i wanted to add a className to react:
ReactDOM.render(
  <h2 className="subheader">North London is ours!</h2>,
  document.getElementById("root")
);

// JSX - JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));

const nav = (
  <nav>
    <h1>EPL stats 2023/2024</h1>
    <ul>
      <li>Standings</li>
      <li>Top Goalscorers</li>
      <li>Top Assists</li>
    </ul>
  </nav>
);
ReactDOM.render(nav, document.getElementById("root"));

const navbar = (
  <nav>
    <h1>EPL Top scorers</h1>
    <ol>
      <li>Erling Haaland</li>
      <li>Cole Palmer</li>
      <li>Alexander Isak</li>
      <li>Ollie Watkins</li>
    </ol>
  </nav>
);
ReactDOM.render(navbar, document.getElementById("chant2"));

const navbar2 = (
  <nav>
    <h1>PL Top assists</h1>
    <ol>
      <li>Ollie Watkins</li>
      <li>Cole Palmer</li>
      <li>Mohamed Salah</li>
      <li>Anthony Gordon</li>
    </ol>
  </nav>
);
ReactDOM.render(navbar2, document.getElementById("list1"));
