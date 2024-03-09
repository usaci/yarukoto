<script lang="ts">
    export default {
        props: {
            title: String,
            due: String,
            done: Boolean,
            category: String,
            overDue: Boolean,
        }, 
        methods: {
            switchTodo() {
                const result = !this.done;
                this.$emit('onClickToDo', result);
            }
        }
    }
</script>
<template>
    <li class="list" @click="switchTodo">
        <div class="inner">
            <div class="list__info">
                <div>
                    <div class="list__done"></div>
                    <h3 class="list__title">{{ title }}</h3>
                </div>
                <div>
                    <time datetime="" class="list__due">{{ due }}</time>
                    <p class="list__category">{{ category }}</p>
                </div>
            </div>
            <div class="list__btn">
                <button class="editBtn"></button>
                <button class="deleteBtn"></button>
            </div>
        </div>
    </li>
</template>
<style>
    .list {
        margin-bottom: 3rem;
        padding-bottom: 1rem;
    }
    .list > .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list__title {
        margin: 0;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .list__title:before {
        content: "";
        display: inline-block;
        width: 1em;
        height: 1em;
        transform: translateY(2px);
        border-radius: 50%;
        margin-right: .5rem;
        background-color: #11B178;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .list__category {
        color: #525252;
    }
    
    .list__due {
        color: #525252;
    }

    .list__due:before {
        content: "";
        display: inline-block;
        transform: translateY(2px);
        width: 13px;
        height: 13px;
        background: url(deadline.png);
        background-size: contain;
        background-repeat: no-repeat;
    }

    .list__info {
        font-size: 1.2rem;
    }

    .list__info > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .list__btn .editBtn {
        background: url('edit.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
    }

    .list__btn .deleteBtn {
        background: url('trash.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
    }
</style>