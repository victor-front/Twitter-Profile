const underfinedBack = '#333639'; //Cor de fundo caso o usuário não especifique um background
let users = {//Objeto que contém as informações dos usuários
	nomes: ['Rozavick', 'Gir'],
	nicks: ['@_rozavick', '@Xx_Gir_xX'],
	tweets: [13, 1040],
	desc: ['Olá!', 'Oi, eu sou Gir!'],
	local: ['Brasil', 'Planeta Terra'],
	data: ['Entrou em Janeiro de 2022', 'Entrou em Fevereiro de 1998'],
	segui: [20, 1],
	segs: [40, 409],
	pfps: ['data/img/pfps/rozavick.jpg', 'data/img/pfps/gir.jpg'],
	backs: ['data/img/backgrounds/fnaf1.jpg', false]
}
/*
	nome  : nomes a serem exibidos.
	nicks : nicks de indentificação dos usuários.
	tweets: número de tweets dos usuários.
	desc  : descrições dos usuários.
	local : localidade dos usuários.
	data  : data que tal usuário criou sua conta.
	segui : número de pessoas que os usuários seguem.
	segs  : número de seguidores dos usuários.
	pfps  : caminhos das fotos de perfis dos usuários.
	backs : caminhos das fotos de fundo dos usuários.
*/

//Carcaça do perfil
const user = (nome, nick, tweets, desc, local, data, segui, segs, pfp) => `
		<section class="user" id="${nick}">
			<section class="user-header">
				<section class="user-header2">
					<span class="seta"></span>
					<div class="bloco">
						<h1 class="header2-nick">${nome}</h1>
						<h2 class="header2-tweets">${tweets} tweets</h2>
					</div>
				</section>
				<section class="background-pfp-button-nick">
					<section class="background">
					</section>
					<div class="pfp-button">
						<section class="pfp" style="background-image: url(${pfp});">
						</section>
						<a href="#" class="button">Editar perfil</a>
					</div>
				</section>
				<section class="nome-nick">
					<h1 class="nome">${nome}</h1>
					<h2 class="nick">${nick}</h2>
				</section>
			</section>
			<section class="user-body">
				<section class="descricao">
					<p class="descricao">${desc}</p>
				</section>
				<div class="localidade-data">
					<section class="localidade">
						<p class="local"><img src="data/img/localidade.png" alt="Local" class="localidade-icon">${local}</p>
					</section>
					<section class="data">
						<p class="dat"><img src="data/img/calendario.png" alt="Calendário" class="calen-icon">${data}</p>
					</section>
				</div>
				<div class="seguindo-seguidores">
					<p><strong>${segui}</strong> Seguindo</p><p><strong>${segs}</strong> Seguidores</p>
				</div>
			</section>
			<section class="footer">
				<ul>
					<li><a href="#" rel="next" class="footer-item">Tweets</a></li>
					<li><a href="#" rel="next" class="footer-item">Replies</a></li>
					<li><a href="#" rel="next" class="footer-item">Highlights</a></li>
					<li><a href="#" rel="next" class="footer-item">Media</a></li>
					<li><a href="#" rel="next" class="footer-item">Likes</a></li>
				</ul>
			</section>
		</section>
`

function load(){//dar load nas microfunções fundamentais para o site funcionar
	for(c=0;c < users.nomes.length;c++){
		document.querySelector('main').innerHTML += user(
		users.nomes[c], 
		users.nicks[c], 
		users.tweets[c],
		users.desc[c],
		users.local[c],
		users.data[c],
		users.segui[c],
		users.segs[c],
		users.pfps[c]);
		//Sistema que verifica se o usuário especificou ou não o fundo
		let leback = document.querySelectorAll('.background')[c];
		if(!users.backs[c]){
			leback.style.backgroundColor = underfinedBack;
		}else{
		leback.style.backgroundImage = `url(${users.backs[c]})`;
		}
	}
}load();//Chamar a função load()