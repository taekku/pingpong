const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('run-tests', function(){
  return gulp.src('src/**/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: ['ts-node/register']
        }));
});

gulp.task('default', [ 'run-tests' ]);