import axios from 'axios'

function sendNow({ type, name, whatsapp, network, target }) {
	let toTarget = {}

	if (target == 'digitalspark')
		toTarget = [
			{
				email: 'digitalsparkclub@gmail.com',
				name: 'DigitalSpark'
			}
		]

	if (target == 'rushmedia')
		toTarget = [
			{
				email: 'rushmedia.club@gmail.com',
				name: 'RushMedia'
			}
		]

	let payload = {
		api_user: 'danielverissimo@geniussocialup.com.br',
		api_key: '146q8arck6k3h61jeah8du10qk9010sdbh1h33860n469kg75',
		to: toTarget,
		from: {
			name: 'RushMedia - Suporte',
			email: 'rushmedia@digitalspark.club',
			reply_to: 'rushmedia@digitalspark.club'
		},
		subject: 'Novo Lead de ' + name,
		html: `Novo Lead Convertido:<br/>
		Produto:${type}<br/>
		Nome do Cliente:${name}<br/>
		Whatsapp:${whatsapp}<br/>
		Rede Social:${network}`,
		text: `Novo Lead Convertido:<br/>
		Produto:${type}<br/>
		Nome do Cliente:${name}<br/>
		Whatsapp:${whatsapp}<br/>
		Rede Social:${network}`,
		campanhaid: 'seu identificaor interno, opcional',
		addheaders: {
			'x-priority': '1'
		}
	}

	const config: any = {
		method: 'post',
		url: `https://api.iagentesmtp.com.br/api/v3/send/`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: payload
	}

	return axios(config)
		.then((r) => {
			return r
		})
		.catch((e) => {
			console.log('aqui')
			return e
		})
}

export { sendNow }
