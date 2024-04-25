import { NoteProvider } from "@/context/NoteContext";
import "./layout.css";
import { NotificationProvider } from "@/context/NotificatioinContext";
import Notification from "@/components/Notification/Notification";

export const metadata = {
  title: "Note Manager",
  description: "Note manager app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NoteProvider>
          <NotificationProvider>
            <Notification />
            {children}
          </NotificationProvider>
        </NoteProvider>
      </body>
    </html>
  );
}
