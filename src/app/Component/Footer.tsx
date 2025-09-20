export default function Footer({txt}: {txt: string}) {
  return (
    <footer className="bg-black border-t-2 border-green-400 py-6 mt-auto" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'}}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-green-200">{txt}</p>
        <p className="text-green-300 text-sm mt-2">Computer Science @ 2025</p>
      </div>
    </footer>
  );
}