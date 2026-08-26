const css = (family) => `
/* mock */
@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: 400 800;
  font-display: swap;
  src: url(https://example.com/${family.replace(/\s+/g, "-")}.woff2) format('woff2');
  unicode-range: U+0000-00FF;
}
`;

module.exports = {
  "https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&display=swap": css("Fraunces"),
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap": css("Manrope"),
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap": css("Space Grotesk"),
};
