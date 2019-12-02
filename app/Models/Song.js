export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "200x200");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class="col-10 mt-2 ml-auto mr-auto mb-auto bg-light text-center shadow results-template">
    <div class="results-container">
    <img
      src="${this.albumArt}"
      alt="${this.album}"
      class="results-image"
    />
    <button class="btn" onclick="app.songsController.previewSong('${this._id}')">
      <i class="fas fa-play text-info"></i>
    </button>
    </div>
    <div>
      <p class="m-0">${this.artist} -</p>
      <p class="m-0">${this.title}</p>
    </div>
  </div>
        `;
  }

  get previewTemplate() {
    return `<p class="text-left">now playing</p>
    <img src="${this.albumArt}" alt="${this.album}" class="shadow preview-img"/>
    <button
      type="button"
      class="btn btn-primary btn-sm float-right align-self-right shadow"
      onclick="app.songsController.addSong('${this._id}')"
    >
      +
    </button>
    <h2 class="preview-info">${this.artist} - ${this.title}</h2>
    <p>album: ${this.album} | $${this.price}</p>
    <audio controls preload="none">
          <source src="${this.preview}"</audio>
  `;
  }

  get playlistTemplate() {
    return `
    <div class="col-10 mt-1 ml-auto mr-auto mb-3 bg-white shadow">
    <button
      type="button"
      class="btn btn-danger btn-sm rounded-circle float-right align-self-right"
      onclick="app.songsController.removeSong('${this._id}')"
    >
      X
    </button>
    <p class="m-0">${this.artist}</p>
    <p class="m-0">${this.title}</p>
  </div>
        `;
  }
}
