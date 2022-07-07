function alter_color_black(id, l) {
    for (let i = 0; i <= 10; i++) {
        document.getElementById(`${l}_${i}`).classList.remove('black');
    }
    document.getElementById(`${id}`).classList.add('black');
}

function alter_color_gray(id) {
    for (let i = 0; i <= 4; i++)
        document.getElementById(`e_${i}`).classList.remove('gray');
    document.getElementById(`${id}`).classList.add('gray');
}

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
    if (document.querySelector(`#q_${id} .card .align-center div.m-t-5`) == undefined) {
        edit_pergunta = document.querySelector(`#q_${id} .pergunta_editavel`).textContent;
        document.querySelector(`#q_${id} .align-center`).innerHTML = input_editar_pergunta;
        document.getElementById('pergunta_editada').value = edit_pergunta;
        document.getElementById(`btn_e_${id}`).innerHTML = span_check;
        document.getElementById(`btn_e_${id}`).style.backgroundColor = 'rgb(0, 202, 0)';
        console.log(edit_pergunta);
    }
    else {
        edit_pergunta = document.querySelector(`#q_${id} .card .align-center .justify-content-center input#pergunta_editada`).value;
        document.getElementById(`btn_e_${id}`).innerHTML = span_edit;
        document.querySelector(`#q_${id} .card .align-center`).innerHTML = h3_pergunta;
        document.querySelector(`#q_${id} .card .align-center h3.pergunta_editavel`).textContent = edit_pergunta;
        console.log(edit_pergunta);
    }
}

/* Declarações */

var input_editar_pergunta = `<div class="justify-content-center m-t-5 m-b-5">
<input type="text" name="" id="pergunta_editada" class="form-control">
</div>`

var span_check = `<span class="material-symbols-outlined">
check
</span>`;

var span_edit = `<span
class="material-symbols-outlined">
edit
</span>`;

var h3_pergunta = `<h3 class="pergunta_editavel" id="text_quest"></h3>`;

var text = `<div class="card col-md-11">
<div class="align-center">
    <h3 class="pergunta_editavel" id="text_quest">Nos de sua opnião sobre nosso atendimento</h3>
</div>
<div class="col-md-12">
    <input type="text" id="text_input" class="m-b-10 form-control" placeholder="Digite Aqui!">
    </div>
</div>`;

var ball10 = `<div class="card col-md-11 align-items-center">
<div class="align-center">
    <h3 class="pergunta_editavel" id="nps_quest">Numa escala de 0 a 10, quanto você indicaria a <span id="nome_emp">**Nossa
            empresa**</span> a um amigo?</h3>
</div>
<div class="col-md-11">
    <div class="align-center" id="notas_nps">
        <div class="nota"><button class="btn" id="n_0"
                onclick="nota_nps = 0; alter_color_black('n_0', 'n');">0</button></div>
        <div class="nota"><button class="btn" id="n_1"
                onclick="nota_nps = 1; alter_color_black('n_1', 'n');">1</button></div>
        <div class="nota"><button class="btn" id="n_2"
                onclick="nota_nps = 2; alter_color_black('n_2', 'n');">2</button></div>
        <div class="nota"><button class="btn" id="n_3"
                onclick="nota_nps = 3; alter_color_black('n_3', 'n');">3</button></div>
        <div class="nota"><button class="btn" id="n_4"
                onclick="nota_nps = 4; alter_color_black('n_4', 'n');">4</button></div>
        <div class="nota"><button class="btn" id="n_5"
                onclick="nota_nps = 5; alter_color_black('n_5', 'n');">5</button></div>
        <div class="nota"><button class="btn" id="n_6"
                onclick="nota_nps = 6; alter_color_black('n_6', 'n');">6</button></div>
        <div class="nota"><button class="btn" id="n_7"
                onclick="nota_nps = 7; alter_color_black('n_7', 'n');">7</button></div>
        <div class="nota"><button class="btn" id="n_8"
                onclick="nota_nps = 8; alter_color_black('n_8', 'n');">8</button></div>
        <div class="nota"><button class="btn" id="n_9"
                onclick="nota_nps = 9; alter_color_black('n_9', 'n');">9</button></div>
        <div class="nota"><button class="btn" id="n_10"
                onclick="nota_nps = 10; alter_color_black('n_10', 'n');">10</button></div>
        <div>
            <span id="n_p_1"><b>NÂO INDICARIA</b></span>
            <span id="n_p_2"><b>INDICARIA</b></span>
        </div>
    </div>
</div>
</div>`;

var ball5 = `<div class="card col-md-11 align-items-center">
<div class="align-center">
    <h3 class="pergunta_editavel" id="fiveB_quest">Avalie nossos serviço de 1 a 5</h3>
</div>
<div class="col-md-11">
    <div class="align-center" id="notas_five">
        <div class="align-center" id="notas_five">
            <div class="nota_five"><button class="btn_five" id="f_1"
                    onclick="nota_nps = 1; alter_color_black('f_1', 'f');">1</button></div>
            <div class="nota_five"><button class="btn_five" id="f_2"
                    onclick="nota_nps = 2; alter_color_black('f_2', 'f');">2</button></div>
            <div class="nota_five"><button class="btn_five" id="f_3"
                    onclick="nota_nps = 3; alter_color_black('f_3', 'f');">3</button></div>
            <div class="nota_five"><button class="btn_five" id="f_4"
                    onclick="nota_nps = 4; alter_color_black('f_4', 'f');">4</button></div>
            <div class="nota_five"><button class="btn_five" id="f_5"
                    onclick="nota_nps = 4; alter_color_black('f_5', 'f');">5</button></div>
        </div>
        <div class="justify-content-center">
            <div class="col-md-7">
                <span id="f_p_1"><b>RUIM</b></span>
                <span id="f_p_2"><b>EXELENTE</b></span>
            </div>
        </div>
    </div>
</div>
</div>`;

var radio5 = `<div class="card col-md-11 align-itens-center">
<div class="align-center">
    <h3 class="pergunta_editavel" id="csat_quest">**Como você classificaria a *nossa empresa* sobre o valor total que a empresa
        oferece,
        em comparação ao valor total oferecido por outros fornecedores de produtos / serviços
        similares?**</h3>
</div>
<div class="col-md-12">
    <div class="align-center" id="notas_nvs">
        <div class="d-flex justify-content-center">
            <div class="align_text_justfy">
                <input type="radio" id="i_0" value="0" name="i"><label for="0">significativamente
                    melhor</label><br>
                <input type="radio" id="i_1" value="1" name="i"><label for="1">Um pouco
                    melhor</label><br>
                <input type="radio" id="i_2" value="2" name="i"><label for="2">Nem melhor, nem
                    pior</label><br>
                <input type="radio" id="i_3" value="3" name="i"><label for="3">Um pouco pior</label><br>
                <input type="radio" id="i_4" value="4" name="i"><label for="4">significativamente
                    Pior</label><br>
            </div>
        </div>
    </div>
</div>
</div>`;

var radio2 = `<div class="card col-md-11 align-items-center">
<div class="align-center">
    <h3 class="pergunta_editavel" id="double_quest">Vistoria foi aprovada</h3>
</div>
<div class="justify-content-center">
    <div class="col-md-12">
        <input type="radio" name="sim-nao" id=""><label for="">Sim</label><br>
        <input type="radio" name="sim-nao" id=""><label for="">Não</label><br>
    </div>
</div>
</div>`;

var emoji5 = `<div class="card col-md-11 align-itens-center">
<div class="align-center">
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

