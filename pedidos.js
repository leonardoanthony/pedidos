const pedidos = [
  {
    code: 1212,
    nome: "Edgard",
    data: "2026-08-01",
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
    code: 2301,
    nome: "Mariana",
    data: "2026-08-15",
    status: "Em Entrega",
    itens: [
      { item: "Camisa Oversized", tamanho: "G", quantidade: 2, valorUnitario: 79 },
      { item: "Boné Aba Reta", tamanho: "Único", quantidade: 1, valorUnitario: 49 },
      { item: "Frete", tamanho: "", quantidade: 1, valorUnitario: 15 }
    ],
    pagamentos: [
      { mes: "Agosto", valor: 103.50, status: "Pago" },
      { mes: "Setembro", valor: 103.50, status: "Em Aberto" }
    ]
  },
  {
    code: 3456,
    nome: "Rafael",
    data: "2026-07-20",
    status: "Pendente",
    itens: [
      { item: "Calça Cargo", tamanho: "M", quantidade: 1, valorUnitario: 149 },
      { item: "Frete", tamanho: "", quantidade: 1, valorUnitario: 12 }
    ],
    pagamentos: [
      { mes: "Agosto", valor: 80.50, status: "Em Aberto" },
      { mes: "Setembro", valor: 80.50, status: "Em Aberto" }
    ]
  },
  {
    code: 4567,
    nome: "Edgard",
    data: "2026-09-01",
    status: "Atrasado",
    itens: [
      { item: "Moletom Canguru", tamanho: "GG", quantidade: 1, valorUnitario: 189 },
      { item: "Frete", tamanho: "", quantidade: 1, valorUnitario: 10 }
    ],
    pagamentos: [
      { mes: "Setembro", valor: 99.50, status: "Atrasado" },
      { mes: "Outubro", valor: 99.50, status: "Em Aberto" }
    ]
  },
  {
    code: 5678,
    nome: "Amanda",
    data: "2026-07-10",
    status: "Entregue",
    itens: [
      { item: "Regata Masculina", tamanho: "P", quantidade: 3, valorUnitario: 39 },
      { item: "Meia Cano Alto", tamanho: "41-44", quantidade: 2, valorUnitario: 29 },
      { item: "Frete", tamanho: "", quantidade: 0, valorUnitario: 0 }
    ],
    pagamentos: [
      { mes: "Julho", valor: 175, status: "Pago" }
    ]
  },
  {
    code: 6789,
    nome: "Lucas",
    data: "2026-09-10",
    status: "Pendente",
    itens: [
      { item: "Sapato New Balance - Bege", tamanho: "42", quantidade: 1, valorUnitario: 299 },
      { item: "Meia Cano Alto", tamanho: "41-44", quantidade: 3, valorUnitario: 29 },
      { item: "Frete", tamanho: "", quantidade: 1, valorUnitario: 10 }
    ],
    pagamentos: [
      { mes: "Setembro", valor: 198, status: "Em Aberto" },
      { mes: "Outubro", valor: 198, status: "Em Aberto" }
    ]
  }
];
