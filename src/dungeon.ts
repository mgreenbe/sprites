const img: HTMLImageElement = document.querySelector("img.dungeon")!;
console.log(img.width, img.height);

// const canvas: HTMLCanvasElement = document.querySelector("canvas.dungeon")!;
const bigCanvas: HTMLCanvasElement =
  document.querySelector("canvas.big-dungeon")!;
const bigCtx = bigCanvas.getContext("2d")!;
bigCtx.drawImage(img, 0, 0);

bigCtx.strokeStyle = "orangered";
bigCtx.lineWidth = 3;
for (let i = 0; i <= 30; i++) {
  const x = 75 * i;
  bigCtx.moveTo(x, 0);
  bigCtx.lineTo(x, img.height);
}

for (let i = 0; i <= 18; i++) {
  const y = 75 * i;
  bigCtx.moveTo(0, y);
  bigCtx.lineTo(img.width, y);
}

bigCtx.stroke();

const littleCanvas: HTMLCanvasElement = document.querySelector(
  "canvas.little-dungeon"
)!;
const littleCtx = littleCanvas.getContext("2d")!;

function square() {
  let vx = 0.423;
  let vy = 0.511;
  let x = 0;
  let y = 0;
  let dx = 0;
  let dy = 0;
  let dt = 0;
  let tprev = 0;
  requestAnimationFrame(paint);

  function paint(t: number) {
    if (tprev) {
      dt = t - tprev;
      dx = dt * vx;
      dy = dt * vy;
      if (y + dy < 0 || y + dy > img.height - 200) {
        vy = -vy;
        dy = -dy;
      }
      if (x + dx < 0 || x + dx > img.width - 400) {
        vx = -vx;
        dx = -dx;
      }
      x += dx;
      y += dy;
    }
    tprev = t;
    littleCtx.drawImage(bigCanvas, x, y, 400, 200, 0, 0, 400, 200);
    requestAnimationFrame(paint);
  }
}

square();
