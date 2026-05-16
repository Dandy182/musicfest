import {src, dest, series, watch} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
import webp from 'gulp-webp';

const sass = gulpSass(dartSass);




const Route ={
    css:`./src/sass/**/*.scss`,
    img:`./src/img/gallery`,
    dest:`./build/`
} 


export function compilarCss(done){
    src(Route.css)
        .pipe(sourcemaps.init())
        .pipe(sass({style:'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(`${Route.dest}/css`))
        done()
}

export function webpConvert(done){
    src(`${Route.img}/full/*`)
        .pipe(webp())
        .pipe(dest(`${dest}img`))
}


function avifConvert(done){
    src(`${Route.img}/full`)
        .pipe()

    done()

}









export function dev(){
    watch(Route.css, compilarCss);
}











series(compilarCss)