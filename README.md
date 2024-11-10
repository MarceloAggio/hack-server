📄 Documentação de Rotas - hack-server

Sumário

Rota de Cadastro de Usuário
<br />
Rota de Login
<br />
Rota de Score do Usuário
<br />
Rota de Registro de Finança
<br />
Rota de Visualização de Pendências
<br />
Rota de Boletos por Pendência
<br />
Rota para Cadastro de Plano de Ação
<br />
Rota para Visualização de Plano de Ação
<br />
Rota para Alteração de Nome
<br />
Rota para Alteração de Telefone
<br />
Rota para Alteração de Renda Fixa
<br />


1. 📝 Rota de Cadastro de Usuário
POST - v1/register-user

Dados necessários no body:
{
    "email": "teste@teste",
    "password": "12345",
    "name": "Marcelo Aggio",
    "cpf": "123456789",
    "phoneNumber": "1521515151",
    "fixedIncome": 4200
}

2. 🔐 Rota de Login
GET - v1/login

Dados necessários no body:
{
    "email": "teste@testeeeeee",
    "password": "12345"
}

3. 📊 Rota de Score do Usuário
GET - v1/user/score

Dados necessários no header:
Authorization: Bearer {{token}}

4. 💰 Rota de Registro de Finança (despesa ou ganho)
POST - v1/financial-registration

Dados necessários no header:
Authorization: Bearer {{token}}

Dados necessários no body:
{
    "type": "DESPESA",
    "title": "Curso Online",
    "amount": 250.00,
    "category": "EDUCACAO"
}

5. 📋 Rota de Visualização de Pendências
GET - v1/user/pendency

Dados necessários no header:
Authorization: Bearer {{token}}

6. 🧾 Rota de Boletos por Pendência
GET - v1/user/pendency/:id/slips

Dados necessários no header:
Authorization: Bearer {{token}}

7. 📝 Rota para Cadastro de Plano de Ação
POST - v1/action-plan

Dados necessários no body:
{
    "priorityList": [
        {
            "debtName": "Empréstimo pessoal",
            "amount": 5000,
            "dueDate": "2024-12-15"
        },
        {
            "debtName": "Fatura do cartão de crédito",
            "amount": 1500,
            "dueDate": "2024-11-25"
        }
    ],
    "monthlyPaymentSuggestions": [
        {
            "debtName": "Empréstimo pessoal",
            "suggestedAmount": 500
        },
        {
            "debtName": "Fatura do cartão de crédito",
            "suggestedAmount": 300
        }
    ],
    "estimatedPayoffTime": "12 meses",
    "negotiationTips": [
        "Entre em contato com seu credor para renegociar as taxas de juros.",
        "Considere consolidar dívidas para reduzir pagamentos mensais."
    ],
    "monthlyBudget": {
        "essentialExpenses": 3000,
        "variableExpenses": 1000,
        "savings": 500
    },
    "alerts": [
        "Fatura do cartão de crédito vence em 5 dias.",
        "O pagamento do empréstimo pessoal está atrasado em 2 dias."
    ],
    "additionalTips": [
        "Tente reduzir os gastos com lazer para liberar mais renda para pagamentos.",
        "Considere uma fonte de renda extra para acelerar a quitação das dívidas."
    ]
}
Dados necessários no header:
Authorization: Bearer {{token}}


8. 📑 Rota para Visualização de Plano de Ação
GET - v1/action-plan

Dados necessários no header:
Authorization: Bearer {{token}}


9. 🖊️ Rota para Alteração de Nome
PUT - v1/user/alter-name

Dados necessários no body:
{
    "newName": "TESTE TESTE TESTE 1011"
}

Dados necessários no header:
Authorization: Bearer {{token}}


10. 📱 Rota para Alteração de Telefone
PUT - v1/user/alter-phone

Dados necessários no body:
{
    "newPhoneNumber": "99999999999"
}
Dados necessários no header:
Authorization: Bearer {{token}}


11. 💵 Rota para Alteração de Renda Fixa
PUT - v1/user/alter-fixed-income

Dados necessários no body:
{
    "newFixedIncome": 23323
}
Dados necessários no header:
Authorization: Bearer {{token}}

Essa documentação fornece um guia claro para o uso de cada rota do sistema, detalhando os dados necessários para requisições e os tipos de requisições (POST, GET, PUT).
