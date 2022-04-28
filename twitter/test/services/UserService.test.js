const UserService = require('../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new User using UserService", () =>{ 
        const user = UserService.create(1, "gabrielaesquivel", "Gabriela");
        expect(user.username).toBe("gabrielaesquivel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})