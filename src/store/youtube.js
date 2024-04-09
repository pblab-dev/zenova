import { atom } from 'nanostores'

const staticStore = {
	products: [
		{
			id: 1,
			title: '300 Inscritos',
			description: 'Entrega em Até 72 Horas',
			line1: 'Garantia por 30 Dias',
			line2: ' 100% Seguro',
			line3: 'Não precisa informar senha',
			price: 30.9
		},
		{
			id: 2,
			title: '500 Inscritos',
			description: 'Entrega em Até 72 Horas',
			line1: 'Garantia por 30 Dias',
			line2: ' 100% Seguro',
			line3: 'Não precisa informar senha',
			price: 39.9
		},
		{
			id: 3,
			title: '1000 Inscritos Youtube',
			description: 'Entrega em Até 72 Horas',
			line1: 'Garantia por 30 Dias',
			line2: ' 100% Seguro',
			line3: 'Não precisa informar senha',
			price: 64.9
		},
		{
			id: 4,
			title: '1000 Visualizações Youtube',
			description: 'Entrega em Até 72 Horas',
			line1: 'Garantia por 30 Dias',
			line2: ' 100% Seguro',
			line3: 'Não precisa informar senha',
			price: 27.9
		},
		{
			id: 5,
			title: '3000 Visualizações Youtube',
			description: 'Entrega em Até 72 Horas',
			line1: 'Garantia por 30 Dias',
			line2: ' 100% Seguro',
			line3: 'Não precisa informar senha',
			price: 72.9
		},
		{
			id: 6,
			title: '5000 Visualizações Youtube',
			description: 'Entrega em Até 72 Horas',
			line1: 'Garantia por 30 Dias',
			line2: ' 100% Seguro',
			line3: 'Não precisa informar senha',
			price: 97.9
		},
		{
			id: 7,
			title: 'Monte Seu Plano Personalizado',
			description: 'Para Escolher Outro Produto ou Quantidade Clique em Saiba Mais',
			line1: 'Planos Semanais E Mensais Disponíveis',
			line2: 'Quantidades entre 300 e 10.000 Disponíveis',
			line3: 'CLIQUE EM SAIBA MAIS E CONHEÇA AS OPÇÕES!',
			price: 1.1
		}
	]
}

export const CheckoutStore = atom(staticStore)
