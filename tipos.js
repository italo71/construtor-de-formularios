var text = `<div class="card col-md-6">
<div class="align-center">
    <h1 id="text_quest">Nos de sua opnião sobre nosso atendimento</h1>
</div>
<div class="col-md-12">
    <input type="text" id="text_input" class="m-b-10 w-100" placeholder="Digite Aqui!">
    </div>
</div>
</div>`;

var ball10 = `<div class="card col-md-6 align-items-center">
<div class="align-center">
    <h1 id="nps_quest">Numa escala de 0 a 10, quanto você indicaria a <span id="nome_emp">**Nossa
            empresa**</span> a um amigo?</h1>
</div>
<div class="col-md-12">
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

var ball5 = `<div class="card col-md-6 align-items-center">
<div class="align-center">
    <h1 id="fiveB_quest">Avalie nossos serviço de 1 a 5</h1>
</div>
<div class="col-md-12">
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

var radio4 = `<div class="card col-md-6">
<div class="align-center">
    <h1 id="csat_quest">**Como você classificaria a *nossa empresa* sobre o valor total que a empresa
        oferece,
        em comparação ao valor total oferecido por outros fornecedores de produtos / serviços
        similares?**</h1>
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

var radio2 = `<div class="card col-md-6 align-items-center">
<div class="align-center">
    <h1 id="double_quest">Vistoria foi aprovada</h1>
</div>
<div class="justify-content-center">
    <div class="col-md-12">
        <input type="radio" name="sim-nao" id=""><label for="">Sim</label><br>
        <input type="radio" name="sim-nao" id=""><label for="">Não</label><br>
    </div>
</div>
</div>`;

var emoji5 = `<div class="card col-md-6">
<div class="align-center">
    <h1 id="csat_quest">Qual a sua satisfação com o nosso atendimento?</h1>
</div>
<div class="col-md-12">
    <div class="align-center" id="notas_csat">
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 0; alter_color_gray('e_0');" id="e_0"><i
                    class="bi bi-emoji-laughing"></i><span>Muito Satisfeito</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 1; alter_color_gray('e_1');" id="e_1"><i
                    class="bi bi-emoji-smile"></i><span>Satisfeito</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 2; alter_color_gray('e_2');" id="e_2"><i
                    class="bi bi-emoji-neutral"></i><span>Indiferente</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 3; alter_color_gray('e_3');" id="e_3"><i
                    class="bi bi-emoji-frown"></i><span>Insatifeito</span></button></div>
        <div class="emojis col-12"><button class="btn_emoji w-50"
                onclick="nota_csat = 4; alter_color_gray('e_4');" id="e_4"><i
                    class="bi bi-emoji-angry"></i><span>Muito Insatifeito</span></button></div>
    </div>
</div>
</div>`;
