function GeneradorDeExcusas() {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const randomWho = Math.floor(Math.random() * 4)
  const randomAction = Math.floor(Math.random() * 4)
  const randomWhat = Math.floor(Math.random() * 3)
  const randomWhen = Math.floor(Math.random() * 4)
  return who[randomWho] +" "+ action[randomAction] +" "+ what[randomWhat] +" "+ when[randomWhen]
};
document.getElementById("excuse").textContent = GeneradorDeExcusas();