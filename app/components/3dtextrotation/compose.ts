// Jetpack Compose 3DTextRotation Component
export const compose3DTextRotationCode = `@Composable
fun 3DTextRotation(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const compose3DTextRotationProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
