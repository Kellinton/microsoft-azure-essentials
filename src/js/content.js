document.addEventListener('DOMContentLoaded', () => {
    const sections = {
      localizar: `
        <section>
          <h3 class="section__title">Localizando serviços por categoria</h3>
          <p>
            Este guia detalhado irá ajudá-lo a navegar pelo portal do Azure 
            para encontrar serviços organizados por categoria. Isso facilitará 
            a identificação das soluções necessárias para seu ambiente no Azure, 
            como serviços de computação, redes, bancos de dados, entre outros.
          </p>    
          <h3 class="section__title">1. Acesse o Portal do Azure</h3>
          <ul>
            <li><p>Abra o navegador e vá até <a href="#" style="color: #60A5FA;">portal.azure.com.</a></p></li>
            <li><p>Faça login com suas credenciais da conta Microsoft.</p></li>
          </ul>
          <h3 class="section__title">2. Acessar o Menu "Criar um Recurso"</h3>
          <ul>
            <li><p>Depois de fazer login, no painel inicial do Azure, clique em "Criar um recurso" no menu lateral à esquerda. Este menu é o ponto de partida para adicionar novos serviços ao seu ambiente Azure.</p></li>
          </ul>
          <h3 class="section__title">3. Explorar as Categorias Disponíveis</h3>
          <ul>
            <li><p>Na página "Criar um recurso", você encontrará uma barra lateral com várias categorias, como:</p></li>
            <li><p>Computação</p></li>
            <li><p>Redes</p></li>
            <li><p>Armazenamento</p></li>
            <li><p>Banco de Dados</p></li>
            <li><p>Web</p></li>
            <li><p>IA + Machine Learning</p></li>
            <li><p>Segurança</p></li>
            <li><p>DevOps</p></li>
            <li><p>Migração</p></li>
            <li><p>Clique em qualquer uma dessas categorias para visualizar os serviços disponíveis dentro de cada uma.</p></li>
          </ul>
          <h3 class="section__title">4. Utilizar a Barra de Pesquisa</h3>
          <ul>
            <li><p>Se você já sabe qual serviço deseja, utilize a barra de pesquisa na parte superior da página "Criar um recurso". Digite o nome ou uma palavra-chave relacionada ao serviço.</p></li>
          </ul>
          <h3 class="section__title">5. Filtrar Serviços por Categoria</h3>
          <ul>
            <li><p>Ao clicar em uma categoria, você pode refinar sua busca aplicando filtros adicionais, como tipo de serviço, preço e tipo de oferta. Isso ajuda a encontrar exatamente o que você precisa.</p></li>
          </ul>
          <h3 class="section__title">6. Explorar o Azure Marketplace</h3>
          <ul>
            <li><p>O Azure Marketplace oferece uma vasta gama de serviços e soluções de terceiros, também organizados por categoria. Você pode acessá-lo clicando em "Marketplace" no menu principal do portal.</p></li>
          </ul>
          <h3 class="section__title">7. Criar e Configurar o Serviço</h3>
          <ul>
            <li><p>Iniciar a Criação e Configuração do Serviço:</p></li>
            <li><p>Quando encontrar o serviço desejado, clique nele para iniciar o processo de configuração. Siga as instruções fornecidas na tela para configurar e provisionar o serviço no seu ambiente Azure.</p></li>
          </ul>
          <hr>
          <p>
            Com este guia, você poderá localizar e configurar facilmente qualquer serviço no Azure, utilizando as categorias e ferramentas de pesquisa disponíveis no portal. Os prints de tela sugeridos irão ajudar a guiar visualmente os usuários durante o processo.
          </p>
        </section>
      `,
      maquinas: `<section><h3 class="section__title">Criando Máquinas Virtuais</h3></section>`,
      banco: `<section><h3 class="section__title">Configuração Banco de Dados</h3></section>`,
      arquiteturas: `<section><h3 class="section__title">Criar Arquiteturas Azure</h3></section>`,
      recursos: `<section><h3 class="section__title">Recursos e Dimensionamentos</h3></section>`,
      armazenamento: `<section><h3 class="section__title">Armazenamento na Azure</h3></section>`,
      seguranca: `<section><h3 class="section__title">Segurança e Identidade na Azure</h3></section>`,
      custos: `<section><h3 class="section__title">Otimizando Custos no Azure</h3></section>`,
      politicas: `<section><h3 class="section__title">Políticas em Acessos Azure</h3></section>`,
      implantacao: `<section><h3 class="section__title">Implantação na Azure</h3></section>`,
      monitoramento: `<section><h3 class="section__title">Monitoramento com o Azure</h3></section>`
    };
  
    const navItems = document.querySelectorAll('.js-btn');
    const content = document.getElementById('content');
  
    function showSection(target) {
      content.innerHTML = sections[target];
      navItems.forEach(item => item.classList.remove('selected'));
      document.querySelector(`[data-target="${target}"]`).classList.add('selected');
    }
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        showSection(target);
      });
    });
  
    // Initialize with the first section
    showSection('localizar');
  });
  