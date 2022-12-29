// 封装工具函数
function padLeft(content, count, padStr) {
  count = count || 2
  padStr = padStr || "0"

  content = String(content)
  return content.padStart(count, padStr)
}