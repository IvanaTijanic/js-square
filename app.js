let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let width = 60;
    let height = 60;
    let gap = 20;
    let x = 100 + (width + gap) * i;
    let y = 100 + (height + gap) * j;

    context.save();
    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();
    context.restore();


    if (Math.random() > 0.5) {
      context.save();
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke();
      context.restore();
    }

    setInterval(() => {
      location.reload();
    }, 3000);
  }
}
