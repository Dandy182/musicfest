const {src, dest, watch, parallel} = require('gulp');
const sass = require("gulp-dart-sass");
const imageMin = require('gulp-imagemin');
const imageAvf = require('gulp-avif');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');


function css(done){
    src('/src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(dest('build/css'))
    done()
}

function imgReducer(done){
    const op = {optimizationLevel:3};


    src('/src/img/**/*')
    .pipe(imageMin(cache(op)))
    .pipe(dest('build/img'));
    done()

}


function versionWebp(done){
    const op = {quality:50};

    src('src/img/**/*.{png, jpg}')
    .pipe(webp(op))
    .pipe(dest('build/img'));
    done()
};




function avif(done){
    src('/src/img/**/*')
    .pipe(imgAvf())
    .pipe(dest('build/img'));
    done()
}


function watcher(cb){
    watch('./src/scss/app.scss', css)
}


exports.css = css;
exports.watcher = watcher;
exports.versionWebp = versionWebp;
exports.avif = avif;
exports.imgReducer = imgReducer;
exports.imgDev = parallel(avif, versionWebp, imgReducer)