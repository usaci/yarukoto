<script lang="ts">
    export default {
        data() {
            return{
                isDone: false
            }
        }, 
        methods: {
            switchTodo() {
                console.log('switchTodo');
            }
        }
    }
</script>
<template>
    <div class="container">
        <header class="siteHeader">
            <Logo />
        </header>
        <main class="siteMain">
            <section class="add">
                <div class="inner">
                    <h2>ヤルコトを追加する</h2>
                    <MainInput placeholder="ヤルコトを入力してください" className="main" inputType="text"/>
                    <MainInput placeholder="ヤルコトを入力してください" className="main" inputType="date"/>
                    <Button text="追加する" />
                </div>
            </section>
            <section class="lists">
                <div class="inner">
                    <h2>ヤルコト一覧</h2>
                    <ul>
                        <TodoList :class="{ isDone: isDone }" title="ここにタイトルが入ります" due="2024-01-01" category="web" @onClickToDo="switchTodo"/>
                    </ul>
                </div>
            </section>
        </main>
        <footer class="siteFooter">
            <p>&nbsp;2024 ヤルコト</p>
        </footer>
    </div>
</template>
<style>
    
    .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 3rem 2rem;
    }

    .container .siteMain {
        min-height: 100svh;
    }

    .container .siteMain h2 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    .container .siteMain .add {
        margin-bottom: 6rem;
    }

    .container .siteFooter small {
        display: block;
        text-align: center;
        margin-top: 2rem;
        color: #525252;
    }
</style>