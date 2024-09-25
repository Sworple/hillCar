let car, rWheel, fWheel, rAxle, fAxle;
let distance;
let highscore;
function preload(){

}
function setup() {
	new Canvas(800, 450, 'fullscreen');
	world.gravity.y = 10
	noCursor();
	
	car = new Sprite(400, 112.5, 100, 40, 'dynamic')
	car.fill = 'orange';
	car.strokeWeight = 2;
	rWheel = new Sprite(370, 130, 35, 'dynamic')
	fWheel = new Sprite(430, 130, 35, 'dynamic')
	rWheel.fill = 'grey';
	fWheel.fill = 'grey';

	fAxle = new WheelJoint(car, fWheel)
	rAxle = new WheelJoint(car, rWheel)

	let grade1 = [[400, 0]];
	for (let i = 0; i < 2000; i++){
		grade1.push([random(50, 200), random(-30, 30)]);
	}
	let floor = new Sprite(30, 200, grade1, 's')
	floor.stroke = 'black'
	floor.strokeWeight = 3;
}
function draw() {
	background(51, 153, 255);

	camera.x = car.x;
	camera.y = car.y-50;

	if(kb.pressing('left')) rAxle.speed--, car.rotate(-5);
	else if (kb.pressing('right')) rAxle.speed++, car.rotate(5);
	else if (kb.pressing('down')) rAxle.speed = 0;
	else rAxle.enableMotor = false;
}
