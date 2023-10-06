const { bannerService } = require("../services");

const createBanner = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.banner_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }

    const banner = await bannerService.createBanner(reqBody);
    if (!banner) {
      throw new Error(` somthing went wrong`);
    }
    res.status(200).json({
      success: true,
      message: `banner create successfully`,
      banner,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getBannerList = async (req, res) => {
  try {
    const banner = await bannerService.getBannerList();
    if (!banner) {
      throw new Error(`banner not found`);
    }
    res.status(200).json({
      success: true,
      message: `banner list get successfully`,
      banner,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const bannerId = req.params.bannerId;

    const banner = await bannerService.getBanner(bannerId);
    if (!banner) {
      throw new Error(`banner not found`);
    }
    await bannerService.deleteBanner(bannerId);
    res.status(200).json({
      success: true,
      message: `banner delete successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBanner = async (req, res) => {
  try {
    const bannerId = req.params.bannerId;
    const updateBody = req.body;

    const banner = await bannerService.getBanner(bannerId);
    if (!banner) {
      throw new Error(` banner not found`);
    }
    await bannerService.updateBanner(bannerId, updateBody);
    res.status(200).json({
      success: true,
      message: `banner update successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createBanner,
  getBannerList,
  deleteBanner,
  updateBanner,
};
