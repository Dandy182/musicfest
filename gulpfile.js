import {src, dest, series, watch} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);




const Route ={
    css:`./src/sass/**/*.scss`,
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












export function dev(){
    watch(Route.css, compilarCss);
}











series(compilarCss)