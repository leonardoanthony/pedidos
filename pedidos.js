const pedidos = [
  {
    code: 1212,
    nome: "Edgard",
    data: "2026-07-14",
    status: "Entregue",
    itens: [
        { item: "Pack Camisa 3 Unidades", tamanho: "GG", quantidade: 1, valorUnitario: 90 },
        { item: "Sapato Nike - Preto", tamanho: "42", quantidade: 1, valorUnitario: 120 },
        { item: "Sapato New Balance - Bege", tamanho: "42", quantidade: 1, valorUnitario: 120 },
        { item: "Frete", tamanho: "", quantidade: 1, valorUnitario: 10 }
      ],
      pagamentos: [
        { mes: "Agosto", valor: 85, status: "Em Aberto" },
        { mes: "Setembro", valor: 85, status: "Em Aberto" },
        { mes: "Outubro", valor: 85, status: "Em Aberto" },
        { mes: "Novembro", valor: 85, status: "Em Aberto" }
      ]
    },
  {
    code: 0002,
    nome: "Robson",
    data: "2026-07-16",
    status: "Em separação",
    itens: [
      { item: "Camisa Viscose - Bege", tamanho: "G", quantidade: 1, valorUnitario: 30 },
      { item: "Camisa Viscose - Bordo", tamanho: "G", quantidade: 1, valorUnitario: 30 },
      { item: "Camisa Viscose - Vermelha", tamanho: "GG", quantidade: 1, valorUnitario: 30 },
      { item: "Camisa Viscose - Azul Marinho", tamanho: "GG", quantidade: 1, valorUnitario: 30 },
      { item: "Camisa Algodão - Verde", tamanho: "G", quantidade: 1, valorUnitario: 40 },
      { item: "Camisa Algodão - Preto", tamanho: "GG", quantidade: 1, valorUnitario: 40 },
    ],
    pagamentos: [
      { mes: "Agosto", valor: 100, status: "Em Aberto" },
      { mes: "Setembro", valor: 100, status: "Em Aberto" }
    ]
  },
  {
    code: 0003,
    nome: "Shalom",
    data: "2026-07-20",
    status: "Aguardando Coleta",
    itens: [
      { item: "Pack Camisa 3 Unidades", tamanho: "M", quantidade: 1, valorUnitario: 90 },
    ],
    pagamentos: [
      { mes: "Julho", valor: 90, status: "Em Aberto" },
    ]
  },

];
