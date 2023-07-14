
var riddles = [
  { question: "What has keys but can’t open locks?", answer: "A piano" },
  { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter M" },
  { question: "What has to be broken before you can use it?", answer: "An egg" },
  { question: "What gets wetter the more it dries?", answer: "A towel" },
  { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle" },
  { question: "What has a head and a tail, but no body?", answer: "A coin" },
  { question: "What is full of holes but still holds water?", answer: "A sponge" },
  { question: "What has one eye but cannot see?", answer: "A needle" },
  { question: "What is so delicate that saying its name breaks it?", answer: "Silence" },
  { question: "What can be caught, but not thrown?", answer: "A cold" },
  { question: "I speak without a mouth and hear without ears. What am I?", answer: "An echo" },
  { question: "What is seen in the middle of March and April that can't be seen at the beginning or end of either month?", answer: "The letter R" },
  { question: "What is always in front of you but can’t be seen?", answer: "The future" },
  { question: "What can you break, even if you never pick it up or touch it?", answer: "A promise" },
  { question: "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?", answer: "He was bald" },
  { question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "A map" },
  { question: "What is cut on a table, but is never eaten?", answer: "A deck of cards" },
  { question: "What can you hold in your right hand, but not in your left hand?", answer: "Your left hand" },
  { question: "I have branches, but no fruit, trunk or leaves. What am I?", answer: "A bank" },
  { question: "What can't talk but will reply when spoken to?", answer: "An echo" },
  { question: "What flies without wings?", answer: "Time" },
  { question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?", answer: "A river" },
  { question: "I shave every day, but my beard stays the same. What am I?", answer: "A barber" },
  { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
  { question: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?", answer: "Fire" },
  { question: "You see a house with two doors. One door leads to certain death and the other door leads to freedom. There are two guards, one in front of each door. One guard always tells the truth, and the other always lies. You do not know which guard is which, nor which door leads to freedom. You can ask one guard one question to determine the door to freedom. What do you ask?", answer: "You ask one guard, 'If I were to ask the other guard which door leads to freedom, what would he say?' Then choose the opposite door of what the guard indicates." },
  { question: "What can fill a room but takes up no space?", answer: "Light" },
  { question: "What is always coming, but never arrives?", answer: "Tomorrow" },
  { question: "What can travel around the world while staying in a corner?", answer: "A stamp" },
  { question: "Which word in the dictionary is spelled incorrectly?", answer: "Incorrectly" },
  { question: "What goes up and down but doesn’t move?", answer: "A staircase" },
  { question: "What gets bigger the more you take away?", answer: "A hole" },
  { question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?", answer: "Pencil lead" },
  { question: "If you drop me I'm sure to crack, but give me a smile and I'll always smile back. What am I?", answer: "A mirror" },
  { question: "I am an odd number. Take away a letter and I become even. What number am I?", answer: "Seven" },
  { question: "What has a heart that doesn’t beat?", answer: "An artichoke" },
  { question: "What kind of room has no doors or windows?", answer: "A mushroom" },
  { question: "What is made of water but if you put it into water it will die?", answer: "An ice cube" },
  { question: "I start out tall, but the longer I stand, the shorter I grow. What am I?", answer: "A candle" },
  { question: "What belongs to you but other people use it more than you?", answer: "Your name" }
];

let number = Math.floor(Math.random() * riddles.length);
document.getElementById('random_quote').innerHTML = riddles[number].question;

function showAnswer() {
  document.getElementById('random_quote').innerHTML = riddles[number].answer;
}
function nextRiddle() {
  number = Math.floor(Math.random() * riddles.length);
  document.getElementById('random_quote').innerHTML = riddles[number].question;
}
document.getElementById('btn-ans').addEventListener('click', showAnswer);
document.getElementById('btn-next').addEventListener('click', nextRiddle);