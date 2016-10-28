// players(objects)
var f1 = {
    health: 120,
    attack: 25,
    initHealth: 120,
    counter: 1.3
};
var f2 = {
    health: 150,
    attack: 15,
    initHealth: 150,
    counter: 1.4
};
var f3 = {
    health: 140,
    attack: 40,
    initHealth: 140,
    counter: 1.2
};
var f4 = {
    health: 180,
    attack: 50,
    initHealth: 180,
    counter: 1.1
};

// variables dedicated to the current chosen fighter and enemy
var chosenF;
var chosenE;

// prints intial player info upon page load
$('#f1').html("<img src='assets/images/sym1.png' width='20px'>" + " &nbsp;&nbsp;Health: " + f1.health.toString() + " &nbsp;&nbsp;" + "Attack: " + f1.attack.toString() + " &nbsp;&nbsp;" + "Counter: " + f1.counter.toString());
$('#f2').html("<img src='assets/images/sym2.png' width='20px'>" + " &nbsp;&nbsp;Health: " + f2.health.toString() + " &nbsp;&nbsp;" + "Attack: " + f2.attack.toString() + " &nbsp;&nbsp;" + "Counter: " + f2.counter.toString());
$('#f3').html("<img src='assets/images/sym3.png' width='20px'>" + " &nbsp;&nbsp;Health: " + f3.health.toString() + " &nbsp;&nbsp;" + "Attack: " + f3.attack.toString() + " &nbsp;&nbsp;" + "Counter: " + f3.counter.toString());
$('#f4').html("<img src='assets/images/sym6.png' width='20px'>" + " &nbsp;&nbsp;Health: " + f4.health.toString() + " &nbsp;&nbsp;" + "Attack: " + f4.attack.toString() + " &nbsp;&nbsp;" + "Counter: " + f4.counter.toString());

// next four click events control the functions and class reassignments that correspond to each player
$('#f1').one('click', function() {
    if ($('#f1').hasClass('possEnemy')) {
        return;
    } else {
        var audio2 = new Audio('assets/audio/select_remaining.mp3');
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f1;
        audio2.play();
        initE();
        return;
    }
});
$('#f2').one('click', function() {
    if ($('#f2').hasClass('possEnemy')) {
        return;
    } else {
        var audio2 = new Audio('assets/audio/select_remaining.mp3');
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f2;
        audio2.play();
        initE();
        return;
    }
});
$('#f3').one('click', function() {
    if ($('#f3').hasClass('possEnemy')) {
        return;
    } else {
        var audio2 = new Audio('assets/audio/select_remaining.mp3');
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f3;
        audio2.play();
        initE();
        return;
    }
});
$('#f4').one('click', function() {
    if ($('#f4').hasClass('possEnemy')) {
        return;
    } else {
        var audio2 = new Audio('assets/audio/select_remaining.mp3');
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f4;
        audio2.play();
        initE();
        return;
    }
});

// initalizes the chosen enemy when clicked and reassigns classes
function initE() {
    $('.nowEnemy').on('click', function() {
        if ($('.possEnemy').hasClass('chosenEnemy')) {
            return;
        } else {
            audio3.play();
            audio3 = new Audio('assets/audio/empty.mp3');
            $(this).removeClass('nowEnemy remainEnemy').addClass('chosenEnemy');
            $('.chosenEnemy').appendTo('#enemyCh');
            $('.nowEnemy').removeClass('nowEnemy').addClass('remainEnemy');
            var eID = this.id;
            if (eID == "f1") {
                chosenE = f1;
            } else if (eID == "f2") {
                chosenE = f2;
            } else if (eID == 'f3') {
                chosenE = f3;
            } else if (eID == 'f4') {
                chosenE = f4;
            }
            console.log($('.possEnemy').length);
            return;
        }
    });
}

// on attack 
$('.attack').on('click', function() {
    if ($('*').hasClass('chosenEnemy')) {
        $('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString() + " " + "Counter: " + chosenF.counter.toString());
        $('#myAtt').html("You attacked B for " + chosenF.attack + " damage.");
        $('.chosenEnemy').html("Health: " + chosenE.health.toString() + " " + "Attack: " + chosenE.attack.toString() + " " + "Counter: " + chosenE.counter.toString());
        $('#oppAtt').html("B countered you for " + chosenE.attack + " damage.");
        compute();
        $('.fighter').width(chosenF.health / chosenF.initHealth * 100 + '%');
        $('.chosenEnemy').width(chosenE.health / chosenE.initHealth * 100 + '%');
        if (chosenF.health < 1) {
            var audio6 = new Audio('assets/audio/death.mp3');
            audio6.play();
            $('#youWon').css({ 'opacity': '0.6', 'z-index': 8 }).html('You have been conquered by death.  Farewell.');
            $('#youWon').on('click', function() {
                location.reload();
            })
            $('#myAtt, #oppAtt').empty();
        } else if (chosenE.health < 1 && $('.possEnemy').length == 1) {
            var audio5 = new Audio('assets/audio/win.mp3');
            audio5.play();
            chosenF.health = chosenF.initHealth;
            $('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
            $('.chosenEnemy').remove();
            $('.fighter').width(chosenF.health / chosenF.initHealth * 100 + '%');
            $('#youWon').css({ 'opacity': '0.6', 'z-index': 8 }).html('You have conquered all life.  Congratulations.');
            $('#youWon').on('click', function() {
                location.reload();
            })
            $('#myAtt, #oppAtt').empty();
        } else if (chosenE.health < 1) {
            var audio4 = new Audio('assets/audio/continue3.mp3');
            audio4.play();
            chosenF.health = chosenF.initHealth;
            $('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
            $('.chosenEnemy').remove();
            $('.fighter').width(chosenF.health / chosenF.initHealth * 100 + '%');
            $('#youWon').css({ 'opacity': '0.6', 'z-index': 8 }).html('You have conquered life.  Continue.');
            $('#youWon').on('click', function() {
                    $(this).css({ 'opacity': '0.0', 'z-index': -1 });
                })
                // alert("You won! Choose next opponent");
            $('#myAtt, #oppAtt').empty();
        }
    } else {
        return;
    }
});

// computes health and attack 
var compute = function() {
    chosenF.attack = Math.floor(chosenF.attack * chosenF.counter);
    chosenF.health = chosenF.health - chosenE.attack;
    chosenE.health = chosenE.health - chosenF.attack;
    
    // chosenF.attack = Math.floor(chosenF.attack * 1.1);
};

// cheap reset
$('#sym5').on('click', function() {
    location.reload();
});

var audio3 = new Audio('assets/audio/attack.mp3');

// jquery/css effects
$('#sym5').mouseenter(function() {
    $('#reset').css({ 'opacity': '1.0', 'z-index': 2 });
});
$('#sym5').mouseleave(function() {
    $('#reset').css({ 'opacity': '0.0', 'z-index': -1 });
});
$('#init').click(function() {
    $(this).fadeOut('slow');
    var audio1 = new Audio('assets/audio/fourbarssm2.mp3');
    audio1.play();
});
$('.progress-bar').mouseenter(function() {
    var blip = new Audio('assets/audio/blip.mp3');
    blip.play();
});
$('.attack').mouseenter(function() {
    var blip2 = new Audio('assets/audio/high_button.mp3');
    blip2.volume = 0.1;
    blip2.play();
});
$('#letScroll').fadeOut(0).delay(1000*5).fadeIn(1850);
