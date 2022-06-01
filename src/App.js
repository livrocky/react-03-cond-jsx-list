import './App.css';
import Card from './components/Card';
import Header from './components/Header';

const colors = ['red', 'green', 'blue', 'magenta', 'red'];
// key = unikali reiksme atskirti viena el nuo kito
function App() {
  const isLoggedIn = false;
  const userAge = 50;
  return (
    <div className='App'>
      <Header />
      <Card dark />
      <Card />
      <br />
      <button>Hello {isLoggedIn ? 'Mike, Logout' : 'Login'}</button>

      <h2>UserAge: {userAge}</h2>
      {isLoggedIn ? <h1>Heloo Admin</h1> : <h1>Heloo User</h1>}
      {userAge >= 18 && userAge < 65 && (
        <div>
          <h2>He is an Adult</h2>
          <p>From Kaunas</p>
        </div>
      )}
      {userAge < 18 && <h2>He is Teenager</h2>}
      {userAge >= 65 && <h2>He is Wise</h2>}

      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>{color}</li>
        ))}
      </ul>
      <ul>
        {colors.map((color, idx) => {
          if (color === 'red') {
            return <li key={idx}>Raudona</li>;
          }
          return <li key={idx}>{color}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;