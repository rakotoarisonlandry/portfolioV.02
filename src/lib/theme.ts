// Run before the page is painted to avoid a flash of the wrong theme.
export const themeStorageKey = "landry-theme";
export const themeInitScript = `(() => {
  let preference;
  try { preference = localStorage.getItem('landry-theme'); } catch {}
  const dark = preference === 'dark' || (preference !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
})();`;
