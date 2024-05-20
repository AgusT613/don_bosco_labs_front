import { toast } from 'react-toastify'

export async function apiUserManage ({ apiUrl, dataModel, msgInCaseOfSuccess, method }) {
  try {
    const response = await fetch(apiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataModel)
    })
    const status = response.status
    const statusText = response.statusText
    if (status === 200) {
      toast.success(msgInCaseOfSuccess, { autoClose: 3000 })
    } else if (status === 404) {
      throw new Error(`Posible error al conectar con la API.\nResponse: ${status} - ${statusText}`)
    } else {
      throw new Error(`En el ingreso de datos. Puede que el email esté ya ingresado.\n\nResponse: ${status} - ${statusText}`)
    }
  } catch (error) {
    console.log(error)
    toast.error(`${error}`)
  }
}
