# 🚀 Playwright Test Automation com Alertas via Webhook (n8n & Telegram)

Este projeto demonstra uma integração avançada entre testes automatizados em **Playwright (TypeScript)** e uma arquitetura de monitoramento em tempo real utilizando **n8n** e **Telegram Bot API**. 

O objetivo é capturar falhas em suítes de testes automatizados de forma assíncrona e disparar alertas instantâneos para um canal ou chat privado.

---

## 🛠️ Tecnologias Utilizadas

* **[Playwright](https://playwright.dev/):** Framework de testes end-to-end.
* **TypeScript:** Linguagem base para tipagem e estruturação do reporter customizado.
* **Axios:** Cliente HTTP para comunicação com o webhook.
* **n8n:** Ferramenta de automação low-code para tratamento de payloads e integração de APIs.
* **Telegram Bot API:** Canal de entrega das notificações de falhas.

---

## ⚙️ Como Funciona

1. A suíte de testes do Playwright é executada localmente ou em pipeline de CI/CD.
2. Um **Custom Reporter** implementado em TypeScript (`onEnd`) monitora o status final da execução.
3. Caso ocorra alguma falha (`result.status === 'failed'`), um payload JSON estruturado é enviado via requisição `POST` para um **Webhook do n8n**.
4. O n8n processa os dados recebidos e aciona o nó do Telegram para formatar e entregar a notificação de alerta imediatamente.

---

## 📂 Estrutura do Projeto

```text
├── tests/                  # Arquivos de teste e especificações E2E
├── reporters/              # Custom reporters (ex: telegram-reporter.ts)
├── playwright.config.ts    # Configurações globais do Playwright
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do repositório