// Less configuration
var gulp = require("gulp");
var less = require("gulp-less");
var ts = require("gulp-typescript");

gulp.task("ts", function(){
    gulp.src("./App/**/*.ts")
        .pipe(ts())
        .pipe(gulp.dest(function(file) {
            return file.base;
        }))
});

gulp.task("less", function() {
    gulp.src("./Styles/*.less")
        .pipe(less())
        .pipe(gulp.dest(function(file) {
            return file.base;
        }))
});

gulp.task("default", ["less", "ts"], function() {
    gulp.watch("Styles/*.less", ["less"]);
    gulp.watch("./**/*.ts", ["ts"]);
})