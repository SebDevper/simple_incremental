import { mount } from 'svelte';
import App from './App.svelte';

const target = document.getElementById('app');
if (!target) {
  throw new Error('No se encontró el elemento #app en index.html');
}

mount(App, { target });
