$(document).ready(function () {

    const avatar = $('.profile-avatar');
    const nome = $('.profile-name');
    const perfil = $('.profile-username');
    const repositorios = $('.repositorios');
    const seguidores = $('.seguidores');
    const seguindo = $('.seguindo');

    fetch('https://api.github.com/users/ogiansouza')
        .then(function (res) {
            return (res.json());
        })

        .then(function (json) {
            avatar.attr('src', json.avatar_url);
            repositorios.text(json.public_repos);
            seguidores.text(json.followers);
            seguindo.text(json.following);
            nome.text(json.name);
            perfil.text(json.login);
        })
        .catch(function (err) {
            console.error('Erro ao buscar informações:', err);
        });
})


