const GlobalService = require("../services/global.servie");


class GlobalController {

    globalServiceInstance = new GlobalService();

    consultationsOfUser = async (req,res) => {
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


}



module.exports = GlobalController;