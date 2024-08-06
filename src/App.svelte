<script>
	import Router from 'svelte-spa-router';
	import {routes} from './routes'
	import Header from './components/Header.svelte';
	import Navbar from './components/Navbar.svelte';
	import PreFooter from './components/PreFooter.svelte';
	import Footer from './components/Footer.svelte';
	import Chatbot from './components/Chatbot.svelte'
</script>

<Header />
<Navbar />
<Router {routes}/>
<PreFooter />
<Footer />
<Chatbot />