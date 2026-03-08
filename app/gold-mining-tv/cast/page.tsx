import Link from 'next/link';

export default function CastPage() {
  const castMembers = [
    {
      id: 1,
      name: 'Cast Member One',
      role: 'Lead Prospector',
      bio: 'A passionate gold mining enthusiast with years of experience in the field.',
    },
    {
      id: 2,
      name: 'Cast Member Two',
      role: 'Equipment Expert',
      bio: 'Specializes in mining machinery and equipment optimization for maximum efficiency.',
    },
    {
      id: 3,
      name: 'Cast Member Three',
      role: 'Field Coordinator',
      bio: 'Manages mining operations and ensures all claims are properly developed.',
    },
    {
      id: 4,
      name: 'Cast Member Four',
      role: 'Gold Recovery Specialist',
      bio: 'Expert in identifying and extracting gold from challenging mining sites.',
    },
    {
      id: 5,
      name: 'Cast Member Five',
      role: 'Business Manager',
      bio: 'Handles the financial and logistical aspects of large-scale mining operations.',
    },
    {
      id: 6,
      name: 'Cast Member Six',
      role: 'Exploration Lead',
      bio: 'Scouts new mining locations and evaluates the potential of untapped claims.',
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/gold-mining-tv" className="text-gold-400 hover:text-gold-300 mb-4 inline-block">
            ← Back to Gold Mining TV
          </Link>
          <h1 className="text-4xl font-bold text-gold-400 mb-2">Cast Bios</h1>
          <p className="text-earth-200">Meet the people behind the gold</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {castMembers.map((member) => (
            <div key={member.id} className="bg-white border-2 border-earth-300 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="aspect-square bg-earth-200 flex items-center justify-center">
                <span className="text-earth-600">Photo Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-earth-800 mb-1">{member.name}</h3>
                <p className="text-gold-600 font-semibold mb-3">{member.role}</p>
                <p className="text-earth-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
