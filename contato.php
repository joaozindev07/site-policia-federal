<section>
    <div class="container">
        <h4 class="center-align">Fale Conosco</h4>
        <p class="center-align">Entre em contato com a Polícia Federal para esclarecer dúvidas ou realizar solicitações.</p>

        <div class="row">
            <form class="col s12" action="enviar_mensagem.php" method="POST" onsubmit="return validateForm()">
                <!-- Campo Nome -->
                <div class="input-field col s12">
                    <input id="nome" type="text" name="nome" class="validate" required>
                    <label for="nome">Nome Completo</label>
                    <span id="nome-error" class="helper-text red-text"></span>
                </div>

                <!-- Campo E-mail -->
                <div class="input-field col s12">
                    <input id="email" type="email" name="email" class="validate" required>
                    <label for="email">E-mail</label>
                    <span id="email-error" class="helper-text red-text"></span>
                </div>

                <!-- Campo Assunto -->
                <div class="input-field col s12">
                    <input id="assunto" type="text" name="assunto" class="validate" required>
                    <label for="assunto">Assunto</label>
                    <span id="assunto-error" class="helper-text red-text"></span>
                </div>

                <!-- Campo Mensagem -->
                <div class="input-field col s12">
                    <textarea id="mensagem" name="mensagem" class="materialize-textarea" required></textarea>
                    <label for="mensagem">Mensagem</label>
                    <span id="mensagem-error" class="helper-text red-text"></span>
                </div>

                <!-- Botão de Envio -->
                <div class="center-align div_button">
                    <button id="submit-btn" class="button" type="submit" name="action">Enviar</button>
                </div>
                <div id="loader" style="display:none;">Enviando...</div>
            </form>
        </div>
    </div>
</section>