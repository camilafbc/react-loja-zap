import { useCartSore } from "@/stores/cart-store";
import { UseCheckoutStore } from "@/stores/checkout-store";

export const generateMessage = () => {
  const { name, address } = UseCheckoutStore((state) => state);
  const { cart } = useCartSore((state) => state);

  const orderProducts = [];
  for (const item of cart) {
    orderProducts.push(`${item.quantity}x ${item.product.name}`);
  }

  return `**Dados do Cliente:**
  Nome: ${name}
  Endereço: ${address.street}, ${address.number} (${address.complement}) ${
    address.district
  }, ${address.city}/${address.state}
  ------
  **Pedido:**
  ${orderProducts.join("\n")}`;
};
