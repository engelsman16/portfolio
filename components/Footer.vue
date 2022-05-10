<template>
  <div class="footer-basic">
    <footer class="footer-container">
      <div class="socials">
        <a target="_blank" href="https://github.com/engelsman16" class="social"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a target="_blank" href="https://www.instagram.com/teunengels/" class="social instagram"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a target="_blank" href="mailto:jemoeder@nobitchen.nl" class="social"
          ><i class="fa-solid fa-envelope"></i
        ></a>
      </div>
      <p class="copyright">
        Made with <i class="fa-solid fa-heart"></i> &copy; {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<style scoped>
  .footer-basic {
    height: 11rem;
  }

  .footer-container {
    padding-bottom: 5rem;
  }

  .socials {
    text-align: center;
    padding-bottom: 15px;
  }

  .social {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    margin: 0 8px;
    color: inherit;
    color: #dadada;
    transition: 0.3s ease;
  }

  .social:hover {
    color: #373737;
  }

  .copyright {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0;
  }
</style>