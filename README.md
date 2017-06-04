### A simple url shortening tool to remove reference from a redirected url

### Context:
I subscribed to a lot of email newsletters, and if you also do, you probably notice that the url included in the newsletters often involves source information of which Newsletter the url comes from.
### Example:
`https://eater.net/?utm_source=DailyDrip+Homepage+Newsletter&utm_campaign=5a77874d7b-EMAIL_CAMPAIGN_2017_05_06&utm_medium=email&utm_term=0_1e4a41c1c6-5a77874d7b-162314749`

This is the url that I got redirected to when clicking from an issue of the DailyDrip Newsletter, where actually the true url is only https://eater.net

The rationale behind shortening the url is purely for Pocket to more easily recognise an article.

### How it works:
* the extension when clicked would get the url of the current tab
* check if the url can be shorted based solely on checking if it contains "?utm" or in some rare case "?ref="
* if the url can be shorted, it would refresh the page to the shorted url
* if the url cannot be shorted, a message would appear below the extension icon indicating so

### How to use it:
* `git clone` the repo
* load the repo directory as "unpacked extension", learn [How?](https://developer.chrome.com/extensions/getstarted#unpacked)
* on an article page, click on the extension icon
* enjoy the clean url!
