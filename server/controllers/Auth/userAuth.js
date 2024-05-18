import axios from "axios";


export const userAuth = async (req, res) => {
    const { username } = req.body;
    try {
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "efe8b52b-df29-4c65-9236-c49f6966e1ac" } } //pass your own project private key 
        );
        return res.status(201).json(response.data);
    } catch (error) {
        console.error("Error:", error.message);  
        return res.status(500).json(error.message);
    }
}
