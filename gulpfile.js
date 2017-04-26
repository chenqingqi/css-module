/**
 * 加载模块
 */
var gulp      = require('gulp');
var rename    = require('gulp-rename');
var less      = require('gulp-less');
var cssmin    = require('gulp-minify-css');


/**
 * 执行命令
 */
gulp.task('default', function() 
{
// 	gulp.src(['less/*.less'])
//		.pipe(less())
//		.pipe(cssmin())
//		.pipe(rename({suffix:'.min'}))
//		.pipe(gulp.dest('less/'));
	
	gulp.src(['less/main.less'])
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('less/'));
});


/**
 * 自动编译
 */
gulp.watch(['less/*.less'],['default']).on('change',function(e)
{
	console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
});
	