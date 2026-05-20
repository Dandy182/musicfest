import {src, dest, series, watch} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

const sass = gulpSass(dartSass);

const Route ={
    css:`./src/sass/**/*.scss`,
    img:`./src/img/gallery/full`,
    dest:`./build/`,
    js:`./src/js/**/*.js`
} 



export function compilarCss(done){
    src(Route.css)
        .pipe(sourcemaps.init())
        .pipe(sass({style:'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(`${Route.dest}/css`))
        done()
}

export function js(done){
    src(Route.js)
        .pipe(dest(`${Route.dest}/js`))
    done();
}

export function webpConvert(done){
    src('./src/img/**/*.{png, jpg')
        .pipe(webp())
        .pipe(dest('./build/img'))
        done()
}






export function dev(){
    watch(Route.css, compilarCss);
    watch(Route.js, js);
}




export default series(compilarCss, js, dev, webpConvert)