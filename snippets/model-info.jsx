export const ModelInfo = ({
  modelId,
  modelCardUrl,
  contextLength = {},
  maxOutput = {},
  speed = {},
  inputOutput = {},
  pricing = {},
  tokenCredits = {},
  rateLimits = [],
  endpoints = [],
  features = [],
  knownLimitations = []
}) => {
  // --- helpers ---
  const safe = (v, fallback = "N/A") => (v === undefined || v === null || v === "" ? fallback : v);

  const formatTokens = (val) => {
    if (val == null || val === "") return "N/A";
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
    <Icon key={key} icon={formatIconName(format)} size={18} color="#fb923c" />
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
  const currency = pricing.currency ?? "";

  // tokenCredits fields (Neosantara)
  const freeMonthlyCredits = tokenCredits.freeMonthlyCredits ?? tokenCredits.freeMonthlyCredits ?? "10,000";
  const pricePerMillion = tokenCredits.pricePerMillion ?? "149,999"; // Rp per 1M
  const pricePerToken = tokenCredits.pricePerToken ?? "0.15"; // Rp per token
  const docsUrl = tokenCredits.docsUrl ?? "#";

  return (
    <div className="space-y-6 not-prose">
      {/* Header */}
      {modelId && (
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Model ID: </span>
            <code className="text-sm font-mono font-semibold text-zinc-900 dark:text-white">{modelId}</code>
          </div>

          {modelCardUrl && (
            <a
              href={modelCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Model card
              <Icon icon="external-link" size={14} color="currentColor" />
            </a>
          )}
        </div>
      )}

      {/* Model Stats */}
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
            <Icon icon="chart-bar" size={18} color="#fb923c" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Model Stats</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* SPEED */}
          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">SPEED</div>
            <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">{safe(speed?.value, "—")}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{safe(speed?.unit, "")}</div>
          </div>

          {/* INPUT / OUTPUT */}
          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">INPUT / OUTPUT</div>
            <div className="flex items-center justify-center gap-2 h-12">
              <div className="flex items-center gap-1" aria-label="input formats">
                {Array.isArray(inputOutput.inputFormats) && inputOutput.inputFormats.length > 0
                  ? inputOutput.inputFormats.map((fmt, i) => renderFormatIcon(fmt, `in-${i}`))
                  : <span className="text-zinc-400 text-sm">text</span>}
              </div>
              <span className="text-zinc-400 text-lg">/</span>
              <div className="flex items-center gap-1" aria-label="output formats">
                {Array.isArray(inputOutput.outputFormats) && inputOutput.outputFormats.length > 0
                  ? inputOutput.outputFormats.map((fmt, i) => renderFormatIcon(fmt, `out-${i}`))
                  : <span className="text-zinc-400 text-sm">text</span>}
              </div>
            </div>
          </div>

          {/* CONTEXT (limit only — no pricing) */}
          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">CONTEXT</div>
            <div className="space-y-2">
              <div>
                {/*<div className="text-xs text-zinc-600 dark:text-zinc-400">Free Tier</div>*/}
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(contextLength.freeTier)}</div>
              </div>
             {/* <div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Paid Tiers</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(contextLength.paidTiers)}</div>
              </div>*/}
            </div>
          </div>

          {/* MAX OUTPUT (limit only — no pricing) */}
          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">MAX OUTPUT</div>
            <div className="space-y-2">
              {maxOutput && typeof maxOutput === "object" && (maxOutput.freeTier || maxOutput.paidTiers) ? (
                <>
                 <div>
                   {/* <div className="text-xs text-zinc-600 dark:text-zinc-400">Free Tier</div>*/}
                    <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(maxOutput.freeTier)}</div>
                  </div>
                 {/* <div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Paid Tiers</div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(maxOutput.paidTiers)}</div>
                  </div>*/}
                </>
              ) : (
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(maxOutput)}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* TOKEN CREDITS (Neosantara) */}
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
            <Icon icon="key" size={18} color="#fb923c" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Token Credits & Pricing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-sm">
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Free monthly credits</div>
            <div className="text-lg font-medium text-zinc-900 dark:text-white">{safe(freeMonthlyCredits)}</div>
          </div>

          <div className="text-sm">
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Price / 1M</div>
            <div className="text-lg font-medium text-zinc-900 dark:text-white">Rp {pricePerMillion}</div>
          </div>

          <div className="text-sm">
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Price / Token</div>
            <div className="text-lg font-medium text-zinc-900 dark:text-white">Rp {pricePerToken}</div>
          </div>
        </div>

        <div className="pt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Costs are calculated from total tokens processed per request (input + output). See{" "}
          <a href={docsUrl} className="underline font-semibold" target="_blank" rel="noopener noreferrer">Token Credits docs</a>.
        </div>
      </div>

      {/* MODEL PRICING (if provided) */}
      {(inputPrice || outputPrice) && (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <Icon icon="dollar-sign" size={18} color="#fb923c" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Model Pricing / 1M Tokens</h3>
          </div>

          <div className="space-y-4">
            <div className="flex">
              <div className="flex-1 text-center">
                <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 uppercase">Input</div>
                <div className="text-zinc-900 dark:text-white text-2xl font-bold">{inputPrice ?? "—"}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{currency} {inputUnit}</div>
              </div>

              <div className="w-px bg-zinc-200 dark:bg-zinc-800 mx-6"></div>

              <div className="flex-1 text-center">
                <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 uppercase">Output</div>
                <div className="text-zinc-900 dark:text-white text-2xl font-bold">{outputPrice ?? "—"}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{currency} {inputUnit}</div>
              </div>
            </div>

            <div className="pt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Note: model pricing is per 1M tokens. Actual request cost = (input tokens + output tokens) × token price
            </div>

            <div className="pt-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                For volume discounts and enterprise features, see our{" "}
                <a href={pricingUrl} className="text-black font-semibold underline decoration-orange-500 underline-offset-4 decoration-1 hover:decoration-2" target="_blank" rel="noopener noreferrer">pricing page</a>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* KNOWN LIMITATIONS */}
      {Array.isArray(knownLimitations) && knownLimitations.length > 0 && (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <Icon icon="note" size={18} color="#fb923c" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Model Notes</h3>
          </div>
          <div className="space-y-2">
            {knownLimitations.map((lim, idx) => (
              <div key={idx} className="flex items-start gap-2 py-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="text-zinc-900 dark:text-white text-sm leading-relaxed prose-sm max-w-none">
                  {lim}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RATE LIMITS TABLE (includes monthlyTokens) */}
      {Array.isArray(rateLimits) && rateLimits.length > 0 && (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <Icon icon="clock" size={18} color="#fb923c" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Rate Limits</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">Tier</th>
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">RPM</th>
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">TPM</th>
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">TPD</th>
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">Monthly Tokens</th>
                </tr>
              </thead>
              <tbody>
                {rateLimits.map((limit = {}, i) => (
                  <tr key={i} className="border-b border-zinc-200/50 dark:border-zinc-800/50 last:border-b-0">
                    <td className="py-3 px-2 text-zinc-900 dark:text-white font-medium">{safe(limit.tier, "—")}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{safe(limit.requestsPerMin, "—")}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{safe(limit.inputTokensPerMin, "—")}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{safe(limit.dailyTokens, "—")}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{safe(limit.monthlyTokens, "—")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Endpoints & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.isArray(endpoints) && endpoints.length > 0 && (
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <Icon icon="link" size={18} color="#fb923c" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Endpoints</h3>
            </div>
            <div className="space-y-3">
              {endpoints.map((endpoint, idx) => {
                const endpointName = typeof endpoint === "string" ? endpoint : endpoint?.name ?? "Endpoint";
                const endpointUrl = (typeof endpoint === "object" && endpoint?.url) || endpointUrls[endpointName] || endpointUrls["Responses"];
                return (
                  <div key={idx} className="flex items-start gap-2 py-2">
                    <span className="text-zinc-400 dark:text-zinc-500 text-sm">→</span>
                    <div>
                      <div className="text-sm text-zinc-900 dark:text-white">{endpointName}</div>
                      {endpointUrl && <code className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{endpointUrl}</code>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {Array.isArray(features) && features.length > 0 && (
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <Icon icon="sparkles" size={18} color="#fb923c" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Capabilities</h3>
            </div>
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 py-2">
                  <span className="text-green-500 dark:text-green-400 text-sm">✓</span>
                  <span className="text-zinc-900 dark:text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-orange-600/10 to-red-500/10 border border-orange-600/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
            <Icon icon="rocket" size={18} color="#fb923c" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Need Higher Limits?</h3>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">Reach out for custom pricing with our Enterprise tier for higher rate limits and dedicated support.</p>
        <div className="mt-4">
          <a href={pricing.contactUrl ?? "#"} className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors font-medium" target="_blank" rel="noopener noreferrer">
            Contact Sales
            <Icon icon="arrow-right" color="white" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};