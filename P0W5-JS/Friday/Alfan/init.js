// JavaScript Document
 
var oFloor;
var oPlayer;
var floorMoveSpeed = "-=10";
var intGameLoop;
 
//timer used in game loop to animate character
var charAnimTimer = 2;
var charAnimCount = 0;
 
var coinCreateTimer = 60;
var coinCreateCount = 0;
 
var runMaxLgth = 2;
var runCurrLgth = 1;
 
var isJumping = false;
var playerFloorYPos = 93;
 
var arrCoinPool = [];
var maxCoins = 3;
 
var score = 0;
var intGameLoop;
//-----------------------------------------------------------o
// Collision detection method
// usage,call:  hitTest( div1, div2 ); (returns true or false).
//-----------------------------------------------------------o
var hitTest = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width() / 2;
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }
 
    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }
 
    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();
//-----------------------------------------------------------o
 
//-----------------------------o
//-- constructor
//-----------------------------o
$(window).load(function(e) {
 
    oFloor = document.getElementById("floor");
    oPlayer = document.getElementById("player");
 
    //add start button mouse listener
    $('#titleScreen').mousedown(function(){
    $('#titleScreen').remove();
    startGame();
    })
 
    $('body').css('display', 'block');
 
});
 
function startGame()
{
    $(oPlayer).css('display', 'block')
    $('#scoreBox').css('display', 'block')
    $(oFloor).css('display', 'block')
 
    $('body').mousedown(function(){
    playerJump();
    })
 
    //set gameloop
 intGameLoop = self.setInterval(function(){loop()},33);
}
 
//-----------------------------------------------------------o
 
//------------------------------------o
// Game Loop
//------------------------------------o
function loop()
{
 
    //change floor bg mapping
    $(oFloor).css("background-position", floorMoveSpeed);
    $('#wrap').css("background-position", '-=1');
    coinCreateCount ++
     if(coinCreateCount >= coinCreateTimer &&  arrCoinPool.length < maxCoins ){
     createCoin();
     coinCreateCount = 0;
     }
 
    for(i = 0; i < arrCoinPool.length; i++)
    {
        var c = $(arrCoinPool[i])
        $(c).css('left', floorMoveSpeed)
        //console.log($(c).css('left'))
 
        if($(c).css('left') < '-40px')
        {
        $(c).remove();
        arrCoinPool.splice(i, 1);
        }
 
        if(hitTest(oPlayer, c))
        {
        $(c).remove();
        arrCoinPool.splice(i, 1);
        score += 100;
        $('#scoreBox p').text('Score ' + score);
        }
 
    }
 
    if(charAnimCount >= charAnimTimer )
    {
        if(isJumping)
        return;
 
     charAnimCount = 0;
 
     if(runCurrLgth == 1)
     $(oPlayer).css("background-position", "-=91")
     else
     $(oPlayer).css("background-position", 0)
 
     if(runCurrLgth >= runMaxLgth)
     runCurrLgth = 0;
     else
     runCurrLgth ++;
 
    }
    else
    {
    charAnimCount ++;
 
    }
 
}
 
//----------------------------o
//  player jump
//----------------------------o
 
function playerJump()
{
    if(isJumping)
    return;
 
    isJumping = true;
    //goTo jump frame
    $(oPlayer).css("background-position", 91)
 
    $(oPlayer).animate({
        bottom: 200},300, 'swing',
        function(){
 
            $(oPlayer).animate({
            bottom: playerFloorYPos},300,'swing',
            function()
            {
            isJumping = false;
            })
 
    })
 
}
 
function createCoin()
{
        var oCoin = document.createElement('div')
        $(oCoin).addClass('coin');
        $('#wrap').append(oCoin);
        arrCoinPool.push(oCoin)
}
