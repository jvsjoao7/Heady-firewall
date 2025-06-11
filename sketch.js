
function setup() {
  createCanvas(400, 400);
  background(000); // Fundo Preto
  noLoop(); // Só desenha uma vez
}

function draw() {
  // Cabeça
  fill('#5F210A'); // Amarelo
  ellipse(200, 200, 200, 200);

  // Olhos
  fill('#000000'); // Preto
  ellipse(170, 180, 20, 90);
  ellipse(230, 180, 40, 10);

  // Boca (um arco!)
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(200, 220, 100, 60, 0, PI); // Arco de 0 a PI (meia lua)
}