import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        hello: 'hello',
        loading1: false,
        show2: false,
        formData: {
            email: '',
            password: '',
            returnSecureToken: true
        },
        errors: {
            email: '',
            password: ''
        }
    }),

    // Добавьте точку с запятой после определения состояния
    actions: {
        async authIn(path, mail, password) {
            if (path == 'signup'){
                const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`
                this.formData = {
                    email: mail,
                    password: password,
                    returnSecureToken: true
                }
                const OPTIONS = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                }
                const response = await fetch(URL, OPTIONS)
                const data = await response.json()
                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(data))
                    alert('sign up done')
                } else {
                    switch (data.error.message) {
                        case 'INVALID_EMAIL':
                            this.errors.email = 'Неверный email'
                            break
                        case 'EMAIL_EXISTS':
                            this.errors.email = 'Такой email уже есть'
                            break
                        case 'WEAK_PASSWORD : Password should be at least 6 characters':
                            this.errors.password = 'Пароль должен превышать 6 символов'
                            break
                        default:
                            this.$notify({
                                title: data.error.message,
                                type: 'error'
                            });
                    }
                }
            }
            else if(path == 'signin'){
                this.loading1 = true
                console.log(this.loading1)
                this.FormData = {
                    email: mail,
                    password: password,
                    returnSecureToken: true
                }
                if (this.FormData.email.length && this.FormData.password.length) {
                    let options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.FormData)
                    }
                    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, options)
                    const res = await response.json()
                    console.log(res);
                    if (response.ok) {
                        localStorage.setItem('user', JSON.stringify(res))
                        alert('sign in done')
                    } else {
                        this.$notify({
                            title: res.error.message,
                            type: 'error'
                        });
                    }
                }
                this.loading1 = false
            }
            else{
                alert('are you okay')
            }
        },
    },
})