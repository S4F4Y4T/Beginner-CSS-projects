const {src, dest, watch, parallel, series} = require('gulp');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const post = require('gulp-postcss');
const prefix = require('autoprefixer');
const cssnano= require('cssnano');
const replace = require('gulp-replace');
const concat  = require('gulp-concat');
const uglify  = require('gulp-uglify');
const autoprefixer = require('autoprefixer');
const browser = require('browser-sync').create();

//path file
const file = {
    scss : 'app/scss/*.scss',
    js   : 'app/js/*.js'
}

//csstask
const csstask = () => {
    return src(file.scss)
              .pipe(maps.init())
              .pipe(sass())
              .pipe(post([autoprefixer(), cssnano()]))
              .pipe(concat('style.css'))
              .pipe(maps.write('.'))
              .pipe(dest('src/css/'))
              .pipe(browser.stream())
}

//js task
const jstask = () => {
    return src(file.js)
              .pipe(uglify())
              .pipe(concat('all.js'))
              .pipe(dest('src/js'))
              .pipe(browser.stream())
}

//cache replace
const rand = new Date().getTime();
const cache = () => {
    return src('index.html')
           .pipe(replace(/v=\d+/g, 'v=' + rand))
           .pipe(dest('./'))
}

//watch task
const server = () => {
    browser.init({
        server : {
            baseDir: './'
        }
    })

    watch([file.scss, file.js], parallel(csstask,jstask));
    watch('*.html').on('change', browser.reload);
};

//default task
exports.default = series(
    parallel(csstask,jstask),
    cache,
    server
);