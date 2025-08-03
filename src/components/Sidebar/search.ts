import { type ModelData } from "../viewport/Experience";

export default function searchInItems(itens: ModelData[], termoDeBusca: string): ModelData[] {
    if (!termoDeBusca || termoDeBusca.trim() === "") {
        return itens
    }
    const termoNormalizado = termoDeBusca.toLowerCase().trim()

    return itens.filter(item => {
        if (item.nome && item.nome.toLowerCase().includes(termoNormalizado)) {
      return true;
    }
    if (item.link && item.link.toLowerCase().includes(termoNormalizado)) {
      return true;
    }
    if (item.descricao && item.descricao.toLowerCase().includes(termoNormalizado)) {
      return true;
    }
    })
}