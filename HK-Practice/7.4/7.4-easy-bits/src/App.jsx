import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
  totalNotifications,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotification = useRecoilValue(networkAtom);
  const jobsNotification = useRecoilValue(jobAtom);
  const messageNotification = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotifications);

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkNotification >= 100 ? "99+" : networkNotification})
      </button>
      <button>Jobs ( {jobsNotification} )</button>
      <button>Messaging ( {messageNotification} )</button>
      <button>Notification ( {notificationCount} )</button>

      <button>Me( {totalNotificationCount} )</button>
    </>
  );
}
export default App;
