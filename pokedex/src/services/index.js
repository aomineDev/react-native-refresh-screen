const baseUrl = 'http://192.168.8.104:3000/api'

async function getAll ({ collection }) {
  return window.fetch(`${baseUrl}/${collection}`)
}

export default {
  getAll
}
