var tipo_pesquisa;
function tipos_exibir(tipo) {
    document.getElementById('tipo_template').style.display = 'block'
    if (tipo == 'furto_roubo'){
        document.getElementById('t_tipo_pesquisa').textContent = 'Furto e Roubo';
        tipo_pesquisa = 'furto_roubo';
    }
    else if (tipo == 'vidros'){
        document.getElementById('t_tipo_pesquisa').textContent = 'Vidros';
        tipo_pesquisa = 'vidros';
    }
    else if (tipo == 'colisao'){
        document.getElementById('t_tipo_pesquisa').textContent = 'Colisão';
        tipo_pesquisa = 'colisao';
    }
}

function retorna(){
    return(tipo_pesquisa);
}

function templates(n) {
    for (let i = 1; i <= n; i++) {
        document.getElementById('exibicao_templates').innerHTML = template;
        document.querySelector('#exibicao_templates .trocar').id = `template_${i}`;
    }
}

var template = `<div class="card col-md-2 m-r-10 trocar">
<h4>teplate</h4>
</div>`;