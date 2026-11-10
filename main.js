const BASE = '#1d1b2c';
const SURFACE = '#2a273f';
const OVERLAY = '#393552';
const MUTED = '#6e6a86';
const SUBTLE = '#908caa';
const TEXT = '#e0def4';
const LOVE = '#eb6f92';
const GOLD = '#f6c177';
const ROSE = '#ea9a97';
const PINE = '#3e8fb0';
const FOAM = '#9ccfd8';
const IRIS = '#c4a7e7';
const MOSS = '#8ec07c';
const HIGHLIGHT_LOW = '#2a283e';
const HIGHLIGHT_MED = '#44415a';
const HIGHLIGHT_HIGH = '#56526e';

function setup() {
    createCanvas(680, 1100);
}

const HI = [
    '01001010',
    '01001000',
    '01001010',
    '01111010',
    '01001010',
    '01001010',
    '01001010',
];
const START_X = 90;
const MAX_Y = 100;
const WIDTH = 50;
const HEIGHT = 50;
const GAP = 10;
let hi_y = -(HI.length * HEIGHT + (HI.length - 1) * GAP);

const drawHi = () => {
    for (const [i, row] of HI.entries()) {
        for (const [j, col] of row.split('').entries()) {
            if (col == 1) {
                rect(
                    START_X + j * (WIDTH + GAP),
                    hi_y + i * (HEIGHT + GAP),
                    WIDTH,
                    HEIGHT,
                );
                hi_y = min(hi_y + 1, MAX_Y);
            }
        }
    }
};

function draw() {
    background(SURFACE);

    fill(TEXT);
    drawHi();
}
