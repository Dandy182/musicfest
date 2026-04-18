import {src, dest, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);


export function compilarCss(done){
    src('./src/sass/app.scss')
        .pipe(sass().on(Error. sass.Error()))
        .pipe(dest('./build/css'))
}