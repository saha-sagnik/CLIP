// Jetpack Compose DecryptedText Component
export const composeDecryptedTextCode = `@Composable
fun DecryptedText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeDecryptedTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
