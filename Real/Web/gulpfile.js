// Less configuration
var gulp = require("gulp");
var less = require("gulp-less");
var typescript = require("gulp-typescript");
const typescriptProject = typescript.createProject('tsconfig.json');

gulp.task("typescript", function(){
    gulp.src("./App/**/*.ts")
        .pipe(typescriptProject())
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

gulp.task("default", ["less", "typescript"], function() {
    gulp.watch("Styles/*.less", ["less"]);
    gulp.watch("./**/*.ts", ["typescript"]);
})