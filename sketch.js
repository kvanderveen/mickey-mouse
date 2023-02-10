let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let [centerX, centerY] = [screenWidth / 2, screenHeight / 2]
let centerFaceX = centerX - screenWidth * 0.2
let centerSpeechBubbleX = centerX + screenWidth * 0.15

const BLACK = [0, 0, 0]
const ORANGE = [245, 108, 66]
const PEACH = [247, 223, 194]
const WHITE = [255, 255, 255]

function setup() {
  createCanvas(screenWidth, screenHeight)
  angleMode(DEGREES)
}

function draw() {
  background(color(...ORANGE))
  drawEars()
  drawFace()
  drawEyes()
  drawNose()
  drawMouth()
  drawSpeechBubble()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  screenWidth = window.innerWidth
  screenHeight = window.innerHeight
  ;[centerX, centerY] = [screenWidth / 2, screenHeight / 2]
  centerFaceX = centerX - screenWidth * 0.2
  centerSpeechBubbleX = centerX + screenWidth * 0.15
}

function drawEars() {
  const earSize = [screenWidth * 0.14, screenWidth * 0.135]
  noStroke()
  fill(color(...BLACK))
  drawEar(earSize, 'left')
  drawEar(earSize, 'right')
}

function drawEyes() {
  const eyeSize = [screenWidth * 0.026, screenWidth * 0.08]
  const pupilSize = [screenWidth * 0.018, screenWidth * 0.03]
  noStroke()
  fill(color(...WHITE))
  drawSclera(eyeSize, 'left')
  drawSclera(eyeSize, 'right')
  fill(color(...BLACK))
  drawPupil(pupilSize, 'left')
  drawPupil(pupilSize, 'right')
}

function drawFace() {
  const faceSize = [screenWidth * 0.28, screenWidth * 0.3]
  const periorbitalSize = [screenWidth * 0.11, screenWidth * 0.2]
  const perioralSize = [screenWidth * 0.2, screenWidth * 0.1]
  noStroke()
  fill(color(...BLACK))
  drawFaceBackground(faceSize)
  fill(color(...PEACH))
  drawPeriorbitalRegion(periorbitalSize, 'left')
  drawPeriorbitalRegion(periorbitalSize, 'right')
  drawPerioralRegion(perioralSize)
}

function drawEar(earSize, side) {
  const multiplier = side === 'left' ? -1 : 1
  ellipse(centerFaceX + multiplier * screenWidth * 0.12, centerY - screenWidth * 0.15, ...earSize)
}

function drawFaceBackground(faceSize) {
  ellipse(centerFaceX, centerY, ...faceSize)
}

function drawPeriorbitalRegion(periorbitalSize, side) {
  const multiplier = side === 'left' ? -1 : 1
  ellipse(
    centerFaceX + multiplier * screenWidth * 0.035,
    centerY - screenWidth * 0.01,
    ...periorbitalSize
  )
}

function drawPerioralRegion(perioralSize) {
  ellipse(centerFaceX, centerY + screenWidth * 0.08, ...perioralSize)
}

function drawSclera(eyeSize, side) {
  const multiplier = side === 'left' ? -1 : 1
  ellipse(centerFaceX + multiplier * screenWidth * 0.016, centerY - screenWidth * 0.01, ...eyeSize)
}

function drawPupil(pupilSize, side) {
  const multiplier = side === 'left' ? -1 : 1
  ellipse(
    centerFaceX + multiplier * screenWidth * 0.014,
    centerY + screenWidth * 0.005,
    ...pupilSize
  )
}

function drawNose() {
  const noseSize = [screenWidth * 0.05, screenWidth * 0.035]
  fill(color(...BLACK))
  ellipse(centerFaceX, centerY + screenWidth * 0.06, ...noseSize)
}

function drawMouth() {
  noFill()
  stroke(color(...BLACK))
  strokeWeight(screenWidth * 0.003)
  drawSmile()
  drawDimple('left')
  drawDimple('right')
}

function drawSmile() {
  arc(centerFaceX, centerY + screenWidth * 0.07, screenWidth * 0.12, screenWidth * 0.08, 10, 170)
}

function drawDimple(side) {
  const multiplier = side === 'left' ? -1 : 1
  arc(
    centerFaceX + multiplier * screenWidth * 0.07,
    centerY + screenWidth * 0.06,
    screenWidth * 0.04,
    screenWidth * 0.05,
    side === 'left' ? 20 : 90,
    side === 'left' ? 90 : 160
  )
}

function drawSpeechBubble() {
  fill(color(...WHITE))
  noStroke()
  drawTextBubble()
  drawThreeDots()
  fill(color(...BLACK))
  drawText()
}

function drawTextBubble() {
  ellipse(centerSpeechBubbleX, centerY - screenWidth * 0.12, screenWidth * 0.3, screenWidth * 0.2)
}

function drawThreeDots() {
  const adjustments = [
    [0.1, 0.01, 0.05],
    [0.14, 0.055, 0.03],
    [0.18, 0.08, 0.015],
  ]
  adjustments.forEach(([a1, a2, a3]) => {
    ellipse(centerSpeechBubbleX - screenWidth * a1, centerY + screenWidth * a2, screenWidth * a3)
  })
}

function drawText() {
  textAlign(CENTER, CENTER)
  textSize(screenWidth * 0.045)
  text('I ❤️ coding!', centerSpeechBubbleX, centerY - screenWidth * 0.12)
}
