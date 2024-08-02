
<div class="vidContainer">
    <div class="video">
    <div class="container">
        <img src="/images/Brio-Medical-Scottsdale-Arizona-Favicon-1949x2048.png" alt="">     
        <p class="title">Brio&#45;Medical Cancer Clinic</p>
        <p class="info">#1 Integrative Cancer Treatment Center in North America</p>
    </div>
    <video src="/videoplayback.mp4" autoplay muted loop></video>
</div>
</div>

<style>

.vidContainer {
    overflow: hidden;
}
  .video {
    position: relative;
    overflow: hidden;
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    height: 100%;
  }
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 10px;
    z-index: 10;
    top: 50px;
  }

  p{
    z-index: 12;
    color: azure;
  }

  .title{
    font-size: 2.6rem;
    margin: 15px 0px;
  }

  .info{
    text-align: center;
    font-size: 1.5rem;
  }

  img {
    height: 100px;
  }

  @media (min-width: 1000px){
    .container {
    top: 140px;
  }

  .title{
    font-size: 3.6rem;
    margin: 35px 0px;
  }

  .info{
    text-align: center;
    font-size: 2rem;
  }
  
  img {
    height: 200px;
  }
  }

  @media (max-width: 700px){
    .container {
    top: 25px;
  }

  .title{
    font-size: 1.6rem;
    margin: 5px 0px;
  }

  .info{
    text-align: center;
    font-size: 1rem;
    padding: 0px 20px;
  }
  
  img {
    height: 70px;
  }
  }


  .video::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    pointer-events: none;
  }

  video {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 0; /* Place below the overlay */
  }
</style>