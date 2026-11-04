import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check, AlertCircle, ShieldCheck, Terminal, Send, MessageSquare, Settings2, ExternalLink } from 'lucide-react';

// Dispatches formatted audit inquiry to Telegram Bot API
export const sendTelegramAlert = async (payload, customToken = null, customChatId = null) => {
  const botToken = customToken || import.meta.env.VITE_TELEGRAM_BOT_TOKEN || localStorage.getItem('modlonize_tg_bot_token');
  const chatId = customChatId || import.meta.env.VITE_TELEGRAM_CHAT_ID || localStorage.getItem('modlonize_tg_chat_id');

  if (!botToken || !chatId) {
    return {
      configured: false,
      delivered: false,
      reason: 'VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID are not set.'
    };
  }

  const websiteLink = payload.websiteUrl
    ? (payload.websiteUrl.startsWith('http') ? payload.websiteUrl : `https://${payload.websiteUrl}`)
    : null;

  const instagramLink = payload.instagramUrl
    ? (payload.instagramUrl.startsWith('@')
        ? `https://instagram.com/${payload.instagramUrl.slice(1)}`
        : payload.instagramUrl.startsWith('http')
        ? payload.instagramUrl
        : `https://${payload.instagramUrl}`)
    : null;

  const text = `🏛️ <b>MODLONIZE® — NEW BRAND AUDIT INQUIRY</b>
━━━━━━━━━━━━━━━━━━━━━━
<b>Reference:</b> <code>#${payload.id}</code>
<b>Brand Name:</b> <b>${payload.brandName}</b>
<b>Contact Email:</b> <code>${payload.contactEmail}</code>

<b>Digital Touchpoints:</b>
• <b>Website:</b> ${websiteLink ? `<a href="${websiteLink}">${payload.websiteUrl}</a>` : '<i>Not provided</i>'}
• <b>Instagram:</b> ${instagramLink ? `<a href="${instagramLink}">${payload.instagramUrl}</a>` : '<i>Not provided</i>'}

<b>Improvement Focus:</b>
<i>${payload.improvementGoal || 'General Digital Architecture Review'}</i>

<b>Time Logged:</b> <code>${new Date(payload.timestamp).toUTCString()}</code>
━━━━━━━━━━━━━━━━━━━━━━
<i>MODLONIZE® Digital Transformation House</i>`;

  const response = await fetch(`https://api.telegram.org/bot${botToken.trim()}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId.trim(),
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: false
    })
  });

  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.description || `Telegram API error status ${response.status}`);
  }

  return {
    configured: true,
    delivered: true,
    messageId: data.result?.message_id,
    chatRecipient: data.result?.chat?.title || data.result?.chat?.username || chatId
  };
};

export const BrandAuditPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    brandName: '',
    websiteUrl: '',
    instagramUrl: '',
    improvementGoal: '',
    contactEmail: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  // Quick Telegram Configuration Drawer / Modal state
  const [showTgConfig, setShowTgConfig] = useState(false);
  const [tgBotToken, setTgBotToken] = useState(localStorage.getItem('modlonize_tg_bot_token') || '');
  const [tgChatId, setTgChatId] = useState(localStorage.getItem('modlonize_tg_chat_id') || '');
  const [tgConfigSaved, setTgConfigSaved] = useState(false);

  const isTelegramConfiguredInEnv = !!(import.meta.env.VITE_TELEGRAM_BOT_TOKEN && import.meta.env.VITE_TELEGRAM_CHAT_ID);
  const isTelegramConfiguredLocally = !!(tgBotToken && tgChatId);
  const hasTelegramActive = isTelegramConfiguredInEnv || isTelegramConfiguredLocally;

  // URL Format Validators
  const validateWebsite = (url) => {
    if (!url) return true;
    const trimmed = url.trim();
    const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i;
    return pattern.test(trimmed);
  };

  const validateInstagram = (handleOrUrl) => {
    if (!handleOrUrl) return true;
    const trimmed = handleOrUrl.trim();
    const pattern = /^(@[a-zA-Z0-9._]{1,30}|(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]{1,30}\/?)$/i;
    return pattern.test(trimmed);
  };

  const validateEmail = (email) => {
    if (!email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSaveTelegram = (e) => {
    e.preventDefault();
    if (tgBotToken) localStorage.setItem('modlonize_tg_bot_token', tgBotToken.trim());
    if (tgChatId) localStorage.setItem('modlonize_tg_chat_id', tgChatId.trim());
    setTgConfigSaved(true);
    setTimeout(() => {
      setTgConfigSaved(false);
      setShowTgConfig(false);
    }, 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // 1. Required: Brand Name
    if (!formData.brandName.trim()) {
      newErrors.brandName = 'Brand / Business Name is required.';
    }

    // 2. Required: Contact Email (to deliver audit findings)
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact Email is required to deliver the audit findings.';
    } else if (!validateEmail(formData.contactEmail)) {
      newErrors.contactEmail = 'Please provide a valid corporate email address.';
    }

    // 3. Required: At least one of Website URL OR Instagram URL
    const hasWebsite = formData.websiteUrl.trim().length > 0;
    const hasInstagram = formData.instagramUrl.trim().length > 0;

    if (!hasWebsite && !hasInstagram) {
      newErrors.urlRequirement = 'At least one digital presence touchpoint is required (Website URL OR Instagram URL).';
    }

    // 4. Format validation
    if (hasWebsite && !validateWebsite(formData.websiteUrl)) {
      newErrors.websiteUrl = 'Invalid website URL format (e.g., brand.com or https://brand.com).';
    }

    if (hasInstagram && !validateInstagram(formData.instagramUrl)) {
      newErrors.instagramUrl = 'Invalid Instagram handle or URL (e.g., @brandname or instagram.com/brandname).';
    }

    // Check duplicate submission in current session
    const lastSubmissionKey = `audit_submitted_${formData.brandName.trim().toLowerCase()}`;
    if (sessionStorage.getItem(lastSubmissionKey)) {
      newErrors.duplicate = 'An audit request for this brand has already been logged in this session.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const auditPayload = {
      id: `AUD-${Date.now().toString().slice(-6)}`,
      brandName: formData.brandName.trim(),
      websiteUrl: formData.websiteUrl.trim() || null,
      instagramUrl: formData.instagramUrl.trim() || null,
      contactEmail: formData.contactEmail.trim(),
      improvementGoal: formData.improvementGoal.trim() || 'General Digital Architecture Review',
      timestamp: new Date().toISOString()
    };

    let telegramOutcome = null;

    // 1. Send directly to Telegram
    try {
      telegramOutcome = await sendTelegramAlert(auditPayload, tgBotToken, tgChatId);
    } catch (tgErr) {
      telegramOutcome = {
        configured: true,
        delivered: false,
        error: tgErr.message
      };
    }

    // 2. Backup / REST Webhook if configured
    const backendEndpoint = import.meta.env.VITE_AUDIT_API_URL;
    let endpointOutcome = null;

    if (backendEndpoint) {
      try {
        const response = await fetch(backendEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(auditPayload)
        });
        endpointOutcome = response.ok;
      } catch (e) {
        endpointOutcome = false;
      }
    }

    // 3. Always store locally in audit ledger
    const existing = JSON.parse(localStorage.getItem('modlonize_audit_enquiries') || '[]');
    existing.push({ ...auditPayload, telegramOutcome });
    localStorage.setItem('modlonize_audit_enquiries', JSON.stringify(existing));

    sessionStorage.setItem(lastSubmissionKey, 'true');

    setSubmissionResult({
      payload: auditPayload,
      telegram: telegramOutcome,
      endpoint: backendEndpoint,
      endpointDelivered: endpointOutcome
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-cream selection:bg-crimson selection:text-cream font-sans relative">
      
      {/* Top Navigation Bar */}
      <header className="border-b border-burgundy/40 bg-bg-primary/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted hover:text-cream transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-crimson" />
            <span>Return to Studio</span>
          </button>

          <div className="flex items-center gap-4">
            {/* Telegram Live Connection Pill */}
            <button
              onClick={() => setShowTgConfig(!showTgConfig)}
              className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono tracking-wider uppercase transition-colors ${
                hasTelegramActive
                  ? 'border-emerald-500/50 bg-emerald-950/20 text-emerald-400 hover:border-emerald-400'
                  : 'border-burgundy/70 bg-bg-secondary text-text-muted hover:border-crimson hover:text-cream'
              }`}
            >
              <Send className="w-3 h-3 text-crimson" />
              <span>{hasTelegramActive ? 'Telegram Connected' : 'Connect Telegram'}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-cream font-sans">
                MODLONIZE<span className="text-crimson font-light text-sm">®</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-text-dim uppercase hidden sm:inline">
                // AUDIT SUITE
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Telegram Credentials Quick Configuration Drawer */}
      {showTgConfig && (
        <div className="bg-bg-secondary border-b border-burgundy/60 p-6 sm:p-8 animate-in slide-in-from-top-4 duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="font-mono text-xs text-crimson uppercase tracking-widest block font-semibold">
                  // TELEGRAM BOT INTEGRATION SETTINGS
                </span>
                <p className="text-xs text-text-muted font-body mt-1">
                  Enquiries are sent directly via Telegram Bot API. Configure below or define in <code className="text-cream bg-black/40 px-1 py-0.5 border border-burgundy/60">.env</code>.
                </p>
              </div>
              <button
                onClick={() => setShowTgConfig(false)}
                className="text-text-muted hover:text-cream text-xs font-mono uppercase"
              >
                [ Close ]
              </button>
            </div>

            <form onSubmit={handleSaveTelegram} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1">
                  Bot Token (from @BotFather)
                </label>
                <input
                  type="text"
                  placeholder="123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"
                  value={tgBotToken}
                  onChange={(e) => setTgBotToken(e.target.value)}
                  className="w-full bg-bg-primary border border-burgundy/60 px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-crimson font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1">
                  Chat ID (from @userinfobot or Channel ID)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 987654321 or -100123456789"
                  value={tgChatId}
                  onChange={(e) => setTgChatId(e.target.value)}
                  className="w-full bg-bg-primary border border-burgundy/60 px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-crimson font-mono"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between pt-2">
                <span className="text-[10px] font-mono text-text-dim">
                  * Credentials stored securely in your project environment / client instance.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2 bg-crimson hover:bg-crimson-accent text-cream text-xs font-mono tracking-widest uppercase transition-colors"
                >
                  {tgConfigSaved ? '✓ Credentials Saved' : 'Save Telegram Settings'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson uppercase">
            DIGITAL TRANSFORMATION HOUSE // CONFIDENTIAL PROTOCOL
          </span>
          <div className="h-[1px] w-12 bg-crimson/50" />
        </div>

        {/* Page Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.04] mb-6 font-sans">
          GET YOUR<br />
          <span className="font-editorial-italic font-normal text-crimson italic relative">
            BRAND AUDIT.
            <div className="absolute -bottom-2 left-0 w-48 h-[2px] bg-crimson/60" />
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-text-muted font-normal max-w-2xl mb-12 font-body leading-relaxed">
          An initial review of your digital presence. No commitment.
        </p>

        {/* Audit Form or Submission Result */}
        {!submissionResult ? (
          <div className="bg-bg-secondary/70 border border-burgundy/60 p-8 sm:p-12 relative overflow-hidden shadow-2xl shadow-black/60">
            
            {/* Corner Decorative Linework */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-crimson" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-crimson" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              
              {/* Error Summary Alert */}
              {errors.urlRequirement && (
                <div className="p-4 bg-burgundy/40 border border-crimson/70 text-cream text-xs font-mono flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-crimson">REQUIREMENT UNMET: </span>
                    {errors.urlRequirement}
                  </div>
                </div>
              )}

              {errors.duplicate && (
                <div className="p-4 bg-burgundy/40 border border-crimson/70 text-cream text-xs font-mono flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-crimson">DUPLICATE DETECTED: </span>
                    {errors.duplicate}
                  </div>
                </div>
              )}

              {/* Field 1: Brand / Business Name (Required) */}
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-cream mb-2">
                  01 // BRAND / BUSINESS NAME <span className="text-crimson font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maison Atelier or Vance Technologies"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className={`w-full bg-bg-primary border px-4 py-3.5 text-sm text-cream placeholder-text-dim focus:outline-none transition-colors ${
                    errors.brandName ? 'border-crimson focus:border-crimson' : 'border-burgundy/60 focus:border-crimson'
                  }`}
                />
                {errors.brandName && (
                  <p className="text-xs text-crimson font-mono mt-1.5">{errors.brandName}</p>
                )}
              </div>

              {/* Field 2: Contact Email (Required for report dispatch) */}
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-cream mb-2">
                  02 // EXECUTIVE CONTACT EMAIL <span className="text-crimson font-bold">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="marcus@yourbrand.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className={`w-full bg-bg-primary border px-4 py-3.5 text-sm text-cream placeholder-text-dim focus:outline-none transition-colors ${
                    errors.contactEmail ? 'border-crimson focus:border-crimson' : 'border-burgundy/60 focus:border-crimson'
                  }`}
                />
                {errors.contactEmail && (
                  <p className="text-xs text-crimson font-mono mt-1.5">{errors.contactEmail}</p>
                )}
                <span className="text-[10px] font-mono text-text-dim block mt-1">
                  We send the diagnostic briefing directly to this address. Confidential.
                </span>
              </div>

              {/* Digital Touchpoints Section (At least one required) */}
              <div className="pt-2 border-t border-burgundy/40">
                <div className="mb-4">
                  <span className="text-xs font-mono tracking-widest uppercase text-cream block">
                    03 // DIGITAL PRESENCE TOUCHPOINTS
                  </span>
                  <span className="text-[11px] font-mono text-crimson block mt-0.5">
                    * At least one must be provided (Website URL OR Instagram URL)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Website URL */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1.5">
                      Website URL {formData.websiteUrl.trim() && <span className="text-emerald-400">✓</span>}
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com or yourbrand.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className={`w-full bg-bg-primary border px-4 py-3 text-sm text-cream placeholder-text-dim focus:outline-none transition-colors ${
                        errors.websiteUrl ? 'border-crimson focus:border-crimson' : 'border-burgundy/60 focus:border-crimson'
                      }`}
                    />
                    {errors.websiteUrl && (
                      <p className="text-xs text-crimson font-mono mt-1.5">{errors.websiteUrl}</p>
                    )}
                  </div>

                  {/* Instagram URL */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1.5">
                      Instagram URL / Handle {formData.instagramUrl.trim() && <span className="text-emerald-400">✓</span>}
                    </label>
                    <input
                      type="text"
                      placeholder="@yourbrand or instagram.com/yourbrand"
                      value={formData.instagramUrl}
                      onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                      className={`w-full bg-bg-primary border px-4 py-3 text-sm text-cream placeholder-text-dim focus:outline-none transition-colors ${
                        errors.instagramUrl ? 'border-crimson focus:border-crimson' : 'border-burgundy/60 focus:border-crimson'
                      }`}
                    />
                    {errors.instagramUrl && (
                      <p className="text-xs text-crimson font-mono mt-1.5">{errors.instagramUrl}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Optional Field: What would you like to improve? */}
              <div className="pt-2 border-t border-burgundy/40">
                <label className="block text-xs font-mono tracking-widest uppercase text-cream mb-2">
                  04 // WHAT WOULD YOU LIKE TO IMPROVE? <span className="text-text-dim font-normal font-mono">(OPTIONAL)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. Elevating brand perception, conversion bottlenecks on mobile, outdated design systems, operational automation..."
                  value={formData.improvementGoal}
                  onChange={(e) => setFormData({ ...formData, improvementGoal: e.target.value })}
                  className="w-full bg-bg-primary border border-burgundy/60 px-4 py-3 text-sm text-cream placeholder-text-dim focus:outline-none focus:border-crimson transition-colors resize-none font-body"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-crimson hover:bg-crimson-accent disabled:opacity-50 text-cream rounded-none transition-all duration-300 shadow-xl shadow-crimson/30 hover:shadow-crimson/50 group"
                >
                  <span>{isSubmitting ? 'TRANSMITTING VIA TELEGRAM & DISPATCHING...' : 'REQUEST MY AUDIT ↗'}</span>
                  {!isSubmitting && (
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </button>

                <div className="flex items-center justify-between text-xs font-mono text-text-muted mt-3">
                  <span>An initial review of your digital presence. No commitment.</span>
                  <span className="flex items-center gap-1 text-crimson">
                    <Send className="w-3 h-3" />
                    <span>Telegram API Ready</span>
                  </span>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Transparent Submission State with Telegram Dispatch Status */
          <div className="bg-bg-secondary border border-burgundy/80 p-8 sm:p-12 relative shadow-2xl">
            <div className="flex items-center gap-3 text-crimson mb-4">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-mono text-xs tracking-widest uppercase font-bold">
                AUDIT INQUIRY REGISTERED // REF: {submissionResult.payload.id}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-cream font-sans mb-4">
              Audit Request Received for{' '}
              <span className="font-editorial-italic font-normal text-crimson italic">
                {submissionResult.payload.brandName}
              </span>
            </h2>

            <p className="text-text-muted font-body text-sm sm:text-base leading-relaxed mb-6">
              Our partners have cataloged your digital assets for review. We perform human-led, strategic brand diagnostics — not auto-generated generic scorecards.
            </p>

            {/* Telegram & System Status Dashboard */}
            <div className="bg-bg-primary border border-burgundy/60 p-5 font-mono text-xs space-y-4 mb-8">
              
              {/* Telegram Channel Status */}
              <div className="border-b border-burgundy/40 pb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-crimson" />
                    <span className="text-cream font-bold">// TELEGRAM NOTIFICATION DISPATCH</span>
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] uppercase font-bold ${
                    submissionResult.telegram?.delivered
                      ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/40'
                      : submissionResult.telegram?.configured
                      ? 'bg-rose-950/60 text-rose-400 border border-rose-500/40'
                      : 'bg-amber-950/60 text-amber-300 border border-amber-500/40'
                  }`}>
                    {submissionResult.telegram?.delivered
                      ? 'DELIVERED TO TELEGRAM'
                      : submissionResult.telegram?.configured
                      ? 'DELIVERY ERROR'
                      : 'PENDING CREDENTIALS'}
                  </span>
                </div>

                {submissionResult.telegram?.delivered ? (
                  <p className="text-emerald-300/90 text-[11px]">
                    ✓ Instant notification dispatched to Telegram recipient: <strong className="text-cream">{submissionResult.telegram.chatRecipient}</strong> (Msg ID #{submissionResult.telegram.messageId}).
                  </p>
                ) : submissionResult.telegram?.configured ? (
                  <p className="text-rose-300 text-[11px]">
                    Telegram API returned error: {submissionResult.telegram.error}. Verify Bot Token and Chat ID.
                  </p>
                ) : (
                  <div className="text-text-muted text-[11px] space-y-1">
                    <p>
                      Bot Token & Chat ID not yet entered. To receive instant Telegram notifications for every audit lead:
                    </p>
                    <p className="text-text-dim">
                      Set <code className="text-cream">VITE_TELEGRAM_BOT_TOKEN</code> & <code className="text-cream">VITE_TELEGRAM_CHAT_ID</code> in <code className="text-cream">.env</code> or configure via the top "Connect Telegram" button.
                    </p>
                  </div>
                )}
              </div>

              {/* Audit Staging Details */}
              <div className="bg-black/40 border border-burgundy/40 p-3 rounded text-[11px] text-text-dim overflow-x-auto">
                <div className="text-cream font-semibold mb-1">RECORDED INQUIRY PAYLOAD:</div>
                <pre className="text-cream/80">{JSON.stringify(submissionResult.payload, null, 2)}</pre>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 bg-crimson hover:bg-crimson-accent text-cream text-xs font-mono tracking-widest uppercase transition-colors"
              >
                Return to Studio Homepage
              </button>
              <button
                onClick={() => setSubmissionResult(null)}
                className="w-full sm:w-auto px-6 py-3 border border-burgundy/60 hover:bg-burgundy/40 text-cream text-xs font-mono tracking-widest uppercase transition-colors"
              >
                Submit Another Brand
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Audit Guarantee Footnote */}
      <footer className="border-t border-burgundy/30 py-8 mt-12 text-center text-xs font-mono text-text-dim">
        MODLONIZE® AUDIT SUITE — 100% CONFIDENTIAL & INDEPENDENT BRAND ARCHITECTURE REVIEW
      </footer>

    </div>
  );
};
