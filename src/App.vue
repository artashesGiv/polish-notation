<template>
    <Home />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from '@/Home.vue'

@Component({
    components: { Home },
})
export default class App extends Vue {}
</script>