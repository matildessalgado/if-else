function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  let corBolinha = 255;

  // o ecrã todo muda de cor consoante o canto onde está o rato
  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      background(220, 30, 20);
    } else {
      background(30, 40, 140);
    }
  } else {
    if (mouseY < height / 2) {
      background(250, 205, 0);
      corBolinha = 10;
    } else {
      background(10);
    }
  }

  fill(corBolinha);

  for (let y = 30; y < height; y += 60) {
    for (let x = 30; x < width; x += 60) {
      if (dist(mouse