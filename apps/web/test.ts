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

  // const res = await api.sendMessage('广州有什么好玩的？', {
  const res = await api.sendMessage('广州邮编是什么？', {
    onProgress: (partialResponse) => console.log(partialResponse.text),
  })

  // console.log('------', res.text)
}

run()
