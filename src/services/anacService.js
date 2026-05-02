export async function atualizarBaseANAC() {
  const resposta = await fetch("/.netlify/functions/atualizar-base-anac");

  if (!resposta.ok) {
    throw new Error("Falha ao atualizar base ANAC.");
  }

  return await resposta.json();
}