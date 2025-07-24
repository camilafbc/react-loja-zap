"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "./step-user";
import { StepAddress } from "./step-address";
import { StepFinish } from "./step-finish";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "user" | "address" | "finish";

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<Step>("user");

  let progressPct = 0;
  switch (step) {
    case "user":
      progressPct = 30;
      break;
    case "address":
      progressPct = 70;
      break;
    case "finish":
      progressPct = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Dados Pessoais"}
            {step === "address" && "Dados de Entrega"}
            {step === "finish" && "ENvio para o Whatsapp"}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressPct} />

        <div className="flex flex-col gap-3">
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAddress setStep={setStep} />}
          {step === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
