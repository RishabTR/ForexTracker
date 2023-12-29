import { Link } from 'react-router-dom';





const Header = () => {
  return (
    <>

      <header className='header' >
        <img className='App-logo' src='https://img.freepik.com/premium-vector/power-fist-icon_618926-53.jpg' alt="logo"></img>
        <ul className='nav'>
          <li><Link to="/">Home</Link ></li>
          <li><Link to="/help">Help</Link ></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </header>
    </>

  );
}


export default Header;