const color = {
  blue: '#0074D9',
  red: '#FF4136',
  pink: '#B10DC9',
  orange: '#FF851BB0',
  green: '#3D9970',
  green2: '#7fb80e',
  gray: '#74787c',
  yellow: '#F9CE00',
}

const logger = {
  logRequest({ cgi, params, rid }) {
    console.log(`发送请求-${rid}-${cgi.method}-${cgi.desc}-${cgi.url}`)
    console.log(
      `%cRequest-${rid}%c %c${cgi.method} ${cgi.desc} \n url: ${cgi.url} \n params: %O`,
      'color: white; background-color: #0074D9B0; padding: 2px 5px; border-radius: 2px',
      '',
      `color: ${color.blue}`,
      params
    )
  },

  logResponse({ cgi, params, data, rid }) {
    console.log(`返回请求-${rid}-${cgi.method}-${cgi.desc}-${cgi.url}`)
    console.log(
      `%cResponse-${rid}%c %c${cgi.method} ${cgi.desc} \n url: ${cgi.url} \n params: %O \n data: %O`,
      'color: white; background-color: #3D9970B0; padding: 2px 5px; border-radius: 2px',
      '',
      `color: ${color.green}`,
      params,
      data
    )
  },

  logErrorResponse({ cgi, params, data, rid }) {
    console.log(`返回失败-${rid}-${cgi.method}-${cgi.desc}-${cgi.url}`)
    console.log(
      `%cResponse-${rid}%c %c${cgi.method || 'get'} ${cgi.desc} \n url: ${cgi.url} \n params: %O \n data: %O`,
      'color: white; background-color: #FF4136B0; padding: 2px 5px; border-radius: 2px',
      '',
      `color: ${color.red}`,
      params,
      data
    )
  },

  logHitCache({ cgi, params, data, rid }) {
    console.log(
      `%cCache-${rid}%c %c${cgi.method} ${cgi.desc} \n url: ${cgi.url} \n params: %O \n data: %O`,
      'color: white; background-color: #B10DC9B0; padding: 2px 5px; border-radius: 2px',
      '',
      `color: ${color.pink}`,
      params,
      data
    )
  },

  logMockResponse({ cgi, params, data, rid }) {
    console.log(
      `%cMock-${rid}%c %c${cgi.method} ${cgi.desc} \n url: ${cgi.url} \n params: %O \n response: %O`,
      'color: white; background-color: #FF851BB0; padding: 2px 5px; border-radius: 2px',
      '',
      `color: ${color.orange}`,
      params,
      data
    )
  },

  logActionChange(key, oldValue, newValue) {
    console.log(
      `%cAction-${key}%c \n prev store: %O %c\n next store: %O`,
      `color: white; background-color: ${color.yellow}; padding: 2px 5px; border-radius: 2px`,
      `color: ${color.gray}`,
      oldValue,
      `color: ${color.green2}`,
      newValue
    )
  },
}

export default logger
