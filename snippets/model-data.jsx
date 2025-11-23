export const glm4Data = {
  modelId: "gpt-oss-120b",
  modelCardUrl: "https://openai.com/index/gpt-oss-model-card/",
  contextLength: {
    freeTier: "65k tokens",
    paidTiers: "131k tokens"
  },
  maxOutput: "32k tokens",
  speed: {
    value: "~3000",
    unit: "tokens/sec"
  },
  rateLimits: [
    {
      tier: "Free",
      requestsPerMin: "30",
      inputTokensPerMin: "60k",
      dailyTokens: "1M"
    },
    {
      tier: "Developer",
      requestsPerMin: "1K",
      inputTokensPerMin: "1M",
      dailyTokens: "N/A"
    }
  ],
  pricing: {
    inputPrice: "350",
    outputPrice: "750",
    currency: "IDR",
    inputUnit: "per 1,000,000 tokens",
    pricingUrl: "https://app.neosantara.xyz/pricing",
    contactUrl: "https://app.neosantara.xyz/contact"
  },
  endpoints: ["Responses", "Chat Completions"],
  features: ["reasoning", "streaming", "structured_output", "json_schema"],
  inputOutput: {
    inputFormats: ["text"],
    outputFormats: ["text"]
  },
  knownLimitations: [
    <span>Use the <code>reasoning_effort</code> parameter to control reasoning for this model.</span>,
    <span>When <code>min_tokens</code> is set, the model may generate EOS tokens. <b>Use at your own risk.</b></span>
  ]
};