import { env } from "@/env";

// Função utilitária para fazer requisições à API
// Recebe o caminho da rota e opções opcionais do fetch
export function api(path: string, init?: RequestInit) {
  // Obtém a base da URL da API das variáveis de ambiente
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  // Cria a URL completa juntando a base com o caminho informado
  const url = new URL(path, baseUrl);

  // Realiza a requisição usando fetch e retorna a Promise
  return fetch(url, init);
}
