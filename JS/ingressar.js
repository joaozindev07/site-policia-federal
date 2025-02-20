document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const telefoneInput = document.getElementById('telefone');
    const cpfInput = document.getElementById('cpf');

    // Adiciona um evento de input para permitir apenas números 
    telefoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9 - ()]/g, '');
        if (this.value.length > 17) {
            this.value = this.value.slice(0, 17);
        }
    });

    cpfInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9 - .]/g, '');
        if (this.value.length > 17) {
            this.value = this.value.slice(0, 17);
        }
    });

    // Adiciona um evento de submit para validar os campos
    form.addEventListener('submit', function (event) {
        // Previne o envio do formulário
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const dataNascimento = document.getElementById('data_nascimento').value.trim();

        // Valida os campos
        if (!nome || !email || !telefone || !cpf || !endereco || !dataNascimento) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validarCPF(cpf)) {
            alert('Por favor, insira um CPF válido.');
            return;
        }

        // Se tudo estiver correto envia o formulário
        form.submit();
    });

    // Função para validar o CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
        let soma = 0, resto;
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;
        soma = 0;
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;
    }
});