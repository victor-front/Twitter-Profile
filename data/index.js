function load(){
	profiles = {
		tweets: [3, 9],
		followers: [20, "10.000"],
		following: [28, 27],
		names: ["Rozavick", "Zanetick"],
		ids: ["_rozavick", "zanes13"],
		pfps: [
		"https://avatarfiles.alphacoders.com/259/thumb-259289.png", 
		"https://wallpapers-clan.com/wp-content/uploads/2022/07/sonic-pfp-2.jpg"
		],
		themes: [
		"https://images2.alphacoders.com/941/941898.jpg", 
		"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/09/sonic-green-hill-zone.jpg"
		],
		descs: ["Olá, eu sou Rozavick.<br>Gosto de DDLC<br>Gosto de ouvir músicas Xd", "Irei dominar toda a Internet de ponta a ponta.<br>Nada me impedirá, muito menos um ferro quadrado!"],
		data: ["Joined January 2022", "Joined January 2022"]
	}
	
	for(c=0; c<profiles.names.length; c++){
		let el = document.createElement('section');
		el.setAttribute('id', `user-container${c}`);
		el.classList.add('user-container');
		el.innerHTML = `
			<div id="user-top-row" class="user-top-row">
				<div class="envolv">
					<img src="img/seta.png" class="seta">
				</div>
				<div id="about" class="about">
					<h1>${profiles.names[c]}</h1>
					<p>${profiles.tweets[c]} Tweets</p>
				</div>
			</div>
			<div id="user-header${c}" class="user-header">			
			</div>
			<div id="user-body" class="user-body">
				<img id="pfp" class="pfp" src="${profiles.pfps[c]}" alt="Profile Picture">
				<input type="button" class="e-button" value="Edit profile">
				<div id="user-nick-container" class="user-nick-container">
					<h1 id="nick" class="nick">${profiles.names[c]}</h1>
					<h2 id="id" class="id">@${profiles.ids[c]}</h2>
				</div>
				<div id="user-description" class="user-description">
					<p>${profiles.descs[c]}</p>
				</div>
				<div id="date" class="date">
					<img src="img/cal.png" class="graphyc"><p>${profiles.data[c]}</p>
				</div>
				<div id="ranking" class="ranking">
					<a class="linran" href="#"><strong class="destaque">${profiles.following[c]}</strong> Following</a>
					<a class="linran" href="#"><strong class="destaque">${profiles.followers[c]}</strong> Followers</a>
				</div>
			</div>
			<div id="user-footer" class="user-footer">
				<a href="#" class="botao selected">Tweets</a>
				<a href="#" class="botao">Tweets & replies</a>
				<a href="#" class="botao">Media</a>
				<a href="#" class="botao">Likes</a>
			</div>
		`;
		document.body.appendChild(el);
		document.getElementById(`user-header${c}`).style.backgroundImage = `url(${profiles.themes[c]})`;
	}
	let footer = document.createElement('footer');
	footer.innerHTML = `
		<p>Made by <strong><a href="https://victor-4guiar.github.io/portifolio-victor/" rel="external" target="_blank">Victor Aguiar</a></strong></p>
	`
	document.body.appendChild(footer);
}