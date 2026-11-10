const BASE = "#1d1b2c";
const SURFACE = "#2a273f";
const OVERLAY = "#393552";
const MUTED = "#6e6a86";
const SUBTLE = "#908caa";
const TEXT = "#e0def4";
const LOVE = "#eb6f92";
const GOLD = "#f6c177";
const ROSE = "#ea9a97";
const PINE = "#3e8fb0";
const FOAM = "#9ccfd8";
const IRIS = "#c4a7e7";
const MOSS = "#8ec07c";
const HIGHLIGHT_LOW = "#2a283e";
const HIGHLIGHT_MED = "#44415a";
const HIGHLIGHT_HIGH = "#56526e";

function setup() {
  createCanvas(680, 1200);
  document.body.style.backgroundColor = BASE;
}
let dropY = -1000;

function draw() {
  let gapY = 60;
  background(SURFACE);
  dropY = min(dropY + 8, 0);
  translate(0, dropY);
  fill(TEXT);
  rect(90, gapY, 55, 40);
  rect(90, gapY*2, 55, 40);
  rect(90, gapY*3, 55, 40);
  rect(90, gapY*4, 55, 40);
  rect(90, gapY*5, 55, 40);
  rect(90, gapY*6, 55, 40);
  rect(90, gapY*7, 55, 40);
  rect(90, gapY*8, 55, 40);
  rect(90, gapY*9, 55, 40);
  rect(160, gapY*5, 55, 40);
  rect(230, gapY*5, 55, 40);
  rect(300, gapY, 55, 40);
  rect(300, gapY*2, 55, 40);
  rect(300, gapY*3, 55, 40);
  rect(300, gapY*4, 55, 40);
  rect(300, gapY*5, 55, 40);
  rect(300, gapY*6, 55, 40);
  rect(300, gapY*7, 55, 40);
  rect(300, gapY*8, 55, 40);
  rect(300, gapY*9, 55, 40);
  rect(535, gapY, 55, 40);
  rect(535, gapY*3, 55, 40);
  rect(535, gapY*4, 55, 40);
  rect(535, gapY*5, 55, 40);
  rect(535, gapY*6, 55, 40);
  rect(535, gapY*7, 55, 40);
  rect(535, gapY*8, 55, 40);
  rect(535, gapY*9, 55, 40);
}
