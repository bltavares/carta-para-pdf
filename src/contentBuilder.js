var ContentBuilder = function(servicoObject) {
	var docContent = [],
		servico = servicoObject;

	function addNewLine() {
		docContent.push('\n');
	}

	function buildCapaServico() {
		return { text: servico.nome, style: 'header', pageBreak: 'after'};
	}

	// function addValuesIntoDocument() {
	// 	docContent.push({ text: nome, style: 'header'});
	// 	addNewLine();
	// 	docContent.push({ text: descricao, style: 'paragraph' });
	// 	addNewLine();
	// 	docContent.push({ text: 'Etapas para a realização deste serviço', style: 'subheader' });
	// 	addNewLine();
	// 	docContent.push({ text: 'Etapa 1', style: 'subheader' });
	// 	addNewLine();
	// 	docContent.push({ text: 'Canais de Prestação', style: 'subheader'});
	// 	addNewLine();
	// 	docContent.push({ ul: canaisDePrestacao, style: 'list' });
	// 	addNewLine();
	// 	docContent.push({ text: 'Segmentos da Sociedade', style: 'subheader'});
	// 	addNewLine();
	// 	docContent.push({ ul: [ segmentosDaSociedade ], style: 'list' });
	// 	addNewLine();
	// 	docContent.push({ text: 'Áreas de Interesse', style: 'subheader'});
	// 	addNewLine();
	// 	docContent.push({ ul: areasDeInteresse, style: 'list' });
	// 	addNewLine();
	// 	docContent.push({ text: 'Orgão responsável', style: 'subheader'});
	// 	addNewLine();
	// 	docContent.push({ ul: [ orgao ], style: 'paragraph', pageBreak: 'after' });
	// }

	function buildContent() {
		docContent.push(buildCapaServico());

		return docContent;
	}

	return {
		buildContent: buildContent,
		buildCapaServico: buildCapaServico
	}
};