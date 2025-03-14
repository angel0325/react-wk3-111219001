function Header(){


return(
    <header className="header">
    <div className="logo">
      <img src="images/11zon_cropped.png" alt="Inside Out Logo"/>
    </div>
    <div className="title">INSIDE OUT 2</div>
    
    <nav className="nav">
        <a href="#" ></a>
        <a href="login.html" class="nav-link">Login</a>
      <div className="search-container">
        <input 
          type="text" 
          id="search-box" 
          placeholder="Search"
          autocomplete="off"
        />
        <div id="dropdown" className="dropdown hidden">
          <div className="recent-searches">
            <strong>Recent Searches</strong>
            <p>No recent searches</p>
          </div>
          <hr />
          <div className="trending-searches">
            <strong>Trending searches</strong>
            <p>Cars</p>
            <p>Inside Out 2</p>
            <p>Credits</p>
            <p>Woody</p>
            <p>Cars 2</p>
            <p>Joy</p>
          </div>
        </div>
      </div>
    
      <script src="script.js"></script>
    </nav>
  </header>
)
}
export default Header;