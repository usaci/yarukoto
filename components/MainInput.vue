<script lang="ts">
    export default {
        props: {
            placeholder: String,
            className: String,
            inputType: String,
        }
    }
</script>

<template>
    <input :type="inputType" :placeholder="placeholder" class="mainInput" :class="{ className }">
</template>
<style>
    .mainInput {
        border: solid 1px #acacac;
        padding: 10px 10px;
        width: 100%;
        border-radius: 5px;
        margin-bottom: 2rem;
    }
</style>