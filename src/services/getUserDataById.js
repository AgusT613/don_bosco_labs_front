import { API_STAFF } from "./dotenv.config"

export async function getUserDataById (userId) {
  try {
    const response = await fetch(API_STAFF + `/${userId}`)
    if (response.status === 200) {
      const userData = await response.json()
      return userData
    } else {
      window.alert('Error al obtener los datos de la persona. Código de error: ' + response.status)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}
