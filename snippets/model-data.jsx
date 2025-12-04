export const glm4Data = {
  modelId: "glm-4.6",
  modelCardUrl: "https://huggingface.co/zai-org/GLM-4.6",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "~3000", unit: "tokens/sec" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: {
    inputPrice: "823",
    outputPrice: "2,823",
    currency: "IDR",
    inputUnit: "per 1M tokens",
    pricingUrl: "https://www.neosantara.xyz/pricing",
    contactUrl: "https://www.neosantara.xyz/contact"
  },
  endpoints: ["Responses", "Chat Completions"],
  features: ["text_generation", "vision", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const nusantaraBaseData = {
  modelId: "nusantara-base",
  modelCardUrl: "#",
  contextLength: { freeTier: "64k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "300", outputPrice: "1500", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "vision", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const archipelago70bData = {
  modelId: "archipelago-70b",
  modelCardUrl: "#",
  contextLength: { freeTier: "24k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "4710", outputPrice: "36543", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const gardaBetaMiniData = {
  modelId: "garda-beta-mini",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "2500", outputPrice: "10499", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const seaLionV4Data = {
  modelId: "sea-lion-v4-27b-it",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "350", outputPrice: "560", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const luminaiData = {
  modelId: "luminai",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "0", outputPrice: "0", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const gemma327bItData = {
  modelId: "gemma-3-27b-it",
  modelCardUrl: "#",
  contextLength: { freeTier: "32k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "200", outputPrice: "1500", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const granite38bInstructData = {
  modelId: "granite-3-8b-instruct",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "2880", outputPrice: "11520", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "function_calling", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const llama33NemotronData = {
  modelId: "llama-3.3-nemotron-super-49b-v1.5",
  modelCardUrl: "#",
  contextLength: { freeTier: "132k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "4560", outputPrice: "31991", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const llama3370bInstructData = {
  modelId: "llama-3.3-70b-instruct",
  modelCardUrl: "#",
  contextLength: { freeTier: "24k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "4560", outputPrice: "31991", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const gemma29bItData = {
  modelId: "gemma2-9b-it",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "8k tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "200", outputPrice: "1000", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const llama3370bTurboData = {
  modelId: "llama-3.3-70b-turbo",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Turbo", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "300", outputPrice: "1200", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const deepseekR1Llama70bData = {
  modelId: "deepseek-r1-llama-70b",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "400", outputPrice: "1600", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const llama3211bData = {
  modelId: "llama-3.2-11b",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "100", outputPrice: "400", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const neosantaraGen2045Data = {
  modelId: "neosantara-gen-2045",
  modelCardUrl: "#",
  contextLength: { freeTier: "0 tokens" },
  maxOutput: { freeTier: "Image" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "1500", outputPrice: "0", currency: "IDR", inputUnit: "per Image (1024x1024)", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Image Generations"],
  features: ["image_generation"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["image"] }
};

export const nusaEmbedding0001Data = {
  modelId: "nusa-embedding-0001",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "Embedding Vector" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "100", outputPrice: "0", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Embeddings"],
  features: ["embedding"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["embedding"] }
};

// Kimi Models
export const kimiK2LatestData = {
  modelId: "kimi-k2:latest",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] }
};

export const kimiK2SearchData = {
  ...kimiK2LatestData,
  modelId: "kimi-k2:search",
  features: ["text_generation", "vision", "file_interpretation", "web_search", "streaming"]
};

export const kimiK2ResearchData = { ...kimiK2LatestData, modelId: "kimi-k2:research" };
export const kimiK1Data = { ...kimiK2LatestData, modelId: "kimi-k1" };
export const kimiK2MathData = { ...kimiK2LatestData, modelId: "kimi-k2:math" };
export const kimiK2SilentData = { ...kimiK2LatestData, modelId: "kimi-k2:silent" };
export const kimiK2Data = { ...kimiK2LatestData, modelId: "kimi-k2" };

export const glm46PlusData = {
  modelId: "glm-4.6-plus",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "823", outputPrice: "2832", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const deepseekChatV31Data = {
  modelId: "deepseek-chat-v3.1",
  modelCardUrl: "#",
  contextLength: { freeTier: "164k tokens" },
  maxOutput: { freeTier: "4029 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "3333", outputPrice: "8333", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const tongyiDeepresearchData = {
  modelId: "tongyi-deepresearch-30b-a3b",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "4029 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "3333", outputPrice: "8333", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const qwen3CoderData = {
  modelId: "qwen3-coder",
  modelCardUrl: "#",
  contextLength: { freeTier: "262k tokens" },
  maxOutput: { freeTier: "4029 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "3333", outputPrice: "8333", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const vercelClaude35SonnetData = {
  modelId: "vercel-claude-3.5-sonnet",
  modelCardUrl: "#",
  contextLength: { freeTier: "200k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "3.00", outputPrice: "15.00", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const vercelGpt4oData = {
  modelId: "vercel-gpt-4o",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "5.00", outputPrice: "15.00", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const deepseekOcrData = {
  modelId: "deepseek-ocr",
  modelCardUrl: "#",
  contextLength: { freeTier: "0 tokens" },
  maxOutput: { freeTier: "Text" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "5", inputTokensPerMin: "3,000", dailyTokens: "2,000", monthlyTokens: "10,000" },
  { tier: "Basic", requestsPerMin: "30", inputTokensPerMin: "10,000", dailyTokens: "10,000", monthlyTokens: "66,667" },
  { tier: "Standard", requestsPerMin: "100", inputTokensPerMin: "40,000", dailyTokens: "100,000", monthlyTokens: "400,000" },
  { tier: "Pro", requestsPerMin: "400", inputTokensPerMin: "100,000", dailyTokens: "200,000", monthlyTokens: "1,000,000" },
  { tier: "Enterprise", requestsPerMin: "Custom", inputTokensPerMin: "Custom", dailyTokens: "Custom", monthlyTokens: "Custom" }
],
  tokenCredits: {
  freeMonthlyCredits: "10,000",
  pricePerMillion: "149,999",
  pricePerToken: "0.15",
  pricePerThousand: "149.99",
  docsUrl: "en/about/token-credits",
  example: { tokens: 100000, cost: "Rp 15,000" }
},
  pricing: { inputPrice: "100", outputPrice: "0", currency: "IDR", inputUnit: "per Image", pricingUrl: "https://www.neosantara.xyz/pricing" },
  endpoints: ["Chat Completions"], // Accessible via chat with image input
  features: ["ocr", "vision"],
  inputOutput: { inputFormats: ["image"], outputFormats: ["text"] }
};