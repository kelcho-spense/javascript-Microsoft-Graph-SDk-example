// Create an authentication provider
const authProvider = {
    getAccessToken: async () => {
        // Call getToken in auth.js
        return await getToken();
    }
};
// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });
//Get user info from Graph
async function getUser() {
    ensureScope('user.read');
    const DisplayName = await graphClient.api('/me').select('id,displayName').get();
    sessionStorage.setItem('displayName', DisplayName.displayName);
    return DisplayName;
}








