function getRandomJSCode() {
  const randomNumber = Math.floor(Math.random() * 100);
  return `const result = ${randomNumber};`;
}
