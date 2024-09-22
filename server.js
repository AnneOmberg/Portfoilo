import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

const app = new Hono();

app.use("/*", cors());

app.use("/statics/*", serveStatic({ root: "./" }));

app.get('/json', async (c) => {
    const data = await readFile("assets/data.json", "utf-8")
    return c.json(JSON.parse(data))
})

//Brukte chatgtp: how do i handle POST requests? 
app.post('/submit.project', async (context) => {
    const data = await c.reg.json()
    console.log(data)
    return c.json({ message: 'project recived', data: body })
})

app.all('*', (c) => {
    return c.text('404 Not Found', 404);
})

const port = 3999;

console.log("Server is running YEAH");

serve({
    fetch: app.fetch,
    port,
});