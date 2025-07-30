import {createShortUrlWithUser , createShortUrlWithoutUser} from "../services/short_url.service.js"
import { getShortUrl } from "../dao/short_url.js"
import wrapAsync from "../utils/tryCatchWrapper.js"


export const CreateshortUrl = wrapAsync(async (req, res) => {
    const data = req.body;
    console.log(data)
    let shortUrl
    if (req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id,data.slug)
    } else {
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
})




export const redirectFromShortUrl = wrapAsync(async (req, res) => {


    const { id } = req.params
    console.log("Redirecting for ID:", id);
    const url = await getShortUrl(id)
    if (!url) throw new Error("Short URL not found")

    res.redirect(url.full_url)

})

export const CreateCustomshortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body;

    const shortUrl = await createShortUrlWithUser(url, customAlias);
    res.status(201).json({ shortUrl: process.env.APP_URL + shortUrl });
});