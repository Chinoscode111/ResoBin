export const SSO = {
  HOST: 'http://localhost:8080/login',
  BASE_REDIRECT_URI: process.env.REACT_APP_SSO_REDIRECT_URI,
  LOGOUT: 'http://localhost:8080/logout',
}

export const getLoginURL = (state) => {
  const qs = new URLSearchParams()
  qs.append('redirect', SSO.BASE_REDIRECT_URI)
  if (state) qs.append('state', JSON.stringify(state))

  return `${SSO.HOST}?${qs.toString()}`
}

export const getLogoutURL = () => {
  const qs = new URLSearchParams()
  qs.append('redirect', `${window.location.protocol}//${window.location.host}`)

  return `${SSO.LOGOUT}?${qs.toString()}`
}
