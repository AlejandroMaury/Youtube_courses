import mysql from "serverless-mysql";

export const conn = mysql({
    config:
    {
        host: 'localhost',
        user: 'root',
        password: "123456",
        port: 3306,
        database: 'nextmysqlcrud'
    }
})


