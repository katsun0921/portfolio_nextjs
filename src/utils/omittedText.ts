export const omittedText = (text: string, maxLength: number): string => {
  // textの文字数がmaxLengthより大きかったら末尾に...を付け足して返す。
  if (text.length > maxLength) {
    // substr(何文字目からスタートするか, 最大値);
    return `${text.substring(0, maxLength)}…`;
  }
  // 文字数がオーバーしていなければそのまま返す

  return text;
};
