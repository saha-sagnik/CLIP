// Jetpack Compose ASCIIText Component
export const composeASCIITextCode = `@Composable
fun ASCIIText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeASCIITextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
