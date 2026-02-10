// Jetpack Compose IconButton Component
export const composeIconButtonCode = `@Composable
fun IconButton(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeIconButtonProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
