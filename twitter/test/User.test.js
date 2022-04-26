const User = require('../app/models/User');

describe('Unit Tests for User Class', () => {
    test('Create an User Object', () => {
        // Invocar el código para usar en la app
        const user = new User(1, "GabrielaEsquivel", "Andrea Gabriela", "Biografía")

        // Validación de los resultados del código:
        expect(user.id).toBe(1);
        expect(user.username).toBe("GabrielaEsquivel");
        expect(user.name).toBe("Andrea Gabriela");
        expect(user.bio).toBe("Biografía");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })

})