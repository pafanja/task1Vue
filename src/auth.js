/* globals LocalStorage */

export default {

    login (username,pass,cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        this.pretendRequest(username,pass, (res) =>{
            if(res.authenticated){
                localStorage.token = res.token
                if(cb) cb(true)
                this.onChange(true)
            } else {
                if(cb) cb(false)
                this.onChange(false)
            }
        })
    },
    getToken () {
        return localStorage.token
    },
    pretendRequest(username,pass,cb){
        setTimeout(() => {
            if (username === 'Admin' && pass === '12345') {
                cb({
                    authenticated: true,
                    token: Math.random().toString(36).substring(7)
                })
            }
            else{
                cb({authenticated:false})
            }
        },0)
    },
    logout(cb){
        delete localStorage.token
        if(cb) cb()
        this.onChange(false)
    },
    loggenIn(){
        return !!localStorage.token
    },
    onChange(){
    }


}