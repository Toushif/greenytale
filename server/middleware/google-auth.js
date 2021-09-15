const GoogleAuth = async (token) => {
    try {
        const imports = await import("google-auth-library");
        const { OAuth2Client } = imports.default;
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        console.log(`User ${payload.name} verified`);

        return true;
    } catch (error) {
        return false;
    }
};

export default GoogleAuth;
