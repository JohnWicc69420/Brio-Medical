<script>
    export let title
    export let info
    export let src
    import Navbar from "./Navbar.svelte";
</script>


<div class="homeContainer">
	<div class="video">
	<img src={src} alt=''>
    </div>
	<Navbar />
  <div class="container">
	<h1 class="ff title">{title}</h1>
  <p class="p">{info}</p>
</div>
</div>


<style>
     .homeContainer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(16, 125, 118, 0.6);
    transition: background-color 0.3s ease-in-out;
    z-index: -1;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
  margin-top: 50px;
}
	.title{
		color: white;
		font-weight: 400;
		font-size: 4rem;
		text-align: center;
	}

	.p{
		color: #f6f6f6;
		font-weight: 400;
		font-size: 1.4rem;
		text-align: center;
	}
	.homeContainer{
		position: relative;
		padding: 0px 40px;
    height: 650px;
    overflow: hidden;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -5;
		width: 100%;
	}
</style>