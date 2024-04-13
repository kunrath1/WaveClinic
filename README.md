Projeto Clínica de Estética
Este projeto foi desenvolvido utilizando Angular para criar uma página web para uma clínica de estética. O objetivo deste README é fornecer diretrizes e melhores práticas para a organização do código-fonte seguindo o padrão orientado a objetos.


Organização de Arquivos
A estrutura de arquivos do projeto segue as melhores práticas recomendadas pela comunidade Angular:

components/: Diretório para os componentes da aplicação.

Cada componente é organizado em uma pasta separada contendo os arquivos .html, .scss e .ts.

Nomeie as pastas de acordo com o nome do componente (exemplo: home/, services/, about/).

services/: Diretório para os serviços Angular.

models/: Diretório para os modelos de dados TypeScript.

app-routing.module.ts: Módulo de roteamento da aplicação.

app.module.ts: Módulo principal da aplicação.

app.component.html, app.component.scss, app.component.ts: Componente principal da aplicação.

assets/: Diretório para recursos estáticos, como imagens.

environments/: Diretório para configurações de ambiente.

Criando Componentes
Ao criar novos componentes, siga estas diretrizes:
Cada componente deve ser criado em uma pasta separada dentro de components/.
Use o Angular CLI para gerar componentes (ng generate component <nome-componente>).
Nomeie os arquivos do componente de acordo com o nome do componente (exemplo: home.component.html, home.component.scss, home.component.ts).
Mantenha o HTML, o CSS e o TypeScript relacionados ao componente dentro da mesma pasta para facilitar a manutenção.

Organização de Funções
Para organizar funções dentro dos arquivos TypeScript, siga estas práticas:
Utilize a orientação a objetos para organizar o código de forma mais coesa e reutilizável.
Agrupe as funções relacionadas em métodos de classes.
Utilize nomes descritivos e significativos para os métodos, seguindo as convenções de nomenclatura em camelCase.

Exemplo de organização de funções dentro de um componente:

export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    // Lógica para inicializar dados
  }

  public onSubmitForm(): void {
    // Lógica para lidar com o envio do formulário
  }

}

Note que tanto os nomes de Pastas/Arquivos/Funções são em INGLES e o projeto deve seguir nessa mesma pratica.
Os comentarios são necessarios e podem ser feitos em portugues.


Este README fornece diretrizes para ajudar na organização do projeto e na manutenção do código-fonte. Siga essas práticas para manter o código limpo, coeso e fácil de entender. Se tiver alguma dúvida, consulte a documentação oficial do Angular e a comunidade para obter mais informações.
