
var courses = ["html", "css", "js", "ts", "angular"];

for(let c of courses){
	console.log(c);
}

console.log(" ----- ");

for(let c in courses) {
	console.log(c+" -- "+courses[c]);

}