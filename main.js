sketches = ["apple","circle","fan","watch","basket"];
random_number = Math.random();
console.log(sketches[random_number]);
sketch = sketches[random_number];

document.getElementById("sketch_drawn").innerHTML = "Sketch to be drawn: "+sketch;

timer_counter = 0;
timer_check=0;
drawn_sketch="";
answer_holder="";
score=0;

