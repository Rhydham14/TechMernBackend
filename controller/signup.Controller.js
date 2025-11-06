import signupService from "../services/signup.Service.js";

const signupController = async (req, res) => {
    try {
        const user = await signupService(req.body);

        res.status(201).json({
            message: "User signed up successfully",
            user: { username: user.username },
        });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default signupController;
