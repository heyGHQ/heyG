export const WEBVIEWS = {
  CHAT_GPT: {
    id: "CHAT_GPT",
    url: "https://chat.openai.com/",
    name: "Chat GPT",
    /**
     * To send the content of the input into the webview
     *
     * @param prompt string
     * @returns
     */
    sendPrompt: `if (document.getElementsByTagName("textarea")[0]) {
          document.getElementsByTagName("textarea")[0].value = '\${ prompt }';
          setTimeout(() => document.querySelector("textarea ~ button").click(), 1)
      }`,
    /**
     * If false the window show
     */
    isPromptAvailable: `!!document.getElementsByTagName("textarea")[0]`,
    /**
     * The HTML display in the result drawer on top of the input
     */
    getResponse: 
      `[...document.querySelectorAll('.markdown.prose')].pop()?.innerHTML`,
  },
};
