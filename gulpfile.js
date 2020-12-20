const gulp = require("gulp");
const scss = require("gulp-sass");
const browserSync = require("browser-sync");
const gulpRename = require("gulp-rename");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


gulp.task('scss', function() {
    return gulp.src("app/scss/**/*.scss")
           .pipe(scss({outputStyle: "compressed"}))
           .pipe(gulpRename({suffix: ".min"}))
           .pipe(gulp.dest("app/css"))
           .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src("app/js/**/*.js")
           .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('html', function() {
    return gulp.src("app/*.html")
           .pipe(browserSync.reload({stream: true}))
});

gulp.task('js-libs', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js'
            ])
           .pipe(concat('libs.min.js'))
           .pipe(uglify())
           .pipe(gulp.dest('app/js'))
           .pipe(browserSync.reload({stream: true}))
})

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/**/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('js-libs', 'browser-sync', 'watch'));



