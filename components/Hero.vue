<template>
  <section class="HeroSection">
    <div class="HeroText">
      <h1 class="HeroTitle">TEUN</h1>
      <p class="HeroSubTitle">        
        <vue-writer
          :array="[
            ' I can exit VIM... (sometimes)',
          ]"
          :typeSpeed="50"
          :eraseSpeed="50"
          :delay="3000"
        />
        </p>
      <div class="ButtonCollection">
        <a class="GitButton" href="https://github.com/engelsman16">
          <i class="fa-brands fa-github"></i>
        </a>
        <a class="LinkdinButton" href="https://www.linkedin.com/in/teun-engels-58b285223/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
    <div class="ScrollDiv">
          <a class="ScrollButton" href="#about" v-smooth-scroll><i class="fa-solid fa-arrow-down"></i></a>
    </div>
  </section>
</template>

<style>
.fa-solid {
  background-color: #373737;
}
.HeroSection {
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  z-index: 90;
}

.HeroText {
  color: #dadada;
}

.HeroTitle {
  font-family: 'SansCustom';
  font-size: 7rem;
  letter-spacing: 1.5rem;
}

.HeroSubTitle {
  font-weight: bold;
  font-size: 1.3rem;
  padding-top: 40px;
}

.ButtonCollection {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ButtonCollection a {
  margin: 0.8rem;
  text-decoration: none;
  color: #dadada;
  font-size: 1.4rem;
  transition: all 0.35s ease;
}

.ButtonCollection a:hover {
  color: #373737;
}

.ScrollDiv {
  display: flex;
  justify-content: center;
  width: 100%;
  position:absolute;
  bottom: 3rem;
}
.ScrollButton {
  font-weight: bold;
  font-size: 1.4rem;
  color: #dadada;
  background-color: #373737;
  transition: all 0.35s ease;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid #373737;
  padding: 0.3rem;
  border-radius: 15px 15px 15px 15px;
  width: 10rem;
}

.ScrollButton:hover {
  border: 2px solid #202020;
}
.is-typed span.cursor {
    display: inline-block;
    width: 3px;
    background-color: #464646;
    animation: blink 1200ms infinite;
  }

@keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
@media screen and (max-width: 1000px) {
.HeroTitle {
    font-size: 5rem;
}
.HeroSubTitle {
  font-size: 2rem;
}
}
@media screen and (max-width: 620px) {
  .HeroTitle {
    font-size: 3rem;
  }
  .HeroSubTitle {
    font-size: 1.1rem;
  }
}
</style>
