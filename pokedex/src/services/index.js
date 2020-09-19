const baseUrl = 'http://192.168.137.1:3000/api'

async function getAll ({ collection }) {
  return window.fetch(`${baseUrl}/${collection}`)
}

export default {
  getAll
}
