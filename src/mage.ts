const img: HTMLImageElement = document.querySelector("img.mage-spritesheet")!;
const sprites: ImageBitmap[] = [];

makeMageSpritesheet();
await makeSprites();
makeMageSequence();
makeRunningInPlace();
makeRunning();

function makeMageSpritesheet() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.mage-spritesheet"
  )!;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "palevioletred";
  ctx.fillRect(2 * 12, 6 * 15, 6 * 12, 15);
  ctx.strokeRect(2 * 12, 6 * 15, 6 * 12, 15);
  ctx.drawImage(img, 0, 0);
}

async function makeSprites() {
  for (let k = 2; k < 8; k++) {
    const sprite = await createImageBitmap(img, k * 12, 6 * 15, 12, 15, {
      resizeWidth: 80,
      resizeHeight: 100,
      resizeQuality: "pixelated",
    });
    sprites.push(sprite);
  }
}

function makeMageSequence() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.mage-sequence"
  )!;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "palevioletred";
  ctx.fillRect(0, 0, 960, 100);
  for (let k = 0; k < 6; k++) {
    const sprite = sprites[k];
    ctx.drawImage(sprite, k * 100 + 10, 0);
  }
}

function makeRunningInPlace() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.mage-running-in-place"
  )!;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "palevioletred";
  window.requestAnimationFrame(paint);
  function paint(t: number) {
    ctx.fillRect(0, 0, 80, 100);
    const i = Math.floor(t / 150) % 6;
    const sprite = sprites[i];
    ctx.drawImage(sprite, 0, 0);
    window.requestAnimationFrame(paint);
  }
}

function makeRunning() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.mage-running"
  )!;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "palevioletred";
  window.requestAnimationFrame(paint);
  function paint(t: number) {
    t = t % 3000;
    ctx.fillRect(0, 0, 800, 100);
    const i = Math.floor(t / 150) % 6;
    const sprite = sprites[i];
    const x = Math.floor((t / 3000) * 720);
    ctx.drawImage(sprite, x, 0);
    window.requestAnimationFrame(paint);
  }
}
