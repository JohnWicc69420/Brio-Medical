<script>
	import Router from 'svelte-spa-router';
	import {routes} from './routes'
	import PreFooter from './components2/PreFooter.svelte';
</script>

<Router {routes}/>
<PreFooter />