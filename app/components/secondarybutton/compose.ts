// Jetpack Compose SecondaryButton Component
export const composeSecondaryButtonCode = `@Composable
fun SecondaryButton(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeSecondaryButtonProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
