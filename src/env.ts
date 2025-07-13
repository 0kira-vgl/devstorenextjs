// Importa a biblioteca Zod para validação de schemas
import { z } from "zod";

// Define um schema para validar as variáveis de ambiente
// Isso garante que todas as variáveis necessárias existam e sejam do tipo correto
const envSchema = z.object({
  // Define que NEXT_PUBLIC_API_BASE_URL deve ser uma string válida no formato URL
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

// Tenta fazer o parse das variáveis de ambiente do processo
// usando o schema definido acima
const parsedEnv = envSchema.safeParse(process.env);

// Se a validação falhar...
if (!parsedEnv.success) {
  // Mostra no console quais variáveis de ambiente estão inválidas
  console.error(
    "Invalid environment variables:",
    parsedEnv.error.flatten().fieldErrors,
  );

  // Lança um erro para impedir que a aplicação continue com
  // variáveis de ambiente inválidas
  throw new Error("Invalid environment variables");
}

// Exporta as variáveis de ambiente já validadas e tipadas
export const env = parsedEnv.data;
