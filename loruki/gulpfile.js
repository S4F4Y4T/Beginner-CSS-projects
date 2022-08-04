//add plugins
const {src, dest, watch, parallel, series} = require('gulp');
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass')
const postcss      = require('gulp-postcss');
const concatcss    = require('gulp-concat-css');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const replace      = require('gulp-replace');
const browser      = require('browser-sync').create();

//file path
const files = {
    csstask : 'app/scss/**/*.scss',
    jstask  : 'app/js/*.js'
}

//css task
const scss = () => {
    return src(files.csstask)
              .pipe(sourcemaps.init())
              .pipe(sass())
              .pipe(postcss([autoprefixer(), cssnano()]))
              .pipe(sourcemaps.write(''))
              .pipe(concat('style.css'))
              .pipe(dest('src/css/'))
              .pipe(browser.stream());
}

//js task
const js = () => {
    return src(files.jstask)
              .pipe(concat('all.js'))
              .pipe(uglify())
              .pipe(dest('src/js'))
              .pipe(browser.stream());
}

//cache
const randomstring = new Date().getTime();
const cache = () => {
    return src('*.html')
              .pipe(replace(/v=\d+/g, "v=" + randomstring))
              .pipe(dest('./'))
}

//watch task
const server = () => {
    browser.init({
        server: {
            baseDir: './'
        }
    })
    watch([files.csstask, files.jstask], parallel(scss,js));
    watch('*.html').on('change',browser.reload);

}


//default 
exports.default = series(
    parallel(scss,js),
    cache,
    server
)

