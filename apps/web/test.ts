import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

async function run() {
  const api = new ChatGPTUnofficialProxyAPI({
    // apiReverseProxyUrl: 'https://bypass.churchless.tech/api/conversation',
    // apiReverseProxyUrl: 'https://api.pawan.krd/backend-api/conversation',
    apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation',

    // apiReverseProxyUrl: 'http://localhost:4000/api/chat-by-access-token',

    accessToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJzaHVsdHJ1dGg4OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1ac0dXa2pNWjVtM2tHdU5ZVVdCaFd6SGwifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAyNTAxNjkwMDkxNDcwMDkwMTE0IiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4MDY3NTgxOCwiZXhwIjoxNjgxODg1NDE4LCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9mZmxpbmVfYWNjZXNzIn0.m4cFGS-nO5YdSOg7GJKyn-6vIHK_TVcNhnJ3NxWl9N5bovSQlYh7cq-e4QX5pjrsyEdG039RHn8JFmGAW2izFfOqxlPrg6p2V71NgB4eSaLuGfgfo1DxFnmoAKBay4BDdLEE34mbj8W5u2NdeG-16z8ymM5kbXY9EHvYPAoHX0MGJ-Gx0V6ovqRvE2_QaSlkrnhJ1RSW1ivl-UGbZCHwcuWHvKrncPq7z_8IdgYCGbQNdybRwRm1yCJB8IKh5ep-FHm6sGemVCnQxhE6vqGmkMHggjpyrTmNEOsYwFI9B9W4jHJ10wF6ejbxgJiGLECtAQjGxTViEO1tSNB_7Q7Jww',
  })

  const res = await api.sendMessage('请用js写一个冒泡算法？', {
    // const res = await api.sendMessage('广州邮编是什么？', {
    // onProgress: (partialResponse) => console.log(partialResponse.text),
  })

  console.log('------', res.text)
}

// run()

fetch('https://chat.openai.com/backend-api/conversation', {
  headers: {
    accept: 'text/event-stream',
    'accept-language': 'zh-CN,zh;q=0.9',
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJzaHVsdHJ1dGg4OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1ac0dXa2pNWjVtM2tHdU5ZVVdCaFd6SGwifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAyNTAxNjkwMDkxNDcwMDkwMTE0IiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4MDY3NTgxOCwiZXhwIjoxNjgxODg1NDE4LCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9mZmxpbmVfYWNjZXNzIn0.m4cFGS-nO5YdSOg7GJKyn-6vIHK_TVcNhnJ3NxWl9N5bovSQlYh7cq-e4QX5pjrsyEdG039RHn8JFmGAW2izFfOqxlPrg6p2V71NgB4eSaLuGfgfo1DxFnmoAKBay4BDdLEE34mbj8W5u2NdeG-16z8ymM5kbXY9EHvYPAoHX0MGJ-Gx0V6ovqRvE2_QaSlkrnhJ1RSW1ivl-UGbZCHwcuWHvKrncPq7z_8IdgYCGbQNdybRwRm1yCJB8IKh5ep-FHm6sGemVCnQxhE6vqGmkMHggjpyrTmNEOsYwFI9B9W4jHJ10wF6ejbxgJiGLECtAQjGxTViEO1tSNB_7Q7Jww',
    'content-type': 'application/json',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    cookie:
      'cf_clearance=t0SB6kj1qNK9gG72vxwdJuoI0p9N9US5v1GRWbDKqZg-1680438806-0-1-10111d3e.ab644074.471042de-160; intercom-device-id-dgkjq2bp=41055ad0-bffb-45a3-8b00-1780487d07db; _ga_9YTZJE58M9=GS1.1.1680449674.2.0.1680449674.0.0.0; _ga=GA1.2.205849469.1680438762; intercom-session-dgkjq2bp=aHVZU3R5U2ZOcWNZdzJyejN6cUh1S0taa1ZkNi8zVzNIUnpoOHVNVzJJbU9NTlZOOVYveER4MkNsR1F5WTk0Ly0tbTA2ZW53Z3A2U1h1UlcyOXY3S3FpQT09--728f53699bab96c848e25a63081ef8b1a3099345; __Host-next-auth.csrf-token=48b5360b616f064cdeba62ac4179317a292579b6b001ca3a2236ad6cedad4816%7Cb33a461b0998cad4755166369d963bc783c5acbb118c0bca22927914617fabad; __Secure-next-auth.callback-url=https%3A%2F%2Fchat.openai.com%2Fchat; _cfuvid=hsyAdC0at.qVTdmXocuf7G0eiVsxNGrMiYnVt_SYjQI-1680704012224-0-604800000; cf_clearance=rKeXOF4OlrEJ_v.LDIyBUuPZvZ8740jKvzeOvx99dUo-1680774518-0-1-92e62ef5.d64b2fb6.35e76396-250; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..9uQnKTysrAPPXzi2.L6KLprCYBTgdqg48W0uY4X8RsHs5GOBAXEMngBZtMC_RXCXZ5aduKwjWIFFtpsBYm4bmB0I7-U4TexBI9KDIgLlj71Th_hYkE7rsDRAdBgjfd9wvesg036vdnEVMI3kBD8l6BZ-KURikXZuSyVUktPLmZ2dcRVE1wHOyYAVclFXlMKqK1zC0xr5YyPhK_Dj6UKiwW73FhaliZI_KgfJ3NcLZphjxnn2YpDk5BPmc0J39ipF7rjD8CFClik9xT8HACOip0ASrDFzb9rP_KOdjJwNrM9lvyPA7EqXjB8ysmgbToku8BZPufXFEzaX0f9JMhKeo5yifACvsRvsfLXZ2aTuS1MSNNV5mRmOST83uXh6DhGZP_CWm2xKwj46_5AaaKOpAhZ0pVVwNmd4EcMRO0WEMG3xo2rpTyTSQoTYKIkq9fAlS7YPv6_b0RxeIvv-x5mNgh6goYw25PXchHjSZ3ZE8ysSH66Njnru0a7fP8s-tdB75RAE5Vna25tXWZkKmz1S_9kvtxwdWXYiURktJQilkKiUkBG2YCP3dp0ssOvcXxh-uHAXUOQfKaRnvzWapBMHorioyVfq1CbQ4UvdiMQuBgFO0qfQ304K_reZbRuwnSfSVPEfDGUqrb1wfiZyDCoD4MG6N8MehOJjb2LMU34h8hiR1loFos0PNxXrO6aWn_Aykm04HohBjbH1KrEpIFjlg1qomcjKlf2nffIL76AcNW6x76sfCpwTPrt5QxYyIST1lUYSC7uq5s3P2s2FbhtTug2FuF3dX9dh7A97rNqhH6mu1P0rYNKATZPpLsKL_X0KSrASw9wINgCsIqIz0N2yMwjAb36wIkfAYT9QRfwWxqcZFqERwgcNcotB1nW4ijPAtt-7BUgLBsZ8HqG-9xUwO3mztxlwNAoBa84Wny6B2TdKNMpTOGgzSQXHvwq9Nt29Bv-8awjeX3efyLlED4pBC62a5IYOADkxrtdYYPAx5K7fFgsitknuH1k0Zu6ksMKxoREcDO284CE0bFi4izXGcq31zLSrm7_8axtuzIqqu_-rbYpwMbmWDo91XxmeXm_xxQ9mHG5mG-4s_JJaCmWy3XzSP7rQiNb0oVXtw16sx-Sl05bETSYI12y-NReiXtGm2b1aRrkRV31hQy0YFkiksn6MzV8Q27An31t-7p2DlAg2h6_UOnIYvfyJilhuDiVignEaSNXUlpGTzJAHVXIAzwZ3Hx_raYTopAj3skxWxq01rfdMcnjzgF3BUYsVgEZI_ZGDHuUQCad_3hhwm18t69fibefSgdQVsa7L7kqKgM-sXR0wkknu-YMxOtAM96IqR9jQ2mwzx-2hrr8I3JdwlSWNP6jxGuQRqCKhQGYOuixA7yGz6syAQxXhmdRguSA6bd8CZBcHeJzCBqiiWFEKQVOCnI21F_J2WuYgFq3sTi9FL07iFUSRyUxOR1jaldhSZ44mO0eyJQJAkLGt7wYrEke8cyoTQBBmeiEpn5XaSpjToOyVQTl1VU9W7yFUcRg1sopMgJ_gPvQBJ87YDP8nL_rhDsufbqrGdsEF8wH9Mfxu6SgEsYAyYGpxomelx9HTOyu_yyi8yoH_XJlWLh16gQlfZqwh7pzXVFIJvPqeaxdOAq2XyfPQbbBo66FCJVFyCU7Mpx2E-J8IjbKPQ1FwC_kd43B6SV2Bxm_OgZyTPPFRvORQz1v_0wMJoewmMbaWsOGuLIqgH5Z7wqNHvMqK9bhHEHlyrq7QT-dkQn9UJabt9GI48JP3T-HWTKLoM0KrwerwNEjrU3PynetkB7qdjbeUNKAk0yxgDU3naognfbY8SO2NbymT31HSXHLT7-bf-creG32-uMjt54JT3hSo3nzQgWWeZlpHCIdbbRMeRivJQtqESZVsHFmVj_FTxOTU-bHDpipDtcHzq2axwPyMQ-UcIh9vTWOq_6OOlkJlCpPq228r81b8g7OaLFD334szfZSMEwhYv-_HPuM0Yqh-FTz4k5pjZK6pdbAGiyg9diz-u8mEH-wEBOu8Wohs7LUkR3bNHaWWNLCY6n8vPkl3oNBflvexcTnj52jqRsluo5iBPIlecbgjUYYSWMcJxBmwEsZUg2Za_EmlFv8s-JLkP5hIpBO8bVhA1nfnzYJfMBv7FMkoolFGjwp1PKipqjdJPKTD1AKtSaMC5-AjLHFZb0Ds0szcew4ddxs29qZhD958YOPFSYpFN8KD-KB9KfNUgW192DIwhHQlEx8ik6kK79yz5beTOZmgxPBLDDo5APMJUT8TMN3eQZRDHgfrDQjFZh_cRqUDdN8n41Q_wUV_vqQzGNEeqO0gKduOqHuwnpbOdVO_ecbb0tY1TPaYFp_l2hLs3T_eisq8LObXoJZzwwfFINiVfYvPTCPe2I_POU9EgpL_w_AKbUxQxxaA73xGX6u1D1BeSlHQQmd7wcb9WV4fTL9ntaxyS__Fm_2vWBI0AjLeT2KLGaoUAKzr1Dblbp0P7qaQtophs4zBUhd2gF0Mfb0DMtEg3fJsOAIi4awU.H2klwWvDQdT5FyT7GADiYw; __cf_bm=nOuw1BW55BWVVp0qhD.8XvbUWCvsGnTr9XnpUPlnRsY-1680774592-0-AdXf16pmlg+kTVpEY6h2Wj1tWcu5T8zO8tZLTKM2FLVQkNN8Fia/Gptw/ePdY24vlnQ+TiB8jzbFn3CXNUXuuwbIkrafPYlUsAfLKAV/K/+Xmvz8LWo2NiSVleGLYgcUbpebCoAWQF9OaVSqba3TOxpITctaQJ8K0gDnfIGvmi8q',
    Referer: 'https://chat.openai.com/chat',
    'Referrer-Policy': 'same-origin',
  },
  body: '{"action":"next","messages":[{"id":"ffe899f3-0dc1-4b2e-b7e8-6ff8a2c915dd","author":{"role":"user"},"content":{"content_type":"text","parts":["广州呢？"]}}],"conversation_id":"4f54621b-b295-4d14-a6fe-c3719f9010b3","parent_message_id":"6b0a7747-91b5-4cf1-957a-cd61c4b05f7d","model":"text-davinci-002-render-sha","timezone_offset_min":-480}',
  method: 'POST',
})
  .then((r) => {
    return r.text()
  })
  .then((d) => {
    console.log('ddd:', d)
  })
