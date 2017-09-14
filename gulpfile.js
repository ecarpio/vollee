var gulp        = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
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
        }))

		.pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});


gulp.task('compress', function() {
    return gulp.src([
            config.bowerDir + '/jquery/dist/jquery.js',
            config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
            config.bowerDir + '/jquery-validation/dist/jquery.validate.js',
        ])
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(browserSync.stream());
});



gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./fonts'));
});

// Static server
gulp.task('serve',['css', 'bower', 'icons', 'compress'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.scss", ['css']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

//gulp.task('default', ['serve']);