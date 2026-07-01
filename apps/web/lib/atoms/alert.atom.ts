import { atom } from 'jotai';

type AlertState = {
  isOpen: boolean;
  isLoading?: boolean;
  title: string | null;
  type: string | null;
  message: string | null;
  onConfirm: (() => void) | null;
};

export const alertAtom = atom<AlertState>({
  isOpen: false,
  isLoading: false,
  title: null,
  type: null,
  message: null,
  onConfirm: null,
});

export const openAlertAtom = atom(
  null,
  (get, set, payload: Omit<AlertState, 'isOpen'>) => {
    set(alertAtom, {
      isOpen: true,
      ...payload,
    });
  }
);
export const loadingAlertAtom = atom(
  null,
  (get, set) => {
    const current = get(alertAtom);

    set(alertAtom, {
      ...current,
      isLoading: !current.isLoading,
    });
  }
);
export const closeAlertAtom = atom(null, (get, set) => {
  set(alertAtom, {
    isOpen: false,
    isLoading: false,
    title: null,
    type: null,
    message: null,
    onConfirm: null,
  });
});