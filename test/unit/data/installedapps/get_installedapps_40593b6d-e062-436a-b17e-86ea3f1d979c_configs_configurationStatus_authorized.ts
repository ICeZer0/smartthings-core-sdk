const request = {
	'url': 'https://api.smartthings.com/installedapps/40593b6d-e062-436a-b17e-86ea3f1d979c/configs',
	'method': 'get',
	'headers': {
		'Content-Type': 'application/json;charset=utf-8',
		'Accept': 'application/json',
		'Authorization': 'Bearer 52991afa-66e8-4af0-8d85-5c568ed5ba7d',
	},
	'params': {
		'configurationStatus': 'AUTHORIZED',
	},
}
const response = {
	'items': [
		{
			'installedAppId': '40593b6d-e062-436a-b17e-86ea3f1d979c',
			'configurationId': 'e9428d01-6710-45f0-85a4-e31e51d011fe',
			'configurationStatus': 'AUTHORIZED',
			'createdDate': '2020-03-03T21:47:42Z',
			'lastUpdatedDate': '2020-03-03T21:47:57Z',
		},
	],
	'_links': {
		'next': null,
		'previous': null,
	},
}
export default {request, response}
