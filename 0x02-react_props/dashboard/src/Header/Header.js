import logo from './assets/holberton-logo.jpg';
import 'Header.css';
function Header(){
    return(
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
    </div>
    )
    ;
}
export default Header;