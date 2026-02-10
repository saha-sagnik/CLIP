// Jetpack Compose RotatingText Component
export const composeRotatingTextCode = `@Composable
fun RotatingText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeRotatingTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
