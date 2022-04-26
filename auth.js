const Mastodon = require('mastodon-api')

const conf = (version) => ({
  'api_url': "https://mastodon.technology/api/v" + version + "/",
	'access_token': 'bFwq_ZqtCRsMP2Yun1cQfMB4ugkuz3Ph2dgTxz4Bp_I',
  TIMEOUT: 60 * 1000
})


const mode = (v) => {
  const _conf = conf(v)
  return new Mastodon({
    access_token: _conf.access_token,
    timeout_ms: _conf.TIMEOUT,  
    api_url: _conf.api_url
  })
}

const init = (path, options, v) => {
  mode(v)
    .get(path, options)
    .then(res => {
      const output = {
        res: res.data
      }
      const str = JSON.stringify(output)
      console.log(str)
    })
}


const config = { q: 'garfield' }
const noop = {}
//init('search', config, '2')
init('timelines/home', noop, '1')
