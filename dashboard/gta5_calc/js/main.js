function calculate() {
	var wpisane = document.getElementById('kasa').value
	var money = wpisane * 1000000;
	
	var red = Math.floor(money / 100000);
	var tiger = Math.floor(money / 200000);
	var bull = Math.floor(money / 500000);
	
	var great = Math.floor(money / 1250000);
	var whale = Math.floor(money / 3500000);
	var megalodon = Math.floor(money / 8000000);
	
	var red_zl = (red * 10.9).toFixed(2);
	var tiger_zl = (tiger * 17.9).toFixed(2);
	var bull_zl = (bull * 32.9).toFixed(2);
	
	var great_zl = (great * 64.9).toFixed(2);
	var whale_zl = (whale * 163.9).toFixed(2);
	var megalodon_zl = (megalodon * 322.9).toFixed(2);
	
	document.getElementById('red').value = red;
	document.getElementById('tiger').value = tiger;
	document.getElementById('bull').value = bull;
	
	document.getElementById('great').value = great;
	document.getElementById('whale').value = whale;
	document.getElementById('megalodon').value = megalodon;
	
	document.getElementById('red_zl').value = red_zl;
	document.getElementById('tiger_zl').value = tiger_zl;
	document.getElementById('bull_zl').value = bull_zl;
	
	document.getElementById('great_zl').value = great_zl;
	document.getElementById('whale_zl').value = whale_zl;
	document.getElementById('megalodon_zl').value = megalodon_zl;
	
	//dodatkowe
	var out = 0;
	
	if (megalodon_zl != 0){
		out = megalodon_zl;
	}
	else if (whale_zl != 0){
		out = whale_zl;
	}
	else if (great_zl != 0){
		out = great_zl;
	}
	else if (bull_zl != 0){
		out = bull_zl;
	}
	else if (tiger_zl != 0){
		out = tiger_zl;
	}
	else if (red_zl != 0){
		out = red_zl;
	}
	
	document.getElementById("more_bttn").style.visibility = "visible";
	
	document.getElementById('banan').value = Math.floor(out/5);
	document.getElementById('beer').value = Math.floor(out/2.30);
	document.getElementById('gta').value = Math.floor(out/129.90);
	document.getElementById('styro').value = Math.floor(out/70);
	document.getElementById('kebs').value = Math.floor(out/17);
	document.getElementById('ruda').value = Math.floor(out/150);
}

function more_info() {
	document.getElementById("more").style.visibility = "visible";
}