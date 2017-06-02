//接值
var gulp=require('gulp');
var gulputil=require('gulp-util');
//js的值
var gulpuglify=require('gulp-uglify');
//css的值
var gulpcss=require('gulp-minify-css');
//html的值
var gulphtml=require('gulp-minify-html');

//复制图片
gulp.task('images',function(){
	gulp.src('img/images/*.jpg').pipe(gulp.dest('ywo/img/images'))
})
//压缩js
gulp.task('myjs',function(){
	gulp.src('js/*.js').pipe(gulpuglify()).pipe(gulp.dest('ywo/js'))
})

//压缩css
gulp.task('mycss',function(){
	gulp.src('css/*.css').pipe(gulpcss()).pipe(gulp.dest('ywo/css'))
})
//压缩html
gulp.task('myhtml',function(){
	gulp.src('*.html').pipe(gulphtml()).pipe(gulp.dest('ywo'))
})

//多条件执行
gulp.task('default',['images','myjs','mycss','myhtml'],function(){
	console.log('执行完毕');
});