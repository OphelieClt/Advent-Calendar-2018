var date = moment.tz("2018-12-24 00:00:00", "France");
CountDownTimer(date, $(".count-down"));

function CountDownTimer(dt, selector) {

	var end = new Date(dt);
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;
	var tmpDays = tmpHours = tmpMinutes = tmpSeconds = 0;

	function resetTemp(){
		
		tmpDays = tmpHours = tmpMinutes = tmpSeconds = 0;
	}

	function doubDig(amount){
		
		return ( ( "0" + String(amount)).slice( -2 ) );
	}

	function tripDig(amount){

		return ( ( "00" + String(amount)).slice( -3 ) );
	}

	function showRemaining() {
		
		var now = moment.tz("France");
		var distance = end - now;
		if ( distance < 0 ) {

			clearInterval(timer);
			$(".count-down").remove();
			return;
		}
		var days    = tripDig( Math.floor( distance / _day ) );
		var hours   = doubDig( Math.floor( ( distance % _day ) / _hour) );
		var minutes = doubDig( Math.floor( ( distance % _hour ) / _minute) );
		var seconds = doubDig( Math.floor( ( distance % _minute ) / _second) );
		resetTemp();
	
		var curSecond = 60;
		function curSecondCountDown(){
			
			curSecond--;
			if (curSecond > 0){
				
				setTimeout(function() { curSecondCountDown() }, 16 );
			}
		}
		curSecondCountDown();
		
		function setDays(){
			
			if ( Number( selector.find(".days").html() ) !== Number( days ) ) {

				if (tmpDays === 0){

					tmpDays = Number( selector.find(".days").html() );                            
				}
				if ( tmpDays > Number(days) ) {

					tmpDays -= 1 ;

				} else {

					tmpDays += 1 ;
				}
				if (curSecond > 0){
					
					selector.find(".days").html( tripDig( tmpDays ) );                    
					setTimeout(function() { setDays() }, 1000 / 60 );
				}
			}
		}
		setDays();
		

		function setHours(){
			
			if ( Number( selector.find(".hours").html() ) !== Number( hours ) ) {

				if (tmpHours === 0){

					tmpHours = Number( selector.find(".hours").html() );                            
				}
				if ( tmpHours > Number(hours) ) {

					tmpHours -= 1 ;

				} else {

					tmpHours += 1 ;
				}
				if (curSecond > 0){
					
					selector.find(".hours").html( doubDig( tmpHours ) );                    
					setTimeout(function() { setHours() }, 1000 / 60 );
				}
			}
		}
		setHours();


		function setMinutes(){
			
			if ( Number( selector.find(".minutes").html() ) !== Number( minutes ) ) {

				if (tmpMinutes === 0){

					tmpMinutes = Number( selector.find(".minutes").html() );                            
				}
				if ( tmpMinutes > Number(minutes) ) {

					tmpMinutes -= 1 ;

				} else {

					tmpMinutes += 1 ;
				}

				if (curSecond > 0){
					
					selector.find(".minutes").html( doubDig( tmpMinutes ) );                    
					setTimeout(function() { setMinutes() }, 1000 / 60 );
				}
			}
		}
		setMinutes();


		function setSeconds(){
			
			if ( Number( selector.find(".seconds").html() ) !== Number( seconds ) ) {

				if (tmpSeconds === 0){

					tmpSeconds = Number( selector.find(".seconds").html() );                            
				}
				if ( tmpSeconds > Number(seconds) ) {

					tmpSeconds -= 1 ;

				} else {

					tmpSeconds += 1 ;
				}

				if (curSecond > 0){
					
					selector.find(".seconds").html( doubDig( tmpSeconds ) );
					setTimeout(function() { setSeconds() }, 1000 / 60 );
				}
			}
		}
		setSeconds();

	}

	timer = setInterval(showRemaining, 1000);
}   


(function(d) {
	
	var config = {
		kitId: 'hsu1oea',
		scriptTimeout: 3000
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
