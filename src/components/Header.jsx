const navData = [
    { id: 1, to: '#home', text: 'Welcome' },
    { id: 2, to: '#about', text: 'About' },
    { id: 3, to: '#contact', text: 'Contact' },
  ];
  // sugeneruoti navigacija is navData
  
  function Header() {
    return (
      <header className='header'>
        <nav className='main-nav'>
          <a href={navData[0].to} className='navLink'>
            {navData[0].text}
          </a>
          <a href={navData[1].to} className='navLink'>
            {navData[1].text}
          </a>
          <a href={navData[2].to} className='navLink'>
            {navData[2].text}
          </a>
        </nav>
      </header>
    );
  }
  export default Header;