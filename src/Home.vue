<template>
    <div class="home">
        <input type="text" @input="onInput" v-model="value" />
        <button @click="onClick">send</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { toPolishNotation } from '@/polish-notation'

@Component({})
export default class Home extends Vue {
    value = '2 + 2 * 2'

    onInput(e: InputEvent) {
        this.value = (e.currentTarget as HTMLInputElement).value
    }

    onClick() {
        toPolishNotation(this.value)
        // console.log(this.value)
    }
}
</script>