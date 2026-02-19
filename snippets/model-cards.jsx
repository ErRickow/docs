export const ModelCards = ({ capability }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50/50 dark:bg-white/5 animate-pulse h-32"></div>
      ))}
    </div>
  );
  
  if (models.length === 0) return (
    <div className="p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-900/50 rounded-lg text-sm text-yellow-700 dark:text-yellow-400">
      No models currently listed for this capability.
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {models.map(model => (
        <div key={model.name} className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50/50 dark:bg-white/5 hover:border-orange-500/50 transition-all duration-200">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h4 className="text-base font-bold m-0 leading-tight">{model.name}</h4>
            <span className="shrink-0 text-[10px] px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full font-bold uppercase tracking-tight">{model.provider}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed h-8">{model.description}</p>
          <div className="flex gap-6 border-t border-gray-200 dark:border-gray-800 pt-3">
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
  );
};
