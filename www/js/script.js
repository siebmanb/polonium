$( document ).ready(function() {
	changepage('homeP');
});

function changepage(name) {
	setTimeout(function() {
		$('#content').html($('#' + name).html());
		$('#content').attr('class','');
		$('#content').addClass(name);
		$('#content').css('background-color',$('#' + name).attr('color'));
		$('#content .btn').css('color',$('#' + name).attr('color'));
		attacheListeners();
	}, 50);

	var duration = 0.5, direction = "right";
	if (typeof nativetransitions != 'undefined') 
		nativetransitions.flip(duration, direction);

	if (name == 'successP') {
		window.plugin.notification.local.add({ id:1, badge: '84', message: 'Internet is back!' });
	}
}

function attacheListeners() {
	$('#content #start').on('click', function() {
		changepage('launchP');
		stop();
	});

	$('#content #back').on('click', function() {
		changepage('homeP');
		stop();
	});

	$('#content #stop').on('click', function() {
		changepage('homeP');
		stop();
	});

	$('#content #launch').on('click', function() {
		if(hostReachable()) {
			stop();
			changepage('successP');
		}else {
			changepage('pollP');
			$('.trials').html("I just tried for the 1st time, no luck.");
			poll();
		}
	});
}

var watch;
var trials = 1;
function poll() {
	if (window.plugin) window.plugin.backgroundMode.enable();
	trials = 1;
	watch = setInterval(function(){
		trials++;
		if(hostReachable()) {
			stop();
			changepage('successP');
		} else {
			var str = trials + '';
			switch (str[str.length-1]) {
			case '1':
				if (str == '11') {
					str += 'th';
				} else {
					str += 'st';
				}
				break;
			case '2':
				if (str == '12') {
					str += 'th';
				} else {
					str += 'nd';
				}
				break;
			case '3':
				if (str == '13') {
					str += 'th';
				} else {
					str += 'rd';
				}
				break;
			default:
				str += 'th';
			}
			$('.trials').html("I just tried for the " + str + " time, no luck.");
		}
	},1000);
}

function stop() {
	if (window.plugin) window.plugin.backgroundMode.disable();
	window.clearInterval(watch);
}

function hostReachable() {
	// Handle IE and more capable browsers
	var xhr = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
	var status;

	// Open new request as a HEAD to the root hostname with a random param to bust the cache
	xhr.open( "HEAD", "http://butterflyeffect.fr/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );

	// Issue request and handle response
	try {
		xhr.send();
		return ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 );
	} catch (error) {
		return false;
	}
}



// more complexe test (chargement image ?)