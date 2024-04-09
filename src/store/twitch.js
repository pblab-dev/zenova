import { atom } from 'nanostores'

const staticStore = {
	products: [
		{
			id: 1,
			title: 'Visualizadores AO VIVO TWITCH',
			description: 'Entrega em até 12 horas',
			line1: '20 Visualizdores Por 2 Horas',
			line2: 'Plano Teste',
			line3: 'Não precisa Informar Senha',
			price: 14.9
		},
		{
			id: 2,
			title: 'Visualizadores AO VIVO TWITCH',
			description: 'Entrega em até 24 horas',
			line1: '20 Visualizadores por 1 Mês',
			line2: 'Horas de Live Ilimitadas',
			line3: 'Não precisa informar senha',
			price: 109.9
		},
		{
			id: 3,
			title: 'Visualizadores AO VIVO TWITCH',
			description: 'Entrega em até 24 horas',
			line1: '50 Visualizadores por 1 Mês',
			line2: 'Horas de Live Ilimitadas',
			line3: 'Não precisa informar senha',
			price: 169.9
		},
		{
			id: 4,
			title: 'Visualizadores AO VIVO TWITCH',
			description: 'Entrega em até 24 horas',
			line1: '100 Visualizadores por 1 Mês',
			line2: 'Horas de Live Ilimitadas',
			line3: 'Não precisa informar senha',
			price: 279.9
		},

		{
			id: 6,
			title: 'Monte Seu PLANO PERSONALIZADO',
			description: 'Disponível de 10 a 2000 Visualizadores AO VIVO',
			line1: 'Monte Seu Plano de Acordo com a Sua Necessidade',
			line2: '100% Seguro',
			line3: 'Não precisa informar senha',
			price: 0
		}
	]
}

export const CheckoutStore = atom(staticStore)
