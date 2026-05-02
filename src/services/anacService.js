export async function atualizarBaseANAC() {
  try {
    const resposta = await fetch("/api/atualizar-base-anac");

    if (!resposta.ok) {
      throw new Error("Erro na API");
    }

    return await resposta.json();
  } catch (erro) {
    console.error("Erro ao buscar base:", erro);
    return null;
  }
}