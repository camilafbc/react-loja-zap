import { UseCheckoutStore } from "@/stores/checkout-store";
import Link from "next/link";
import { Button } from "../ui/button";
import { generateMessage } from "@/lib/generate-message";
import { CheckCheck } from "lucide-react";

export const StepFinish = () => {
  const { name } = UseCheckoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito, <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido para nosso WhatsApp para concluir. Nosso
        atendente irá te guiar sobre o andamento do pedido!
      </p>
      <Button asChild>
        <Link target="_blank" href={linkZap}>
          <CheckCheck className="size-5 mr-1" />
          Enviar para o WhatsApp
        </Link>
      </Button>
    </div>
  );
};
