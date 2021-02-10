const path = require('path');
const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');

const options = {
    output: '.',
    compile: [ './src/**/*.ts' ],
    remove: [ 'lib/', 'test/', 'app.js', 'data.js' ]
};

gulp.task('clean', () => {
    return del(options.remove);
});

gulp.task('compile', () => {
    const tsProject = ts.createProject(path.resolve('./tsconfig.json'));
    const tsResult = gulp.src(options.compile).pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(path.resolve(options.output)));
});

gulp.task('build', gulp.series('clean', 'compile'));
gulp.task('default', gulp.series('build'));