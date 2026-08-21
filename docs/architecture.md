# BotNest — arquitetura

```text
GitHub Pages
    │
    ▼
index.html + style.css + script.js
    │ HTTPS
    ▼
BotNest API (Node.js/Express)
    │
    ├── status / uptime / logs
    └── controle dos processos
             │
             ├── Bot 1 (projeto do VS Code)
             ├── Bot 2 (projeto do VS Code)
             └── Bot 3 (projeto do VS Code)
```

O GitHub Pages hospeda somente o frontend estático. Ele não executa os processos Node.js dos bots.

Os bots devem rodar em um servidor/host com processo persistente. O backend do BotNest conversa com esse ambiente para obter status e, futuramente, iniciar, parar ou reiniciar bots.
