export const requirements = {
  // Nombre completo
  name: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 3,
      message: 'Minimo debe tener 3 caracteres'
    },
    maxLength: {
      value: 25,
      message: 'Máximo debe tener 25 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Apellido/s
  surname: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 5,
      message: 'Minimo debe tener 5 caracteres'
    },
    maxLength: {
      value: 20,
      message: 'Máximo debe tener 20 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Nombre Completo
  fullName: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    },
    minLength: {
      value: 3,
      message: 'Minimo debe tener 3 caracteres'
    },
    maxLength: {
      value: 75,
      message: 'Máximo debe tener 75 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Correo Electronico
  email: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    },
    pattern: {
      value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
      message: 'El formato de correo no es valido'
    }
  },
  // Telefono
  telephone: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    },
    pattern: {
      value: /[0-9]{2}-[0-9]{4}-[0-9]{4}/,
      message: 'El formato de telefono no es valido'
    },
    validate: value => { return value.length === 12 || 'DNI debe tener 10 números' }
  },
  // Fechas
  date: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    },
    validate: value => {
      const currentDay = new Date().getDay()
      const appointmentDay = new Date(value).getDay()
      if (appointmentDay < currentDay) return 'Fecha no valida'
    }
  },
  // Mensaje o Descripciones (textarea)
  description: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    }
  },
  // Nombre de usuario
  username: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    },
    minLength: {
      value: 6,
      message: 'Debe tener más de 5 caracteres'
    },
    maxLength: {
      value: 20,
      message: 'Máximo de 20 caracteres'
    }
  },
  // Contraseñas
  password: {
    required: {
      value: true,
      message: 'Campo obligatorio'
    },
    minLength: {
      value: 7,
      message: 'Debe tener más de 6 caracteres'
    }
  },
  // Documento Nacional de Identidad (DNI)
  dni: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    validate: value => { return value.length === 8 || 'DNI debe tener 8 números' }
  },
  // Fecha de nacimiento
  birthDate: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    validate: value => {
      const currentYear = new Date().getFullYear()
      const userYearBirthDate = new Date(value).getFullYear()
      if (currentYear - userYearBirthDate > 100) return 'El paciente tiene mas de 100 años?'
      else if (userYearBirthDate >= currentYear) return 'Fecha no valida'
    }
  },
  // Direccion actual de residencia
  address: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 8,
      message: 'La dirección debe contenedor 8 caracteres mínimo'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Prestador del servicio medico del paciente
  medicalInsurancePremium: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 6,
      message: 'Debe contener 6 caracteres minimo'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Numero de afiliado
  numberMember: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 10,
      message: 'Debe contener mínimo 10 numeros'
    }
  }
}
