/* eslint-disable @next/next/no-img-element */
"use client";

import { Product } from "@/types/Product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { useCartSore } from "@/stores/cart-store";

interface Props {
  item: Product;
}

export const ProductItem = ({ item }: Props) => {
  const { toast } = useToast();
  const { upsertCartItem } = useCartSore((state) => state);

  const handleAddButton = () => {
    upsertCartItem(item, 1);
    toast({
      variant: "success",
      title: "Adicionado ao carrinho!",
      description: item.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
        <Button variant="outline" onClick={handleAddButton}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};
