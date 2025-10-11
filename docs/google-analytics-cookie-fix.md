# 🔧 Correção do Erro de Cookie Google Analytics

## 🚨 Problema Identificado

O erro `Cookie "_ga_Y9PX7D2GDJ" has been rejected for invalid domain` estava ocorrendo devido à configuração inadequada dos cookies do Google Analytics.

## ✅ Solução Implementada

### Configuração Atualizada no `index.html`

```javascript
gtag("config", "G-Y9PX7D2GDJ", {
  cookie_domain: "sabia-labs.github.io",
  cookie_flags: "SameSite=None;Secure",
  cookie_expires: 63072000,
  send_page_view: true,
});
```

### Parâmetros Explicados

- **`cookie_domain`**: Define explicitamente o domínio correto para os cookies
- **`cookie_flags`**: Configura os atributos de segurança necessários para navegadores modernos
- **`cookie_expires`**: Define o tempo de expiração dos cookies (2 anos)
- **`send_page_view`**: Garante que as visualizações de página sejam enviadas

## 🧪 Como Testar a Correção

### 1. Limpar Cookies Existentes

```bash
# No navegador, abra as ferramentas de desenvolvedor (F12)
# Vá para Application > Storage > Cookies
# Delete todos os cookies relacionados ao Google Analytics
```

### 2. Verificar no Console do Navegador

```javascript
// Abra o console (F12) e execute:
console.log(document.cookie);
// Verifique se os cookies _ga estão sendo definidos corretamente
```

### 3. Usar o Google Tag Assistant

1. Instale a extensão [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Navegue para `https://sabia-labs.github.io`
3. Verifique se não há erros relacionados a cookies

### 4. Verificar no Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Vá para **Reports** > **Realtime**
3. Navegue pelo site e verifique se os eventos estão sendo registrados

## 🔍 Monitoramento

### Indicadores de Sucesso

- ✅ Nenhum erro de cookie no console do navegador
- ✅ Eventos aparecendo no Google Analytics em tempo real
- ✅ Cookies sendo definidos com o domínio correto

### Indicadores de Problema

- ❌ Erros de "invalid domain" no console
- ❌ Cookies não sendo definidos
- ❌ Dados não aparecendo no Google Analytics

## 📝 Notas Técnicas

### Por que o erro ocorria?

1. **Domínio não especificado**: O Google Analytics estava tentando definir cookies sem especificar o domínio correto
2. **Atributos de segurança**: Navegadores modernos exigem `SameSite=None;Secure` para cookies de terceiros
3. **Configuração padrão**: A configuração padrão do GA4 não é otimizada para sites GitHub Pages

### Compatibilidade

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Navegadores móveis

## 🚀 Próximos Passos

1. **Deploy**: Faça commit e push das alterações
2. **Monitoramento**: Acompanhe os dados no Google Analytics por 24-48h
3. **Otimização**: Considere implementar eventos customizados adicionais se necessário

---

**Data da Correção**: $(date)
**Versão**: 1.0
**Status**: ✅ Implementado
