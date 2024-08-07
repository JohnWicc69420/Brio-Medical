<script>
    import Navbar from "./components/Navbar.svelte";
  import Care from "./components2/Care.svelte";
  import Approach from "./components2/Approach.svelte";
  import PH from "./components2/PH.svelte";
  import Treat from "./components2/Treat.svelte";
  import Stories from "./components2/Stories.svelte";
</script>

<div class="homeContainer">
	<div class="video">
	<video src="/videoplayback.mp4" autoplay muted loop></video>
    </div>
	<Navbar />
	<h1 class="ff title">Welcome to Brio-Medical &#45; Where Healing Begins</h1>
	<p class="p">Discover An Integrative & Holistic Approach To Cancer Care</p>
	<p class="p2">Brio-Medical is the premier integrative cancer clinic in North America, dedicated to providing comprehensive and personalized care to patients with all types of cancer at all stages. At Brio-Medical, each patient's care plan is designed to evaluate their unique condition and develop a personalized treatment plan. Our team of experienced integrative physicians, holistic specialists, and mind-body therapists worked closely with patients to implement a holistic, multidimensional healing approach.</p>
	<div class="buttons">
		<div class="about">
			<a href="#/about">
			About Us
		</a>
		</div>
		<div class="line"></div>
		<div class="call">
			<p>GIVE US A CALL: </p>
			<p>1-866-379-8381</p>
		</div>
	</div>
</div>

<Care />
<Approach />
<PH />
<Treat />
<Stories />


<style>

	a{
		text-decoration: none;
		color: #f6f6f6;
		font-weight: 400;
	}

	.call{
		font-weight: 600;
	}
	.about{
		background-color: rgb(0, 235, 211);
		padding: 15px 50px;
		font-size: 1.2rem;
		cursor: pointer;
		border-radius: 10px;
	}
	.line{
		width: 1px;
		height: 60px;
		background-color:  #b7b7b7;
	}
	.buttons{
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 40px;
		gap: 30px;
		color: #f6f6f6;
	}
	.p2{
		color: #d5d5d5;
		padding: 20px 0px;
		text-align: center;
	}
	.title{
		color: white;
		font-weight: 400;
		font-size: 4rem;
		text-align: center;
	}

	.p{
		
		font-size: 1.4rem;
		text-align: center;
		color: #f6f6f6;
	}
	.homeContainer{
		position: relative;
		padding: 0px 40px;
		margin-bottom: 140px;
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -5;
		width: 100%;
	}
</style>