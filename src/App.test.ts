import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import App from './App.svelte';

describe('App', () => {
  it('muestra el título del juego', () => {
    render(App);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toBe('Simple Incremental');
  });
});
