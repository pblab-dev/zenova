import { useState, useEffect } from 'react'
import QRCode from 'qrcode'

function ModalAlert(props) {
	const { id, title, description, line1, line2, line3, price } = props.data
	const { labelNetwork } = props
	const [step, setStep] = useState('_a')
	const [base64, setbase64] = useState('')
	const [copyPaste, setCopyPaste] = useState('')
	const [loading, setLoading] = useState(true)

	function showToast() {
		// Get the snackbar DIV
		var x = document.getElementById('snackbar')

		// Add the "show" class to DIV
		x.className = 'show'

		// After 3 seconds, remove the show class from DIV
		setTimeout(function () {
			x.className = x.className.replace('show', '')
		}, 3000)
	}

	async function generatePIX(whatsapp, network, price) {
		var myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		var raw = JSON.stringify({
			metadata: [
				{
					name: 'cliente/produto',
					value: `${whatsapp}/${network}`
				}
			],
			value: price * 100
		})

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}

		fetch('https://newsletter.rushmedia.club/getPix.json', requestOptions)
			.then((response) => response.text())
			.then((result) => {
				setCopyPaste(JSON.parse(result).payload)
				QRCode.toDataURL(JSON.parse(result).payload)
					.then((url) => {
						setbase64(url)
						setLoading(false)
					})
					.catch((err) => {
						console.error(err)
						setLoading(false)
					})
			})
			.catch((error) => setCopyPaste(''))
	}

	async function sendLead({ name, whatsapp, network }) {
		var myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		var raw = JSON.stringify({
			type: title + '/ R$' + price.toFixed(2),
			name: name,
			whatsapp: whatsapp,
			network: network
		})

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			mode: 'no-cors',
			body: raw,
			redirect: 'follow'
		}

		/* fetch(`https://newsletter.rushmedia.club/sendMail.json`, requestOptions) */
		fetch(`https://newsletter.digitalspark.club/sendMail.json`, requestOptions)
	}

	useEffect(() => {
		/* const qrCodePix = QrCodePix({
			version: '01',
			key: 'contato@geniussocialup.com.br', //or any PIX key
			name: 'DANIEL VERISSIMO SERPA',
			city: 'SAO PAULO',
			transactionId: id.toString(), //max 25 characters
			message: title,
			cep: '05409000',
			value: price
		})

		setCopyPaste(qrCodePix.payload()) // '00020101021126510014BR.GOV.BCB.PIX...'
		qrCodePix.base64().then((res) => {
			setbase64(res)
		}) */
	}, [])
	return (
		<div class="fixed left-0 top-0 z-20 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
			{step == '_a' && (
				<div class="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]">
					<h3 class="mb-4 text-2xl font-semibold text-gray-600">Você escolheu o {title}</h3>
					<span class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
					<h3 class="mb-4 text-2xl font-semibold text-gray-500">{title}</h3>
					<p class="font-light text-gray-400 text-gray-500 sm:text-lg">{description}</p>
					<div class="my-8 flex items-baseline justify-center">
						<span class="mr-2 text-5xl font-extrabold text-gray-500">R$ {price}</span>
						{/* <span class="text-gray-500 text-gray-500 text-gray-400">/month</span> */}
					</div>
					<ul role="list" class="mb-8 space-y-4 text-left text-gray-500">
						<li class="flex items-center space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span>{line1}</span>
						</li>
						<li class="flex items-center space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span>{line2}</span>
						</li>
						<li class="flex items-center space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-400 text-green-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span>{line3}</span>
						</li>
					</ul>
					<div class="-mx-3 flex flex-wrap">
						<div class="w-1/2 px-3">
							<button
								onClick={() => {
									props.setEnabled(false)
								}}
								class="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-gray-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
							>
								Cancelar
							</button>
						</div>
						<div class="w-1/2 px-3">
							<button
								onClick={() => setStep('_b')}
								class="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-gray-500 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
							>
								Confirmar
							</button>
						</div>
					</div>
				</div>
			)}
			{step == '_b' && (
				<div class="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]">
					<h3 class="mb-10 pb-2 text-xl font-bold text-gray-600 sm:text-2xl">Confirme os dados</h3>
					<form
						action=""
						onSubmit={async (e) => {
							e.preventDefault()

							let name = e.target[0].value
							let whatsapp = e.target[1].value
							let network = e.target[2].value

							sendLead({ name: name, whatsapp: whatsapp, network: network })
							setStep('_c')
							generatePIX(whatsapp, network, price)
						}}
					>
						<div class="relative mb-6">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
										stroke="#607D8B"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</div>
							<input
								type="text"
								required
								placeholder="Seu Nome"
								class="focus:border-primary w-full rounded border border-[f0f0f0] px-[14px] py-3 pl-10 text-gray-600 outline-none focus-visible:shadow-none"
							/>
						</div>
						<div class="relative mb-6">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span class="text-gray-500 sm:text-sm" style={{ fontSize: 10 }}>
									<svg
										fill="#607D8B"
										height="20px"
										width="20px"
										version="1.1"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 308 308"
										xml:space="preserve"
									>
										<g id="XMLID_468_">
											<path
												id="XMLID_469_"
												d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
							   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
							   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
							   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
							   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
							   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
							   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
							   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
							   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
							   C233.168,179.508,230.845,178.393,227.904,176.981z"
											></path>
											<path
												id="XMLID_470_"
												d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
							   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
							   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
								M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
							   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
							   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
							   C276.546,215.678,222.799,268.994,156.734,268.994z"
											></path>
										</g>
									</svg>
								</span>
							</div>
							<input
								required
								type="phone"
								placeholder="Seu WhatsApp para contato"
								class="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] px-[14px] py-3 pl-10 text-base text-gray-600 outline-none"
							/>
						</div>
						<div class="mb-6">
							<div class="relative">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<span class="text-gray-500 sm:text-sm">
										<svg
											width="25px"
											height="25px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M17.4009 19.2C15.8965 20.3302 14.0265 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13.5C21 14.8807 19.8807 16 18.5 16C17.1193 16 16 14.8807 16 13.5V8M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
												stroke="#607D8B"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
								</div>
								<input
									required
									type="text"
									id="price"
									class="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] px-[14px] py-3 py-3 pl-10 text-base text-gray-600 outline-none focus-visible:shadow-none"
									placeholder={`Seu ${labelNetwork}`}
								/>
							</div>
						</div>
						<div class="-mx-3 flex flex-wrap">
							<div class="w-1/2 px-3">
								<button
									onClick={() => {
										props.setEnabled(false)
										setStep('_a')
									}}
									class="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-gray-600 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
								>
									Cancelar
								</button>
							</div>
							<div class="w-1/2 px-3">
								<button
									type="submit"
									class="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
								>
									Confirmar
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
			{step == '_c' && (
				<div class="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]">
					<h3 class="mb-5 pb-2 text-xl font-bold text-gray-600 sm:text-2xl">Pagamento PIX</h3>
					<div className="flex justify-center">
						{loading ? (
							<div>
								<div role="status" style={{ display: 'flex', justifyContent: 'center' }}>
									<svg
										aria-hidden="true"
										class="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
								<span className="text-gray-500">Aguarde, gerando pagamento.</span>
							</div>
						) : (
							<img src={base64} style={{ minWidth: 300 }}></img>
						)}
					</div>
					{!loading && (
						<div>
							<p class="mb-10 font-light text-gray-400 text-gray-500 sm:text-lg">
								Utilize o QRCode ou <strong>Clique Abaixo</strong> para Copiar
							</p>
							<p
								onClick={() => {
									navigator.clipboard
										.writeText(copyPaste)
										.then(() => {
											showToast()
										})
										.catch(() => {
											alert('something went wrong')
										})
								}}
								class="font-light text-gray-400 text-gray-500 sm:text-lg"
								style={{
									border: '1px solid #80808066',
									borderRadius: 5,
									background: '#80808014',
									marginBottom: 10,
									cursor: 'pointer'
								}}
							>
								Chave Copia e Cola: {copyPaste.substring(0, 30)}...
							</p>
							<div id="snackbar">Chave Copiada!</div>
						</div>
					)}

					{!loading && (
						<>
							<p class="mb-5 font-light text-gray-400 text-gray-500 sm:text-lg">
								Após sua compra nos envie o comprovante em nosso WhatsApp:
							</p>
							<div class="-mx-3 flex flex-wrap justify-center">
								<div class="w-1/2 px-3">
									<a
										target="_blank"
										href="https://api.whatsapp.com/send?phone=554891840425&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
										onClick={() => {
											props.setEnabled(false)
											setStep('_a')
										}}
										class="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
									>
										Confirmar Pagamento
									</a>
								</div>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	)
}

export default ModalAlert
