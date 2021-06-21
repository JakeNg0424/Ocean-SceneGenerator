let seed = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    createButton("reimagine").mousePressed(() => seed++);
}

function draw() {
    randomSeed(seed);
    noStroke();

    // Sky
    background("#63C5DA");

    // Sun
    fill("#F9D71C");
    const scrub = mouseX / width;
    let z = random();
    let x = width * ((random() + (scrub / 50 + millis() / 500000.0) / z) % 1);
    ellipse(x, 0, width / 3, width / 3);

    // Clouds
    fill("FFFFFF");
    const clouds = 5 * random();
    for (let i = 0; i < clouds; i++) {
        let z = random();
        let x = width * ((random() + (scrub / 50 + millis() / 500000.0) / z) % 1);
        let s = width / 50 / z;
        ellipse(x, s, width / 3, height / 10);
    }

    // Waves
    fill("#0A1172");
    beginShape();
    vertex(0, height);
    const steps = 10;
    for (let i = 0; i < steps + 1; i++) {
        let x = (width * i) / steps;
        let y = height / 1.5
            - (random() * random() * random() * height) / 4
            - height / 50;
        vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
    fill("#3944BC");
    beginShape();
    vertex(0, height);
    for (let i = 0; i < steps + 1; i++) {
        let x = (width * i) / steps;
        let y = height / 1.1
            - (random() * random() * random() * height) / 4
            - height / 50;
        vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
}