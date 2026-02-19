export const ModelCards = ({ capability }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    fetch('https://api.neosantara.xyz/v1/public/pricing')
      .then(res => res.json())
      .then(json => {
        if (json.data) {
          // Filter model berdasarkan capability yang diminta
          const filtered = json.data.filter(m => 
            m.capabilities && m.capabilities.includes(capability)
          );
          setModels(filtered);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch pricing:', err);
        setLoading(false);
      });
  }, [capability]);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50/50 dark:bg-white/5 animate-pulse h-32"></div>
      ))}
    </div>
  );
  
  if (models.length === 0) return (
    <div className="p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-900/50 rounded-lg text-sm text-yellow-700 dark:text-yellow-400">
      No models currently listed for this capability.
    </div>
  );

  const displayedModels = isExpanded ? models : models.slice(0, 6);
  const hasMore = models.length > 6;

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedModels.map(model => (
          <div key={model.name} className="group border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50/50 dark:bg-white/5 hover:border-orange-500/50 transition-all duration-200 flex flex-col">
            <div className="flex justify-between items-start gap-2 mb-2">
              <div className="flex flex-col gap-1 overflow-hidden">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold m-0 leading-tight truncate">{model.name}</h4>
                  <button 
                    onClick={() => handleCopy(model.name)}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-orange-500"
                    title="Copy Model ID"
                  >
                    {copiedId === model.name ? (
                      <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    )}
                  </button>
                </div>
                <span className="shrink-0 text-[10px] w-fit px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full font-bold uppercase tracking-tight">{model.provider}</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed h-8">{model.description}</p>
            <div className="mt-auto flex gap-6 border-t border-gray-200 dark:border-gray-800 pt-3">
              <div>
                <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">Input</span>
                <span className="font-mono text-[11px] font-semibold">{model.input}</span>
              </div>
              <div>
                <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">Output</span>
                <span className="font-mono text-[11px] font-semibold">{model.output}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-orange-500 transition-colors py-2 px-4 border border-gray-200 dark:border-gray-800 rounded-full bg-gray-50/50 dark:bg-white/5"
          >
            {isExpanded ? 'Show Less' : `Show All (${models.length})`}
          </button>
        </div>
      )}
    </div>
  );
};
