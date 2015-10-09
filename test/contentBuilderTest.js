describe('Content Builderr', function () {
    var contentBuilder,
      serviceObject;

    beforeEach(function(){
      serviceObject = {'nome':'Serviço teste','descricao':'O Programa Universidade para Todos - Prouni tem como finalidade a concessão de bolsas de estudo integrais e parciais em cursos de graduação e sequenciais de formação específica, em instituições de ensino superior privadas. Criado pelo Governo Federal em 2004 e institucionalizado pela Lei nº 11.096, em 13 de janeiro de 2005 oferece, em contrapartida, isenção de tributos àquelas instituições que aderem ao Programa.','sigla':'STST','gratuito':false,'nomesPopulares':['Serviço para teste','Testando a interface'],'segmentos':['Cidadãos'],'palavrasChave':['Teste','Prouni','Bolsa de estudos'],'solicitantes':[{'tipo':'Estudantes egressos do ensino médio da rede pública','requisitos':'Na condição de bolsistas integrais: * Com renda familiar per capita máxima de três salários mínimos. * Tenha participado do Exame Nacional do Ensino Médio - Enem, a partir da edição de 2010, e obtido, em uma mesma edição do referido exame, média das notas nas provas igual ou superior a 450 pontos e nota superior a zero na redação.'},{'tipo':'Estudantes egressos do ensino médio da rede particular','requisitos':'Na condição de bolsistas parciais: * Com renda familiar per capita máxima de seis salários mínimos. * Tenha participado do Exame Nacional do Ensino Médio - Enem, a partir da edição de 2010, e obtido, em uma mesma edição do referido exame, média das notas nas provas igual ou superior a 450 pontos e nota superior a zero na redação.'},{'tipo':'Pessoa com deficiência','requisitos':''},{'tipo':'Professor da rede pública de ensino','requisitos':'No efetivo exercício do magistério da educação básica e integrando o quadro de pessoal permanente da instituição pública e concorrer a bolsas exclusivamente nos cursos de licenciatura.'}],'areasDeInteresse':['Agropecuária','Politica econômica'],'canaisDePrestacao':{'items':[{'tipo':'postal','descricao':'Av. Ipiranga 6681 - Prédio 99A - sala 218 – 2º andar. Porto Alegre - RS - Brasil. CEP 90619-900'},{'tipo':'e-mail','descricao':'brasil@gov.br'},{'tipo':'web-agendar','descricao':'http://siteprouni.mec.gov.br/'}],'casos':[{'descricao':'Estudantes da rede pública de ensino','items':[{'tipo':'postal','descricao':'Av. Ipiranga 6681 - Prédio 99A - sala 218 – 2º andar. Porto Alegre - RS - Brasil. CEP 90619-900'}]}]},'tempoTotalEstimado':{'max':'40','unidade':'dias-uteis','descricao':''},'legislacoes':['[TítuloLei nº 6.766, de 19 de Dezembro de 1979](http://www.lexml.gov.br/urn/urn:lex:br:federal:lei:1979-12-19;6766)'],'etapas':[{'titulo':'Agendamento','descricao':'Inscrições abertas a partir de 11/08 até 31/08, o prazo final para inscrição de candidato ainda não matriculado na instituição de educação superior em que deseja se inscrever.','documentos':{'items':['CPF','RG','Comprovante de renda'],'casos':[{'descricao':'Professores','items':['Comprovante do exercício do magistério']}]},'custos':{'items':[{'descricao':'Taxa de inscrição','valor':'90,00'}],'casos':[{'descricao':'Estudantes da rede pública de ensino','items':[{'descricao':'Taxa de inscrição','valor':'0,00'}]}]},'canaisDePrestacao':{'items':[{'tipo':'postal','descricao':'Av. Ipiranga 6681 - Prédio 99A - sala 218 – 2º andar. Porto Alegre - RS - Brasil. CEP 90619-900'},{'tipo':'e-mail','descricao':'brasil@gov.br'},{'tipo':'web-agendar','descricao':'http://siteprouni.mec.gov.br/'}],'casos':[{'descricao':'Estudantes da rede pública de ensino','items':[{'tipo':'postal','descricao':'Av. Ipiranga 6681 - Prédio 99A - sala 218 – 2º andar. Porto Alegre - RS - Brasil. CEP 90619-900'}]}]}},{'titulo':'Inscrição no SisFIES','descricao':'Pode se inscrever às bolsas remanescentes do Prouni 2º/2015 o candidato que atenda a uma das condições a seguir.','documentos':{'items':[],'casos':[]},'custos':{'items':[],'casos':[]},'canaisDePrestacao':{'items':[],'casos':[]}}],'orgao':{'id':'http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/61283','contato':'Em caso de dúvidas sobre o Prouni, ligue para 156.'}};
      contentBuilder = new ContentBuilder(serviceObject);
    });

    describe('Build servico dados', function () {
        // it('should return capa do servico', function () {
        //     contentBuilder.buildCapaServico()
        //     expect(contentBuilder.documentContent).toEqual([{ text: 'Serviço teste', style: 'header', pageBreak: 'after'}]);
        // });
    });
});