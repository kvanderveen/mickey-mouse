const SCREEN_WIDTH = window.innerWidth
const SCREEN_HEIGHT = window.innerHeight
const SCREEN_CENTER = [SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2]
const [CENTER_X, CENTER_Y] = SCREEN_CENTER
const CENTER_FACE_X = CENTER_X - SCREEN_WIDTH * 0.2
const CENTER_SPEECH_BUBBLE_X = CENTER_X + SCREEN_WIDTH * 0.15

const EAR_SIZE = [SCREEN_WIDTH * 0.14, SCREEN_WIDTH * 0.135]
const EYE_SIZE = [SCREEN_WIDTH * 0.026, SCREEN_WIDTH * 0.08]
const PUPIL_SIZE = [SCREEN_WIDTH * 0.018, SCREEN_WIDTH * 0.03]
const NOSE_SIZE = [SCREEN_WIDTH * 0.05, SCREEN_WIDTH * 0.035]
const FACE_SIZE = [SCREEN_WIDTH * 0.28, SCREEN_WIDTH * 0.3]
const PERIORBITAL_SIZE = [SCREEN_WIDTH * 0.11, SCREEN_WIDTH * 0.2]
const PERIORAL_SIZE = [SCREEN_WIDTH * 0.2, SCREEN_WIDTH * 0.1]

const BLACK = [0, 0, 0]
const ORANGE = [245, 108, 66]
const PEACH = [247, 223, 194]
const WHITE = [255, 255, 255]

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT)
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

function drawEars() {
  noStroke()
  fill(color(...BLACK))
  drawLeftEar()
  drawRightEar()
}

function drawEyes() {
  noStroke()
  fill(color(...WHITE))
  drawLeftSclera()
  drawRightSclera()
  fill(color(...BLACK))
  drawLeftPupil()
  drawRightPupil()
}

function drawFace() {
  noStroke()
  fill(color(...BLACK))
  drawFaceBackground()
  fill(color(...PEACH))
  drawLeftPeriorbitalRegion()
  drawRightPeriorbitalRegion()
  drawPerioralRegion()
}

function drawLeftEar() {
  ellipse(CENTER_FACE_X - SCREEN_WIDTH * 0.12, CENTER_Y - SCREEN_WIDTH * 0.15, ...EAR_SIZE)
}

function drawRightEar() {
  ellipse(CENTER_FACE_X + SCREEN_WIDTH * 0.12, CENTER_Y - SCREEN_WIDTH * 0.15, ...EAR_SIZE)
}

function drawFaceBackground() {
  ellipse(CENTER_FACE_X, CENTER_Y, ...FACE_SIZE)
}

function drawLeftPeriorbitalRegion() {
  ellipse(CENTER_FACE_X - SCREEN_WIDTH * 0.035, CENTER_Y - SCREEN_WIDTH * 0.01, ...PERIORBITAL_SIZE)
}

function drawRightPeriorbitalRegion() {
  ellipse(CENTER_FACE_X + SCREEN_WIDTH * 0.035, CENTER_Y - SCREEN_WIDTH * 0.01, ...PERIORBITAL_SIZE)
}

function drawPerioralRegion() {
  ellipse(CENTER_FACE_X, CENTER_Y + SCREEN_WIDTH * 0.08, ...PERIORAL_SIZE)
}

function drawLeftSclera() {
  ellipse(CENTER_FACE_X - SCREEN_WIDTH * 0.016, CENTER_Y - SCREEN_WIDTH * 0.01, ...EYE_SIZE)
}

function drawRightSclera() {
  ellipse(CENTER_FACE_X + SCREEN_WIDTH * 0.016, CENTER_Y - SCREEN_WIDTH * 0.01, ...EYE_SIZE)
}

function drawLeftPupil() {
  ellipse(CENTER_FACE_X - SCREEN_WIDTH * 0.014, CENTER_Y + SCREEN_WIDTH * 0.005, ...PUPIL_SIZE)
}

function drawRightPupil() {
  ellipse(CENTER_FACE_X + SCREEN_WIDTH * 0.014, CENTER_Y + SCREEN_WIDTH * 0.005, ...PUPIL_SIZE)
}

function drawNose() {
  fill(color(...BLACK))
  ellipse(CENTER_FACE_X, CENTER_Y + SCREEN_WIDTH * 0.06, ...NOSE_SIZE)
}

function drawMouth() {
  noFill()
  stroke(color(...BLACK))
  strokeWeight(SCREEN_WIDTH * 0.003)
  drawSmile()
  drawLeftDimple()
  drawRightDimple()
}

function drawSmile() {
  arc(
    CENTER_FACE_X,
    CENTER_Y + SCREEN_WIDTH * 0.07,
    SCREEN_WIDTH * 0.12,
    SCREEN_WIDTH * 0.08,
    10,
    170
  )
}

function drawLeftDimple() {
  arc(
    CENTER_FACE_X - SCREEN_WIDTH * 0.07,
    CENTER_Y + SCREEN_WIDTH * 0.06,
    SCREEN_WIDTH * 0.04,
    SCREEN_WIDTH * 0.05,
    20,
    90
  )
}

function drawRightDimple() {
  arc(
    CENTER_FACE_X + SCREEN_WIDTH * 0.07,
    CENTER_Y + SCREEN_WIDTH * 0.06,
    SCREEN_WIDTH * 0.04,
    SCREEN_WIDTH * 0.05,
    90,
    160
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
  ellipse(
    CENTER_SPEECH_BUBBLE_X,
    CENTER_Y - SCREEN_WIDTH * 0.12,
    SCREEN_WIDTH * 0.3,
    SCREEN_WIDTH * 0.2
  )
}

function drawThreeDots() {
  const adjustments = [
    [0.1, 0.01, 0.05],
    [0.14, 0.055, 0.03],
    [0.18, 0.08, 0.015],
  ]
  adjustments.forEach(([a1, a2, a3]) => {
    ellipse(
      CENTER_SPEECH_BUBBLE_X - SCREEN_WIDTH * a1,
      CENTER_Y + SCREEN_WIDTH * a2,
      SCREEN_WIDTH * a3
    )
  })
}

function drawText() {
  textAlign(CENTER, CENTER)
  textSize(SCREEN_WIDTH * 0.045)
  text('I love coding!', CENTER_SPEECH_BUBBLE_X, CENTER_Y - SCREEN_WIDTH * 0.12)
}
