;$(function(){
  'use strict';
  // 初期設定
  var slideTime = 2000; // 画像が切り替わる時間
  var imgWidth = Number($('#slide li img').width()); // 画像の横幅
  var slideImgNum = $('#slide li').length; // 画像の数
  var slideCtnWidth = imgWidth * slideImgNum;

  $('#slide__wrap').css('width', imgWidth);
  $('#slide').css('width', slideCtnWidth);

  // 画像枚数分〇を設置
  $('#slide li').each(function(){
    $('#slide__list').append($('<li><i class="fa fa-circle" aria-hidden="true"></i></li>')
    .attr('data-img', $('img',this).attr('src')));
  });
  $('#slide__list li:first-child').addClass('active');

   // 右矢印をクリックしたら画像を移動
  $('#next').click(function(){
    $('#slide:not(:animated)').animate({
      'margin-left': -1 * imgWidth + 'px'
    }, 'slow', function(){
      $('#slide').css('margin-left', 0).append($('#slide li:first-child'));
      $('#slide__list li.active').removeClass('active');
      $('#slide__list li[data-img="' + $('#slide li:first-child img').attr('src') + '"]').addClass('active');
    });
    return false;
  });

  // 左矢印をクリックしたら画像を移動
  $('#prev').click(function(){
    $('#slide:not(:animated)').css('margin-left', -1 * imgWidth + 'px').prepend($('#slide li:last-child')).animate({
      'margin-left': 0
    }, 'slow', function(){
      $('#slide__list li.active').removeClass('active');
      $('#slide__list li[data-img="' + $('#slide li:first-child img').attr('src') + '"]').addClass('active');
    });
    return false;
  });

  // 一定時間ごとに画像を移動
  var timerId = setInterval(function(){
    $('#next').click();
  }, slideTime);
});