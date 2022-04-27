/**
 * @name auth
 * @description
 * calling mastodon api for various tlds
 * @example https://mastodon.example/api/v1/instance
 * @example https://mastodon.example/api/v2/search
 * @example https://mastodon.example/oauth/token # mastodon-api handles this
 */
const Mastodon = require('mastodon-api')
const R = require('ramda')
const curry = R.curry

require('dotenv').config()
const env = process.env

const conf = (version) => ({
  'api_url': "https://mastodon.technology/api/v" + version + "/",
	'access_token': env.access_token,
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
