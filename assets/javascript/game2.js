// function player (name="default",health, attack, initHealth, counter) {
//  this.name = name;
// 	this.health = health;
// 	this.attack = attack;
// 	this.initHealth = initHealth;
// 	this.counter = counter;
// }


var f1 = {
    health: 120,
    attack: 8,
    initHealth: 120,
    counter: 8
};
var f2 = {
    health: 150,
    attack: 6,
    initHealth: 150,
    counter: 6
};
var f3 = {
    health: 100,
    attack: 10,
    initHealth: 100,
    counter: 10,
};
var f4 = {
    health: 180,
    attack: 5,
    initHealth: 180,
    counter: 5
};

// $('#attack').on('click', function() {
// var players = []; 
// var healthArr = [100, 120, 140, 180];
// ["Sarah", "Chanel", "Nepta", "Glasser"].forEach(function(itm) {
// 	players.push(new player(itm));
// 	// console.log(players);
// 	});
// players.forEach(function(i) {
// 	Object.prototype.health = healthArr[i];
// 	console.log(players);

// });
// 	$('#characters').append("<div id=></div>").html(chosenP)})
// });


$('#f1').html("Demon - Health: " + f1.health.toString() + " " + "Attack: " + f1.attack.toString() + " " + "Counter: " + f1.counter.toString());
$('#f2').html("Monster - Health: " + f2.health.toString() + " " + "Attack: " + f2.attack.toString() + " " + "Counter: " + f2.counter.toString());
$('#f3').html("Zombie - Health: " + f3.health.toString() + " " + "Attack: " + f3.attack.toString() + " " + "Counter: " + f3.counter.toString());
$('#f4').html("Nightmare - Health: " + f4.health.toString() + " " + "Attack: " + f4.attack.toString() + " " + "Counter: " + f4.counter.toString());

var chosenF;
var chosenE;

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
            alert("Game Over");
            $('#myAtt, #oppAtt').empty();
            location.reload();
        } else if (chosenE.health < 1 && $('.possEnemy').length == 1) {
            chosenF.health = chosenF.initHealth;
            $('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
            $('.chosenEnemy').remove();
            $('.fighter').width(chosenF.health / chosenF.initHealth * 100 + '%');
            alert("You beat them all!");
            $('#myAtt, #oppAtt').empty();
        } else if (chosenE.health < 1) {
            chosenF.health = chosenF.initHealth;
            $('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
            $('.chosenEnemy').remove();
            $('.fighter').width(chosenF.health / chosenF.initHealth * 100 + '%');
            alert("You won! Choose next opponent");
            $('#myAtt, #oppAtt').empty();
        }
    } else {
        return;
    }
});
var compute = function() {
    chosenF.health = chosenF.health - chosenE.attack;
    chosenE.health = chosenE.health - chosenF.attack;
    chosenF.attack = chosenF.attack + chosenF.counter;
    // chosenF.attack = Math.floor(chosenF.attack * 1.1);
};

$('#f1').one('click', function() {
    if ($('#f1').hasClass('possEnemy')) {
        return;
    } else {
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f1;
        initE();
        return;
    }
});

$('#f2').one('click', function() {
    if ($('#f2').hasClass('possEnemy')) {
        return;
    } else {
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f2;
        initE();
        return;
    }
});

$('#f3').one('click', function() {
    if ($('#f3').hasClass('possEnemy')) {
        return;
    } else {
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f3;
        initE();
        return;
    }
});

$('#f4').one('click', function() {
    if ($('#f4').hasClass('possEnemy')) {
        return;
    } else {
        $(this).removeClass('all').addClass('fighter');
        $('.all').removeClass('all').addClass('nowEnemy possEnemy');
        $('.nowEnemy').appendTo('#enemyAvail');
        chosenF = f4;
        initE();
        return;
    }
});

// cheap reset
$('#sym5').on('click', function() {
    location.reload();
});

function initE() {
    $('.nowEnemy').on('click', function() {
        if ($('.possEnemy').hasClass('chosenEnemy')) {
            return;
        } else {
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

$('#sym5').mouseenter(function () {
	$('#reset').css('opacity', '1.0');
});
$('#sym5').mouseleave(function () {
	$('#reset').css('opacity', '0.0');
});

// $('#reset').on('click', function() {
// 	$('#f1, #f2, #f3, #f4').removeClass();
// 	$('#myAtt, #oppAtt').empty();
// 	$('#f1, #f2, #f3, #f4').appendTo('#characters');
// 	var chosenE;
// 	var chosenF;
// 	f1.attack = f1.initattack;
// 	f1.health = f1.initHealth;
// 	f2.attack = f2.initattack;
// 	f2.health = f2.initHealth;
// 	f3.attack = f3.initattack;
// 	f3.health = f3.initHealth;
// 	f4.attack = f4.initattack;
// 	f4.health = f4.initHealth;
// 	$('#f1').html("Health: " + f1.health.toString() + " " + "Attack: " + f1.attack.toString());
// 	$('#f2').html("Health: " + f2.health.toString() + " " + "Attack: " + f2.attack.toString());
// 	$('#f3').html("Health: " + f3.health.toString() + " " + "Attack: " + f3.attack.toString());
// 	$('#f4').html("Health: " + f4.health.toString() + " " + "Attack: " + f4.attack.toString());
// 	// console.log(chosenE, chosenF);
// });
