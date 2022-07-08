function adicionarPergunta(tipo) {
    /* Função recebe o tipo de pergunta do botão adicionar precionado */
    let finded = false;
    let local;
    for (let i = 1; i <= 10; i++) {
        if (document.querySelectorAll(`#q_${i} .card`).length == 0 && finded == false) {
            /* Procura uma div de pergunta com padrão de ID q_{numedo de 1 a 10} */
            local = i;
            /* quando uma div de pergunta vazia é encontrada seu id é salvo na variavel {local} 
            para ser usada mais tarde no momento da inclusão da pergunta dentro dela */
            finded = true;
            /* finded definido como true para evitar mensagem de erro */
        }
    }

    if (local != undefined) {
        /* inserção da pergunta na div de ID {local} */
        document.getElementById(`q_${local}`).innerHTML = `${tipo}`;
        /* Define o botão salvar com display block fazendo com q ele fique disponível ao usuário */
        document.getElementById('btn_salva_info').style.display = 'block';
        /* chama função btn_remove_display para que os botões de edição e remoção da pergunta sejam exibidos */
        btn_remove_display(true, local)
    }

    else {
        /* caso não seja definido local para inserir uma pergunta isso significa que ja foram colocadas as 10 perguntas */
        /* uma mensagem de erro é exibida para o usuário */
        alert('Limite de 10 perguntas atingido!');
    }

    /* Definição de ids */
    /* Tenha cuidado ao mexer nessa parte pois como descrito na documentação da tela
    os IDs dos elementos são gerados seguindo um padrão e os distinguindo dos demais para possibilitar 
    a personalização individual de cada pergunta */
    /* Ao inicio de cada if o tipo da pergunta é testado pois cada pergunta recebe um padrão diferente de ID */
    if (tipo == ball10) {
        /* repetição para definir o ID das notas de 0 a 10 */
        for (let i2 = 0; i2 <= 10; i2++) {
            /* quando a pergunta é adicionada cada nota recebe um id padrão seguindo o padrão n_{0 a 10} e é substituido pelo ID n_{0 a 10}_{numero da pergunta podendo ser de 1 a 10} */
            document.getElementById(`n_${i2}`).id = `n_${i2}_${local}`;
            /* Atibuto onclick setado para quando a pesquisa for realizada */
            document.getElementById(`n_${i2}_${local}`).setAttribute("onclick", `nota_nps = ${i2}; alter_color_black('n_${i2}_${local}', 'n', '${local}', true);`)
        }
        /* Definição dos IDs das divs de parametro de resposta */
        for (let i = 1; i <= 2; i++) {
            /* Troca os IDs padrão n_p_{1 ou 2} para n_p_{1 ou 2}_{local(numero de 1 a 10)} */
            document.getElementById(`n_p_${i}`).id = `n_p_${i}_${local}`;
            /* Troca os IDs padrão das divs d_n_p_{1 ou 2} para d_n_p_{1 ou 2}_{local(numero de 1 a 10)} */
            document.getElementById(`d_n_p_${i}`).id = `d_n_p_${i}_${local}`
        }
        /* troca id padrão n_ps para n_ps_{local(numero de 1 a 10)} */
        document.getElementById('n_ps').id = `n_ps_${local}`;
    }

    if (tipo == ball5) {
        /* repetição para definir o ID das notas de 0 a 5 */
        for (let i3 = 0; i3 <= 4; i3++) {
            /* quando a pergunta é adicionada cada nota recebe um id padrão seguindo o padrão n_{0 a 4} e é substituido pelo ID n_{0 a 4}_{numero da pergunta podendo ser de 1 a 10} */
            document.getElementById(`f_${i3}`).id = `f_${i3}_${local}`;
            /* Atibuto onclick setado para quando a pesquisa for realizada */
            document.getElementById(`f_${i3}_${local}`).setAttribute("onclick", `nota_fiveB = ${i3}; alter_color_black('f_${i3}_${local}', 'f', '${local}', false);`)
        }
        /* Definição dos IDs das divs de parametro de resposta */
        for (let i = 1; i <= 2; i++) {
            /* Troca os IDs padrão das divs d_f_p_{1 ou 2} para d_f_p_{1 ou 2}_{local(numero de 1 a 10)} */
            document.getElementById(`d_f_p_${i}`).id = `d_f_p_${i}_${local}`;
            /* Troca os IDs padrão f_p_{1 ou 2} para f_p_{1 ou 2}_{local(numero de 1 a 10)} */
            document.getElementById(`f_p_${i}`).id = `f_p_${i}_${local}`;
        }
    }

    if (tipo == radio5) {
        /* troca os ids das respostas da pergunta multipla escolha para os padrões conforme local da pergunta dentro das divs */
        for (let i = 0; i <= 4; i++) {
            document.getElementById(`d_r_${i}`).id = `d_r_${i}_${local}`;
            document.getElementById(`i_${i}`).id = `i_${i}_${local}`;
            document.getElementById(`l_r_${i}`).id = `l_r_${i}_${local}`;
        }
    }
}

function btn_remove_display(d, id) {
    /* Função para mudar o display do botão remover e editar da cada pergunta de forma individual */
    /* parametro "d" usado para saber se o display sera "none(false)" ou "block(true)" */
    if (d) {/* quando uma pergunta é adicionada esses comandos são executados */
        /* btn_r_{numero de 1 a 10} = botão remover */
        document.getElementById(`btn_r_${id}`).style.display = 'block';
        /* btn_e_{numero de 1 a 10} = botão editar */
        document.getElementById(`btn_e_${id}`).style.display = 'block';
    }

    else {/* quando uma pergunta é removida eses comandos são executados */
        /* btn_r_{numero de 1 a 10} = botão remover */
        document.getElementById(`btn_r_${id}`).style.display = 'none';
        /* btn_e_{numero de 1 a 10} = botão remover */
        document.getElementById(`btn_e_${id}`).style.display = 'none';
        /* remove a pergunta de dentro da div */
        document.getElementById(`q_${id}`).innerHTML = "";
        /* chama a função btn_salvar_display para verificar se o botão salvar deve ou não ser mantido ativo */
        btn_salvar_display();
    }
}

function btn_salvar_display(p) {/* Função para definir se o botão salvar deve ser mantido ativado após a remoção de uma pergunta */
    let tem_card = true;
    for (let i = 1; i <= 10; i++) {/* repetiçao para passar por todas as divs onde podem ter perguntas */
        if (document.querySelectorAll('.question_box .card').length == 0) {/* Caso não haja nenhuma div com a class card dendro da div de pergunta, a variável de controle é definida como false */
            tem_card = false;
        }
    }

    if (!(tem_card) || p == false) {/* caso a variavel de controle seja falsa o botão salvar é desabilitado */
        document.getElementById('btn_salva_info').style.display = 'none';
    }

    if(p){
        document.getElementById('btn_salva_info').style.display = 'block';
    }
}

function editar_pergunta(id) {/* ‼‼‼‼‼‼‼‼‼‼ ATENÇÂO ‼‼‼‼‼‼‼‼‼‼ */
    /* Esta função deve ser mantida da forma como está e em casos extremos as alterações devem ser feitas de forma cuidados e respeitando os ids padrão de cada elemento
    além disso alguns dos Ids usados aqui são definidos anteriormente na função adicionar_pergunta, por isso é de grande ajuda tela em vista o tempo todo */
    let edit_pergunta;
    let i;
    if (document.querySelector(`#q_${id} .ball10Q`) != undefined) {/* comandos executados caso o tipo de de pergunta seja ball10 */
        /* Define se a pergunta está em modo de edição ou não */
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {/* caso a pergunta não esteja em modo de edição os comandos abaixo são executados */
            /* recupera a pergunta que ja está dentro do card da pergunta */
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            /* Insere o input do tipo texto no lugar do h3 */
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            /* Coloca o valor da pergunta dentro do input */
            document.getElementById('pergunta_editada').value = edit_pergunta;
            /* Altera o botão de edição para botão de check (indicando que o proximo clica ira salvar as alterações) */
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            /* Altera a cor do background do botão de edição para verde */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 1; i <= 2; i++) {/* Repetição para alterar os textos que ficam embaixo das bolas para inputs para que o usuário possa modificar seus conteudos */
                /* Recupera o valor de texto */
                let last_parametro = document.getElementById(`n_p_${i}_${id}`).textContent;
                /* altera de h3 para input */
                document.getElementById(`d_n_p_${i}_${id}`).innerHTML = editar_parametro;
                /* altera o ID padrão para um ID único de padrão {iParametro_{1 ou 2}_{local da pergunta}} */
                document.getElementById('idPadrao').id = `iParametro_${i}_${id}`;
                /* Insere o valor anterios no input */
                document.getElementById(`iParametro_${i}_${id}`).value = last_parametro;
                if (i == 1) {/* caso seja o input da esquerda (primeiro a ser adicionado) é acresentado a classe n_p_l para manter o input na esquerda */
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {/* caso seja o input da direitra (segundo a ser adicionado) é acresentado a classe n_p_r para manter o input na direita */
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_r');
                }
            }
            btn_salvar_display(false);
            for (i = 1; i <= 10; i++) {/* repetição para adicionar a classe none à todos os botões de edição exceto o que foi precionado para efitar bug no momento de concluir a ação */
                if (i != id) {
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                }
                else {/* adiciona a classe none para o botão de remover da pergunta que está sendo editada evitando bug de caso a pergunta seja excluida e incluida posteriormente ela volte fora de padrão */
                    document.getElementById(`btn_r_${i}`).classList.add("none");
                }
            }
        }

        else {/* Caso a pergunta ja esteja em modo de edição quando a função foi chamada os comandos abaixo são executados */
            /* salva o valor da pergunta */
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            /* Volta o icone de edição ao normal */
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            /* Insere o h3 de volta no lugar do input */
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            /* insere o valor da pergunta no elemento H3 */
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            /* Altera a cor do background */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            btn_salvar_display(true);
            for (i = 1; i <= 2; i++) {/* repetição para alterar os IDs dos parametros de baixo das bolas */
                /* recupera valor editado */
                let last_parametro = document.getElementById(`iParametro_${i}_${id}`).value
                /* subtitui o input */
                document.getElementById(`d_n_p_${i}_${id}`).innerHTML = parametro_editado;
                /* troca ID */
                document.getElementById("parametro_editado").id = `n_p_${i}_${id}`;
                /* Adiciona o valor editado */
                document.getElementById(`n_p_${i}_${id}`).textContent = last_parametro;
                if (i == 1) {/* Adiciona classe n_p_l para manter o texto à esquerda */
                    document.getElementById(`n_p_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {/* Adiciona classe n_p_r para manter o texto à direita */
                    document.getElementById(`n_p_${i}_${id}`).classList.add('n_p_r');
                }
            }
            for (i = 1; i <= 10; i++) {/* repetição para retirar a classe none de todos os botões de editar e remover */
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
        }
    }

    else if (document.querySelector(`#q_${id} .ball5Q`) != undefined) {/* caso o tipo de pergunta seja ball5 */
        /* Define se a pergunta está em modo de edição */
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            /* Define ultimo valor do h3 */
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            /* Insere o input no lugar do h3 */
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            /* restaura o valor da pergunta */
            document.getElementById('pergunta_editada').value = edit_pergunta;
            /* altera o icone de edição para check */
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            /* altera o backgroundcolor do botão edição */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 1; i <= 2; i++) {/* Repetição para alterar os textos abaixo das bolas (parametros) */
                /* recupera o valor do input */
                let last_parametro = document.getElementById(`f_p_${i}_${id}`).textContent;
                /* adiciona o input */
                document.getElementById(`d_f_p_${i}_${id}`).innerHTML = editar_parametro;
                /* altera o id do input */
                document.getElementById('idPadrao').id = `iParametro_${i}_${id}`;
                /* restaura o valor do input */
                document.getElementById(`iParametro_${i}_${id}`).value = last_parametro;
                if (i == 1) {/* repetição para adicionar as classes de estilo (n_p_l mantem a esquerda e n_p_r mantem a direita) */
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_r');
                }
            }
            btn_salvar_display(false);
            for (i = 1; i <= 10; i++) {/* Repetição para desabilitar os botões de edição das perguntas e o de remover da pergunta que está sendo editada */
                if (i != id) {
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                }
                else {
                    document.getElementById(`btn_r_${i}`).classList.add("none");
                }
            }
        }


        else {/* caso a pergunta ja esteja em modo de edição quando a função é chamada */
            /* recupera o valor da pergunta */
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            /* altera o icone do botão edição para o lápis indicano que o modo de edição foi desativado */
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            /* insere o titulo h3 */
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            /* insere o valor editado no h3 */
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            /* altera a cor do botão de edição */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            for (i = 1; i <= 2; i++) {/* repetição para alterar os parametros */
                /* recupera o valor editado */
                let last_parametro = document.getElementById(`iParametro_${i}_${id}`).value
                /* adiciona o texto */
                document.getElementById(`d_f_p_${i}_${id}`).innerHTML = parametro_editado;
                /* altera o id */
                document.getElementById("parametro_editado").id = `f_p_${i}_${id}`;
                /* insere o texto editado */
                document.getElementById(`f_p_${i}_${id}`).textContent = last_parametro;
                if (i == 1) {/* adiciona as classes de estilo */
                    document.getElementById(`f_p_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {
                    document.getElementById(`f_p_${i}_${id}`).classList.add('n_p_r');
                }
            }
            btn_salvar_display(true);
            for (i = 1; i <= 10; i++) {/* retira a classe de estilo none dos botões de edição e remover */
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
        }
    }

    else if (document.querySelector(`#q_${id} .radio5Q`) != undefined) {/* caso o tipo de pergunta seja radio5 os comandos abaixo são executados */
        /* define se a pergunta está em modo de edição */
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            /* recupera o valor da pergunta */
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            /* insere o input do tipo text */
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            /* insere o valor antigo */
            document.getElementById('pergunta_editada').value = edit_pergunta;
            /* altera o icone do botão de edição */
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            /* altera a cor do botão */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 0; i <= 4; i++) {/* altera as respostas para o modo de edição */
                let valor_anterior = document.getElementById(`l_r_${i}_${id}`).textContent;
                document.getElementById(`d_r_${i}_${id}`).innerHTML = input_editar_resposta;
                document.getElementById(`idPadrao`).id = `edit_radio_${i}`;
                document.getElementById(`edit_radio_${i}`).value = valor_anterior;
            }
            btn_salvar_display(false);
            for (i = 1; i <= 10; i++) {/* desabilita os botões de edição das perguntas distintas à que está sendo editada e o botão remover da pergunta em questão */
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.add("none");

            }

        }

        else {/* caso ja esteja em modo de edição */
            /* recupera o valor editado */
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            /* troca o icone do botão */
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            /* insere o h3 no lugar do input text */
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            /* insere o valor editado */
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            /* altera a cor de fundo do botão */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            for (i = 0; i <= 4; i++) {/* altera as respostas para o modo de exibição */
                let valor_anterior_ed = document.getElementById(`edit_radio_${i}`).value;
                document.getElementById(`d_r_${i}_${id}`).innerHTML = input_radio_padrao;
                document.getElementById(`iPadrao`).id = `i_${i}_${id}`;
                document.getElementById(`idPadraoRadio`).id = `l_r_${i}_${id}`;
                document.getElementById(`l_r_${i}_${id}`).textContent = valor_anterior_ed;
            }
            btn_salvar_display(true);
            for (i = 1; i <= 10; i++) {/* reexibe os botões */
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");

            }
        }
    }

    else {/* caso não seja um caso específico de tipo de pergunta os comandos abaixo são executados */
        /* define se está em modo de edição */
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            /* recupera o valor da pergunta */
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            /* insere o input text */
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            /* insere o valor anterior */
            document.getElementById('pergunta_editada').value = edit_pergunta;
            /* altera o icone do botão de edição */
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            /* altera a cor do botão de edição */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            btn_salvar_display(false);
            for (i = 1; i <= 10; i++) {/* insere a classe de estilo none dos botões de edição e remover */
                if (i != id) {
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                }
                else {
                    document.getElementById(`btn_r_${i}`).classList.add("none");
                }
            }
        }

        else {/* comandos executados para a pergunta retornar ao modo de exibição */
            /* recupera o valor editado */
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            /* altera o icone do botão */
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            /* insere o h3 */
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            /* insere o valor editado */
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            /* altera a cor do botão de edição */
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            btn_salvar_display(true);
            for (i = 1; i <= 10; i++) {/* remove as classes de estilo dos botões */
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
        }
    }
}

function salvar_questionario() {/* Função usada para salvar o preset do questionário */
    let i;
    let i2;
    let pesquisa_personalizada;

    /* Obtem html do formulário */
    for (i = 1; i <= 10; i++) {
        pesquisa_personalizada = pesquisa_personalizada + document.getElementById(`q_${i}`).outerHTML;
    }
    JSON.stringify(pesquisa_personalizada);
    console.log(pesquisa_personalizada);
}

/* Declarações */
/* aqui é onde se encontram salvos os padrões das perguntas e inputs editáveis */
/* nessa área é possível alterar classes para adicionar, editar e remover estilo da pagina */
/* cuidado ao remover classes dos padrões pois elas são usadas para identificação da função editar_pergunta */

var input_editar_pergunta = `<div class="justify-content-center m-t-5 m-b-5">
<input type="text" name="" id="pergunta_editada" class="form-control">
</div>`

var input_editar_resposta = `<div class="justify-content-center m-t-5 m-b-5">
<input type="text" name="" class="form-control" id="idPadrao">
</div>`

var editar_parametro = `<div class="m-t-5 m-b-5">
<input type="text" name="" class="n_p_edit" id="idPadrao">
</div>`

var parametro_editado = `<span id="parametro_editado" class="n_p_l"></span>`

var input_radio_padrao = `<input type="radio" id="iPadrao" value="0"
name="i"><label for="0" id="idPadraoRadio"></label>`;

var span_check = `<span class="material-symbols-outlined">
check
</span>`;

var span_edit = `<span
class="material-symbols-outlined">
edit
</span>`;

var h3_pergunta = `<h3 class="pergunta_editavel"></h3>`;

var text = `<div class="card col-md-12 textQ">
<div class="align-center col-md-12">
    <h3 class="pergunta_editavel">Nos de sua opnião sobre nosso atendimento</h3>
</div>
<div class="col-md-12">
    <input type="text" id="text_input" class="m-b-10 form-control" placeholder="Digite Aqui!">
    </div>
</div>`;

var ball10 = `<div class="card col-md-12 align-items-center ball10Q">
<div class="align-center col-md-12">
    <h3 class="pergunta_editavel" id="nps_quest">Numa escala de 0 a 10, quanto você indicaria a <span id="nome_emp">**Nossa
            empresa**</span> a um amigo?</h3>
</div>
<div class="col-md-12">
    <div class="align-center" id="notas_nps">
        <div class="nota"><button class="btn" id="n_0">0</button></div>
        <div class="nota"><button class="btn" id="n_1">1</button></div>
        <div class="nota"><button class="btn" id="n_2">2</button></div>
        <div class="nota"><button class="btn" id="n_3">3</button></div>
        <div class="nota"><button class="btn" id="n_4">4</button></div>
        <div class="nota"><button class="btn" id="n_5">5</button></div>
        <div class="nota"><button class="btn" id="n_6">6</button></div>
        <div class="nota"><button class="btn" id="n_7">7</button></div>
        <div class="nota"><button class="btn" id="n_8">8</button></div>
        <div class="nota"><button class="btn" id="n_9">9</button></div>
        <div class="nota"><button class="btn" id="n_10">10</button></div>
        <div id="n_ps">
            <div id="d_n_p_1"><span id="n_p_1" class="n_p_l">NÂO INDICARIA</span></div>
            <div id="d_n_p_2"><span id="n_p_2" class="n_p_r">INDICARIA</span></div>
        </div>
    </div>
</div>
</div>`;

var ball5 = `<div class="card col-md-12 align-items-center ball5Q">
<div class="align-center col-md-12">
    <h3 class="pergunta_editavel" id="fiveB_quest">Avalie nossos serviço de 1 a 5</h3>
</div>
<div class="col-md-12">
    <div class="align-center" id="">
        <div class="align-center" id="notas_five">
            <div class="nota_five"><button class="btn_five" id="f_0">1</button></div>
            <div class="nota_five"><button class="btn_five" id="f_1">2</button></div>
            <div class="nota_five"><button class="btn_five" id="f_2">3</button></div>
            <div class="nota_five"><button class="btn_five" id="f_3">4</button></div>
            <div class="nota_five"><button class="btn_five" id="f_4">5</button></div>
        </div>
        <div class="justify-content-center">
            <div class="col-md-8">
                <div id="d_f_p_1" class="n_p_l"><span id="f_p_1">RUIM</span></div>
                <div id="d_f_p_2" class="n_p_r"><span id="f_p_2">EXELENTE</span></div>
            </div>
        </div>
    </div>
</div>
</div>`;

var radio5 = `<div class="card col-md-12 align-itens-center radio5Q">
<div class="align-center col-md-12">
    <h3 class="pergunta_editavel" id="csat_quest">**Como você classificaria a *nossa empresa*
        sobre o valor total que a empresa
        oferece,
        em comparação ao valor total oferecido por outros fornecedores de produtos / serviços
        similares?**</h3>
</div>
<div class="col-md-12">
    <div class="align-center" id="notas_nvs">
        <div class="d-flex justify-content-center">
            <div class="align_text_justfy inputs_r">
                <div class="div_radio" id="d_r_0"><input type="radio" id="i_0" value="0"
                        name="i"><label for="0" id="l_r_0">Significativamente melhor</label></div><br>
                <div class="div_radio" id="d_r_1"><input type="radio" id="i_1" value="0"
                        name="i"><label for="0" id="l_r_1">Um pouco melhor</label></div><br>
                <div class="div_radio" id="d_r_2"><input type="radio" id="i_2" value="0"
                        name="i"><label for="0" id="l_r_2">Nem melhor, Nem pior</label></div><br>
                <div class="div_radio" id="d_r_3"><input type="radio" id="i_3" value="0"
                        name="i"><label for="0" id="l_r_3">Um pouco pior</label></div><br>
                <div class="div_radio" id="d_r_4"><input type="radio" id="i_4" value="0"
                        name="i"><label for="0" id="l_r_4">Significativamente pior</label></div><br>
            </div>
        </div>
    </div>
</div>
</div>`;

var radio2 = `<div class="card col-md-12 align-items-center radio2Q maxW">
<div class="align-center col-md-12 maxW">
    <h3 class="pergunta_editavel" id="double_quest">Vistoria foi aprovada</h3>
</div>
<div class="justify-content-center col-md-12 maxW">
    <div class="col-md-12">
        <input type="radio" name="sim-nao" id=""><label for="">Sim</label><br>
        <input type="radio" name="sim-nao" id=""><label for="">Não</label><br>
    </div>
</div>
</div>`;

var emoji5 = `<div class="card col-md-12 align-itens-center emoji5Q">
<div class="align-center col-md-12">
    <h3 class="pergunta_editavel" id="csat_quest">Qual a sua satisfação com o nosso atendimento?</h3>
</div>
<div class="col-md-12">
    <div class="align-center" id="notas_csat">
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 0; alter_color_gray('e_0');" id="e_0"><i
                    class="iEmoji bi bi-emoji-laughing"></i><span>Muito Satisfeito</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 1; alter_color_gray('e_1');" id="e_1"><i
                    class="iEmoji bi bi-emoji-smile"></i><span>Satisfeito</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 2; alter_color_gray('e_2');" id="e_2"><i
                    class="iEmoji bi bi-emoji-neutral"></i><span>Indiferente</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 3; alter_color_gray('e_3');" id="e_3"><i
                    class="iEmoji bi bi-emoji-frown"></i><span>Insatifeito</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 4; alter_color_gray('e_4');" id="e_4"><i
                    class="iEmoji bi bi-emoji-angry"></i><span>Muito Insatifeito</span></button></div>
    </div>
</div>
</div>`;

