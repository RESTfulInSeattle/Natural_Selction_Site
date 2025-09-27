import Image from "next/image";
import Link from "next/link";

export default function Publishing() {
  return (
    <div className="min-h-screen gradient-primary">
      {/* Hero Section */}
      <div className="gradient-mesh text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/content/pages/2015/10/publishing/images/ns-music_header_white.png"
            alt="Natural Selection Music Publishing"
            width={550}
            height={94}
            className="mx-auto mb-4"
            priority
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Music Publishing & Licensing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Original sample-free compositions available for film, television, advertising, and commercial projects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-300">Music That Tells Your Story</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            Music invokes emotion, and can help take the viewer to that place in the scene. 
            Natural Selection Music&apos;s diverse catalog of moods should have one your movie is looking for.
          </p>
          <div className="gradient-primary rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-gray-300 mb-2">Licensed through</p>
            <p className="text-2xl font-bold text-white">Musica De NS</p>
            <p className="text-sm text-gray-300">ASCAP ID: 88537</p>
          </div>
        </div>

        {/* Featured Licensing Playlist */}
        <div className="gradient-primary rounded-lg p-8 mb-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">Licensing Catalog</h2>
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
             <iframe 
                width="100%" 
                height="400" 
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1538598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                className="rounded"
              />
              <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
                <a href="https://soundcloud.com/naturalselection" title="NaturalSelection" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>NaturalSelection</a> · <a href="https://soundcloud.com/naturalselection/sets/publishing-versions" title="Publishing Versions" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Publishing Versions</a>
              </div>
            </div>
          </div>
        </div>

        {/* Available Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">Available Tracks</h2>
          <p className="text-center text-gray-300 mb-8">
            All tracks are original, sample-free compositions ready for licensing
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "No Reason Why ft Moqita", id: "882026142", mood: "Uplifting, Inspirational" },
              { title: "Loving the Sunshine ft Moqita", id: "882025133", mood: "Warm, Positive" },
              { title: "Beautiful World ft Moqita", id: "882024415", mood: "Cinematic, Hopeful" },
              { title: "Healing Dub ft Moqita", id: "381004313", mood: "Ambient, Meditative" },
              { title: "Making With", id: "882044503", mood: "Creative, Energetic" },
              { title: "What You&apos;re Feeling ft Moqita", id: "882025297", mood: "Emotional, Introspective" },
              { title: "Holler ft Moqita", id: "882026278", mood: "Urban, Dynamic" },
              { title: "Resistance ft Moqita", id: "882025892", mood: "Powerful, Dramatic" },
              { title: "The Heart Area ft Moqita", id: "882026143", mood: "Soulful, Deep" },
              { title: "Too Slow ft Moqita", id: "882026410", mood: "Laid-back, Groove" }
            ].map((song, index) => (
              <div key={index} className="gradient-primary p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">{song.title}</h4>
                <p className="text-sm text-gray-300 mb-3">{song.mood}</p>
                <div className="text-xs text-gray-300  p-2 rounded">
                  <div className="font-mono">ASCAP ID: {song.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Call to Action */}
        <div className="gradient-mesh text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to License Our Music?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Contact us to discuss your project and find the perfect musical fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Licensing Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}