import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { productProps } from 'src/components/models';

interface ProductState {
  products: productProps[];
  productsInCart: productProps[];
}

export const useProductStore = defineStore('cart', {
  state: (): ProductState => ({
    products: [],
    productsInCart: [],
  }),
  getters: {},
  actions: {
    async getAllProducts() {
      const response = await api.get<productProps[]>('/products?limit=4');
      this.products = response.data;
    },

    addToCart(product: productProps) {
      this.productsInCart.push(product);
    },

    removeFromCart(productId: number) {
      this.productsInCart = this.productsInCart.filter(
        (product) => product.id !== productId
      );
    },
  },
});
