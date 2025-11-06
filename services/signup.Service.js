import signModel from "../model/signup.Model.js";

const signupService = async (data) => {
    try {
        const { username, password } = data;

        if (!username || !password) {
            throw new Error("Username and password are required");
        }

        const existingUser = await signModel.findOne({ username });
        if (existingUser) {
            throw new Error("Username already exists");
        }

        const newUser = new signModel({ username, password });
        await newUser.save();

        return newUser; // ✅ Return user to controller
    } catch (err) {
        console.error("Signup service error:", err);
        throw new Error("Signup Failed");
    }
};

export default signupService;
