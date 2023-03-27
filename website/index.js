
const projectList = document.getElementById('project-list');
const projectDetails = document.getElementById('project-details');
const projectDescription = document.getElementById('project-description');
const btnClose = document.getElementById('btn-close');

// Adiciona evento de clique em todos os botões Ver Detalhes
const btnProjects = document.querySelectorAll('.btn-project');
btnProjects.forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.getAttribute('data-project-id');
    const project = getProjectById(projectId);
    projectDescription.innerHTML = project.description;
    projectDetails.classList.remove('hidden');
  });
});

// Função que retorna um objeto de projeto com base em um ID
function getProjectById(id) {

  const projects = [
    { id: '1', name: 'Aluguel de Carro com front-end em React', description: 'O front contem login e cadastro de usuario , CRUD para clientes, carros e Locações , token JWT e Boostrap' },

    { id: '2', name: 'Aluguel de Carro com back-end em Spring Boot Api', description: 'O back end foi feito com Spring boot , contendo token JWT , spring secutiry e mais de 130 testes unitarios' },

    // { id: '3', name: 'Projeto em contrucao', description: 'em contrucao' }

  ];
  return projects.find(project => project.id === id);
}

// Adiciona evento de clique no botão Fechar
btnClose.addEventListener('click', () => {
  projectDetails.classList.add('hidden');
});
