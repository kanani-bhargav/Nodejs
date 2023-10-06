const express = require("express");
const reviewRouter = require("./review.route");
const commentRouter = require("./comment.route")
const tagRouter = require("./tag.route")
const blogRouter = require("./blog.route")
const invoiceRouter = require("./invoice.route")
const paymentRouter = require("./payment.route")
const employeeRouter = require("./employee.route")
const supplierRouter = require("./supplier.route")
const buyerRouter = require("./buyer.route")
const customerRouter = require("./customer.route")

const inventoryRouter = require("./inventory.route")
const recipeRouter = require("./recipe.route")
const eventRouter = require("./event.route")
const ticketRouter = require("./ticket.route")
const subscriptionRouter = require("./subscription.route")
const vehicleRouter = require("./vehicle.route")
const rentalRouter = require("./rental.route")
const forumRouter = require("./forum.route")
const pollRouter = require("./poll.route")
const surveyRouter = require("./survey.route")

const sport_nameRouter = require("./sport.name.route.js")
const sport_founderRouter = require("./sport.founder.route.js")
const sport_contactRouter = require("./sport.contact.route.js")
const sport_galleryRouter = require("./sport.gallery.route.js")
const sport_teamRouter = require("./sport.team.route.js")
const sport_categoryRouter = require("./sport.category.route.js")
const sport_playerRouter = require("./sport.player.route.js")
const sport_coachRouter = require("./sport.coach.route.js")
const sport_eventRouter = require("./sport.event.route.js")
const sport_resultRouter = require("./sport.result.route.js")
const sport_newsRouter = require("./sport.news.route.js")

const crypto_nameRouter = require("./crypto.name.route.js")
const crypto_founderRouter = require("./crypto.founder.route.js")
const crypto_typeRouter = require("./crypto.type.route.js")
const crypto_ratingRouter = require("./crypto.rating.route.js")
const crypto_faqRouter = require("./crypto.faq.route.js")
const crypto_linksRouter = require("./crypto.link.route.js")
const crypto_clientRouter = require("./crypto.client.route.js")
const crypto_calendarRouter = require("./crypto.calendar.route.js")
const crypto_newsRouter = require("./crypto.news.route.js")
const crypto_newsletterRouter = require("./crypto.newsletter.route.js")
const crypto_potentialRouter = require("./crypto.potential.route.js")

const router = express.Router()

router.use("/review",reviewRouter);
router.use("/comment",commentRouter);
router.use("/tag",tagRouter);
router.use("/blog",blogRouter);
router.use("/invoice",invoiceRouter);
router.use("/payment",paymentRouter);
router.use("/employee",employeeRouter);
router.use("/supplier",supplierRouter);
router.use("/buyer",buyerRouter);
router.use("/customer",customerRouter);

router.use("/inventory",inventoryRouter);
router.use("/recipe",recipeRouter);
router.use("/event",eventRouter);
router.use("/ticket",ticketRouter);
router.use("/subscription",subscriptionRouter);
router.use("/vehicle",vehicleRouter);
router.use("/rental",rentalRouter);
router.use("/forum",forumRouter);
router.use("/poll",pollRouter);
router.use("/survey",surveyRouter);

router.use("/sport_name",sport_nameRouter);
router.use("/sport_founder",sport_founderRouter);
router.use("/sport_contact",sport_contactRouter);
router.use("/sport_gallery",sport_galleryRouter);
router.use("/sport_team",sport_teamRouter);
router.use("/sport_category",sport_categoryRouter);
router.use("/sport_player",sport_playerRouter);
router.use("/sport_coach",sport_coachRouter);
router.use("/sport_event",sport_eventRouter);
router.use("/sport_result",sport_resultRouter);
router.use("/sport_news",sport_newsRouter);

router.use("/crypto_name",crypto_nameRouter);
router.use("/crypto_founder",crypto_founderRouter);
router.use("/crypto_type",crypto_typeRouter);
router.use("/crypto_rating",crypto_ratingRouter);
router.use("/crypto_faq",crypto_faqRouter);
router.use("/crypto_links",crypto_linksRouter);
router.use("/crypto_client",crypto_clientRouter);
router.use("/crypto_calendar",crypto_calendarRouter);
router.use("/crypto_news",crypto_newsRouter);
router.use("/crypto_newsletter",crypto_newsletterRouter);
router.use("/crypto_potential",crypto_potentialRouter);


module.exports = router
