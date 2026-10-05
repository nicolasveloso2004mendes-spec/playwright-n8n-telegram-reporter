import { Reporter, FullResult } from '@playwright/test/reporter';
import axios from 'axios';

class TelegramReporter implements Reporter {
  async onEnd(result: FullResult): Promise<void> {
    console.log(`\n Status final da suite: ${result.status}`);

    if (result.status === 'failed') {
      const payload = {
        chat_id: "8025215383",
        projectName: "Playwright Automation",
        environment: "Local / Dev",
        failedTests: "O teste do Google falhou conforme esperado!"
      };

      // URL de Teste do n8n
      const webhookUrl = 'http://localhost:5678/webhook-test/playwrigth-results';

      try {
        // O await obriga o Playwright a esperar pela resposta completa do n8n
        const response = await axios.post(webhookUrl, payload, {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 10000 // Aguarda até 10 segundos
        });

        console.log(` ✅ [n8n] Alerta enviado com sucesso! Status HTTP: ${response.status}`);
      } catch (error: any) {
        if (error.response) {
          console.error(` ❌ [n8n] O n8n respondeu com erro HTTP ${error.response.status}:`, error.response.data);
        } else if (error.request) {
          console.error(' ❌ [n8n] Sem resposta do n8n. Verifique se o n8n está a rodar na porta 5678.');
        } else {
          console.error(' ❌ [n8n] Erro ao disparar requisição:', error.message);
        }
      }
    }
  }
}

export default TelegramReporter;