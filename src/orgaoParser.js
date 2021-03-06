cartaParaPdf.OrgaoParser = function() {
	var api = {};

	function parseArray(xmlDoc, selector) {
		var values = [];

		$(xmlDoc).find(selector).each(function(index, item) {
			values.push($(item).html().replace('<![CDATA[', '').replace(']]>', ''));
		});

		return values;
	}

	api.parseNome = function (xmlDoc) {
		return $(xmlDoc).find('nome').html().replace('<![CDATA[', '').replace(']]>', '');
	};

	api.parseDescricao = function (xmlDoc) {
		return $(xmlDoc).find('conteudo').html().replace('<![CDATA[', '').replace(']]>', '');
	};

	api.parseContato = function (xmlDoc) {
		return $(xmlDoc).find('contato').html().replace('<![CDATA[', '').replace(']]>', '');
	};

	api.parseXml = function (data) {
		var xmlDoc = $.parseXML(data),
			orgao = {
		  		nome: api.parseNome(xmlDoc),
		  		descricao: api.parseDescricao(xmlDoc),
		  		contato: api.parseContato(xmlDoc)
			};

		return orgao;
	};

	return api;
};
