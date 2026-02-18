import { useState } from "react";
import "./AIChat.css";

export default function FloatingAI() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", text: message };
    setChat(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:7000/api/ai/travel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const aiMsg = { role: "ai", text: data.reply };
      setChat(prev => [...prev, aiMsg]);

    } catch (err) {
      setChat(prev => [
        ...prev,
        { role: "ai", text: "AI service unavailable." },
      ]);
    }

    setMessage("");
    setLoading(false);
  };

  return (
    <>
      <div className="floating-ai-button" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {open && (
        <div className="floating-ai-box">
          <div className="ai-header">
            Travel & Explore AI
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="ai-chat">
            {chat.map((c, i) => (
              <div
                key={i}
                className={`ai-message ${
                  c.role === "user" ? "user-msg" : "ai-msg"
                }`}
              >
                {c.text}
              </div>
            ))}
            {loading && <div className="ai-msg">Thinking...</div>}
          </div>

          <div className="ai-input">
            <input
              type="text"
              placeholder="Ask about trips..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
