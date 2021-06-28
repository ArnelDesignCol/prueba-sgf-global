<template>
    <div class="footer">
        <TopFooter />
        <DownFooter/>
    </div>
</template>
<script>
import TopFooter from './components/TopFooter.vue';
import DownFooter from './components/DownFooter.vue';
export default {
    name: 'Footer',
    components: { TopFooter, DownFooter }
}
</script>