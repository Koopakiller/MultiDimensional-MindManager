// Less configuration
var gulp = require("gulp");
var less = require("gulp-less");
var ts = require("gulp-typescript");

gulp.task("ts", function(){
    gulp.src("./App/**/*.ts")
        .pipe(ts({
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "lib": [ "es2015", "dom" ],
            "noImplicitAny": true,
            "suppressImplicitAnyIndexErrors": true,
            "typeRoots": [
                "../node_modules/@types/"
            ]
        }))
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