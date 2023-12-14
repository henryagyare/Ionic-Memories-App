<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title: 'Loading...'" page-default-back-link="/memories">
        <h2 v-if="!loadedMemory">Could not find a memory for the given id</h2>
        <memoryOverview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memoryOverview>
    </base-layout>
    
</template>



<script>
import memoryOverview from '../components/memories/memoryOverview.vue';


export default {
    data(){
        return{
            memoryId: this.$route.params.id,
        }
    },
    computed: {
        loadedMemory(){
            return this.$store.getters.memory(this.memoryId);
        }
    },
    components: {
        memoryOverview,
    }
    // watch:{
    //     $route (currentRoute){
    //         this.memoryId.currentRoute.params.id; 
    //     }
    // }
}
</script>