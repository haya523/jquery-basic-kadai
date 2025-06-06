$(document).ready(function () {
  // 文字色変化
  $('#change-color').click(function () {
    $('#target').css('color', 'blue'); // 任意の色（例：青）
  });

  // 文字内容変化
  $('#change-text').click(function () {
    $('#target').text('こんばんは！'); // 任意の文字「こんばんは！」）
  });

  // フェードアウト
  $('#fade-out').click(function () {
    $('#target').fadeOut();
  });

  // フェードイン
  $('#fade-in').click(function () {
    $('#target').fadeIn();
  });
});
