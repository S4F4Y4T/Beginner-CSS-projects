//load all plugin
const {src, dest, watch, parallel, series} = require('gulp');
const sass    = require('gulp-sass');
const maps    = require('gulp-sourcemaps');
const post    = require('gulp-postcss');
const prefix  = require('autoprefixer');
const nano    = require('cssnano');
const replace = require('gulp-replace');
const concat  = require('gulp-concat');
const uglify  = require('gulp-uglify');
const browser = require('browser-sync').create();  

//path
const path = {
    scss : 'app/scss/**/*.scss',
    js   : 'app/js/*.js'
}

//css task automation
const csstask = () => {
    return src(path.scss)
           .pipe(maps.init())
           .pipe(sass())
           .pipe(post([prefix() , nano()]))
           .pipe(maps.write('./'))
           .pipe(concat('style.css'))
           .pipe(dest('src/css'))
           .pipe(browser.stream());        
}

//js task automation
const jstask = () => {
    return src(path.js)
           .pipe(uglify())
           .pipe(concat('app.js'))
           .pipe(dest('src/js'))
           .pipe(browser.stream());
}

//random string
const randomstring = new Date().getTime(); 
//cache remove
const cache = () => {
    return src('index.html')
           .pipe(replace(/v=\d+/g, 'v=' + randomstring))
           .pipe(dest('./'))
}

//watch task
const watchTask = () => {
    browser.init({
        server : {
            baseDir: './'
        }
    })
    watch([path.scss, path.js], parallel(csstask, jstask));
    watch('*.html').on('change', browser.reload);
}

//default task
exports.default = series(
    parallel(
        csstask,
        jstask
    ),
    cache,
    watchTask
);