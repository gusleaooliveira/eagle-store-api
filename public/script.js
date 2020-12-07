function getById(id){
    return document.querySelector('#'+id).value;
}
function verificar(msg){
    return confirm(msg);
}
function recarregar(){
    window.location.reload(false);
}
function copy(id){
    let copyText = document.querySelector('#'+id);
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    document.execCommand("copy");
    alert('Texto copiado: '+copyText.value)
}
function executar(metodo, cabecalho, url, corpo){
    if(verificar('Deseja continuar?')){
        fetch(url, { method: metodo, headers: cabecalho, body: corpo })
            .then((res) => {alert('Sucesso ao executar!'); recarregar(); })
            .catch((erro) => {alert('Erro ao executar!'); recarregar(); })
    }
    else{
        alert('Você cancelou!');
    }
}
function executarBasico(metodo, url){
    if(verificar('Deseja continuar?')){
        fetch(url, {method: metodo})
            .then((res) => { alert('Sucesso ao executar!'); recarregar(); })
            .catch((erro) => { alert('Erro ao executar!'); recarregar(); })
    }
    else{
        alert('Você cancelou!');
    }
}

function crud(metodo, formulario, id) {
    let corpo = '',
        url = '',
        cabecalho = { 'Content-Type': 'application/json' };
    if(formulario == 'categoria'){
        if(metodo == 'POST'){
            corpo = JSON.stringify({
                'categoria': getById('categoria'),
                'icone': getById('icone')
            });
            url = '/view/categoria/';

            executar(metodo, cabecalho, url, corpo);
        }
        if(metodo == 'PUT'){
            corpo = JSON.stringify({
                'categoria': getById('categoria'),
                'icone': getById('icone')
            });
            url = `/view/categoria/${getById('idCategoria')}`;

            executar(metodo, cabecalho, url, corpo);
        }
        if(metodo == 'DELETE'){
            url = `/view/categoria/${id}`;

            executarBasico(metodo, url);
        }
    }
    if(formulario == 'aplicativo'){
        if(metodo == 'POST'){
            corpo = JSON.stringify({
                'categorias': [
                    getById('idCategoria'),
                    getById('idCategoriaTodos'),
                ],
                'nome': getById('nome'),
                'slogan': getById('slogan'),
                'versao': getById('versao'),
                'licenca': getById('licenca'),
                'descricao': getById('descricao'),
                'comandoSnap': [
                    getById('estavel'),
                    getById('edge'),
                    getById('beta'),
                    getById('candidate')
                ],
                'comandoFlatpak': getById('flatpak')
            });
            console.log(corpo);
            url = '/view/aplicativo/cadastro/';

            executar(metodo, cabecalho, url, corpo);
        }
        if(metodo == 'PUT'){
            corpo = JSON.stringify({
                'categorias': [
                    getById('idCategoria'),
                    getById('idCategoriaTodos'),
                ],
                'nome': getById('nome'),
                'slogan': getById('slogan'),
                'versao': getById('versao'),
                'licenca': getById('licenca'),
                'descricao': getById('descricao'),
                'comandoSnap': [
                    getById('estavel'),
                    getById('edge'),
                    getById('beta'),
                    getById('candidate')
                ],
                'comandoFlatpak': getById('flatpak')
            });
            url = `/view/aplicativo/${getById('id')}`;

            executar(metodo, cabecalho, url, corpo);
        }
        if(metodo == 'DELETE'){
            url = `/view/aplicativo/${id}`;
            
            executarBasico(metodo, url);
        }
    }
    if(formulario == 'tipo'){
        if(metodo == 'POST'){
            corpo = JSON.stringify({
                'tipo': getById('tipo')
            });
            console.log(corpo);
            url = '/view/tipo/';

            executar(metodo, cabecalho, url, corpo);
        }
        if(metodo == 'PUT'){
            corpo = JSON.stringify({
                'tipo': getById('tipo')
            });
            url = `/view/aplicativo/${getById('id')}`;

            executar(metodo, cabecalho, url, corpo);
        }
        if(metodo == 'DELETE'){
            url = `/view/aplicativo/${id}`;
            
            executarBasico(metodo, url);
        }
    }
}