import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = "";
  let songs = store.State.songs;
  songs.forEach(song => (template += song.Template));
  document.querySelector("#songs").innerHTML = template;
}

// Draws preview to page
function _drawPreview() {
  let template = "";
  let preview = store.State.preview;
  template = preview.previewTemplate;
  document.querySelector("#preview").innerHTML = template;
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe("songs", _drawResults);
    store.subscribe("preview", _drawPreview);
    _drawResults();
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  // NOTE places preview of song on main screen
  previewSong(id) {
    SongService.previewSong(id);
    _drawPreview();
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {}

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}
}
