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
    })
})