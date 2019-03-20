let winner=Math.floor(Math.random() * 4) + 1;;
document.getElementById("winner").innerHTML=winner;
function guess(n) {
	if (n==winner) {
		document.getElementById(n).src="card1.jpg";
		document.getElementById("winnerText").innerHTML="YOU WINN!!!";
		document.getElementById("winnerText").className = "win";
	}
	else {
		document.getElementById("winnerText").innerHTML="WRONG. TRY AGIAN!!!";
		document.getElementById("winnerText").className = "lose";
	}
}

