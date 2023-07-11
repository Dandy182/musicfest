const {src, dest, watch, parallel} = require('gulp');
const sass = require("gulp-dart-sass");
const imgMin = require('imagemin');
const imgAvf = require('gulp-avif');
const plumber = require('gulp-plumber');



function css(done){
    src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(dest('build/css'))
    done()
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
exports.avif = avif;
exports.imgReducer = imgReducer;
exports.imgDev = parallel(avif, imgReducer)