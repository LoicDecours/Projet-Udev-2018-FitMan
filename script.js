const FormConnexion = document.getElementById('FormConnexion');
FormConnexion.addEventListener('submit',function(event){
	event.preventDefault();
	event.stopPropagation();
	let Pseudo = document.getElementById('Pseudo');
	let Password = document.getElementById('Password');
	if (Pseudo.innerHTML == ('Moi') && Password.innerHTML == ('Toi'){
		document.location.href="Profil.html";
	} else {
		prompt('Votre Pseudo/Email ou votre Mot de passe est invalide.');
	}
})