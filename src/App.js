import './App.css';
import Page from './components/Page';
import Data from './components/Data';


function App() {
  const backgroundColor = ['bg-red', 'bg-maroon', 'bg-blue'];
  return (
    <>
    <div className='head-text'> KOMAL </div>
    <div className="App">
      <header className="App-header">
        {Data.map((value, index) => (
          <Page
            textt={value.text}
            photo={value.image}
            descriptionn={value.description}
            background={backgroundColor[index]}
          />
        ))}
      </header>
    </div>
    </>
  );
}

export default App;
