export const AppConfig = {
    mockApiDomain: {
        jsonPlaceholder: "/mockJsonPlaceholder",
    },
    useMockResponse: process.env.NODE_ENV === "production" ? false : true
}
