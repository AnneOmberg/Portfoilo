import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono()

// app.use("/*", cors())

app.get("/", async(c)=>{
    return c.json({
        data: [
            {
                id: crypto.randomUUID(),
                title: "Project something",
                start: new Date("2020-11-04"),
                end: new Date("2023-04-20")
            },
            {
                id: crypto.randomUUID(),
                title: "Project anything",
                start: new Date("2015-10-30"),
                status: "Accuring"
            }
        ]
    })
})


export default app