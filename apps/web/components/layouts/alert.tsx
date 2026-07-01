'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useAtom } from "jotai";
import { alertAtom, closeAlertAtom } from "@/lib/atoms/alert.atom";
import Loading from "./loading";

export function GlobalAlert() {
  const [alert] = useAtom(alertAtom);
  const closeAlert = useAtom(closeAlertAtom)[1];

  const handleConfirm = async () => {
    if (alert.onConfirm) {
      await alert.onConfirm();
    }
    closeAlert();
  };

  return (
    <AlertDialog open={alert.isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alert.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {alert.message}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeAlert}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction variant={alert.type == "Delete"? "destructive":"default"} className={`bg-destructive hover:bg-destructive/90`} onClick={handleConfirm}>
            {alert.isLoading ? <Loading/> : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}