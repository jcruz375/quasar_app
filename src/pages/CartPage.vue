<template>
  <ProductsList :products="productsInCard" />
</template>

<script setup lang='ts'>
import ProductsList from 'src/components/ProductsList.vue';
import { useProductStore } from '../stores/cart_store';
import { computed } from 'vue';

const productStore = useProductStore();

let productsInCard = computed(() => productStore.$state.productsInCart)
</script>
