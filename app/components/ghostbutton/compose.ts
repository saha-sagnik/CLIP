// Jetpack Compose GhostButton Component
export const composeGhostButtonCode = `@Composable
fun GhostButton(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeGhostButtonProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
