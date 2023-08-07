export const initialState = {
    status: 'checking',
    uid: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
    email: null
}

export const authenticatedState = {
    status: 'authenticated',
    uid: '123ABC',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
    email: 'test@gmail.com'
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
    email: null
}

export const demoUser = {
    uid: '123ABC',
    email: 'test@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg'
}