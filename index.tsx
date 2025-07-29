import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">Halo, Saya [Luccane]</h1>
      <p className="text-lg text-center max-w-xl mb-4">
        Seorang web developer pemula yang sedang belajar Next.js & Tailwind CSS. Saya suka ngoding, desain UI, dan kadang main game juga.
      </p>

      <div className="bg-gray-800 p-4 rounded-xl w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2">📇 Biodata</h2>
        <p>Nama: [Luccane]</p>
        <p>Umur: [20]</p>
        <p>Domisili: [Tangerang Selatan]</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2">📞 Kontak</h2>
        <ul className="list-disc ml-5">
          <li>WhatsApp: <a href="https://wa.me/6283198520706" className="text-blue-400">Chat Saya</a></li>
          <li>Email: [luccanekaivanadmaja@gmail.com]</li>
          <li>Instagram: <a href="https://instagram.com/rasaka_vibes" className="text-pink-400">@username</a></li>
        </ul>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2">🔗 Link Grup & Channel</h2>
        <ul className="list-disc ml-5">
          <li><a href="https://chat.whatsapp.com/E3jreeomzmi5j3Szz8HeKS?mode=ac_t" className="text-green-400">Join Grup Telegram</a></li>
          <li><a href="https://whatsapp.com/channel/0029VanGZ6lEVccMmymNzv17" className="text-green-400">Lihat Channel</a></li>
        </ul>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">🎵 Playlist Musik</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/ID_SPOTIFY_KAMU"
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
    </main>
  );
}
