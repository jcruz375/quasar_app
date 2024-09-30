<template>
  <div v-for="product in products" :key="product.id">
    <ProductCard :product="product" />
  </div>
</template>

<script setup lang='ts'>
import { productProps } from './models';
import { defineProps } from 'vue';
import ProductCard from './ProductCard.vue';

interface ProductListProps {
  products: productProps[]
}

defineProps<ProductListProps>()
</script>
