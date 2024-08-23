const sewerSpritesheet: HTMLImageElement = document.querySelector(
  "img.sewer-spritesheet"
)!;

const floorSprite = await createImageBitmap(
  sewerSpritesheet,
  0,
  0 * 16,
  16,
  16,
  {
    resizeWidth: 128,
    resizeHeight: 128,
    resizeQuality: "pixelated",
  }
);
const wallSprite = await createImageBitmap(
  sewerSpritesheet,
  0,
  5 * 16,
  16,
  16,
  {
    resizeWidth: 128,
    resizeHeight: 128,
    resizeQuality: "pixelated",
  }
);
const lowerWallSprite = await createImageBitmap(
  sewerSpritesheet,
  0,
  12 * 16,
  16,
  16,
  {
    resizeWidth: 128,
    resizeHeight: 128,
    resizeQuality: "pixelated",
  }
);

const mageSpritesheet: HTMLImageElement = document.querySelector(
  "img.mage-spritesheet"
)!;

const mageSprite = await createImageBitmap(mageSpritesheet, 0, 6 * 15, 12, 15, {
  resizeWidth: 81,
  resizeHeight: 104,
  resizeQuality: "pixelated",
});

const lowerWallSpriteWithTurn = await createImageBitmap(
  sewerSpritesheet,
  16,
  12 * 16,
  16,
  16,
  {
    resizeWidth: 128,
    resizeHeight: 128,
    resizeQuality: "pixelated",
  }
);

makeFloorSprite();
await makeFloorTiling();

function makeFloorSprite() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.floor-sprite"
  )!;
  const ctx = canvas.getContext("2d")!;
  ctx.translate(64, 64);
  ctx.rotate(Math.PI / 2);
  ctx.translate(-64, -128);
  ctx.drawImage(lowerWallSprite, 0, 0);
}

async function makeFloorTiling() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.floor-tiling"
  )!;

  const rot: HTMLCanvasElement = document.querySelector("canvas.floor-sprite")!;
  const bmp = await createImageBitmap(rot);
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 384, 384);
  ctx.strokeStyle = "orangered";
  ctx.lineWidth = 3;
  ctx.drawImage(wallSprite, 0, 0);
  ctx.drawImage(wallSprite, 128, 0);
  ctx.drawImage(wallSprite, 256, 0);
  ctx.drawImage(floorSprite, 0, 128);
  ctx.drawImage(floorSprite, 128, 128);
  ctx.drawImage(lowerWallSprite, 0, 128);
  ctx.drawImage(lowerWallSpriteWithTurn, 128, 128);
  ctx.drawImage(floorSprite, 256, 128);
  ctx.drawImage(bmp, 128, 256);
  ctx.drawImage(floorSprite, 256, 256);
  ctx.strokeRect(0, 0, 128, 128);
  ctx.strokeRect(128, 0, 128, 128);
  ctx.strokeRect(0, 128, 128, 128);
  ctx.strokeRect(128, 128, 128, 128);
  ctx.strokeRect(256, 0, 128, 128);
  ctx.strokeRect(256, 128, 128, 128);
  ctx.strokeRect(0, 256, 128, 128);
  ctx.strokeRect(128, 256, 128, 128);
  ctx.strokeRect(256, 256, 128, 128);
  ctx.drawImage(mageSprite, 32, 128 - 32);
  ctx.drawImage(mageSprite, 160, 128 - 32);
  ctx.drawImage(mageSprite, 288, 128 - 32);
  ctx.drawImage(mageSprite, 288, 256 - 32);
}

export {};
