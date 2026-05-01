import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/6281264882678?text=Halo%20PT%20Dira%20Baraka%20Mulia%2C%20saya%20ingin%20konsultasi."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,.5)] animate-wa-pulse hover:scale-110 transition-transform"
      title="Chat WhatsApp"
      data-testid="floating-wa-btn"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
