// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

const API_KEY = 'AIzaSyBzeM9HVxn1bcJP_4KL_AyN96OMczU35BY'

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    })
  }

  const imageBinary = await convertStream2base64(req.body)

  const data = {
    contents: [
      {
        parts: [
          {
            text:`이 이미지는 주간 점심 메뉴표이다
표로 그려져 있으며 각 행은 위에서부터 월,화,수,목,금의 식단을 나타낸다
각 행의 왼쪽에는 영어로 요일과 숫자로 몇일인지 표시되어 있고
중간에는 메뉴가 적혀있다
메뉴는 주황색 큰 글씨로 적힌 것이 mainMenu이고 
검정색 작은 글씨로 적힌것이 subMenu이다 subMenu는 보통 두 줄까지 표시되어 있다
각 메뉴는 공백으로 구분되어 있다. 다만 가끔 다른 공백보다 좁은 공백이 있는데 그것은 메뉴이름 내에 띄어쓰기가 있는 것이므로 주의해서 구분하라
모든 메뉴의 이름은 실제로 존재하는 음식의 이름이다 해상도가 낮아서 잘못 인식된 메뉴이름은 적당한 이름으로 바꾸어도 된다
만약 표에 가로줄로 구분된 행에 mainMenu나 subMenu로 보이는 데이터가 없다면 빈배열로 두어야한다
이를 참고해서 아래 형식의 json 데이터를 출력하라
-------
{ date: "yyyy-MM-dd", mainMenu: ["mainMenu1", "mainMenu2"], subMenu: ["subMenu1, "subMenu2"]}`
          },
          {
            inline_data:{
              mime_type: 'image/jpeg',
              data: imageBinary
            }
          }
        ]
      }
    ]
  }

  const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  
  })

  const {candidates} = await res.json()
  const result = candidates[0].content.parts[0].text
  const menus = extractJson(result)
  const json = {menus}

  return new Response(
   JSON.stringify(json),
    { headers: { "Content-Type": "application/json" , ...corsHeaders} },
  )
})

const convertStream2base64 = (stream: ReadableStream) => {
  const reader = stream.getReader()
  const chunks: Uint8Array[] = []

  return new Promise((resolve, reject) => {
    reader.read().then(function processText({ done, value }) {
      if (done) {
        const base64 = btoa(chunks.map(chunk => String.fromCharCode(...chunk)).join(''))
        resolve(base64)
        return
      }

      chunks.push(value)
      reader.read().then(processText)
    })
  })
}

const extractJson = (text: string) => {
  const json = text.replace("```json", "").replace("```", "")
  return JSON.parse(json)
}

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/menu-detect' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
