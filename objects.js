var playlist = { artist: "song" };
function updatePlaylist(playlist, artist, song) {
playlist[artist] = song;
return playlist;
}
function removeFromPlaylist(playlist, artist) {
  var upplaylist = {[artist]}
  delete playlist.upplaylist
  return playlist
}
