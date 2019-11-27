export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class="col-10 m-auto bg-light text-center">
    <img
      src="${this.albumArt}"
      alt="${this.album}"
      class="results-image"
    />
    <button class="btn" onclick="app.songsController.previewSong('${this._id}')">
      <i class="fas fa-play"></i>
    </button>
    <div>
      <p class="m-0">'${this.artist}' -</p>
      <p class="m-0">'${this.title}'</p>
    </div>
  </div>
        `;
  }

  get previewTemplate() {
    return `<p class="text-left">now playing</p>
    <img src="${this.albumArt}" alt="${this.album}" />
    <h1>'${this.artist}' - '${this.title}'</h1>
    <p>album: '${this.album}' | '${this.price}'</p>
    <audio controls preload="none">
          <source src="${this.preview}"</audio>
  `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
