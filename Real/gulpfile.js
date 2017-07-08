// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./Styles/*.less')
        .pipe(less())
        .pipe(gulp.dest("./Styles"))
});

gulp.task('default', ['less'], function() {
    gulp.watch('Styles/*.less', ['less']);
})