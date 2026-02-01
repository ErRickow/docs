export const ModelInfo = ({
  modelId,
  provider,
  modelCardUrl,
  contextLength = {},
  maxOutput = {},
  inputOutput = {},
  pricing = {},
  tokenCredits = {},
  endpoints = [],
  features = [],
  knownLimitations = []
}) => {
  // --- helpers ---
  const safe = (v, fallback = "—") => (v === undefined || v === null || v === "" ? fallback : v);

  const formatTokens = (val) => {
    if (val == null || val === "") return "—";
    if (typeof val === "string") return val;
    if (typeof val === "number") return `${val.toLocaleString()} tokens`;
    return String(val);
  };

  const formatIconName = (fmt) => {
    if (!fmt) return "text";
    const key = String(fmt).toLowerCase();
    if (key.includes("image")) return "image";
    if (key.includes("audio")) return "headphones";
    if (key.includes("video")) return "video";
    return "text";
  };

  const renderFormatIcon = (format, key) => (
    <Icon key={key} icon={formatIconName(format)} size={18} className="text-zinc-400 dark:text-zinc-500" />
  );

  const endpointUrls = {
    Responses: "/v1/responses",
    "Chat Completions": "/v1/chat/completions",
    Completions: "/v1/completions",
    Models: "/v1/models"
  };

  // pricing fields
  const inputPrice = pricing.inputPrice ?? null;
  const outputPrice = pricing.outputPrice ?? null;
  const inputUnit = pricing.inputUnit ?? "per 1,000,000 tokens";
  const pricingUrl = pricing.pricingUrl ?? "#";
  const currency = pricing.currency === "USD" ? "$" : "Rp ";

  // tokenCredits fields (Neosantara)
  const freeBalance = tokenCredits.freeBalance ?? "Promo Aktif";
  const docsUrl = "/en/about/billing-pricing";
  const rateLimitDocsUrl = "/en/about/rate-limits";

  return (
    <div className="space-y-6 not-prose mt-6">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Model ID</span>
            {provider && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-zinc-700">
                {provider}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 w-fit">
            <code className="text-zinc-900 dark:text-zinc-100 font-mono text-sm font-semibold">{modelId}</code>
            <button 
              onClick={() => {
                if (typeof navigator !== 'undefined') {
                  navigator.clipboard.writeText(modelId);
                }
              }}
              className="ml-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              title="Copy Model ID"
            >
              <Icon icon="copy" size={14} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {modelCardUrl && modelCardUrl !== "#" && (
            <a
              href={modelCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              Model Card
              <Icon icon="external-link" size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
          <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Context Window</div>
          <div className="text-lg font-bold text-zinc-900 dark:text-white">{formatTokens(contextLength.freeTier)}</div>
        </div>
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
          <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Input / Output</div>
          <div className="flex items-center gap-2 h-7">
            <div className="flex items-center gap-1.5">
              {inputOutput.inputFormats?.map((fmt, i) => renderFormatIcon(fmt, `in-${i}`)) || <span className="text-zinc-400 text-sm">text</span>}
            </div>
            <span className="text-zinc-300 dark:text-zinc-700 mx-1">|</span>
            <div className="flex items-center gap-1.5">
              {inputOutput.outputFormats?.map((fmt, i) => renderFormatIcon(fmt, `out-${i}`)) || <span className="text-zinc-400 text-sm">text</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon icon="credit-card" size={16} className="text-zinc-500 dark:text-zinc-400" />
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Pricing</h3>
          </div>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">Pay-As-You-Go</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{outputPrice === "0" ? "Price" : "Input"}</span>
                <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-white">{currency}{inputPrice ?? "0"} <span className="text-[10px] font-normal text-zinc-500">/ {inputUnit.replace('per ', '')}</span></span>
              </div>
              {outputPrice !== "0" && (
                <div className="flex items-baseline justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Output</span>
                  <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-white">{currency}{outputPrice ?? "0"} <span className="text-[10px] font-normal text-zinc-500">/ {inputUnit.replace('per ', '')}</span></span>
                </div>
              )}
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                {outputPrice === "0" ? "Billed per generation." : "Billed based on exact token usage."}
              </p>
            </div>
            
            <div className="rounded-lg p-4 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-white">New Account Benefit</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                Get <span className="font-semibold text-zinc-900 dark:text-white">{freeBalance}</span> free credits upon email verification.
              </p>
              <a href={docsUrl} className="text-xs font-semibold text-zinc-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 transition-colors">
                View Pricing <Icon icon="arrow-right" size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid (Rate Limits) */}
      <div className="grid grid-cols-1 gap-4">
        {/* Rate Limits */}
        <div className="p-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-between shadow-sm">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Rate Limits</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Scale with your usage tier</p>
          </div>
          <a href={rateLimitDocsUrl} className="text-xs font-medium px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
            View
          </a>
        </div>
      </div>

      {/* Details Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {features.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Capabilities</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 text-[11px] font-medium rounded border border-zinc-200 dark:border-zinc-800">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {endpoints.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Endpoints</h4>
            <div className="space-y-2">
              {endpoints.map((endpoint, idx) => {
                const name = typeof endpoint === "string" ? endpoint : endpoint?.name;
                const url = endpointUrls[name] || "/v1/chat/completions";
                return (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
                    <code className="text-[10px] text-zinc-500 dark:text-zinc-500 font-mono bg-zinc-50 dark:bg-zinc-900 px-1.5 py-0.5 rounded w-fit">{url}</code>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Notes */}
      {knownLimitations.length > 0 && (
        <div className="mt-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800">
          <h4 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
            <Icon icon="info" size={12} className="text-zinc-500" />
            Notes
          </h4>
          <ul className="space-y-1.5">
            {knownLimitations.map((lim, idx) => (
              <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 pl-5 relative before:content-['•'] before:absolute before:left-1 before:text-zinc-400">
                {lim}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
