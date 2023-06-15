const GlobalService = require("../services/global.servie");


class GlobalController {

    globalServiceInstance = new GlobalService();

    consultationsOfUser = async (req, res) => {
        try {

            const userId = req.user._id;
            const astrologerId = req.query

            if (!astrologerId) {
                return res.status(404).json({
                    success: false,
                    message: "please provide Astrologer id"
                })
            }
            else {
                const data = await this.globalServiceInstance.allConsultationOfUser(userId)

                return res.status(data.errorCode).json({ data })

            }
        } catch (error) {
            return res.status(500).json({
                success: true,
                message: error.message
            })
        }
    }


    // here in purchase histroy we need the person id who made the purchase from frontend as if admin made the purchase for any perticular user or astrologer it will create a issue so in payload  we need all the things
    createPurchaseHistory = async (req, res) => {
        try {
            const { data } = req.body

            if (!data) {
                return res.status(404).json({
                    success: false,
                    error: false,
                    message: "please provide data inside data object",
                })
            }
            else {
                const purchaseCreated = await this.globalServiceInstance.createPurchaseHistory(data)

                return res.status(purchaseCreated.errorCode).json({ purchaseCreated })
            }

        } catch (error) {
            return res.status(500).json({
                success: false,
                error: true,
                message: error.message,
            })
        }
    }

    getRatingReviewByUser = async(req,res)=>{
        try {
            const ratingsAndReviews = await  this.globalServiceInstance.getRatingAndReview(req.user._id)

            return res.status(ratingsAndReviews?.errorCode).json({ratingsAndReviews})
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: true,
                message: error.message,
                errorCode: 500,
                data: ""
            })
        }
       
   
    

    }
}



module.exports = GlobalController;