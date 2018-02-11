$(function(){
  let scores, activePlayer, isPlaying, roundScore;
  let rezSpan = 100;
  init();
  $('.btn-roll').click(() => {
    if(isPlaying){
      let dice = Math.floor(Math.random() * 6) + 1;
      $('.dice').attr('src', `dice-${dice}.png`);
      $('.kocke').show();
      if(dice !== 1){
        roundScore+= dice;
        $('.current'+ activePlayer).text(roundScore);
      }
      else{
        nextPlayer();
      }
  }
  });
  $('.btn-hold').click(() => {
    if(isPlaying){
      scores[activePlayer]+= roundScore;
      $('.finalResult'+activePlayer).text(scores[activePlayer]);
      if(scores[activePlayer] >= rezSpan){
        $('.name'+activePlayer).text('Winner');
        $('.kocke').hide();
        isPlaying = false;
      }
      else{
        nextPlayer();
      }
  }
  });
  $('.btn-new').click(init);
  function nextPlayer(){
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    $('.current0').text('0');
    $('.current1').text('0');

    $('.panel-0').toggleClass('active');
    $('.panel-1').toggleClass('active');
    $('.kocke').hide();
  }
  function init(){
    isPlaying = true;
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    $('.rezSpan').text(rezSpan);
    $('.name0').text('Player 1');
    $('.name1').text('Player 2');
    $('.finalResult0').text('0');
    $('.finalResult1').text('0');
    $('.current0').text('0');
    $('.current1').text('0');
    $('.panel-0').removeClass('active');
    $('.panel-1').removeClass('active');
    $('.panel-0').addClass('active');
    $('.kocke').hide();
  }
});
