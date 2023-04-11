const btn = document.querySelector('#btn')
const input = document.querySelector('#input')


async function getData(){
    const data = {
        model: "text-davinci-003",
        prompt: input.value,
        max_tokens: 512,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }
      const url = 'https://api.openai.com/v1/completions'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify(data)
      })

      const info = await response.json()
      const root = document.querySelector('#root')
      root.innerHTML = info.choices[0].text
      input.value = ''
}

btn.addEventListener('click', getData)