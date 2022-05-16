<template>
<section class="ProjectSection" id = "projects">
        <div class="ProjectText">
            <h1 class="ProjectTitle">Projects</h1>
        </div>
        <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-header">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
          </p>
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
          </p>
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
          </p>
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
          </p>
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>

.ProjectSection {
  text-align: center;
}

.ProjectText {
    color: #dadada;
}

.ProjectTitle {
    font-size: 7rem;
}

.fa-solid {
  color: #459CFF ;
  font-size: 3rem;
}
.container {
  width: 90%;
  margin: 50px auto;
  background-color: #373737;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

.card {
  width: 20%;
  background: #dadada;
  border: 2px solid #373737;
  margin-bottom: 50px;
  transition: 0.3s;
}

.card-header {
  text-align: center;
  padding: 50px 10px;
  background: #373737;
}

.card-body {
  padding: 30px 20px;
  text-align: center;
  font-size: 18px;
  background-color: #373737;
}

.card-body p{
  background-color: #373737;
  color: #dadada;
}

.card-body .btn {
  display: block;
  color: #dadada;
  text-align: center;
  background: #202020;
  margin-top: 30px;
  text-decoration: none;
  padding: 10px 5px;
  border-radius: 20px;
  border: 2px solid #202020;
}
.card-body .btn:hover {
  border: 2px solid #459CFF;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1000px) {
  .card {
    width: 40%;
  }
  .ProjectTitle {
    font-size: 5rem;
  }
}

@media screen and (max-width: 620px) {
  .container {
    width: 100%;
  }

  .heading {
    padding: 20px;
    font-size: 20px;
  }

  .card {
    width: 80%;
  }
  .ProjectTitle {
    font-size: 3rem;
  }
}

</style>