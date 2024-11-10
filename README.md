📄 Documentação de Rotas - hack-server
<br />

## Sumário
<br />
[1. 📝 Rota de Cadastro de Usuário](#1-rota-de-cadastro-de-usuário)
<br />
[2. 🔐 Rota de Login](#2-rota-de-login)
<br />
[3. 📊 Rota de Score do Usuário](#3-rota-de-score-do-usuário)
<br />
[4. 💰 Rota de Registro de Finança](#4-rota-de-registro-de-finança)
<br />
[5. 📋 Rota de Visualização de Pendências](#5-rota-de-visualização-de-pendências)
<br />
[6. 🧾 Rota de Boletos por Pendência](#6-rota-de-boletos-por-pendência)
<br />
[7. 📝 Rota para Cadastro de Plano de Ação](#7-rota-para-cadastro-de-plano-de-ação)
<br />
[8. 📑 Rota para Visualização de Plano de Ação](#8-rota-para-visualização-de-plano-de-ação)
<br />
[9. 🖊️ Rota para Alteração de Nome](#9-rota-para-alteração-de-nome)
<br />
[10. 📱 Rota para Alteração de Telefone](#10-rota-para-alteração-de-telefone)
<br />
[11. 💵 Rota para Alteração de Renda Fixa](#11-rota-para-alteração-de-renda-fixa)
<br />
<br />

## 1. 📝 Rota de Cadastro de Usuário
<br />
**POST** - v1/register-user
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"email": "teste@teste",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"password": "12345",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"name": "Marcelo Aggio",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"cpf": "123456789",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber": "1521515151",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"fixedIncome": 4200
<br />
}
<br />
<br />

## 2. 🔐 Rota de Login
<br />
**GET** - v1/login
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"email": "teste@testeeeeee",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"password": "12345"
<br />
}
<br />
<br />

## 3. 📊 Rota de Score do Usuário
<br />
**GET** - v1/user/score
<br />

Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 4. 💰 Rota de Registro de Finança
<br />
**POST** - v1/financial-registration
<br />

Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"type": "DESPESA",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"title": "Curso Online",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"amount": 250.00,
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"category": "EDUCACAO"
<br />
}
<br />
<br />

## 5. 📋 Rota de Visualização de Pendências
<br />
**GET** - v1/user/pendency
<br />

Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 6. 🧾 Rota de Boletos por Pendência
<br />
**GET** - v1/user/pendency/:id/slips
<br />

Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 7. 📝 Rota para Cadastro de Plano de Ação
<br />
**POST** - v1/action-plan
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"priorityList": [
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"debtName": "Empréstimo pessoal",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amount": 5000,
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"dueDate": "2024-12-15"
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"debtName": "Fatura do cartão de crédito",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amount": 1500,
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"dueDate": "2024-11-25"
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
<br />
&nbsp;&nbsp;&nbsp;&nbsp;],
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"monthlyPaymentSuggestions": [
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"debtName": "Empréstimo pessoal",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"suggestedAmount": 500
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"debtName": "Fatura do cartão de crédito",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"suggestedAmount": 300
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
<br />
&nbsp;&nbsp;&nbsp;&nbsp;],
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"estimatedPayoffTime": "12 meses",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"negotiationTips": [
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Entre em contato com seu credor para renegociar as taxas de juros.",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Considere consolidar dívidas para reduzir pagamentos mensais."
<br />
&nbsp;&nbsp;&nbsp;&nbsp;],
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"monthlyBudget": {
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"essentialExpenses": 3000,
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"variableExpenses": 1000,
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"savings": 500
<br />
&nbsp;&nbsp;&nbsp;&nbsp;},
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"alerts": [
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fatura do cartão de crédito vence em 5 dias.",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O pagamento do empréstimo pessoal está atrasado em 2 dias."
<br />
&nbsp;&nbsp;&nbsp;&nbsp;],
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"additionalTips": [
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Tente reduzir os gastos com lazer para liberar mais renda para pagamentos.",
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Considere uma fonte de renda extra para acelerar a quitação das dívidas."
<br />
&nbsp;&nbsp;&nbsp;&nbsp;]
<br />
}
<br />
Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 8. 📑 Rota para Visualização de Plano de Ação
<br />
**GET** - v1/action-plan
<br />

Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 9. 🖊️ Rota para Alteração de Nome
<br />
**PUT** - v1/user/alter-name
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"newName": "TESTE TESTE TESTE 1011"
<br />
}
<br />

Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 10. 📱 Rota para Alteração de Telefone
<br />
**PUT** - v1/user/alter-phone
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"newPhoneNumber": "99999999999"
<br />
}
<br />
Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

## 

11. 💵 Rota para Alteração de Renda Fixa
<br />
**PUT** - v1/user/alter-fixed-income
<br />

Dados necessários no body:
<br />
{
<br />
&nbsp;&nbsp;&nbsp;&nbsp;"newFixedIncome": 23323
<br />
}
<br />
Dados necessários no header:
<br />
Authorization: Bearer {{token}}
<br />
<br />

Essa documentação fornece um guia claro para o uso de cada rota do sistema, detalhando os dados necessários para requisições e os tipos de requisições (POST, GET, PUT).
<br />
