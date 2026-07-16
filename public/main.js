// ── State ──
const messages = [];
let isLoading = false;

// ── DOM ──
const chatMessages = document.getElementById('chatMessages');
const userInput    = document.getElementById('userInput');
const sendBtn      = document.getElementById('sendBtn');

// ── Simple markdown renderer ──
function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,     '<em>$1</em>')
    .replace(/`(.*?)`/g,       '<code>$1</code>')
    .replace(/\n\n/g,          '</p><p>')
    .replace(/\n/g,            '<br>')
    .replace(/^(.+)$/,         '<p>$1</p>');
}

// ── Scroll to bottom ──
function scrollBottom() {
  chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

// ── Remove suggestions ──
function hideSuggestions() {
  const s = document.getElementById('suggestions');
  if (s) s.remove();
}

// ── Add message bubble ──
function addMessage(role, content, streaming = false) {
  const wrap = document.createElement('div');
  wrap.className = `msg msg-${role === 'user' ? 'user' : 'ai'}`;

  if (role === 'assistant') {
    wrap.innerHTML = `
      <div class="msg-avatar">
        <img src="avatar.png" alt="JL" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="msg-avatar-fallback">JL</div>
      </div>
      <div class="msg-bubble">${streaming ? '' : renderMarkdown(content)}</div>
    `;
  } else {
    wrap.innerHTML = `<div class="msg-bubble">${renderMarkdown(content)}</div>`;
  }

  chatMessages.appendChild(wrap);
  scrollBottom();
  return wrap.querySelector('.msg-bubble');
}

// ── Typing indicator ──
function showTyping() {
  const el = document.createElement('div');
  el.className = 'msg msg-ai typing-indicator';
  el.id = 'typingIndicator';
  el.innerHTML = `
    <div class="msg-avatar">
      <img src="avatar.png" alt="JL" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div class="msg-avatar-fallback">JL</div>
    </div>
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  chatMessages.appendChild(el);
  scrollBottom();
  return el;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

// ── Send suggestion ──
function sendSuggestion(btn) {
  const text = btn.textContent;
  hideSuggestions();
  sendText(text);
}

// ── Handle Enter key ──
function handleKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// ── Auto resize textarea ──
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

// ── Main send ──
function sendMessage() {
  const text = userInput.value.trim();
  if (!text || isLoading) return;
  userInput.value = '';
  userInput.style.height = 'auto';
  hideSuggestions();
  sendText(text);
}

async function sendText(text) {
  if (isLoading) return;
  isLoading = true;
  sendBtn.disabled = true;

  // Add user message
  messages.push({ role: 'user', content: text });
  addMessage('user', text);

  // Show typing
  const typing = showTyping();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });

    removeTyping();

    if (!response.ok) {
      const err = await response.text();
      addMessage('assistant', `⚠️ Error al conectar: ${err || 'Inténtalo de nuevo.'}`);
      return;
    }

    // Stream response
    const bubble = addMessage('assistant', '', true);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      fullText += chunk;
      bubble.innerHTML = renderMarkdown(fullText);
      scrollBottom();
    }

    messages.push({ role: 'assistant', content: fullText });

  } catch (err) {
    removeTyping();
    addMessage('assistant', `⚠️ Error de conexión: ${err.message}. Verifica tu conexión e inténtalo de nuevo.`);
  } finally {
    isLoading = false;
    sendBtn.disabled = false;
    userInput.focus();
  }
}

// ── Smooth scroll to chat on CTA click ──
document.getElementById('btn-start-chat')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('chat-section').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => userInput.focus(), 800);
});

// ── Initial focus ──
userInput.focus();
