const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];


function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  return playlists.flatMap((playlist, playlistIndex) =>
    playlist.map((track, trackIndex) => ({
      ...track,
      source: [playlistIndex, trackIndex]
    }))
  );
}

function scoreTracks(tracks) {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

function dedupeTracks(tracks) {
  const seen = new Set();

  return tracks.filter(track => {
    if (seen.has(track.trackId)) {
      return false;
    }

    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};

  return tracks.filter(track => {
    const artist = track.artist;

    if ((artistCounts[artist] || 0) >= maxPerArtist) {
      return false;
    }

    artistCounts[artist] = (artistCounts[artist] || 0) + 1;
    return true;
  });
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);

  return buildSchedule(quotaEnforced);
}
