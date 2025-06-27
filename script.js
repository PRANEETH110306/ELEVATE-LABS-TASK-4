const quotes = [
  "With great power comes great responsibility.",
  "I’m not the only one. Not by a long shot.",
  "Anyone can wear the mask.",
  "Sometimes to do what’s right, we have to be steady and give up the thing we want the most.",
  "You have to take a leap of faith.",
  "Miles, the hardest thing about this job is... you can't save everyone.",
  "It's a leap of faith. That’s all it is."
];

document.getElementById('new-quote').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
});
