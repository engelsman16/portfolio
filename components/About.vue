<template>
    <section class="AboutSection" id="about">
        <div class="AboutText">
            <h1 class="AboutTitle">About</h1>
            <p class="AboutSubTitle">Hi I'm Teun Engels</p>
        </div>
    </section>
</template>

<style scoped>
.AboutSection {
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    z-index: 90;
    padding-top: 3rem;
}

.AboutText {
    color: #dadada;
}

.AboutTitle {
    font-size: 7rem;
}

.AboutSubTitle {
    font-weight: bold;
    font-size: 1.4rem;
    padding-top: 30px;
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
  border: 2px solid #459CFF;
  color: #459CFF;
}

</style>