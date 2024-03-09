<script lang="ts">
    export default {
        props: {
            text: String
        }
    }
</script>
<template>
    <button class="button">{{ text }}</button>
</template>
<style>
    .button {
        padding: 10px 20px;
        background-color: #11B178;
        border: none;
        border-radius: 5px;
        font-size: 1.5rem;
        cursor: pointer;
        color: #f2f2f2;
    }
</style>