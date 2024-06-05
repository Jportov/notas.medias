
const alunos = [
    { nome: 'Ana', nota: 7.5 },
    { nome: 'Bruno', nota: 5.8 },
    { nome: 'Carlos', nota: 6.2 },
    { nome: 'Diana', nota: 8.0 },
    { nome: 'Eduardo', nota: 4.7 },
    { nome: 'Fernanda', nota: 9.1 },
    { nome: 'Gustavo', nota: 3.5 }
  ];
  

  function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  const aprovados = alunosAprovados(alunos);
  console.log(aprovados);
  