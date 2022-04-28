const UserService = require('../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new User using UserService", () =>{ 
        const user = UserService.create(1, "gabrielaesquivel", "Gabriela");
        expect(user.username).toBe("gabrielaesquivel");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    }),
    test("2. Get all user data in a list", () =>{ 
        const user = UserService.create(1, "gabrielaesquivel", "Gabriela");
        const userInfoList = UserService.getInfo(user);

        expect(userInfoList[0]).toBe("gabrielaesquivel");
        expect(userInfoList[1]).toBe(1);
        expect(userInfoList[2]).toBe("Gabriela");
        expect(userInfoList[3]).toBe("Sin bio");
      
    }),
    test("3. Update username", () => {
        const user = UserService.create(1, "gabrielaesquivel", "Gabriela");
        UserService.updateUsername(user, "andrearueda");

        expect(user.username).toBe("andrearueda")
    }),
    test("4. Given a list of users five me the list of usernames", () => {
        const user1 = UserService.create(1, "gabrielaesquivel1", "Gabriela1");
        const user2 = UserService.create(2, "gabrielaesquivel2", "Gabriela2");
        const user3 = UserService.create(3, "gabrielaesquivel3", "Gabriela3");

        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("gabrielaesquivel1")
        expect(usernames).toContain("gabrielaesquivel2")
        expect(usernames).toContain("gabrielaesquivel3")

    })
})