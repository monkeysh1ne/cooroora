import { createAuth0Client } from '@auth0/auth0-spa-js'

const auth0Client = await createAuth0Client({
  domain: import.meta.env.PUBLIC_AUTH0_DOMAIN,
  clientId: import.meta.env.PUBLIC_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: import.meta.env.PUBLIC_AUTH0_AUDIENCE,
    scope: 'openid profile email',
  },
})

// Handle login
async function login() {
  await auth0Client.loginWithRedirect()
}

// Handle callback after login
async function handleCallback() {
  await auth0Client.handleRedirectCallback()
  window.history.replaceState({}, document.title, '/')
}
