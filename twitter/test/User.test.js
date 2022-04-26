const User = require('../app/models/User');

describe('Create an User Object', () => {
    // Invocar el código para usar en la app
    const user = new User(1, "Andrea Gabriela", "Biografía", "dateCreated", "lastUpdated")

    // Validación de los resultados del código:
    expect(user.id),toBe(1);
    expect(user.username).toBe("Andrea Gabriela");
    expect(user.bio).toBe("Biografía");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");

})