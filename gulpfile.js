const {src, dest, watch} = require('gulp');
const sass = require("gulp-dart-sass");
const imgMin = require('imagemin');
const imgAvf = require('gulp-avif');


function css(cb){
    src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('build/css'))
}

function imgReducer(cb){
    src('./src/img/**/**')
    .pipe(imgMin())
    .pipe(dest('./build/img'));
}

function avif(cb){
    src('./src/img/**/**')
    .pipe(imgAvf())
    .pipe(dest('./build/img'))
}


function watcher(cb){
    watch('./src/scss/app.scss', css)
}


exports.css = css;
exports.watcher = watcher;
exports.imgMin = imgMin;