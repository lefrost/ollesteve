<script lang="ts">
	// imports

	import { onDestroy, onMount } from 'svelte';
	import { Buffer } from 'buffer';
	import { page, navigating } from '$app/stores';

	import Header from '../components/Header.svelte';
	import * as api from '../assets/js/api';

	// vars

	let in_maintenance = false;
	let is_active = true;

	// mount

	onMount(async () => {
		window.Buffer = window.Buffer || Buffer;

		in_maintenance = in_maintenance && $page.url.searchParams.get(`mode`) !== `dev`;

		if (!in_maintenance) {
			if (!is_active) {
				is_active = true;
			}

			// await api.setSocket(socket);
			// await api.checkSesh();
		}
	});
</script>

<div class="container  stretch--  grow--  col--  col-centre--  layout">
	<Header />

	<slot />
</div>

<style lang="scss">
	@import '../assets/scss/all.scss';

	.layout {
		font-size: 12px;

		@media (min-width: $bp-sm) {
			font-size: 15px;
		}
	}
</style>
