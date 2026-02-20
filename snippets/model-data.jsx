export const nusantaraBaseData = {
  modelId: "nusantara-base",
  provider: "Neosantara AI",
  modelCardUrl: "https://neosantara.xyz",
  contextLength: { freeTier: "64k tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "300", outputPrice: "1500", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "vision", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const archipelago70bData = {
  modelId: "archipelago-70b",
  provider: "Neosantara AI",
  modelCardUrl: "https://neosantara.xyz/models/archipelago",
  contextLength: { freeTier: "24k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "4710", outputPrice: "36543", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "2500", outputPrice: "10499", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "350", outputPrice: "560", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const gemma327bItData = {
  modelId: "gemma-3-27b-it",
  modelCardUrl: "#",
  contextLength: { freeTier: "32k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "200", outputPrice: "1500", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "2880", outputPrice: "11520", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "4560", outputPrice: "31991", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "4560", outputPrice: "31991", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "200", outputPrice: "1000", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "300", outputPrice: "1200", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const llama3211bData = {
  modelId: "llama-3.2-11b",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "100", outputPrice: "400", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const neosantaraGen2045Data = {
  modelId: "neosantara-gen-2045",
  modelCardUrl: "#",
  contextLength: { freeTier: "0 tokens" },
  maxOutput: { freeTier: "1 Image" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { 
    inputPrice: "400 - 1,500", 
    outputPrice: "0", 
    currency: "Rp", 
    inputUnit: "per Image", 
    pricingUrl: "/en/about/billing-pricing" 
  },
  endpoints: ["Image Generations"],
  features: ["image_generation"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["image"] },
  knownLimitations: [
    "1024x1024: Rp 1,500 per image",
    "512x512: Rp 800 per image",
    "256x256: Rp 400 per image"
  ]
};

export const nusaEmbedding0001Data = {
  modelId: "nusa-embedding-0001",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "Embedding Vector" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "100", outputPrice: "0", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Embeddings"],
  features: ["embedding"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["embedding"] }
};

export const kimiK2Data = {
  modelId: "kimi-k2",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model featuring 1 trillion parameters (32B active)."]
};

export const kimiK2LatestData = {
  modelId: "kimi-k2:latest",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model featuring 1 trillion parameters (32B active)."]
};

export const kimiK2SearchData = {
  modelId: "kimi-k2:search",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming", "web_search"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model featuring 1 trillion parameters (32B active)."]
};

export const kimiK2ResearchData = {
  modelId: "kimi-k2:research",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model featuring 1 trillion parameters (32B active)."]
};

export const kimiK2MathData = {
  modelId: "kimi-k2:math",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model featuring 1 trillion parameters (32B active)."]
};

export const kimiK2SilentData = {
  modelId: "kimi-k2:silent",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model featuring 1 trillion parameters (32B active)."]
};

export const kimiK1Data = {
  modelId: "kimi-k1",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "file_interpretation", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "file"], outputFormats: ["text"] },
  knownLimitations: ["The first generation Kimi model developed by Moonshot AI."]
};

export const glm46Data = {
  modelId: "glm-4.6",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "823", outputPrice: "2823", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const glm45FlashData = {
  modelId: "glm-4.5-flash",
  provider: "Zhipu AI",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
    { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
    { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
    { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
  ],
  tokenCredits: {
    docsUrl: "en/about/billing-pricing",
    freeBalance: "Promo Aktif"
  },
  pricing: { inputPrice: "0", outputPrice: "0", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const glm46PlusData = {
  modelId: "glm-4.6-plus",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "823", outputPrice: "2832", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const deepseekR1Data = {
  modelId: "deepseek-r1",
  provider: "DeepSeek",
  modelCardUrl: "https://www.deepseek.com",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "22477", outputPrice: "89910", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "reasoning", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const deepseekChatV31Data = {
  modelId: "deepseek-chat-v3.1",
  modelCardUrl: "#",
  contextLength: { freeTier: "164k tokens" },
  maxOutput: { freeTier: "4029 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "3333", outputPrice: "8333", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const qwen3CoderData = {
  modelId: "qwen3-coder",
  modelCardUrl: "#",
  contextLength: { freeTier: "262k tokens" },
  maxOutput: { freeTier: "4029 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "3333", outputPrice: "8333", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const claude45SonnetData = {
  modelId: "claude-4.5-sonnet",
  modelCardUrl: "#",
  contextLength: { freeTier: "200k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "3.00", outputPrice: "15.00", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const titanImageG1Data = {
  modelId: "titan-image-g1",
  provider: "Amazon (via Bedrock)",
  modelCardUrl: "https://aws.amazon.com/bedrock/titan/",
  contextLength: { freeTier: "0 tokens" },
  maxOutput: { freeTier: "1 Image" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3" },
    { tier: "Basic", requestsPerMin: "20" }
  ],
  pricing: { 
    inputPrice: "0.008 - 0.010", 
    outputPrice: "0", 
    currency: "USD", 
    inputUnit: "per Image", 
    pricingUrl: "/en/about/billing-pricing" 
  },
  endpoints: ["Image Generations"],
  features: ["image_generation", "image_variation", "inpainting", "outpainting"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["image"] },
  knownLimitations: [
    "512x512: $0.008 per image",
    "1024x1024: $0.010 per image",
    "Supports Inpainting and Outpainting via mask_image parameter"
  ]
};

export const claude3HaikuData = {
  modelId: "claude-3-haiku",
  provider: "Anthropic (via Bedrock)",
  modelCardUrl: "https://www.anthropic.com/claude",
  contextLength: { freeTier: "200k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" }
  ],
  pricing: { inputPrice: "0.25", outputPrice: "1.25", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const claude3SonnetData = {
  modelId: "claude-3-sonnet",
  provider: "Anthropic (via Bedrock)",
  modelCardUrl: "https://www.anthropic.com/claude",
  contextLength: { freeTier: "200k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "20", inputTokensPerMin: "10,000", outputTokensPerMin: "2,500" }
  ],
  pricing: { inputPrice: "3.00", outputPrice: "15.00", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const gemini3FlashData = {
  modelId: "gemini-3-flash-preview",
  provider: "Google (via Ollama)",
  modelCardUrl: "https://blog.google/technology/ai/google-gemini-ai/#introducing-gemini",
  contextLength: { freeTier: "1M tokens" },
  maxOutput: { freeTier: "8,192 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" }
  ],
  pricing: { inputPrice: "1,600", outputPrice: "6,400", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions", "Responses API"],
  features: ["text_generation", "vision", "reasoning", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const luminaiData = {
  modelId: "luminai",
  provider: "Luminai (via Neosantara)",
  modelCardUrl: "#",
  contextLength: { freeTier: "8k tokens" },
  maxOutput: { freeTier: "2048 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" }
  ],
  pricing: { inputPrice: "1000", outputPrice: "3000", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const holo230bData = {
  modelId: "holo2-30b",
  provider: "Scaleway",
  modelCardUrl: "#",
  contextLength: { freeTier: "32k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" }
  ],
  pricing: { inputPrice: "1500", outputPrice: "4500", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const hermes2ProMistral7bData = {
  modelId: "hermes-2-pro-mistral-7b",
  provider: "Nous Research (via Cloudflare)",
  modelCardUrl: "https://huggingface.co/NousResearch/Hermes-2-Pro-Mistral-7B",
  contextLength: { freeTier: "24k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" }
  ],
  pricing: { inputPrice: "450", outputPrice: "1200", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const stableDiffusionImg2ImgData = {
  modelId: "stable-diffusion-v1-5-img2img",
  provider: "Runway (via Cloudflare)",
  modelCardUrl: "#",
  contextLength: { freeTier: "0 tokens" },
  maxOutput: { freeTier: "1 Image" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3" }
  ],
  pricing: { 
    inputPrice: "200", 
    outputPrice: "0", 
    currency: "Rp", 
    inputUnit: "per Image", 
    pricingUrl: "/en/about/billing-pricing" 
  },
  endpoints: ["Image Generations"],
  features: ["image_generation", "img2img"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["image"] }
};

export const tongyiDeepResearchData = {
  modelId: "tongyi-deepresearch-30b-a3b",
  provider: "Alibaba (via OpenRouter)",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "4029 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" }
  ],
  pricing: { inputPrice: "3333", outputPrice: "8333", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
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
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "100", outputPrice: "0", currency: "IDR", inputUnit: "per Image", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["OCR"],
  features: ["ocr", "vision"],
  inputOutput: { inputFormats: ["image"], outputFormats: ["text"] }
};

export const glmOcrData = {
  modelId: "glm-ocr",
  modelCardUrl: "#",
  contextLength: { freeTier: "0 tokens" },
  maxOutput: { freeTier: "Text" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
  { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
  { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
  { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
  { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
  { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
],
  tokenCredits: {
  docsUrl: "en/about/billing-pricing",
  freeBalance: "Promo Aktif"
},
  pricing: { inputPrice: "100", outputPrice: "0", currency: "IDR", inputUnit: "per Image", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["OCR"],
  features: ["ocr", "vision"],
  inputOutput: { inputFormats: ["image"], outputFormats: ["text"] }
};

export const grok41FastNonReasoningData = {
  modelId: "grok-4.1-fast-non-reasoning",
  provider: "xAI",
  modelCardUrl: "https://x.ai",
  contextLength: { freeTier: "2M tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
    { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
    { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
    { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
  ],
  tokenCredits: {
    docsUrl: "en/about/billing-pricing",
    freeBalance: "Promo Aktif"
  },
  pricing: { inputPrice: "0.30", outputPrice: "0.72", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const grokCodeFastData = {
  modelId: "grok-code-fast",
  provider: "xAI",
  modelCardUrl: "https://x.ai",
  contextLength: { freeTier: "256k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
    { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
    { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
    { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
  ],
  tokenCredits: {
    docsUrl: "en/about/billing-pricing",
    freeBalance: "Promo Aktif"
  },
  pricing: { inputPrice: "0.20", outputPrice: "1.50", currency: "USD", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const gemini3ProData = {
  modelId: "gemini-3-pro-preview",
  provider: "Google (via Ollama)",
  modelCardUrl: "https://blog.google/technology/ai/google-gemini-ai/#introducing-gemini",
  contextLength: { freeTier: "2M tokens" },
  maxOutput: { freeTier: "8,192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "0" },
    { tier: "Basic", requestsPerMin: "20", inputTokensPerMin: "10,000", outputTokensPerMin: "2,500" }
  ],
  pricing: { inputPrice: "40,536", outputPrice: "162,144", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions", "Responses API"],
  features: ["text_generation", "vision", "reasoning", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const geminiEmbeddingData = {
  modelId: "gemini-embedding-001",
  provider: "Google",
  modelCardUrl: "https://ai.google.dev/models/gemini",
  contextLength: { freeTier: "2048 tokens" },
  maxOutput: { freeTier: "Embedding Vector" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "15" }
  ],
  pricing: { inputPrice: "0", outputPrice: "0", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Embeddings"],
  features: ["embedding"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["embedding"] }
};

export const glm46vFlashData = {
  modelId: "glm-4.6v-flash",
  provider: "Zhipu AI",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3" }
  ],
  pricing: { inputPrice: "823", outputPrice: "2823", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "video", "reasoning", "streaming"],
  inputOutput: { inputFormats: ["text", "image", "video"], outputFormats: ["text"] }
};

export const glm47Data = {
  modelId: "glm-4.7",
  provider: "Zhipu AI",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "8192 tokens" },
  speed: { value: "Medium", unit: "latency" },
  rateLimits: [
    { tier: "Basic", requestsPerMin: "20" }
  ],
  pricing: { inputPrice: "1000", outputPrice: "3000", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "vision", "reasoning", "streaming"],
  inputOutput: { inputFormats: ["text", "image"], outputFormats: ["text"] }
};

export const gptOss20bData = {
  modelId: "gpt-oss-20b",
  provider: "Open Source",
  modelCardUrl: "#",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" }
  ],
  pricing: { inputPrice: "400", outputPrice: "1,600", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const kimiK2ThinkingData = {
  modelId: "kimi-k2:thinking",
  provider: "Moonshot AI",
  modelCardUrl: "#",
  contextLength: { freeTier: "128k tokens" },
  maxOutput: { freeTier: "128k tokens" },
  speed: { value: "Slow", unit: "latency" },
  rateLimits: [
    { tier: "Basic", requestsPerMin: "5" }
  ],
  pricing: { inputPrice: "16642", outputPrice: "49929", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "reasoning", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};

export const qwen332bData = {
  modelId: "qwen3-32b",
  provider: "Alibaba (via Groq)",
  modelCardUrl: "https://huggingface.co/Qwen/Qwen2.5-32B-Instruct",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "40,960 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3", inputTokensPerMin: "5,000", outputTokensPerMin: "2,000" },
    { tier: "Basic", requestsPerMin: "50", inputTokensPerMin: "20,000", outputTokensPerMin: "5,000" },
    { tier: "Standard", requestsPerMin: "1,000", inputTokensPerMin: "100,000", outputTokensPerMin: "25,000" },
    { tier: "Pro", requestsPerMin: "2,000", inputTokensPerMin: "200,000", outputTokensPerMin: "50,000" },
    { tier: "Enterprise", requestsPerMin: "4,000", inputTokensPerMin: "500,000", outputTokensPerMin: "125,000" }
  ],
  tokenCredits: {
    docsUrl: "en/about/billing-pricing",
    freeBalance: "Promo Aktif"
  },
  pricing: { inputPrice: "4828", outputPrice: "9823", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "function_calling", "json_mode", "streaming"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] },
  knownLimitations: ["Qwen 3 32B uniquely supports seamless switching between thinking mode and non-thinking mode within a single model."]
};

export const llamaGuard38bData = {
  modelId: "llama-guard-3-8b",
  provider: "Meta",
  modelCardUrl: "https://huggingface.co/meta-llama/Llama-Guard-3-8B",
  contextLength: { freeTier: "131k tokens" },
  maxOutput: { freeTier: "4096 tokens" },
  speed: { value: "Fast", unit: "latency" },
  rateLimits: [
    { tier: "Free", requestsPerMin: "3" }
  ],
  pricing: { inputPrice: "7,680", outputPrice: "480", currency: "IDR", inputUnit: "per 1M tokens", pricingUrl: "/en/about/billing-pricing" },
  endpoints: ["Chat Completions"],
  features: ["text_generation", "moderation"],
  inputOutput: { inputFormats: ["text"], outputFormats: ["text"] }
};