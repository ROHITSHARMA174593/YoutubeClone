import history from "../Model/history.js"

export const historyController = async(req,res) => {
    const historyData = req.body;
    const addToHistory = new history(historyData)
    try {
        await addToHistory.save()
        res.status(200).json("added to history")
    } catch (err) {
        res.status(400).json(err.message)
        return;
    }
}


export const getAllHistoryController = async(req,res) => {
    try{
        const files = await history.find()
        res.status(200).send(files)
    }catch(err){
        res.status(400).json(err.message)
        return;
    }
}


export const deleteHistory = async(req,res) => {
    const {userId : userId} = req.params
    try {
        await history.deleteMany({
            viewers: userId
        })
        res.status(200).json("Remove from History...")
    } catch (err) {
        res.status(400).json(err.message)
        return;
    }
}