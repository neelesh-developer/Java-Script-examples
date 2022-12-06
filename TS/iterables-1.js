var courses = ["html", "css", "js", "ts", "angular"];
for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
    var c = courses_1[_i];
    console.log(c);
}
console.log(" ----- ");
for (var c in courses) {
    console.log(c + " -- " + courses[c]);
}
