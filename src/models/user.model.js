import sql from "mssql"


// we did not use query() but query`` instead
export async function getAllUsers(){
    const result = await sql.query`
    SELECT Id, FirstName, LastName, Email, Role, IsActive, CreatedAt, UpdatedAt
    FROM Users
    ORDER BY Id DESC
    `
    return result.recordset
}

export async function getUserById(id){
    const result = await sql.query`
    SELECT Id, FirstName, LastName, Email, Role, IsActive, CreatedAt, UpdatedAt
    FROM Users
    WHERE Id = ${id}    
    `
    return result.recordset[0]
}

export async function getUserByEmail(email){
    const result = await sql.query`
    SELECT *
    FROM Users
    WHERE Email = ${email}
    `
    return result.recordset[0]
}

export async function createUser({firstName, lastName, passwordHash, email, role = "user"}){
    const result = await sql.query`
    INSERT INTO Users(FirstName, LastName, Email, PasswordHash, Role)
    OUTPUT INSERTED.Id, INSERTED.FirstName, INSERTED.LastName, INSERTED.Email, INSERTED.Role, INSERTED.IsActive, INSERTED.CreatedAt, INSERTED.UpdatedAt
    VALUES (${firstName}, ${lastName}, ${email}, ${passwordHash}, ${role})
    `
    return result.recordset[0]
}


