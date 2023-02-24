<template>
    <div>
        <b-navbar type="dark" variant="dark">

            <b-navbar-nav class="px-5">

                <router-link 
                    to="/"
                >
                    <b-nav-text>Retax Blog 😎</b-nav-text>
                </router-link>

            </b-navbar-nav>

        </b-navbar>
    </div>
</template>
  
  <script>
  export default {
    name: 'HeaderBar'
  }
  </script>