# 🚀 Guia Completo: Configuração do Google Analytics e GTM

## 📋 Pré-requisitos

- Conta Google
- Acesso ao site SabIA Labs
- Editor de código (para substituir o Container ID)

---

## 🎯 PASSO 1: Criar Conta no Google Tag Manager

### 1.1 Acessar o GTM

1. Vá para [Google Tag Manager](https://tagmanager.google.com/)
2. Faça login com sua conta Google

### 1.2 Criar Nova Conta

1. Clique em **"Criar Conta"**
2. Preencha os dados:
   - **Nome da Conta**: `SabIA Labs`
   - **País**: `Brasil`
   - **Nome do Container**: `sabia-labs-website`
   - **Plataforma**: `Web`
3. Clique em **"Criar"**

### 1.3 Copiar o Container ID

1. Após criar, você verá uma tela com o código
2. **COPIE o Container ID** (formato: `GTM-XXXXXXX`)
3. **IMPORTANTE**: Substitua `GTM-XXXXXXX` no arquivo `index.html` pelo seu ID real

---

## 🎯 PASSO 2: Configurar Google Analytics 4 (GA4)

### 2.1 Criar Propriedade GA4

1. Vá para [Google Analytics](https://analytics.google.com/)
2. Clique em **"Começar a medir"**
3. Preencha os dados:
   - **Nome da conta**: `SabIA Labs`
   - **Nome da propriedade**: `SabIA Labs Website`
   - **Fuso horário**: `São Paulo`
   - **Moeda**: `Real brasileiro (R$)`

### 2.2 Configurar Fluxo de Dados

1. **Plataforma**: `Web`
2. **URL do site**: `https://sabia-labs.github.io`
3. **Nome do fluxo de dados**: `SabIA Labs Web`

### 2.3 Copiar o Measurement ID

1. Após criar, você verá o **Measurement ID**
2. **COPIE o ID** (formato: `G-XXXXXXXXXX`)
3. **GUARDE** para usar no GTM

---

## 🎯 PASSO 3: Configurar Tags no GTM

### 3.1 Tag de Configuração GA4

1. No GTM, vá em **Tags** → **New**
2. Clique em **"Tag Configuration"** → **"Google Analytics: GA4 Configuration"**
3. Cole o **Measurement ID** (G-XXXXXXXXXX)
4. Clique em **"Triggering"** → **"All Pages"**
5. Nome da tag: `GA4 - Configuration`
6. Clique em **"Save"**

### 3.2 Tag para Page Views Customizados

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4 criada acima
4. **Event Name**: `page_view`
5. **Event Parameters**:
   - `page_name`: `{{Page Name}}`
   - `page_path`: `{{Page Path}}`
6. **Triggering**: **"Custom Event"** → Event name: `page_view`
7. Nome: `GA4 - Page View Custom`
8. **Save**

### 3.3 Tag para CTA Clicks

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4
4. **Event Name**: `cta_click`
5. **Event Parameters**:
   - `cta_name`: `{{CTA Name}}`
   - `cta_location`: `{{CTA Location}}`
6. **Triggering**: **"Custom Event"** → Event name: `cta_click`
7. Nome: `GA4 - CTA Click`
8. **Save**

### 3.4 Tag para Conversions

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4
4. **Event Name**: `conversion`
5. **Event Parameters**:
   - `conversion_type`: `{{Conversion Type}}`
   - `value`: `{{Conversion Value}}`
   - `page_path`: `{{Page Path}}`
6. **Triggering**: **"Custom Event"** → Event name: `conversion`
7. Nome: `GA4 - Conversion`
8. **Save**

### 3.5 Tag para Scroll Depth

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4
4. **Event Name**: `scroll_depth`
5. **Event Parameters**:
   - `scroll_percentage`: `{{Scroll Percentage}}`
   - `page_path`: `{{Page Path}}`
6. **Triggering**: **"Custom Event"** → Event name: `scroll_depth`
7. Nome: `GA4 - Scroll Depth`
8. **Save**

### 3.6 Tag para Billing Toggle

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4
4. **Event Name**: `billing_toggle`
5. **Event Parameters**:
   - `billing_type`: `{{Billing Type}}`
   - `location`: `{{Location}}`
6. **Triggering**: **"Custom Event"** → Event name: `billing_toggle`
7. Nome: `GA4 - Billing Toggle`
8. **Save**

### 3.7 Tag para Language Change

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4
4. **Event Name**: `language_change`
5. **Event Parameters**:
   - `example_type`: `{{Example Type}}`
   - `language`: `{{Language}}`
   - `title`: `{{Title}}`
6. **Triggering**: **"Custom Event"** → Event name: `language_change`
7. Nome: `GA4 - Language Change`
8. **Save**

### 3.8 Tag para Code Copy

1. **Tags** → **New**
2. **Tag Configuration** → **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Selecione a tag GA4
4. **Event Name**: `code_copy`
5. **Event Parameters**:
   - `example_type`: `{{Example Type}}`
   - `language`: `{{Language}}`
   - `title`: `{{Title}}`
6. **Triggering**: **"Custom Event"** → Event name: `code_copy`
7. Nome: `GA4 - Code Copy`
8. **Save**

---

## 🎯 PASSO 4: Configurar Variáveis no GTM

### 4.1 Variáveis de Data Layer

1. Vá em **Variables** → **New**
2. **Variable Configuration** → **"Data Layer Variable"**
3. Crie as seguintes variáveis:

#### Page Name

- **Variable Name**: `Page Name`
- **Data Layer Variable Name**: `page_name`

#### Page Path

- **Variable Name**: `Page Path`
- **Data Layer Variable Name**: `page_path`

#### CTA Name

- **Variable Name**: `CTA Name`
- **Data Layer Variable Name**: `cta_name`

#### CTA Location

- **Variable Name**: `CTA Location`
- **Data Layer Variable Name**: `cta_location`

#### Conversion Type

- **Variable Name**: `Conversion Type`
- **Data Layer Variable Name**: `conversion_type`

#### Conversion Value

- **Variable Name**: `Conversion Value`
- **Data Layer Variable Name**: `value`

#### Scroll Percentage

- **Variable Name**: `Scroll Percentage`
- **Data Layer Variable Name**: `scroll_percentage`

#### Billing Type

- **Variable Name**: `Billing Type`
- **Data Layer Variable Name**: `billing_type`

#### Location

- **Variable Name**: `Location`
- **Data Layer Variable Name**: `location`

#### Example Type

- **Variable Name**: `Example Type`
- **Data Layer Variable Name**: `example_type`

#### Language

- **Variable Name**: `Language`
- **Data Layer Variable Name**: `language`

#### Title

- **Variable Name**: `Title`
- **Data Layer Variable Name**: `title`

---

## 🎯 PASSO 5: Atualizar o Código no Site

### 5.1 Substituir Container ID

1. Abra o arquivo `index.html`
2. Substitua **TODAS** as ocorrências de `GTM-XXXXXXX` pelo seu Container ID real
3. Salve o arquivo

### 5.2 Verificar Implementação

O código já está implementado no site, você só precisa substituir o ID.

---

## 🎯 PASSO 6: Testar a Implementação

### 6.1 Usar Preview Mode

1. No GTM, clique em **"Preview"**
2. Digite a URL: `https://sabia-labs.github.io`
3. Clique em **"Connect"**

### 6.2 Testar Eventos

1. **Page View**: Navegue entre as páginas
2. **CTA Clicks**: Clique nos botões
3. **Scroll**: Role a página
4. **Formulário**: Preencha e envie o formulário
5. **Interações**: Teste o switch de preços e seletor de linguagem

### 6.3 Verificar no GTM

- Todos os eventos devem aparecer no painel de debug
- Verifique se os parâmetros estão sendo enviados corretamente

---

## 🎯 PASSO 7: Publicar as Alterações

### 7.1 Publicar no GTM

1. No GTM, clique em **"Submit"**
2. **Version Name**: `Initial GA4 Setup`
3. **Version Description**: `Configuração inicial do Google Analytics 4`
4. Clique em **"Publish"**

### 7.2 Deploy do Site

1. Faça commit das alterações no `index.html`
2. Faça push para o repositório
3. O site será atualizado automaticamente

---

## 🎯 PASSO 8: Configurar Goals no GA4

### 8.1 Acessar GA4

1. Vá para [Google Analytics](https://analytics.google.com/)
2. Selecione sua propriedade

### 8.2 Configurar Eventos de Conversão

1. Vá em **Configure** → **Events**
2. Marque como **"Conversions"**:
   - `conversion` (quando `conversion_type = lead_registration`)
   - `cta_click` (quando `cta_name = garantir-desconto`)

### 8.3 Configurar Audiences

1. Vá em **Configure** → **Audiences**
2. Crie audiências personalizadas:
   - **"Interessados em Preços"**: Usuários que clicaram em `billing_toggle`
   - **"Desenvolvedores Ativos"**: Usuários que copiaram código
   - **"Leads Qualificados"**: Usuários que fizeram scroll de 75%

---

## 🎯 PASSO 9: Configurar Relatórios

### 9.1 Relatórios Personalizados

1. Vá em **Explore** → **Free Form**
2. Crie relatórios para:
   - **CTAs mais clicados**
   - **Conversões por fonte**
   - **Engajamento por seção**
   - **Comportamento de scroll**

### 9.2 Dashboards

1. Crie dashboards personalizados
2. Adicione widgets importantes:
   - Total de conversões
   - CTAs mais efetivos
   - Taxa de engajamento
   - Funil de conversão

---

## ✅ CHECKLIST FINAL

- [ ] Container GTM criado e ID copiado
- [ ] Propriedade GA4 criada e Measurement ID copiado
- [ ] 8 tags criadas no GTM
- [ ] 12 variáveis configuradas no GTM
- [ ] Container ID substituído no `index.html`
- [ ] Preview mode testado
- [ ] Todos os eventos funcionando
- [ ] GTM publicado
- [ ] Site deployado
- [ ] Goals configurados no GA4
- [ ] Relatórios personalizados criados

---

## 🚨 TROUBLESHOOTING

### Problema: Eventos não aparecem

**Solução**: Verifique se o Container ID foi substituído corretamente

### Problema: Parâmetros não chegam

**Solução**: Verifique se as variáveis do GTM estão configuradas

### Problema: Preview mode não funciona

**Solução**: Verifique se o site está acessível publicamente

### Problema: Dados não aparecem no GA4

**Solução**: Aguarde até 24h para processamento inicial

---

## 📞 SUPORTE

Se precisar de ajuda:

1. Verifique a documentação do GTM
2. Consulte o Google Analytics Help Center
3. Teste sempre no Preview Mode antes de publicar

**🎉 Parabéns! Seu tracking está 100% configurado!**
