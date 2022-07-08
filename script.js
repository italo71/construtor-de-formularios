function adicionarPergunta(tipo) {
    let finded = false;
    let local;
    for (let i = 1; i <= 10; i++) {
        if (document.querySelectorAll(`#q_${i} .card`).length == 0 && finded == false) {
            local = i;
            finded = true;
        }
    }
    if (local != undefined) {
        document.getElementById(`q_${local}`).innerHTML = `${tipo}`;
        document.getElementById('btn_salva_info').style.display = 'block';
        btn_remove_display(true, local)
    }
    else {
        alert('Limite de 10 perguntas atingido!');
    }
    if (tipo == ball10) {
        for (let i2 = 0; i2 <= 10; i2++) {
            document.getElementById(`n_${i2}`).id = `n_${i2}_${local}`;
            document.getElementById(`n_${i2}_${local}`).setAttribute("onclick", `nota_nps = ${i2}; alter_color_black('n_${i2}_${local}', 'n', '${local}', true);`)
        }
    }
    if (tipo == ball5) {
        for (let i3 = 0; i3 <= 4; i3++) {
            document.getElementById(`f_${i3}`).id = `f_${i3}_${local}`;
            document.getElementById(`f_${i3}_${local}`).setAttribute("onclick", `nota_fiveB = ${i3}; alter_color_black('f_${i3}_${local}', 'f', '${local}', false);`)
        }
        for (let i = 1; i <= 2; i++) {
            document.getElementById(`d_f_p_${i}`).id = `d_f_p_${i}_${local}`;
            document.getElementById(`f_p_${i}`).id = `f_p_${i}_${local}`;
        }
    }
    if (tipo == radio5) {
        for (let i = 0; i <= 4; i++) {
            document.getElementById(`d_r_${i}`).id = `d_r_${i}_${local}`;
            document.getElementById(`i_${i}`).id = `i_${i}_${local}`;
            document.getElementById(`l_r_${i}`).id = `l_r_${i}_${local}`;
        }
    }
    if (tipo == ball10) {
        for (let i = 1; i <= 2; i++) {
            document.getElementById(`n_p_${i}`).id = `n_p_${i}_${local}`;
            document.getElementById(`d_n_p_${i}`).id = `d_n_p_${i}_${local}`
        }
        document.getElementById('n_ps').id = `n_ps_${local}`;
    }
}

function btn_remove_display(d, id) {
    if (d) {
        document.getElementById(`btn_r_${id}`).style.display = 'block';
        document.getElementById(`btn_e_${id}`).style.display = 'block';
    }
    else {
        document.getElementById(`btn_r_${id}`).style.display = 'none';
        document.getElementById(`btn_e_${id}`).style.display = 'none';
        document.getElementById(`q_${id}`).innerHTML = "";
        btn_salvar_display();
    }
}

function btn_salvar_display() {
    let tem_card = true;
    for (let i = 1; i <= 10; i++) {
        if (document.querySelectorAll('.question_box .card').length == 0) {
            tem_card = false;
        }
    }
    if (!(tem_card)) {
        document.getElementById('btn_salva_info').style.display = 'none';
    }
}

function editar_pergunta(id) {
    let edit_pergunta;
    let i;
    if (document.querySelector(`#q_${id} .ball10Q`) != undefined) {
        let insert_div;
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            document.getElementById('pergunta_editada').value = edit_pergunta;
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 1; i <= 2; i++) {
                let last_parametro = document.getElementById(`n_p_${i}_${id}`).textContent;
                document.getElementById(`d_n_p_${i}_${id}`).innerHTML = editar_parametro;
                document.getElementById('idPadrao').id = `iParametro_${i}_${id}`;
                document.getElementById(`iParametro_${i}_${id}`).value = last_parametro;
                if (i == 1) {
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_r');
                }
            }
            for (i = 1; i <= 10; i++) {
                if (i != id) {
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                }
                else {
                    document.getElementById(`btn_r_${i}`).classList.add("none");
                }
            }
        }

        else {
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            for (i = 1; i <= 2; i++) {
                let last_parametro = document.getElementById(`iParametro_${i}_${id}`).value
                document.getElementById(`d_n_p_${i}_${id}`).innerHTML = parametro_editado;
                document.getElementById("parametro_editado").id = `n_p_${i}_${id}`;
                document.getElementById(`n_p_${i}_${id}`).textContent = last_parametro;
                if (i == 1) {
                    document.getElementById(`n_p_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {
                    document.getElementById(`n_p_${i}_${id}`).classList.add('n_p_r');
                }
            }
            for (i = 1; i <= 10; i++) {
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
        }
    }

    else if (document.querySelector(`#q_${id} .ball5Q`) != undefined) {
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            document.getElementById('pergunta_editada').value = edit_pergunta;
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 1; i <= 2; i++) {
                let last_parametro = document.getElementById(`f_p_${i}_${id}`).textContent;
                document.getElementById(`d_f_p_${i}_${id}`).innerHTML = editar_parametro;
                document.getElementById('idPadrao').id = `iParametro_${i}_${id}`;
                document.getElementById(`iParametro_${i}_${id}`).value = last_parametro;
                if (i == 1) {
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {
                    document.getElementById(`iParametro_${i}_${id}`).classList.add('n_p_r');
                }
            }
            for (i = 1; i <= 10; i++) {
                if (i != id) {
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                }
                else {
                    document.getElementById(`btn_r_${i}`).classList.add("none");
                }
            }
        }


        else {
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            for (i = 1; i <= 2; i++) {
                let last_parametro = document.getElementById(`iParametro_${i}_${id}`).value
                document.getElementById(`d_f_p_${i}_${id}`).innerHTML = parametro_editado;
                document.getElementById("parametro_editado").id = `f_p_${i}_${id}`;
                document.getElementById(`f_p_${i}_${id}`).textContent = last_parametro;
                if (i == 1) {
                    document.getElementById(`f_p_${i}_${id}`).classList.add('n_p_l');
                }
                else if (i == 2) {
                    document.getElementById(`f_p_${i}_${id}`).classList.add('n_p_r');
                }
            }
            for (i = 1; i <= 10; i++) {
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
            for (i = 1; i <= 10; i++) {
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
        }
    }

    else if (document.querySelector(`#q_${id} .radio5Q`) != undefined) {
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            document.getElementById('pergunta_editada').value = edit_pergunta;
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 0; i <= 4; i++) {
                let valor_anterior = document.getElementById(`l_r_${i}_${id}`).textContent;
                document.getElementById(`d_r_${i}_${id}`).innerHTML = input_editar_resposta;
                document.getElementById(`idPadrao`).id = `edit_radio_${i}`;
                document.getElementById(`edit_radio_${i}`).value = valor_anterior;
            }
            for (i = 1; i <= 10; i++) {
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.add("none");

            }

        }

        else {
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            for (i = 0; i <= 4; i++) {
                let valor_anterior_ed = document.getElementById(`edit_radio_${i}`).value;
                document.getElementById(`d_r_${i}_${id}`).innerHTML = input_radio_padrao;
                document.getElementById(`iPadrao`).id = `i_${i}_${id}`;
                document.getElementById(`idPadraoRadio`).id = `l_r_${i}_${id}`;
                document.getElementById(`l_r_${i}_${id}`).textContent = valor_anterior_ed;
            }
            for (i = 1; i <= 10; i++) {
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");

            }
        }
    }

    else {
        if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
            edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
            document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
            document.getElementById('pergunta_editada').value = edit_pergunta;
            document.getElementById(`btn_e_${id}`).innerHTML = span_check;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
            for (i = 1; i <= 10; i++) {
                if (i != id) {
                    document.getElementById(`btn_e_${i}`).classList.add("none");
                }
                else {
                    document.getElementById(`btn_r_${i}`).classList.add("none");
                }
            }
        }

        else {
            edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
            document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
            document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
            document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
            document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(96,126,238)';
            for (i = 1; i <= 10; i++) {
                if (i != id)
                    document.getElementById(`btn_e_${i}`).classList.remove("none");
                else
                    document.getElementById(`btn_r_${i}`).classList.remove("none");
            }
        }
    }
}

function salvar_questionario() {
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

