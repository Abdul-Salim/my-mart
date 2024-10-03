import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { atom, useRecoilState } from "recoil";

interface ConfirmationState {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: null | (() => void);
  onCancel: null | (() => void);
  children?: null | ReactNode;
}

const confirmationState = atom<ConfirmationState>({
  key: "confirmationState",
  default: {
    isOpen: false,
    title: "",
    description: "",
    onConfirm: null,
    onCancel: null,
    children: null,
  },
});

export const useConfirmation = () => {
  const [state, setState] = useRecoilState(confirmationState);
  const open = (
    title: string,
    description: string,
    onConfirm: () => void,
    onCancel: () => void,
    children: ReactNode | null
  ) => {
    setState({
      isOpen: true,
      title,
      description,
      onConfirm,
      onCancel,
      children,
    });
  };
  const close = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
  };
  return { ...state, open, close };
};

const ConfirmationPrompt: React.FC = ({}) => {
  const [state, setState] =
    useRecoilState<ConfirmationState>(confirmationState);
  if (!state.isOpen) return null;
  const handleConfirm = () => {
    if (state.onConfirm) {
      state.onConfirm();
    }
    setState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleCancel = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Dialog open={state.isOpen} onOpenChange={handleCancel}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>{state?.title ?? ""}</DialogTitle>
        </DialogHeader>
        {state?.description ? (
          <div className="py-5">
            <p className="text-sm">{state.description}</p>
          </div>
        ) : (
          ""
        )}
        {state?.children ? (
          <div className="mt-4 flex justify-center">{state?.children}</div>
        ) : (
          ""
        )}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={handleCancel} type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleConfirm} type="button" variant="default">
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationPrompt;
