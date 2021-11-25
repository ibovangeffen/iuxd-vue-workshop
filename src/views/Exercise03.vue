<template>
    <div id="exercise">
        <p>Werkervaring lijst</p>
        <div v-if="!experiences">
            <p>Wow, such empty.</p>
        </div>
        <div v-else>
            <!-- code here -->
            <!-- Display a list of companies with its director -->
            <!-- https://vuejs.org/v2/guide/list.html -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Exercise03',
    data() {
        return {
            experienc: [
                {
                    company: 'Company 1',
                    director: 'John Doe',
                },
                {
                    company: 'Company 2',
                    director: 'Jane Doe',
                },
            ],
            retrievedProjects: false,
        };
    },
};
</script>

<style>
#avatar-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
