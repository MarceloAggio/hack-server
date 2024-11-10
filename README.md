# hack-server


documentação de rotas :

------------------------------------------------------------------------------------------

ROTA DE CADASTRO DE USUARIO
POST - v1/register-user

dados necessarios no body : 

{
    "email" : "teste@teste",
    "password" : "12345",
    "name": "Marcelo Aggio",
    "cpf" : "123456789",
    "phoneNumber" : "1521515151",
    "fixedIncome" : 4200
}

----------------------------------------------------------------------------------------------------

ROTA de login 
GET - v1/login 

dados necessarios no body :
{
    "email" : "teste@testeeeeee",
    "password" : "12345"
}

------------------------------------------------------------------------------

ROTA DE SCORE DO USUARIO
GET - v1/user/score

dados necessarios no header :
Authorization : Bearer {{token}}

---------------------------------------------------------------------------

ROTA DE REGISTRO DE FINANÇA (despesa ou ganho)
POST - v1/financial-registration

dados necessarios no header : 
Authorization : Bearer {{token}}

dados necessarios no body : 


  {
    "type": "DESPESA",
    "title": "Curso Online",
    "amount": 250.00,
    "category": "EDUCACAO"
  }

---------------------------------------------------------------------------------  

ROTA DE VISUALIZAÇÃO DE PENDENCIAS
GET - v1/user/pendency

dados necessarios no header  : 
Authorization : Bearer {{token}}

------------------------------------------------------------------------------

ROTA DE BOLETOS POR PENDENCIA
GET - v1/user/pendency/:id/slips

dados necessarios no header : 
Authorization : Bearer {{token}}

-------------------------------------------------------------------

ROTA PARA CADASTRO DE PLANO DE AÇÃO
POST - v1/action-plan

dados necessarios no body : 
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

dados necessarios no header : 
Authorization : Bearer {{token}}

------------------------------------------------------------------

ROTA PARA VISUALIZAÇÂO DE PLANO DE AÇÃO
GET - v1/action-plan

dados necessarios no header : 
Authorization : Bearer {{token}}

-------------------------------------------------------------------

ROTA PARA ALTERAÇÂO DE NOME
PUT - v1/user/alter-name

dados necessarios no body :
{
    "newName" : "TESTE TESTE TESTE 1011"
}

dados necessarios no header : 
Authorization : Bearer {{token}}

-------------------------------------------------------

ROTA PARA ALTERAÇÂO DE TELEFONE
PUT - v1/user/alter-phone

dados necessarios no body :
{
    "newPhoneNumber" : "99999999999"
}

dados necessarios no header : 
Authorization : Bearer {{token}}

--------------------------------------
ROTA PARA ALTERAÇÂO DE RENDA FIXA
PUT - v1/user/alter-fixed-income

dados necessarios no body :
{
    "newFixedIncome" : 23323
}

dados necessarios no header : 
Authorization : Bearer {{token}}


