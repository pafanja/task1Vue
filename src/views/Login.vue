<template>
    <div>
        <h2>Login</h2>
        <p v-if="$route.query.redirect">
            <h3>You need to login first.</h3>

        <form @submit.prevent="login">
            <label><input v-model="username" type="name"></label>
            <label><input v-model="pass" type="password"></label><br>
            <button  type="submit">login</button>
            <p v-if="error" class="error">Username or password aren't correctly</p>
        </form>
    </div>
</template>

<script>
    import auth from '../auth'

    export default {
        name: "login",
        data(){
            return {
                username : 'Admin',
                pass : '12345',
                error: false
            }
        },
        methods:{
            login(){
                auth.login(this.username,this.pass,loggenIn => {
                    if(!loggenIn){
                        this.error = true
                    } else {
                        this.$router.push({ name: 'profile', query: { redirect: '/profile' } });
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>