function getRandomJSCode() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomString = "hello";
  const randomBoolean = Math.random() > 0.5;

  return `${randomNumber}, ${randomString}, ${randomBoolean}`;
}
