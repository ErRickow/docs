export const ModelGrid = () => {
  const modelGroups = [
    {
      title: "Chat models:",
      link: "/en/models-overview#chat-models",
      hasViewAll: true,
      items: [
        {
          name: "DeepSeek R1",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/deepseek-color.webp",
          description: "SOTA reasoning model with 671B parameters, excelling in math, coding, and complex logic.",
          link: "/models/deepseek-r1"
        },
        {
          name: "Claude 4.5 Sonnet",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/claude-color.webp",
          description: "Anthropic's latest flagship, balancing intelligence, speed, and vision capabilities.",
          link: "/models/claude-4.5-sonnet"
        },
        {
          name: "Nusantara Base",
          icon: "/logo/neosantara_logo.svg",
          description: "Optimized for Indonesian context, providing balanced performance and cost-efficiency.",
          link: "/models/nusantara-base"
        },
        {
          name: "Gemini 3 Flash",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/google-color.webp",
          description: "Google most intelligent model built for speed, combining frontier intelligence with superior search and grounding",
          link: "/models/gemini-3-flash"
        },
        {
          name: "Grok 4.1 Fast",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/xai.webp",
          description: "xAIs latest tool-calling model with massive 2M context and rapid inference.",
          link: "/models/grok-4.1-fast-non-reasoning"
        },
        {
          name: "Kimi K2",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/kimi-color.webp",
          description: "Agentic powerhouse with 1T parameters and native long-context tool use.",
          link: "/models/kimi-k2"
        }
      ]
    },
    {
      title: "Image models:",
      link: "/en/capability/image-generation",
      hasViewAll: true,
      items: [
        {
          name: "Imagen 4 Fast",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/google-color.webp",
          description: "Google's fastest high-quality image generation model via Neosantara API.",
          link: "/en/capability/image-generation"
        },
        {
          name: "Neosantara Gen 2045",
          icon: "/logo/neosantara_logo.svg",
          description: "Cinematic and artistic Indonesian-themed generations with optimal speed.",
          link: "/models/neosantara-gen-2045"
        }
      ]
    },
    {
      title: "Reasoning models:",
      link: "/en/capability/reasoning",
      hasViewAll: true,
      items: [
        {
          name: "DeepSeek R1",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/deepseek-color.webp",
          description: "Native chain-of-thought reasoning for high-accuracy problem solving.",
          link: "/en/capability/reasoning"
        },
        {
          name: "Kimi K2 Thinking",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/kimi-color.webp",
          description: "Advanced reasoning model optimized for math and complex synthesis.",
          link: "/en/capability/reasoning"
        }
      ]
    },
    {
      title: "Vision & OCR:",
      link: "/en/capability/ocr",
      hasViewAll: true,
      items: [
        {
          name: "DeepSeek OCR",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/deepseek-color.webp",
          description: "High-precision text extraction from documents and complex images.",
          link: "/models/deepseek-ocr"
        },
        {
          name: "Claude 4.5 Vision",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/claude-color.webp",
          description: "Industry-leading visual analysis and chart interpretation.",
          link: "/en/capability/image-understanding"
        }
      ]
    },
    {
      title: "Embedding models:",
      link: "/en/capability/embeddings",
      hasViewAll: false,
      items: [
        {
          name: "Nusa Embedding",
          icon: "/logo/neosantara_logo.svg",
          description: "Optimized for Indonesian semantic search and RAG pipelines.",
          link: "/models/nusa-embedding-0001"
        },
        {
          name: "OpenAI v3 Small",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/openai.webp",
          description: "Highly efficient and cost-effective embedding for search and clustering.",
          link: "/models/text-embedding-3-small"
        }
      ]
    },
    {
      title: "Audio models:",
      link: "/en/capability/audio-transcription",
      hasViewAll: false,
      items: [
        {
          name: "Whisper Large v3 Turbo",
          icon: "https://unpkg.com/@lobehub/icons-static-webp@latest/dark/openai.webp",
          description: "OpenAI's fastest speech recognition model with multilingual support.",
          link: "/models/whisper-large-v3-turbo"
        }
      ]
    }
  ];

  const getGridStyle = (index) => {
    const styles = [
      { gridRow: "span 4" },
      { gridRow: "span 2" },
      { gridRow: "span 2" },
      { gridRow: "span 2" },
      { gridRow: "span 1" },
      { gridRow: "span 1" }
    ];
    return styles[index] || {};
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 lg:gap-4 max-w-[1080px] mx-auto mt-7">
      {modelGroups.map((group, index) => {
        const models = group.items;
        return (
          <a
            href={group.link}
            key={index}
            className="rounded-xl bg-white dark:bg-[#13171B] border border-[#d9e1ec] dark:border-gray-700 overflow-hidden px-4 py-3 flex flex-row gap-0 justify-between no-underline hover:border-orange-500/50 transition-all duration-200"
            style={getGridStyle(index)}
          >
            <div className={"flex items-start flex-col " + (group.hasViewAll ? "justify-between" : "justify-center")}>
              <h3 className="text-base text-left text-[#171a1e] dark:text-white font-bold m-0 leading-[24px]">
                {group.title}
              </h3>
              {group.hasViewAll && (
                <div className="flex mt-4 flex-1 items-end">
                  <div className="flex items-center border-none">
                    <p className="text-xs font-semibold text-neutral-500 dark:text-gray-400 mr-2 whitespace-nowrap uppercase tracking-wider">
                      View all
                    </p>
                    <svg width={5} height={8} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L4 4L1 7" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-4 items-center self-baseline">
              <div className={"flex gap-1" + (group.hasViewAll ? " pb-4 flex-col" : "flex-row")}>
                {models.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center border-none gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-md p-1"
                    title={item.description}
                  >
                    <img
                      src={item.icon}
                      className={"my-0 object-contain " + (group.hasViewAll ? " min-w-5 h-5 " : " min-w-7 h-7")}
                      alt={item.name}
                    />
                    {group.hasViewAll && (
                      <p className="text-sm text-left text-neutral-700 dark:text-gray-200 whitespace-nowrap font-medium leading-[26px]">
                        {item.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {!group.hasViewAll && (
                <svg width={5} height={8} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.930237 1.11548L4.06977 4.00009L0.930237 6.88471" stroke="currentColor" strokeLinecap="round" />
                </svg>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};
