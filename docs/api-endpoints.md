# Documentação da API - SabIA Labs

Esta documentação especifica todos os endpoints necessários para o backend da plataforma SabIA Labs, baseada na análise do frontend existente.

## Visão Geral

A API da SabIA Labs é uma plataforma de IA que oferece serviços de OCR e Reconhecimento de documentos. O sistema possui:

- **Usuários** que podem pertencer a múltiplos **Times**
- **Times** que possuem **Planos** de assinatura
- **API Keys** para autenticação dos serviços
- **Métricas de uso** para monitoramento

## Autenticação

Todos os endpoints protegidos requerem um token JWT no header:

```
Authorization: Bearer <jwt_token>
```

## Base URL

```
https://api.sabialabs.com/v1
```

---

## 1. Autenticação e Usuários

### 1.1 Cadastro de Usuário

**POST** `/auth/register`

Cria um novo usuário no sistema.

**Request Body:**

```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "password": "senha123",
  "phone": "(11) 99999-9999",
  "company": "Empresa Exemplo"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "Usuário criado com sucesso",
  "data": {
    "user": {
      "id": "uuid",
      "name": "João Silva",
      "email": "joao@exemplo.com",
      "phone": "(11) 99999-9999",
      "company": "Empresa Exemplo",
      "createdAt": "2025-01-20T10:30:00Z",
      "emailVerified": false
    },
    "token": "jwt_token_here"
  }
}
```

### 1.2 Login

**POST** `/auth/login`

Autentica um usuário e retorna um JWT.

**Request Body:**

```json
{
  "email": "joao@exemplo.com",
  "password": "senha123"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Login realizado com sucesso",
  "data": {
    "user": {
      "id": "uuid",
      "name": "João Silva",
      "email": "joao@exemplo.com",
      "phone": "(11) 99999-9999",
      "company": "Empresa Exemplo",
      "avatar": "https://api.sabialabs.com/avatars/uuid.jpg"
    },
    "token": "jwt_token_here",
    "expiresIn": 86400
  }
}
```

### 1.3 Recuperação de Senha

**POST** `/auth/forgot-password`

Envia um email com link para recuperação de senha.

**Request Body:**

```json
{
  "email": "joao@exemplo.com"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Email de recuperação enviado com sucesso"
}
```

### 1.4 Redefinir Senha

**POST** `/auth/reset-password`

Redefine a senha usando o token de recuperação.

**Request Body:**

```json
{
  "token": "reset_token_from_email",
  "newPassword": "nova_senha123"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Senha redefinida com sucesso"
}
```

### 1.5 Verificar Email

**POST** `/auth/verify-email`

Verifica o email do usuário usando o token enviado por email.

**Request Body:**

```json
{
  "token": "verification_token_from_email"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Email verificado com sucesso"
}
```

---

## 2. Times (Teams)

### 2.1 Listar Times do Usuário

**GET** `/teams`

Retorna todos os times que o usuário faz parte.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Time Desenvolvimento",
      "plan": "Starter",
      "logo": "https://api.sabialabs.com/logos/team-uuid.png",
      "role": "admin",
      "createdAt": "2025-01-15T10:30:00Z"
    },
    {
      "id": "uuid2",
      "name": "Time Produção",
      "plan": "Pro",
      "logo": "https://api.sabialabs.com/logos/team-uuid2.png",
      "role": "member",
      "createdAt": "2025-01-10T14:20:00Z"
    }
  ]
}
```

### 2.2 Criar Time

**POST** `/teams`

Cria um novo time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "name": "Novo Time",
  "plan": "sandbox"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "Time criado com sucesso",
  "data": {
    "id": "uuid",
    "name": "Novo Time",
    "plan": "sandbox",
    "logo": "https://api.sabialabs.com/logos/team-uuid.png",
    "role": "admin",
    "createdAt": "2025-01-20T10:30:00Z"
  }
}
```

### 2.3 Obter Detalhes do Time

**GET** `/teams/{teamId}`

Retorna os detalhes de um time específico.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Time Desenvolvimento",
    "plan": {
      "name": "Starter",
      "price": "R$ 99",
      "priceSubtext": "/mês",
      "annualPrice": "R$ 990",
      "annualPriceSubtext": "/ano",
      "mainFeature": "5.000 requisições/mês",
      "features": [
        {
          "text": "Suporte por email",
          "included": true
        },
        {
          "text": "Rate limit: 10 req/s",
          "included": true
        }
      ],
      "popular": true
    },
    "members": [
      {
        "id": "uuid",
        "name": "João Silva",
        "email": "joao@exemplo.com",
        "role": "admin",
        "avatar": "https://api.sabialabs.com/avatars/uuid.jpg"
      }
    ],
    "createdAt": "2025-01-15T10:30:00Z"
  }
}
```

### 2.4 Adicionar Membro ao Time

**POST** `/teams/{teamId}/members`

Adiciona um novo membro ao time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "email": "novo@exemplo.com",
  "role": "member"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "Membro adicionado com sucesso",
  "data": {
    "id": "uuid",
    "name": "Novo Usuário",
    "email": "novo@exemplo.com",
    "role": "member",
    "avatar": "https://api.sabialabs.com/avatars/uuid.jpg"
  }
}
```

### 2.5 Remover Membro do Time

**DELETE** `/teams/{teamId}/members/{userId}`

Remove um membro do time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "message": "Membro removido com sucesso"
}
```

---

## 3. Planos e Assinaturas

### 3.1 Listar Planos Disponíveis

**GET** `/plans`

Retorna todos os planos disponíveis.

**Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "name": "Sandbox",
      "price": "Gratuito",
      "priceSubtext": "Para desenvolvimento",
      "annualPrice": "Gratuito",
      "annualPriceSubtext": "Para desenvolvimento",
      "mainFeature": "Requisições ilimitadas (dev)",
      "features": [
        {
          "text": "Suporte por email",
          "included": true
        },
        {
          "text": "Rate limit: 5 req/s",
          "included": true
        },
        {
          "text": "Ambiente de desenvolvimento",
          "included": true
        },
        {
          "text": "Sem custo adicional",
          "included": true
        },
        {
          "text": "Produção",
          "included": false
        }
      ],
      "cta": "Começar grátis",
      "ctaVariant": "secondary",
      "popular": false
    },
    {
      "name": "Starter",
      "price": "R$ 99",
      "priceSubtext": "/mês",
      "annualPrice": "R$ 990",
      "annualPriceSubtext": "/ano",
      "mainFeature": "5.000 requisições/mês",
      "features": [
        {
          "text": "Suporte por email",
          "included": true
        },
        {
          "text": "Rate limit: 10 req/s",
          "included": true
        },
        {
          "text": "Ambiente de produção",
          "included": true
        },
        {
          "text": "R$ 0,015/req adicional",
          "included": true
        },
        {
          "text": "SLA garantido",
          "included": false
        }
      ],
      "cta": "Começar agora",
      "ctaVariant": "primary",
      "popular": true
    }
  ]
}
```

### 3.2 Alterar Plano do Time

**PUT** `/teams/{teamId}/plan`

Altera o plano de assinatura do time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "plan": "pro",
  "billingCycle": "monthly"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Plano alterado com sucesso",
  "data": {
    "teamId": "uuid",
    "oldPlan": "starter",
    "newPlan": "pro",
    "billingCycle": "monthly",
    "nextBillingDate": "2025-02-20T10:30:00Z"
  }
}
```

### 3.3 Obter Informações de Cobrança

**GET** `/teams/{teamId}/billing`

Retorna informações de cobrança do time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "data": {
    "currentPlan": "pro",
    "billingCycle": "monthly",
    "nextBillingDate": "2025-02-20T10:30:00Z",
    "amount": 499.0,
    "currency": "BRL",
    "paymentMethod": {
      "type": "credit_card",
      "last4": "4242",
      "brand": "visa"
    },
    "usage": {
      "current": 25000,
      "limit": 50000,
      "resetDate": "2025-02-01T00:00:00Z"
    }
  }
}
```

---

## 4. API Keys

### 4.1 Listar API Keys

**GET** `/teams/{teamId}/api-keys`

Retorna todas as API Keys do time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "key": "sk-1234567890abcdef1234567890abcdef",
      "name": "API Key Principal",
      "description": "Chave principal para acesso aos serviços core da plataforma",
      "createdAt": "2025-01-15T10:30:00Z",
      "status": "active",
      "lastUsed": "2025-01-20T14:22:15Z"
    },
    {
      "id": 2,
      "key": "sk-abcdef1234567890abcdef1234567890",
      "name": "API Key Desenvolvimento",
      "description": "Usada para testes e desenvolvimento de novas funcionalidades",
      "createdAt": "2025-01-10T09:15:30Z",
      "status": "active",
      "lastUsed": "2025-01-19T16:45:22Z"
    }
  ]
}
```

### 4.2 Criar API Key

**POST** `/teams/{teamId}/api-keys`

Cria uma nova API Key para o time.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "name": "API Key Mobile",
  "description": "Chave para aplicações móveis iOS e Android"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "API Key criada com sucesso",
  "data": {
    "id": 3,
    "key": "sk-99887766554433221100998877665544",
    "name": "API Key Mobile",
    "description": "Chave para aplicações móveis iOS e Android",
    "createdAt": "2025-01-20T10:30:00Z",
    "status": "active",
    "lastUsed": null
  }
}
```

### 4.3 Atualizar API Key

**PUT** `/teams/{teamId}/api-keys/{keyId}`

Atualiza informações de uma API Key.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "name": "API Key Mobile Atualizada",
  "description": "Chave atualizada para aplicações móveis"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "API Key atualizada com sucesso",
  "data": {
    "id": 3,
    "key": "sk-99887766554433221100998877665544",
    "name": "API Key Mobile Atualizada",
    "description": "Chave atualizada para aplicações móveis",
    "createdAt": "2025-01-20T10:30:00Z",
    "status": "active",
    "lastUsed": null
  }
}
```

### 4.4 Ativar/Desativar API Key

**PATCH** `/teams/{teamId}/api-keys/{keyId}/status`

Ativa ou desativa uma API Key.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "status": "revoked"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Status da API Key alterado com sucesso",
  "data": {
    "id": 3,
    "status": "revoked",
    "updatedAt": "2025-01-20T15:30:00Z"
  }
}
```

### 4.5 Deletar API Key

**DELETE** `/teams/{teamId}/api-keys/{keyId}`

Remove uma API Key permanentemente.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "message": "API Key removida com sucesso"
}
```

---

## 5. Dashboard e Métricas

### 5.1 Obter Dados do Dashboard

**GET** `/teams/{teamId}/dashboard`

Retorna dados consolidados para o dashboard.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**

- `period` (opcional): `7d`, `30d`, `90d` (padrão: `30d`)

**Response (200):**

```json
{
  "success": true,
  "data": {
    "summary": {
      "totalRequests": 125000,
      "totalCost": 1875.5,
      "activeApiKeys": 5,
      "teamMembers": 8
    },
    "usage": {
      "current": 25000,
      "limit": 50000,
      "percentage": 50,
      "resetDate": "2025-02-01T00:00:00Z"
    },
    "chartData": [
      {
        "date": "2025-01-01",
        "ocr": 1200,
        "recognition": 800
      },
      {
        "date": "2025-01-02",
        "ocr": 1500,
        "recognition": 900
      }
    ],
    "recentActivity": [
      {
        "id": 1,
        "type": "api_call",
        "description": "API Key 'Principal' utilizada para OCR",
        "timestamp": "2025-01-20T14:22:15Z",
        "apiKey": "sk-1234...",
        "endpoint": "/v1/ocr"
      }
    ]
  }
}
```

### 5.2 Obter Logs de Uso

**GET** `/teams/{teamId}/usage-logs`

Retorna logs detalhados de uso das APIs.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**

- `page` (opcional): número da página (padrão: 1)
- `limit` (opcional): itens por página (padrão: 50, máximo: 100)
- `startDate` (opcional): data de início (ISO 8601)
- `endDate` (opcional): data de fim (ISO 8601)
- `api` (opcional): filtrar por API (`ocr` ou `recognition`)

**Response (200):**

```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": 1,
        "date": "2025-01-20T14:22:15Z",
        "api": "ocr",
        "count": 1200,
        "apiKey": "sk-1234...",
        "endpoint": "/v1/ocr",
        "responseTime": 150,
        "status": "success"
      },
      {
        "id": 2,
        "date": "2025-01-20T13:45:30Z",
        "api": "recognition",
        "count": 800,
        "apiKey": "sk-5678...",
        "endpoint": "/v1/recognition",
        "responseTime": 200,
        "status": "success"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 1250,
      "totalPages": 25
    }
  }
}
```

### 5.3 Obter Estatísticas de Uso

**GET** `/teams/{teamId}/usage-stats`

Retorna estatísticas agregadas de uso.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**

- `period` (opcional): `7d`, `30d`, `90d`, `1y` (padrão: `30d`)
- `groupBy` (opcional): `day`, `week`, `month` (padrão: `day`)

**Response (200):**

```json
{
  "success": true,
  "data": {
    "period": "30d",
    "groupBy": "day",
    "stats": [
      {
        "date": "2025-01-01",
        "ocr": {
          "requests": 1200,
          "cost": 18.0,
          "avgResponseTime": 150
        },
        "recognition": {
          "requests": 800,
          "cost": 12.0,
          "avgResponseTime": 200
        },
        "total": {
          "requests": 2000,
          "cost": 30.0
        }
      }
    ],
    "summary": {
      "totalRequests": 60000,
      "totalCost": 900.0,
      "avgDailyRequests": 2000,
      "avgDailyCost": 30.0
    }
  }
}
```

---

## 6. Serviços de IA

### 6.1 OCR (Optical Character Recognition)

**POST** `/v1/ocr`

Processa uma imagem e extrai texto usando OCR.

**Headers:**

```
Authorization: Bearer <api_key>
Content-Type: multipart/form-data
```

**Request Body (multipart/form-data):**

```
image: [arquivo de imagem]
language: pt (opcional, padrão: auto)
```

**Response (200):**

```json
{
  "success": true,
  "data": {
    "text": "Texto extraído da imagem...",
    "confidence": 0.95,
    "processingTime": 1.2,
    "language": "pt"
  }
}
```

### 6.2 Reconhecimento de Documentos

**POST** `/v1/recognition`

Reconhece e classifica documentos.

**Headers:**

```
Authorization: Bearer <api_key>
Content-Type: multipart/form-data
```

**Request Body (multipart/form-data):**

```
document: [arquivo do documento]
type: auto (opcional, padrão: auto)
```

**Response (200):**

```json
{
  "success": true,
  "data": {
    "type": "cpf",
    "confidence": 0.98,
    "fields": {
      "number": "123.456.789-00",
      "name": "João Silva"
    },
    "processingTime": 2.1
  }
}
```

---

## 7. Webhooks

### 7.1 Configurar Webhook

**POST** `/teams/{teamId}/webhooks`

Configura um webhook para receber notificações.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "url": "https://meusite.com/webhook",
  "events": ["usage_limit_reached", "payment_failed"],
  "secret": "webhook_secret_key"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "Webhook configurado com sucesso",
  "data": {
    "id": "uuid",
    "url": "https://meusite.com/webhook",
    "events": ["usage_limit_reached", "payment_failed"],
    "status": "active",
    "createdAt": "2025-01-20T10:30:00Z"
  }
}
```

### 7.2 Listar Webhooks

**GET** `/teams/{teamId}/webhooks`

Lista todos os webhooks configurados.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "url": "https://meusite.com/webhook",
      "events": ["usage_limit_reached", "payment_failed"],
      "status": "active",
      "lastTriggered": "2025-01-19T15:30:00Z",
      "createdAt": "2025-01-15T10:30:00Z"
    }
  ]
}
```

---

## 8. Códigos de Erro

### Códigos HTTP

- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Dados inválidos
- `401` - Não autorizado
- `403` - Acesso negado
- `404` - Recurso não encontrado
- `409` - Conflito (ex: email já existe)
- `422` - Dados de validação inválidos
- `429` - Rate limit excedido
- `500` - Erro interno do servidor

### Estrutura de Erro

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados de validação inválidos",
    "details": [
      {
        "field": "email",
        "message": "Email é obrigatório"
      }
    ]
  }
}
```

### Códigos de Erro Específicos

- `USER_NOT_FOUND` - Usuário não encontrado
- `INVALID_CREDENTIALS` - Credenciais inválidas
- `EMAIL_ALREADY_EXISTS` - Email já cadastrado
- `TEAM_NOT_FOUND` - Time não encontrado
- `INSUFFICIENT_PERMISSIONS` - Permissões insuficientes
- `API_KEY_NOT_FOUND` - API Key não encontrada
- `API_KEY_REVOKED` - API Key revogada
- `USAGE_LIMIT_EXCEEDED` - Limite de uso excedido
- `PLAN_LIMIT_EXCEEDED` - Limite do plano excedido
- `PAYMENT_REQUIRED` - Pagamento necessário

---

## 9. Rate Limits

### Limites por Plano

- **Sandbox**: 5 req/s
- **Starter**: 10 req/s
- **Pro**: 50 req/s
- **Enterprise**: 200+ req/s

### Headers de Rate Limit

```
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 8
X-RateLimit-Reset: 1640995200
```

---

## 10. Exemplos de Uso

### Exemplo Completo: Criar Time e API Key

```bash
# 1. Login
curl -X POST https://api.sabialabs.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "joao@exemplo.com", "password": "senha123"}'

# 2. Criar time
curl -X POST https://api.sabialabs.com/v1/teams \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{"name": "Meu Time", "plan": "starter"}'

# 3. Criar API Key
curl -X POST https://api.sabialabs.com/v1/teams/{teamId}/api-keys \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{"name": "API Key Principal", "description": "Chave principal"}'

# 4. Usar API Key para OCR
curl -X POST https://api.sabialabs.com/v1/ocr \
  -H "Authorization: Bearer <api_key>" \
  -F "image=@documento.jpg"
```

---

## 11. Changelog

### v1.0.0 (2025-01-20)

- Versão inicial da API
- Autenticação com JWT
- Sistema de times e usuários
- CRUD de API Keys
- Serviços de OCR e Reconhecimento
- Dashboard e métricas
- Sistema de planos e cobrança
