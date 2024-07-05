let angleX = 0;
let angleY = 0;
let scaleFactor = 1;
let wheelRotation = 0;

function setup() {
    createCanvas(800, 600, WEBGL);
}

function draw() {
    background(220);

    // Kontrol rotasi dengan mouse
    if (mouseIsPressed) {
        angleY += movedX * 0.01;
        angleX += movedY * 0.01;
    }

    // Terapkan skala
    scale(scaleFactor);

    // Terapkan rotasi
    rotateX(angleX);
    rotateY(angleY);

    // Gambar mobil 3D sederhana
    drawCar();

    // Perputaran roda sendiri
    wheelRotation += 0.015; // Kecepatan perputaran roda

    redraw()
}

function drawCar() {
    // Badan bawah mobil
    push();
    fill(255, 0, 0);
    translate(0, 0, 0);
    box(250, 30, 125);
    pop();

    // Badan atas mobil
    push();
    fill(200, 0, 0);
    translate(0, -30, 0);
    box(100, 50, 80);
    pop();

    // Bagasi mobil
    push();
    fill(200, 0, 0);
    translate(70, -20, 0);
    box(50, 15, 60);
    pop();

    // Kap mobil
    push();
    fill(200, 0, 0);
    translate(-70, -20, 0);
    box(60, 15, 60);
    pop();


    // Roda kiri
    push();
    translate(-50, 15, 75);
    rotateZ(wheelRotation);
    fill(150);
    // Pelek roda
    torus(20, 10);
    pop();

    // Roda kanan
    push();
    translate(50, 15, 75);
    rotateZ(wheelRotation);
    fill(150);
    // Pelek roda
    torus(20, 10);
    pop();

    // Roda kiri
    push();
    translate(-50, 15, -75);
    rotateZ(wheelRotation);
    fill(150);
    // Pelek roda
    torus(20, 10);
    pop();

    // Roda kanan
    push();
    translate(50, 15, -75);
    rotateZ(wheelRotation);
    fill(150,);
    // Pelek roda
    torus(20, 10);
    pop(0);
}

function mouseWheel(event) {
    if (event.delta > 0) {
        scaleFactor *= 1.1;
    } else {
        scaleFactor /= 1.1;
    }

    wheelRotation += event.delta / 100; // Perputaran roda

    redraw();
}
