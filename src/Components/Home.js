import React from 'react'

function Home() {
  return (
    <>
    <div className=' my-5 py-3 zIndex'>
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
           
            <img src="assets/survey.png" className="d-block w-50" alt="ABAYA" height="500px" />
            {/* "La Coupe d'Afrique de football est l'un des événements sportifs les plus attendus sur le continent. 
            À l'approche du tournoi, nous aimerions connaître vos attentes, prédictions et opinions concernant cette compétition passionnante. 
            Participez à notre sondage pour partager votre passion pour le football africain et exprimer vos sentiments avant le coup d'envoi de la Coupe d'Afrique.
             Vos réponses contribueront à former un tableau diversifié des attentes des amateurs de football en Afrique et dans le monde entier. 
             Que vous souteniez une équipe spécifique ou que vous anticipiez des moments mémorables, nous sommes impatients de découvrir ce que vous pensez de la prochaine Coupe d'Afrique de football."
             */}
          </div>
          <div className="carousel-item">
            <img src="assets/survey.png" className="d-block w-50" alt="ABAYA" height="500px"/>
          </div>
          <div className="carousel-item">
            <img src="assets/survey1.png" className="d-block w-50" alt="ABAYA" height="500px"/>
          </div>
          <div className="carousel-item">
            <img src="assets/survey.png" className="d-block w-100" alt="ABAYA" height="500px"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
      </div>
    </>
  )
}

export default Home;