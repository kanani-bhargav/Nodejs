const { movieService } = require("../services");

/** create movie */
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;

    const movie = await movieService.createMovie(reqBody);
    if (!movie) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Movie create successfully!",
      data: { movie },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get movie list */
const getMovieList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { movie_title: { $regex: search, $options: "i" } },
        { movie_duration: { $regex: search, $options: "i" } },
        { movie_imdbRating: { $regex: search, $options: "i" } },
        { movie_released: { $regex: search, $options: "i" } },
        { movie_language: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await movieService.getMovieList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get movie list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete movie */
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieExists = await movieService.deleteMovie(movieId);
    if (!movieExists) {
      throw new Error("Movie not found!");
    }

    await movieService.deleteMovie(movieId);

    res.status(200).json({
      success: true,
      message: "Movie delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update movie details */
const updateMovieDetails = async (req, res) => {
  try{
   const movieId=req.params.movieId
   const movieExists=await movieService.updateMovieDetails(movieId)
   if(!movieExists){
     throw new Error("movie not found");
   }
   await movieService.updateMovieDetails(movieId,req.body)
   res.status(200).json({
     success:true,
     message:"Movie details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createMovie,
   getMovieList,
   deleteMovie,
   updateMovieDetails
 };
