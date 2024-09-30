<template>
  <q-page class="row items-center justify-evenly">
    <ProductsList :products="productStore.$state.products" />
  </q-page>
</template>

<script setup lang="ts">
import ProductsList from 'components/ProductsList.vue';
import { onMounted } from 'vue';
import { useProductStore } from '../stores/cart_store';

const productStore = useProductStore();

defineOptions({
  name: 'IndexPage'
});

onMounted(() => {
  productStore.getAllProducts()
})
</script>
