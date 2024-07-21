<template>
  
    
            <smalls-screen v-if="isSmallScreen"></smalls-screen>
    
        <div>
            <router-view v-if="!isSmallScreen"></router-view>
        </div>
  

</template>


<script>
import SmallsScreen from './components/SmallsScreen.vue';




export default {
  components: { SmallsScreen },
    data() {
        return {
            isSmallScreen: false,
        };
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 1176;
        },
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
};
</script>

<style scoped>
.fullscreen-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #fefefe;
    color: #333;
    text-align: center;
    font-size: 1.25rem;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>