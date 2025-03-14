function index(){
    return(
        <>
     

        <main className="main-content">
          <div className="image-container">
            <img src="images/大合照.jpeg" alt="Inside Out 2 Poster"/>
          </div>
          <p className="description">
            A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.
          </p>
        </main>
        <div className="container">
          <div className="letter left ">R&nbsp;i</div>
          <div className="image">
              <img src="images/riley-removebg-preview.png" alt="Character"/>
          </div>
          <div className="letter right">e&nbsp;y</div>
        </div>
        <div className="button-container">
        <button onclick="location.href='second.html'">VIEW FULL</button>
      </div>
      <div className="video-section"> 
          <h2><em>Official Trailer</em> <span class="year"><em>2024</em></span></h2>
          <div className="video-wrapper">
              <iframe 
                  src="https://www.youtube.com/embed/vi2J3u45joQ?si=4BiapNDE7UoTSG9_" 
                  title="Official Trailer" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
              </iframe>
          </div>
          <p className="director">Directed by <span className="bold">Kelsey Mann</span></p>
      
      <button className="watchlist-button">
          <span className="star">⭐</span> ADD TO WATCHLIST
      </button>
      </div>
      
      
      
          </>
    )
}
export default index;
