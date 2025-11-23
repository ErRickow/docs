import React from 'react';

/**
 * ModelInfo - Neosantara-adapted version
 * - Highlights /v1/responses endpoint
 * - Shows pricing units (IDR / 1M tokens) and pricing URL override
 * - Maps common Neosantara capabilities to readable labels
 * - Formats token-based numbers with unit fallback
 */
export default function ModelInfo({
  modelId,
  modelCardUrl,
  contextLength = {},
  maxOutput = {},
  speed = {},
  inputOutput = {},
  pricing = {},
  rateLimits = [],
  endpoints = [],
  features = [],
  knownLimitations = []
}) {
  const formatTokens = (val) => {
    if (val == null || val === '') return 'N/A';
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return `${val.toLocaleString()} tokens`;
    return String(val);
  };

  const endpointUrls = {
    'Responses': '/v1/responses',
    'Chat Completions': '/v1/chat/completions',
    'Completions': '/v1/completions',
    'Models': '/v1/models'
  };

  const featureLabelMap = {
    'reasoning': 'Enhanced reasoning',
    'streaming': 'Streaming (progressive responses)',
    'structured_output': 'Structured output (JSON / schema)',
    'json_schema': 'Structured output (JSON Schema)',
    'embeddings': 'Embeddings',
    'image_generation': 'Image generation',
    'multimodal': 'Multimodal (text + image + audio + video)',
    'safety': 'Safety filters / moderation'
  };

  const renderFormatIcon = (format, index) => {
    const iconName = format === 'image' ? 'image'
      : format === 'audio' ? 'headphones'
      : format === 'video' ? 'video'
      : 'text';
    return <Icon key={index} icon={iconName} size={18} color="#fb923c" />;
  };

  const inputPrice = pricing.inputPrice || null;
  const outputPrice = pricing.outputPrice || null;
  const inputUnit = pricing.inputUnit || 'per 1,000,000 tokens';
  const pricingUrl = pricing.pricingUrl || 'https://app.neosantara.xyz/pricing';
  const currency = pricing.currency || 'IDR';

  return (
    <div className="space-y-6 not-prose">
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

      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
            <Icon icon="chart-bar" size={18} color="#fb923c" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Model Stats</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">SPEED</div>
            <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">{speed?.value ?? '—'}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{speed?.unit ?? ''}</div>
          </div>

          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">INPUT / OUTPUT</div>
            <div className="flex items-center justify-center gap-2 h-12">
              <div className="flex items-center gap-1">
                {inputOutput.inputFormats && inputOutput.inputFormats.length > 0
                  ? inputOutput.inputFormats.map((format, index) => renderFormatIcon(format, index))
                  : <span className="text-zinc-400 text-sm">text</span>}
              </div>
              <span className="text-zinc-400 text-lg">/</span>
              <div className="flex items-center gap-1">
                {inputOutput.outputFormats && inputOutput.outputFormats.length > 0
                  ? inputOutput.outputFormats.map((format, index) => renderFormatIcon(format, index))
                  : <span className="text-zinc-400 text-sm">text</span>}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">CONTEXT</div>
            <div className="space-y-2">
              <div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Free Tier</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(contextLength.freeTier)}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Paid Tiers</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(contextLength.paidTiers)}</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 uppercase">MAX OUTPUT</div>
            <div className="space-y-2">
              <div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Free Tier</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(maxOutput.freeTier)}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Paid Tiers</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{formatTokens(maxOutput.paidTiers)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {inputPrice && outputPrice && (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <Icon icon="dollar-sign" size={18} color="#fb923c" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Pricing</h3>
          </div>

          <div className="space-y-4">
            <div className="flex">
              <div className="flex-1 text-center">
                <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 uppercase">Input</div>
                <div className="text-zinc-900 dark:text-white text-2xl font-bold">{inputPrice}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{currency} {inputUnit}</div>
              </div>
              <div className="w-px bg-zinc-200 dark:bg-zinc-800 mx-6"></div>
              <div className="flex-1 text-center">
                <div className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 uppercase">Output</div>
                <div className="text-zinc-900 dark:text-white text-2xl font-bold">{outputPrice}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{currency} {inputUnit}</div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Exploration pricing shown above is {inputUnit} ({currency}). For volume discounts and enterprise features, see our{' '}
                <a
                  href={pricingUrl}
                  className="text-black font-semibold underline decoration-orange-500 underline-offset-4 decoration-1 hover:decoration-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pricing page
                </a>.
              </p>
            </div>
          </div>
        </div>
      )}

      {knownLimitations && knownLimitations.length > 0 && (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <Icon icon="note" size={18} color="#fb923c" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Model Notes</h3>
          </div>
          <div className="space-y-2">
            {knownLimitations.map((limitation, index) => (
              <div key={index} className="flex items-start gap-2 py-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="text-zinc-900 dark:text-white text-sm leading-relaxed prose-sm max-w-none">{limitation}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {rateLimits && rateLimits.length > 0 && (
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
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">Requests/min</th>
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">Input Tokens/min</th>
                  <th className="text-left py-3 px-2 text-zinc-500 dark:text-zinc-400 font-medium">Daily Tokens</th>
                </tr>
              </thead>
              <tbody>
                {rateLimits.map((limit, index) => (
                  <tr key={index} className="border-b border-zinc-200/50 dark:border-zinc-800/50 last:border-b-0">
                    <td className="py-3 px-2 text-zinc-900 dark:text-white font-medium">{limit.tier}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{limit.requestsPerMin}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{limit.inputTokensPerMin}</td>
                    <td className="py-3 px-2 text-zinc-900 dark:text-white">{limit.dailyTokens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {endpoints && endpoints.length > 0 && (
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <Icon icon="link" size={18} color="#fb923c" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Endpoints</h3>
            </div>
            <div className="space-y-3">
              {endpoints.map((endpoint, index) => {
                const endpointName = typeof endpoint === 'string' ? endpoint : endpoint.name;
                const endpointUrl = typeof endpoint === 'object' && endpoint.url
                  ? endpoint.url
                  : endpointUrls[endpointName] || endpointUrls['Responses'];
                return (
                  <div key={index} className="flex items-start gap-2 py-2">
                    <span className="text-zinc-400 dark:text-zinc-500 text-sm">→</span>
                    <div>
                      <div className="text-sm text-zinc-900 dark:text-white">{endpointName}</div>
                      {endpointUrl && (
                        <code className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{endpointUrl}</code>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <Icon icon="sparkles" size={18} color="#fb923c" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Capabilities</h3>
            </div>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 py-2">
                  <span className="text-green-500 dark:text-green-400 text-sm">✓</span>
                  <span className="text-zinc-900 dark:text-white text-sm">
                    {featureLabelMap[feature] || feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-orange-600/10 to-red-500/10 border border-orange-600/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
            <Icon icon="rocket" size={18} color="#fb923c" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Need Higher Limits?</h3>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">
          Reach out for custom pricing with our Enterprise tier for higher rate limits and dedicated support.
        </p>
        <div className="mt-4">
          <a
            href={pricing.contactUrl || 'https://app.neosantara.xyz/contact'}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Sales
            <Icon icon="arrow-right" color="white" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}