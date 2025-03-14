function footer(){

    return(
    <footer className="more-like-this"> 
      <h2>More Like This</h2>
      <div className="scroll-container">
      <div className="movie-card"><img src="images/Turning_Red_poster.jpg" alt="青春變形記"/></div>
      <div className="movie-card"><img src="images/Despicable_Me_4_poster.jpg" alt="神偷奶爸4"/></div>
      <div className="movie-card"><img src="images/IMG_9249_2-962294.webp" alt="超能陸戰隊"/></div>
      <div className="movie-card"><img src="images/小逗的日子.png" alt="汪汪日記"/></div>
      </div>
     
        <div className="follow-us">
      <h3>FOLLOW US</h3>
      <div class="icons">
          <span>📘</span>
          <span>📸</span>
          <span>✖️</span>
          <span>▶️</span>
      </div>
      </div>
      </footer>
    )
}
export default footer;