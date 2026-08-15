export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8" aria-busy="true">
      <div className="page-header">
        <div className="skeleton h-8 w-72 max-w-full rounded" />
        <div className="skeleton h-4 w-96 max-w-full rounded mt-2" />
      </div>
      <div className="example-grid">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="example-card">
            <div className="skeleton h-5 w-3/4 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
