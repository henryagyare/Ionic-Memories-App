<template>
    <base-layout page-title="Add a Memory" page-default-back-link="/memories">
        <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
</template>

<script>
import createMemoryForm from "../components/memories/createMemoryForm.vue"

export default {
        components:{
            createMemoryForm
        },
        methods: {
            saveMemory(memoryData){
                this.$store.dispatch("addMemory", memoryData);
                this.$router.replace('/memories');
            }
        }

    }
</script>
