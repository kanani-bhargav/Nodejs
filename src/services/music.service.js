const { Music } = require("../models");

/**
 * Create Music
 * @param {object} reqBody
 * @returns {Promise<Music>}
 */
const createMusic = async (reqBody) => {
  return Music.create(reqBody);
};

/**
 * Get Music list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Music>}
 */
const getMusicList = async (filter, options) => {
  // return Music.find()
  return Music.find({ $or: [ {music_artist:"arijit"}]})
};

/**
 * Delete Music
 * @param {ObjectId} MusicId
 * @returns {Promise<Music>}
 */
const deleteMusic = async (MusicId) => {
  return Music.findByIdAndDelete(MusicId);
};

/**
 * music details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Music>}
 */

const updateMusicDetails=async (musicId,updateBody)=>{
  return  Music.findByIdAndUpdate(musicId,{$set:updateBody})
}

module.exports = {
    createMusic,
    getMusicList,
    deleteMusic,
    updateMusicDetails
};
