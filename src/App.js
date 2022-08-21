import logo from './logo.svg';
import './App.css';
import Gallery1 from './components/Gallery-1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <style>{'body { background-color: #282c34; }'}</style>
      </header>
      <body className="App-body"> 
        <Gallery1 src="Hobbies-resize.png" src1="Hobbies-resize.png" src2="Hobbies-resize.png"></Gallery1>
      </body>
      <footer className="App-footer">
        <div className="App-footer-text">
          Copyright &copy; Nicolas Cartes
        </div>
      </footer>
    </div>
  );
}

export default App;
