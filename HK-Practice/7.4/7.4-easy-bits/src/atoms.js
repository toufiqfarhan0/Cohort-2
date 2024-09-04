import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const totalNotifications = selector({
  key: "totalNotifications",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const messageAtomCount = get(messageAtom);
    const notificationAtomCount = get(notificationAtom);

    return (
      networkAtomCount + jobAtomCount + messageAtomCount + notificationAtomCount
    );
  },
});
