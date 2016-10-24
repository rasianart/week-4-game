
var f1 = {
	health: 120,
	attack: 24,
	initHealth: 120,
	initattack: 24
}
var f2 = {
	health: 150,
	attack: 20,
	initHealth: 150,
	initattack: 20
}
var f3 = {
	health: 100,
	attack: 30,
	initHealth: 100,
	initattack: 30,
}
var f4 = {
	health: 180,
	attack: 10,
	initHealth: 180,
	initattack: 10
}

$('#f1').html("Health: " + f1.health.toString() + " " + "Attack: " + f1.attack.toString());
$('#f2').html("Health: " + f2.health.toString() + " " + "Attack: " + f2.attack.toString());
$('#f3').html("Health: " + f3.health.toString() + " " + "Attack: " + f3.attack.toString());
$('#f4').html("Health: " + f4.health.toString() + " " + "Attack: " + f4.attack.toString());

var chosenF;
var chosenE;

$('#attack').on('click', function() {
	if($('*').hasClass('chosenEnemy')) {
		compute();
		$('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
		$('#myAtt').html("You attacked B for " + chosenF.attack + " damage.");
		$('.chosenEnemy').html("Health: " + chosenE.health.toString() + " " + "Attack: " + chosenE.attack.toString());
		$('#oppAtt').html("B attacked you for " + chosenE.attack + " damage.");
		if (chosenF.health < 1) {
			alert("Game Over");
			$('#myAtt, #oppAtt').empty();
		} else if (chosenE.health < 1 && $('.possEnemy').length == 1) {
			alert("You beat them all!");
			chosenF.health = chosenF.initHealth;
			$('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
			$('.chosenEnemy').remove();
			$('#myAtt, #oppAtt').empty();
		} else if (chosenE.health < 1) {
			alert("You won! Choose next opponent");
			chosenF.health = chosenF.initHealth;
			$('.fighter').html("Health: " + chosenF.health.toString() + " " + "Attack: " + chosenF.attack.toString());
			$('.chosenEnemy').remove();
			$('#myAtt, #oppAtt').empty();
		}
	} else {
		return;
	}
});
var compute = function() {
	chosenF.health = chosenF.health - chosenE.attack;
	chosenE.health = chosenE.health - chosenF.attack;
	chosenF.attack = Math.floor(chosenF.attack * 1.3);
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
$('#reset').on('click', function() {
	location.reload();
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

function initE() {
	$('.nowEnemy').on('click', function() {
		if ($('.possEnemy').hasClass('chosenEnemy')) {
			return;
		} else {
			$(this).removeClass('nowEnemy').addClass('chosenEnemy');
			$('.chosenEnemy').appendTo('#enemyCh');
			$('.nowEnemy').removeClass('nowEnemy').addClass('remainEnemy');
			var eID = this.id;
			if (eID == "f1"){
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



