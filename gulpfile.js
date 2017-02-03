var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var bower = require('gulp-bower');
var notify = require("gulp-notify");

var config = {
	bowerDir: './bower_components'
};


gulp.task('bower', function() {
    return bower()
     .pipe(gulp.dest(config.bowerDir))
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('css', function() {
    return gulp.src("./sass/style.scss")
        .pipe(sass({
            outputStyle: 'compressed',
        	includePaths: [
               config.bowerDir + '/bootstrap-sass/assets/stylesheets',
               config.bowerDir + '/font-awesome/scss',	
           ], errLogToConsole: true 
        })

   
        )

		.pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});


gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./fonts'));
});

// Static server
gulp.task('serve',['css', 'bower', 'icons'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.scss", ['css']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);