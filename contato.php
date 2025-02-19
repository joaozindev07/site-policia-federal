<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Area de Contato</title>
     <link rel="stylesheet" href="css/contact.css">
</head>
<body>
     <section>
     <div class="container">
        <h4 class="center-align">Fale Conosco</h4>
        <p class="center-align">Entre em contato com a Polícia Federal para esclarecer dúvidas ou realizar solicitações.</p>

        <div class="row">
            <form class="col s12" action="enviar_mensagem.php" method="POST">
                <!-- Campo Nome -->
                <div class="input-field col s12">
                    <input id="nome" type="text" name="nome" class="validate" required>
                    <label for="nome">Nome Completo</label>
                </div>

                <!-- Campo E-mail -->
                <div class="input-field col s12">
                    <input id="email" type="email" name="email" class="validate" required>
                    <label for="email">E-mail</label>
                </div>

                <!-- Campo Assunto -->
                <div class="input-field col s12">
                    <input id="assunto" type="text" name="assunto" class="validate" required>
                    <label for="assunto">Assunto</label>
                </div>

                <!-- Campo Mensagem -->
                <div class="input-field col s12">
                    <textarea id="mensagem" name="mensagem" class="materialize-textarea" required></textarea>
                    <label for="mensagem">Mensagem</label>
                </div>

                <!-- Botão de Envio -->
                <div class="center-align div_button">
                    <button class="button" type="submit" name="action">Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>
     </section>
</body>
</html>