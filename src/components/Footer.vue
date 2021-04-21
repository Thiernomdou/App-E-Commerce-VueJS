<template>
  <div id="footer" class="text-center">
      <div class="container">
            <div class="brand"><h1><span>D</span>IALLO <span>T</span>hierno <span>M</span>amadou</h1></div>
            <h2>Ingénieur des Sytèmes d'Information</h2>
            <div class="social-icon">
                <div class="social-item">
                <a href="https://www.linkedin.com/in/thierno-mamadou-diallo-b351a9198/" target="_blank"><img :src="require('@/assets/img/linkedin.svg')" alt="social-media"></a>
                </div>
                <div class="social-item">
                <a href="https://twitter.com/thierno71889519" target="_blank"><img :src="require('@/assets/img/twitter.svg')" alt="social-media"></a>
                </div>
                <div class="social-item">
                <a href="https://www.instagram.com/_thiernod/" target="_blank"><img :src="require('@/assets/img/instagram.svg')" alt="social-media"></a>
                </div>
                <div class="social-item">
                <a href="https://www.facebook.com/diallo.thiernomamadou.54" target="_blank"><img :src="require('@/assets/img/facebook.svg')" alt="social-media"></a>
                </div>
            </div>
      </div>
      <p>Copyright © 2020 Thierno. All rights reserved</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
	background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
#footer .footer {
	min-height: 200px;
	flex-direction: column;
	padding-top: 50px;
	padding-bottom: 10px;
}
#footer h2 {
	color: white;
	font-weight: 500;
	font-size: 1.8rem;
	letter-spacing: .1rem;
	margin-top: 10px;
	margin-bottom: 10px;
}
#footer .social-icon {
	display: flex;
    justify-content: center;
    align-items: center;
	margin-bottom: 30px;
}
#footer .social-item {
	height: 50px;
	width: 50px;
	margin: 0 5px;
}
#footer .social-item img {
	filter: grayscale(1);
	transition: .3s ease filter;
}
#footer .social-item:hover img {
	filter: grayscale(0);
}
#footer p {
	color: white;
	font-size: 1.3rem;
}

</style>