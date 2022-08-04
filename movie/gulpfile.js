const gulp = require('gulp');
const sass = require('gulp-sass');
const css  = require('gulp-uglifycss');

gulp.task('css',()=>{
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.scss'])
                .pipe(sass())
                .pipe(css())
                .pipe(gulp.dest('src/css/'));
});

gulp.task('js',()=>{
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js'])
                .pipe(gulp.dest('src/js'))
});

gulp.task('server',()=>{
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.scss'], ['css']);
});

gulp.task('default',['server','js']);



