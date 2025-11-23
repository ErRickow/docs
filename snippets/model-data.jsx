export const glm4Data = {
  modelId: "gpt-oss-120b",
  modelCardUrl: "https://openai.com/index/gpt-oss-model-card/",

  contextLength: {
    freeTier: "65k tokens",
    paidTiers: "131k tokens"
  },

  maxOutput: {
    freeTier: "32k tokens",
    paidTiers: "40k tokens"
  },

  speed: {
    value: "~3000",
    unit: "tokens/sec"
  },

  rateLimits: [
    {
      tier: "Free",
      requestsPerMin: "5",
      inputTokensPerMin: "3,000",
      dailyTokens: "2,000",
      monthlyTokens: "10,000"
    },
    {
      tier: "Basic",
      requestsPerMin: "30",
      inputTokensPerMin: "10,000",
      dailyTokens: "10,000",
      monthlyTokens: "66,667"
    },
    {
      tier: "Standard",
      requestsPerMin: "100",
      inputTokensPerMin: "40,000",
      dailyTokens: "100,000",
      monthlyTokens: "400,000"
    },
    {
      tier: "Pro",
      requestsPerMin: "400",
      inputTokensPerMin: "100,000",
      dailyTokens: "200,000",
      monthlyTokens: "1,000,000"
    },
    {
      tier: "Enterprise",
      requestsPerMin: "Custom",
      inputTokensPerMin: "Custom",
      dailyTokens: "Custom",
      monthlyTokens: "Custom"
    }
  ],

  tokenCredits: {
    freeMonthlyCredits: "10,000",
    pricePerMillion: "149,999", // Rp 149,999 per 1M tokens
    pricePerToken: "0.15",      // Rp 0.15 per token
    pricePerThousand: "149.99", // Rp 149.99 per 1k tokens
    docsUrl: "https://docs.neosantara.xyz/en/about/token-credits",
    example: {
      tokens: 100000,
      cost: "Rp 15,000"
    }
  },

  pricing: {
    inputPrice: "350",   // model-specific (your OSS model; display only)
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
    "Use the reasoning_effort parameter to control reasoning for this model.",
    "When min_tokens is set, the model may generate EOS tokens. Use at your own risk."
  ]
};