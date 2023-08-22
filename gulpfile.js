const {src, dest, watch, parallel} = require('gulp');
//css
const sass = require("gulp-dart-sass");
const plumber = require('gulp-plumber');
const cache = require('gulp-cache');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');


//imagenes
const imageMin = require('gulp-imagemin');
const imgAvf = require('gulp-avif');
const webp = require('gulp-webp');



function css(done){
    src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('build/css'))
    done()
}

function js(done){
    src('./src/js/**/*.js')
    .pipe(dest('./build/js'))
    done()
}

function imgReducer(done){
    const op = {optimizationLevel:3};


    src('./src/img/**/*')
    .pipe(imageMin(cache(op)))
    .pipe(dest('build/img'));
    done()

}


function versionWebp(done){
    const op = {
        quality:50
    };

    src('src/img/**/*.{jpg, png}')
    .pipe(webp(op))
    .pipe(dest('build/img'));
    done()
};
 



function avif(done){
    src('./src/img/**/*.{jpg, png}')
    .pipe(imgAvf())
    .pipe(dest('build/img'));
    done()
}


function watcher(cb){
    watch('./src/scss/app.scss', css);
    watch('./src/js/**/*.js', js);
}


exports.css = css;
exports.js = js;
exports.watcher = watcher;
exports.versionWebp = versionWebp;
exports.avif = avif;
exports.imgReducer = imgReducer;
exports.imgDev = parallel(avif, versionWebp, imgReducer)