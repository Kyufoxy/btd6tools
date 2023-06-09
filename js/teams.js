const sizeInput = document.getElementById("team-size-input");
const teamOutput = document.getElementById("team-output");

var output;

var teamSize = 3;

const content = [];

const heroBoxes = [];
const primaryBoxes = [];
const militaryBoxes = [];
const magicBoxes = [];
const supportBoxes = [];
const heroLabels = [];
const primaryLabels = [];
const militaryLabels = [];
const magicLabels = [];
const supportLabels = [];

var primary;
const primaryBox = document.getElementById("primary");
const dartBox = document.getElementById("dart");
const dartLabel = document.getElementById("dart-label");
const boomerangBox = document.getElementById("boomerang");
const boomerangLabel = document.getElementById("boomerang-label");
const bombBox = document.getElementById("bomb");
const bombLabel = document.getElementById("bomb-label");
const tackBox = document.getElementById("tack");
const tackLabel = document.getElementById("tack-label");
const iceBox = document.getElementById("ice");
const iceLabel = document.getElementById("ice-label");
const glueBox = document.getElementById("glue");
const glueLabel = document.getElementById("glue-label");

var military;
const militaryBox = document.getElementById("military");
const sniperBox = document.getElementById("sniper");
const sniperLabel = document.getElementById("sniper-label");
const subBox = document.getElementById("sub");
const subLabel = document.getElementById("sub-label");
const buccBox = document.getElementById("bucc");
const buccLabel = document.getElementById("bucc-label");
const aceBox = document.getElementById("ace");
const aceLabel = document.getElementById("ace-label");
const heliBox = document.getElementById("heli");
const heliLabel = document.getElementById("heli-label");
const mortarBox = document.getElementById("mortar");
const mortarLabel = document.getElementById("mortar-label");
const dartlingBox = document.getElementById("dartling");
const dartlingLabel = document.getElementById("dartling-label");

var magic;
const magicBox = document.getElementById("magic");
const wizBox = document.getElementById("wiz");
const wizLabel = document.getElementById("wiz-label");
const supermBox = document.getElementById("superm");
const supermLabel = document.getElementById("superm-label");
const ninjaBox = document.getElementById("ninja");
const ninjaLabel = document.getElementById("ninja-label");
const alchBox = document.getElementById("alch");
const alchLabel = document.getElementById("alch-label");
const druidBox = document.getElementById("druid");
const druidLabel = document.getElementById("druid-label");

var support;
const supportBox = document.getElementById("support");
const farmBox = document.getElementById("farm");
const farmLabel = document.getElementById("farm-label");
const spacBox = document.getElementById("spac");
const spacLabel = document.getElementById("spac-label");
const villageBox = document.getElementById("village");
const villageLabel = document.getElementById("village-label");
const engiBox = document.getElementById("engi");
const engiLabel = document.getElementById("engi-label");
const beastBox = document.getElementById("beast");
const beastLabel = document.getElementById("beast-label");

var hero;
const heroBox = document.getElementById("hero");
const quincyBox = document.getElementById("quincy");
const quincyLabel = document.getElementById("quincy-label");
const gwenBox = document.getElementById("gwen");
const gwenLabel = document.getElementById("gwen-label");
const strikerBox = document.getElementById("striker");
const strikerLabel = document.getElementById("striker-label");
const obynBox = document.getElementById("obyn");
const obynLabel = document.getElementById("obyn-label");
const churchillBox = document.getElementById("churchill");
const churchillLabel = document.getElementById("churchill-label");
const benBox = document.getElementById("ben");
const benLabel = document.getElementById("ben-label");
const eziliBox = document.getElementById("ezili");
const eziliLabel = document.getElementById("ezili-label");
const patBox = document.getElementById("pat");
const patLabel = document.getElementById("pat-label");
const adoraBox = document.getElementById("adora");
const adoraLabel = document.getElementById("adora-label");
const brickellBox = document.getElementById("brickell");
const brickellLabel = document.getElementById("brickell-label");
const etienneBox = document.getElementById("etienne");
const etienneLabel = document.getElementById("etienne-label");
const saudaBox = document.getElementById("sauda");
const saudaLabel = document.getElementById("sauda-label");
const psiBox = document.getElementById("psi");
const psiLabel = document.getElementById("psi-label");
const gerryBox = document.getElementById("gerry");
const gerryLabel = document.getElementById("gerry-label");

heroBoxes.push(quincyBox);
heroBoxes.push(gwenBox);
heroBoxes.push(strikerBox);
heroBoxes.push(obynBox);
heroBoxes.push(churchillBox);
heroBoxes.push(benBox);
heroBoxes.push(eziliBox);
heroBoxes.push(patBox);
heroBoxes.push(adoraBox);
heroBoxes.push(brickellBox);
heroBoxes.push(etienneBox);
heroBoxes.push(saudaBox);
heroBoxes.push(psiBox);
heroBoxes.push(gerryBox);

heroLabels.push(quincyLabel);
heroLabels.push(gwenLabel);
heroLabels.push(strikerLabel);
heroLabels.push(obynLabel);
heroLabels.push(churchillLabel);
heroLabels.push(benLabel);
heroLabels.push(eziliLabel);
heroLabels.push(patLabel);
heroLabels.push(adoraLabel);
heroLabels.push(brickellLabel);
heroLabels.push(etienneLabel);
heroLabels.push(saudaLabel);
heroLabels.push(psiLabel);
heroLabels.push(gerryLabel);

primaryBoxes.push(dartBox);
primaryBoxes.push(boomerangBox);
primaryBoxes.push(bombBox);
primaryBoxes.push(tackBox);
primaryBoxes.push(iceBox);
primaryBoxes.push(glueBox);

primaryLabels.push(dartLabel);
primaryLabels.push(boomerangLabel);
primaryLabels.push(bombLabel);
primaryLabels.push(tackLabel);
primaryLabels.push(iceLabel);
primaryLabels.push(glueLabel);

militaryBoxes.push(sniperBox);
militaryBoxes.push(subBox);
militaryBoxes.push(buccBox);
militaryBoxes.push(aceBox);
militaryBoxes.push(heliBox);
militaryBoxes.push(mortarBox);
militaryBoxes.push(dartlingBox);

militaryLabels.push(sniperLabel);
militaryLabels.push(subLabel);
militaryLabels.push(buccLabel);
militaryLabels.push(aceLabel);
militaryLabels.push(heliLabel);
militaryLabels.push(mortarLabel);
militaryLabels.push(dartlingLabel);

magicBoxes.push(wizBox);
magicBoxes.push(supermBox);
magicBoxes.push(ninjaBox);
magicBoxes.push(alchBox);
magicBoxes.push(druidBox);

magicLabels.push(wizLabel);
magicLabels.push(supermLabel);
magicLabels.push(ninjaLabel);
magicLabels.push(alchLabel);
magicLabels.push(druidLabel);

supportBoxes.push(farmBox);
supportBoxes.push(spacBox);
supportBoxes.push(villageBox);
supportBoxes.push(engiBox);
supportBoxes.push(beastBox);

supportLabels.push(farmLabel);
supportLabels.push(spacLabel);
supportLabels.push(villageLabel);
supportLabels.push(engiLabel);
supportLabels.push(beastLabel);

function inputHandlerSize(e) {
	teamSize = e.target.value;
	if(teamSize < 0) {
		sizeInput.value = 3;
	}
	if(teamSize === 0) {
		teamSize = 3;
	} else if(teamSize > 23) {
		sizeInput.value = 23;
		teamSize = 23;
	}
}

function resetColors() {
	for(let i = 0; i < heroLabels.length; i++) {
		heroLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < militaryLabels.length; i++) {
		militaryLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < primaryLabels.length; i++) {
		primaryLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < militaryLabels.length; i++) {
		militaryLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < magicLabels.length; i++) {
		magicLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < supportLabels.length; i++) {
		supportLabels[i].style.color = "#87CEEB";
	}
	return;
}

function togglePrimary() {
	for(let i = 0; i < primaryBoxes.length; i++) {
		primaryBoxes[i].checked = primary;
		primaryBoxes[i].disabled = !primary;
	}
	return;
}

function toggleMilitary() {
	for(let i = 0; i < militaryBoxes.length; i++) {
		militaryBoxes[i].checked = military;
		militaryBoxes[i].disabled = !military;
	}
	return;
}

function toggleMagic() {
	for(let i = 0; i < magicBoxes.length; i++) {
		magicBoxes[i].checked = magic;
		magicBoxes[i].disabled = !magic;
	}
	return;
}

function toggleSupport() {
	for(let i = 0; i < supportBoxes.length; i++) {
		supportBoxes[i].checked = support;
		supportBoxes[i].disabled = !support;
	}
	return;
}

function toggleHero() {
	for(let i = 0; i < heroBoxes.length; i++) {
		heroBoxes[i].checked = hero;
		heroBoxes[i].disabled = !hero;
	}
	return;
}

function inputHandler(e) {
	count = e.target.value;
	return;
}

function roll() {
	let heroFound = 0;
	let count = 0;
	let choice;
	content.length = 0;
	output = "";
	
	if(quincyBox.checked === true) {
		content.push(quincyLabel);
	}
	if(gwenBox.checked === true) {
		content.push(gwenLabel);
	}
	if(strikerBox.checked === true) {
		content.push(strikerLabel);
	}
	if(obynBox.checked === true) {
		content.push(obynLabel);
	}
	if(churchillBox.checked === true) {
		content.push(churchillLabel);
	}
	if(benBox.checked === true) {
		content.push(benLabel);
	}
	if(eziliBox.checked === true) {
		content.push(eziliLabel);
	}
	if(patBox.checked === true) {
		content.push(patLabel);
	}
	if(adoraBox.checked === true) {
		content.push(adoraLabel);
	}
	if(brickellBox.checked === true) {
		content.push(brickellLabel);
	}
	if(etienneBox.checked === true) {
		content.push(etienneLabel);
	}
	if(saudaBox.checked === true) {
		content.push(saudaLabel);
	}
	if(psiBox.checked === true) {
		content.push(psiLabel);
	}
	if(gerryBox.checked === true) {
		content.push(gerryLabel);
	}
	
	for(let i = 0; i < content.length; i++) {
		content[i].style.color = "#87CEEB";
	}

	if(content.length > 0) {
		choice = content[Math.floor(Math.random()*content.length)];
		output += choice.innerHTML + " ";
		choice.style.color = "yellow";
		heroFound = 1;
	}
	
	content.length = 0;
	
	if(dartBox.checked === true) {
		content.push(dartLabel);
		count++;
	}
	if(boomerangBox.checked === true) {
		content.push(boomerangLabel);
		count++;
	}
	if(bombBox.checked === true) {
		content.push(bombLabel);
		count++;
	}
	if(tackBox.checked === true) {
		content.push(tackLabel);
		count++;
	}
	if(iceBox.checked === true) {
		content.push(iceLabel);
		count++;
	}
	if(glueBox.checked === true) {
		content.push(glueLabel);
		count++;
	}
	

	if(sniperBox.checked === true) {
		content.push(sniperLabel);
		count++;
	}
	if(subBox.checked === true) {
		content.push(subLabel);
		count++;
	}
	if(buccBox.checked === true) {
		content.push(buccLabel);
		count++;
	}
	if(aceBox.checked === true) {
		content.push(aceLabel);
		count++;
	}
	if(heliBox.checked === true) {
		content.push(heliLabel);
		count++;
	}
	if(mortarBox.checked === true) {
		content.push(mortarLabel);
		count++;
	}
	if(dartlingBox.checked === true) {
		content.push(dartlingLabel);
		count++;
	}
	
	if(wizBox.checked === true) {
		content.push(wizLabel);
		count++;
	}
	if(supermBox.checked === true) {
		content.push(supermLabel);
		count++;
	}
	if(ninjaBox.checked === true) {
		content.push(ninjaLabel);
		count++;
	}
	if(alchBox.checked === true) {
		content.push(alchLabel);
		count++;
	}
	if(druidBox.checked === true) {
		content.push(druidLabel);
		count++;
	}
	
	if(farmBox.checked === true) {
		content.push(farmLabel);
		count++;
	}
	if(spacBox.checked === true) {
		content.push(spacLabel);
		count++;
	}
	if(villageBox.checked === true) {
		content.push(villageLabel);
		count++;
	}
	if(engiBox.checked === true) {
		content.push(engiLabel);
		count++;
	}
	if(beastBox.checked === true) {
		content.push(beastLabel);
		count++;
	}
	
	for(let i = 0; i < content.length; i++) {
		content[i].style.color = "#87CEEB";
	}
	
	if (teamSize.length === 0) {
		sizeInput.value = 3;
		teamSize = 3;
	}
	
	if(count < teamSize) {
		sizeInput.value = count;
		teamSize = count;
	}
	
	if(count >= 1) {
		if(heroFound === 1) {
			output += "> "
		}
		for(let i = 0; i < teamSize; i++) {
			choice = content[Math.floor(Math.random()*content.length)];
			output += choice.innerHTML + " ";
			choice.style.color = "yellow";
			content.splice(content.indexOf(choice), 1);
		}
		teamOutput.value = output;	
	}
	
	if(content.length === 0) {
		teamOutput.value = output;
	}
	return;
}

sizeInput.addEventListener("input", inputHandlerSize);