const axios = require('axios')

const conf = () => ({
	'client_id': 'holophraser--app1',
	'client_key': 'jPJ7GI3s11b5tNZ7vXI8FKjT0moRC0YCgBrn4OFHEYU',
	'client_secret': '7DdbF8lJbxh6f9TY9T3JXOLo0tWkIyqQOmk2oyDLuq4',
	'access_token': 'bFwq_ZqtCRsMP2Yun1cQfMB4ugkuz3Ph2dgTxz4Bp_I',
	'redirect_uri': 'urn:ietf:wg:oauth:2.0:oob'
})


const url = 'https://mastodon.technology/oauth/token'
const init = async () => {

	const api = await axios.post(url, {
		'client_id': conf().client_key,
		'grant_type': 'authorization_code',
		'client_secret': conf().client_secret,
    'scope': 'read read:bookmarks read:search',
		'redirect_uri': conf().redirect_uri
	}, {
		headers: {
			'code': conf().client_key,
		}
	})
	.then((res) => {
		const token_type = res.data.token_type
		const token = [
		  token_type,
      ' ',
      res.data.access_token
		].join('')

		const getSearch = axios.get('search', { 
			baseURL: 'https://mastodon.technology/api/v2',
			headers: {
				Authorization: token
			},
			withCredentials: true,
			params: { q: 'garfield' }}
		).then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
	})
	.catch((err) => {
		console.log(err)
	})

}

init()
